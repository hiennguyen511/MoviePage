declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

interface ImportMetaEnv {
    readonly VITE_API_KEY: string;
    readonly VITE_IMAGE_URL: string;
    // Thêm các biến môi trường khác ở đây
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }