/* Ursprüngliche 50 Lernkarten (Version 1) */
const LEGACY_CARDS = [
    /* ---------- Griechische Landschildkröten ---------- */
    {
      id: "sk-01", category: "Griechische Landschildkröten", tagColor: "#C8603E",
      title: "Ein Haus aus Knochen und Horn",
      story: "Der Panzer der Griechischen Landschildkröte ist kein Gehäuse, in das sie hineinschlüpft – er ist fest mit ihrem Skelett verwachsen. Der gewölbte Rückenpanzer (Carapax) besteht aus knöchernen Platten, die mit Rippen und Wirbelsäule verschmolzen sind; der flache Bauchpanzer (Plastron) ist über seitliche Brücken mit ihm verbunden. Darüber liegen Hornschilde aus Keratin, deren Nähte versetzt zu den Knochennähten verlaufen – wie bei einer gut gemauerten Wand erhöht das die Stabilität. Typisch für Testudo hermanni sind der meist zweigeteilte Schild über dem Schwanz und ein kräftiger Hornnagel an der Schwanzspitze.",
      funFact: "Der Panzer ist durchblutet und von Nerven durchzogen: Schildkröten spüren Berührungen auf dem Rücken sehr genau – manche Tiere strecken sich sogar sichtlich entspannt, wenn man sie dort sanft krault.",
      quiz: {
        question: "Welches Merkmal unterscheidet die Griechische von der Maurischen Landschildkröte?",
        options: ["Ein beweglicher Hinterlappen am Bauchpanzer", "Ein Hornnagel an der Schwanzspitze", "Hornige Sporne an den Oberschenkeln"],
        correct: 1,
        explanation: "Den Hornnagel an der Schwanzspitze besitzt Testudo hermanni. Oberschenkelsporne und ein beweglicher Plastron-Hinterlappen sind dagegen typische Merkmale der Maurischen Landschildkröte (Testudo graeca)."
      }
    },
    {
      id: "sk-02", category: "Griechische Landschildkröten", tagColor: "#C8603E",
      title: "Monate im Energiesparmodus",
      story: "Als wechselwarmes Tier kann die Griechische Landschildkröte ihre Körpertemperatur nicht selbst regulieren. Werden im Herbst die Tage kürzer und die Nächte kühler, stellt sie das Fressen ein, entleert ihren Darm und gräbt sich in lockeren Boden oder unter Laub ein. In der Winterstarre sinken Herzschlag und Atmung drastisch, der Stoffwechsel läuft nur noch auf Sparflamme – in freier Natur oft von November bis März. Ideal sind konstant etwa 4 bis 6 °C: Frost kann Augen und Gewebe schädigen, zu hohe Temperaturen zehren dagegen die Fettreserven vorzeitig auf.",
      funFact: "Die Harnblase dient als Wasserspeicher: Während der Winterstarre kann die Schildkröte daraus Wasser zurück in den Körper aufnehmen – ein eingebauter Notvorrat für die lange Ruhezeit.",
      quiz: {
        question: "Welche Temperatur gilt als ideal für die Winterstarre?",
        options: ["Konstant etwa 4 bis 6 °C", "Etwa 12 bis 15 °C", "Dauerhaft unter −5 °C"],
        correct: 0,
        explanation: "Bei 4 bis 6 °C ist der Stoffwechsel optimal gedrosselt. Wärmer verbraucht zu viele Reserven, Frost führt zu gefährlichen Gewebeschäden."
      }
    },
    {
      id: "sk-03", category: "Griechische Landschildkröten", tagColor: "#C8603E",
      title: "Zuhause zwischen Macchia und Garrigue",
      story: "Wild lebt Testudo hermanni rund um das nördliche Mittelmeer: Die westliche Unterart kommt etwa in Nordostspanien, Südfrankreich, auf Korsika, Sardinien, Sizilien und in Italien vor, die östliche vom Balkan bis nach Griechenland. Sie bevorzugt ein Mosaik aus immergrünem Buschland (Macchia), niedriger Felsheide (Garrigue), lichten Eichenwäldern und kräuterreichen Wiesen. Entscheidend ist der Wechsel aus sonnigen Plätzen zum Aufwärmen und schattigen Verstecken zum Abkühlen. Im Hochsommer ist sie vor allem morgens und am späten Nachmittag aktiv; bei großer Hitze legt sie sogar eine Sommerruhe ein.",
      funFact: "Die größte Gefahr für wilde Bestände in Südfrankreich sind Waldbrände – Schildkröten sind schlicht zu langsam, um den Flammen zu entkommen. Im Massif des Maures päppeln Auffangstationen deshalb gezielt verletzte Tiere wieder auf.",
      quiz: {
        question: "Welche Landschaft ist ein typischer Lebensraum der Griechischen Landschildkröte?",
        options: ["Feuchte Auwälder mit regelmäßiger Überflutung", "Alpine Geröllhalden oberhalb von 2.500 m", "Mediterrane Macchia mit sonnigen Lichtungen"],
        correct: 2,
        explanation: "Die Macchia bietet genau das nötige Mosaik: sonnige Offenflächen zum Aufwärmen, dichtes Gebüsch als Schattenversteck und vielfältige Wildkräuter als Nahrung."
      }
    },
    {
      id: "sk-04", category: "Griechische Landschildkröten", tagColor: "#C8603E",
      title: "Wildkräuter statt Erdbeeren",
      story: "Griechische Landschildkröten sind Pflanzenfresser, deren Verdauung auf karge, faserreiche Kost ausgelegt ist. In der Natur fressen sie vor allem Wildkräuter wie Löwenzahn, Wegerich, Wicken, Disteln und Blüten – nährstoffarm, aber reich an Rohfaser und Kalzium. Zu eiweiß- oder zuckerreiches Futter wie Obst, Supermarktsalat oder gar Tierfutter lässt den Panzer zu schnell wachsen: Es bilden sich unnatürliche Höcker, und die Nieren werden belastet. Für einen stabilen Panzer braucht die Schildkröte außerdem Kalzium und UV-Licht, mit dessen Hilfe sie in der Haut Vitamin D3 bildet.",
      funFact: "Schildkröten haben keine Zähne. Stattdessen schneiden sie mit scharfkantigen Hornleisten – ähnlich einem Vogelschnabel –, die sich ein Leben lang durch Nachwachsen erneuern.",
      quiz: {
        question: "Was begünstigt die Höckerbildung am Panzer?",
        options: ["Faserreiche Wildkräuter", "Zu eiweiß- und zuckerreiches Futter", "Regelmäßiges Sonnenbaden"],
        correct: 1,
        explanation: "Zu gehaltvolles Futter beschleunigt das Wachstum so stark, dass sich die Hornschilde pyramidenartig auftürmen. Faserreiche Wildkräuter und Sonnenlicht sind dagegen genau richtig."
      }
    },
    {
      id: "sk-05", category: "Griechische Landschildkröten", tagColor: "#C8603E",
      title: "Das Nest entscheidet über das Geschlecht",
      story: "Im Frühsommer gräbt das Weibchen mit den Hinterbeinen eine flaschenförmige Grube in sonnenbeschienenen Boden und legt meist zwei bis zwölf Eier hinein. Danach überlässt es das Gelege sich selbst – die Sonnenwärme übernimmt das Brüten. Nach etwa acht bis zwölf Wochen schlüpfen winzige Jungtiere, die oft kaum mehr als zehn Gramm wiegen. Erstaunlich: Die Temperatur im Nest legt fest, ob Männchen oder Weibchen entstehen – bei kühlerer Bebrütung um 26 bis 30 °C überwiegend Männchen, ab etwa 31,5 °C überwiegend Weibchen.",
      funFact: "Frisch geschlüpfte Schildkröten tragen einen winzigen „Eizahn“ auf der Schnauze, mit dem sie die Schale von innen aufritzen. Er fällt schon nach wenigen Tagen ab.",
      quiz: {
        question: "Was bestimmt bei der Griechischen Landschildkröte das Geschlecht der Jungtiere?",
        options: ["Die Temperatur während der Bebrütung", "Geschlechtschromosomen wie beim Menschen", "Die Größe des Eis"],
        correct: 0,
        explanation: "Sie hat eine temperaturabhängige Geschlechtsbestimmung: Schon wenige Grad Unterschied im Nest verschieben das Verhältnis von Männchen und Weibchen deutlich."
      }
    },

    /* ---------- Griechische Mythologie ---------- */
    {
      id: "gm-01", category: "Griechische Mythologie", tagColor: "#7C3AED",
      title: "Am Anfang war das Chaos",
      story: "Laut Hesiods „Theogonie“, dem wichtigsten griechischen Schöpfungsgedicht aus dem 7. Jahrhundert vor Christus, stand am Anfang das Chaos – eine gähnende, leere Weite. Aus ihr gingen Gaia, die Erde, der finstere Tartaros und Eros, die Kraft der Anziehung, hervor. Gaia gebar Uranos, den Himmel, und mit ihm die zwölf Titanen, die einäugigen Kyklopen und die hundertarmigen Hekatoncheiren. Weil Uranos seine Kinder im Leib der Erde gefangen hielt, stiftete Gaia ihren jüngsten Sohn Kronos an, den Vater mit einer Sichel zu entmachten.",
      funFact: "„Chaos“ bedeutete ursprünglich gar nicht Unordnung, sondern „klaffender Raum“ – das Wort ist mit dem griechischen Verb für „gähnen“ verwandt. Die heutige Bedeutung von Durcheinander entstand erst viel später.",
      quiz: {
        question: "Wer entmachtete den Himmelsgott Uranos?",
        options: ["Zeus", "Prometheus", "Kronos"],
        correct: 2,
        explanation: "Kronos, der jüngste Titan, griff auf Gaias Anstiftung zur Sichel. Später ereilte ihn selbst dasselbe Schicksal – durch seinen Sohn Zeus."
      }
    },
    {
      id: "gm-02", category: "Griechische Mythologie", tagColor: "#7C3AED",
      title: "Ein Stein in Windeln",
      story: "Kronos fürchtete eine Prophezeiung, nach der ihn eines seiner Kinder stürzen würde – also verschlang er Hestia, Demeter, Hera, Hades und Poseidon gleich nach der Geburt. Als Zeus zur Welt kam, versteckte ihn seine Mutter Rhea in einer Höhle auf Kreta und reichte Kronos stattdessen einen in Windeln gewickelten Stein, den er ahnungslos hinunterschlang. Erwachsen geworden, zwang Zeus seinen Vater, die Geschwister wieder auszuspeien. Es folgte die Titanomachie, ein zehnjähriger Krieg zwischen Göttern und Titanen, den die Olympier mit Hilfe der Kyklopen gewannen – sie schmiedeten Zeus seinen Blitz.",
      funFact: "Der ausgespiene Stein soll später in Delphi aufbewahrt worden sein. Der antike Reiseschriftsteller Pausanias beschreibt dort einen kleinen Stein, den man täglich mit Öl salbte – er galt als eben jener Stein des Kronos.",
      quiz: {
        question: "Was verschlang Kronos anstelle des neugeborenen Zeus?",
        options: ["Einen Granatapfel", "Einen in Windeln gewickelten Stein", "Ein junges Lamm"],
        correct: 1,
        explanation: "Rhea überlistete Kronos mit einem gewickelten Stein. So konnte Zeus auf Kreta heimlich aufwachsen und später seinen Vater stürzen."
      }
    },
    {
      id: "gm-03", category: "Griechische Mythologie", tagColor: "#7C3AED",
      title: "Zwölf Götter auf dem Olymp",
      story: "Die wichtigsten Götter der Griechen residierten der Sage nach auf dem Olymp, mit 2.918 Metern dem höchsten Berg Griechenlands. Zu den Zwölf Olympiern zählen meist Zeus, Hera, Poseidon, Demeter, Athene, Apollon, Artemis, Ares, Aphrodite, Hephaistos, Hermes sowie Hestia oder Dionysos. Sie ernährten sich von Nektar und Ambrosia, und statt Blut floss in ihren Adern das goldene Ichor. Hades gehört, obwohl er ein Bruder des Zeus ist, meist nicht dazu – er herrscht fern vom Olymp über die Unterwelt.",
      funFact: "Die Liste der Zwölf war nie ganz fest. Einer späten Überlieferung zufolge überließ die friedliebende Herdgöttin Hestia ihren Platz freiwillig dem jungen Weingott Dionysos, um Streit zu vermeiden.",
      quiz: {
        question: "Warum zählt Hades meist nicht zu den Zwölf Olympiern?",
        options: ["Er herrscht in der Unterwelt statt auf dem Olymp", "Er ist kein Gott, sondern ein Titan", "Er wurde von Zeus verbannt"],
        correct: 0,
        explanation: "Hades ist ein vollwertiger Gott und Bruder des Zeus – sein Reich liegt aber unter der Erde. Deshalb wird er meist nicht zu den Göttern des Olymp gezählt."
      }
    },
    {
      id: "gm-04", category: "Griechische Mythologie", tagColor: "#7C3AED",
      title: "Prometheus, der Vorausdenkende",
      story: "Der Titan Prometheus, dessen Name „der Vorausdenkende“ bedeutet, gilt als großer Freund der Menschen – manchen Sagen zufolge formte er sie sogar aus Lehm. Beim Opfer in Mekone überlistete er Zeus: Er ließ ihn zwischen glänzend in Fett gehüllten Knochen und unscheinbar verpacktem Fleisch wählen, und Zeus griff zu den Knochen. Zur Strafe verweigerte Zeus den Menschen das Feuer, doch Prometheus stahl es und brachte es ihnen heimlich zurück. Dafür wurde er an einen Felsen im Kaukasus geschmiedet, wo ein Adler täglich von seiner Leber fraß, die nachts nachwuchs – bis Herakles ihn befreite.",
      funFact: "Die menschliche Leber kann tatsächlich nachwachsen: Selbst wenn große Teile entfernt werden, regeneriert sie sich innerhalb weniger Wochen fast vollständig. Ob die alten Griechen das wussten, ist unter Historikern umstritten.",
      quiz: {
        question: "Worin schmuggelte Prometheus das Feuer zu den Menschen?",
        options: ["In einer bronzenen Urne", "In einem hohlen Riesenfenchel-Stängel", "In einer Muschel des Poseidon"],
        correct: 1,
        explanation: "Im trockenen Mark des Riesenfenchels (griechisch Narthex) kann Glut lange weiterglimmen – ein cleveres Detail, das zeigt, wie praktisch die Mythen oft gedacht waren."
      }
    },
    {
      id: "gm-05", category: "Griechische Mythologie", tagColor: "#7C3AED",
      title: "Hades, Herr der Schatten",
      story: "Nach dem Sieg über die Titanen losten die Brüder Zeus, Poseidon und Hades die Welt unter sich aus: Zeus erhielt den Himmel, Poseidon das Meer und Hades die Unterwelt. Anders als oft dargestellt, war er kein Bösewicht, sondern ein strenger, gerechter Herrscher, der über die Ordnung des Totenreichs wachte. Der Fährmann Charon setzte die Seelen über den Fluss Acheron, der dreiköpfige Hund Kerberos bewachte das Tor. Weil Persephone, die Hades entführt hatte, in der Unterwelt Granatapfelkerne aß, muss sie jedes Jahr einige Monate bei ihm verbringen – dann trauert ihre Mutter Demeter, und die Natur ruht im Winter.",
      funFact: "Hades trug auch den Beinamen Plouton, „der Reiche“ – denn aus der Erde stammen Getreide, Silber und Gold. Über den römischen Pluto gelangte dieser Name schließlich auch an den Zwergplaneten.",
      quiz: {
        question: "Wie erklärt der Mythos von Persephone den Winter?",
        options: ["Zeus verbannt die Sonne für einige Monate", "Hades lässt den Fluss Styx über die Erde treten", "Persephone weilt einen Teil des Jahres in der Unterwelt, und Demeter trauert"],
        correct: 2,
        explanation: "Solange Persephone bei Hades ist, lässt ihre Mutter Demeter, Göttin des Ackerbaus, aus Kummer nichts wachsen. Kehrt die Tochter zurück, erblüht die Natur im Frühling neu."
      }
    },

    /* ---------- Deutsche Vogelwelt ---------- */
    {
      id: "dv-01", category: "Deutsche Vogelwelt", tagColor: "#0EA5E9",
      title: "Bleiben oder ziehen?",
      story: "Viele heimische Brutvögel verlassen Deutschland im Herbst – andere trotzen dem Winter. Standvögel wie Kohlmeise, Haussperling oder Buntspecht bleiben ganzjährig und stellen im Winter auf Samen und Vorräte um. Langstreckenzieher wie Mauersegler, Kuckuck oder Rauchschwalbe fliegen bis ins Afrika südlich der Sahara, Kurzstreckenzieher wie der Hausrotschwanz überwintern im Mittelmeerraum. Dazwischen stehen Teilzieher wie Amsel, Star und Rotkehlchen, bei denen ein Teil der Population zieht und ein anderer bleibt. Zur Orientierung nutzen Zugvögel Sonne, Sterne und das Magnetfeld der Erde.",
      funFact: "Mauersegler sind wahre Luftakrobaten: Außerhalb der Brutzeit landen manche Tiere bis zu zehn Monate lang kein einziges Mal – sie fressen, trinken und schlafen sogar im Flug.",
      quiz: {
        question: "Was ist ein Teilzieher?",
        options: ["Ein Vogel, der nur einen Teil der Strecke fliegt und dann umkehrt", "Eine Art, bei der nur ein Teil der Population im Winter wegzieht", "Ein Vogel, der nur jedes zweite Jahr zieht"],
        correct: 1,
        explanation: "Bei Teilziehern wie der Amsel ziehen manche Individuen in den Süden, während andere – oft ältere Männchen oder Stadtvögel – im Brutgebiet überwintern."
      }
    },
    {
      id: "dv-02", category: "Deutsche Vogelwelt", tagColor: "#0EA5E9",
      title: "Der fliegende Edelstein",
      story: "Der Eisvogel ist kaum größer als ein Spatz, doch sein Gefieder leuchtet in schillerndem Türkis und Orange. Das Blau ist dabei keine Pigmentfarbe, sondern eine Strukturfarbe: Winzige Nanostrukturen in den Federn streuen das Licht so, dass vor allem blaue Wellenlängen zurückgeworfen werden. Von einem Ansitz über dem Wasser stößt er kopfüber hinab und packt kleine Fische mit seinem dolchartigen Schnabel. Seine Brutröhre gräbt er bis zu einem Meter tief in steile Uferwände – naturnahe Ufer sind für ihn deshalb überlebenswichtig.",
      funFact: "Der Schnabel des Eisvogels stand Pate für den japanischen Hochgeschwindigkeitszug Shinkansen 500: Mit der schnabelförmigen Nase verschwand der laute Knall bei der Einfahrt in Tunnel, und der Zug wurde zugleich sparsamer.",
      quiz: {
        question: "Warum schimmert das Gefieder des Eisvogels blau?",
        options: ["Wegen eines seltenen blauen Farbstoffs", "Weil es das Blau des Wassers spiegelt", "Durch Lichtstreuung an Nanostrukturen der Federn"],
        correct: 2,
        explanation: "Das Blau ist eine Strukturfarbe: Feinste Strukturen in den Federn lenken das Licht so, dass Blau verstärkt wird. Zerreibt man eine Feder, verschwindet die Farbe."
      }
    },
    {
      id: "dv-03", category: "Deutsche Vogelwelt", tagColor: "#0EA5E9",
      title: "Trommelwirbel im Frühlingswald",
      story: "Der Buntspecht ist der häufigste Specht Deutschlands und leicht an seinem schwarz-weißen Gefieder und dem leuchtend roten Unterschwanz zu erkennen. Im Frühjahr trommelt er mit mehr als zehn Schlägen pro Sekunde auf hohle Äste – nicht zur Nahrungssuche, sondern um sein Revier zu markieren und Weibchen anzulocken. Beim Klettern stützt er sich auf seine steifen Schwanzfedern, und seine Füße mit je zwei nach vorn und nach hinten gerichteten Zehen krallen sich in die Rinde. Eine extrem lange Zunge, die in einer Schlaufe um den Schädel geführt wird, angelt Larven selbst aus tiefen Bohrgängen.",
      funFact: "Lange galt der Spechtschädel als eingebauter Stoßdämpfer. Hochgeschwindigkeitsaufnahmen zeigten 2022 jedoch: Der Kopf federt kaum ab – er wirkt eher wie ein harter Hammer. Sein kleines, leichtes Gehirn verkraftet die Wucht trotzdem.",
      quiz: {
        question: "Wozu trommelt der Buntspecht im Frühjahr vor allem?",
        options: ["Um Insekten aus der Rinde zu scheuchen", "Um seinen Schnabel zu schärfen", "Um sein Revier zu markieren und Partner anzulocken"],
        correct: 2,
        explanation: "Das Trommeln ist die „Stimme“ des Spechts: ein akustisches Signal, das weit durch den Wald trägt – vergleichbar mit dem Reviergesang der Singvögel."
      }
    },
    {
      id: "dv-04", category: "Deutsche Vogelwelt", tagColor: "#0EA5E9",
      title: "Das Rotkehlchen und der Magnetsinn",
      story: "Mit seinen großen dunklen Augen und der orangeroten Brust ist das Rotkehlchen einer der beliebtesten Gartenvögel. Hinter dem niedlichen Äußeren steckt ein wehrhafter Charakter: Männchen wie Weibchen verteidigen auch im Winter eigene Reviere und singen dafür sogar in der kalten Jahreszeit. Oft folgt es Gärtnern beim Umgraben, um aufgeworfene Würmer zu erbeuten – ein Verhalten, das vermutlich auf das Begleiten wühlender Wildschweine zurückgeht. Weil es in der Dämmerung und an beleuchteten Straßen auch nachts singt, wird es gern für eine Nachtigall gehalten.",
      funFact: "Am Rotkehlchen wiesen Frankfurter Forscher in den 1960er-Jahren erstmals nach, dass Zugvögel einen Magnetkompass besitzen. Nach heutigem Wissensstand sitzt dieser Sinn in lichtempfindlichen Proteinen im Auge – Vögel „sehen“ das Magnetfeld womöglich.",
      quiz: {
        question: "Welche Entdeckung gelang Forschern am Rotkehlchen?",
        options: ["Der Magnetkompass von Zugvögeln", "Das Ultraschallhören von Singvögeln", "Die Winterstarre bei Kleinvögeln"],
        correct: 0,
        explanation: "Versuche mit Rotkehlchen in künstlichen Magnetfeldern zeigten, dass sie ihre Zugrichtung am Erdmagnetfeld ausrichten – ein Meilenstein der Verhaltensbiologie."
      }
    },
    {
      id: "dv-05", category: "Deutsche Vogelwelt", tagColor: "#0EA5E9",
      title: "Gesang, Ruf und Morgenkonzert",
      story: "Ornithologen unterscheiden zwischen Gesang und Ruf: Der oft komplexe Gesang dient vor allem der Revierverteidigung und Partnerwerbung, kurze Rufe dagegen warnen vor Feinden oder halten den Kontakt im Schwarm. Manche Arten erkennt man sofort am Klang – der Zilpzalp singt seinen eigenen Namen, die Kohlmeise wiederholt ein helles „zi-zi-bä“. Erzeugt werden die Töne in der Syrinx, einem Stimmorgan an der Gabelung der Luftröhre, das zwei Töne gleichzeitig hervorbringen kann. Im Frühling setzen die Arten in fester Reihenfolge ein, der sogenannten Vogeluhr: Hausrotschwanz und Rotkehlchen beginnen lange vor Sonnenaufgang, Buchfink und Haussperling deutlich später.",
      funFact: "Stadtvögel singen anders als ihre Artgenossen auf dem Land: Kohlmeisen in lauten Städten verlegen ihren Gesang in höhere Tonlagen, damit er nicht im tiefen Brummen des Verkehrs untergeht.",
      quiz: {
        question: "Wo entsteht der Gesang der Vögel?",
        options: ["Im Kehlkopf, wie beim Menschen", "In der Syrinx an der Gabelung der Luftröhre", "In speziellen Luftsäcken im Schnabel"],
        correct: 1,
        explanation: "Die Syrinx sitzt tief in der Brust, wo sich die Luftröhre in die Bronchien teilt. Da sie zwei Hälften hat, können Vögel sogar zwei Töne gleichzeitig erzeugen."
      }
    },

    /* ---------- Deutsche Pflanzenwelt ---------- */
    {
      id: "dp-01", category: "Deutsche Pflanzenwelt", tagColor: "#059669",
      title: "Wettlauf gegen das Blätterdach",
      story: "Schon im März überzieht das Buschwindröschen den Boden vieler Laubwälder mit weißen Blütenteppichen. Als Frühblüher nutzt es ein kurzes Zeitfenster: Bevor Buchen und Eichen austreiben und den Waldboden beschatten, erreicht noch ein Großteil des Sonnenlichts den Grund. Die Energie für diesen Blitzstart hat die Pflanze im Vorjahr in ihrem unterirdischen Wurzelstock gespeichert. Sobald sich das Kronendach schließt, zieht sie ihre Blätter ein und überdauert den Rest des Jahres unsichtbar im Boden. Wie viele Hahnenfußgewächse ist sie übrigens giftig.",
      funFact: "Weil sich das Buschwindröschen fast nur über seinen langsam wachsenden Wurzelstock ausbreitet, kommt es oft nur wenige Meter pro Jahrhundert voran. Große Blütenteppiche gelten darum als Hinweis auf sehr alte Waldstandorte.",
      quiz: {
        question: "Warum blühen Frühblüher wie das Buschwindröschen so früh im Jahr?",
        options: ["Um Frost als Schutz vor Fraßfeinden zu nutzen", "Um das Licht vor dem Laubaustrieb der Bäume zu nutzen", "Weil ihre Bestäuber nur im März fliegen"],
        correct: 1,
        explanation: "Im noch kahlen Wald erreicht viel Sonnenlicht den Boden. Diese kurze Lichtphase nutzen Frühblüher für Blüte und Photosynthese, bevor das Blätterdach sie beschattet."
      }
    },
    {
      id: "dp-02", category: "Deutsche Pflanzenwelt", tagColor: "#059669",
      title: "Kamille, Johanniskraut & Co.",
      story: "Viele heimische Wildpflanzen sind seit Jahrhunderten fester Bestandteil der Volksheilkunde – einige ihrer Wirkungen sind heute wissenschaftlich gut belegt. Die Echte Kamille enthält entzündungshemmende Stoffe wie Bisabolol und Chamazulen, das ihrem ätherischen Öl die tiefblaue Farbe verleiht. Johanniskraut, das um den Johannistag am 24. Juni blüht, wird bei leichten depressiven Verstimmungen eingesetzt, kann aber die Wirkung anderer Medikamente wie der Antibabypille abschwächen. Und ein zerriebenes Blatt Spitzwegerich lindert unterwegs den Juckreiz nach Mückenstichen.",
      funFact: "Hält man ein Blatt des Echten Johanniskrauts gegen das Licht, wirkt es wie durchlöchert. Die hellen Punkte sind Öldrüsen – daher der wissenschaftliche Name Hypericum perforatum, „das Durchlöcherte“.",
      quiz: {
        question: "Woran erkennt man die Echte Kamille sicher?",
        options: ["An ihrem hohlen, kegelförmigen Blütenboden", "An ihren gelben Zungenblüten", "An ihrem völlig geruchlosen Kraut"],
        correct: 0,
        explanation: "Schneidet man das Blütenköpfchen längs durch, ist es bei der Echten Kamille innen hohl. Ähnliche Arten wie die Geruchlose Kamille haben einen gefüllten Blütenboden."
      }
    },
    {
      id: "dp-03", category: "Deutsche Pflanzenwelt", tagColor: "#059669",
      title: "Das Land der Buchen",
      story: "Ohne menschlichen Einfluss wäre Deutschland zum größten Teil von Buchen- und Buchenmischwäldern bedeckt – die Rotbuche ist hier die natürliche Königin des Waldes. Heute prägen jedoch Nadelbäume das Bild: Fichte und Kiefer machen zusammen gut 40 Prozent der Waldfläche aus, weil sie seit dem 19. Jahrhundert großflächig als schnellwachsendes Bauholz gepflanzt wurden. Hitze, Dürre und Borkenkäfer haben vor allem den Fichtenforsten in den letzten Jahren schwer zugesetzt. Förster setzen deshalb auf den Waldumbau hin zu klimastabileren Mischwäldern mit Buche, Eiche, Tanne und weiteren Arten.",
      funFact: "Rund ein Viertel des weltweiten Verbreitungsgebiets der Rotbuche liegt in Deutschland. Besonders alte Buchenwälder, etwa im Nationalpark Hainich oder im Kellerwald, gehören deshalb zum UNESCO-Weltnaturerbe.",
      quiz: {
        question: "Welche Baumart würde in Deutschland ohne menschlichen Einfluss dominieren?",
        options: ["Die Gemeine Fichte", "Die Waldkiefer", "Die Rotbuche"],
        correct: 2,
        explanation: "Die schattentolerante Rotbuche setzt sich auf den meisten Standorten Mitteleuropas gegen andere Baumarten durch. Fichten- und Kiefernforste sind überwiegend menschengemacht."
      }
    },
    {
      id: "dp-04", category: "Deutsche Pflanzenwelt", tagColor: "#059669",
      title: "Neue Nachbarn: Neophyten",
      story: "Als Neophyten bezeichnet man Pflanzen, die nach 1492 – also nach Beginn des Austauschs mit Amerika – durch den Menschen in neue Gebiete gelangt sind. Die meisten fügen sich unauffällig ein, und manche sind uns sogar unverzichtbar geworden, etwa Kartoffel oder Tomate. Einige wenige Arten gelten jedoch als invasiv: Das Drüsige Springkraut aus dem Himalaya schleudert seine Samen mehrere Meter weit und bildet an Bachufern dichte Bestände. Der Riesen-Bärenklau aus dem Kaukasus enthält Stoffe, die bei Hautkontakt und Sonnenlicht schwere, verbrennungsähnliche Wunden verursachen.",
      funFact: "Der Japanische Staudenknöterich kann in der Hauptwachstumszeit mehrere Zentimeter pro Tag zulegen und drückt sich mit seinen Trieben sogar durch Asphalt. Schon ein fingernagelgroßes Wurzelstück reicht, um eine neue Pflanze zu bilden.",
      quiz: {
        question: "Welches Stichjahr trennt Neophyten von Archäophyten?",
        options: ["1492", "1648", "1871"],
        correct: 0,
        explanation: "1492, das Jahr der Ankunft des Kolumbus in Amerika, markiert den Beginn des weltweiten Pflanzenaustauschs. Früher eingeführte Arten wie der Klatschmohn heißen Archäophyten."
      }
    },

    /* ---------- Umweltschutz & Kreislaufwirtschaft ---------- */
    {
      id: "uk-01", category: "Umweltschutz & Kreislaufwirtschaft", tagColor: "#65A30D",
      title: "Cradle to Cradle: Abfall ist Nahrung",
      story: "Das Cradle-to-Cradle-Prinzip („von der Wiege zur Wiege“) wurde von dem deutschen Chemiker Michael Braungart und dem US-Architekten William McDonough entwickelt. Statt Produkte nach Gebrauch zu entsorgen – also „von der Wiege zur Bahre“ –, sollen alle Materialien dauerhaft in Kreisläufen bleiben. Verbrauchsgüter wie Textilfasern oder Verpackungen werden so gestaltet, dass sie im biologischen Kreislauf gefahrlos kompostiert werden können. Langlebige Materialien wie Metalle oder bestimmte Kunststoffe zirkulieren dagegen sortenrein im technischen Kreislauf und werden immer wieder zu gleichwertigen Produkten.",
      funFact: "Braungart kritisiert reine Öko-Effizienz: Etwas „weniger schlecht“ zu machen, sei noch lange nicht gut. Sein Ziel ist Öko-Effektivität – Produkte, die der Umwelt im besten Fall sogar nützen, so wie ein Kirschbaum, der verschwenderisch blüht und dabei den Boden nährt.",
      quiz: {
        question: "Welche beiden Kreisläufe unterscheidet Cradle to Cradle?",
        options: ["Den biologischen und den technischen Kreislauf", "Den nationalen und den globalen Kreislauf", "Den Energie- und den Wasserkreislauf"],
        correct: 0,
        explanation: "Biologische Nährstoffe kehren als Kompost in die Natur zurück, technische Nährstoffe werden ohne Qualitätsverlust immer wieder zu neuen Produkten verarbeitet."
      }
    },
    {
      id: "uk-02", category: "Umweltschutz & Kreislaufwirtschaft", tagColor: "#65A30D",
      title: "Mikroplastik auf Weltreise",
      story: "Als Mikroplastik gelten Kunststoffteilchen, die kleiner als fünf Millimeter sind. Primäres Mikroplastik wird bewusst in dieser Größe hergestellt oder entsteht direkt bei der Nutzung, etwa durch Reifenabrieb; sekundäres bildet sich, wenn größere Kunststoffteile durch Sonne, Wellen und Reibung zerfallen. Über Straßenabläufe, Abwasser und Flüsse gelangen die Partikel ins Meer, werden mit Gischt und Wind in die Atmosphäre getragen und regnen wieder ab – selbst im Schnee der Arktis und auf Alpengipfeln wurden sie nachgewiesen. Kläranlagen halten zwar einen Großteil zurück, doch der Klärschlamm landet teils wieder auf Äckern.",
      funFact: "Die größte Quelle für Mikroplastik in Deutschland ist laut einer Studie des Fraunhofer-Instituts UMSICHT weder Kosmetik noch Kleidung, sondern der Abrieb von Autoreifen – über ein Kilogramm pro Kopf und Jahr.",
      quiz: {
        question: "Was ist laut der Fraunhofer-Studie die größte Mikroplastik-Quelle in Deutschland?",
        options: ["Peelings und Duschgele", "Reifenabrieb im Straßenverkehr", "Plastiktüten aus dem Supermarkt"],
        correct: 1,
        explanation: "Reifenabrieb liegt mit Abstand vorn. Mikroperlen aus Kosmetik machen nur einen sehr kleinen Anteil der gesamten Mikroplastik-Emissionen aus."
      }
    },
    {
      id: "uk-03", category: "Umweltschutz & Kreislaufwirtschaft", tagColor: "#65A30D",
      title: "Der Rebound-Effekt",
      story: "Effizientere Technik spart nicht automatisch Ressourcen – manchmal verpufft die Ersparnis ganz oder teilweise. Beim direkten Rebound-Effekt wird die günstigere Leistung einfach häufiger genutzt: Mit sparsamen LED-Lampen beleuchten viele Menschen mehr Flächen und länger als zuvor. Beim indirekten Rebound fließt das eingesparte Geld in anderen Konsum, etwa wenn gesparte Heizkosten eine zusätzliche Flugreise finanzieren. Übersteigt der Mehrverbrauch die Einsparung sogar, spricht man von Backfire. Als Gegenmittel diskutieren Fachleute die Suffizienz – also bewusst weniger zu verbrauchen.",
      funFact: "Schon 1865 beobachtete der britische Ökonom William Stanley Jevons, dass effizientere Dampfmaschinen den Kohleverbrauch Englands nicht senkten, sondern steigerten. Dieses Jevons-Paradoxon gilt als Urform des Rebound-Effekts.",
      quiz: {
        question: "Welches Beispiel beschreibt einen indirekten Rebound-Effekt?",
        options: ["Ein sparsames Auto wird öfter gefahren", "Eine LED-Lampe hält länger als eine Glühbirne", "Mit dem gesparten Heizgeld wird eine Flugreise bezahlt"],
        correct: 2,
        explanation: "Beim indirekten Rebound wird die Ersparnis in einem anderen Bereich ausgegeben. Das öfter gefahrene Sparauto wäre dagegen ein direkter Rebound."
      }
    },
    {
      id: "uk-04", category: "Umweltschutz & Kreislaufwirtschaft", tagColor: "#65A30D",
      title: "Upcycling: Aus alt mach wertvoll",
      story: "Beim Upcycling werden ausgediente Materialien in Produkte verwandelt, die einen höheren Wert haben als das Ausgangsmaterial – aus Fahrradschläuchen werden Gürtel, aus Werbebannern Taschen, aus alten Fenstern Gewächshäuser. Das Gegenstück ist das Downcycling, bei dem die Qualität mit jedem Durchlauf sinkt, etwa wenn die Fasern von Recyclingpapier immer kürzer werden. Upcycling spart Rohstoffe und die Energie für aufwendiges Einschmelzen oder Zerkleinern. In der Abfallhierarchie des deutschen Kreislaufwirtschaftsgesetzes steht jedoch noch eine Stufe darüber: Abfall gar nicht erst entstehen zu lassen.",
      funFact: "Eine der bekanntesten Upcycling-Marken entstand 1993 in Zürich: Zwei Grafikdesigner-Brüder nähten sich aus gebrauchten Lkw-Planen, Fahrradschläuchen und Autogurten wasserfeste Kuriertaschen – heute ein weltweit gefragtes Designobjekt.",
      quiz: {
        question: "Welche Stufe steht in der Abfallhierarchie ganz oben?",
        options: ["Recycling", "Energetische Verwertung", "Vermeidung"],
        correct: 2,
        explanation: "Die Hierarchie lautet: Vermeidung, Vorbereitung zur Wiederverwendung, Recycling, sonstige (etwa energetische) Verwertung und erst zuletzt Beseitigung."
      }
    },

    /* ---------- Kosmos allgemein ---------- */
    {
      id: "ko-01", category: "Kosmos allgemein", tagColor: "#2563EB",
      title: "Neutronensterne: Ein Berg im Teelöffel",
      story: "Wenn ein massereicher Stern am Ende seines Lebens in einer Supernova explodiert, kann sein Kern zu einem Neutronenstern kollabieren. Dabei wird mehr als die Masse unserer Sonne auf eine Kugel von nur etwa 20 Kilometern Durchmesser zusammengepresst – so dicht, dass Elektronen und Protonen zu Neutronen verschmelzen. Ein Teelöffel dieser Materie würde auf der Erde rund eine Milliarde Tonnen wiegen. Viele Neutronensterne rotieren rasend schnell und senden dabei wie ein kosmischer Leuchtturm regelmäßige Strahlungspulse aus – man nennt sie Pulsare.",
      funFact: "Als die Astronomin Jocelyn Bell Burnell 1967 den ersten Pulsar entdeckte, waren die Signale so regelmäßig, dass das Team sie scherzhaft „LGM-1“ taufte – für „Little Green Men“.",
      quiz: {
        question: "Wie groß ist ein typischer Neutronenstern im Durchmesser?",
        options: ["Etwa 20 Kilometer", "Etwa so groß wie die Erde", "Etwa so groß wie die Sonne"],
        correct: 0,
        explanation: "Ein Neutronenstern ist kaum größer als eine Großstadt, enthält aber mehr Masse als die Sonne – daraus ergibt sich seine unvorstellbare Dichte."
      }
    },
    {
      id: "ko-02", category: "Kosmos allgemein", tagColor: "#2563EB",
      title: "Der Ereignishorizont",
      story: "Ein Schwarzes Loch ist ein Bereich, in dem Masse so stark konzentriert ist, dass nichts seiner Anziehung entkommen kann. Die Grenze, ab der selbst Licht nicht mehr entweichen kann, heißt Ereignishorizont – er ist keine feste Oberfläche, sondern ein Punkt ohne Wiederkehr. Für einen fernen Beobachter scheint ein hineinfallendes Objekt am Horizont immer langsamer zu werden, zu erstarren und rötlich zu verblassen, weil die Zeit dort extrem gedehnt wird. 2019 gelang dem Event Horizon Telescope das erste Bild vom Schatten eines Schwarzen Lochs im Zentrum der Galaxie M87.",
      funFact: "Würde man die Erde auf die Größe ihres Ereignishorizonts zusammenpressen, wäre sie nur etwa 1,8 Zentimeter groß – kleiner als eine Murmel. Bei der Sonne wären es rund sechs Kilometer.",
      quiz: {
        question: "Was kennzeichnet den Ereignishorizont eines Schwarzen Lochs?",
        options: ["Er ist die feste, glühende Oberfläche des Schwarzen Lochs", "Ab ihm kann nicht einmal mehr Licht entkommen", "Er ist die Grenze, ab der Sterne Wasserstoff verbrennen"],
        correct: 1,
        explanation: "Innerhalb des Ereignishorizonts müsste man schneller als das Licht sein, um zu entkommen – und das ist nach der Relativitätstheorie unmöglich."
      }
    },
    {
      id: "ko-03", category: "Kosmos allgemein", tagColor: "#2563EB",
      title: "Das Echo des Urknalls",
      story: "Rund 380.000 Jahre nach dem Urknall war das Universum so weit abgekühlt, dass sich Elektronen und Atomkerne zu neutralen Atomen verbinden konnten. Plötzlich wurde der Kosmos durchsichtig, und das damals freigesetzte Licht durchquert das All bis heute. Durch die Ausdehnung des Universums wurde es inzwischen zu Mikrowellenstrahlung mit einer Temperatur von nur etwa 2,7 Kelvin gestreckt – das ist die kosmische Hintergrundstrahlung. Ihre winzigen Temperaturschwankungen von etwa einem Hunderttausendstel verraten, wo sich später Galaxien und Galaxienhaufen bildeten.",
      funFact: "Entdeckt wurde die Strahlung 1964 zufällig von Arno Penzias und Robert Wilson. Sie hielten das hartnäckige Rauschen ihrer Antenne zunächst für eine Störung durch Taubenkot – und erhielten später dafür den Nobelpreis für Physik.",
      quiz: {
        question: "Welche Temperatur hat die kosmische Hintergrundstrahlung heute?",
        options: ["Etwa 2,7 Kelvin", "Etwa 27 Kelvin", "Etwa 273 Kelvin"],
        correct: 0,
        explanation: "2,7 Kelvin sind nur knapp über dem absoluten Nullpunkt. Ursprünglich war die Strahlung rund 3.000 Kelvin heiß – die Ausdehnung des Alls hat sie extrem abgekühlt."
      }
    },
    {
      id: "ko-04", category: "Kosmos allgemein", tagColor: "#2563EB",
      title: "Unser Sonnensystem im Maßstab",
      story: "Stell dir die Sonne als Kugel mit einem Meter Durchmesser vor. Die Erde wäre dann knapp einen Zentimeter groß – etwa wie eine Erbse – und würde in rund 107 Metern Entfernung kreisen. Jupiter, der größte Planet, hätte die Größe einer Pampelmuse und wäre gut einen halben Kilometer entfernt, Neptun eine Walnuss in über drei Kilometern Abstand. Der nächste Stern, Proxima Centauri, läge in diesem Modell rund 29.000 Kilometer weit weg – fast drei Viertel des Erdumfangs. Das Licht braucht für die echte Strecke von der Sonne zur Erde etwa 8 Minuten und 20 Sekunden.",
      funFact: "Die Raumsonde Voyager 1, 1977 gestartet, ist das am weitesten entfernte Objekt, das Menschen gebaut haben. Etwa Ende 2026 erreicht sie eine Entfernung von einem Lichttag – ihre Funksignale sind dann 24 Stunden zur Erde unterwegs.",
      quiz: {
        question: "Wie weit wäre die Erde von einer ein Meter großen Sonne entfernt?",
        options: ["Etwa 10 Meter", "Etwa 107 Meter", "Etwa 2 Kilometer"],
        correct: 1,
        explanation: "Die Erde ist etwa 107 Sonnendurchmesser von der Sonne entfernt. Im Meter-Modell entspricht das ungefähr der Länge eines Fußballfeldes."
      }
    },

    /* ---------- Erde allgemein ---------- */
    {
      id: "er-01", category: "Erde allgemein", tagColor: "#DC2626",
      title: "Kontinente auf Wanderschaft",
      story: "1912 stellte der deutsche Meteorologe Alfred Wegener die These auf, dass alle Kontinente einst einen Superkontinent bildeten und seitdem auseinanderdriften – und wurde dafür jahrzehntelang belächelt. Erst in den 1960er-Jahren lieferten Messungen am Meeresboden den Beweis: Die Erdkruste besteht aus starren Lithosphärenplatten, die auf dem zähplastischen Erdmantel gleiten. An Mittelozeanischen Rücken wie in Island weichen Platten auseinander und neuer Meeresboden entsteht, an Subduktionszonen taucht eine Platte unter die andere ab. Wo Kontinente kollidieren, falten sich Gebirge wie der Himalaya auf.",
      funFact: "Die Platten bewegen sich etwa so schnell, wie unsere Fingernägel wachsen – wenige Zentimeter pro Jahr. Der Atlantik ist seit der Reise des Kolumbus 1492 dadurch um gut zehn Meter breiter geworden.",
      quiz: {
        question: "Wer begründete die Theorie der Kontinentaldrift?",
        options: ["Charles Darwin", "Alexander von Humboldt", "Alfred Wegener"],
        correct: 2,
        explanation: "Alfred Wegener stützte sich auf passende Küstenlinien, Fossilien und Gesteine beiderseits des Atlantiks. Den Antriebsmechanismus konnte er allerdings noch nicht erklären."
      }
    },
    {
      id: "er-02", category: "Erde allgemein", tagColor: "#DC2626",
      title: "Oasen in ewiger Finsternis",
      story: "1977 stießen Forscher mit dem Tauchboot Alvin am Galápagos-Rift in rund 2.500 Metern Tiefe auf eine Sensation: heiße Quellen am Meeresboden, umgeben von einer üppigen Lebensgemeinschaft. An diesen Hydrothermalquellen tritt bis zu 400 °C heißes, mineralreiches Wasser aus, das wegen des enormen Drucks nicht kocht. Wenn gelöste Metallsulfide im kalten Meerwasser ausfallen, wachsen schornsteinartige Schlote empor – die Schwarzen Raucher. Grundlage des Lebens ist hier nicht Sonnenlicht, sondern Chemosynthese: Bakterien gewinnen Energie aus Schwefelwasserstoff und bilden so die Basis der Nahrungskette.",
      funFact: "Der Riesenröhrenwurm Riftia wird über zwei Meter lang – und besitzt weder Mund noch Darm. Er lebt vollständig von Bakterien in seinem Körper, die ihn mit Nährstoffen versorgen. Seine leuchtend roten Kiemenbüschel verdankt er einem besonderen Hämoglobin.",
      quiz: {
        question: "Woher stammt die Energie für das Leben an Hydrothermalquellen?",
        options: ["Aus der Chemosynthese von Bakterien", "Aus Photosynthese im schwachen Restlicht", "Allein aus absinkendem Plankton von der Oberfläche"],
        correct: 0,
        explanation: "In völliger Dunkelheit nutzen Bakterien chemische Energie aus Schwefelverbindungen, um organische Stoffe aufzubauen – ganz ohne Sonnenlicht."
      }
    },
    {
      id: "er-03", category: "Erde allgemein", tagColor: "#DC2626",
      title: "Stockwerke des Himmels",
      story: "Die Erdatmosphäre ist in Schichten gegliedert, die sich vor allem durch ihren Temperaturverlauf unterscheiden. In der Troposphäre, die an den Polen etwa 8 und am Äquator rund 17 Kilometer hoch reicht, spielt sich fast das gesamte Wetter ab. Darüber folgt die Stratosphäre mit der schützenden Ozonschicht, die UV-Strahlung absorbiert und die Luft dort erwärmt. In der eisigen Mesosphäre bis etwa 85 Kilometer Höhe verglühen die meisten Sternschnuppen; noch höher, in der Thermosphäre, tanzen Polarlichter und kreist die Internationale Raumstation.",
      funFact: "In der Thermosphäre kann das Gas über 1.000 °C heiß werden – trotzdem würde man dort erfrieren. Die Teilchen sind so dünn verteilt, dass sie kaum Wärme an einen Körper abgeben können.",
      quiz: {
        question: "In welcher Schicht verglühen die meisten Sternschnuppen?",
        options: ["Troposphäre", "Mesosphäre", "Exosphäre"],
        correct: 1,
        explanation: "In der Mesosphäre ist die Luft bereits dicht genug, um Meteoroiden durch Reibung stark zu erhitzen – sie verglühen meist in 70 bis 100 Kilometern Höhe."
      }
    },
    {
      id: "er-04", category: "Erde allgemein", tagColor: "#DC2626",
      title: "Der unsichtbare Schutzschild",
      story: "Tief unter unseren Füßen, im flüssigen äußeren Erdkern aus Eisen und Nickel, arbeitet ein gewaltiger Dynamo: Strömungen des leitfähigen Metalls erzeugen, angetrieben von Wärme und Erdrotation, das Magnetfeld unseres Planeten. Es reicht weit ins All und lenkt den Sonnenwind – einen Strom geladener Teilchen – größtenteils um die Erde herum. Wo Teilchen an den Polen dennoch eindringen, bringen sie die Luft zum Leuchten: Polarlichter entstehen. Das Feld ist nicht starr; die magnetischen Pole wandern, und in unregelmäßigen Abständen kehrt sich das Feld sogar ganz um – zuletzt vor etwa 780.000 Jahren.",
      funFact: "Streng physikalisch liegt in der Arktis ein magnetischer Südpol: Der Nordpol einer Kompassnadel wird schließlich vom entgegengesetzten Pol angezogen. Geografisch nennen wir ihn trotzdem den magnetischen Nordpol.",
      quiz: {
        question: "Wann kehrte sich das Erdmagnetfeld zuletzt vollständig um?",
        options: ["Vor etwa 2.000 Jahren", "Vor etwa 65 Millionen Jahren", "Vor etwa 780.000 Jahren"],
        correct: 2,
        explanation: "Die letzte vollständige Umpolung, die Brunhes-Matuyama-Umkehr, liegt rund 780.000 Jahre zurück. Sie ist in Vulkangestein und Meeresböden magnetisch „eingefroren“."
      }
    },

    /* ---------- Flora & Fauna in Südafrika ---------- */
    {
      id: "sa-01", category: "Flora & Fauna in Südafrika", tagColor: "#D97706",
      title: "Fynbos: Das kleinste Pflanzenreich der Welt",
      story: "Die Südspitze Afrikas bildet ein eigenes Florenreich – das kleinste der sechs weltweit und zugleich eines der artenreichsten. Auf knapp 90.000 Quadratkilometern wachsen rund 9.000 Pflanzenarten, von denen etwa 70 Prozent nirgendwo sonst vorkommen. Die typische Vegetation heißt Fynbos, Afrikaans für „feiner Busch“, nach den schmalen, harten Blättern vieler Sträucher. Dazu gehören Proteen, Hunderte Erika-Arten und binsenartige Restiogewächse. Feuer ist hier kein Feind, sondern Teil des Kreislaufs: Viele Samen keimen erst nach einem Buschbrand.",
      funFact: "Manche Fynbos-Samen reagieren auf Rauch: Bestimmte Verbindungen darin, die sogenannten Karrikine, signalisieren ihnen, dass die Konkurrenz verbrannt ist und Licht und Nährstoffe frei werden – das Startsignal zum Keimen.",
      quiz: {
        question: "Was bedeutet der Begriff „Fynbos“?",
        options: ["Feiner Busch", "Heiliger Berg", "Rotes Land"],
        correct: 0,
        explanation: "„Fynbos“ ist Afrikaans und bedeutet „feiner Busch“ – eine Anspielung auf die schmalen, feinen Blätter vieler typischer Sträucher."
      }
    },
    {
      id: "sa-02", category: "Flora & Fauna in Südafrika", tagColor: "#D97706",
      title: "Die Big Five",
      story: "Löwe, Leopard, Elefant, Nashorn und Kaffernbüffel bilden die legendären Big Five Afrikas. Der Begriff stammt nicht aus der Biologie, sondern aus der Großwildjagd: Er bezeichnete die fünf Tiere, die zu Fuß am schwierigsten und gefährlichsten zu jagen waren. Heute sind die Big Five vor allem ein Magnet für Fotosafaris, etwa im Kruger-Nationalpark, der mit rund 19.500 Quadratkilometern fast so groß ist wie Rheinland-Pfalz. Südafrika beherbergt einen großen Teil aller Nashörner der Welt, die jedoch durch Wilderei für ihr Horn stark bedroht sind.",
      funFact: "Die Big Five zieren die südafrikanischen Rand-Banknoten: Auf den Scheinen mit dem Porträt Nelson Mandelas ist jedem Wert ein Tier zugeordnet – vom Nashorn auf dem 10-Rand-Schein bis zum Leoparden auf dem 200-Rand-Schein.",
      quiz: {
        question: "Woher stammt der Begriff „Big Five“?",
        options: ["Aus einer Zählung der fünf schwersten Tiere Afrikas", "Aus der Großwildjagd", "Aus einer Tourismus-Werbekampagne der 1990er-Jahre"],
        correct: 1,
        explanation: "Jäger bezeichneten so die fünf Arten, die zu Fuß am gefährlichsten zu erlegen waren. Mit Größe hat die Auswahl wenig zu tun – sonst gehörten Flusspferd und Giraffe dazu."
      }
    },
    {
      id: "sa-03", category: "Flora & Fauna in Südafrika", tagColor: "#D97706",
      title: "Der Klippschliefer – ein Mini-Elefant?",
      story: "Auf den Felsen des Tafelbergs sonnen sich oft Gruppen pelziger, murmeltiergroßer Tiere: Kap-Klippschliefer, auf Afrikaans „Dassies“ genannt. Obwohl sie wie Nagetiere aussehen, sind ihre nächsten lebenden Verwandten Elefanten und Seekühe – das verraten Zähne, Skelett und Erbgut. Ihre Körpertemperatur können sie nur schlecht regulieren, deshalb wärmen sie sich morgens gemeinsam in der Sonne auf. Ihre Fußsohlen sind weich, gummiartig und werden von Drüsen feucht gehalten, sodass sie wie Saugnäpfe auf steilem Fels haften.",
      funFact: "Klippschliefer nutzen über Generationen dieselben Latrinen. Ihr eingetrockneter Urin, das „Hyraceum“, bildet Schichten, die teils Zehntausende Jahre alt sind – Forscher lesen darin wie in einem Archiv, wie sich das Klima verändert hat.",
      quiz: {
        question: "Welche Tiere sind die nächsten lebenden Verwandten des Klippschliefers?",
        options: ["Murmeltiere und Biber", "Kaninchen und Hasen", "Elefanten und Seekühe"],
        correct: 2,
        explanation: "Klippschliefer, Elefanten und Seekühe gehen auf gemeinsame afrikanische Vorfahren zurück. Ein Hinweis: Ihre oberen Schneidezähne wachsen ähnlich wie kleine Stoßzähne."
      }
    },
    {
      id: "sa-04", category: "Flora & Fauna in Südafrika", tagColor: "#D97706",
      title: "Pinguine im Sonnenschein",
      story: "Der Brillenpinguin ist die einzige Pinguinart, die auf dem afrikanischen Kontinent brütet – an den Küsten Südafrikas und Namibias. Bekannt ist er für seine eselsartigen Rufe, die ihm im Englischen den Spitznamen „Jackass Penguin“ eingebracht haben. Berühmt ist die Kolonie am Boulders Beach bei Kapstadt, wo die Vögel zwischen Granitfelsen und Badegästen watscheln. Seit 2024 stuft die Weltnaturschutzunion IUCN die Art als vom Aussterben bedroht ein: Überfischung von Sardinen und Sardellen nimmt ihnen die Nahrung, und der historische Abbau von Guano zerstörte ihre Nistplätze.",
      funFact: "Die rosafarbenen, unbefiederten Hautstellen über den Augen sind eine eingebaute Klimaanlage: Wird es heiß, strömt mehr Blut hindurch und gibt Wärme an die Luft ab – die Flecken leuchten dann kräftiger rosa.",
      quiz: {
        question: "Warum war der Guano-Abbau für die Brillenpinguine so verheerend?",
        options: ["Guano war ihre wichtigste Nahrungsquelle", "Sie gruben ihre Nesthöhlen in die dicken Guanoschichten", "Der Abbau vergiftete das Meerwasser"],
        correct: 1,
        explanation: "In den meterdicken Guanoschichten legten die Pinguine kühle, geschützte Bruthöhlen an. Nach dem Abbau als Dünger mussten sie ungeschützt in der prallen Sonne brüten."
      }
    },

    /* ---------- Vorschlag: Meeresbiologie & Tiefsee ---------- */
    {
      id: "mb-01", category: "Meeresbiologie & Tiefsee", tagColor: "#0D9488",
      title: "Lichtshow in der Tiefe",
      story: "Unterhalb von etwa 200 Metern wird das Sonnenlicht schwach, ab rund 1.000 Metern herrscht völlige Dunkelheit. Trotzdem ist die Tiefsee nicht finster: Rund drei Viertel der dort lebenden Tiere können selbst Licht erzeugen. Bei dieser Biolumineszenz reagiert der Leuchtstoff Luciferin mithilfe des Enzyms Luciferase mit Sauerstoff – kaltes Licht, fast ohne Wärmeverlust. Tiere nutzen es, um Beute anzulocken wie der Anglerfisch mit seiner Leuchtangel, um Partner zu finden oder um Angreifer zu blenden.",
      funFact: "Die meisten Tiefseebewohner können rotes Licht nicht sehen. Der Schwarze Drachenfisch nutzt das aus: Er leuchtet mit rotem Licht wie mit einem geheimen Suchscheinwerfer und erspäht so Beute, ohne selbst bemerkt zu werden.",
      quiz: {
        question: "Welcher Anteil der Tiefseetiere kann selbst Licht erzeugen?",
        options: ["Etwa drei Viertel", "Etwa ein Zehntel", "Nur einzelne Fischarten"],
        correct: 0,
        explanation: "Tauchroboter-Beobachtungen zeigen: Rund 75 Prozent der Tiere in der Tiefsee leuchten – Biolumineszenz ist dort eher die Regel als die Ausnahme."
      }
    },
    {
      id: "mb-02", category: "Meeresbiologie & Tiefsee", tagColor: "#0D9488",
      title: "Hinab ins Challengertief",
      story: "Der Marianengraben im westlichen Pazifik ist der tiefste Ort der Weltmeere: Sein Challengertief liegt fast 11.000 Meter unter dem Meeresspiegel. Dort unten lastet ein Druck von über 1.000 bar – als stünde ein Kleinwagen auf jedem Quadratzentimeter. Bereits 1960 tauchten Jacques Piccard und Don Walsh mit dem Tiefseetauchboot Trieste bis zum Grund, 2012 gelang dem Regisseur James Cameron der erste Solo-Tauchgang. Selbst in dieser Tiefe gibt es Leben, etwa Flohkrebse und einzellige Foraminiferen.",
      funFact: "Würde man den Mount Everest in das Challengertief stellen, läge sein Gipfel noch immer rund zwei Kilometer unter der Meeresoberfläche.",
      quiz: {
        question: "Wer erreichte 1960 als Erste den Grund des Marianengrabens?",
        options: ["James Cameron", "Jacques Piccard und Don Walsh", "Jacques-Yves Cousteau"],
        correct: 1,
        explanation: "Der Schweizer Jacques Piccard und der US-Marineoffizier Don Walsh erreichten am 23. Januar 1960 mit der Trieste den Grund. Erst 52 Jahre später folgte James Cameron."
      }
    },
    {
      id: "mb-03", category: "Meeresbiologie & Tiefsee", tagColor: "#0D9488",
      title: "Drei Herzen und blaues Blut",
      story: "Oktopusse gehören zu den intelligentesten wirbellosen Tieren: Sie öffnen Schraubgläser, lösen Labyrinthe und erkennen einzelne Menschen wieder. Rund zwei Drittel ihrer etwa 500 Millionen Nervenzellen sitzen nicht im Kopf, sondern in den acht Armen, die dadurch teilweise selbstständig agieren. Drei Herzen pumpen ihr Blut: Zwei versorgen die Kiemen, eines den restlichen Körper. Das Blut ist blau, weil der Sauerstoff nicht an eisenhaltiges Hämoglobin, sondern an kupferhaltiges Hämocyanin gebunden wird.",
      funFact: "Mit ihren Saugnäpfen können Oktopusse schmecken: Tausende chemische Sinneszellen erlauben es ihnen, Beute in Felsspalten zu ertasten und zugleich zu „kosten“, ohne sie zu sehen.",
      quiz: {
        question: "Warum ist das Blut von Oktopussen blau?",
        options: ["Wegen der Kälte in der Tiefsee", "Weil es kaum Sauerstoff enthält", "Wegen des kupferhaltigen Hämocyanins"],
        correct: 2,
        explanation: "Hämocyanin enthält Kupfer statt Eisen. Mit gebundenem Sauerstoff färbt es sich blau – so wie Hämoglobin unser Blut rot erscheinen lässt."
      }
    },

    /* ---------- Vorschlag: Antike Philosophie (Stoa) ---------- */
    {
      id: "ph-01", category: "Antike Philosophie (Stoa)", tagColor: "#64748B",
      title: "Philosophie in der Säulenhalle",
      story: "Um 300 vor Christus begann Zenon von Kition in Athen zu lehren – nicht in einer Schule, sondern öffentlich in der Stoa Poikile, einer bunt bemalten Säulenhalle am Marktplatz. Nach diesem Ort wurde die ganze Denkrichtung benannt: die Stoa. Ihr Ziel war ein gelingendes Leben, die Eudaimonie, die man nicht durch Reichtum oder Ruhm, sondern allein durch Tugend erreicht. Als Kardinaltugenden galten Weisheit, Tapferkeit, Gerechtigkeit und Mäßigung – gelebt im Einklang mit der Natur und der Vernunft, dem Logos.",
      funFact: "Zenon war ursprünglich Kaufmann. Der Legende nach erlitt er mit einer Ladung Purpur Schiffbruch, strandete in Athen und stieß dort in einem Buchladen auf Schriften über Sokrates. Später soll er gesagt haben: „Ich hatte eine gute Reise, als ich Schiffbruch erlitt.“",
      quiz: {
        question: "Woher hat die Stoa ihren Namen?",
        options: ["Von ihrem Gründer Stoikos", "Von einer bemalten Säulenhalle in Athen", "Vom griechischen Wort für Gelassenheit"],
        correct: 1,
        explanation: "„Stoa“ heißt Säulenhalle. Zenon lehrte in der Stoa Poikile, der „bunten Halle“ an der Agora von Athen – daher der Name der Schule."
      }
    },
    {
      id: "ph-02", category: "Antike Philosophie (Stoa)", tagColor: "#64748B",
      title: "Was liegt in deiner Macht?",
      story: "Epiktet wurde als Sklave geboren und wurde nach seiner Freilassung zu einem der einflussreichsten Stoiker. Kern seiner Lehre ist die Unterscheidung zwischen dem, was in unserer Macht steht, und dem, was es nicht tut: Unsere Urteile, Absichten und Reaktionen können wir lenken – Körper, Besitz, Ruf und das Verhalten anderer dagegen nicht. Wer sich über Dinge außerhalb seiner Kontrolle grämt, macht sich unfrei. „Nicht die Dinge selbst beunruhigen die Menschen, sondern ihre Meinungen über die Dinge“, heißt es in seinem „Handbüchlein der Moral“, das sein Schüler Arrian aufzeichnete.",
      funFact: "Epiktets Gedanke wurde zu einer Grundlage der modernen Psychotherapie: Die Begründer der kognitiven Verhaltenstherapie, Albert Ellis und Aaron T. Beck, beriefen sich ausdrücklich auf die Stoiker.",
      quiz: {
        question: "Was liegt laut Epiktet wirklich in unserer Macht?",
        options: ["Unsere Urteile und Absichten", "Unsere Gesundheit und unser Besitz", "Unser Ruf bei anderen Menschen"],
        correct: 0,
        explanation: "Nur unser Inneres – Urteile, Wünsche, Absichten – liegt vollständig bei uns. Alles Äußere kann uns jederzeit genommen werden und sollte uns daher nicht beherrschen."
      }
    },
    {
      id: "ph-03", category: "Antike Philosophie (Stoa)", tagColor: "#64748B",
      title: "Ein Kaiser schreibt an sich selbst",
      story: "Marcus Aurelius regierte von 161 bis 180 nach Christus als römischer Kaiser – und war zugleich überzeugter Stoiker. Während langer Feldzüge an der Donau notierte er Gedanken, die nie für die Öffentlichkeit bestimmt waren: Heute kennen wir sie als „Selbstbetrachtungen“. Darin ermahnt er sich zu Gelassenheit, Pflichtbewusstsein und Demut angesichts der Vergänglichkeit. Ähnlich zeitlos schrieb der Philosoph Seneca über den Umgang mit Zeit: Wir hätten nicht zu wenig davon, sondern verschwendeten zu viel.",
      funFact: "Obwohl er Römer war, schrieb Mark Aurel seine Selbstbetrachtungen auf Griechisch – der Sprache der Philosophie. Der Originaltitel lautet schlicht „An sich selbst“.",
      quiz: {
        question: "In welcher Sprache verfasste Mark Aurel seine Selbstbetrachtungen?",
        options: ["Latein", "Aramäisch", "Griechisch"],
        correct: 2,
        explanation: "Griechisch galt in der gebildeten römischen Oberschicht als Sprache der Philosophie. Mark Aurel wählte sie auch für seine ganz privaten Notizen."
      }
    },

    /* ---------- Vorschlag: Menschliches Gehirn & Neurowissenschaften ---------- */
    {
      id: "ne-01", category: "Menschliches Gehirn & Neurowissenschaften", tagColor: "#DB2777",
      title: "86 Milliarden Nervenzellen",
      story: "Das menschliche Gehirn besteht aus rund 86 Milliarden Nervenzellen, die über schätzungsweise 100 Billionen Synapsen miteinander verbunden sind. An diesen Kontaktstellen werden elektrische Signale in chemische Botenstoffe übersetzt und an die nächste Zelle weitergegeben. Gut isolierte Nervenfasern leiten Impulse mit bis zu 120 Metern pro Sekunde weiter – über 400 Kilometer pro Stunde. Obwohl das Gehirn nur etwa zwei Prozent des Körpergewichts ausmacht, verbraucht es rund ein Fünftel unserer Energie.",
      funFact: "Das gesamte Gehirn arbeitet mit einer Leistung von nur etwa 20 Watt – weniger als eine klassische Glühbirne. Kein Supercomputer kommt auch nur annähernd an diese Energieeffizienz heran.",
      quiz: {
        question: "Wie viel Prozent der Körperenergie verbraucht das Gehirn etwa?",
        options: ["Rund 2 Prozent", "Rund 20 Prozent", "Rund 50 Prozent"],
        correct: 1,
        explanation: "Das Gehirn ist ein Energiefresser: Bei nur zwei Prozent des Körpergewichts beansprucht es etwa 20 Prozent des Grundumsatzes – vor allem für die Signalübertragung."
      }
    },
    {
      id: "ne-02", category: "Menschliches Gehirn & Neurowissenschaften", tagColor: "#DB2777",
      title: "Das formbare Gehirn",
      story: "Lange glaubte man, das erwachsene Gehirn sei fertig verdrahtet. Heute weiß man: Es verändert sich ein Leben lang – diese Fähigkeit heißt Neuroplastizität. Schon 1949 beschrieb der Psychologe Donald Hebb das Prinzip, das oft mit „Neurons that fire together, wire together“ zusammengefasst wird: Werden Nervenzellen wiederholt gemeinsam aktiv, verstärken sich ihre Verbindungen. Deshalb festigt regelmäßiges Üben neue Fähigkeiten – und darum wirkt auch tägliches Lernen in kleinen Portionen so gut.",
      funFact: "Londoner Taxifahrer müssen für ihre Lizenz Zehntausende Straßen auswendig lernen. Hirnscans zeigten, dass bei ihnen der hintere Teil des Hippocampus – wichtig für das räumliche Gedächtnis – größer ist als bei Vergleichspersonen.",
      quiz: {
        question: "Welche Hirnregion war bei Londoner Taxifahrern vergrößert?",
        options: ["Das Kleinhirn", "Der Sehnerv", "Der Hippocampus"],
        correct: 2,
        explanation: "Der Hippocampus ist zentral für Orientierung und räumliches Gedächtnis. Jahrelanges Navigieren durch London hinterließ dort messbare Spuren."
      }
    },
    {
      id: "ne-03", category: "Menschliches Gehirn & Neurowissenschaften", tagColor: "#DB2777",
      title: "Nachts räumt das Gehirn auf",
      story: "Schlaf ist für das Gehirn alles andere als Stillstand. Im Tiefschlaf spielt der Hippocampus die Erlebnisse des Tages wiederholt ab und überträgt wichtige Inhalte in den Langzeitspeicher der Großhirnrinde – deshalb bleibt, was man vor dem Schlafen lernt, oft besonders gut hängen. Zugleich arbeitet ein Reinigungssystem: Das 2012 beschriebene glymphatische System spült im Schlaf verstärkt Hirnflüssigkeit durch das Gewebe und transportiert Stoffwechselabfälle ab. Dazu gehören auch Eiweiße wie Beta-Amyloid, die mit der Alzheimer-Krankheit in Verbindung gebracht werden.",
      funFact: "In Versuchen an Mäusen weitete sich der Raum zwischen den Hirnzellen im Schlaf um rund 60 Prozent – die Hirnflüssigkeit konnte dadurch deutlich schneller zirkulieren als im Wachzustand.",
      quiz: {
        question: "Wie heißt das Reinigungssystem, das im Schlaf Abfallstoffe aus dem Gehirn spült?",
        options: ["Das glymphatische System", "Das limbische System", "Das vegetative System"],
        correct: 0,
        explanation: "Der Name verbindet „Glia“ (Stützzellen des Gehirns) und „lymphatisch“: Gliazellen steuern den Fluss der Hirnflüssigkeit, der Abfälle abtransportiert."
      }
    },

    /* ---------- Vorschlag: Pilznetzwerke (Myzel) ---------- */
    {
      id: "my-01", category: "Pilznetzwerke (Myzel)", tagColor: "#A16207",
      title: "Eine uralte Partnerschaft",
      story: "Unter fast jedem Waldboden liegt ein riesiges Geflecht aus feinsten Pilzfäden, den Hyphen – zusammen bilden sie das Myzel. Mit den Wurzeln der meisten Landpflanzen gehen Pilze eine Symbiose ein, die Mykorrhiza. Der Pilz erschließt mit seinen hauchdünnen Fäden Wasser und Nährstoffe wie Phosphor und Stickstoff, die die Pflanze allein kaum erreichen würde. Im Gegenzug erhält er Zucker aus der Photosynthese – bei manchen Bäumen einen beträchtlichen Teil ihrer Produktion. Diese Partnerschaft ist über 400 Millionen Jahre alt und half den ersten Pflanzen, das Land zu erobern.",
      funFact: "Steinpilze und Pfifferlinge lassen sich deshalb kaum züchten: Sie brauchen einen lebenden Baumpartner wie Fichte, Kiefer oder Buche. Der Fliegenpilz etwa lebt besonders gern mit Birken und Fichten zusammen.",
      quiz: {
        question: "Was erhält der Pilz in der Mykorrhiza-Symbiose von der Pflanze?",
        options: ["Stickstoff aus der Luft", "Zucker aus der Photosynthese", "Wasser aus den Blättern"],
        correct: 1,
        explanation: "Pilze können keine Photosynthese betreiben. Den Zucker liefert die Pflanze – im Tausch gegen Wasser und Mineralstoffe, die der Pilz aus dem Boden holt."
      }
    },
    {
      id: "my-02", category: "Pilznetzwerke (Myzel)", tagColor: "#A16207",
      title: "Das Wood Wide Web",
      story: "1997 veröffentlichte die kanadische Forstwissenschaftlerin Suzanne Simard eine vielbeachtete Studie: Sie zeigte, dass Kohlenstoff über gemeinsame Pilznetzwerke zwischen Birken und Douglasien wandern kann. Die Fachzeitschrift Nature prägte dafür den Begriff „Wood Wide Web“. Seither wird erforscht, ob Bäume über das Myzel Nährstoffe, Wasser und sogar Warnsignale austauschen. Wichtig ist dabei Genauigkeit: Wie stark große „Mutterbäume“ ihren Nachwuchs gezielt versorgen, ist unter Forschenden umstritten – die Netzwerke selbst sind jedoch real und ökologisch bedeutsam.",
      funFact: "Ein Gramm Waldboden kann Hunderte Meter Pilzfäden enthalten. Würde man das Myzel unter einem einzigen Fußabdruck aneinanderreihen, käme man auf viele Kilometer.",
      quiz: {
        question: "Was zeigte Suzanne Simard 1997?",
        options: ["Dass Bäume über Duftstoffe miteinander sprechen", "Dass Pilze Photosynthese betreiben können", "Dass Kohlenstoff über Pilznetzwerke zwischen Bäumen wandern kann"],
        correct: 2,
        explanation: "Mit markiertem Kohlenstoff wies Simard nach, dass Stoffe über Mykorrhiza-Netzwerke von einem Baum zum anderen gelangen können – der Startschuss für das „Wood Wide Web“."
      }
    },
    {
      id: "my-03", category: "Pilznetzwerke (Myzel)", tagColor: "#A16207",
      title: "Der größte Organismus der Welt?",
      story: "Im Malheur National Forest im US-Bundesstaat Oregon wächst ein Dunkler Hallimasch, dessen Myzel sich über fast zehn Quadratkilometer erstreckt – eine Fläche von rund 1.300 Fußballfeldern. Genetische Tests zeigten, dass es sich um ein einziges Individuum handelt, das je nach Schätzung zwischen 2.000 und über 8.000 Jahre alt sein könnte. Der Pilz breitet sich mit schnürsenkelartigen Strängen unter der Rinde und im Boden aus und befällt geschwächte Bäume. Oberirdisch sichtbar sind nur die honiggelben Fruchtkörper im Herbst – der eigentliche Pilz bleibt verborgen.",
      funFact: "Das Myzel des Hallimaschs kann im Dunkeln schwach grünlich leuchten. Dieses „Leuchtholz“ ließ vermodernde Baumstämme in Wäldern früher geheimnisvoll schimmern.",
      quiz: {
        question: "Welche Fläche bedeckt der riesige Hallimasch in Oregon ungefähr?",
        options: ["Etwa einen Hektar", "Fast zehn Quadratkilometer", "Etwa 500 Quadratkilometer"],
        correct: 1,
        explanation: "Rund 9,6 Quadratkilometer – damit gilt der Pilz als einer der größten bekannten Organismen der Erde, gemessen an seiner Fläche."
      }
    },

    /* ---------- Vorschlag: Mittelalterliche Alltagsgeschichte ---------- */
    {
      id: "ma-01", category: "Mittelalterliche Alltagsgeschichte", tagColor: "#9F1239",
      title: "Brei, Brot und Bier",
      story: "Grundlage der mittelalterlichen Ernährung war Getreide: Die meisten Menschen aßen täglich Brei oder Mus aus Hafer, Gerste oder Hirse sowie Brot, dazu Hülsenfrüchte, Kohl und Rüben. Fleisch kam bei einfachen Leuten vor allem an Festtagen auf den Tisch, und an weit über hundert Fasttagen im Jahr war es ohnehin verboten. Kartoffeln, Tomaten, Mais oder Paprika kannte man in Europa noch gar nicht – sie kamen erst nach der Entdeckung Amerikas. Gewürze wie Pfeffer waren dagegen so kostbar, dass reiche Kaufleute spöttisch „Pfeffersäcke“ genannt wurden.",
      funFact: "Dass man im Mittelalter nur Bier getrunken habe, weil Wasser ungenießbar gewesen sei, ist ein Mythos. Brunnen- und Quellwasser wurde selbstverständlich getrunken – Bier war jedoch ein wichtiger Kalorienlieferant, oft dünn und nur schwach alkoholisch.",
      quiz: {
        question: "Welches Lebensmittel gab es im mittelalterlichen Europa noch nicht?",
        options: ["Hafer", "Kartoffeln", "Kohl"],
        correct: 1,
        explanation: "Die Kartoffel stammt aus den Anden und gelangte erst im 16. Jahrhundert nach Europa. In Deutschland verbreitete sie sich als Grundnahrungsmittel sogar erst im 18. Jahrhundert."
      }
    },
    {
      id: "ma-02", category: "Mittelalterliche Alltagsgeschichte", tagColor: "#9F1239",
      title: "Als Stunden unterschiedlich lang waren",
      story: "Im Mittelalter bestimmten die Glocken der Klöster und Kirchen den Takt des Tages. Sie riefen zu den Stundengebeten – von der Matutin in der Nacht über Prim, Terz, Sext und Non bis zu Vesper und Komplet am Abend. Die Zeit selbst wurde meist in Temporalstunden gemessen: Der helle Tag wurde in zwölf gleiche Teile geteilt, sodass eine Stunde im Sommer deutlich länger dauerte als im Winter. Erst ab dem späten 13. Jahrhundert verbreiteten sich mechanische Räderuhren, die jede Stunde gleich lang schlagen ließen.",
      funFact: "Viele Wörter erinnern noch an diese Ordnung: Die süddeutsche „Vesper“ als Zwischenmahlzeit geht auf das Abendgebet zurück, und das englische „noon“ stammt von der Non – dem Gebet zur neunten Stunde, das sich mit der Zeit auf den Mittag verschob.",
      quiz: {
        question: "Warum war eine Stunde im Mittelalter im Sommer länger als im Winter?",
        options: ["Weil die Kirchenglocken im Sommer langsamer schlugen", "Weil man den hellen Tag in zwölf gleiche Teile teilte", "Weil Sonnenuhren im Winter nicht funktionierten"],
        correct: 1,
        explanation: "Bei Temporalstunden hängt die Länge vom Tageslicht ab: Im Juni ist der helle Tag viel länger als im Dezember – also auch jede seiner zwölf Stunden."
      }
    },
    {
      id: "ma-03", category: "Mittelalterliche Alltagsgeschichte", tagColor: "#9F1239",
      title: "Samstags in die Badestube",
      story: "Das Bild vom schmutzigen Mittelalter ist weitgehend ein Klischee. In vielen Städten gab es öffentliche Badestuben, in denen man schwitzte, sich wusch und Neuigkeiten austauschte – oft war der Samstag der klassische Badetag. Betrieben wurden sie von Badern, die zugleich Haare schnitten, rasierten, Zähne zogen und zur Ader ließen. Erst im 16. Jahrhundert ging die Badekultur stark zurück: Die Angst vor Seuchen wie der Syphilis wuchs, und steigende Holzpreise machten das Heizen teuer.",
      funFact: "Handwerksgesellen erhielten mancherorts ein „Badegeld“ als festen Bestandteil ihres Lohns – damit sie sich den wöchentlichen Besuch in der Badestube leisten konnten.",
      quiz: {
        question: "Warum gingen die Badestuben im 16. Jahrhundert stark zurück?",
        options: ["Wegen Seuchenangst und steigender Holzpreise", "Wegen eines kirchlichen Badeverbots", "Weil private Badezimmer in Mode kamen"],
        correct: 0,
        explanation: "Syphilis und andere Seuchen machten das gemeinsame Baden verdächtig, während Holz knapp und teuer wurde. Private Badezimmer kamen erst Jahrhunderte später auf."
      }
    }
  ];
