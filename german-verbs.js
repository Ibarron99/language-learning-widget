// Widget de verbos alemanes A2-B1 para Scriptable
// Formato: [infinitivo, español, ejemplo, Perfekt]
const verbos = [
  ["gehen","ir","Ich gehe nach Hause.","ist gegangen"],
  ["kommen","venir","Sie kommt aus Spanien.","ist gekommen"],
  ["machen","hacer","Was machst du heute?","hat gemacht"],
  ["sagen","decir","Er sagt die Wahrheit.","hat gesagt"],
  ["sehen","ver","Ich sehe den Bus.","hat gesehen"],
  ["geben","dar","Gib mir bitte das Buch.","hat gegeben"],
  ["nehmen","tomar","Ich nehme den Zug.","hat genommen"],
  ["finden","encontrar","Ich finde meinen Schlüssel nicht.","hat gefunden"],
  ["bleiben","quedarse","Wir bleiben zu Hause.","ist geblieben"],
  ["bringen","traer","Kannst du mir Wasser bringen?","hat gebracht"],
  ["denken","pensar","Ich denke an dich.","hat gedacht"],
  ["wissen","saber","Ich weiß die Antwort nicht.","hat gewusst"],
  ["kennen","conocer","Kennst du diesen Mann?","hat gekannt"],
  ["verstehen","entender","Ich verstehe dich nicht.","hat verstanden"],
  ["sprechen","hablar","Sie spricht gut Deutsch.","hat gesprochen"],
  ["lesen","leer","Er liest jeden Tag Zeitung.","hat gelesen"],
  ["schreiben","escribir","Ich schreibe eine E-Mail.","hat geschrieben"],
  ["hören","oír / escuchar","Wir hören Musik.","hat gehört"],
  ["fragen","preguntar","Darf ich dich etwas fragen?","hat gefragt"],
  ["antworten","responder","Er antwortet sofort.","hat geantwortet"],
  ["arbeiten","trabajar","Ich arbeite im Büro.","hat gearbeitet"],
  ["wohnen","vivir (residir)","Wir wohnen in Berlin.","hat gewohnt"],
  ["leben","vivir","Er lebt allein.","hat gelebt"],
  ["essen","comer","Wir essen um acht Uhr.","hat gegessen"],
  ["trinken","beber","Ich trinke gern Tee.","hat getrunken"],
  ["schlafen","dormir","Das Baby schläft noch.","hat geschlafen"],
  ["aufstehen","levantarse","Ich stehe um sieben Uhr auf.","ist aufgestanden"],
  ["anrufen","llamar por teléfono","Ich rufe dich morgen an.","hat angerufen"],
  ["einkaufen","hacer la compra","Wir kaufen am Samstag ein.","hat eingekauft"],
  ["kaufen","comprar","Ich kaufe ein neues Handy.","hat gekauft"],
  ["bezahlen","pagar","Kann ich mit Karte bezahlen?","hat bezahlt"],
  ["kosten","costar","Wie viel kostet das?","hat gekostet"],
  ["brauchen","necesitar","Ich brauche Hilfe.","hat gebraucht"],
  ["helfen","ayudar","Kannst du mir helfen?","hat geholfen"],
  ["warten","esperar","Ich warte auf den Bus.","hat gewartet"],
  ["treffen","encontrarse con","Ich treffe meine Freunde.","hat getroffen"],
  ["besuchen","visitar","Sie besucht ihre Oma.","hat besucht"],
  ["einladen","invitar","Ich lade dich zum Essen ein.","hat eingeladen"],
  ["mitbringen","traer (consigo)","Bringst du Kuchen mit?","hat mitgebracht"],
  ["fahren","ir / conducir","Ich fahre mit dem Auto.","ist gefahren"],
  ["fliegen","volar","Wir fliegen nach Madrid.","ist geflogen"],
  ["reisen","viajar","Er reist gern.","ist gereist"],
  ["ankommen","llegar","Der Zug kommt um neun an.","ist angekommen"],
  ["abfahren","salir (transporte)","Der Bus fährt gleich ab.","ist abgefahren"],
  ["umsteigen","hacer transbordo","Wir müssen in Köln umsteigen.","ist umgestiegen"],
  ["laufen","correr / andar","Ich laufe jeden Morgen.","ist gelaufen"],
  ["spielen","jugar / tocar","Die Kinder spielen draußen.","hat gespielt"],
  ["lernen","aprender / estudiar","Ich lerne seit einem Jahr Deutsch.","hat gelernt"],
  ["üben","practicar","Du musst jeden Tag üben.","hat geübt"],
  ["wiederholen","repetir","Kannst du das wiederholen?","hat wiederholt"],
  ["vergessen","olvidar","Ich vergesse oft meine Schlüssel.","hat vergessen"],
  ["sich erinnern","recordar","Ich erinnere mich an den Urlaub.","hat sich erinnert"],
  ["sich freuen","alegrarse","Ich freue mich auf das Wochenende.","hat sich gefreut"],
  ["sich ärgern","enfadarse","Er ärgert sich über den Lärm.","hat sich geärgert"],
  ["sich interessieren","interesarse","Ich interessiere mich für Kunst.","hat sich interessiert"],
  ["sich entscheiden","decidirse","Ich muss mich entscheiden.","hat sich entschieden"],
  ["vorschlagen","proponer","Ich schlage ein Treffen vor.","hat vorgeschlagen"],
  ["erklären","explicar","Kannst du das erklären?","hat erklärt"],
  ["erzählen","contar","Er erzählt eine Geschichte.","hat erzählt"],
  ["beschreiben","describir","Beschreib mir den Weg.","hat beschrieben"],
  ["mögen","gustar (algo a alguien)","Ich mag Schokolade.","hat gemocht"],
  ["gefallen","agradar","Das Bild gefällt mir.","hat gefallen"],
  ["gehören","pertenecer","Das Buch gehört mir.","hat gehört"],
  ["passieren","pasar / ocurrir","Was ist passiert?","ist passiert"],
  ["vorbereiten","preparar","Ich bereite das Essen vor.","hat vorbereitet"],
  ["anfangen","empezar","Der Kurs fängt um neun an.","hat angefangen"],
  ["aufhören","dejar de","Es hört auf zu regnen.","hat aufgehört"],
  ["versuchen","intentar","Ich versuche es nochmal.","hat versucht"],
  ["verlieren","perder","Ich verliere oft meine Handschuhe.","hat verloren"],
  ["gewinnen","ganar","Wer gewinnt das Spiel?","hat gewonnen"],
  ["öffnen","abrir","Kannst du das Fenster öffnen?","hat geöffnet"],
  ["schließen","cerrar","Das Geschäft schließt um sechs.","hat geschlossen"],
  ["bestellen","pedir","Ich bestelle einen Kaffee.","hat bestellt"],
  ["mieten","alquilar","Wir mieten eine Wohnung.","hat gemietet"],
  ["umziehen","mudarse","Er zieht nächsten Monat um.","ist umgezogen"],
  ["sich bewerben","solicitar un empleo","Ich bewerbe mich um die Stelle.","hat sich beworben"],
  ["verdienen","ganar (dinero)","Sie verdient gut.","hat verdient"],
  ["vermissen","echar de menos","Ich vermisse meine Familie.","hat vermisst"],
  ["verpassen","perder (un tren)","Ich verpasse den Zug.","hat verpasst"],
  ["genießen","disfrutar","Wir genießen die Sonne.","hat genossen"]
];

