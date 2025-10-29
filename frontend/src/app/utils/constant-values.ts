import moment from 'moment';
import { Profession } from "../models/profession.model";
import { GermanStateEnum } from '../models/enum/german-state.enum';

export class ConstantValues {
    public static readonly mockProfessions: Profession[] = [
        {
            title: "Softwareentwickler",
            description: "Entwicklung von Web- und Mobile-Anwendungen.",
            manager: {
                firstname: "Max",
                lastname: "Müller",
                birthdate: new Date(1985, 5, 12),
                address: { street: "Hauptstraße", no: "12", plz: 80331, city: "München", state: GermanStateEnum.Bayern },
                cellphoneNumber: "+4915123456789"
            },
            address: { street: "Techweg", no: "7", plz: 80331, city: "München", state: GermanStateEnum.Bayern },
            phoneNumber: "+49891234567",
            email: "software@company.de",
            openingHours: {
                monday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                tuesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                wednesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                thursday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                friday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") }
            }
        },
        {
            title: "Arzt",
            description: "Allgemeinmedizinische Praxis.",
            manager: {
                firstname: "Anna",
                lastname: "Schmidt",
                birthdate: new Date(1978, 2, 22),
                address: { street: "Bahnhofstraße", no: "3", plz: 10115, city: "Berlin", state: GermanStateEnum.Berlin },
                cellphoneNumber: "+4915123456790"
            },
            address: { street: "Medizinalweg", no: "5", plz: 10115, city: "Berlin", state: GermanStateEnum.Berlin },
            email: "arztpraxis@beispiel.de",
            openingHours: {
                monday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                tuesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                wednesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                thursday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                friday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") }
            }
        },
        {
            title: "Lehrer",
            description: "Unterricht in Mathematik und Naturwissenschaften.",
            manager: {
                firstname: "Lukas",
                lastname: "Fischer",
                birthdate: new Date(1980, 8, 3),
                address: { street: "Schulstraße", no: "21", plz: 60528, city: "Frankfurt", state: GermanStateEnum.Hessen },
                cellphoneNumber: "+4915123456791"
            },
            address: { street: "Bildungsweg", no: "10", plz: 60528, city: "Frankfurt", state: GermanStateEnum.Hessen },
            email: "schule@frankfurt.de",
            openingHours: {
                monday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                tuesday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                wednesday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                thursday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                friday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") }
            }
        },
        {
            title: "Architekt",
            description: "Planung und Bauleitung von Wohngebäuden.",
            manager: {
                firstname: "Julia",
                lastname: "Weber",
                birthdate: new Date(1975, 11, 11),
                address: { street: "Planungsstraße", no: "8", plz: 70173, city: "Stuttgart", state: GermanStateEnum.BadenWuerttemberg },
                cellphoneNumber: "+4915123456792"
            },
            address: { street: "Bauweg", no: "15", plz: 70173, city: "Stuttgart", state: GermanStateEnum.BadenWuerttemberg },
            email: "architektur@stuttgart.de",
            openingHours: {
                monday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                tuesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                wednesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                thursday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                friday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") }
            }
        },
        {
            title: "Ingenieur",
            description: "Forschung und Entwicklung im Maschinenbau.",
            manager: {
                firstname: "Tom",
                lastname: "Schneider",
                birthdate: new Date(1982, 6, 18),
                address: { street: "Industriestraße", no: "4", plz: 50667, city: "Köln", state: GermanStateEnum.NordrheinWestfalen },
                cellphoneNumber: "+4915123456793"
            },
            address: { street: "Forschungsweg", no: "11", plz: 50667, city: "Köln", state: GermanStateEnum.NordrheinWestfalen },
            email: "ingenieur@koeln.de",
            openingHours: {
                monday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                tuesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                wednesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                thursday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                friday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") }
            }
        },
        {
            title: "Designer",
            description: "Grafik- und Produktdesign für digitale und physische Medien.",
            manager: {
                firstname: "Laura",
                lastname: "Klein",
                birthdate: new Date(1987, 3, 9),
                address: { street: "Kreativstraße", no: "2", plz: 80331, city: "München", state: GermanStateEnum.Bayern },
                cellphoneNumber: "+4915123456794"
            },
            address: { street: "Designweg", no: "6", plz: 80331, city: "München", state: GermanStateEnum.Bayern },
            email: "designer@munich.de",
            phoneNumber: "+49891234568",
            openingHours: {
                monday: { from: moment("10:00", "HH:mm"), to: moment("18:00", "HH:mm") },
                tuesday: { from: moment("10:00", "HH:mm"), to: moment("18:00", "HH:mm") },
                wednesday: { from: moment("10:00", "HH:mm"), to: moment("18:00", "HH:mm") },
                thursday: { from: moment("10:00", "HH:mm"), to: moment("18:00", "HH:mm") },
                friday: { from: moment("10:00", "HH:mm"), to: moment("16:00", "HH:mm") }
            }
        },
        {
            title: "Journalist",
            description: "Berichterstattung über aktuelle Ereignisse und Themen.",
            manager: {
                firstname: "Peter",
                lastname: "Meier",
                birthdate: new Date(1981, 11, 20),
                address: { street: "Redaktionsweg", no: "10", plz: 10115, city: "Berlin", state: GermanStateEnum.Berlin },
                cellphoneNumber: "+4915123456795"
            },
            address: { street: "Medienstraße", no: "3", plz: 10115, city: "Berlin", state: GermanStateEnum.Berlin },
            email: "journalist@berlin.de",
            phoneNumber: "+49151234570",
            openingHours: {
                monday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                tuesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                wednesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                thursday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                friday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") }
            }
        },
        {
            title: "Mechaniker",
            description: "Wartung und Reparatur von Fahrzeugen und Maschinen.",
            manager: {
                firstname: "Stefan",
                lastname: "Wolf",
                birthdate: new Date(1979, 1, 14),
                address: { street: "Werkstraße", no: "5", plz: 50667, city: "Köln", state: GermanStateEnum.NordrheinWestfalen },
                cellphoneNumber: "+4915123456796"
            },
            address: { street: "Reparaturweg", no: "8", plz: 50667, city: "Köln", state: GermanStateEnum.NordrheinWestfalen },
            email: "mechaniker@koeln.de",
            openingHours: {
                monday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                tuesday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                wednesday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                thursday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                friday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") }
            }
        },
        {
            title: "Koch",
            description: "Zubereitung von Speisen in Restaurant oder Kantine.",
            manager: {
                firstname: "Nina",
                lastname: "Becker",
                birthdate: new Date(1985, 7, 29),
                address: { street: "Küchenstraße", no: "4", plz: 60528, city: "Frankfurt", state: GermanStateEnum.Hessen },
                cellphoneNumber: "+4915123456797"
            },
            address: { street: "Kulinarikweg", no: "9", plz: 60528, city: "Frankfurt", state: GermanStateEnum.Hessen },
            email: "koch@frankfurt.de",
            openingHours: {
                monday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                tuesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                wednesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                thursday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                friday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") }
            }
        },
        {
            title: "Buchhalter",
            description: "Finanzbuchhaltung und Steuerwesen.",
            manager: {
                firstname: "Claudia",
                lastname: "Neumann",
                birthdate: new Date(1976, 10, 5),
                address: { street: "Finanzstraße", no: "12", plz: 70173, city: "Stuttgart", state: GermanStateEnum.BadenWuerttemberg },
                cellphoneNumber: "+4915123456798"
            },
            address: { street: "Abrechnungsweg", no: "2", plz: 70173, city: "Stuttgart", state: GermanStateEnum.BadenWuerttemberg },
            email: "buchhaltung@stuttgart.de",
            openingHours: {
                monday: { from: moment("08:30", "HH:mm"), to: moment("16:30", "HH:mm") },
                tuesday: { from: moment("08:30", "HH:mm"), to: moment("16:30", "HH:mm") },
                wednesday: { from: moment("08:30", "HH:mm"), to: moment("16:30", "HH:mm") },
                thursday: { from: moment("08:30", "HH:mm"), to: moment("16:30", "HH:mm") },
                friday: { from: moment("08:30", "HH:mm"), to: moment("16:30", "HH:mm") }
            }
        },
        {
            title: "Apotheker",
            description: "Beratung und Abgabe von Medikamenten in der Apotheke.",
            manager: {
                firstname: "Michael",
                lastname: "Schulz",
                birthdate: new Date(1983, 4, 17),
                address: { street: "Apothekenweg", no: "1", plz: 10115, city: "Berlin", state: GermanStateEnum.Berlin },
                cellphoneNumber: "+4915123456799"
            },
            address: { street: "Gesundheitsstraße", no: "5", plz: 10115, city: "Berlin", state: GermanStateEnum.Berlin },
            email: "apotheke@berlin.de",
            openingHours: {
                monday: { from: moment("08:00", "HH:mm"), to: moment("18:00", "HH:mm") },
                tuesday: { from: moment("08:00", "HH:mm"), to: moment("18:00", "HH:mm") },
                wednesday: { from: moment("08:00", "HH:mm"), to: moment("18:00", "HH:mm") },
                thursday: { from: moment("08:00", "HH:mm"), to: moment("18:00", "HH:mm") },
                friday: { from: moment("08:00", "HH:mm"), to: moment("18:00", "HH:mm") }
            }
        },
        {
            title: "Rechtsanwalt",
            description: "Juristische Beratung und Vertretung von Mandanten.",
            manager: {
                firstname: "Sophie",
                lastname: "Hofmann",
                birthdate: new Date(1979, 9, 30),
                address: { street: "Juristenweg", no: "7", plz: 50667, city: "Köln", state: GermanStateEnum.NordrheinWestfalen },
                cellphoneNumber: "+4915123456700"
            },
            address: { street: "Kanzleistraße", no: "3", plz: 50667, city: "Köln", state: GermanStateEnum.NordrheinWestfalen },
            email: "anwalt@koeln.de",
            openingHours: {
                monday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                tuesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                wednesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                thursday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                friday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") }
            }
        },
        {
            title: "Physiotherapeut",
            description: "Behandlung von Patienten zur Verbesserung der Beweglichkeit.",
            manager: {
                firstname: "Daniel",
                lastname: "Krause",
                birthdate: new Date(1984, 2, 12),
                address: { street: "Therapiestraße", no: "9", plz: 70173, city: "Stuttgart", state: GermanStateEnum.BadenWuerttemberg },
                cellphoneNumber: "+4915123456701"
            },
            address: { street: "Gesundheitsweg", no: "4", plz: 70173, city: "Stuttgart", state: GermanStateEnum.BadenWuerttemberg },
            email: "physio@stuttgart.de",
            openingHours: {
                monday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                tuesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                wednesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                thursday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                friday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") }
            }
        },
        {
            title: "Tierarzt",
            description: "Medizinische Betreuung von Tieren.",
            manager: {
                firstname: "Sarah",
                lastname: "Bauer",
                birthdate: new Date(1986, 6, 24),
                address: { street: "Tierweg", no: "6", plz: 80331, city: "München", state: GermanStateEnum.Bayern },
                cellphoneNumber: "+4915123456702"
            },
            address: { street: "Veterinärstraße", no: "3", plz: 80331, city: "München", state: GermanStateEnum.Bayern },
            email: "tierarzt@munich.de",
            openingHours: {
                monday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                tuesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                wednesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                thursday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                friday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") }
            }
        },
        {
            title: "Physiker",
            description: "Forschung und Lehre im Bereich Physik.",
            manager: {
                firstname: "Jan",
                lastname: "Lorenz",
                birthdate: new Date(1982, 3, 18),
                address: { street: "Forschungsstraße", no: "8", plz: 60528, city: "Frankfurt", state: GermanStateEnum.Hessen },
                cellphoneNumber: "+4915123456703"
            },
            address: { street: "Experimentweg", no: "5", plz: 60528, city: "Frankfurt", state: GermanStateEnum.Hessen },
            email: "physik@frankfurt.de",
            openingHours: {
                monday: { from: moment("08:30", "HH:mm"), to: moment("16:30", "HH:mm") },
                tuesday: { from: moment("08:30", "HH:mm"), to: moment("16:30", "HH:mm") },
                wednesday: { from: moment("08:30", "HH:mm"), to: moment("16:30", "HH:mm") },
                thursday: { from: moment("08:30", "HH:mm"), to: moment("16:30", "HH:mm") },
                friday: { from: moment("08:30", "HH:mm"), to: moment("16:30", "HH:mm") }
            }
        },
        {
            title: "Softwareentwickler",
            description: "Entwicklung von Web- und Mobile-Anwendungen.",
            manager: {
                firstname: "Anna",
                lastname: "Müller", // reused first+new last
                birthdate: new Date(1985, 5, 12),
                address: { street: "Techweg", no: "14", plz: 80331, city: "München", state: GermanStateEnum.Bayern },
                cellphoneNumber: "+4915123456710"
            },
            address: { street: "Programmierungsweg", no: "8", plz: 80331, city: "München", state: GermanStateEnum.Bayern },
            email: "dev1@company.de",
            openingHours: {
                monday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                tuesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                wednesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                thursday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                friday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") }
            }
        },
        {
            title: "Arzt",
            description: "Allgemeinmedizinische Praxis.",
            manager: {
                firstname: "Max",
                lastname: "Schmidt", // swapped first name from previous
                birthdate: new Date(1978, 2, 22),
                address: { street: "Bahnhofstraße", no: "7", plz: 10115, city: "Berlin", state: GermanStateEnum.Berlin },
                cellphoneNumber: "+4915123456711"
            },
            address: { street: "Medizinalweg", no: "6", plz: 10115, city: "Berlin", state: GermanStateEnum.Berlin },
            email: "arzt2@beispiel.de",
            openingHours: {
                monday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                tuesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                wednesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                thursday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                friday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") }
            }
        },
        {
            title: "Lehrer",
            description: "Unterricht in Mathematik und Naturwissenschaften.",
            manager: {
                firstname: "Laura",
                lastname: "Fischer", // reused name combo
                birthdate: new Date(1980, 8, 3),
                address: { street: "Bildungsweg", no: "12", plz: 60528, city: "Frankfurt", state: GermanStateEnum.Hessen },
                cellphoneNumber: "+4915123456712"
            },
            address: { street: "Schulstraße", no: "7", plz: 60528, city: "Frankfurt", state: GermanStateEnum.Hessen },
            email: "schule2@frankfurt.de",
            openingHours: {
                monday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                tuesday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                wednesday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                thursday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                friday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") }
            }
        },
        {
            title: "Architekt",
            description: "Planung und Bauleitung von Wohngebäuden.",
            manager: {
                firstname: "Tom",
                lastname: "Weber", // first+new last
                birthdate: new Date(1975, 11, 11),
                address: { street: "Bauweg", no: "9", plz: 70173, city: "Stuttgart", state: GermanStateEnum.BadenWuerttemberg },
                cellphoneNumber: "+4915123456713"
            },
            address: { street: "Planungsstraße", no: "15", plz: 70173, city: "Stuttgart", state: GermanStateEnum.BadenWuerttemberg },
            email: "architektur2@stuttgart.de",
            openingHours: {
                monday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                tuesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                wednesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                thursday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                friday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") }
            }
        },
        {
            title: "Ingenieur",
            description: "Forschung und Entwicklung im Maschinenbau.",
            manager: {
                firstname: "Julia",
                lastname: "Schneider", // swapped names
                birthdate: new Date(1982, 6, 18),
                address: { street: "Forschungsweg", no: "14", plz: 50667, city: "Köln", state: GermanStateEnum.NordrheinWestfalen },
                cellphoneNumber: "+4915123456714"
            },
            address: { street: "Industriestraße", no: "11", plz: 50667, city: "Köln", state: GermanStateEnum.NordrheinWestfalen },
            email: "ingenieur2@koeln.de",
            openingHours: {
                monday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                tuesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                wednesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                thursday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                friday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") }
            }
        },
        {
            title: "Designer",
            description: "Grafik- und Produktdesign für digitale und physische Medien.",
            manager: {
                firstname: "Max",
                lastname: "Klein",
                birthdate: new Date(1987, 3, 9),
                address: { street: "Designweg", no: "6", plz: 80331, city: "München", state: GermanStateEnum.Bayern },
                cellphoneNumber: "+4915123456715"
            },
            address: { street: "Kreativstraße", no: "2", plz: 80331, city: "München", state: GermanStateEnum.Bayern },
            email: "designer2@munich.de",
            openingHours: {
                monday: { from: moment("10:00", "HH:mm"), to: moment("18:00", "HH:mm") },
                tuesday: { from: moment("10:00", "HH:mm"), to: moment("18:00", "HH:mm") },
                wednesday: { from: moment("10:00", "HH:mm"), to: moment("18:00", "HH:mm") },
                thursday: { from: moment("10:00", "HH:mm"), to: moment("18:00", "HH:mm") },
                friday: { from: moment("10:00", "HH:mm"), to: moment("16:00", "HH:mm") }
            }
        },
        {
            title: "Journalist",
            description: "Berichterstattung über aktuelle Ereignisse und Themen.",
            manager: {
                firstname: "Laura",
                lastname: "Meier",
                birthdate: new Date(1981, 11, 20),
                address: { street: "Medienstraße", no: "3", plz: 10115, city: "Berlin", state: GermanStateEnum.Berlin },
                cellphoneNumber: "+4915123456716"
            },
            address: { street: "Redaktionsweg", no: "10", plz: 10115, city: "Berlin", state: GermanStateEnum.Berlin },
            email: "journalist2@berlin.de",
            openingHours: {
                monday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                tuesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                wednesday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                thursday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") },
                friday: { from: moment("08:00", "HH:mm"), to: moment("16:00", "HH:mm") }
            }
        },
        {
            title: "Mechaniker",
            description: "Wartung und Reparatur von Fahrzeugen und Maschinen.",
            manager: {
                firstname: "Stefan",
                lastname: "Becker",
                birthdate: new Date(1979, 1, 14),
                address: { street: "Reparaturweg", no: "8", plz: 50667, city: "Köln", state: GermanStateEnum.NordrheinWestfalen },
                cellphoneNumber: "+4915123456717"
            },
            address: { street: "Werkstraße", no: "5", plz: 50667, city: "Köln", state: GermanStateEnum.NordrheinWestfalen },
            email: "mechaniker2@koeln.de",
            openingHours: {
                monday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                tuesday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                wednesday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                thursday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") },
                friday: { from: moment("07:30", "HH:mm"), to: moment("15:30", "HH:mm") }
            }
        },
        {
            title: "Koch",
            description: "Zubereitung von Speisen in Restaurant oder Kantine.",
            manager: {
                firstname: "Nina",
                lastname: "Müller",
                birthdate: new Date(1985, 7, 29),
                address: { street: "Kulinarikweg", no: "9", plz: 60528, city: "Frankfurt", state: GermanStateEnum.Hessen },
                cellphoneNumber: "+4915123456718"
            },
            address: { street: "Küchenstraße", no: "4", plz: 60528, city: "Frankfurt", state: GermanStateEnum.Hessen },
            email: "koch2@frankfurt.de",
            openingHours: {
                monday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                tuesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                wednesday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                thursday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") },
                friday: { from: moment("09:00", "HH:mm"), to: moment("17:00", "HH:mm") }
            }
        }
    ];
}