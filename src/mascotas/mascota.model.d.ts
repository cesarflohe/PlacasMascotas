export interface mascota{
    id: number;
    nombre: string;
    foto: string;
}

export interface landingPageDTO {
    Perrito?: mascota[];
    Gatito?: mascota[];
}