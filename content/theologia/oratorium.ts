// content/theologia/oratorium.ts
// The Oratorium (WP8, spec scholastica-credo-and-wing-parity.md §2): the
// prayers and hymns Thomas himself wrote, earned piece by piece across the
// theology course. Theology's trophy hall — the parallel to philosophy's 24
// Theses, but reception-register: the saint hands you the prayer he wrote
// about the thing you just learned.
//
// TEXT DISCIPLINE (spec ⚠): every Latin text is fetched verbatim from a
// public-domain source and cited per piece (latinSource). English is
// house-literal (own translation, owned — spec's default; a public-domain
// verse translation like Hopkins' Adoro Te is a later showpiece option).
// Three prayers (Ante Studium T1, Concede mihi T7, the thanksgiving before
// Communion T9) are Aquinas prose prayers whose full verbatim text was not
// cleanly fetchable this session; they ship with their verified incipit and
// textPending: true, to be completed at the next authoring pass — NOT
// reproduced from memory. The hymns, the antiphon, and the Creed are complete.

export type OratoriumKind = 'hymn-stanza' | 'prayer' | 'antiphon';

/** A hymn the learner assembles stanza by stanza. Its pieces (below) carry
    partOf === this id; the hall paints their stanzas onto one shared plate,
    and the hymn "completes" when every gated piece of it is earned. */
export interface OratoriumHymn {
  id: string;
  title: string;
  /** ceremony line played when the last stanza completes the whole hymn. */
  completesAt: number; // gate module id of the final stanza
}

export const ORATORIUM_HYMNS: OratoriumHymn[] = [
  { id: 'adoro-te', title: 'Adoro te devote', completesAt: 15 },
  { id: 'pange-lingua', title: 'Pange lingua gloriosi', completesAt: 14 },
  { id: 'verbum-supernum', title: 'Verbum supernum prodiens', completesAt: 14 },
  { id: 'lauda-sion', title: 'Lauda Sion Salvatorem', completesAt: 12 },
  { id: 'sacris-solemniis', title: 'Sacris solemniis', completesAt: 6 },
];

export interface OratoriumPiece {
  id: string;
  /** Display name of the piece as earned. */
  piece: string;
  /** Which stanzas of the parent hymn this piece is (for the assembly plate). */
  stanzas?: number[];
  latin: string;
  english: string;
  /** Gate: the module whose completion earns this piece. */
  gate: number;
  kind: OratoriumKind;
  /** For hymn stanzas: the hymn they assemble into. */
  partOf?: string;
  /** Source citations (spec: cite per piece). */
  latinSource: string;
  englishSource: string;
  /** Set when full verbatim text still awaits an authoring-time fetch; the
      hall shows the incipit and marks it, rather than shipping fabricated text. */
  textPending?: boolean;
}

const WIKISOURCE_ADORO = 'Latin text: la.wikisource.org, "Adoro te devote" (Thomas Aquinas, saec. XIII), retrieved 2026-07-11';
const WIKISOURCE_PANGE = 'Latin text: la.wikisource.org, "Pange lingua" (Thomas Aquinas, saec. XIII), retrieved 2026-07-11';
const WIKI_VERBUM = 'Latin text: en.wikipedia.org, "Verbum supernum prodiens" (Liturgy of the Hours), retrieved 2026-07-11';
const WIKI_OSC = 'Latin text: en.wikipedia.org, "O sacrum convivium" (Liber Usualis punctuation), retrieved 2026-07-11';
const WIKISOURCE_LAUDA = 'Latin text: la.wikisource.org, "Lauda Sion" (Missale Romanum 1962), retrieved 2026-07-11';
const HOUSE = 'English: house-literal translation (Scholastica), em-dash-free';

