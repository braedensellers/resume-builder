import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer"
import { format } from "date-fns"
import "../fonts"
import React from "react";

const styles = StyleSheet.create({
  page: {
    fontSize: 10,
    padding: 30,
    color: "#000",
    lineHeight: 1,
  },
  name: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 18,
  },
  location: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 4,
  },
  jobLocation: {
    fontSize: 10,
    fontStyle: "italic",
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  contactItem: {
    fontSize: 10,
    marginHorizontal: 4,
  },
  contactItemLink: {
    fontSize: 10,
    color: "blue",
    textDecoration: "underline",
    marginHorizontal: 4,
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 10,
    fontWeight: "bold",
  },
  field: {
    fontSize: 10,
    marginBottom: 2,
  },
  dates: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: -10,
  },
  bulletPoint: {
    fontSize: 10,
    marginLeft: 10,
  },
  skillList: {
    fontSize: 10,
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 6,
  },
});

const formatDate = (value?: string) => {
  if (!value) return "";
  try {
    return format(new Date(value), "MMM yyyy")
  } catch {
    return String(value)
  }
}

function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  
  return phoneNumber
}

const Divider = () => <View style={styles.divider} />

const ResumeDocument = ({ data, fontFamily }: { data: any, fontFamily: string }) => {
  if (!data) return null

  const {
    fullName,
    location,
    email,
    phone,
    links,
    summary,
    skills,
    workExperience,
    education,
    certifications,
  } = data;

  const isFilled = (val: any) =>
    Array.isArray(val) ? val.length > 0 : !!val;

  const normalizeUrl = (url: string) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <Document>
      <Page style={{ ...styles.page, fontFamily }}>
        {fullName && <Text style={styles.name}>{fullName}</Text>}
        {location && <Text style={styles.location}>{location}</Text>}
        <View style={styles.contactRow}>
          {[
            ...[email, formatPhoneNumber(phone)].filter(Boolean).map((item, i) => ({
              type: "text" as const,
              value: item,
              key: `info-${i}`,
            })),
            ...(links || []).filter(Boolean).map((url, i) => ({
              type: "link" as const,
              value: url,
              href: url.startsWith("http") ? url : `https://${url}`,
              key: `link-${i}`,
            })),
          ].map((item, i, arr) => (
            <React.Fragment key={item.key}>
              {item.type === "text" ? (
                <Text style={{ fontSize: 10 }}>{item.value}</Text>
              ) : (
                <Link
                  src={item.href}
                  style={{
                    fontSize: 10,
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  {item.value}
                </Link>
              )}
              {i < arr.length - 1 && (
                <Text style={{ fontSize: 10, marginHorizontal: 4 }}>|</Text>
              )}
            </React.Fragment>
          ))}
        </View>

        {summary && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Summary</Text>
              <Divider />
              <Text>{summary}</Text>
            </View>
          </>
        )}

        {isFilled(skills) && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <Divider />
              <Text style={styles.skillList}>{skills.join(", ")}</Text>
            </View>
          </>
        )}

        {isFilled(workExperience) && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Work Experience</Text>
              <Divider />
              {workExperience.map((job: any, i: number) => (
                <View key={i} style={{ marginBottom: 10 }}>
                  <View style={{ flexDirection: "row"}}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.subHeading}>
                        {job.company}
                      </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                      {(job.startDate || job.endDate) && (
                        <Text style={styles.dates}>
                          {formatDate(job.startDate)} – {job.currentlyWorking ? "Present" : formatDate(job.endDate)}
                        </Text>
                      )}
                    </View>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      {job.role && <Text style={styles.field}>{job.role}</Text>}
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                      {job.location && <Text style={styles.jobLocation}>
                        {job.location}
                      </Text>}
                    </View>
                  </View>

                  {job.bulletPoints?.filter(Boolean).map((point: string, j: number) => (
                    <Text key={j} style={styles.bulletPoint}>• {point}</Text>
                  ))}
                </View>
              ))}
            </View>
          </>
        )}

        {isFilled(education) && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              <Divider />
              {education.map((education: any, i: number) => (
                <View key={i} style={{ marginBottom: 10 }}>
                  <View style={{ flexDirection: "row"}}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.subHeading}>
                        {education.institution}
                      </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                      {(education.startDate || education.endDate) && (
                        <Text style={styles.dates}>
                          {formatDate(education.startDate)} – {education.currentlyAttending ? "Present" : formatDate(education.endDate)}
                        </Text>
                      )}
                    </View>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      {education.degree && <Text style={styles.field}>{education.degree}</Text>}
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                      {education.gpa && <Text style={styles.jobLocation}>
                        {education.gpa}
                      </Text>}
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </>
        )}

        {isFilled(certifications) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            <Divider />
            {certifications.map((cert: any, i: number) => (
              <View key={i} style={{ marginBottom: 6 }}>
                {cert.title && <Text style={styles.subHeading}>{cert.title}</Text>}
                {cert.description && <Text style={styles.field}>{cert.description}</Text>}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default ResumeDocument;
