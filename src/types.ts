export interface Experience {
    id: number;
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    current: boolean;
    location: string;
    bullets: string[];
}
  
export interface BasicInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
}
  