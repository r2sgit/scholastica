import type { ModuleMeta } from '../types';

/** T10 · The Incarnation. Wired into the live app by scholastica-claude-code-wing-parity-RUN.md (WP-A). Content is the authored t10-content.json, copied faithfully; no prose edits. */
export const t10: ModuleMeta = {
  id: 10,
  title: `The Incarnation`,
  short: `De Incarnatione Verbi`,
  label: `Theologia X · The Incarnation`,
  latin: `De Incarnatione Verbi`,
  aim: `The eternal Word assumed a complete human nature, body and rational soul, into His own divine Person: one Person subsisting in two natures, so that in Christ there is no human person, only the human nature of a divine who. The union is hypostatic, in the Person, not in the natures: Chalcedon confesses one and the same Christ in two natures, without confusion, without change, without division, without separation, each nature keeping its properties and coming together in one Person. Truly God against Arius, fully man against Apollinaris, one Person against Nestorius, two natures against Eutyches. What belongs to either nature is truly said of the one Person (communication of idioms): God was born, God died, in the nature that can, while the Godhead remains impassible. The coming was not strictly necessary but supremely fitting, the remedy for sin (house Thomist line, Scotist primacy answered at strength, Rome's question left open). Christ's soul held the fullness of grace, personal and capital one habit, from which the members of His body draw their one supernatural life.`,
  lessons: [
    {
      id: `t10-l1`,
      num: `I`,
      title: `The Distinction That Waited`,
      latin: `persona et natura`,
      tag: `persona et natura`,
      fin: {
        tag: `persona et natura`,
        heading: `The taxpayer's grammar, at Bethlehem.`,
        body: `Human nature pays no taxes; the one who has it pays. The course learned that grammar on a man named John, and the Trinity spent it once: one what, three whos. Now the same grammar is spent the other way. In the manger lies a complete human nature, body and rational soul, lacking nothing that makes us human, and the who subsisting in it is not a human person at all: it is the eternal Word. Nothing human is missing, because personhood was never a part; it is the one who owns the parts, and this nature's owner is God the Son. Aquinas stakes the whole faith on the address of the union: if the human nature is not united to the Word in person, it is nowise united to Him, and belief in the Incarnation is altogether done away. The union is in the Person. The distinction that waited eighteen modules and four councils is now carrying its full weight, and it holds.`,
      },
      questions: [
        {
          id: `t10-l1-q1`,
          type: "mcq",
          stem: `Human nature pays no taxes; the who that has it pays. Now the sentence that grammar was saving itself for: the Word was made flesh. What happened at Bethlehem, counted exactly?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A divine who took to Himself a complete human what: one Person, two natures.",
                "feedback": "Respondeo: the eternal Word, the second who of the Trinity, assumed a full human nature, body and rational soul, and subsists in it as His own. Nobody new began to exist; Someone eternal began to be man. Notice the symmetry the course has earned: the Trinity counts one what, three whos; the Incarnation counts one who, two whats. Same grammar, opposite deployment, and every heresy in lesson three is a failure to hold the count."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A divine who and a human who joined in the deepest possible partnership.",
                "feedback": "Stated seriously, for a Patriarch of Constantinople preached it: the Word dwelling in the man Jesus as in a temple, two whos morally united. But a partnership, however deep, is two subjects; and then who was born of Mary, and who died? The one answer the gospel gives is one answer: the same. Two whos make two sons, and the third lesson will watch a council refuse exactly that arithmetic."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The divine what and the human what fused into one new divine-human what.",
                "feedback": "Fusion is a change, and both terms survive this union unchanged: true God, true man, each nature keeping its own properties. Blend them and Christ is neither consubstantial with the Father nor consubstantial with us, a third thing saving no one. The union is not located in the whats at all; that is the whole discovery. It is located one register up, in the who who owns both."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "God began to appear as a man, taking the look of flesh for our sake.",
                "feedback": "Appearing is the oldest and cheapest account: flesh as costume, the Docetist reading the first Christians already fought. The Creed's verbs are not stage directions: born, suffered, died, and none of them can be performed by an appearance. The Word was made flesh, John says, and made is not seemed. If the flesh is a look, the Cross is theater, and theater redeems nobody."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t10-l1-q2`,
          type: "mcq",
          stem: `In the Trinity: one what, three whos. In Christ: one who, two whats. What single skill do both mysteries demand of the learner?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Comfort with paradox: both sentences flirt with contradiction and faith embraces it.",
                "feedback": "The course has now refused this twice, and refuses it here with the same blade: contradiction requires the same respect, and neither mystery commits it. One essence and three Persons answer different questions; one Person and two natures likewise. Paradox-comfort is a literary virtue. Theology asks for something harder and colder: counting exactly, and kneeling at the result."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Counting whos and whats separately, and never letting one register answer for the other.",
                "feedback": "Respondeo: the M5 grammar is the single tool under both mysteries: What is it? and Who is it? are different questions with independent counts. The Trinity: one answer to What, three to Who. Christ: two answers to What, one to Who. Every ancient wreck confused the registers: Arius counted the Son a lesser what; Sabellius merged the whos; Nestorius doubled the who; Eutyches blended the whats. Two questions, kept distinct: the whole orthodox skill."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Trust in authority: both counts are decreed, and analysis of them is discouraged.",
                "feedback": "The councils analyzed for centuries and wrote their analysis into definitions; discouraging analysis is the one thing the tradition has never done with these mysteries. Authority grounds the assent, as the Trinity module taught: the datum is received, not derived. But received data can be parsed exactly, and must be, or the errors win by default. The Church's decrees are the analysis, canonized."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Modesty about language: who and what are human words that break at this altitude.",
                "feedback": "They bend at this altitude, by analogy, and the analogy module taught the difference between bending and breaking. If who and what broke entirely, the creeds written from them would say nothing, and four councils legislated in exactly this vocabulary. The words hold because they are stretched, not snapped: person and nature, purified of creaturely packaging, still count what they count. Modesty is real; aphasia is surrender."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t10-l1-q3`,
          type: "precision_check",
          stem: `A claim to audit at the door: <em>"At Bethlehem, God changed into a man, the way water changed into wine at Cana."</em> Where exactly does it break?`,
          payload: {
            "statement": "At Bethlehem, God changed into a man, the way water changed into wine at Cana.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At God: the subject of the Incarnation is the Word, not the Godhead common to Three.",
                "feedback": "A real precision, worth keeping: the Son alone became man, though the whole Trinity worked the becoming. But the claim's fatal wound is not in the subject; the Word is truly God, and God was made man is creed-true said of Him. Aim at the verb. Changed into is where the sentence dies, and the Athanasian Creed performs the autopsy."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At a man: He took human nature, so the sentence should read changed into humanity.",
                "feedback": "This repairs the sentence into a worse one: into humanity keeps the fatal verb and blurs the target besides. He did assume a singular, complete human nature, this body and this soul, not humanity in general, or every man would be the Word, as Damascene dryly notes. But singular or general, nothing was changed into anything. The break was always the conversion. Fix that and the rest follows."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At Cana: miracles of nature cannot be compared with mysteries of grace at all.",
                "feedback": "Comparison is not the crime; the tradition compares relentlessly, and this course runs on it. Cana fails as a model for a stated reason, not a genre rule: it is a conversion, one substance becoming another, and conversion is precisely what the Incarnation is not. Ban all comparison and the Athanasian Creed loses its own soul-and-flesh analogy two lines later. Audit the mechanism, not the manners."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At changed into: the Godhead converted into nothing; He assumed manhood, unchanged.",
                "feedback": "Respondeo: the Creed's own surgery: One, not by conversion of the Godhead into Flesh, but by taking of the Manhood into God. Water ceased to be water at Cana; the Word never ceased to be God, and could not, being immutable act. The Incarnation adds nothing to God and subtracts nothing: the newness, as the missions lesson taught, is entirely on the creature's side, a human nature newly owned. Taking, not turning: the whole mystery in the choice of verb."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t10-l1-q4`,
          type: "mcq",
          stem: `No human person in Christ: the formula sounds like something is missing from Him. Aquinas answers with a hand. Whose, and why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The carpenter's hand: Christ worked with human hands, proving the manhood complete.",
                "feedback": "True devotion, wrong argument: the working hands prove the nature real, and the Church loves the proof, but they do not answer the missing-person worry, which is about metaphysics, not anatomy. The hand Aquinas reaches for belongs to a philosopher, and its point is sharper: it shows why an individual thing can be complete in itself yet not a person, because it exists in a greater whole."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Socrates' hand: individual and complete, yet no person, because it exists in a whole.",
                "feedback": "Respondeo: Aquinas's own example: the hand of Socrates is a kind of individual, but not a person, because it does not exist by itself but in something more perfect, the whole man. So too Christ's human nature: individual, complete, lacking no part, yet not a human person, because it never existed by itself; from the first instant it subsisted in the Person of the Word. Personhood is not a component that could be absent. It is a mode of existing, and this nature exists in Someone greater."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The beggar's hand: what is received from another is not thereby incomplete.",
                "feedback": "A workable image for grace, and this module will not need it: the worry here is not about receiving but about lacking. The objection says a nature without its own personhood is a mutilated nature; the answer must show personhood is no part at all. Aquinas's chosen hand does that by being complete as a hand while existing in a whole. The beggar's hand receives. Socrates' hand subsists in another: that is the point."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "God's hand, figuratively: the nature is held so closely no person could fit.",
                "feedback": "Poetry where a distinction is owed, and the poetry even misleads: no person could fit suggests personhood was crowded out, a part displaced by pressure. Nothing was displaced. The nature has no created personhood because it never subsisted apart, not because something squeezed it out; and far from being diminished, Aquinas says it has a greater dignity than ours, existing in Someone nobler than itself. The fit is not tight. It is elevation."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t10-l1-q5`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Therefore, whatever adheres to a person is united to it in person, whether it belongs to its nature or not. Hence, if the human nature is not united to God the Word in person, it is nowise united to Him; and thus belief in Incarnation is altogether done away with, and Christian faith wholly overturned. Therefore, inasmuch as the Word has a human nature united to Him, which does not belong to His Divine Nature, it follows that the union took place in the Person of the Word, and not in the nature.</p><div class="cr-cite">ST III, q. 2, a. 2, co. &middot; trans. Fathers of the English Dominican Province &middot; verified against New Advent</div></div>Aquinas raises the stakes to everything: in person, or nowise united. Why is there no third address for the union?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because whatever is truly united to a subsisting who is united to it precisely as person.",
                "feedback": "Respondeo: the suppositum owns everything in it, of its nature or beyond it: whatever adheres to a person is united to it in person. So the human nature is either the Word's own, united in His Person, or it is external to Him, a dwelling, a garment, a colleague, and then God did not become man; a man merely housed God. That is why the stakes are total: every softer address for the union dissolves the sentence the faith lives on. The Word was made flesh, or Christianity is a beautiful mistake about a holy man."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because Scripture names no third, and theology may not invent addresses.",
                "feedback": "Scripture's silence is real but the argument here is structural, not exegetical: Aquinas has just surveyed what there is in Christ for a union to happen in, and the inventory is short. Union in the divine nature would drag the Three into flesh; a merely accidental union, grace inhabiting a man, is Nestorius' temple and no Incarnation. What remains is the Person. The text argues from the metaphysics of suppositum, and the metaphysics leaves exactly one door."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because union in the divine nature would incarnate the Father and the Spirit too.",
                "feedback": "True, and Aquinas holds it: the nature is common to Three, so a union lodged there would drag paternity and spiration into the manger, which revelation flatly refuses; the Son alone became man. But notice this only closes one wrong door; it does not show why the Person is the necessary right one. The passage's own engine is the ownership principle: what adheres to a person is united in person. The Trinity-wide disaster is a corollary, not the core."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because natures are abstractions, and only persons are real enough to be united.",
                "feedback": "Too nominalist for the house: natures are entirely real, and Christ's human nature is a real individual thing, body and soul, not a concept. What natures are not is self-standing: they exist in supposita, as the what of a who. That is why the union cannot terminate in a free-floating nature; there is no such floater. Real but not independent: miss that middle position and either the union has no subject or the nature becomes a second one."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t10-l1-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "In the Incarnation the divine and human natures blended, as wine and water mingle in one cup."`,
          latin_tag: `persona et natura`,
          doctrine_line: `The Word assumed a complete human nature into His own Person: one who, two whats, and no human person left over.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The mingling is the union: one Christ from two natures poured together.",
                "feedback": "From two natures was exactly the formula the tradition learned to distrust: it permits the pour, after which neither wine nor water remains itself. The definition's grammar is in two natures, both intact, each keeping its properties. A blended Christ is neither truly God, the Godhead being immutable, nor truly man, the manhood being dissolved; and what he touches he cannot heal, being neither. The cup image dies at the next council over."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. But the blend is asymmetric: the divine absorbs the human as the sea a drop.",
                "feedback": "The honest version of the error, and an archimandrite of Constantinople held it devoutly: the humanity swallowed in glory like a drop in the ocean. Reverence for the Godhead, at the price of the manhood, and the price is everything: an absorbed humanity cannot hunger, weep, obey, or die, and the Passion needs all four. The sea image drowns the very nature that was assumed to save us. Chalcedon's first two adverbs stand against exactly this drop."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The natures remain unblended and unchanged; the union is in the Person who owns both.",
                "feedback": "Respondeo: the union is hypostatic, in the who, never chemical, in the whats: true God and true man, each nature entire, one Person subsisting in both. The Athanasian Creed says it without residue: one altogether, not by confusion of substance, but by unity of Person. Wine and water was always the wrong shelf of images. The right one, oddly homely, is the Creed's own: as reasonable soul and flesh is one man, so God and Man is one Christ: one who, two really different things, no cocktail."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Nothing so physical occurred: the union is the moral harmony of two wills.",
                "feedback": "The right verdict fleeing into the opposite ditch: deny the blend by denying any real union, leaving a man in perfect agreement with God. Moral harmony is what saints have; if that is all Christ has, He differs from Francis in degree and the Word was never made flesh. The union is not physical as chemistry, but it is fiercely real: one Person truly subsisting in two natures. Refuse both the cocktail and the committee. The mystery lives between them."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t10-l2`,
      num: `II`,
      title: `The Formula`,
      latin: `in duabus naturis`,
      tag: `in duabus naturis`,
      fin: {
        tag: `in duabus naturis`,
        heading: `Four adverbs, two ditches each side.`,
        body: `Chalcedon did not explain the union; it fenced it, with four adverbs set two against each ditch. Against the blenders, who fuse the natures into one: without confusion, without change, the properties of each nature preserved. Against the dividers, who split Christ into two sons: without division, without separation, coming together into one Person and one subsistence. The natures are recognized, not manufactured; the union annuls neither. And the Council anchored the whole thing in an image the course already owns, because the Athanasian Creed had reached for it too: as the reasonable soul and flesh is one man, so God and man is one Christ. You are one person in two principles, body and soul, without being two of you. The formula asks you to grant Christ the same unity you are, one level higher: one Person, not in body and soul, but in Godhead and manhood.`,
      },
      questions: [
        {
          id: `t10-l2-q1`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>one and the same Christ, Son, Lord, Only-begotten, recognized in two natures, without confusion, without change, without division, without separation; the distinction of natures being in no way annulled by the union, but rather the characteristics of each nature being preserved and coming together to form one person and subsistence.</p><div class="cr-cite">Council of Chalcedon, Definition of Faith, 451 &middot; DS 302 &middot; trans. Bettenson &middot; verified against Anglicans Online / New Advent acts</div></div>Four adverbs, deliberately placed. What are they fencing against?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Two against fusing the natures, two against splitting the Person: a ditch on each side.",
                "feedback": "Respondeo: the definition is a ridge with the same two-drop architecture as the Athanasian Creed. Without confusion, without change face the blenders, who mix the natures into a third thing; without division, without separation face the dividers, who tear Christ into two sons. The middle clause states the balance directly: the distinction of natures in no way annulled, yet coming together into one Person. Every Christological heresy is a fall off one shoulder of this ridge, which is why four adverbs, not one, were needed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Four aspects of one error: all four adverbs repel the single mistake of denying Christ's divinity.",
                "feedback": "Denying the divinity is Arius, and Arius fell before Chalcedon, at Nicaea; this council fights a later war, over how the two natures already granted are united. The four adverbs are not one point four times; they name two opposite failures, fusion and division, two adverbs apiece. Read them as one and you lose the council's whole achievement: it fought on two fronts at once, and the fronts pull opposite directions."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Liturgical cadence: solemn quadruple negation for a solemn confession, sound over sense.",
                "feedback": "Each adverb was purchased against a living party, and the acts record the judges demanding Leo's exact words be added; this is minuted debate, not chant. Without confusion is Eutyches refuted; without division is Nestorius refuted. A council that spent years on a phrase was not decorating. The cadence is real and it rides doctrine, the way the doxology's cadence does; the negations are load-bearing walls, not moldings."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Human reason's limits: the four negations confess only what the union is not.",
                "feedback": "Negation is the method, but the fence has positive content the option skips: recognized in two natures, characteristics of each preserved, one Person and subsistence. The council says a great deal about what the union is, then fences it with what it is not. Apophatic humility is genuine here, yet it is not vagueness: each not is aimed at a named someone. The mystery exceeds comprehension; the definition is nonetheless precise, which is this wing's whole posture."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t10-l2-q2`,
          type: "fill_blank",
          stem: `Chalcedon's four adverbs, exact. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Recognized in two natures, without <span class="fb-blank" data-blank="b1">______</span>, without <span class="fb-blank" data-blank="b2">______</span>, without <span class="fb-blank" data-blank="b3">______</span>, without <span class="fb-blank" data-blank="b4">______</span>.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "confusion"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "change"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "division"
                ],
                "case_sensitive": false
              },
              {
                "id": "b4",
                "correct_answers": [
                  "separation"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "confusion",
              "change",
              "division",
              "separation",
              "mixture",
              "addition",
              "distinction",
              "succession"
            ],
            "feedback": {
              "all_correct": "Locked: without confusion, without change, without division, without separation. The first pair keeps the natures two; the second pair keeps the Person one. Bettenson's English for the Greek and Latin the council ratified, DS 302: the single most-cited sentence in all Christology, and every word of it earned against a name.",
              "partial_correct": "Some blanks resisted, and the order is the doctrine. Confusion and change guard against the blend (Eutyches); division and separation guard against the split (Nestorius). Distinction is the decoy: the council preserves the distinction of natures, so it is what remains, not what is negated. Set the four negations exactly; the balance of the whole formula lives in their pairing."
            }
          },
        },
        {
          id: `t10-l2-q3`,
          type: "mcq",
          stem: `Chalcedon reaches for a homely image to close the definition: as the reasonable soul and flesh is one man, so God and man is one Christ. What work is that comparison doing?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It concedes the mystery is really just the mind-body problem under a sacred name.",
                "feedback": "The reduction inverts the analogy's direction. The soul-body union is offered as the nearest creaturely likeness to something far greater, not as its secret identity; the unlikeness is always greater, as Lateran IV insisted. The mind-body union joins two created principles in one created person; the hypostatic union joins created and uncreated in an eternal divine Person. Same shape of unity, incomparable in depth. The likeness teaches; it does not level."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It teaches that Christ's divinity is His soul and His humanity is His body.",
                "feedback": "The image's most dangerous misreading, and an ancient heresy made it doctrine: Apollinaris had the Word replace Christ's human soul, Godhead as the animating form of the flesh. Chalcedon means the reverse: Christ has a complete human soul, and the comparison is a proportion, not an identification. Soul-is-to-body as Godhead-is-to-manhood in the manner of union only, not in the roles. Press the analogy into identity and you deny Christ a human mind, which the next lesson names and buries."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It proves the union by natural reason, grounding the mystery in ordinary experience.",
                "feedback": "Analogies illustrate; they do not prove, and the Trinity module already fixed this reflex: the Incarnation is received on authority, not deduced from man's makeup. The soul-body union is a window, showing the union is not absurd, that one Person in two principles is a thing we already are. A window is not a proof. Chalcedon offers intelligibility, not demonstration, exactly the reception register this wing was built in."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It shows one Person can subsist in two real principles, since you already do.",
                "feedback": "Respondeo: you are one who in two whats, a rational soul and a body, really distinct, neither blended into the other nor splitting you into two people. The Council borrows that lived unity as the least-bad analogy for the hypostatic union: one Person, higher up, in Godhead and manhood. It runs on the hylomorphism of the philosophy course and the personhood of M5, and it disarms both errors at once, since nobody thinks their soul and body are fused, or that they are two people."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t10-l2-q4`,
          type: "distinction_application",
          stem: `The two ditches, fixed. <em>The blend</em> fuses the natures into one, so one nature after the union (against without confusion / without change). <em>The split</em> divides Christ into two subjects, two sons (against without division / without separation). Classify: <em>"After the union there was only one nature in Christ, the divine having absorbed the human."</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The blend: one-nature-after-union is fusion, struck by without confusion and without change.",
                "feedback": "Respondeo: one nature after the union is the blender's thesis exactly, the humanity swallowed into the divinity; the Greek for one-nature gave the party its name. Chalcedon's first two adverbs are aimed precisely here: without confusion, without change, the natures two and intact after the union as before. Classifying is the skill; the archimandrite who taught the drop-in-the-sea fell into this ditch, and the third lesson dates his condemnation."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The split: two natures named means two subjects, so this divides Christ.",
                "feedback": "Read the claim again: it ends with one nature, not two. The split-error multiplies subjects while keeping the natures distinct; this error keeps one subject and collapses the natures. Opposite ditches. The tell is the count of natures after the union: one here, so this is the blend, answered by without confusion, not the division answered by without separation. Diagnose by which count went wrong."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither: absorption preserves the divinity, so it stays inside the fence.",
                "feedback": "Preserving the divinity was never the fence's only job; it guards the humanity with equal force, without confusion, without change. An absorbed human nature is a changed, indeed a vanished, human nature, and a Christ not consubstantial with us saves no one, having nothing of ours to heal. Absorption is the blend in its gentlest dress, and Chalcedon's first adverb strips the dress. It is outside the fence, on the fusion side."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Both ditches at once: absorption confuses the natures and separates Christ from us.",
                "feedback": "Tempting, because absorption does estrange Christ from our humanity; but the ditches are defined by structure, not consequences, and structurally this claim commits one error: fusion, one nature after the union. Its distance from us is a result of the fusion, not a second, independent split into two sons. Keep the diagnosis clean: one wrong count, one ditch. The division-error looks entirely different, and lesson three sets them side by side."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t10-l2-q5`,
          type: "mcq",
          stem: `Chalcedon says Christ is consubstantial with the Father as to His Godhead, and consubstantial with us as to His manhood. Why does the second clause matter as much as the first?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Symmetry of phrasing: the council balances its sentences for rhetorical completeness.",
                "feedback": "The balance is real but it is not rhetorical; it is soteriological, and the next options carry the reason. A council fighting for its life over single words did not add consubstantial with us to round a cadence. The clause answers a specific denial and secures a specific stake. Balance that changes what is saved is doctrine wearing symmetry, not symmetry for its own sake."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because it proves Christ was a real historical man, against those who doubted He existed.",
                "feedback": "The doubt Chalcedon fights is not whether Jesus existed but what His humanity is: real and ours, or apparent, or heavenly, or absorbed. Consubstantial with us is a metaphysical claim about the kind of his manhood, same substance as ours, not a historical claim about the fact of his life. The historicity was never in dispute at Chalcedon; the reality and ordinariness of the flesh was, and that is what the clause nails down."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because what is not assumed is not healed: unless His manhood is truly ours, we are not saved.",
                "feedback": "Respondeo: the Fathers' own axiom, Gregory's blade: the unassumed is the unhealed. If Christ's humanity is a special heavenly stuff, or a blended residue, or a mere appearance, then it is not the humanity that fell, and the Redemption misses its target. Consubstantial with us means He took exactly what needed healing, wholly, our nature entire. The first clause makes the Physician divine; the second puts the medicine in our own veins. Drop either and the cure fails."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because it makes Christ our moral example, one of us in every circumstance.",
                "feedback": "Exemplarity is a fruit, not the root, and stated alone it slides toward the very error the clause exists to stop: a Christ who is merely the best of us, one nature and inspiring. Consubstantial with us secures something prior to example: that the nature He healed is the nature we have. He is model because He is first Redeemer, and Redeemer because His manhood is really ours. Put the example first and you have Nestorius' admirable man, not the God who assumed our flesh."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t10-l2-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "Because there is one Person, there is one nature; person and nature always come one-to-one."`,
          latin_tag: `in duabus naturis`,
          doctrine_line: `One Person in two natures, recognized without confusion, without change, without division, without separation: the four adverbs that fence the mystery.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. In every being we meet, one person has exactly one nature; Christ cannot differ.",
                "feedback": "In every creature we meet, yes, one-to-one holds, which is precisely why the Incarnation is a mystery and not a deduction. But experience of creatures is not a law binding God: the same course taught one nature in three Persons for the Trinity, and now teaches one Person in two natures for Christ. Both explode the one-to-one rule, in opposite directions. Import the creaturely tally as necessity and you have legislated the two central mysteries out of existence."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Two natures entail two persons, which is why Christ's natures must ultimately be one.",
                "feedback": "That entailment is Nestorius' engine, and it drives him straight off the divider's cliff: two natures, therefore two sons. Chalcedon denies the entailment outright, without division, without separation: two natures, one Person. Natures answer What; persons answer Who; the counts are independent, as M5 established. Grant the entailment and either Christ is two sons or His natures collapse; the council refuses both by refusing the premise."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Person and nature answer different questions; the Trinity and Christ both break the tally.",
                "feedback": "Respondeo: one-to-one is a fact about ordinary creatures, not a law of being. Who and What are distinct questions with independent counts, the skill from lesson one: the Trinity runs three-to-one the one way (three Persons, one nature), Christ runs one-to-two the other (one Person, two natures). Both are coherent because nothing is affirmed and denied in the same respect. The two mysteries are mirror images, and the same M5 grammar reads them both."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Nature is a mental abstraction, so its count never constrains the real count of persons.",
                "feedback": "The right verdict on a nominalist crutch. Christ's two natures are not abstractions: His Godhead is most real, and His manhood is a real individual, body and soul. The reason the counts float free is not that natures are unreal but that nature and person are really distinct questions about a real being. Make natures mental and Chalcedon's in two natures says nothing, and consubstantial with us evaporates. Real natures, independent counts: that is the precise position."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t10-l3`,
      num: `III`,
      title: `The Failed Alternatives`,
      latin: `haereses christologicae`,
      tag: `haereses christologicae`,
      fin: {
        tag: `haereses christologicae`,
        heading: `Four corners, four falls.`,
        body: `The Incarnation has four corners, and history supplied a heresy for each. Arius denied the divinity: the Son a creature, and Nicaea answered consubstantial. Apollinaris denied the full manhood: the Word replacing Christ's human soul, and the Fathers answered that the unassumed is unhealed. Nestorius split the Person into two sons and refused Mary the title Mother of God, and Ephesus answered Theotokos. Eutyches blended the natures into one, the humanity a drop in the divine sea, and Chalcedon answered without confusion, without change. Each error is a corner surrendered: save the divinity by losing the manhood, save the unity by losing the duality, or the reverse. Orthodoxy is the refusal to surrender any corner: true God, true man, one Person, two natures, all at once. It is the hardest position on the board, and the only one that saves, because only what is fully God and fully man, undivided and unconfused, can carry God down to us and us up to God.`,
      },
      questions: [
        {
          id: `t10-l3-q1`,
          type: "mcq",
          stem: `Four accounts of Christ, four corners of one mystery. Three were condemned by an ecumenical council. Which stands?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "After the union, Christ has one nature: the human absorbed into the divine.",
                "feedback": "The blend, in its most reverent form, taught by an archimandrite honoring the Godhead: the humanity a drop dissolved in the divine sea. But an absorbed humanity is a vanished one, and a Christ not consubstantial with us heals nothing of ours. Chalcedon's first two adverbs answer it directly: without confusion, without change, two natures intact after the union. One-nature-after was the corner Eutyches dropped.<span class=\"condemned\">Eutychianism (Monophysitism) &middot; condemned, Council of Chalcedon, 451 &middot; DS 300-302</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Word took a human body and soul, but His divine mind was the man's only mind.",
                "feedback": "Stated seriously, for a bishop and defender of Nicaea taught it, meaning to guard Christ's sinlessness: the Word as the rational soul of the flesh. But a Christ without a human mind did not assume our highest part, and what is not assumed is not healed; our reason most needed redeeming. The manhood is incomplete, a corner gone. Constantinople I condemned it: Christ has a rational human soul, a real human mind that learned, wondered, and obeyed.<span class=\"condemned\">Apollinarianism &middot; condemned, Council of Constantinople I, 381 &middot; DS 151</span>"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The man Jesus and the divine Word are two persons joined in perfect accord and dignity.",
                "feedback": "The dignified version of the split, and a Patriarch of Constantinople preached it, refusing to call Mary Mother of God, only Mother of Christ. Two whos make two sons, and then no one who is both God and the child of Mary; the Incarnation dissolves into a partnership. Ephesus answered with a title: Theotokos, God-bearer, because the one she bore is the divine Person. One Son, one who, born of her according to the flesh.<span class=\"condemned\">Nestorianism &middot; condemned, Council of Ephesus, 431 &middot; DS 251-252</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "One Person, subsisting in two complete natures, divine and human, unconfused and undivided.",
                "feedback": "Respondeo: the dogma, holding all four corners: true God (against Arius), true and complete man (against Apollinaris), one Person (against Nestorius), two unblended natures (against Eutyches). Each rival kept three corners and dropped one for relief; the faith keeps all four under tension. Notice the pattern from the Trinity module recurring exactly: every heresy buys simplicity by selling a clause, and orthodoxy is the whole sentence, harder and truer."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t10-l3-q2`,
          type: "mcq",
          stem: `Ephesus fought over a single Marian title: Theotokos, God-bearer, against Nestorius' preferred Christotokos, Christ-bearer. Why was a title about Mary actually a definition about Christ?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because denying Mary honor is impiety, and Ephesus defended her dignity against insult.",
                "feedback": "Her dignity is real and immense, but Ephesus was not a courtesy suit on Mary's behalf; the whole Marian doctrine here is instrumental to Christ. Theotokos exalts her precisely because it identifies her Son as God, and the reverse-engineering runs Son-to-mother, not mother-to-Son. Make it about her honor first and you invert the council's logic, which is exactly Nestorius' mistake in the other direction: he thought the title over-honored her, when it was really defining Him."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because what you may call the mother fixes who the son is: God-bearer means the son is God.",
                "feedback": "Respondeo: mothers bear whos, not whats; a woman is mother of a person, not of a nature. So the title of the mother reports the identity of the son. If Mary is Mother of God, the one she bore is the divine Person, subsisting in the flesh he took from her; if only Mother of Christ in Nestorius' sense, then the who she bore is a human son merely joined to God, and the Incarnation is dissolved. The Marian word was the Christological test, which is why a council spent itself on it. Applied Christology, the blueprint calls it, and here is the application."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because Mary's role in salvation had to be settled before Christ's could be.",
                "feedback": "The order runs the other way: Christ's identity is prior, and Mary's role follows from it. Ephesus settles who her Son is, one divine Person; her own doctrines, the fuller Mariology, are downstream of that and belong to another module. Theotokos is not a first premise about Mary from which Christ is derived; it is a conclusion about Christ that happens to name Mary. The council keeps that order scrupulously, and so should the learner."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because Nestorius insulted the Godhead by implying it could be born and could suffer.",
                "feedback": "This gets Nestorius backwards: his whole anxiety was to protect the Godhead from birth and suffering, which is why he split the subject and reserved those to the man. The Catholic answer, next lesson's business, is that the divine Person can be said to be born and to suffer, in His human nature, without the Godhead itself changing. Nestorius was too protective of the divinity, not insulting to it; his error was the split he built to shield it."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t10-l3-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "Christ had no human mind of His own; the divine Word did all His thinking, since a human intellect would only get in the way."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. A human mind could err or doubt, so the Word must have replaced it for His perfection.",
                "feedback": "The exact motive of the error, and it is generous: guard Christ from error by giving Him no fallible human mind. But the price is the Redemption of the mind itself. What is not assumed is not healed, and the human intellect, our proudest and most fallen faculty, most needed a Healer who had one. Christ has a true human mind, sinless and full of grace, that grew in wisdom and stature. Sinlessness did not require mindlessness; it required a mind perfectly ordered.<span class=\"condemned\">Apollinarianism &middot; condemned, Constantinople I, 381 &middot; DS 151</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Scripture shows Christ knowing hearts and the future, proving no human mind was needed.",
                "feedback": "Scripture shows both, and the both is the doctrine: He knew hearts, and He grew in wisdom; He foretold, and He asked who touched Him. A single-mind reading has to explain away half the gospel as pretense, which makes Christ an actor. Two natures, two intellects, one Person: He knows all things in His divine mind and learns in His human one, without contradiction, because the knowings belong to different natures of the same who."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Christ has a complete human soul, mind included; the unassumed is the unhealed.",
                "feedback": "Respondeo: Gregory Nazianzen's axiom is the blade: whatever the Word did not assume, He did not heal; and our reason, the highest of what fell, most needed healing. So Christ took a whole human nature, rational soul and all, a genuine human mind that reasoned, chose, and wondered. Apollinaris' half-manhood saved half a man. The Word did not become a body with God for a mind; He became man, and man is mind and matter both, as the philosophy course established on the first day."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Christ's human mind and divine mind are one blended mind, sharing all knowledge.",
                "feedback": "The right verdict fleeing into Eutyches. Blend the two minds and you get one nature by the back door, the very fusion Chalcedon forbids; and a blended mind is neither truly human nor truly divine. The intellects stay two, unconfused, as the natures do: His human mind is really human, growing and limited in its own order, while His divine mind is omniscient. One Person exercises both. The corners hold only if nothing is fused, minds included."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t10-l3-q4`,
          type: "dialogue_branch",
          stem: `A hospital waiting room. A colleague, kind and Bible-literate, keeps you company: "I love Jesus, but I can't say God died on a cross. God can't die. So the one on the cross must have been the man, and the divine part stayed above it. Right?" Answer him truly, and gently.`,
          payload: {
            "commentatorLine": "The Commentator sits in the plastic chair beside you, uncharacteristically quiet. 'He has reinvented Nestorius out of reverence, in a hospital, which is the most human place to do it. Give him the whole Christ, not a lecture.'",
            "branches": [
              {
                "text": "The Person on the cross is God the Son, and He truly died, in His human nature. The Godhead didn't perish, but the one who died was a divine Person. That's why the death could save us.",
                "verdict": "correct",
                "feedback": "The communication of idioms, given at a bedside instead of a lectern, and next lesson's whole content in a sentence. What can be said of Christ can be said of the Person, in the nature that fits: God died means the divine Person died in His humanity, true and load-bearing, because a merely human death saves only the man who dies it. You honored his instinct, God cannot perish, and completed it: the Godhead did not die, but the One who died was God. That is why Good Friday is not a tragedy but a ransom."
              },
              {
                "text": "You're right, and it's the safest way to say it: the man Jesus died, God did not, and we should keep them clearly separate on the cross.",
                "verdict": "incorrect",
                "feedback": "Kind, and it hands him Nestorius with your endorsement. Keep them clearly separate on the cross is the split precisely: two subjects, and then the death is a man's death, not God's, and the infinite worth drains out of the Passion. The Church says the natures stay distinct but the Person is one, so the one who died is the divine Son, in the flesh. Separate the natures into subjects and Calvary saves no one but Jesus.<span class=\"condemned\">Nestorianism &middot; condemned, Ephesus, 431 &middot; DS 251-252</span>"
              },
              {
                "text": "Don't overthink it: God is love, and love died on the cross. The metaphysics doesn't matter to a grieving heart.",
                "verdict": "incorrect",
                "feedback": "Warm and evasive, and in a waiting room the evasion is a small cruelty: he asked a real question in a hard place, and deserves the real answer, which is better than the dodge. The metaphysics is the comfort: because the One who died was truly God, death did not have the last word, and the man in the next bed is not beyond His reach. Deflecting to God is love when he asked who died leaves him exactly where his fear put him. Aquinas warned against offering the faith without its intelligibility; here it would also be unkind."
              },
              {
                "text": "The cross was God experiencing death within Himself, the divine nature itself tasting mortality for our sake.",
                "verdict": "incorrect",
                "feedback": "Overcorrection into the opposite ditch: to save the death's divine weight you have made the Godhead itself suffer and die, which is the blend, and the old scandal the councils called Patripassian when it touched the Father. The divine nature is impassible; it cannot taste mortality. What died was the divine Person, in His human nature, which is exactly how the death is both real and infinite without the Godhead perishing. Zeal for the divinity of the death must not dissolve the two natures that make it coherent."
              }
            ]
          },
        },
        {
          id: `t10-l3-q5`,
          type: "mcq",
          stem: `Arius, Apollinaris, Nestorius, Eutyches: four heresiarchs, four councils. One pattern underneath, the same the Trinity module named. State it.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Each saves one corner of the mystery by surrendering another; the faith holds all four at once.",
                "feedback": "Respondeo: the identical pattern, now on the Christological board. Arius saves God's transcendence, surrenders the Son's divinity. Apollinaris saves Christ's unity, surrenders the full manhood. Nestorius saves the divine impassibility, surrenders the one Person. Eutyches saves the divine supremacy, surrenders the two natures. Every fall trades a corner for relief; orthodoxy pays the full price and keeps all four: true God, true man, one Person, two natures. Heresy is always the easier accounting, which is nearly its definition."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Each was a Greek-speaking Easterner over-philosophizing a simple Semitic gospel.",
                "feedback": "The geography is real and explains nothing doctrinal: the orthodox were Greek-speaking Easterners too, and consubstantial and Theotokos are as philosophical as anything the heretics coined. The differential was fidelity to the whole revealed Christ, not proximity to philosophy. And the simple gospel already says the Word was made flesh and my Lord and my God; the councils defended that, they did not encrust it. Blame the philosophy and you indict Athanasius with Arius."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Each underestimated Scripture, preferring speculation to the plain words of the gospel.",
                "feedback": "Each quoted Scripture copiously; Arius' favorite was the Father is greater than I, Nestorius leaned on the gospel's human scenes. Proof-texts were ammunition on all sides. The failure was not neglecting Scripture but reading one set of its clauses while dropping another: the human passages or the divine, the unity or the duality. Orthodoxy held every clause, which is the corner-pattern again, stated in an exegetical key. Selective Scripture is how you drop a corner."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Each was a political faction dressed as theology; the councils merely ratified the winners.",
                "feedback": "The cynic's history, and it cannot survive the content: the four errors are opposite in structure, not variant party lines, and the definitions solve a real conceptual puzzle, holding two natures in one Person without fusion or division. Emperors meddled, exiles happened, politics was ugly; none of that makes homoousios or Theotokos arbitrary. The stakes were doctrinal, and the corner each faction dropped is nameable. Politics rode the fight; it did not compose the formula."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t10-l3-q6`,
          type: "true_false_with_reason",
          stem: `A pamphlet objects: "These are ancient Greek word-games. Whether Christ has one nature or two changes nothing about how a Christian lives." True or false?`,
          latin_tag: `haereses christologicae`,
          doctrine_line: `Four councils, four falls: deny the divinity, deny the manhood, split the Person, blend the natures. The faith holds all four corners at once.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Doctrine is for scholars; discipleship is following Christ's example, whatever His metaphysics.",
                "feedback": "Follow whose example? The whole question is whether the one you follow is God who became man, or a man God inspired. If Eutyches is right and the humanity was absorbed, Christ never really hungered or feared or died, and His example is a performance, not a solidarity. If Nestorius is right, the one who died was not God, and the death is a martyrdom, not a ransom. What you think Christ is decides what following Him means. The metaphysics is the marrow of the discipleship."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The natures dispute is settled history; only present-day ethics affects daily life.",
                "feedback": "Settled it is, and settled things still ground everything built on them: the Eucharist you receive is the true body of a Person who is God, or it is not; the prayer you make to Christ terminates in God, or in a creature. Every corner dropped changes the Christian's actual worship and hope. History settled the question so that daily life could rest on the answer, not so the answer could be filed and forgotten. Foundations are quiet precisely because they are load-bearing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Whether God truly became man decides whether we are saved or merely instructed.",
                "feedback": "Respondeo: the corners are the gospel's own stakes. Only if Christ is true God is His death of infinite worth; only if He is true man is it our death He died; only if He is one Person is it one saving act, not a man's tragedy beside a God's aloofness; only if the natures stay two is He both the God who reaches down and the man who is reached. Drop any corner and salvation becomes instruction, example, or myth. The word-games, so called, are the difference between a Redeemer and a role model."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The disputes matter because Church authority defined them, and authority must be obeyed.",
                "feedback": "Authority did define them, and obedience is owed; but the pamphlet asked why it matters to life, and no changes nothing is refuted by pointing to who decided rather than what turns on it. The councils bind because the content is the gospel, not the reverse. Answer the man on the merits, as this whole wing does: here is what your salvation is made of, corner by corner. Deploying authority to dodge the substance concedes his real charge, that the substance is idle. It is not."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t10-l4`,
      num: `IV`,
      title: `One of the Trinity Suffered`,
      latin: `communicatio idiomatum`,
      tag: `communicatio idiomatum`,
      fin: {
        tag: `communicatio idiomatum`,
        heading: `Everything true of Christ is true of Someone.`,
        body: `There is one who in Christ, and every true sentence about Christ is a sentence about that one who. So the properties of both natures meet in Him and may be said of Him: the eternal was born, the impassible suffered, the immortal died, God was crucified. The tradition calls this the communication of idioms, and its rule is exact: what belongs to a nature is said of the Person, in the nature to which it belongs. God died means the divine Person died, in His human nature, not that the Godhead perished, which is impossible. The rule also has a wall: you may not shift a property from the concrete Person to the abstract nature. The Son of God suffered, yes; the divine nature suffered, never. Nestorius refused the sharing and got two sons; the blenders overdid it and made the Godhead bleed. Between them stands the sober sentence the whole council fought for: one of the Trinity suffered in the flesh, and the same one raised Himself on the third day.`,
      },
      questions: [
        {
          id: `t10-l4-q1`,
          type: "mcq",
          stem: `Two sentences: God was born of a virgin, and God died on a cross. The Godhead cannot be born or die. So how can both sentences be true?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "They are true because in the union the Godhead itself took on birth and death.",
                "feedback": "This saves the sentences by wounding God: the immutable, impassible divine nature cannot acquire birth or mortality without ceasing to be divine. The properties are shared at the level of the Person, not transferred into the abstract nature; that wall is the next question's whole subject. God died because the Person who died is God, in His humanity, not because dying got added to the Godhead. Zeal for the sentence must not melt the divinity that makes it astonishing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "They are pious exaggerations: strictly the man was born and died, and we speak loosely of God.",
                "feedback": "Loosely is the Nestorian escape, and it empties Christmas and Good Friday of their whole claim. If strictly only the man was born and died, then God did not enter our birth or our death, and the two feasts celebrate a holy man's biography. The tradition means the sentences strictly, at the level of the Person: the One born and the One who died is the divine Son. Downgrade them to hyperbole and you have kept the words while surrendering the doctrine they carry."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "They are true of the divine Person, in His human nature, which can be born and die.",
                "feedback": "Respondeo: the subject of both sentences is a who, the eternal Son, and a who is truly named by what happens in any nature He owns. He was born, in the nature He took from Mary; He died, in the flesh He assumed; and He is the divine Person throughout, so God was born and God died are exact, not loose. The Godhead itself neither began nor perished; but the One who did both is God. Sentences attach to persons, and this Person has a nature in which birth and death are real."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "They are true of Christ, the God-man, but not of God the Son considered as such.",
                "feedback": "This quietly re-splits the subject: Christ over here, God the Son over there, as if they were different whos. They are not. Christ is God the Son, subsisting in two natures; there is no God the Son considered as such standing apart from the Christ who was born and died. The whole point of the one-Person count is that the very same divine who is the subject of the human events. Distinguish the natures freely; never let Christ and the Son drift into two subjects."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t10-l4-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Since there is one hypostasis of both natures, the same hypostasis is signified by the name of either nature. Thus whether we say "man" or "God," the hypostasis of Divine and human nature is signified. And hence, of the Man may be said what belongs to the Divine Nature, as of a hypostasis of the Divine Nature; and of God may be said what belongs to the human nature, as of a hypostasis of human nature.</p><div class="cr-cite">ST III, q. 16, a. 4, co. &middot; trans. Fathers of the English Dominican Province &middot; verified against New Advent</div></div>What is the engine that makes the sharing of properties work?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The union of natures directly: because the natures are one, their properties are one.",
                "feedback": "The natures are not one, and saying so is Eutyches; the passage is careful that they remain two while the hypostasis is one. What is one is the subject, not the natures, and the sharing rides on that single subject, not on any fusion. The distinction is the whole ballgame: unite the natures and you lose Chalcedon; unite only the Person, keeping the natures two, and the idioms communicate exactly as Aquinas says. One who, two whats: the engine is the who."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The likeness of the natures: divine and human are similar enough for their properties to transfer.",
                "feedback": "The natures are maximally unlike, uncreated and created, infinite and finite; nothing transfers between them by resemblance, and the next lesson-question forbids transfer into the abstract natures outright. Properties do not migrate from nature to nature; they are jointly predicated of the one Person who owns both. The likeness of natures is exactly what does not ground the communication. Their common owner does."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A courtesy of devout speech: the Church honors Christ by lending each nature the other's titles.",
                "feedback": "The passage grounds it in metaphysics, not courtesy: one hypostasis of both natures, therefore the same subject signified by either name. This is truth-telling, not lending; God died is not a compliment paid to the humanity but a fact about the Person. Read it as pious courtesy and it becomes the pious exaggeration Nestorius would happily accept. Aquinas means the predications strictly, because the identity of subject is strict."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The one hypostasis: both names point to the same who, so either nature's properties land on Him.",
                "feedback": "Respondeo: the sharing runs entirely through the single suppositum. Man and God are two names, but in Christ they signify the same hypostasis, so whatever is true by either nature is true of that one subject, and can be predicated under either name. Nestorius' whole error was denying this identity of subject; grant two hypostases and the sharing collapses into equivocation. The engine is not a rule of speech; it is a fact of being: one who, wearing two names."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t10-l4-q3`,
          type: "precision_check",
          stem: `A claim to audit with the rule: <em>"The communication of idioms means the divine nature suffered and the human nature is omnipotent."</em> Where exactly does it break?`,
          payload: {
            "statement": "The communication of idioms means the divine nature suffered and the human nature is omnipotent.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At suffered: suffering is never truly said of Christ at all, in any nature.",
                "feedback": "Suffering is most truly said of Christ, in His human nature; the Passion is not a figure. Deny that and you have fled to Docetism, a Christ who only seemed to suffer. The claim's error is not that suffering is predicated but where it is lodged: in the abstract divine nature rather than the concrete Person. Aim at nature-versus-Person, not at whether the suffering is real."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At divine nature and human nature: idioms are shared in the concrete Person, never in the abstract natures.",
                "feedback": "Respondeo: the rule has a wall, and this claim drives straight through it. Concrete terms (God, the Son, this man) name the hypostasis and take either nature's properties; abstract terms (the divine nature, the humanity) name the natures in themselves and take only their own. So the Son suffered is true; the divine nature suffered is false. God is omnipotent, true; the human nature is omnipotent, false. Aquinas is explicit: what belongs to one nature cannot be predicated of the other in the abstract. The Person shares; the natures keep their own."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At means: the communication of idioms is not a real doctrine, only a way of speaking.",
                "feedback": "It is a real doctrine with a real ground, the unity of the hypostasis, and denying its reality reopens the Nestorian split by another door. The break in the claim is precise and local: it applies a true doctrine to the wrong terms, abstract instead of concrete. Dissolving the doctrine to dodge the error is demolition, not diagnosis. Keep the doctrine; fix the terms it attaches to."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At omnipotent: power is appropriated to the Father, so it cannot be said of Christ's humanity.",
                "feedback": "Appropriation is a different device from a different module, and it concerns the Persons of the Trinity, not the natures of Christ; importing it here misdiagnoses the break. The reason the human nature is not omnipotent is not that omnipotence belongs to the Father but that omnipotence is a divine-nature property and cannot be predicated of the human nature in the abstract. The wall is nature-to-nature, not Person-to-Person. Right instinct about limits, wrong machinery."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t10-l4-q4`,
          type: "distinction_application",
          stem: `The rule, fixed. <em>Concrete terms</em> (God, the Son, this man, Christ) name the one Person and truly take either nature's properties. <em>Abstract terms</em> (the Godhead, the divine nature, the humanity) name a nature in itself and take only its own properties. Classify: <em>"The Son of God truly died."</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "False: death is a human property, so it cannot be said of the Son of God.",
                "feedback": "This treats Son of God as if it named the divine nature in the abstract; it does not, it names the Person. Human properties cannot be predicated of the divine nature, but they are truly predicated of the Person in his human nature, and Son of God is a Person-word. Refuse the Son of God truly died and you have refused the Cross its subject, which is Nestorius' refusal exactly. The term is concrete; the predication stands."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "True: Son of God is a concrete term for the Person, who died in His human nature.",
                "feedback": "Respondeo: Son of God names the who, the divine Person subsisting in two natures, and a who is truly said to die when he dies in a nature he owns. He died in the flesh, really, and the one who did so is God the Son; hence the Son of God truly died is exact, the very sentence the tradition means by one of the Trinity suffered. Contrast the abstract twin: the divine nature died is false. Same event, different term: concrete takes it, abstract refuses it. The classifying is the whole skill of the lesson."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "True, but only loosely: strictly the human nature died, and we credit it to the Son.",
                "feedback": "Loosely is the smuggled qualifier the whole doctrine exists to refuse. The Son of God truly died is strict, not approximate: the subject who underwent death is the divine Person, full stop, in his humanity. Natures do not die; whos die, in their natures. Adding but only loosely quietly re-lodges the death in the abstract nature and reintroduces the split. The word truly in the sentence is doing real work; do not sand it down to as-it-were."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither true nor false: death and divinity are incommensurable, so the sentence has no value.",
                "feedback": "The sentence has a truth value and it is true; incommensurability is the shape of the mystery, not a suspension of logic. The tradition does not throw up its hands here; it distinguishes: true of the Person in the human nature, false of the divine nature in the abstract. That is a determinate verdict, not a shrug. Refusing to assign a value is a subtler surrender than Nestorius', but a surrender still: the faith says truly, and means it."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t10-l4-q5`,
          type: "mcq",
          stem: `The infant in the manger upholds the stars; the man asleep in the boat made the sea. The tradition delights in these paradoxes. Are they contradictions?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes at the level of nature, resolved only by appeal to divine mystery beyond logic.",
                "feedback": "Half-right about the level, wrong about the resolution. There is no contradiction even at the level of nature, because no single nature is said to both uphold and be carried; the properties belong to different natures. And the resolution is not an appeal beyond logic but an application of it: distinguish the natures, keep the Person one. Mystery beyond logic is the lazy exit the whole wing avoids; the exact exit is the two-natures distinction, and it works every time."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, but salvific ones: faith embraces the contradiction as the heart of the mystery.",
                "feedback": "The course has refused salvific contradiction at every turn, and refuses it here: a real contradiction is not deep, it is false, and God is not glorified by nonsense sung sweetly. These antitheses only look contradictory until you supply the two natures; then they resolve into sober truth about one Person. The mystery is that one who has two such natures, not that a square is round. Embrace the natures and the contradiction dissolves; embrace the contradiction and theology ends."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No, because they are poetry, and poetry is exempt from the law of non-contradiction.",
                "feedback": "They are poetry, and they are also literally true, which is the whole point; exempting them as mere poetry concedes they would be false if meant. The tradition means them: the infant really upholds the stars, in His divinity, and really lies in the manger, in His humanity. Non-contradiction is not suspended; it is satisfied, because the respects differ. Filing the antitheses under poetic license quietly agrees with the scoffer that they cannot be true."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No: each pairs a human and a divine property in one Person, not one nature.",
                "feedback": "Respondeo: contradiction needs the same subject in the same respect, and these never supply it. The infant who upholds the stars is one Person upholding them by His divine nature while an infant in His human nature; the sleeper who made the sea, likewise. Two natures, one who, no clash: the philosopher's same respect rule, guarding paradox from contradiction just as it did in the Trinity. The Church frames these antitheses on purpose, in the O-antiphons and the carols, because they are the communication of idioms turned into praise."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t10-l4-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "Since we may say 'God died,' we may equally say 'the divine nature died' and 'God ceased to exist for three days.'"`,
          latin_tag: `communicatio idiomatum`,
          doctrine_line: `What belongs to either nature is truly said of the one Person: God was born, God died, in the nature that can be born and die.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. If the first sentence is exact, its restatements must be exact too.",
                "feedback": "The restatements are not restatements; they cross the wall between concrete and abstract. God died predicates death of the Person, in His human nature; the divine nature died predicates it of the nature in itself, which is false, since the Godhead is impassible. And God ceased to exist is false of the Person too: at death His divine nature and His soul both continued, and even His dead body remained united to the Word. Same word God, but the grammatical role changes everything. Equal-sounding is not equivalent."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Death means ceasing to exist, so God died entails God ceased to exist.",
                "feedback": "Death is not annihilation; it is the separation of soul and body, as the philosophy course defined it. So even for the man Christ, dying did not mean ceasing to exist: His soul lived, His Person endured, His divinity was untouched. God died means the divine Person underwent that human separation, in His humanity, not that anyone blinked out of being. Import death-as-annihilation and you get a heresy from a dictionary error. The metaphysics of death forbids the entailment."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. God died is said of the Person in His humanity; the abstract restatements cross the wall.",
                "feedback": "Respondeo: the rule and its wall together. God died is true because God is a concrete Person-term and the death is real in the nature He owns; the divine nature died is false because the abstract term takes only its own nature's properties, and the divine nature cannot die. God ceased to exist is false because death is separation, not annihilation, and neither the Word nor His soul ceased. One licit predication, two illicit ones, and the difference is exactly concrete-versus-abstract. This is why the wall is not pedantry: without it, one true sentence breeds two blasphemies."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. We should not even say God died; it is too easily misunderstood, so better avoided.",
                "feedback": "The right verdict, timid to the point of surrendering the treasure. God died is not to be avoided; it is the tradition's boldest and dearest sentence, sung on Good Friday, because it proclaims that our death was entered by God Himself. The answer to its misuse is the distinction, not silence: teach the wall, and the sentence becomes safe and glorious at once. Retreating from it to dodge error hands the field to Nestorius, who also preferred not to say it."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t10-l5`,
      num: `V`,
      title: `Why God Became Man`,
      latin: `cur Deus homo`,
      tag: `cur Deus homo`,
      fin: {
        tag: `cur Deus homo`,
        heading: `Not forced. Fitting past all telling.`,
        body: `Why did God become man? Not from necessity: omnipotence could have restored us many other ways, as Aquinas grants and Augustine before him. The Incarnation was necessary only in the second sense, the sense in which a horse is necessary for a journey, because the end is reached better and more fittingly so. And here the school splits, honestly, inside the wall. The Thomist reads Scripture's steady witness, everywhere the sin of the first man is assigned as the reason, and concludes: no sin, no Incarnation; the Word came as the remedy. The Scotist answers that the King of creation would have come to crown His work regardless, sin only changing the manner to a bloody one. Both are Catholic; Rome closed neither. The house holds the Thomist line, on the charter argument and the plain sense of Scripture, and lets Scotus stand at full strength, exactly the M18 pattern: fair fight, strict line wins, the loser honored and unrefuted where the Church left the question open.`,
      },
      questions: [
        {
          id: `t10-l5-q1`,
          type: "mcq",
          stem: `Was it necessary for God to become man to save us? Aquinas answers with a distinction between two senses of necessary. Which reading is right?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Not necessary at all: the Incarnation was pure gift, unconnected to any end.",
                "feedback": "Pure gift, yes; unconnected to any end, no. Aquinas keeps the second necessity precisely so the Incarnation is not arbitrary: it is the fitting means to the end of our restoration, ordered and reasoned, not a bolt from the blue. Gratuitous and fitting are not opposites; the most gracious gift is the one most perfectly suited to its purpose. Sever it from the end entirely and you cannot say why God became man at all, which is the lesson's title question."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Strictly necessary: sin created a debt only a God-man could pay, so no other way existed.",
                "feedback": "This is Anselm pressed past where Aquinas will follow. There is a real sense in which only the God-man's satisfaction is condignly proportionate, and the next module owns it; but Aquinas denies strict necessity even so, because God could have forgiven freely or restored otherwise by absolute power. The debt-argument shows supreme fittingness, not iron necessity. Overstate it and you bind omnipotence, which Aquinas is careful never to do: God was free, and chose the fitting way."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Not necessary in the strict sense; necessary in the sense that a horse is necessary for a journey.",
                "feedback": "Respondeo: Aquinas's two senses exactly. Strictly necessary means the end cannot be reached without it, as food for life; and in that sense the Incarnation was not necessary, for God could have restored human nature in many other ways. Fittingly necessary means the end is reached better and more conveniently, as a horse for a journey; and in that sense it was, there being no more fitting way of healing our misery. The whole theology of the Incarnation lives in that second sense: not forced, but supremely apt."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The question is unanswerable: God's motives are hidden, so we cannot say necessary or not.",
                "feedback": "God's free motives beyond the creature's due are hidden until revealed, true, and that will matter for the next question about the counterfactual. But the necessity question is answerable from what is revealed and reasoned: not strictly necessary, since omnipotence had other ways; fittingly necessary, since none was more apt. Aquinas answers it in a full article. Retreating to unanswerable skips the distinction that is the whole point."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t10-l5-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>In the first way it was not necessary that God should become incarnate for the restoration of human nature. For God with His omnipotent power could have restored human nature in many other ways. But in the second way it was necessary that God should become incarnate for the restoration of human nature. Hence Augustine says: "We shall also show that other ways were not wanting to God, to Whose power all things are equally subject; but that there was not a more fitting way of healing our misery."</p><div class="cr-cite">ST III, q. 1, a. 2, co. &middot; trans. Fathers of the English Dominican Province &middot; verified against New Advent</div></div>Why does Aquinas insist God had other ways, when he is arguing that the Incarnation was fitting?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "To leave room for other religions, which reach God by the other ways He could have used.",
                "feedback": "The other ways are hypothetical routes open to omnipotence, not actual roads God laid down for anyone to walk; He chose the Incarnation, and it is the way. Aquinas is making a point about divine freedom in the counterfactual, not about a plurality of actual saving paths, which the ecclesiology module already closed. Read other ways as other religions and you have turned a claim about God's power into a claim the same author's course elsewhere condemns."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "To protect God's freedom and omnipotence: the Incarnation is chosen fittingness, not forced necessity.",
                "feedback": "Respondeo: if God had no other way, He would have been constrained by our sin, and the Redemption would be a mechanism triggered rather than a gift chosen. Aquinas guards divine freedom by insisting the ways were many, then exalts the Incarnation by noting none was more fitting. The result is the best of both: the most gracious act is also the most reasonable, freely elected from a field of possibilities because it heals us best. Fittingness that had no alternative would not be fittingness; it would be fate."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "To concede that the Incarnation may not have happened, since a better way might turn up.",
                "feedback": "The Incarnation happened; that is revealed fact, not a hypothesis awaiting a better offer. Aquinas's other ways are counterfactual, what God could have done, not what remains open. And there is no more fitting way than the one He chose, so no better way could turn up even in principle. The concession is about omnipotence's range, not about the reality or supremacy of what God actually did. Freedom in the choosing, certainty in the choice."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "To rank the Incarnation below creation, which required no such fitting means.",
                "feedback": "No ranking is intended or implied; the passage compares ways of restoring man, not Incarnation against creation. And if anything the Incarnation is the summit of God's works, uniting the last creature to the first principle. Aquinas's point is internal to the redemption question: among the ways God could have healed us, this was the most fitting. Importing a comparison with creation invents a hierarchy the text does not draw and the tradition would reverse."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t10-l5-q3`,
          type: "dialogue_branch",
          stem: `A late-night message from a thoughtful friend: "Here's what I can't decide. Would Christ have come if Adam never fell? Was the Incarnation Plan A, the crown of creation, or Plan B, the rescue after the Fall? What does your Church actually teach?"`,
          payload: {
            "commentatorLine": "The Commentator looks up from a very old book, pleased. 'He has stumbled onto the one Christological question Rome deliberately left open. Do not close what the Church left open; show him the fair fight.'",
            "branches": [
              {
                "text": "The Church leaves it open. My school, the Thomist one, holds that Scripture always ties the coming to sin, so: no Fall, no Incarnation. But the Scotist view, that Christ would have come to crown creation anyway, is fully Catholic. Both are allowed; I hold the first, and won't pretend the second is condemned.",
                "verdict": "correct",
                "feedback": "The fair-fight answer, and the honest one: it reports the house position, gives its reason, and refuses to anathematize a permitted opinion, exactly the wall's posture where Rome has not bound. The Thomist ground is the plain sense of Scripture, everywhere the sin of the first man is assigned as the reason of the Incarnation, plus Augustine's if man had not sinned, the Son of Man would not have come. The Scotist honors Christ's primacy in Colossians. You held your line and left his conscience free, which is what a Catholic owes an open question."
              },
              {
                "text": "Plan B, definitely. The Bible is clear: Christ came to save sinners. Anyone who says otherwise is reading philosophy into the gospel.",
                "verdict": "incorrect",
                "feedback": "The conclusion is the Thomist one and this course holds it, but the delivery breaks the wall: it brands a permitted Catholic opinion as error, when Scotus and a long tradition hold the primacy view without censure. Never close a question Rome left open, the sprint's own rule, learned from De Auxiliis. State your line, give Scripture and Augustine for it, and still say the other view is allowed. Winning the argument by disqualifying the opponent is the one move the fair fight forbids."
              },
              {
                "text": "Plan A, clearly. Christ is the crown and purpose of the whole universe, so of course He'd have come regardless. The rescue was just a bonus feature.",
                "verdict": "incorrect",
                "feedback": "This picks the Scotist side and oversells it into caricature, bonus feature trivializing the Cross that Scripture puts at the center. Worse, it presents a permitted opinion as settled fact, the mirror of the previous error. The Church leaves the counterfactual open; the house even leans the other way, on the plain sense of the texts that tie the coming to sin. Present the primacy view at its real strength, Colossians and Christ's headship, and still flag it as the minority opinion, not the verdict."
              },
              {
                "text": "It doesn't matter, does it? He came, He saved us, and speculating about counterfactuals is a waste of a Christian's time.",
                "verdict": "incorrect",
                "feedback": "Dismissal disguised as piety, and it wastes a real question your friend asked in good faith. The counterfactual is not idle: it turns on whether the Incarnation is centered on the remedy for sin or on the primacy of Christ, and great saints took each side because it shapes how one reads all creation. The Church found it worth leaving formally open, which is not the same as worthless. Aquinas answered it in a full article; you can at least tell your friend what the options are."
              }
            ]
          },
        },
        {
          id: `t10-l5-q4`,
          type: "mcq",
          stem: `The Thomist and Scotist motives are both held to be Catholic. Yet the course teaches the Thomist line as the house position. On what grounds, and with what limit?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "On pastoral preference: the remedy-for-sin motive preaches better to sinners.",
                "feedback": "Preachability is a fruit, not the ground, and choosing a doctrine for its homiletic convenience is exactly the instrumentalizing the course avoids. The house holds the Thomist motive because it is the plain sense of the revealed texts, not because it lands well in a sermon. The remedy motive does preach movingly to sinners, but that is a happy consequence of its being scripturally grounded, not the reason to hold it. Ground first, fruit after."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "On the majority of theologians siding with Thomas; the limit is that majorities can shift.",
                "feedback": "Nose-counting is not the ground, and the course refuses it elsewhere too: truth is not a poll, and Scotus' followers were many. The house holds Thomas on the plain sense of Scripture and the charter, reasons that do not shift with fashion. And the limit is not that a majority might change its mind but that Rome left the question open, so neither side may be condemned. Ground the position in the texts, not the tally."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "On strict demonstration: the Thomist view is proven, so the Scotist view is simply false.",
                "feedback": "Nothing is demonstrated here; the counterfactual turns on God's free purpose, which is revealed, not deduced, and Scripture does not settle the hypothetical explicitly. That is exactly why the Church left it open and why the house holds rather than proves its line. Call the Scotist view false and you have closed what Rome left open and violated the wall. The Thomist position is the better-grounded reading, not a theorem, and its rival is permitted, not refuted."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "On Scripture's plain sense and the charter; the limit is that Scotus is answered, not condemned.",
                "feedback": "Respondeo: the M18 pattern applied to Christology. The house holds Thomas because Scripture everywhere assigns the sin of the first man as the reason for the Incarnation, and Augustine reads it so; the school's charter runs the same way. But the limit is strict: the Scotist primacy view is a permitted Catholic opinion, presented at full strength, Christ's headship of all creation, and answered on the merits, never branded heresy. Fair fight, strict line wins, loser honored: the exact verdict-shape R2 locked for M16 and M18."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t10-l5-q5`,
          type: "true_false_with_reason",
          stem: `The Exsultet sings of Adam's sin: O felix culpa, O happy fault, that merited so great a Redeemer. True or false: "This proves the Fall was good, since it brought about the Incarnation."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. A fault that yields so great a good must itself have been, on balance, good.",
                "feedback": "The Fall was sin, and sin is never good; what is good is what God drew out of it. The felix culpa praises God's providence, which brought a greater good out of evil, not the evil that occasioned it. This is the privation doctrine from the philosophy course: evil has no positive goodness of its own, and God permits it only to draw greater good. Call the fault itself good and you have made God the author of sin to secure a happy ending, which the whole tradition denies."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. God needed the Fall to occasion the Incarnation, so the Fall served a necessary purpose.",
                "feedback": "God needed nothing; the previous questions established He had many other ways and was bound by none. The Fall was not a necessary cog but a permitted evil from which He freely chose to bring the Incarnation as remedy. Felix culpa marvels at that free divine artistry, not at a mechanism God required. Make the Fall necessary and you both bind omnipotence and dignify sin, two errors this lesson has already closed. Providence uses evil; it does not need it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The fault was real sin; what is happy is God's drawing a greater good from it.",
                "feedback": "Respondeo: the Church can call the fault happy only because of what God did in response, not because the fault had any goodness in itself. The Exsultet is a hymn to redemptive providence: God so ordered things that the remedy surpassed the wound, the second Adam greater than the loss in the first. This is the Thomist remedy-motive at prayer, and it fits the privation account exactly: sin is a lack, God brings fullness out of the lack, and the lack stays a lack. Happy is said of the outcome, never of the crime."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The hymn is poetic license and should not be pressed for any doctrine at all.",
                "feedback": "The right verdict, wrongly grounded. The Exsultet is pressable for doctrine and carries it well: it teaches redemptive providence, the greater good drawn from permitted evil, in the same breath as its poetry. Dismissing it as mere license concedes it says nothing true, when it says something precise: God's response so exceeded Adam's sin that the Church dares to call the occasion happy. The answer to a misreading is the distinction between fault and outcome, not a shrug at the liturgy."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t10-l5-q6`,
          type: "mcq",
          stem: `Aquinas grants the Incarnation was not strictly necessary, then spends a whole question showing how supremely fitting it was: God drawing near, faith and hope lifted, our dignity raised, the devil defeated by the very nature he wounded. Why lavish so much on the fittingness of a freely chosen act?`,
          latin_tag: `cur Deus homo`,
          doctrine_line: `The Incarnation was not strictly necessary but supremely fitting; the house holds the Thomist motive, the remedy for sin, with the Scotist motive answered at full strength.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because fittingness is how theology reasons about free divine acts: not proof, but the display of wisdom.",
                "feedback": "Respondeo: where God acts freely, reason cannot demonstrate that He must, but it can show how perfectly what He did suits its ends, and that display of divine wisdom is the proper work of sacra doctrina in the reception register. Aquinas cannot prove the Incarnation from necessity, so he does the fitting thing: he unfolds its congruity, how it heals every wound of the Fall at once. This is the whole method of the theology wing, arguments of fittingness for what is received on authority, and here it is at its richest."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because fittingness arguments actually prove the Incarnation, once enough are stacked together.",
                "feedback": "No stack of fittingnesses becomes a proof; the Trinity module settled this with the epicycles image, many congruities can save the appearances without demonstrating the cause. Aquinas is explicit that the Incarnation is known by faith, not deduced, and his fittingness arguments confirm what is believed, they do not establish it. Quantity does not change their logical kind. They are the display of wisdom, not a cumulative demonstration, however moving the display."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because the more fitting an act is shown to be, the less free God was in doing it.",
                "feedback": "Backwards: fittingness and freedom rise together here, they do not trade off. Aquinas insists on both, God had other ways (freedom) and none more fitting (congruity), precisely so the Incarnation is a free act of supreme wisdom, not a constrained one. A perfectly fitting free choice is the summit of both wisdom and liberty, not a diminishment of either. Reading fittingness as a leash on freedom undoes the very balance the whole question was built to hold."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because the fittingness makes the Incarnation optional, a beautiful extra we may take or leave.",
                "feedback": "Fitting does not mean optional; it means supremely apt, and what God actually did is not ours to take or leave, it is the way He saved us. The freedom was God's, in choosing among possible ways; it does not transfer to us as permission to treat the Incarnation as decorative. Aquinas exalts the fittingness to deepen adoration, not to relativize the fact. The act is free on God's side and binding on ours, the same structure the Eucharist lesson drew: free in the giving, not optional in the receiving."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t10-l6`,
      num: `VI`,
      title: `The Mind and Grace of Christ`,
      latin: `gratia capitis`,
      tag: `gratia capitis`,
      fin: {
        tag: `gratia capitis`,
        heading: `The Head, and the fullness that overflows.`,
        body: `The assumed nature was complete, so it had a human soul, and that soul was filled with grace beyond measure, His human mind knowing, His human will loving, at the summit of what a creature can hold. But the fullness was never for Himself alone. Because grace was in Him supereminently, it overflows: He is the Head of the Church, and of His fullness we all have received. Aquinas asks whether the grace that sanctifies Christ's own soul (personal grace) is a different gift from the grace by which He justifies us (capital grace), and answers: one habit, distinct only in reason, the very act that sanctifies Him being the reason others are sanctified from Him. This is the promissory note the Church module left unpaid, corpus mysticum waiting for its Head: the mystical body draws its one supernatural life from this fullness. And it is the note the sacraments and the Redemption will draw on next: the grace that flows from the Head reaches the members through the channels He instituted, and was purchased on the Cross He is about to climb.`,
      },
      questions: [
        {
          id: `t10-l6-q1`,
          type: "mcq",
          stem: `The assumed nature is complete, so Christ has a human soul: a human mind, a human will. What was the state of that soul, and why not simply the divine knowledge doing all the work?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Empty of created grace, since the divine Person supplied everything directly.",
                "feedback": "This starves the assumed nature and reintroduces Apollinaris by another door: if the divine Person supplies everything and the human soul holds no created grace of its own, the humanity is a shell. Aquinas holds the reverse: Christ's soul had the fullness of created grace, habitual grace in its perfection, precisely because it was a real soul needing real perfection. The union does not replace the soul's gifts; it crowns them. A complete nature is completely graced, not bypassed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Filled with created grace and knowledge to the creaturely summit, because a real soul really operates.",
                "feedback": "Respondeo: a complete human nature has its own operations, so Christ's human mind really knew and His human will really loved, and both were perfected with grace beyond measure, the fullness a creature can hold. The divine knowledge does not do the human soul's work, or the soul would be a decoration, the Apollinarian error from lesson three. Two natures means two sets of operations, one Person exercising both: He knows all things divinely and grows in wisdom humanly, and the human growth is not pretense."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Ordinary, like any holy man's, since grace would compromise His solidarity with us.",
                "feedback": "Solidarity is secured by the reality of the nature, not by mediocrity of grace; He is consubstantial with us in substance, not in spiritual poverty. And ordinary grace could not ground His headship: only a fullness beyond measure can overflow to others, which the rest of the lesson turns on. He is like us in all things but sin, and unlike us in the measureless grace that makes Him the source. Lowering His grace to ours would keep Him company and lose the fountain."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Blended with the divine mind into one super-knowledge, sharing omniscience.",
                "feedback": "Blending the minds is Eutyches at the level of the intellect, the fusion Chalcedon forbids; the two knowings stay unconfused. Christ's human mind is genuinely human, finite in its own order, growing in experiential wisdom, while His divine mind is omniscient; one Person has both, unmixed. A super-knowledge would be a third thing, neither human nor divine, and a humanity that shared omniscience by fusion would not be ours. Keep the minds two, the Person one."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t10-l6-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>From this pre-eminence of grace which He received, it is from Him that this grace is bestowed on others, and this belongs to the nature of head. Hence the personal grace, whereby the soul of Christ is justified, is essentially the same as His grace, as He is the Head of the Church, and justifies others; but there is a distinction of reason between them.</p><div class="cr-cite">ST III, q. 8, a. 5, co. &middot; trans. Fathers of the English Dominican Province &middot; verified against New Advent</div></div>Personal grace sanctifies Christ; capital grace flows to us. Aquinas says they are essentially one habit. Why not two distinct gifts?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because the grace of union and habitual grace are the same, so all His graces collapse into one.",
                "feedback": "Aquinas explicitly keeps the grace of union distinct from the habitual, personal-and-capital habit: the grace of union is ordained to the personal being, not to an act, and does not share the essence of the habit. So the graces do not all collapse; only personal and capital are essentially one, because both are ordained to acts and the sanctifying act grounds the justifying. The nuance is exact, and flattening it erases the very distinction the article draws."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because Christ received only one grace at the Incarnation and never any other.",
                "feedback": "Aquinas actually distinguishes three graces in Christ by reason, the grace of union, personal grace, and capital grace, so it is not that He received only one. The point is subtler: personal and capital grace, though distinguished in reason, are essentially the same habit, because the sanctifying act is the very reason of the justifying. The number of graces is not the argument; the identity of the personal and capital habit is. Miss that and you either multiply habits or flatten the real distinctions of reason."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because grace cannot be shared, so His and ours must be numerically one grace.",
                "feedback": "Our grace is really distinct from Christ's, numerically our own; the passage is not identifying His grace with ours. It identifies two aspects of the grace in Christ, personal and capital, as one habit in Him. What flows to us is a real gift really received, of His fullness we have received, distinct in us though sourced in Him. Collapse His grace and ours into one and you lose the members as real recipients, which the head-body doctrine needs."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because the same fullness that perfects His soul is, by its pre-eminence, the source for ours.",
                "feedback": "Respondeo: one habit, two relations. The grace in Christ's soul is so eminent that it overflows, and overflowing to others just is what makes it capital grace; the head-relation is not a second gift but the same gift considered as source. As one heat both makes fire hot and heats what it touches, one grace both sanctifies Christ and sanctifies from Him. The distinction is of reason, not of thing: personal names it as perfecting Him, capital names it as flowing to us. Fullness and headship are one reality under two descriptions."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t10-l6-q3`,
          type: "mcq",
          stem: `The Church module (T12) taught the corpus mysticum, one body drawing one supernatural life from Christ the Head, and left a promissory note: the anatomy of that headship waits for the Christ module. This lesson pays it. What exactly does gratia capitis supply that T12 could not?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The membership rules: who belongs to the body and how one joins the Head.",
                "feedback": "Membership, in act and in potency, votum and the rest, was precisely what T12 settled in its hardest lesson; nothing there was deferred to Christ. What waited was the Head's side of the relation, how He is capable of being the principle of the body's life. Gratia capitis answers that: the fullness in His soul is the wellspring. The members' side was done; the source's side is this lesson. Keep straight which end of the head-body relation each module owns."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The visible structure: bishops, sacraments, and jurisdiction flowing from the Head.",
                "feedback": "The visible structure was T12's own material, the marks and the Petrine office, and the sacraments are T13's; this lesson supplies something prior to all of them, the grace itself and its source in Christ's soul. Gratia capitis is why there is a supernatural life to be structured and channeled at all. Confusing the life with its structures inverts the order: the fullness comes first, in the Head; the visible body organizes its distribution. The note deferred was about the life, not the plumbing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The source-mechanism: how the Head's own fullness becomes the life of the members.",
                "feedback": "Respondeo: T12 established that the Church is a real body with Christ as Head and one life in the members; what it deferred was why He can be that source, and this lesson answers: because His soul holds grace in supereminent fullness, it overflows, and that overflow is capital grace. The body has one life because the Head has a fullness that pours; ST III q.8 is the physiology of the ecclesiology. The note is paid: corpus mysticum draws on gratia capitis, and now the learner knows the anatomy, not just the image."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing new: T12 already taught headship, so this lesson merely repeats it in Christological words.",
                "feedback": "T12 asserted the headship and named the door to it explicitly as owed to the Christ module; this lesson walks through the door, grounding the headship in the metaphysics of Christ's grace. That is not repetition but payment: the difference between saying the Head gives life and showing how, from the supereminent grace of His soul. The continuity ledger tracked this exact debt. Repetition would leave the anatomy unexplained; the payment supplies it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t10-l6-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "If Christ is our Head and grace flows from His fullness, then we receive grace from Him the way we would from any especially holy saint, only more."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Christ is the greatest saint, so headship is sanctity taken to its maximum degree.",
                "feedback": "This is the difference of degree the whole lesson exists to deny. A saint has grace that can be imitated and prayed with, but never bestowed; saints intercede, they do not infuse. Christ's grace is capital, a source that pours grace into others, because His fullness is supereminent and, more, because His is the grace of a divine Person's human soul. Head is not super-saint. It is a different office entirely, giving rather than merely having, and only He holds it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Grace comes through many channels; Christ is simply the highest of them.",
                "feedback": "Christ is not the highest channel but the source; the channels, the sacraments and the saints' intercession, all derive from Him. Of His fullness we all have received, including every saint whose grace is itself received from the Head. Make Him one channel among many, even the top one, and you have demoted the fountain to a pipe. The members and the means draw from Him; He draws from no one, being the Head. That is the categorical difference degree-language erases."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. A saint's grace is received and imitable; Christ's bestows, for He is Head.",
                "feedback": "Respondeo: the difference is of kind, not degree. Every saint receives grace and can only model it; Christ, uniquely, is the principle from which grace is bestowed on others, and this belongs to the nature of head, as Aquinas says. The ground is His supereminence, and beneath that the grace of union: this is the human soul of a divine Person. So headship is incommunicable, His alone. The saints are members drawing from the Head; He is the Head from whom even their sanctity flows. More would make Him a large saint; Head makes Him the wellspring."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. We receive grace directly from God, not from Christ's humanity, which is only the occasion.",
                "feedback": "The right verdict on a wrong reason that quietly sidelines the humanity. Grace does come from God, but through Christ's humanity as its instrument and source, not around it: the assumed nature is the living channel, the Head's real soul from whose fullness we receive. Call the humanity a mere occasion and you drift toward Nestorius, keeping the Godhead at a distance from the giving. The Word saves through the flesh He took, and gratia capitis is grace flowing precisely through that flesh."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t10-l6-q5`,
          type: "mcq",
          stem: `The gospels show Christ growing in wisdom, asking questions, being astonished, and also knowing men's hearts and foretelling the future. A skeptic says this is incoherent. Resolve it with the lesson's tools.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Two natures, two ways of knowing, one Person: He learns humanly and knows all things divinely.",
                "feedback": "Respondeo: the communication of idioms meets the two-minds doctrine. Christ's human intellect really grew and really wondered, as a creature's mind does; His divine intellect knew all things eternally; and one Person exercised both, so the same who both learned and foreknew, in different natures. No contradiction, because never in the same respect, the philosopher's rule guarding paradox again. The skeptic assumes one mind; the faith supplies two, unconfused, in one subject, and the gospel's double witness becomes exact rather than embarrassing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The growth was only apparent: He knew everything humanly but pretended to learn for our sake.",
                "feedback": "Pretended learning makes Christ an actor and empties His human mind of the reality lesson three defended; a feigned growth is Apollinarianism wearing a smile, the human intellect present but idle. Luke says He advanced in wisdom, and means it: His experiential human knowledge genuinely increased. The resolution is not to deny the growth but to locate it in the human nature, alongside the divine omniscience in the divine. Two real knowings, not one real and one staged."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "He set aside His divine knowledge during His earthly life, emptying Himself of omniscience.",
                "feedback": "This is the kenotic move, and it breaks divine immutability: the Word cannot lose omniscience, which belongs to the unchanging divine nature; the self-emptying of Philippians is the veiling of glory in the assumed nature, not the surrender of divine attributes. The gospel's foreknowledge scenes show the divine knowledge was not set aside at all. The right account keeps both knowings active in their own natures, rather than switching one off. God does not subtract Himself to become man."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The tension is real and unresolvable; here faith must simply overrule the evidence.",
                "feedback": "The course never overrules evidence with faith, and does not start now: the two-natures distinction resolves the tension cleanly, so no overruling is needed. Christ learns in one nature and knows in the other, one Person throughout, and the gospel's data all fit. Declaring it unresolvable skips the tool the whole module has been building. Faith goes beyond reason here, into the fact of two natures; it does not go against the plain reading of the texts. The evidence is not overruled; it is explained."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t10-l6-q6`,
          type: "mcq",
          stem: `This lesson leaves two promissory notes of its own, pointing past the Incarnation. The Head has a fullness of grace that overflows to the members. Where must the next modules cash that out?`,
          latin_tag: `gratia capitis`,
          doctrine_line: `Christ's soul held the fullness of grace, personal and capital in one habit; from His fullness we all receive, for He is the Head from whom grace flows to the members.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nowhere further: headship is complete in itself and needs no downstream modules.",
                "feedback": "Headship is intelligible here but not self-contained: a fullness that overflows raises immediately how it was purchased and how it arrives, and this module answers neither. The Redemption owes the price, the sacraments owe the delivery, and both were flagged in the continuity ledger as this lesson's downstream customers. Complete in itself would strand the grace in the Head with no road to the members. The overflow is precisely what requires the modules still to come."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In the Last Things, where the members finally receive the grace withheld until glory.",
                "feedback": "Grace is not withheld until glory; it flows to the members now, in this life, from the Head, which is the whole point of gratia capitis being operative in the Church already. The Last Things bring the consummation of grace in vision, but the overflow is present-tense from Calvary onward. The immediate notes point to how the grace is purchased and delivered now, the Cross and the sacraments, not to an eschatological escrow. The vision is the destination, not the deferral."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In the Trinity, since all grace ultimately comes from the Father through the Son.",
                "feedback": "The Trinitarian source is real and already taught: grace is the Spirit's gift, the Son's merit, the Father's good pleasure, the missions module's material. But that is upstream and settled; the notes this lesson opens point downstream, to how the Head's fullness is won and distributed in the economy. Sending the question back to the Trinity skips the very modules the overflow requires: the Cross that merits it and the sacraments that convey it. The source is known; the channel is owed."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "In the Redemption, which purchases the grace, and the sacraments, which channel it to the members.",
                "feedback": "Respondeo: the fullness in the Head raises two questions this module cannot answer. First, how the grace was won: the Cross, where the Head merits and satisfies for the body, the Redemption module's work. Second, how it reaches us: the sacraments, the instituted channels through which capital grace flows to the members, T13's work, and the door T12 already opened toward signs that cause. The Eucharist module, already built, is where the Head's own body becomes the members' food. Head, Cross, channels: the grace has a source here, a price next, and a delivery after."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `t10-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The union held, in one hand.`,
        body: `Hold the module the way you hold a mystery you have learned to state exactly. A taxpayer taught you who and what, and the manger spent the grammar: one who, the eternal Word, subsisting in two whats, Godhead and a complete manhood, no human person left over. Chalcedon fenced it with four adverbs, two against the blend and two against the split, and grounded it in the unity you already are, soul and body in one person. Four heresies mapped the four corners, and the faith kept them all. The properties met in the one Person, so God was born and God died, in the nature that can, while the Godhead stayed impassible. The coming was not forced but supremely fitting, the house holding the remedy-for-sin motive with Scotus answered at strength. And the assumed soul held a fullness of grace that overflows, the Head's life pouring into the body, the note T12 left now paid. Two notes go forward: how the grace was purchased, and how it reaches us. The next module climbs the hill where the price was paid.`,
      },
      questions: [
        {
          id: `t10-l7-q1`,
          type: "match_pair",
          stem: `The module in five images. Match each to its doctrine.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the taxpayer, and the hand of Socrates"
              },
              {
                "id": "L2",
                "text": "reasonable soul and flesh are one man"
              },
              {
                "id": "L3",
                "text": "the infant who upholds the stars"
              },
              {
                "id": "L4",
                "text": "a horse, necessary for a journey"
              },
              {
                "id": "L5",
                "text": "of His fullness we all have received"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "one Person in two natures, no human person left over"
              },
              {
                "id": "R2",
                "text": "Chalcedon's analogy: one who subsisting in two real principles"
              },
              {
                "id": "R3",
                "text": "communication of idioms: each nature's properties said of the one Person"
              },
              {
                "id": "R4",
                "text": "the Incarnation fitting, not strictly necessary"
              },
              {
                "id": "R5",
                "text": "gratia capitis: the Head's fullness overflowing to the members"
              }
            ],
            "correct_pairs": [
              [
                "L1",
                "R1"
              ],
              [
                "L2",
                "R2"
              ],
              [
                "L3",
                "R3"
              ],
              [
                "L4",
                "R4"
              ],
              [
                "L5",
                "R5"
              ]
            ],
            "feedback": {
              "all_correct": "Five images, one Christ. Read them in order and the module retells itself: the grammar of who and what, the soul-body analogy for the union, the antitheses of the shared idioms, the fitting-not-forced motive, and the Head's overflowing grace. None of the tools was minted here; the taxpayer is M5, the soul-body is M4 and M9, the same-respect rule is the logic module, and gratia capitis pays a note from T12. The philosophy was always for this.",
              "partial_correct": "Some pairs resisted. Walk the module: taxpayer and hand gave you one Person, complete nature, no second person; soul-and-flesh gave Chalcedon its analogy for one who in two principles; the star-upholding infant is the shared idioms, human and divine said of one Person; the horse is fitting-not-necessary; the fullness is capital grace overflowing to the body. Each image folds a lesson; unfold them in order and the whole module returns."
            }
          },
        },
        {
          id: `t10-l7-q2`,
          type: "mcq",
          stem: `The philosophy course spent a week on suppositum and persona, and the Trinity module paid it once. Now the Incarnation has spent it again. What does that double payoff reveal about the course's design?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Person means something different in each mystery, so the tool was rebuilt for Christ.",
                "feedback": "Person is said analogically across the cases, but it was not rebuilt; the same core, distinct subsistence in a rational nature, carries through, purified of creaturely packaging each time. In the Trinity the Persons are subsistent relations; in Christ the Person is the pre-existing divine Word; but both are whos owning natures, the M5 sense stretched, not replaced. If the tool were rebuilt for each, it could not show the unity the double payoff reveals. Analogy, not equivocation, is what lets one distinction serve twice."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The course reuses material to save effort, teaching person once and applying it twice.",
                "feedback": "Economy is a side effect, not the design; the point is not thrift but that reality itself is unified, one metaphysics of person underlying both mysteries because both are about the one God. Reuse for efficiency would be a textbook's convenience; this is a claim that the distinctions are true and load-bearing across the whole of theology. The course teaches person once because there is one truth about persons, and it happens to unlock both Trinity and Christ."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "One distinction underwrites both central mysteries, deployed in opposite directions.",
                "feedback": "Respondeo: the who/what grammar is the single hinge of the two dogmas that define Christianity, and it turns both ways. The Trinity: one what, three whos. The Incarnation: one who, two whats. M5 built the tool without doing either theology; the two payoffs show it was engineered for exactly this double duty. That is the deepest argument the course makes for itself, the philosophy was for the theology, and here one philosophical distinction carries both summits, which no accident of pedagogy would arrange."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The mysteries are actually the same mystery, both reducing to the doctrine of the person.",
                "feedback": "They are distinct mysteries, and collapsing them is a real error: the Trinity is God's inner life, the Incarnation is God's entry into creation, and no doctrine of the person reduces one to the other. What they share is a tool, not an identity; the same grammar reads two different realities. Say they are the same mystery and you lose both, since each has content the other lacks. One distinction, two mysteries: unity of method, not of object."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t10-l7-q3`,
          type: "precision_check",
          stem: `A last claim to audit: <em>"Christ is a human person so completely united to God that we rightly call Him divine."</em> Where exactly does it break?`,
          payload: {
            "statement": "Christ is a human person so completely united to God that we rightly call Him divine.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At divine: we should not call a creature divine, however united, so the last clause overreaches.",
                "feedback": "Calling Christ divine is not the overreach; He is divine, truly God. The break is upstream, in the opening words a human person, which make Him a creature to begin with. Fix the predicate and leave the subject wrong and you still have Nestorius. Aim at what Christ is said to be at the start of the sentence, not at the honorific it reaches at the end."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At a human person: Christ is a divine Person with a human nature, no human person.",
                "feedback": "Respondeo: the fatal word is the second, person. Christ has a complete human nature but is not a human person; the who in Him is the eternal Word. This claim makes Him a human person specially united to God, which is Nestorius exactly, a man so graced we honor him as divine, and then the union is moral, not hypostatic, and God did not become man. Lesson one's stake applies: if the nature is not united to the Word in person, it is nowise united, and the faith is overturned. One who, and He is divine; the human is His nature, never His person."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At united to God: the union is not with God generally but with the Son specifically.",
                "feedback": "A true refinement, the Son alone became incarnate, but not the sentence's break; united to God is loose, not heretical, since the Son is God. The heresy is in a human person, which gives Christ the wrong kind of subject regardless of which divine term He is united to. Precise about the Son, yes; but a human person united to the Son is still Nestorius. Locate the break in the subject, then refine the object."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At so completely united: no union is complete enough to make a creature God, so the claim fails by degree.",
                "feedback": "The failure is not one of degree, as if a tighter union might have sufficed; it is one of kind. No intensification of a union between two persons yields the hypostatic union, because that union is not between persons at all but is the subsisting of a human nature in a divine Person. Frame it as insufficient closeness and you concede the structure, a man and God drawing near, which is the Nestorian frame. The break is the two-subject structure, fixed only by the one-Person doctrine, not by more closeness."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t10-l7-q4`,
          type: "mcq",
          stem: `Strip the module to the two words the councils would not surrender about Christ, against every simplification. Which pair?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Truly and fully: truly God against Arius, fully man against Apollinaris and Eutyches.",
                "feedback": "Respondeo: the two words the four councils defended against the four falls. Truly God: consubstantial with the Father, against the creature-Son. Fully man: a complete human nature, rational soul included, against the half-manhood and the absorbed manhood. And the one Person holding them keeps the truly and the fully from splitting into two sons. Every heresy dropped one: Arius the truly-God, Apollinaris and Eutyches the fully-man, Nestorius the one-who that unites them. The faith keeps truly, fully, and one, together."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Born and died: the concrete events of Christ's life the creeds insist upon.",
                "feedback": "Born and died are load-bearing, and the shared-idioms lesson turned on them, but they are consequences of the deeper pair, not the pair itself: He could be born and die only because He is truly God (so the events are infinite in worth) and fully man (so they are really His). The councils fought over the natures and the Person; the events follow. Name the events and you name the fruit; name truly-God and fully-man and you name the root the councils actually defended."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "One and same: the unity of the Person, repeated in every conciliar definition.",
                "feedback": "One and the same is indeed the councils' refrain, and it secures the single subject against Nestorius, half the achievement. But alone it is Eutyches-safe: a blended Christ is also one, one nature and one person both. The unity needs the duality beside it, truly God and fully man in that one Person. So the irreducible core is the pair, not the unity by itself. One-and-same is how the two natures are held; it is not a substitute for naming them."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Mystery and reverence: the councils guarded the ineffability of the union above all.",
                "feedback": "A blended Christ or a split Christ could each be revered as mysterious; awe does not discriminate between orthodoxy and its counterfeits. The councils were not defending ineffability in general but specific content: truly God, fully man, one Person, two natures. Reverence is the response the content deserves, not the content itself. Reduce the module to mystery and reverence and you have kept the mood while surrendering the definitions that make the mood rightly placed."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t10-l7-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "The Incarnation is an abstract puzzle for theologians; it makes no difference to whether or how a person is saved."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Salvation depends on Christ's death and love, not on the metaphysics of His Person.",
                "feedback": "Whose death, and whose love? If Christ is only a man, his death is a martyr's, finite in worth, and his love is a creature's; if only God in appearance, the death is unreal and saves nothing. The saving power of the Cross depends entirely on the metaphysics of the Person: truly God, so the act is of infinite value; truly man, so it is really our death He dies. The union is not a puzzle behind the salvation; it is the salvation's whole condition of possibility."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Once the doctrine was defined, ordinary believers could ignore the details and be saved.",
                "feedback": "Ordinary believers hold the doctrine implicitly whenever they say my Lord and my God to the crucified, and their salvation rests on its being true, whether or not they can parse it. Defined so that the faithful could rest on the answer is not the same as defined so they could ignore it; the content is what their worship and hope stand on. The details are the pillars under the floor they walk on: unseen, and holding everything up. Ignorable in attention, never in effect."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Only one truly God and truly man carries God to us and us to God.",
                "feedback": "Respondeo: the union is the hinge of the whole economy. Because He is truly God, He can bridge the infinite distance and give a share in the divine life; because He is truly man, the bridge touches our shore, our nature healed from within. A mere man cannot deify; a mere God has not joined us; a blended or split Christ is neither bridge. The gratia capitis lesson showed the grace flowing from exactly this Head; the next module shows the price paid by exactly this Person. Take away the two-natures union and salvation has no mechanism, only a wish."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The doctrine matters because the Church requires assent to it for membership.",
                "feedback": "The right verdict resting on the wrong pillar. The Church requires assent because the doctrine is true and saving, not the reverse; membership-talk answers who must believe it, not why it matters to salvation itself. The substance is that only a God-man saves, and that is true whether or not it is a condition of membership. Ground the answer in the economy of salvation, as the whole wing does, rather than in ecclesiastical requirement, or you concede the skeptic's charge that the content is idle and only the rule is real."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t10-l7-q6`,
          type: "mcq",
          stem: `Last question, and a door. The Word took a complete human nature, including a body that could suffer and die, and the coming was ordained as the remedy for sin. Where does the next module go?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `One Person, two natures, unconfused and undivided: the metaphysics of person, learned on a taxpayer, now carries God made man.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The Redemption: why the Cross, how the God-man's death satisfies and merits for us.",
                "feedback": "Respondeo: the Incarnation assumed a passible nature for a purpose, and this module named it, the remedy for sin; the next asks how the remedy works. The Redemption: satisfaction and merit, why the Cross was fitting, how one act of the God-man outweighs the world, love first, the debt paid by the one who did not owe it. It cashes the notes this module left: the price of the grace that flows from the Head, purchased by the Person whose two natures make the price both real and infinite. The manger was for the hill. Opens the door to the Redemption."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The sacraments: how the grace won by Christ reaches the members through signs.",
                "feedback": "The sacraments are coming, and this module flagged them as a downstream customer of gratia capitis; but the Cross comes first in the order, because the grace must be won before it is channeled. The Redemption module climbs the hill where the price is paid; the sacraments then distribute what was purchased. Take the delivery before the purchase and you have a channel with nothing yet flowing through it. The immediate door is the Cross, not the font."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The Last Things: the glorified Christ returning to judge, the destination of the assumed nature.",
                "feedback": "The glorified Christ and the judgment are the course's finale, several modules on; the assumed nature's exaltation is real but not the next step. Between the Incarnation and the end lie the acts the Incarnation was for: the Redemption, the Church already met, the sacraments, and only then the Last Things. The passible body assumed here points immediately to the Passion, not past it to glory. The destination waits; the Cross is at hand."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nowhere further on Christ: the Person is defined, so Christology is complete.",
                "feedback": "The Person is defined; the work is not even begun. Christology has two halves, who Christ is and what Christ did, and this module finished the first: the constitution of His Person. The second half, the Redemption, is exactly what the assumed passible nature and the remedy-for-sin motive were pointing toward all along. Complete would strand the God-man in the manger with nothing to do. The definition was for the deed, and the deed is the next door."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    }
  ],
};