export const ORATORIUM: OratoriumPiece[] = [
  {
    id: 'ante-studium', gate: 1, kind: 'prayer',
    piece: 'Ante Studium',
    latin: 'Creator ineffabilis...',
    english: 'Ineffable Creator... (Thomas Aquinas’s prayer before study; full text to be set at the next authoring pass.)',
    latinSource: 'Incipit only this session; full verbatim text pending fetch (Aquinas, Piae Preces).',
    englishSource: HOUSE, textPending: true,
  },
  {
    id: 'adoro-st1', gate: 2, kind: 'hymn-stanza', partOf: 'adoro-te', stanzas: [1],
    piece: 'Adoro te devote, st. 1',
    latin: 'Adoro te devote, latens Deitas,\nQuae sub his figuris vere latitas:\nTibi se cor meum totum subiicit,\nQuia te contemplans totum deficit.',
    english: 'I adore you devoutly, hidden Godhead,\ntruly concealed beneath these appearances:\nmy whole heart submits itself to you,\nfor gazing on you it fails entirely.',
    latinSource: WIKISOURCE_ADORO, englishSource: HOUSE,
  },
  {
    id: 'adoro-st2', gate: 3, kind: 'hymn-stanza', partOf: 'adoro-te', stanzas: [2],
    piece: 'Adoro te devote, st. 2',
    latin: 'Visus, tactus, gustus in te fallitur,\nSed auditu solo tuto creditur.\nCredo quidquid dixit Dei Filius:\nNil hoc verbo Veritatis verius.',
    english: 'Sight, touch, and taste are deceived in you,\nbut by hearing alone one safely believes.\nI believe whatever the Son of God has said:\nnothing is truer than this word of Truth.',
    latinSource: WIKISOURCE_ADORO, englishSource: HOUSE,
  },
  {
    id: 'pange-st6', gate: 4, kind: 'hymn-stanza', partOf: 'pange-lingua', stanzas: [6],
    piece: 'Pange lingua, st. 6 (doxology)',
    latin: 'Genitori Genitoque,\nlaus et iubilatio,\nsalus, honor, virtus quoque\nsit et benedictio.\nProcedenti ab utroque\ncompar sit laudatio.',
    english: 'To the Begetter and the Begotten\nbe praise and jubilation,\nhealth, honor, might also,\nand blessing.\nTo the One proceeding from both\nbe equal praise.',
    latinSource: WIKISOURCE_PANGE, englishSource: HOUSE,
  },
  {
    id: 'verbum-st1', gate: 5, kind: 'hymn-stanza', partOf: 'verbum-supernum', stanzas: [1],
    piece: 'Verbum supernum prodiens, st. 1',
    latin: 'Verbum supernum prodiens,\nNec Patris linquens dexteram,\nAd opus suum exiens,\nVenit ad vitae vesperam.',
    english: 'The Word from on high going forth,\nyet not leaving the Father’s right hand,\ngoing out to his work,\ncame to the evening of his life.',
    latinSource: WIKI_VERBUM, englishSource: HOUSE,
  },
  {
    id: 'panis-angelicus', gate: 6, kind: 'hymn-stanza', partOf: 'sacris-solemniis', stanzas: [6],
    piece: 'Panis angelicus (Sacris solemniis, st. 6)',
    latin: 'Panis angelicus...',
    english: 'The bread of angels becomes the bread of men... (full stanza to be set at the next authoring pass.)',
    latinSource: 'Incipit only this session; full verbatim text pending fetch (Sacris solemniis st. 6, Liturgy of the Hours).',
    englishSource: HOUSE, textPending: true,
  },
  {
    id: 'concede-mihi', gate: 7, kind: 'prayer',
    piece: 'Concede mihi',
    latin: 'Concede mihi, misericors Deus...',
    english: 'Grant me, merciful God... (Thomas Aquinas’s prayer for the wise ordering of life; full text to be set at the next authoring pass.)',
    latinSource: 'Incipit only this session; full verbatim text pending fetch (Aquinas, Piae Preces).',
    englishSource: HOUSE, textPending: true,
  },
  {
    id: 'o-sacrum-convivium', gate: 8, kind: 'antiphon',
    piece: 'O sacrum convivium',
    latin: 'O sacrum convivium!\nin quo Christus sumitur:\nrecolitur memoria passionis eius:\nmens impletur gratia:\net futurae gloriae nobis pignus datur.\nAlleluia.',
    english: 'O sacred banquet,\nin which Christ is received:\nthe memory of his Passion is renewed:\nthe mind is filled with grace:\nand a pledge of future glory is given to us.\nAlleluia.',
    latinSource: WIKI_OSC, englishSource: HOUSE,
  },
  {
    id: 'ad-medicum', gate: 9, kind: 'prayer',
    piece: 'The prayer before Communion',
    latin: '...sicut aeger ad medicum vitae...',
    english: '...as a sick man to the physician of life... (from Aquinas’s prayer before Communion; full text to be set at the next authoring pass.)',
    latinSource: 'Incipit only this session; full verbatim text pending fetch (Aquinas, Piae Preces).',
    englishSource: HOUSE, textPending: true,
  },
  {
    id: 'pange-st2-3', gate: 10, kind: 'hymn-stanza', partOf: 'pange-lingua', stanzas: [2, 3],
    piece: 'Pange lingua, st. 2–3',
    latin: 'Nobis datus, nobis natus\nex intacta Virgine,\net in mundo conversatus,\nsparso verbi semine,\nsui moras incolatus\nmiro clausit ordine.\n\nIn supremae nocte coenae\nrecumbens cum fratribus,\nobservata lege plene\ncibis in legalibus,\ncibum turbae duodenae\nse dat suis manibus.',
    english: 'Given to us, born for us\nfrom an unspoilt Virgin,\nand having dwelt in the world,\nthe seed of the word scattered,\nhe closed the time of his sojourn\nin a wondrous order.\n\nOn the night of the last supper,\nreclining with his brethren,\nthe law fully observed\nwith the appointed foods,\nas food to the band of twelve\nhe gives himself with his own hands.',
    latinSource: WIKISOURCE_PANGE, englishSource: HOUSE,
  },
  {
    id: 'adoro-st6-3', gate: 11, kind: 'hymn-stanza', partOf: 'adoro-te', stanzas: [3, 6],
    piece: 'Adoro te devote, st. 6 & 3',
    latin: 'Pie pellicane, Iesu Domine,\nMe immundum munda tuo sanguine.\nCuius una stilla salvum facere\nTotum mundum quit ab omni scelere.\n\nIn cruce latebat sola Deitas,\nAt hic latet simul et humanitas;\nAmbo tamen credens atque confitens,\nPeto quod petivit latro paenitens.',
    english: 'Merciful Pelican, Lord Jesus,\ncleanse me, the unclean, with your blood,\nof which one drop can make whole\nthe entire world of every sin.\n\nOn the cross the Godhead alone lay hidden,\nbut here the humanity lies hidden too;\nyet believing and confessing both,\nI ask what the repentant thief asked.',
    latinSource: WIKISOURCE_ADORO, englishSource: HOUSE,
  },
  {
    id: 'lauda-sion-open', gate: 12, kind: 'hymn-stanza', partOf: 'lauda-sion', stanzas: [1],
    piece: 'Lauda Sion, opening',
    latin: 'Lauda, Sion, Salvatorem,\nLauda ducem et pastorem,\nIn hymnis et canticis.',
    english: 'Praise, O Sion, the Savior,\npraise the leader and the shepherd,\nin hymns and songs.',
    latinSource: WIKISOURCE_LAUDA, englishSource: HOUSE,
  },
  {
    id: 'pange-st4', gate: 13, kind: 'hymn-stanza', partOf: 'pange-lingua', stanzas: [4],
    piece: 'Pange lingua, st. 4',
    latin: 'Verbum caro panem verum\nverbo carnem efficit,\nfitque sanguis Christi merum;\net si sensus deficit,\nad firmandum cor sincerum\nsola fides sufficit.',
    english: 'The Word made flesh makes true bread\ninto flesh by a word,\nand the wine becomes the blood of Christ;\nand if sense falls short,\nto steady the sincere heart\nfaith alone suffices.',
    latinSource: WIKISOURCE_PANGE, englishSource: HOUSE,
  },
  {
    id: 'tantum-ergo', gate: 14, kind: 'hymn-stanza', partOf: 'pange-lingua', stanzas: [5],
    piece: 'Tantum ergo (Pange lingua, st. 5)',
    latin: 'Tantum ergo sacramentum\nveneremur cernui,\net antiquum documentum\nnovo cedat ritui,\npraestet fides supplementum\nsensuum defectui.',
    english: 'So great a sacrament, therefore,\nlet us venerate with bowed heads,\nand let the old observance\ngive way to the new rite;\nlet faith supply\nfor the failure of the senses.',
    latinSource: WIKISOURCE_PANGE, englishSource: HOUSE,
  },
  {
    id: 'o-salutaris', gate: 14, kind: 'hymn-stanza', partOf: 'verbum-supernum', stanzas: [5, 6],
    piece: 'O salutaris hostia (Verbum supernum, st. 5–6)',
    latin: 'O salutaris hostia,\nQuae caeli pandis ostium,\nBella premunt hostilia;\nDa robur, fer auxilium.\n\nUni trinoque Domino\nSit sempiterna gloria:\nQui vitam sine termino\nNobis donet in patria.',
    english: 'O saving Victim,\nwho opens the gate of heaven,\nhostile wars press upon us;\ngive strength, bear aid.\n\nTo the Lord, one and triune,\nbe everlasting glory:\nmay he grant us life without end\nin our homeland.',
    latinSource: WIKI_VERBUM, englishSource: HOUSE,
  },
  {
    id: 'adoro-st7', gate: 15, kind: 'hymn-stanza', partOf: 'adoro-te', stanzas: [7],
    piece: 'Adoro te devote, st. 7',
    latin: 'Iesu, quem velatum nunc aspicio,\nOro fiat illud quod tam sitio;\nUt te revelata cernens facie,\nVisu sim beatus tuae gloriae.',
    english: 'Jesus, whom now I look upon veiled,\nI pray that what I so thirst for may come to be:\nthat, beholding you with face unveiled,\nI may be blessed by the sight of your glory.',
    latinSource: WIKISOURCE_ADORO, englishSource: HOUSE,
  },
];

