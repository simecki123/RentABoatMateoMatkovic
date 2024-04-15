import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en', // Specify the default language (e.g., 'en' for English)
    resources: {
      en: {
        translation: {
          title: 'August Boats',
          option1: 'Boats for Rent',
          option2: 'Private Tours',
          option3: 'Terms of Use',
          option4: 'Contacts',
          meetOurTeam: "Meet our team",
          aboutUsText: "We are a team of passionate individuals dedicated to delivering innovative solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.",
          boatsForRentTitle: "Boats for Rent",
          boatLength: "Length: ",
          boatWidth: "Width: ",
          boatEngine: "Engine: ",
          numOfPersons: "Number of persons: ",
          boatPrice: "Price: ",
          seeMore: "See more ",
          followUs: "Follow us: ",
          paymentMethods: "Payment methods",
          paymentText: "All payments are made on the spot by appointment.",
          rentABoat: "Rent a boat",
          privateToursText: "We are a team of passionate individuals dedicated to delivering innovative solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.",
          termsOfUseText: "We are a team of passionate individuals dedicated to delivering innovative solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.",
          rentThisBoat: "Rent this boat",
          nameSurname: "Name and Surname",
          Email: "E-mail",
          mobileNumber: "Mobile number",
          startDate: "Start Date",
          endDate: "End Date",
          message: "Message",
          iAgree: "I Agree",
          iAgreeMessage: "By sending an inquiry through this form, you acknowledge you are familiar with the privacy policy and agree with it. With this, you also give consent (permission) for the collection and processing of personal data specified in the form, and which are necessary for us to be able to accommodate your request.",
          bookTheBoat: "Book the boat",
          tnxForRenting: "Thank you for renting. We will contact you soon!",
          rentalPrices: "Rental Prices: ",
          rentalprice1: "*Stated prices are for one day rental",
          rentalprice2:"*The half-day rental price is 70% of the full day rental price",
          rentalprice3:"*Skipper price is 100 € per day",
          rentalprice4:"*Fuel is not included in the price",
          rentalprice5:"*The security deposit is 600 euros",
          rentalprice6:"*Payment when taking over the boat",
          description: "Description: ",
          technicalCharacteristicsAndAdditionalEqouipment: "Technical characteristics and additional equipment:",
          technicalCharacteristics: "Technical characteristics:",
          AdditionalEquipment: "Additional equipment:"
        },
      },
      hr: {
        translation: {
          title: 'August brodovi',
          option1: 'Najam brodova',
          option2: 'Privatni izleti',
          option3: 'Uvjeti korištenja',
          option4: 'Kontakti',
          meetOurTeam: "Upoznajte naš tim",
          aboutUsText: "Mi smo tim strastvenih pojedinaca posvećenih pružanju inovativnih rješenja. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.",
          boatsForRentTitle: "Najam brodova",
          boatLength: "Dužina: ",
          boatWidth: "Širina: ",
          boatEngine: "Motor: ",
          numOfPersons: "Broj osoba: ",
          boatPrice: "Cijena: ",
          seeMore: "Saznajte više ",
          followUs: "Pratite nas: ",
          paymentMethods: "Načini plaćanja",
          paymentText: "Sve uplate se vrše na licu mjesta prema dogovoru.",
          rentABoat: "Najam broda",
          privateToursText: "Mi smo tim strastvenih pojedinaca posvećenih pružanju inovativnih rješenja. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.",
          termsOfUseText: "Mi smo tim strastvenih pojedinaca posvećenih pružanju inovativnih rješenja. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.",
          rentThisBoat: "Unajmi ovaj brod",
          nameSurname: "Ime i prezime",
          Email: "E-mail",
          mobileNumber: "Broj mobitela",
          startDate: "Datum početka",
          endDate: "Datum završetka",
          message: "Poruka",
          iAgree: "Slažem se",
          iAgreeMessage: "Slanjem upita putem ovog obrasca potvrđujete da ste upoznati s pravilima privatnosti i suglasni s njima. Također dajete pristanak (dozvolu) za prikupljanje i obradu osobnih podataka navedenih u obrascu, a koji su nam potrebni kako bismo mogli udovoljiti vašem zahtjevu.",
          bookTheBoat: "Rezerviraj brod",
          tnxForRenting: "Hvala na najmu. Kontaktirat ćemo vas uskoro!",
          rentalPrices: "Cijena najma: ",
          rentalprice1: "*Navedene cijene su za najam na dan",
          rentalprice2:"*Cijena najma pola dana iznosi 70% cijene najma za cijeli dan",
          rentalprice3:"*Cijena skipera je 100 € dnevno",
          rentalprice4:"*Gorivo nije uključeno u cijenu",
          rentalprice5:"*Sigurnosni polog iznosi 600 eura",
          rentalprice6:"*Plaćanje prilikom preuzimanja broda",
          description: "Opis: ",
          technicalCharacteristicsAndAdditionalEqouipment: "Tehničke karakteristike i dodatna oprema:",
          technicalCharacteristics: "Tehničke karakteristike:",
          AdditionalEquipment: "Dodatna oprema:",
        },
      },
      ger: {
        translation: {
          title: 'August Boote',
          option1: 'Boote mieten',
          option2: 'Private Touren',
          option3: 'Nutzungsbedingungen',
          option4: 'Kontakte',
          meetOurTeam: "Unser Team kennenlernen",
          aboutUsText: "Wir sind ein Team leidenschaftlicher Individuen, das sich der Bereitstellung innovativer Lösungen verschrieben hat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.",
          boatsForRentTitle: "Boote mieten",
          boatLength: "Länge: ",
          boatWidth: "Breite: ",
          boatEngine: "Motor: ",
          numOfPersons: "Anzahl der Personen: ",
          boatPrice: "Preis: ",
          seeMore: "Mehr erfahren ",
          followUs: "Folge uns: ",
          paymentMethods: "Zahlungsmethoden",
          paymentText: "Alle Zahlungen erfolgen vor Ort nach Vereinbarung.",
          rentABoat: "Boot mieten",
          privateToursText: "Wir sind ein Team leidenschaftlicher Individuen, das sich der Bereitstellung innovativer Lösungen verschrieben hat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.",
          termsOfUseText: "Wir sind ein Team leidenschaftlicher Individuen, das sich der Bereitstellung innovativer Lösungen verschrieben hat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.",
          rentThisBoat: "Dieses Boot mieten",
          nameSurname: "Name und Nachname",
          Email: "E-mail",
          mobileNumber: "Handynummer",
          startDate: "Startdatum",
          endDate: "Enddatum",
          message: "Nachricht",
          iAgree: "Ich stimme zu",
          iAgreeMessage: "Indem Sie eine Anfrage über dieses Formular senden, bestätigen Sie, dass Sie mit den Datenschutzbestimmungen vertraut sind und diesen zustimmen. Sie geben auch Ihre Zustimmung (Erlaubnis) zur Erhebung und Verarbeitung der im Formular angegebenen personenbezogenen Daten, die für uns erforderlich sind, um Ihre Anfrage bearbeiten zu können.",
          bookTheBoat: "Boot buchen",
          tnxForRenting: "Vielen Dank für die Anmietung. Wir werden uns bald bei Ihnen melden!",
          rentalPrices: "Mietpreise: ",
          rentalprice1: "*Angegebene Preise gelten für einen Tag Mietdauer",
          rentalprice2:"*Der Halbtagesmietpreis beträgt 70% des Mietpreises für einen ganzen Tag",
          rentalprice3:"*Skipper-Preis beträgt 100 € pro Tag",
          rentalprice4:"*Kraftstoff ist nicht im Preis inbegriffen",
          rentalprice5:"*Die Kaution beträgt 600 Euro",
          rentalprice6:"*Zahlung bei Übernahme des Bootes",
          description: "Beschreibung",
          technicalCharacteristicsAndAdditionalEqouipment: "Technische Merkmale und zusätzliche Ausstattung:",
          technicalCharacteristics: "Technische Merkmale:",
          AdditionalEquipment: "Zusätzliche Ausstattung:",
        },
      },
      it: {
        translation: {
          title: 'August Barche',
          option1: 'Noleggio barche',
          option2: 'Tour privati',
          option3: 'Termini di utilizzo',
          option4: 'Contatti',
          meetOurTeam: "Incontra il nostro team",
          aboutUsText: "Siamo un team di individui appassionati dedicati alla fornitura di soluzioni innovative. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.",
          boatsForRentTitle: "Noleggio barche",
          boatLength: "Lunghezza: ",
          boatWidth: "Larghezza: ",
          boatEngine: "Motore: ",
          numOfPersons: "Numero di persone: ",
          boatPrice: "Prezzo: ",
          seeMore: "Scopri di più ",
          followUs: "Seguici: ",
          paymentMethods: "Metodi di pagamento",
          paymentText: "Tutti i pagamenti vengono effettuati in loco su appuntamento.",
          rentABoat: "Noleggia una barca",
          privateToursText: "Siamo un team di individui appassionati dedicati alla fornitura di soluzioni innovative. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.",
          termsOfUseText: "Siamo un team di individui appassionati dedicati alla fornitura di soluzioni innovative. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.",
          rentThisBoat: "Noleggia questa barca",
          nameSurname: "Nome e cognome",
          Email: "E-mail",
          mobileNumber: "Numero di telefono",
          startDate: "Data di inizio",
          endDate: "Data di fine",
          message: "Messaggio",
          iAgree: "Accetto",
          iAgreeMessage: "Inviando una richiesta tramite questo modulo, confermi di essere a conoscenza dell'informativa sulla privacy e di accettarla. Con questo, acconsenti (autorizzi) alla raccolta e al trattamento dei dati personali specificati nel modulo e necessari per poter soddisfare la tua richiesta.",
          bookTheBoat: "Prenota la barca",
          tnxForRenting: "Grazie per aver noleggiato. Ti contatteremo presto!",
          rentalPrices: "Prezzi di noleggio: ",
          rentalprice1: "*I prezzi indicati sono per il noleggio di un giorno",
          rentalprice2:"*Il prezzo del noleggio per mezza giornata è il 70% del prezzo del noleggio per intera giornata",
          rentalprice3:"*Il prezzo dello skipper è di 100 € al giorno",
          rentalprice4:"*Il carburante non è incluso nel prezzo",
          rentalprice5:"*Il deposito cauzionale è di 600 euro",
          rentalprice6:"*Pagamento al momento del ritiro della barca",
          description: "Descrizione",
          technicalCharacteristicsAndAdditionalEqouipment: "Caratteristiche tecniche ed equipaggiamento aggiuntivo:",
          technicalCharacteristics: "Caratteristiche tecniche:",
          AdditionalEquipment: "Equipaggiamento aggiuntivo:",
        },
      },
    },
  });

export default i18n;
