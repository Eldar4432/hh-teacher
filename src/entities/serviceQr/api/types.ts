export interface IService {
  id_uslug: number;
  uslugi: string;
  uslugi_kg: string;
  uslugi_en: string;
}
export interface ApiServiceData {
  data?: IService;
  error?: boolean;
}
