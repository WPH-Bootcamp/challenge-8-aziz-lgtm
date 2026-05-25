/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 *
 * Best Practices:
 * - Gunakan PascalCase untuk interface names
 * - Export semua interfaces agar bisa digunakan di file lain
 * - Group related interfaces bersama
 * - Add comments untuk explain complex types
 */

// ==========================================
// UI Component Types
// ==========================================

/**
 * Button variant types
 * Gunakan ini untuk Button component
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';


/**
 * Example: Button Props
 * Uncomment dan sesuaikan dengan kebutuhan
 */
// export interface ButtonProps {
//   variant?: ButtonVariant;
//   size?: ButtonSize;
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
// }
export type ButtonSize = 'sm' | 'md' | 'lg';
 
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}
// ==========================================
// Section Data Types
// ==========================================

/**
 * TODO: Define interfaces untuk data yang digunakan di sections
 *
 * Contoh:
 * - ServiceItem untuk services section
 * - TeamMember untuk team section
 * - Testimonial untuk testimonials section
 * - dll.
 */

/**
 * Example: Service/Product Item
 */
// export interface ServiceItem {
//   id: number;
//   title: string;
//   description: string;
//   icon?: string;
//   image?: string;
// }
export type ServiceIconName =
  | 'globe'
  | 'mobile'
  | 'palette'
  | 'cloud'
  | 'code'
  | 'server'
  | 'shield'
  | 'check'
  | 'consulting';
 
export interface ServiceItem {
  id: number;
  icon: ServiceIconName;
  title: string;
  description: string;
}
 
export interface IndustryItem {
  id: string;
  label: string;
  tag: string;
  description: string;
}
/**
 * Example: Team Member
 */
// export interface TeamMember {
//   id: number;
//   name: string;
//   position: string;
//   bio?: string;
//   image: string;
//   socialLinks?: {
//     linkedin?: string;
//     twitter?: string;
//     github?: string;
//   };
// }
export interface ProjectItem {
  id: number;
  label: string;
  name: string;
  tags: string[];
  accentColor: string;
  year: string;
  featured?: boolean;
}
/**
 * Example: Testimonial
 */
// export interface Testimonial {
//   id: number;
//   name: string;
//   position: string;
//   company: string;
//   message: string;
//   avatar?: string;
//   rating?: number;
// }
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  accentColor: string;
  featured?: boolean;
}
// ==========================================
// Navigation Types
// ==========================================

/**
 * Navigation menu item
 */
// export interface NavItem {
//   label: string;
//   href: string;
//   external?: boolean;
// }
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
// ==========================================
// Form Types (if needed)
// ==========================================
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  services: string[];
}
/**
 * Contact form data
 */
// export interface ContactFormData {
//   name: string;
//   email: string;
//   message: string;
// }

// ==========================================
// TODO: Add more types as needed!
// ==========================================
export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
}
 
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  social: SocialLinks;
}
 
export interface StatItem {
  value: string;
  label: string;
}

 
export interface ProcessStep {
  number: string;
  title: string;
  detail: string;
}
 
export interface FaqItem {
  question: string;
  answer: string;
}
/**
 * Tips:
 * 1. Define types berdasarkan data yang kamu perlukan
 * 2. Lihat design Figma untuk understand data structure
 * 3. Make types reusable across components
 * 4. Use optional properties (?) untuk data yang tidak selalu ada
 * 5. Consider creating separate files jika types terlalu banyak
 *    Example: types/components.ts, types/data.ts, etc.
 */
