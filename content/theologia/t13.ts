import type { ModuleMeta } from '../types';

/** T13 · The Sacraments. Wired into the live app by scholastica-claude-code-wing-parity-RUN.md (WP-A). Content is the authored t13-content.json, copied faithfully; no prose edits. */
export const t13: ModuleMeta = {
  id: 13,
  title: `The Sacraments`,
  short: `De Sacramentis`,
  label: `Theologia XIII · The Sacraments`,
  latin: `De Sacramentis`,
  aim: `A sacrament is the sign of a holy thing so far as it makes men holy: one sign in three tenses, commemorating the Passion, demonstrating grace, foretelling glory. Signs suit the creature we are, bodily knowers wounded through the senses and healed through them, which is why Eden needed no fonts and we do. The sacraments cause the grace they signify, not as principal agents, for God alone deifies, but as instruments moved by Him, the chisel in the Sculptor's hand, their power flowing from Christ's Godhead through His humanity, out of the opened side on the Cross. They work ex opere operato, by the work performed: covenant fidelity, not magic, since the obstacle-clause stands; not merit, since the pipe may be silver or lead and the water is the same, as Donatists ancient and reborn are always re-taught. Each is composed like everything studied in Part I, sensible element as matter, words as form, one sign fixed by divine institution beyond any pastor's editing. Three imprint a character, Christ's own priestly mark, an indelible deputation to worship: baptism to receive, confirmation to profess, order to confer; grace is the life and can be lost, the character is the office and cannot. The sacraments of the New Law are seven, no more, no fewer, all instituted by Jesus Christ, mapped to the whole shape of a human life and to the city's needs, distinct from the sacramentals that dispose toward them; not all are owed to every soul, but the whole is sufficient: nothing missing, nothing extra. And the seven face one altar, ordained to the Eucharist as to their end, where the instruments give way and the sign contains the Signified Himself, until glory retires the signs altogether.`,
  lessons: [
    {
      id: `t13-l1`,
      num: `I`,
      title: `Signs That Do`,
      latin: `sacramentum`,
      tag: `sacramentum`,
      fin: {
        tag: `sacramentum`,
        heading: `The sign that pours.`,
        body: `The smoke, the ring, and the octagon came back for one more errand. The eleventh module taught you their family: things that hand you other things, known first as themselves. Theology takes one member of the family aside and reports something new: this sign was appointed by God to give what it shows. Not a reminder, though it reminds; not a pointer, though it points backward to a Cross, inward to grace, forward to glory, all in one gesture. The Fall explains the strategy. The remedy enters where the wound did, through the senses, because God treats the patient He actually has. Eden needed no fonts. We are not in Eden, and the mercy of the present arrangement is that the way back runs through water you can feel.`,
        distinction: {
          latin: `sacramentum`,
          english: `sacrament`,
          gloss: `The sign of a holy thing so far as it makes men holy: it signifies grace in three tenses and confers what it signifies.`,
          motif: `sign-that-pours`,
        },
      },
      questions: [
        {
          id: `t13-l1-q1`,
          type: "mcq",
          stem: `Smoke over a ridge. A wedding ring. A red octagon at the corner. Each is itself, and each hands you something more. Now water is poured over an infant while words are spoken, and the Church files it in the same family, with one difference. What difference?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It is a sign of something sacred, where the others sign ordinary things.",
                "feedback": "True, and not yet the difference. A crucifix signs something sacred; so does a steeple, a relic, a saint's name on a church door. None of them is a sacrament. The tradition wants a narrower fence: among all the signs of holy things, the sacrament is the one appointed to sanctify the man who meets it (q.60 a.2). Sacredness of the signified is the family resemblance, not the family secret."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It is not really a sign at all, but a divine action dressed in sign's clothing.",
                "feedback": "You have protected the mystery by breaking the definition. Aquinas puts the sacrament squarely in the genus of sign: a sacrament is a kind of sign (q.60 a.1), and Augustine's old formula stands behind him, the sacred sign of an invisible sacrifice. The wonder is not that the sign category fails here. The wonder is what God does through a thing that remains, all the while, honestly a sign."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A sign of a holy thing that makes men holy: it gives what it shows.",
                "feedback": "Respondeo: the definition, exactly. A sacrament is the sign of a holy thing so far as it makes men holy (q.60 a.2). The smoke hands you the fire and leaves you cold; this water hands you the washing and washes. The eleventh module taught you what a sign is. This module teaches you what happened when God signed one."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It is a sign whose meaning the community's shared faith has fixed over time.",
                "feedback": "That is the modern religious-studies reading, and it dissolves exactly what it explains. If the community's faith fixed the meaning, the community's faith could re-fix it, and the sign would give nothing but the community back to itself. The Church's claim is stranger: God fixed this sign and works through it. Whether the fixing is human or divine is this module's whole hinge, and a later lesson names the men who chose each answer."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t13-l1-q2`,
          type: "mcq",
          stem: `Medicine is called healthy because it produces health; diet, because it preserves it; a good complexion, because it signals it. One word, many relations to one thing: the sixteenth module's grammar. The word sacrament works the same way: everything so named relates to a hidden holiness. In which relation does the Church use the word now?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The relation of sign: a sacrament signifies the holiness it bears upon us.",
                "feedback": "Respondeo: taken precisely. A thing may be called sacrament from having a hidden sanctity, a sacred secret; or from relating to that sanctity as cause, or as sign. We are speaking of sacraments in the special sense, says Aquinas, as implying the habitude of sign (q.60 a.1). The analogy discipline you learned on the word healthy just earned its theological wage."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The relation of secret: a hidden holy thing the initiated keep and guard.",
                "feedback": "A real sense of the word, and the older one: sacramentum as sacred secret. Aquinas names it and sets it aside in the same breath (q.60 a.1). The Church's sacraments are not esoterica for insiders; they are public signs planted in water, oil, bread, and speech. The pagan mysteries hid their rites. This religion baptizes in front of the relatives."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The relation of cause alone, the signifying being ceremonial decoration.",
                "feedback": "You have kept the power and thrown away the shape. If the sacrament caused without signifying, the rite would be arbitrary machinery, a lever God happened to wire, and the water could as well be sand. The definition holds both: it causes as a sign, by signifying (a later lesson gives the metaphysics). Strip the signification and you no longer have a sacrament; you have a superstition with good credentials."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The relation of custom: whatever the Church has long done in sacred settings.",
                "feedback": "Custom is how the word would work if the Church had coined it. She did not. The relation that defines the sacrament runs to a holiness that sanctifies, not to a habit that accumulates; and the fence matters, because the Church does many venerable sacred things, processions and blessings and vigils, that are not sacraments. The last lesson of this module sorts that furniture."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t13-l1-q3`,
          type: "mcq",
          stem: `One sacrament, says Aquinas, signifies in three tenses at once. Take the Eucharist at Sunday Mass: something behind it, something within it, something ahead of it. Which triple?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Creation behind it, redemption within it, judgment ahead of it.",
                "feedback": "A grand arc, and the wrong one: too wide for the definition. The sacrament's three tenses all belong to sanctification, the specific work the sign was appointed for. Its past is not creation in general but the cause of our sanctification in particular. Narrow the aperture and the triple comes into focus (q.60 a.3)."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Church's past councils, her present authority, her future triumph.",
                "feedback": "You have made the sacrament a sign of the institution that administers it. The Church carries the sacraments; they do not signify her, they signify what sanctifies her. Aquinas's three tenses run through Christ and the soul, not through the org chart. The correction is worth keeping: the Church is most herself when her signs point past her."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Sin remembered, sin forgiven, sin finally avoided.",
                "feedback": "All three happen, and none is the formula. Sin enters the definition only as what sanctification repairs; the sign's own content is positive. Aquinas names the cause of our sanctification, its form, and its end. Say them and the three tenses stop being a mnemonic and become a creed in miniature (q.60 a.3)."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Christ's Passion behind it, grace within it, glory ahead of it.",
                "feedback": "Respondeo: a sign commemorative, demonstrative, and prognostic: a reminder of the past, the Passion of Christ; an indication of what is effected in us now, grace; a foretelling of future glory (q.60 a.3). One wet forehead carries the whole economy in three tenses. Learn this triple well; the whole treatise keeps cashing it."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t13-l1-q4`,
          type: "true_false_with_reason",
          stem: `A friend who prays seriously says: 'Rituals with water and oil are training wheels. God is spirit; mature faith outgrows the props.' True or false?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "True: worship in spirit means the body contributes nothing to sanctification.",
                "feedback": "The angelist move: flattering to the spirit, false to the species. You are not a mind inconvenienced by a body; you are a rational animal, and you learn the intelligible through the sensible, every time, on principle. A sanctification that bypassed your senses would bypass you. The ninth module's anthropology was not abandoned at the church door; it was the reason the font is wet."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "True: signs suited the Old Law's childhood and were retired at Pentecost.",
                "feedback": "Half a church history, backwards at the hinge. The signs were not retired at Pentecost; they were exchanged. The old signs foreshadowed a Passion to come; the new ones apply a Passion accomplished, fewer in number, says Augustine, but more efficacious. What ended was the foreshadowing, not the signing. The economy of signs runs to the end of this age, and a later lesson says why it stops there."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "False: we are bodily knowers, so God fits the remedy to the patient He made.",
                "feedback": "Respondeo: the judgment and the reason both hold. Divine wisdom provides for each thing according to its mode, and man's mode is to be led by things corporeal and sensible to things spiritual (q.61 a.1). Add Aquinas's second reason and the kindness sharpens: the disease entered through the affections' grip on bodily things, so the medicine is applied at the site of the wound. The props are not for children. They are for humans."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "False: the blessed objects themselves deserve the reverence we owe them.",
                "feedback": "You have defended the sacraments by aiming the reverence at the furniture. The judgment is right, the reason has slipped a step: signs are honored for what they carry, and the carrying is the point. Owed reverence follows the sign's office; it does not ground it. Aquinas's actual reasons are about you, not the objects: your nature learns through senses, your wound sits in the sensible, your energies need holy employment (q.61 a.1)."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t13-l1-q5`,
          type: "mcq",
          stem: `Push the logic backward: was there baptism in Eden? Aquinas answers no, and his reason teaches more than the answer. Why no sacraments before the Fall?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because there was no Church yet to administer them.",
                "feedback": "Administration is downstream of need. Aquinas's argument does not touch the org chart; it reads the state of the patient. In innocence there was no wound, and more precisely, no disorder in which the higher would be perfected through the lower. Fix the anthropology and the answer falls out on its own (q.61 a.2)."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, in figure: Eden's rivers were baptism rehearsed.",
                "feedback": "Elegant, and Aquinas refuses it. Matrimony existed in Eden, he notes, but as a function of nature, not as a sacrament; the reading of Eden's furniture as proto-sacraments confuses foreshadowing with function. Signs that sanctify presuppose a soul that must be reached through the sensible, and that is precisely what innocence was not (q.61 a.2)."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because Adam, being innocent, had no need of grace at all.",
                "feedback": "One word too far, and the tradition guards that word. Adam in innocence had grace; the eighth lesson of the grace module already banked this. What he did not need was grace arriving through corporeal signs, since in that state nothing higher in him depended on anything lower. Keep the distinction: the need for grace is universal; the need for sacraments is the need of the wounded (q.61 a.2 ad 1)."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No: in innocence the higher ruled the lower; grace did not climb up through bodies then.",
                "feedback": "Respondeo: the rectitude of that state, Aquinas calls it: mind subject to God, lower powers subject to mind, body subject to soul. For the soul to be perfected in knowledge or grace by anything corporeal would run against that order (q.61 a.2). The sacraments are not the original design; they are the design's mercy on its own wreckage. Which is why the treatise reads like medicine from the first page."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t13-l1-q6`,
          type: "precision_check",
          stem: `A parish bulletin, meaning well, defines: <em>"A sacrament is a sacred reminder that points to a grace God gives directly to the soul."</em> Test it with full equipment.`,
          latin_tag: `sacramentum`,
          doctrine_line: `A sacrament is an efficacious sign: it confers the grace it signifies.`,
          lesson_complete: true,
          payload: {
            "statement": "A sacrament is a sacred reminder that points to a grace God gives directly to the soul.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At points: a sacrament does not only point to grace; it contains and confers it.",
                "feedback": "Respondeo: there is the leak. Signs point; this sign pours. The Council of Trent fixed the verbs for all time: the sacraments of the New Law contain the grace which they signify and confer that grace on those who place no obstacle (Sess. 7, can. 6). A reminder leaves you where it found you, holding a thought. The twelfth module promised you signs that really cause. Here they are; the next lesson opens the machinery."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At reminder: sacraments are not memory aids but mysteries beyond all meaning.",
                "feedback": "An overcorrection into fog. The sacrament genuinely is commemorative, a reminder of the Passion, and Aquinas says so without embarrassment (q.60 a.3); meaning is not the enemy. The bulletin's error is not that it lets the sign mean something. It is that it lets the sign do nothing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At directly: God gives no grace apart from the sacraments.",
                "feedback": "You have repaired the sentence by breaking a different wall. God has not chained His arm to the font: Trent itself holds the laver or the desire thereof (Sess. 6 ch. 4), and the grace module taught you prevenient grace arriving unannounced. The sacraments are the covenanted channels, not the only weather. The bulletin's flaw is elsewhere: its sign only points."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing to correct: that is the Catechism's own definition.",
                "feedback": "It reads smoothly, which is how the leak survives the editor. Run the audit: sacred, yes; reminder, partly; and then points, and the whole engine is gone. A sign that merely points at grace given elsewhere is precisely the position Trent anathematized in the sixth canon on the sacraments. The sentence is not heresy by intent; it is heresy by entropy. Precision is the maintenance schedule."
              }
            ],
            "correct_option_id": "a",
            "correction": "A sacrament is an efficacious sign: it effects what it signifies. Say rather: a sign of grace that contains the grace it signifies, and confers it on those who place no obstacle (Trent, Sess. 7 can. 6; ST III q.62 a.1 ad 1)."
          },
        }
      ],
    },
    {
      id: `t13-l2`,
      num: `II`,
      title: `The Chisel of Grace`,
      latin: `causa instrumentalis`,
      tag: `causa instrumentalis`,
      fin: {
        tag: `causa instrumentalis`,
        heading: `The chisel, wet.`,
        body: `The eighth module left a chisel on the table and a promise in the air: one act, two causes, ordered. Theology picks the chisel up and walks it to a font. God alone causes grace, because grace is a participated likeness of His own nature, and no creature gives a share in what it does not have. And yet the water really acts, the way the chisel really cuts, by the motion of the One who holds it. Trace the arm back: from the Godhead, through the humanity of Christ like a hand, into the separate instruments like tools taken up, and the whole chain was cut open on Calvary, where water and blood left the side of the sleeping Christ. The sacraments are not additions to a finished work. They are the finished work, arriving.`,
        distinction: {
          latin: `causa instrumentalis`,
          english: `instrumental cause`,
          gloss: `The eighth module's pair employed, not re-proved: the sacrament acts by the power of God who moves it, and the effect resembles Him, not the tool.`,
          motif: `chisel-at-the-font`,
        },
      },
      questions: [
        {
          id: `t13-l2-q1`,
          type: "mcq",
          stem: `The sculptor carves; the chisel really cuts. At the font a man pours water and speaks, and a soul is washed clean. The honest bystander asks the eighth module's question in church: who cleansed her?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "God alone; the water and the minister are occasions, doing nothing themselves.",
                "feedback": "The cautious answer, and Aquinas examined it under its own image: a leaden coin the king rewards with a hundred pounds. The coin causes nothing; the king's will does all. If that is the model, he says, then the sacraments are mere signs, and the authority of many saints stands against it: they not only signify but cause (q.62 a.1). Reverence overshot the doctrine. The bystander deserves the stranger truth."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Both, ordered: the water and minister really act, by the power of God who moves them.",
                "feedback": "Respondeo: one act, two causes, ordered: the eighth module's chisel, now wet. The principal cause works by its own form, as fire heats; only God causes grace that way, since grace is a participated likeness of the divine nature. The instrument works as moved by the principal agent, and so the effect resembles God, not the water, as the couch resembles the craftsman's art, not the axe (q.62 a.1). Deny the instrument and you wonder why God appointed one. Deny the principal and you wait forever for water to sanctify."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The minister principally, since Christ handed the power over to His clergy.",
                "feedback": "You have promoted the instrument to owner. What Christ handed His ministers is a ministry: the working of an instrument, applied to something outside it, while the interior effect is produced by the power of the principal agent, which is God (q.64 a.1). The next lesson will watch this distinction save the Church from despair about her own clergy. For now, keep the order: the hand is not the artist."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The water principally: once blessed, it holds the power as its own possession.",
                "feedback": "That is not sacramental doctrine but its shadow, the charm. Nothing corporeal owns a power over the soul; what the water carries is instrumental, transient, and borrowed, present while God moves it and not otherwise. The blessing does not install a charge in the molecules. It appoints a servant. The difference is the whole difference between religion and magic, and a later question makes you say it precisely."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t13-l2-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>We must therefore say otherwise, that an efficient cause is twofold, principal and instrumental. The principal cause works by the power of its form, to which form the effect is likened; just as fire by its own heat makes something hot. In this way none but God can cause grace: since grace is nothing else than a participated likeness of the Divine Nature... But the instrumental cause works not by the power of its form, but only by the motion whereby it is moved by the principal agent: so that the effect is not likened to the instrument but to the principal agent: for instance, the couch is not like the axe, but like the art which is in the craftsman's mind. And it is thus that the sacraments of the New Law cause grace: for they are instituted by God to be employed for the purpose of conferring grace.</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae III q.62 a.1 · Dominican Fathers translation</div></div>Earlier in the same article Aquinas reports a gentler opinion: the sacraments cause grace the way a leaden coin causes a payout, because the king has decreed that whoever presents it receives a hundred pounds. What does his verdict cost that opinion?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It makes God's power depend on created instruments He cannot work without.",
                "feedback": "Backwards: the coin theory makes God too independent of the sign, not too bound to it. Aquinas's own account keeps the freedom intact, for the instrument has its power wholly from the divine institution and motion. God is not chained to His chisel. He is merely, and really, using it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It denies the king any liberty to attach rewards to whatever token he likes.",
                "feedback": "No one in the dispute denies the king's liberty; the question is what his decree accomplishes in the token. On the coin theory the answer is: nothing. The coin is presented and remains a dead marker while the treasury acts elsewhere. Aquinas's complaint is not about freedom but about emptiness: signs that trigger without transmitting are not what the saints meant by causing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It confuses the couch with the axe, making effects resemble their instruments.",
                "feedback": "You have quoted the passage against itself. The couch-and-axe line is Aquinas's own teaching, not the error under review: effects resemble the principal agent, not the instrument, which is exactly why instrumental causality can carry grace without the water becoming godlike. The coin opinion fails on other ground: it leaves the coin with no causality at all."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It reduces sacraments to mere signs, and the tradition says they cause what they signify.",
                "feedback": "Respondeo: his verdict in his own words: according to the above mode the sacraments are mere signs, and against it stands the authority of many saints, that the sacraments not only signify but cause grace (q.62 a.1). Centuries later a council would put the same verdict under anathema, and a later lesson hands you that canon. Note what the instrumental account purchases: the sign really acts, God alone really deifies, and neither truth eats the other."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t13-l2-q3`,
          type: "mcq",
          stem: `Press the metaphysics: while baptism is being conferred, what exactly is in the water? The tradition's answer must dodge two ditches at once: a magic charge the water owns, and a polite nothing.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "An instrumental power, passing and incomplete, like motion: present while God moves it.",
                "feedback": "Respondeo: an instrumental power has a being that passes from one thing into another, and is incomplete, just as motion is an imperfect act passing from agent to patient (q.62 a.4). Aquinas's homely proof that spirit can ride matter: the human voice, a bodily vibration carrying a mental concept into another mind. The water is not charged like a battery nor empty like a prop. It is in use, the way a word is in use, and for the same reason: someone is speaking through it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nothing: power in the water is pious shorthand for God acting alongside it.",
                "feedback": "The coincidence theory again, wearing metaphysical dress. Aquinas confronts it by name: those who hold that the sacraments cause grace only by a certain coincidence deny the sacraments any power productive of the effect. If we say instrumental cause, he answers, we must needs allow a certain instrumental power (q.62 a.4). Alongside is not the preposition of the faith. Through is."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A resident spiritual charge the blessing installed, which the water keeps as its own.",
                "feedback": "You have built the battery the doctrine forbids. A spiritual power cannot sit in a corporeal subject as a permanent and complete possession; what the argument allows is exactly less: a passing instrumental power, present in the being-moved, gone with the motion (q.62 a.4 ad 1). Holy water in a bottle is not a stored sacrament. The power is not in storage anywhere but in God."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The minister's own holiness, loaned to the element for the length of the rite.",
                "feedback": "Generous to the clergy and fatal to the doctrine. If the minister's holiness were the deposit, its absence would be a withdrawal, and every sacrament would be hostage to the state of a man's soul. The next lesson is entirely about why that cannot be true, and the silver and lead pipes are already waiting there. The power in the water is Christ's, not the plumber's."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t13-l2-q4`,
          type: "mcq",
          stem: `A stick moves because a hand moves it; the hand moves because a man does. Aquinas builds the whole economy of grace on that little chain: an instrument united to the agent, and an instrument separate from him. Where does sacramental power come from, by what route?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "From the Church's authority, empowered by Christ to attach grace to her own rites.",
                "feedback": "The Church administers what she did not and cannot institute. The power of the sacrament is from the institutor, and since the power at issue is divine, God alone institutes (q.64 a.2). Rites the Church attaches on her own authority exist, and the last lesson will file them honestly as sacramentals. But the seven are not hers to have invented, which is precisely why they are hers to trust."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "From the recipient's faith meeting God's promise, the rite bearing witness to the meeting.",
                "feedback": "Stated at full strength, this is the Reformation's account: the promise believed, the rite testifying. It honors something real, for faith matters and Trent will say so. But as the source of sacramental power it was weighed and anathematized, and a later lesson quotes the canon. Note the cost even before the canon: on this account infants receive nothing at the font, and the Church has baptized infants since the beginning."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "From Christ's Godhead through His humanity to the rite: the Head's grace reaching us through channels.",
                "feedback": "Respondeo: the principal efficient cause of grace is God Himself, in comparison with Whom Christ's humanity is as a united instrument, whereas the sacrament is as a separate instrument. Consequently the saving power must needs be derived by the sacraments from Christ's Godhead through His humanity (q.62 a.5). The tenth module taught the Head's fullness and promised you the channels; here they are, cut by the Passion itself. The gloss Aquinas quotes says it best: from the side of Christ asleep on the Cross flowed the sacraments which brought salvation to the Church. Water and blood: baptism and Eucharist, the two principal ones, already flowing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "From the Passion as a moving example that stirs the heart which then receives grace.",
                "feedback": "The exemplarist account: the Cross as the great persuasion. It keeps the Passion at the center and quietly demotes it from cause to advertisement. Aquinas's language is bluntly causal: the sacraments derive their power specially from Christ's Passion, whose virtue is in a manner united to us by our receiving them (q.62 a.5). The Cross does move hearts. It also, and first, moves the instruments that wash them."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t13-l2-q5`,
          type: "distinction_application",
          stem: `The pair, once more: a principal cause works by its own form; an instrumental cause works as moved by another. Now classify two sentences: <em>"The axe makes the couch"</em> and <em>"The font makes the Christian."</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The axe is instrumental, but the font is principal, since baptism cannot fail.",
                "feedback": "Reliability tempted you into a promotion. The font's certainty comes not from its own rank but from its Mover's fidelity, which is exactly why the certainty holds: instruments fail when the agent falters, and this Agent does not. Keep the font in the instrument column and the certainty gets stronger, not weaker."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Both name instruments: the couch is the carpenter's work, the Christian is God's.",
                "feedback": "Respondeo: both sentences are true, and both are instrumental truths. The axe cuts by its edge and builds by the art in the craftsman's mind; the font washes by water and regenerates by the power of God moving it (q.62 a.1). Neither sentence is false modesty and neither is idolatry, so long as the order stands. The grammar of the eighth module turns out to have been sacramental theology on a workbench."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The axe is a true cause, but the font is a mere sign of God's parallel work.",
                "feedback": "You have given carpentry more metaphysical credit than baptism. That is the leaden coin again: the font demoted to a marker while God works around it. The tradition's scandal is precisely that the font belongs in the same causal sentence as the axe, and higher in it: they effect what they signify."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Both name principal causes, each accomplishing its own work whole.",
                "feedback": "Then the couch should resemble the axe, and the Christian should resemble the font, and neither is so. The effect is likened to the principal agent: the couch to the craftsman's art, the new Christian to God, whose nature grace participates. Two instruments, two principals, one grammar (q.62 a.1)."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t13-l2-q6`,
          type: "true_false_with_reason",
          stem: `An earnest reader of Hebrews objects: 'By one oblation He hath perfected for ever them that are sanctified. A finished work needs no machinery of rites bolted on afterward.' True or false: the sacraments add to a finished work?`,
          latin_tag: `causa instrumentalis`,
          doctrine_line: `The sacraments cause grace as instruments of God, their power flowing from Christ's Passion.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "True: Scripture says one oblation perfected us forever, so nothing further operates.",
                "feedback": "The verse is quoted whole and the conclusion smuggled. One oblation, perfected forever: granted, gladly, by every line of this treatise. What does not follow is that nothing operates in time, for the perfecting must still reach each man born after the Cross. The objection proves the Passion sufficient. It was never accused of being insufficient. The question is delivery."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "True: grace being immediate to the soul, any mediation dishonors it.",
                "feedback": "The angelist premise again, now aimed at the Cross. God alone enters the soul, and Aquinas affirms it as strongly as any critic of mediation (q.64 a.1). But the God who alone enters has chosen to enter by way of instruments He appointed, and honoring the choice is not dishonoring the chooser. Immediacy of the principal cause and reality of the instrument stand together; that was the whole lesson."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "False: they add nothing; they apply the one Passion to this man, now.",
                "feedback": "Respondeo: the judgment and the reason the tradition gives. Christ's Passion is a sufficient cause of man's salvation, and the sacraments obtain their effect through its power; the Passion is, so to say, applied to man through the sacraments, as the Apostle writes: all we who are baptized in Christ Jesus are baptized in His death (q.61 a.1 ad 3). Nothing is added to the treasury. Something is added to you, out of it. The reader of Hebrews can keep his whole verse; he has merely met its distribution system."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "False: the Church may rightly add whatever ceremonies devotion finds helpful.",
                "feedback": "True of ceremonies, and beside the point of the objection. The question was whether sacraments add to the Passion's work, and the answer runs through causality, not through the Church's liberty in ritual matters. Defend the sacraments as helpful additions and you have already sold the ground: they are not additions at all, but applications of the one sufficient Cross."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t13-l3`,
      num: `III`,
      title: `Ex Opere Operato`,
      latin: `ex opere operato`,
      tag: `ex opere operato`,
      fin: {
        tag: `ex opere operato`,
        heading: `By the work worked.`,
        body: `The phrase the last module kept off its tongue is now yours: ex opere operato, grace conferred through the act performed. It is a property line with ditches on both sides. On one side, the caricature: magic water, working on the indifferent and the unrepentant alike; Trent's own canon carries the fence against it, for grace comes to those who place no obstacle. On the other side, the pious mistake: sacraments hostage to the holiness of the man performing them, every absolution asterisked by the state of a stranger's soul. Between the ditches runs the covenant. The pipe may be silver or lead; the distracted priest's habitual intention carries the act; the unbeliever at the hospital sink, intending what the Church does, truly baptizes. None of this flatters the minister. All of it protects you, because the power was never his to drop.`,
        distinction: {
          latin: `ex opere operato`,
          english: `by the work performed`,
          gloss: `Grace conferred by the sacramental act itself, God's covenanted instrument: not by the worth of the doer (ex opere operantis), and never as magic, for the obstacle-clause stands.`,
          motif: `silver-or-lead-pipe`,
        },
      },
      questions: [
        {
          id: `t13-l3-q1`,
          type: "mcq",
          stem: `Father Anselm, baptizing his fourteenth infant of the morning, catches his own mind drifting to lunch in the middle of the formula. The water falls, the words are said, his thoughts are on soup. Valid?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Invalid: a sacrament requires actual attention, or the form is empty sound.",
                "feedback": "You have made validity hostage to the weather inside a man's head, and Aquinas is kinder and more realistic: when a man wishes to be very intent on something, he begins unintentionally to think of other things, and he quotes the Psalm for it: my heart hath forsaken me (q.64 a.8 ad 3). If actual attention were the hinge, no sacrament on earth would be certainly valid. The hinge is set deeper, where distraction cannot reach it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Valid, but only because the parents' faith supplies what his distraction dropped.",
                "feedback": "A borrowed patch on a hole that is not there. The faith of others has real work in infant baptism, but it does not repair ministerial defects of attention, because attention was never the requirement. What carries the act is the priest's own standing intention to do what the Church does, formed when he took up the ritual. Nothing dropped; nothing needs supplying."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Invalid, unless he afterward repeats the essential words with recollection.",
                "feedback": "The scrupulous answer, and a small factory of torment. Conditional repetition has its lawful place where a real doubt about essentials exists; a wandering thought is not such a doubt. Aquinas's teaching exists precisely to close this loop: habitual intention suffices, and the minister should strive for actual attention without ever being told the sacrament hangs on it (q.64 a.8 ad 3)."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Valid: he came to do what the Church does, and that intention still carries the act.",
                "feedback": "Respondeo: he who thinks of something else has no actual intention, yet he has habitual intention, which suffices; if a priest comes to baptize, intending to do to him what the Church does, the sacrament is valid in virtue of his original intention though his mind wander after (q.64 a.8 ad 3). The infant is not baptized by Father Anselm's powers of concentration. She is baptized by Christ, whose instrument showed up and meant it, once, on the way in."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t13-l3-q2`,
          type: "precision_check",
          stem: `A devout parishioner explains why she crosses town for a certain confessor: <em>"The sacrament takes effect because the minister's holiness charges it with grace."</em> Test the sentence.`,
          payload: {
            "statement": "The sacrament takes effect because the minister's holiness charges it with grace.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing to correct: God honors holy hands more than sinful ones.",
                "feedback": "That instinct has a name and a war behind it, and the Church fought the war against the instinct. If holy hands gave more valid sacraments, every absolution would carry an asterisk and every soul would be auditing the clergy. God's arrangement is sturdier: the effect rides the office, not the officer. Her confessor's holiness is a real good, for counsel and for penance's fruitfulness in her life. It is not the current in the wire."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At the minister's holiness: the pipe may be silver or lead; the water is the same.",
                "feedback": "Respondeo: Aquinas's own plumbing: whatever form or power an instrument has beyond its instrumental office is accidental to it, as a physician's body may be healthy or sickly, or a pipe, through which water passes, be of silver or lead (q.64 a.5). Therefore the ministers of the Church can confer the sacraments though they be wicked. Trent bolted the door: a minister in mortal sin, observing the essentials, still effects and confers (Sess. 7, can. 12). Prefer silver pipes. Trust the water."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At grace: sacraments confer standing in the Church, not grace.",
                "feedback": "You have corrected the one word she had right. Grace is exactly what the sacraments confer; the sixth canon says contain and confer without blinking. Strip that word and her sentence collapses into the bare-mark theory this module has been dismantling since the first lesson. Her error is upstream, in the minister's soul doing the charging."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At charges: the minister aims the grace, but the recipient's fervor charges it.",
                "feedback": "You have moved the battery from the pulpit to the pew, and it is the same wrong circuit. The recipient's disposition matters, and Trent guards it: grace comes to those who place no obstacle, and fervor bears on fruitfulness. But the charging metaphor is the whole disease. Nobody charges a sacrament. God moves an instrument, and the power is His throughout."
              }
            ],
            "correct_option_id": "b",
            "correction": "The minister works as an instrument; the power is Christ's, and a wicked minister still confers a true sacrament if he observes the essentials and intends what the Church does (ST III q.64 a.5; Trent, Sess. 7 can. 12)."
          },
        },
        {
          id: `t13-l3-q3`,
          type: "mcq",
          stem: `Trent's phrase for all this is <em>ex opere operato</em>, in Waterworth's English: grace is conferred 'through the act performed.' A catechist asks you to state, exactly, what the phrase asserts.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That the rite works on every recipient whenever performed, disposed or not.",
                "feedback": "You have recited the caricature, the one printed on the pamphlets. Trent's own sixth canon carries the fence the caricature omits: grace is conferred on those who do not place an obstacle. An adult approaching in unrepented mortal sin blocks the gift; the sacrament is valid and his hands are closed. Ex opere operato guarantees God's side of the covenant, never a bypass of the man."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That grace is conferred because the Church corporately wills it in each rite.",
                "feedback": "The Church's intention has a real office here, and a later question locates it. But making her corporate will the engine of grace hands a creature the principal causality that belongs to God alone (q.62 a.1). The phrase does not say by the work of the Church. It says by the work worked: the sacramental act itself, God's appointed instrument, moved by Him."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Grace rides the sacramental act itself, not the doer's worth or the receiver's fervor.",
                "feedback": "Respondeo: precisely that, and no more. The sacramental act, validly performed, confers the grace it signifies, because God has covenanted it so; the minister's sanctity does not raise it and his sin does not void it, and the recipient's fervor conditions fruitfulness without becoming the cause. Trent, canon eight: if any one saith that by the said sacraments of the New Law grace is not conferred through the act performed, but that faith alone in the divine promise suffices for the obtaining of grace, let him be anathema (Sess. 7, can. 8). The phrase is a property line. On one side, magic; on the other, subjectivism; inside it, covenant fidelity."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That faith alone in the divine promise obtains the grace, the rite bearing witness.",
                "feedback": "Stated seriously, because serious men held it: this is the Reformation's account of the sacraments, the promise trusted and the rite testifying. Trent weighed exactly this sentence and anathematized it in canon eight of the seventh session, in the very act of defining ex opere operato. The tradition's quarrel is not with faith, which Trent calls the beginning, foundation, and root. It is with alone, which unbaptizes every infant in Christendom."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t13-l3-q4`,
          type: "true_false_with_reason",
          stem: `North Africa, fourth century. Bishops who cracked under persecution and handed over the books are back at their altars. The Donatists refuse: sacraments from traitors' hands are void, for no one gives what he does not have. True or false?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "True: the axiom holds; an empty vessel pours nothing.",
                "feedback": "The axiom is real and its application is misaddressed. Nemo dat quod non habet governs owners, and the minister was never the owner. What passes through him was never in his private holdings, which is why his private bankruptcy cannot stop the payment. The Donatists' rigor was a compliment to the clergy that the clergy could not survive; holiness became a load-bearing wall in another man's salvation."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "True: a valid sacrament requires a valid holiness, or the chain of grace breaks.",
                "feedback": "Then the chain has already broken, everywhere, unrecoverably: no Christian could ever verify the interior state of the man who baptized him, or the man who ordained that man, back through the centuries. The Donatist principle does not purify the Church. It abolishes sacramental certainty for everyone in it. The chain holds because its links are offices moved by Christ, not biographies."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "False: the Church ruled it so for the sake of peace, and law makes it valid.",
                "feedback": "The judgment is right and the ground is sand. If validity rested on ecclesiastical positive law, another age could legislate it away, and the Donatists would merely be early. The Church did not decide that wicked ministers confer true sacraments; she recognized it, from the nature of instrumental causality itself. Peace was the fruit. The root was metaphysics."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "False: the minister gives what Christ has; the gift never sat in his private holdings.",
                "feedback": "Respondeo: Augustine's answer to the Donatist Petilian: the evil lives of wicked men are not prejudicial to God's sacraments, rendering them neither invalid nor less holy; and to the anxious: what is a bad minister to thee, where the Lord is good? (q.64 a.5, sed contra and ad loc.). The Council of Arles ruled against rebaptism in 314, and Trent restated the doctrine against the same instinct reborn (Sess. 7, can. 12). The axiom stands corrected: no one gives what he does not have, and the minister was never the giver."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t13-l3-q5`,
          type: "mcq",
          stem: `So the minister's holiness is not required, nor even his faith. What is required of him? Washing a child, after all, can be a bath, a swim lesson, or a game with a hose.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "His personal belief that the sacrament effects what the Church claims.",
                "feedback": "Aquinas denies exactly this, with a case that startles: even an unbeliever can confer a true sacrament, esteeming the rite to be nothing, provided he intends to do what the Church does (q.64 a.9). His unbelief is his own tragedy; the sacrament rides the Church's intention expressed in the rite, not his private theology. Faith is required of the Church that baptizes, not proved in the man who pours."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The recipient's understanding of what is being done to him.",
                "feedback": "The Church has baptized infants since the apostles, and an infant understands nothing and receives everything. You have relocated the requirement to the one party the tradition explicitly exempts. The recipient's part, where he is an adult, is disposition, the absence of the obstacle; comprehension is a fruit of the life given, not its precondition."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The sacred setting: font, vestments, church, and gathered congregation.",
                "feedback": "Every element you name is fitting, and none is essential, and the Church's own practice proves it: a nurse baptizing a dying newborn over a hospital sink, with tap water and twenty seconds, confers the same sacrament as a cathedral. Solemnity serves reverence. The essentials are matter, form, and intention, and the next lesson takes the first two apart."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The intention of doing what the Church does, expressed in the words of the rite.",
                "feedback": "Respondeo: washing is indifferent to many uses, so it must be determined to one, and the minister's intention does the determining, expressed in the words pronounced (q.64 a.8). Trent: there is required the intention at least of doing what the Church does (Sess. 7, can. 11). Note how little that asks and how much it settles: the atheist nurse at the sink qualifies, and the actor in a film, saying every word over real water, does not. The sacraments are protected at once from clerical worthiness tests and from accidental magic."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t13-l3-q6`,
          type: "dialogue_branch",
          stem: `At your goddaughter's christening lunch her uncle, a serious Bible-church man, says it kindly: "Beautiful ceremony. Of course the water doesn't do anything. It's a picture of a decision; what saves is faith in the promise."`,
          latin_tag: `ex opere operato`,
          doctrine_line: `The sacrament works by the work performed: Christ's fidelity, not the minister's worth.`,
          lesson_complete: true,
          payload: {
            "branches": [
              {
                "text": "\"You're right that faith is what matters. The water is our family's way of saying so.\"",
                "feedback": "Peace purchased with the doctrine as the payment. You have handed him, folded in a napkin, the very sentence Trent anathematized: the sign that only marks a grace received through faith alone (Sess. 7, cans. 6 and 8). He deserved better than agreement; he deserved the stranger, stronger claim. An hour ago, in that font, God acted. Charity that concedes the miracle is not charity toward him, and it is perjury toward her."
              },
              {
                "text": "\"It did something an hour ago. God acted through that water: she was born again in it, not congratulated by it.\"",
                "feedback": "Respondeo: the claim, made plainly and without apology. Unless a man be born again of water and the Holy Ghost: the Church reads Our Lord's words at their word, of true and natural water (Trent, Sess. 7, On Baptism can. 2). The sacraments contain the grace they signify and confer it through the act performed, ex opere operato, on all who place no obstacle, and on God's side always and to all (cans. 6, 7, 8). And his real concern is honored inside the doctrine, not against it: this is not salvation by human works, for the work worked is Christ's work, flowing from the Passion through an instrument no man's merit improves. Grace remains entirely gift. That is why it can be entirely certain.",
                "verdict": "correct"
              },
              {
                "text": "\"Trent anathematized that sentence in 1547. Canon eight. Look it up before lecturing at a christening.\"",
                "feedback": "The citation is correct to the year and the canon, and the christening is over as a meal anyone enjoys. The canon is not a place setting. You have won an exchange and orphaned a witness: he will remember being struck with a council, not being told what God did for his niece an hour ago. State the truth, distinguish the error, keep the uncle. The anathema guards the doctrine; it was never issued as table talk."
              },
              {
                "text": "\"The water works no matter what. Rite performed, soul saved; nothing about her later life can touch it.\"",
                "feedback": "You have defended the sacrament by promoting it to a charm, and the uncle will rightly smell magic. Ex opere operato guarantees God's fidelity in the act, not the man's perseverance after it: the baptized can lose grace by mortal sin, as Trent teaches against exactly your sentence (Sess. 7, On Baptism can. 6), and adults who approach with an obstacle receive validly and emptily. Answer his suspicion of magic with the real fence, not a confirmation of his fears."
              }
            ],
            "commentatorLine": "The Commentator looks on from the dessert table. 'Notice that he came to a christening to say christenings do nothing. Some part of him suspects the water is worth arguing about. That part deserves an answer with its cake, and the answer is not a shrug, a citation, or a spell. It is what happened.'"
          },
        }
      ],
    },
    {
      id: `t13-l4`,
      num: `IV`,
      title: `Water and Words`,
      latin: `materia et forma`,
      tag: `materia et forma`,
      fin: {
        tag: `materia et forma`,
        heading: `Water and words.`,
        body: `The bronze from the fourth module never guessed where its grammar would end up. In every sacrament the tradition finds the old composition: a sensible element that awaits its sense the way matter awaits form, and words that settle the sense the way form settles matter. Water alone could mean drowning; joined to the words it can only mean this washing, now, in the Name spoken. Aquinas loves the deeper echo: word joined to element as the Word was joined to flesh, so that the font speaks the grammar of the Incarnation every time it is used. And because the composition is God's institution and not our invention, no pastor may recompose it: the essentials are received, the ceremonies are clothed and re-clothed around them, and the Greek and Latin fonts, differing in formula, say the one thing the one Church does. Determinate signs are not rigidity. They are how a gift stays recognizable for twenty centuries.`,
        distinction: {
          latin: `materia et forma`,
          english: `matter and form (sacramental)`,
          gloss: `The fourth module's pair as analogy: the element stands as matter, the words as form; one determinable, one determining, one sign from the two, fixed by divine institution.`,
          motif: `water-and-words`,
        },
      },
      questions: [
        {
          id: `t13-l4-q1`,
          type: "mcq",
          stem: `Step back and ask the child's question, which is the best question: why does God sanctify rational souls with pourings, oils, and bread rather than by pure interior illumination?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because we learn the intelligible through the sensible; wisdom provides for each thing by its mode.",
                "feedback": "Respondeo: it is part of man's nature to acquire knowledge of the intelligible from the sensible, and divine wisdom provides for each thing according to its mode; Scripture says she ordereth all things sweetly (q.60 a.4, quoting Wisdom 8:1). The same condescension that gave you parables and a Bible full of pictures gives you sacraments. God does not shout over your nature. He speaks it fluently."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because matter, having occasioned the Fall, must be pressed into penitential service.",
                "feedback": "Matter occasioned nothing; a will did. The doctrine of creation you learned early in this course refuses every slander against bodies as such, and the sacraments are the refutation in practice: matter is not doing penance at the font, it is being honored with an office. The Word did not take flesh to punish flesh. The signs follow the Incarnation's grain, as this lesson is about to say precisely."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because crowds need visible theater to hold them together as one body.",
                "feedback": "A true sociology dressed as the reason. Augustine does observe that no religion, true or false, binds men together without shared visible signs, and Aquinas quotes him with approval (q.61 a.1). But binding the community is a fruit of the arrangement, not its root. Reduce the sacraments to social glue and you have explained the Church the way the census explains a family."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because angels minister through matter, and we receive along their chain.",
                "feedback": "Angelology has wandered into the wrong treatise. The sacraments run from Christ's Godhead through His humanity, as the last lesson traced; angels can serve at the edges of that economy but the chain is not theirs. The reason for sensible signs is nearer to home: not the hierarchy above you, but the animal you are, the knower who starts at his senses every time."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t13-l4-q2`,
          type: "mcq",
          stem: `Augustine's sentence, quoted by Aquinas as the hinge of the whole lesson: <em>"The word is added to the element, and this becomes a sacrament."</em> What do the words add that the water lacks?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Volume: two signs together signify more than one alone.",
                "feedback": "Signs do not stack like coins; an ambiguous sign added to another ambiguous sign is a longer ambiguity. The words do something categorically different from adding: they settle. Watch the water without the words and you cannot say what it means. Hear the words, and the water can no longer mean anything else."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Solemnity: speech makes the washing ceremonious and public.",
                "feedback": "Then any dignified formula would serve, and the rite would survive on eloquence. Solemnity attends the words, but the office of the words is semantic, not atmospheric: they determine what the deed signifies. A whispered emergency baptism, all solemnity stripped away, is whole; a grand ceremony with the wrong words is nothing. That asymmetry is the answer."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Determination: water alone can mean death or washing; the words settle it.",
                "feedback": "Respondeo: water can signify drowning or cleansing, burial or birth; the words determine the signification, the way form determines matter, which is why the tradition borrowed the fourth module's pair and says the words are as the form, and sensible things are as the matter (q.60 aa.6-7). And Aquinas gives the deeper fittingness: the sacrament thereby resembles its Author, for in it the word is joined to the sensible sign, just as in the mystery of the Incarnation the Word of God is united to sensible flesh (q.60 a.6). The font speaks the grammar of Bethlehem."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Power: the syllables carry a force the mute element lacks.",
                "feedback": "Word-magic, the perennial counterfeit. The syllables have no force of their own; incanted by an actor over a prop they effect nothing, as the intention lesson already settled. What the words contribute is signification, and the power rides the whole instituted sign as God's instrument. The difference between a formula and a spell is who is speaking through it, and on whose errand."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t13-l4-q3`,
          type: "match_pair",
          stem: `The fourth module's pair reports for holy work. In every sacrament the tradition finds a composition. Match each piece to its office.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the sensible element or deed"
              },
              {
                "id": "L2",
                "text": "the spoken formula"
              },
              {
                "id": "L3",
                "text": "element and formula together"
              },
              {
                "id": "L4",
                "text": "the minister"
              },
              {
                "id": "L5",
                "text": "the grace conferred"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "as matter: determinable, awaiting its sense"
              },
              {
                "id": "R2",
                "text": "as form: determines the signification"
              },
              {
                "id": "R3",
                "text": "the complete sign, one sacrament from two"
              },
              {
                "id": "R4",
                "text": "the instrument in whose hands the sign is worked"
              },
              {
                "id": "R5",
                "text": "the res: what the sign contains and confers"
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
              "all_correct": "The composition, correctly assembled: water as matter, words as form, the two one sign, the minister its living instrument, and grace the reality the whole arrangement exists to deliver. Aquinas: the words are as the form, and sensible things are as the matter (q.60 a.7). The Council of Florence taught the same anatomy to the Armenians in 1439: things as the matter, words as the form, and the minister with intention as the third requisite. The bronze and its shape were never only about statues.",
              "partial_correct": "Some offices misfiled. Run the composition again: what awaits its sense is matter; what settles the sense is form; the two together are the one sign; the man who works it is the instrument; and what it pours is the res, the grace signified and given."
            }
          },
        },
        {
          id: `t13-l4-q4`,
          type: "fill_blank",
          stem: `Set the lesson's two sentences in stone. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The <span class="fb-blank" data-blank="b1">______</span> is added to the <span class="fb-blank" data-blank="b2">______</span>, and this becomes a sacrament; for the words are as the <span class="fb-blank" data-blank="b3">______</span>, and sensible things are as the <span class="fb-blank" data-blank="b4">______</span>.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "word"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "element"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "form"
                ],
                "case_sensitive": false
              },
              {
                "id": "b4",
                "correct_answers": [
                  "matter"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "word",
              "element",
              "form",
              "matter",
              "spirit",
              "feeling",
              "blessing",
              "custom"
            ],
            "feedback": {
              "all_correct": "Locked: word, element, form, matter. Augustine's sentence and Aquinas's gloss, joined the way the font joins them (q.60 aa.4-7). Note what the borrowing is: an analogy, not a chemistry. No one claims the words inform the water as a soul informs a body; the claim is grammatical, that one part determines and the other awaits determination. The fourth module built the grammar. The sacraments speak it.",
              "partial_correct": "Some blanks resisted. Sort by office: what is added and determines is the word, standing as form; what receives and awaits is the element, standing as matter. The sentence should end by making one sacrament out of two ingredients."
            }
          },
        },
        {
          id: `t13-l4-q5`,
          type: "mcq",
          stem: `A liturgist proposes: rice cakes for the Host where wheat is foreign, wine of palm where grapes will not grow, and for baptism, whatever a culture washes with. Could the Church oblige?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: the Church made the signs and may remake them for her children.",
                "feedback": "She did not make them, which is the whole and only reason she cannot remake them. The power of the sacrament is from the institutor, and God alone institutes (q.64 a.2); the Church received determinate signs and guards a deposit she does not own. Her genuine liberty, and it is wide, runs over the ceremonies that clothe the essentials, not over the essentials clothed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No: sanctification is God's work, so God's institution fixes the signs; ours is to keep them.",
                "feedback": "Respondeo: it is not for anyone to determine what lies in another's power, and the sanctification of man is in the power of God who sanctifies; therefore the things to be used are determined by divine institution (q.60 a.5). Trent adds the pastoral fence: received and approved rites are not to be contemned or changed at any pastor's pleasure (Sess. 7, can. 13). The missionary's real task is harder and better than substitution: carry wheat, wine, and water to the ends of the earth, because Christ's signs, like His flesh, are particular."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No: the ancient customs are too venerable for any hand to disturb.",
                "feedback": "The right verdict leaning on the wrong pillar. Venerability is real but it is not the ground, and it proves too much: many venerable ceremonies have lawfully developed, and the Greek and Latin baptismal forms differ to this day, both valid. The line is not drawn by age. It is drawn by institution: what Christ fixed, no age touches; what the Church clothed, the Church can tailor."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Yes, in mission lands, where the old signs would signify nothing.",
                "feedback": "The premise slanders both the signs and the peoples. Water, bread, wine, oil: the signs were chosen from the human floor of the world, common to every latitude, and where they are scarce they can travel. A sacrament re-signified into local substitutes would signify the local culture, which was never the point. The Church brings the stranger sign, and the sign brings what no culture had."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t13-l4-q6`,
          type: "true_false_with_reason",
          stem: `A celebrant, wanting warmth, baptizes 'in the name of the Creator, and of the Redeemer, and of the Sanctifier.' A parishioner shrugs: God knows what he meant, so surely it works. True or false?`,
          latin_tag: `materia et forma`,
          doctrine_line: `Sensible things are the matter and words the form: the sign is composed, and fixed by divine institution.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "True: God reads hearts, and the celebrant's intention was Trinitarian enough.",
                "feedback": "God reads hearts; sacraments read forms. The two are not rivals, but they are not interchangeable either, and the mercy of a determinate form is exactly that the Church never has to audit a celebrant's heart to know what happened at her font. Substitute titles of operations for the revealed names and the form no longer says what the Church says. Sincerity cannot determine a sign; that is the form's own office."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "True: the Church supplies whatever her ministers happen to omit.",
                "feedback": "Ecclesia supplet is real doctrine with a real address: it supplies jurisdiction in certain defects of governance. It does not supply essential form, ever, or the sacraments would have no essentials at all and canon thirteen would guard nothing. A broken form is not a paperwork error the head office quietly fixes. It is the sign failing to be the sign."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "False: only the Latin syllables are valid, and every deviation voids the rite.",
                "feedback": "Rigorism misses the actual boundary and would unchurch the East by accident. The Greeks baptize with a different formula to this day, the servant of God is baptized, and both forms confer the sacrament, as Aquinas notes without alarm (q.60 a.8). The boundary is not syllables or language. It is sense: the words must say what the Church's form says. Creator, Redeemer, Sanctifier fails not because it is new but because it names operations we appropriate, where Christ commanded the Persons named."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "False: the form is the sign's determining principle; destroy the sense and nothing is determined.",
                "feedback": "Respondeo: in things composed of matter and form the determining principle is on the part of the form, and for the being of the thing a determinate form is needed first of all (q.60 a.7). A minister who by addition or suppression intends a rite other than the Church's does not do what the Church does, and the sacrament is void (q.60 a.8). The names of the Persons are the form Christ gave: go, baptize, in the name of the Father, and of the Son, and of the Holy Ghost. The warmth was real. The baptism was not."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `t13-l5`,
      num: `V`,
      title: `The Seal`,
      latin: `character sacramentalis`,
      tag: `character sacramentalis`,
      fin: {
        tag: `character sacramentalis`,
        heading: `The seal that stays.`,
        body: `Some sacraments give more than grace: they give an office, and stamp it. The tradition's image never improved on the first one, the soldier's brand: a mark because a man was deputed to a service, unrepeated when the deserter returns pardoned, acknowledged and approved instead. Baptism, confirmation, and order imprint that kind of mark on the soul, a spiritual power ordained to divine worship: to receive, to profess, to confer. It is Christ's own mark, a participation of His priesthood, which is why it does not fade when grace is thrown away, and why it will still be legible in glory and in the other place, the conqueror's boast or the deserter's shame. Grace is the life; the character is the office. The Eucharist alone imprints nothing, and for the grandest reason in the treatise: it does not depute toward the end. It is the end.`,
        distinction: {
          latin: `character sacramentalis`,
          english: `sacramental character`,
          gloss: `An indelible spiritual power imprinted by baptism, confirmation, and order: a participation of Christ's priesthood deputing the soul to divine worship. The office, not the life.`,
          motif: `soldiers-brand`,
        },
      },
      questions: [
        {
          id: `t13-l5-q1`,
          type: "mcq",
          stem: `Old armies branded the enlisted man: a mark on the body, because he was deputed to a service. Augustine asks about the deserter who returns, pardoned: is he branded again? No, the mark is acknowledged and approved. Baptism, says the tradition, marks the soul that way. For what?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Decoration: the washed soul is made visibly beautiful to the angels.",
                "feedback": "Beauty follows, but a brand is not a jewel. The soldier's mark meant something blunter: this man belongs to this service and may be called on for it. Aquinas keeps the bluntness: whenever anyone is deputed to some definite purpose he is wont to receive some outward sign of it (q.63 a.1). The question to ask of the baptismal mark is not how it looks but what it obliges."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Deputation: the baptized is marked as enlisted for the worship of God, permanently.",
                "feedback": "Respondeo: by the sacraments men are deputed to a spiritual service pertaining to the worship of God, and the character is that deputation sealed into the soul (q.63 a.1). Augustine's deserter carries the whole doctrine: pardon restores the man, and the mark of enlistment never needed restoring. Are the Christian sacraments, he asks, of a nature less lasting than this bodily mark? The lesson ahead answers: more lasting than the body itself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Distinction: God keeps a register of who is His, and the mark is His bookkeeping.",
                "feedback": "God needs no register; the Lord knoweth who are His by the seal of predestination, which puts nothing in the predestined at all, as the first module of this wing's God-treatise could have told you. The character is not for God's information. It is in you, for your office: a real spiritual sign fitting you for acts of worship that predestination alone does not perform (q.63 a.1 ad 1)."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Protection: the mark wards off the enemy's claim like a seal on a door.",
                "feedback": "The amulet reading, and the martyrs refute it from experience: the branded soul can still desert, still suffer, still be lost. The character is not a force field but a commission, indifferent, as the tradition says with some severity, to whether its bearer uses it well or ill. What it guarantees is not safety. It is that the office remains yours to answer for."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t13-l5-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>A character is properly a kind of seal, whereby something is marked, as being ordained to some particular end: thus a coin is marked for use in exchange of goods, and soldiers are marked with a character as being deputed to military service... Now the whole rite of the Christian religion is derived from Christ's priesthood. Consequently, it is clear that the sacramental character is specially the character of Christ, to Whose character the faithful are likened by reason of the sacramental characters, which are nothing else than certain participations of Christ's Priesthood, flowing from Christ Himself.</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae III q.63 a.3 · Dominican Fathers translation</div></div>Whose mark, then, is on the baptized soul?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Christ's: the character is a participation of His priesthood, flowing from Him.",
                "feedback": "Respondeo: the coin bears the king's image and the soldier his commander's sign; the baptized bears Christ's, and not as a picture but as a power: a participation of Christ's priesthood, flowing from Christ Himself (q.63 a.3). The tenth module taught the Head whose fullness overflows to the members; here is the overflow stamped as office. Every character in the Church is that one priesthood, shared downward, which is why the last lesson of this module will find all of them facing one altar."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Church's: her seal of membership in the visible society she governs.",
                "feedback": "The Church benefits from the mark and does not own it. Membership language undersells the passage twice: the character likens you to Christ, not to the institution, and it deputes you to worship, not to a roster. The visible society is real, the twelfth module built it; but her seals are wax and paper. This one is cut in the soul by the eternal Priest."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The Holy Ghost's, as Scripture says: sealed unto the day of redemption.",
                "feedback": "A real scriptural sealing, and Aquinas gives it its own address: that sealing is by grace, assigning the faithful to future glory, and grace is fittingly attributed to the Holy Ghost as love (q.63 a.3 ad 1). The character is a different mark with a different office: not the pledge of glory but the commission to worship, and its likeness runs to Christ the Priest specifically. Two seals, both real, filed apart."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The bishop's, in whose registry the deputation is recorded.",
                "feedback": "The registry records what the registry did not make. A baptismal certificate can burn with the parish office and the character loses nothing, which tells you where each lives. The bishop's book is testimony; the seal is ontology, a participation of Christ's own priesthood that no fire, and stronger things than fire, can reach."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t13-l5-q3`,
          type: "mcq",
          stem: `Trent: in baptism, confirmation, and order a character is imprinted, a certain spiritual and indelible sign, on account of which they cannot be repeated. Three, exactly. Why these three?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "They are the three of apostolic antiquity, the rest arriving later.",
                "feedback": "All seven are of Christ's institution, as the next lesson defines against exactly this genealogy. The three are not the oldest members of the club; they are the ones whose office is to depute. Antiquity is the wrong sorting key. Ask instead what each sacrament does to a man's standing in the Church's worship, and the three sort themselves."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "They alone confer grace; the other four only signify it.",
                "feedback": "You have carved the seven along the one line the Council forbids: all the sacraments of the New Law contain and confer the grace they signify, all seven, canon six. The character is a second effect in three of them, over and above the grace common to all. Get the layers straight: grace everywhere, the seal only where an office is being conferred."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "They are the three that no unworthy minister can invalidate.",
                "feedback": "The silver and lead pipes carried all seven, not three; ministerial unworthiness invalidates none of them. You have re-derived last lesson's doctrine and misfiled it as this lesson's. The three stand apart by what they imprint, not by what their ministers cannot ruin."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Each deputes to worship: baptism to receive, confirmation to profess with strength, order to confer.",
                "feedback": "Respondeo: the character marks a man for divine worship, and only three sacraments confer such a standing office: baptism, the door, deputing you to receive the rest; confirmation, deputing you to profess the faith with adult strength; order, deputing men to confer what the others receive (q.63 a.6). The Eucharist imprints none, and the reason is a bow toward the summit: it does not depute toward some further end because it is the end, the consummation of all the sacraments, containing not a share of Christ's power but Christ (q.63 a.6). Kings are not branded with their own seal. Trent fixed the three: Sess. 7, can. 9."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t13-l5-q4`,
          type: "true_false_with_reason",
          stem: `A hard sentence from the treatise, stated cold: the baptismal character remains in a soul in hell. True or false?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "True: the seal follows Christ's eternal priesthood, not the soul's state; it remains, to shame.",
                "feedback": "Respondeo: hard and true, and worth having exactly. The character is indelible not from any perfection of its own, but from the perfection of Christ's Priesthood, from which it flows like an instrumental power; and Christ's priesthood is eternal: thou art a priest for ever (q.63 a.5). So after this life the character remains, in the good as adding to their glory, in the wicked as increasing their shame, like the military mark that is the conqueror's boast and the deserter's disgrace (a.5 ad 3). Grace can be refused. The commission cannot be unhappened. There are only two ways to bear a priest's mark forever, and the treatise says so without flinching."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "True: nothing that enters the soul can ever be lost again.",
                "feedback": "The judgment is right and the reason would abolish half the faith. Grace enters the soul and is lost by mortal sin; charity enters and can die. The soul is no vault. The character persists for a reason proper to itself alone: it rides the immobility of the principal mover, Christ's undying priesthood, not some general indelibility of spiritual things. Right verdict, borrowed collateral."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "False: hell strips every gift, and the mark of Christ first of all.",
                "feedback": "It feels fitting, and Aquinas teaches the opposite with open eyes: apostates are not deprived of their baptism, and the intellect being perpetual and incorruptible, the character cannot be blotted out from the soul (q.63 a.5). Hell strips beatitude, not ontology. What the damned man keeps is precisely what shames him: the enlistment he deserted is still legible on him. The doctrine is severe because the seal is real."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "False: the character fades with the soul's last refusal of grace.",
                "feedback": "You have made the seal answerable to the will it marks, and the tradition's whole point runs the other way: an instrument's power follows the condition of the principal agent, and however much the will be moved in the contrary direction, the character is not removed, by reason of the immobility of the principal mover (q.63 a.5 ad 2). The last refusal refuses grace. It has no jurisdiction over Christ's priesthood, which is what the mark is made of."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t13-l5-q5`,
          type: "precision_check",
          stem: `From a confirmation-class handout: <em>"The character is a habit of grace that deepens as the Christian grows in holiness."</em> Test it.`,
          payload: {
            "statement": "The character is a habit of grace that deepens as the Christian grows in holiness.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing to correct: seals admit of degrees as devotion does.",
                "feedback": "Devotion admits of degrees; commissions do not. A man is not somewhat ordained, and a child is not increasingly baptized as she grows kind. The handout's picture of a deepening seal confuses the office with the life lived in it, which is exactly the confusion the precision exists to catch."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At deepens: the character deepens only when the three seals stack together.",
                "feedback": "The three characters do not stack into one deeper brand; each is a distinct deputation, to receive, to profess, to confer, and a man may hold one, two, or three offices without any of them intensifying another. You have corrected an error of degree with an error of arithmetic."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At habit of grace: character is a power, not a habit, and it neither grows nor dies.",
                "feedback": "Respondeo: the Philosopher's own trichotomy does the sorting: in the soul are power, habit, and passion. Not a passion, for it does not pass; not a habit, for every habit tilts toward good or ill use, and the character is indifferent to both, used well by the saint and ill by the sacrilegious. It remains that it is a power (q.63 a.2), a spiritual power ordained to worship. Grace is the life and grows; character is the office and stands. The apostate keeps the seal and loses the life, which is the cleanest proof the two are not one thing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At grows in holiness: holiness plays no part anywhere in the sacramental order.",
                "feedback": "An overcorrection that saws off the branch the sacraments grow for. Holiness is the whole point of the economy: the grace conferred is precisely for sanctification, and fruitfulness rises with devotion. What holiness does not do is inflate the character. Fix the one clause and leave sanctity her kingdom."
              }
            ],
            "correct_option_id": "c",
            "correction": "The character is a spiritual power ordained to divine worship, indifferent to good or ill use, neither growing nor perishing (ST III q.63 a.2). Grace is the life; character is the office. Say rather: an indelible power deputing the soul to worship, upon which grace is given for the worthy exercise of it."
          },
        },
        {
          id: `t13-l5-q6`,
          type: "mcq",
          stem: `A cradle Catholic says, with real humility: 'Mass is the priest's business. I attend; he worships.' The treatise on character has one correction for her.`,
          latin_tag: `character sacramentalis`,
          doctrine_line: `Baptism, confirmation, and order imprint an indelible character: a deputation to divine worship.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Her humility is the right posture toward the sanctuary and needs no correcting.",
                "feedback": "Humility about one's holiness is right posture; humility about one's office is a clerical error in the strict sense, filing the laity's commission in the priest's drawer. She was branded for worship at her baptism. Telling her so is not flattery, and letting the mistake stand is not humility. It is a seal left unread."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Her baptism deputed her to worship: she stands in the liturgy by office, not by attendance.",
                "feedback": "Respondeo: the character is a spiritual power for receiving or bestowing what pertains to the worship of God (q.63 a.2), and hers is the receiving kind: a real participation of Christ's priesthood, exercised every time she assists at the altar, receives, adores. She is not audience. She is enlisted, sealed for exactly this, and the Mass is her business by the most literal branding in theology. The distinction from the priest stands whole: his character deputes him to confer and confect, hers to receive and to offer with the Church. Different offices; one priesthood of Christ, participated."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "She should seek ordination if she wants worship to be her business.",
                "feedback": "A category jump the doctrine itself forbids: the characters differ in kind, not in rank on one ladder. Order deputes to confer; baptism deputes to receive and to worship, and the second is not an apprenticeship for the first. Trent's tenth canon guards the difference from one side; the reality of her baptismal office guards it from the other. She lacks nothing needed for the business she already has."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Worship is interior, so where and how she stands is indifferent.",
                "feedback": "The angelist answer's last appearance, and the character refutes it structurally: the seal is ordained to the worship of God according to the rite of the Christian life, protested through sensible signs, which is why it sits in the soul as a power ordered to acts (q.63 aa.2, 4). An office that could be discharged by vague interior goodwill would need no seal. Hers needed one. The liturgy is where it spends."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `t13-l6`,
      num: `VI`,
      title: `Seven, Instituted by Christ`,
      latin: `septem sacramenta`,
      tag: `septem sacramenta`,
      fin: {
        tag: `septem sacramenta`,
        heading: `Nothing missing, nothing extra.`,
        body: `Seven is not numerology; it is anthropology, baptized. Read a human life off its ledger, birth, growth, food, healing, convalescence, government, children, and the seven sacraments answer it line for line, grace organized around the actual shape of a creature's days. Trent drew the fences in 1547: all seven instituted by Jesus Christ our Lord, neither more nor fewer, each truly and properly a sacrament, against the shortened lists of the Reformers, the bare marks of the Zwinglian account, and, three centuries early, the Modernist tale of rites the community dreamed up around an idea. The Church herself claims no jurisdiction over the substance she received; her lawful hand orders only the ceremonies that clothe it, and even those are guarded from every freelancer's pleasure. Not all seven are owed to every soul: baptism binds absolutely, penance binds the fallen, the rest perfect each state of life. The whole is sufficient, the way a house is: nothing missing, nothing extra, everything placed.`,
        distinction: {
          latin: `septem sacramenta`,
          english: `the seven sacraments`,
          gloss: `Baptism, confirmation, Eucharist, penance, extreme unction, order, matrimony: instituted by Christ, mapped to the whole shape of human life, defined at seven by Trent.`,
          motif: `seven-springs-one-rock`,
        },
      },
      questions: [
        {
          id: `t13-l6-q1`,
          type: "mcq",
          stem: `A human life, read off a ledger: you are born, you grow, you must eat, you sicken and are healed, you convalesce, the city needs governors, the race needs children. Aquinas reads the seven sacraments off exactly that ledger. Which pairing is his?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Birth baptism, growth Eucharist, food confirmation, healing unction, vigor penance, government matrimony, propagation order.",
                "feedback": "The ledger is right and the lines have crossed. Growth is the Spirit's strengthening, confirmation; food is the Body given as nourishment, the Eucharist; healing after sin is penance, and the convalescent strengthening is unction; the city's governors come by order and its children by matrimony. Re-run the analogy from the body's side and each pairing rights itself (q.65 a.1)."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Birth baptism, growth confirmation, food matrimony, healing penance, vigor unction, government order, propagation Eucharist.",
                "feedback": "Two lines crossed at the table: the feast of the sacraments is the Eucharist, food for the journey, and matrimony serves the race's propagation, both in nature and in the Church. The wedding at Cana was generous but it does not reorganize the treatise. Swap those two back and the ledger balances (q.65 a.1)."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Birth baptism, growth confirmation, food Eucharist, healing penance, vigor unction, government order, propagation matrimony.",
                "feedback": "Respondeo: spiritual life has a certain conformity with the life of the body (q.65 a.1), and the seven fall out of one human span: born at the font; strengthened to adult stature by confirmation; fed with the Eucharist; healed of sin's wounds by penance; restored in the last weakness by extreme unction, which prepares for glory; governed through order, since priests offer not for themselves only but for the people; propagated through matrimony, which is both function of nature and sacrament. Seven is not numerology. It is anthropology, baptized."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Birth baptism, growth order, food Eucharist, healing unction, vigor penance, government confirmation, propagation matrimony.",
                "feedback": "Order is not growth, or every layman would be a stunted cleric, which is precisely the clericalism the character lesson dismantled. Growth to adult strength in the faith is confirmation's office; order equips the community with agents, the governing line of the ledger. And the healing pair runs penance first, unction after: cure, then convalescence (q.65 a.1)."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t13-l6-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>CANON I. If any one saith, that the sacraments of the New Law were not all instituted by Jesus Christ, our Lord; or, that they are more, or less, than seven, to wit, Baptism, Confirmation, the Eucharist, Penance, Extreme Unction, Order, and Matrimony; or even that any one of these seven is not truly and properly a sacrament; let him be anathema.</p><div class="cr-cite">Council of Trent, Session 7 (3 March 1547), On the Sacraments in General, canon 1 · DS 1601 · Waterworth translation</div></div>Read it as a lawyer of the faith: what exactly does the canon define?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Three things: Christ instituted them all, the number is exactly seven, and each is truly a sacrament.",
                "feedback": "Respondeo: three clauses, three fences: institution by Jesus Christ our Lord, all of them; the count, neither more nor less than seven, named one by one; and the dignity of each, truly and properly a sacrament, so that no one may keep the list while demoting a member of it. Note the drafting: each clause answers a real denial then in the field, and the next question introduces the deniers. De fide, each clause."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That all seven were instituted together at the Last Supper.",
                "feedback": "The canon binds the fact of institution by Christ and says nothing of the calendar. The tradition locates institutions across the ministry: baptism in the Jordan's waters and the great commission, the Eucharist at the Supper, penance on Easter evening. Where Scripture is quiet, the theologians dispute in peace. Chronology is not what the anathema guards."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That the seven are equal in dignity and in necessity for each soul.",
                "feedback": "Two canons over, the Council defines the opposite: if any one saith that these seven are in such wise equal that one is not in any way more worthy than another, let him be anathema (can. 3). Seven truly sacraments, yes; seven interchangeable, no. The Eucharist outranks, baptism binds most absolutely, and the final question of this lesson sorts the necessities."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That Christ fixed the precise words of every rite verbally.",
                "feedback": "Over-specified: the canon defines institution, not dictation. That Christ instituted each sacrament is de fide; how far He determined each sign in detail, and how far He left determination to the Church He empowered, the schools dispute lawfully. The canon was drafted by men who knew the Greek rites differed and were valid. Its edge cuts elsewhere: against more, against fewer, against later human origin."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t13-l6-q3`,
          type: "mcq",
          stem: `Four accounts of the seven, each held in earnest by someone. Which is the Catholic doctrine?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Seven, instituted by Christ, efficacious signs of grace: neither bare marks nor human developments.",
                "feedback": "Respondeo: the confession whole, with both fences standing. Seven and instituted, against the reduced lists; efficacious, against the bare marks; of Christ and not of the community's genius, against the developmental account. Each denial in the other options was weighed by the Church and condemned by name, which is what the feedback on each will show you. The positive confession needs no polemic: state it whole and the errors have nowhere to sit."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Two are the Gospel's own, baptism and the supper; the rest are churchly ceremonies of human institution.",
                "feedback": "The Reformation's count, held in earnest from Wittenberg onward: sacraments only where an evident dominical word and promise stand, two, or for a time three. Trent's first canon answers the count directly: seven, all instituted by Christ, each truly and properly a sacrament, anathema on the fewer as on the more (Sess. 7, can. 1, 1547). The error is not absurd; it is a narrowed rule of evidence. The Church's rule is her own living tradition, in which the seven were received from the beginning."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The sacraments are outward marks of Christian profession, distinguishing believers before men.",
                "feedback": "Nearly verbatim the sentence Trent anathematized: as though they were merely outward signs of grace or justice received through faith, and certain marks of the Christian profession, whereby believers are distinguished amongst men from unbelievers (Sess. 7, can. 6, condemning the position; DS 1606). The Zwinglian line, stated at its cleanest. What it cannot survive is the first lesson of this module: the sign that only marks was never what the Church meant by sacrament."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The rites emerged as the apostolic community interpreted an idea of Christ for its worship.",
                "feedback": "The Modernist account, stated seriously: sacraments as the community's developing self-expression, the Apostles interpreting an idea and intention of Christ under circumstantial pressure. Lamentabili condemned the propositions in 1907, sacraments among them, in the same sweep that guarded institution and dogma alike from the evolutionary solvent. Notice what the account keeps: every rite, warmly. And what it dissolves: the Christ who instituted anything. Kept rites, dissolved Lord: the exchange the Church refused."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t13-l6-q4`,
          type: "mcq",
          stem: `Christ instituted the seven; and yet the Church wrote the rites around them: chrism blessings, godparents, candles, litanies, the whole solemn clothing. Where exactly is the line?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "There is no line: everything in the missal descends verbatim from the Upper Room.",
                "feedback": "A piety of the archive that no archive supports, and a hostage to the first liturgical historian who reads one. The ceremonies grew, gloriously; the Church has never pretended otherwise, and Trent legislated for received and approved rites precisely as things the Church receives and approves. Chain the whole missal to the Upper Room and the first documented development becomes a scandal. The real line is stronger for being real."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Substance from Christ, received by the Church; ceremonies around it grew and may vary.",
                "feedback": "Respondeo: what Christ instituted, the substance of each sacrament, no power in the Church may touch: God alone institutes where God alone sanctifies (q.60 a.5; q.64 a.2). What clothes the substance, the ceremonies, the Church has ordered and may order, and the proof stands in the East to this day: Greek and Latin fonts, differing formulas, one baptism (q.60 a.8). Canon thirteen guards the clothing too, in its own register: received rites may not be contemned or changed at any pastor's pleasure (Sess. 7, can. 13). Received is the word on both sides of the line. Nothing here was ever ours to invent."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The Church holds power over substance and ceremony alike, binding and loosing both.",
                "feedback": "Binding and loosing governs what was left to govern. Over the substance of the sacraments the Church claims exactly no jurisdiction, and her refusals prove it: she will not attempt ordinations she believes Christ closed, nor consecrate in rice, nor baptize in wine, whatever pastoral arithmetic might prefer. The steward's authority is real and bounded by the deposit. That boundary is not her weakness; it is her credential."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing may vary: canon thirteen froze every rite in its 1547 form forever.",
                "feedback": "Read the canon's target: contempt, omission at pleasure, and change by every pastor of the churches into other new ones. It fences the private innovator, not the Church's own solemn authority, which has ordered ceremonies before and since. Freeze everything and you prove too much, unchurching every legitimate development the Council itself presided over. The immovable thing is the substance; the clothing is guarded, not petrified."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t13-l6-q5`,
          type: "distinction_application",
          stem: `Two waters, one Sunday. At the door you bless yourself from the stoup; after Mass an infant is baptized at the font. The tradition files these under different headings: the sacraments confer the grace they sign; sacramentals dispose, remove obstacles, and stir devotion, by the Church's prayer. Classify the two waters.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Both sacraments, differing only in the size of their effect.",
                "feedback": "Then the Church has eight, or eighty, and canon one's arithmetic fails. The difference is not of size but of kind: one is Christ's instituted instrument conferring grace ex opere operato; the other is the Church's blessing, disposing you toward that grace by her intercession. The stoup at the door is real and dear. It is not a small font."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Both sacramentals, since the same water fills stoup and font.",
                "feedback": "You have classified by the matter alone, and the fourth lesson forbade exactly that: water becomes this sign by the form and institution that determine it. The same element serves in both, as bread serves at both the altar and the parish supper. Ask not what the thing is made of but what, by whose institution, it does."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Holy water: sacramental, disposing. Baptism: sacrament, conferring the grace it signs.",
                "feedback": "Respondeo: filed clean. Aquinas's own example: holy water and other consecrated things are not called sacraments, because they do not produce the sacramental effect; they are dispositions to the sacraments, removing obstacles, holy water being ordained against the snares of demons and venial sins (q.65 a.1 ad 6). The stoup prepares you for the altar the way the porch prepares you for the house. Honor both; confuse neither. The seven stand apart because Christ instituted them to give what they show."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Holy water: penance in miniature. Baptism: the same washing at full strength.",
                "feedback": "Folk taxonomy, charming and doubly wrong. Holy water is not a small sacrament of penance, for it is no sacrament at all but a sacramental of the Church's institution; and baptism is not holy water at strength but a different kind of thing entirely, Christ's instrument of regeneration. The devotion is not harmed by the precision. It is finally explained by it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t13-l6-q6`,
          type: "true_false_with_reason",
          stem: `A convert worries: 'I am married and confirmed, but I will never receive orders, and please God not extreme unction for decades. Am I living a partial Christianity?' True or false: every Catholic needs all seven.`,
          latin_tag: `septem sacramenta`,
          doctrine_line: `The sacraments of the New Law are seven, no more, no fewer, all instituted by Christ.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "True: seven means seven, and each perfects, so each is owed to every soul.",
                "feedback": "The completionist reading, refuted by the Church's own calendar of saints: virgins who never married, laymen never ordained, martyrs who died unanointed at the stake, all of them finished Christians. Each sacrament perfects, but not every perfection belongs to every state of life. The seven furnish the whole Church; no one soul is the whole Church."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "True: at least by desire, each of the seven must be intended by everyone.",
                "feedback": "Desire has a real office in this theology, and you have stretched it past sense: a nun does not need votum matrimonii, nor a layman a standing wish for ordination. The desire that saves is ordered to what your salvation and state actually require. Trent's own carve-out in the fourth canon says it plainly: though all are not necessary for every individual."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "False: only baptism matters, the rest being optional counsels.",
                "feedback": "The minimalist swing of the same pendulum, and the fourth canon catches it on this side too: the sacraments are necessary unto salvation, not superfluous, anathema on him who calls them extras. Penance is no counsel to the man in mortal sin; the Eucharist is no garnish, being the end of all the others. The convert's seven are not a menu of one."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "False: baptism is necessary absolutely, penance after mortal sin; the rest perfect, per person or Church.",
                "feedback": "Respondeo: Aquinas's two necessities do the sorting: necessary as food is, without which the end cannot be had at all, and necessary as a horse for a journey, for having it better. In the first way, baptism for everyone, penance for the fallen, and order for the Church, since where there is no governor the people shall fall; in the second way the rest, each perfecting its own state (q.65 a.4). Trent's fourth canon holds both fences in one sentence. Tell the convert: she is not a partial Christian. She is one member, fully sacramented for the life that is actually hers."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `t13-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The economy, owned.`,
        body: `Count what you now hold. A sacrament is a sign of a holy thing so far as it makes men holy, signifying in three tenses: the Passion behind, grace within, glory ahead. It causes what it signifies as an instrument in God's hand, the chisel wet at last, its power flowing from the side of Christ on the Cross through the humanity that hangs there. It works by the work performed, so that no minister's lead can poison the water and no minister's silver improve it. It is composed like everything you have ever studied, matter and form, element and word, and fixed by an institution no pastor may amend. Three of the seven brand the soul with Christ's own priestly mark, unrepeatable, unlosable, legible forever. And the seven together map a human life whole, birth to viaticum, person and city, nothing missing, nothing extra. All of it faces one altar, where the instruments give way to the Agent, and the signs hand you the Signified in person. The signs themselves retire only at glory, when the last veil goes. Until then, this is how the Passion reaches a Tuesday.`,
        distinction: {
          latin: `recapitulatio`,
          english: `recapitulation`,
          gloss: `The sacramental economy in one breath: efficacious signs, instituted by Christ, working by the work performed, composed of matter and form, three sealing forever, seven mapping a life, all ordained to the Eucharist.`,
          motif: `seven-facing-one-altar`,
        },
      },
      questions: [
        {
          id: `t13-l7-q1`,
          type: "match_pair",
          stem: `Five images carried this treatise. Match each to the doctrine it bought.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "smoke, ring, and octagon"
              },
              {
                "id": "L2",
                "text": "the chisel in the Sculptor's hand"
              },
              {
                "id": "L3",
                "text": "the silver or lead pipe"
              },
              {
                "id": "L4",
                "text": "water joined to words"
              },
              {
                "id": "L5",
                "text": "the soldier's brand"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "the sign family: a sacrament signs as they do, and pours besides"
              },
              {
                "id": "R2",
                "text": "instrumental cause: it really acts, by Another's power"
              },
              {
                "id": "R3",
                "text": "ex opere operato: the minister's worth does not change the water"
              },
              {
                "id": "R4",
                "text": "matter and form: the composite sign, fixed by institution"
              },
              {
                "id": "R5",
                "text": "character: indelible deputation to divine worship"
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
              "all_correct": "Five pictures, one treatise, correctly hung: the sign family taught you what a sacrament is; the chisel, how it causes; the pipes, why the minister's soul cannot break it; water and words, what it is made of; the brand, what three of them leave behind forever. A theology you can carry in five images is a theology that will still be with you at a hospital bedside, which is where this treatise was always headed.",
              "partial_correct": "Some pictures misfiled. Walk the gallery once more: the family that hands you things; the tool that cuts by another's art; the plumbing whose metal never changes the water; the composition that makes one sign of two; the mark that outlasts everything, including refusal."
            }
          },
        },
        {
          id: `t13-l7-q2`,
          type: "mcq",
          stem: `Part I taught you signs, a thing that hands you another thing, and instruments, a cause moved by a cause. Neither module ever mentioned a font. What did they buy?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Proof: the philosophy demonstrated that sacraments must exist.",
                "feedback": "Too strong, and the treatise itself refuses the flattery: the sacraments hang on institution, God's free appointment, not on any necessity reason could demonstrate. Philosophy showed the fittingness once the gift was given, never the gift. Aquinas argues why signs suit us, not that God owed us seven. Demonstration is the wrong debt to claim."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Permission: reason licensed faith to speak of mysteries.",
                "feedback": "Faith never needed reason's license, and the first module of this wing settled their true relation: sacra doctrina takes what philosophy offers as a servant's help, not a passport. The purchase here is humbler and more useful than permission. It is vocabulary."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Sayability: efficacious sign is only a sentence where sign and instrument are already owned.",
                "feedback": "Respondeo: the wing's oldest move, once more. Efficacious sign is the whole doctrine in two words, and both words were bought in Part I: sign from the eleventh module's smoke and rings, instrument from the eighth module's chisel. A learner without them hears a slogan; you heard a composition. The philosophy was for this: not proving the font, but making what happens there sayable without collapse into magic or metaphor."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Decoration: the images make the doctrine easier to remember.",
                "feedback": "They do, and memory was never the purchase. The images carry distinctions, not mnemonics: the chisel is a metaphysical claim about two causes in one act; the smoke is a semantic claim about representation. Call them decoration and you could swap them for better pictures. Try to swap them and watch the doctrine leave the room with them."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t13-l7-q3`,
          type: "precision_check",
          stem: `A diocesan newsletter, in a warm piece on parish life: <em>"The seven sacraments are the Church's treasured customs, by which she expresses the grace her members already share."</em> Test it.`,
          payload: {
            "statement": "The seven sacraments are the Church's treasured customs, by which she expresses the grace her members already share.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At customs and expresses: instituted by Christ, and they confer what they contain.",
                "feedback": "Respondeo: two words, two collapses, caught. Customs are what communities develop; the sacraments were instituted by Jesus Christ our Lord, all seven (can. 1). Expression is what signs do when they only signify; these contain the grace they signify and confer it through the act performed (cans. 6, 8). The sentence is the Modernist account and the Zwinglian account holding hands in a parish newsletter, each too polite to show its condemnation date. Warmth is no defense against entropy. Precision is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At treasured: reverence belongs to God, not to rites.",
                "feedback": "A scruple aimed at the sentence's one healthy word. The rites are rightly treasured, as the instruments of God are treasured, and the Church has never blushed at loving her sacraments. Iconoclasm is not precision; it is a different error wearing precision's coat. The leaks are elsewhere, in the words that make Christ's instruments into the community's habits."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At seven: the number is symbolic, the underlying reality fluid.",
                "feedback": "You have corrected the sentence's one defined number into its one condemned proposition. Neither more nor fewer than seven is the canon's own arithmetic, under anathema (can. 1). Whatever else the newsletter got wrong, it counted correctly. Leave the seven alone and repair the verbs."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At members: the sacraments are for the world, not for the Church.",
                "feedback": "A missiological garble: the sacraments are for the Church, and the Church is for the world, and collapsing the two clauses loses both. Baptism makes members; the rest sanctify members; the sanctified members are sent. The newsletter's members was innocent. Its customs and expresses were not, and precision spends itself where the leak is."
              }
            ],
            "correct_option_id": "a",
            "correction": "Instituted by Jesus Christ (Trent, Sess. 7 can. 1), containing and conferring the grace they signify (can. 6), through the act performed (can. 8). Customs express what a people already is. Sacraments effect what a people could never become alone."
          },
        },
        {
          id: `t13-l7-q4`,
          type: "true_false_with_reason",
          stem: `A spiritual writer, in a book of some beauty: 'One day the Church will outgrow her scaffolding of signs and worship as the angels do.' True or false, of this life?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "True: maturity in the Spirit gradually retires the sensible.",
                "feedback": "The angelist thesis in its most flattering dress, and this treatise has met it in every lesson: we are not angels maturing out of bodies, and the signs were fitted to the knower we are, not to the beginner we were. A Christian grown old in holiness still eats the Bread and still needs the words said over him at the end. The saints did not outgrow the font's economy. They went deeper into it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "True: the signs served the Church's infancy, as the Law served Israel's.",
                "feedback": "The supersessionist analogy misapplied: the Old Law's signs foreshadowed and were fulfilled; the New Law's signs apply what was accomplished, and there is nothing further in history for them to yield to. Augustine's contrast stands: fewer, more efficacious, until the end of the age. What succeeds the sacraments is not a more spiritual Church. It is glory."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "False: signs remain even in glory, since creatures are always bodily.",
                "feedback": "The judgment is right and the reason overreaches into the one place the doctrine does not go. In glory there will be no sacraments: where all truth is openly and perfectly revealed, nothing is reached through veils (q.61 a.4 ad 1). The resurrection keeps bodies; it retires signs, because the signified is present. Right verdict; the wrong eternity."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "False: while we see through a glass darkly, we need signs; in glory, none.",
                "feedback": "Respondeo: Aquinas places the New Law between two states: the Old, whose figures it fulfilled, and glory, in which all truth will be openly and perfectly revealed, and then there will be no sacraments; but now, so long as we know through a glass in a dark manner, we need sensible signs, and this is the province of the sacraments (q.61 a.4 ad 1). The scaffolding comes down when the cathedral is finished, not when the builders feel mature. The last module of this course walks to that unveiling; the Eucharist module already showed you its doorway, the same Bread under veils here, without any veil there."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t13-l7-q5`,
          type: "mcq",
          stem: `Every module of this wing ends by naming what cannot be traded away. For the sacraments, the Declaration's checklist holds one pair of words. Which?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Ancient and beautiful: the rites' antiquity and splendor are the treasure.",
                "feedback": "Both true, neither load-bearing. A religion could have ancient, beautiful rites that give nothing, and the whole first lesson was the difference. Antiquity and beauty adorn the treasure; they are not it. Surrender them and you have an ugly modern validity, which has happened; surrender the real pair and you have nothing at all."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Efficacious and instituted: they really confer grace, and Christ really established them.",
                "feedback": "Respondeo: the unsurrenderable pair. Drop efficacious and the Zwinglian marks return, signs that leave you where they found you, the sixth canon's target. Drop instituted and the Modernist account returns, rites the community dreamed and may re-dream, Lamentabili's target. Keep both and the whole treatise stands in two words: Christ's own signs, which give what they show. The Declaration's word for the whole is sufficiency: nothing missing, nothing extra, nothing ours to renegotiate."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Seven and solemn: the count and the ceremony together.",
                "feedback": "The count is defined and the solemnity is lawful custom, which makes this pair half de fide and half rubrics: an uneven yoke. The seven matters because of what the seven are, and an unsolemn emergency baptism is as whole a sacrament as a pontifical Mass is. Rank the claims before you pair them."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Valid and licit: performed correctly and performed lawfully.",
                "feedback": "A real distinction, borrowed from the canonists, and worth thirty seconds: valid means the sacrament happened; licit means it happened lawfully, and a valid act can be gravely illicit, as every lesson on wicked ministers implied. But it is a grammar for analyzing sacraments, not the confession that protects them. The pair the Church cannot surrender is about what the sacraments are, not how their performances are filed."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t13-l7-q6`,
          type: "mcq",
          stem: `The treatise ends facing an altar. Aquinas: all the other sacraments seem to be ordained to this one as to their end. Which, and why?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `The sacramental economy applies the one Passion to every age; its summit is the Eucharist.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The Eucharist: the others carry Christ's power; it contains Christ Himself, substantially.",
                "feedback": "Respondeo: absolutely speaking, the Eucharist is the greatest of the sacraments, and Aquinas gives the reason that ends the module: the others contain a certain instrumental power, a share of Christ's power, whereas this one contains Christ Himself substantially, and what is essentially such outranks whatever is such by participation (q.65 a.3). Order exists to consecrate it; baptism, to admit to it; the rest prepare for it or figure it, and nearly all terminate in it. The end and consummation of all the sacraments, says the treatise, borrowing Dionysius. You have already climbed that module. Now you know what the whole staircase was."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Baptism: the door of the sacraments, first in every Christian life.",
                "feedback": "First, and greatest in exactly one register: necessity, as Aquinas concedes without embarrassment, for the door is the one thing no one can skip (q.65 a.3 ad 4). But doors are for what lies past them, and baptism's own character deputes you toward the altar it opens onto. Greatest by need is not greatest absolutely. The door serves the banquet."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Order: without it none of the others continue in the Church.",
                "feedback": "Functionally weighty, and the function tells on itself: order exists, says Aquinas, in ordination to the consecration of the Eucharist. A sacrament whose whole office is to produce another sacrament has named its own superior. The hierarchy serves the altar; the treatise never lets the scaffolding outrank the thing it raises."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Matrimony: the great sacrament, as Ephesians itself says.",
                "feedback": "The Apostle's great is greatness of signification: matrimony signifies the union of Christ and the Church, and even that union, Aquinas notes, the Eucharist figures more nearly, containing the Bridegroom in person (q.65 a.3). A sacrament great by what it points to bows before the sacrament that holds what everything points to. The wedding feast was always about the Lamb's supper."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    }
  ],
};