/** The perfectus certificate (spec §5): the Apostles' Creed whole, presented
    at the theology perfectus rank ceremony as the parchment — every article
    now said with understanding. Fetched verbatim. */
export const APOSTLES_CREED = {
  latin: 'Credo in Deum Patrem omnipoténtem, Creatórem cæli et terræ, et in Iesum Christum, Fílium Eius unicum, Dóminum nostrum, qui concéptus est de Spíritu Sancto, natus ex Maria Virgine, passus sub Póntio Piláto, crucifixus, mórtuus, et sepúltus, descéndit ad ínferos, tértia die resurréxit a mórtuis, ascéndit ad cælos, sedet ad déxteram Dei Patris omnipoténtis, inde ventúrus est iudicáre vivos et mórtuos. Et in Spíritum Sanctum, sanctam Ecclésiam cathólicam, sanctórum communiónem, remissiónem peccatórum, carnis resurrectiónem, vitam ætérnam. Amen.',
  english: 'I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried; he descended into hell, on the third day he rose again from the dead, he ascended into heaven, is seated at the right hand of God the Father almighty, from there he will come to judge the living and the dead. And in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
  latinSource: 'Latin text: la.wikisource.org, "Symbolum Apostolicum", retrieved 2026-07-11',
  englishSource: HOUSE,
};