// Parámetro del widget: 0, 1, 2... 
const n = parseInt(args.widgetParameter || "0", 10) || 0;
const bloque = Math.floor(Date.now() / 60000);
function gcd(a, b) { return b ? gcd(b, a % b) : a; }
const paso = [7, 11, 13].find(p => gcd(verbos.length, p) === 1) || 1;
const i = ((bloque * paso + n * 5) % verbos.length + verbos.length) % verbos.length;
const [de, es, ejemplo, perfekt] = verbos[i];

const w = new ListWidget();
w.backgroundColor = new Color("#1c1c1e");
w.setPadding(14, 14, 14, 14);

const t1 = w.addText("🇩🇪 Verb");
t1.font = Font.mediumSystemFont(11);
t1.textColor = new Color("#8e8e93");
w.addSpacer(4);

const t2 = w.addText(de);
t2.font = Font.boldSystemFont(24);
t2.textColor = Color.white();
t2.minimumScaleFactor = 0.5;

const t3 = w.addText(es);
t3.font = Font.systemFont(15);
t3.textColor = new Color("#ffd60a");
t3.minimumScaleFactor = 0.7;

const t4 = w.addText(perfekt);
t4.font = Font.mediumSystemFont(12);
t4.textColor = new Color("#64d2ff");
t4.minimumScaleFactor = 0.7;

w.addSpacer(6);
const t5 = w.addText(ejemplo);
t5.font = Font.italicSystemFont(12);
t5.textColor = new Color("#d1d1d6");
t5.minimumScaleFactor = 0.6;

// iOS decide cuándo actualizar realmente el widget.
w.refreshAfterDate = new Date(Date.now() + 60000);

if (config.runsInWidget) {
  Script.setWidget(w);
} else {
  w.presentSmall();
}
Script.complete();
