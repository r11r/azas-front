export interface Address {
    street: string;
    zipCode: string;
    city: string;
    country: string;
}

export interface ParticipantInfo {
    firstName: string;
    lastName: string;
    nickName: string;
    email: string;
    cell: string;
    gremium: string;
    tshirt: string;
    robe: boolean;
    food: string;
    allergies: string;
    excursion1: string;
    excursion2: string;
    excursion3: string;
    dayOfBirth: string;
    nationality: string;
    address: Address;
    comment: string;
    zaepfchen: boolean;
    swimmer: string;
    snorer: string;
    arrival: string;
    owntent: boolean;
}

export interface Participant {
    id: string;
    councilId: string;
    priority: number;
    approved: boolean;
    info: ParticipantInfo;
}

export interface Mascot {
    id: string;
    councilId: string;
    fullName: string;
    nickName: string;
}

export interface CouncilInfo {
    id: string;
    university: string;
    address: string;
    email: string;
    token: string;
}

export interface Council {
    info: CouncilInfo;
    participants: Participant[];
    mascots: Mascot[];
}

export interface Identifiable {
    id: string;
}