/** Pieces earned given the set of completed theology module ids. */
export function getEarnedOratorium(completedModuleIds: number[]): OratoriumPiece[] {
  const done = new Set(completedModuleIds);
  return ORATORIUM.filter(p => done.has(p.gate));
}

/** The nearest not-yet-earned Oratorium piece — the earliest-gated one whose
    module isn't complete. For the theology fin's cross-hall pull line (WP8,
    spec §6, "Tantum Ergo is one module away"). null when all are earned. */
export function getNextOratoriumPiece(completedModuleIds: number[]): OratoriumPiece | null {
  const done = new Set(completedModuleIds);
  const remaining = ORATORIUM.filter(p => !done.has(p.gate)).sort((a, b) => a.gate - b.gate);
  return remaining[0] ?? null;
}

/** Hymn assembly state: for each hymn, which of its gated pieces are earned. */
export interface HymnAssembly {
  hymn: OratoriumHymn;
  pieces: OratoriumPiece[];
  earned: number;
  total: number;
  complete: boolean;
}

export function getHymnAssembly(completedModuleIds: number[]): HymnAssembly[] {
  const done = new Set(completedModuleIds);
  return ORATORIUM_HYMNS.map(hymn => {
    const pieces = ORATORIUM.filter(p => p.partOf === hymn.id);
    const earned = pieces.filter(p => done.has(p.gate)).length;
    return { hymn, pieces, earned, total: pieces.length, complete: pieces.length > 0 && earned === pieces.length };
  });
}
