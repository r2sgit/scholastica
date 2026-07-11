import type { ModuleMeta } from '../types';

/** T9 · De Auxiliis: The Disputation on Grace and Freedom. Wired into the live app by scholastica-claude-code-wing-parity-RUN.md (WP-A). Content is the authored t9-content.json, copied faithfully; no prose edits. */
export const t9: ModuleMeta = {
  id: 9,
  title: `De Auxiliis: The Disputation on Grace and Freedom`,
  short: `De Auxiliis Divinae Gratiae`,
  label: `Theologia IX · De Auxiliis: The Disputation on Grace and Freedom`,
  latin: `De Auxiliis Divinae Gratiae`,
  aim: `Grace really begins, carries, and completes every salutary act, and the will it moves remains free, able to refuse: both certain. How they cohere divided the schools. The Thomist grounds efficacy within the gift itself, God's real premotion moving the free will as free; the Molinist grounds it outside the gift, in the consent God foresaw by middle knowledge before any decree. Rome heard twenty years of disputation and decided not to decide: both schools permitted, mutual censures forbidden, the final word reserved to a see that has never given it. The house holds the Thomist line at full strength; Molinism is error, never heresy; and the whole case teaches the course its own rule: the fair fight, inside a wall drawn by Rome.`,
  lessons: [
    {
      id: `t9-l1`,
      num: `I`,
      title: `The Hardest Question`,
      latin: `de auxiliis`,
      tag: `de auxiliis`,
      fin: {
        tag: `de auxiliis`,
        heading: `Two truths at one lectern.`,
        body: `The disputation hall again, but grown: the presider is the Pope, and the question is called <span class="lat">de auxiliis</span>, on the helps, the graces God gives for acting. Every doctor in the room confesses both truths before the arguing starts. That grace goes first: unmerited, prevenient, so necessary that no salutary act begins without it. And that the will it moves stays free: really cooperating, able to refuse its consent, anathema on whoever says it sits inert like a stone. The fight is not between a party of grace and a party of freedom. It is between two certainties that seem to crowd each other in one act, and twenty years of the Church's best minds will now dispute where the efficacy of an efficacious grace comes from. Next lesson: the Dominican answer, at full strength.`,
      },
      questions: [
        {
          id: `t9-l1-q1`,
          type: "mcq",
          stem: `Rome, the spring of 1602. Clement VIII takes a chair popes rarely take: presiding in person over a formal disputation, Dominicans at one lectern, Jesuits at the other. Sixty-eight sessions will pass before this Pope dies with the question open. The matter is called <span class="lat">de auxiliis</span>, on the helps: the graces God gives for acting. What question could hold two loyal orders and two popes for twenty years?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Whether grace is needed for salvation at all; one order had grown Pelagian.",
                "feedback": "The move assumes the fight is over grace's necessity, and nobody in the hall disputes that: both orders confess with Trent that no salutary act begins without unmerited grace. Pelagius has no lectern here, and Rome will say so in the end. The dispute lives a floor above the necessity.<span class=\"condemned\">Pelagianism · condemned, Council of Carthage, 418; Trent Sess. VI can. 1, 1547 · DS 1551</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Whether the will stays free under grace; one order had followed Luther.",
                "feedback": "Neither order budges an inch from Trent's canon on freedom; both sign it under anathema and accuse the other of endangering it. Luther's thesis, free will a name without a reality, was buried at Trent before this dispute was born. The freedom is common ground; the fight is over what secures it.<span class=\"condemned\">Luther, De servo arbitrio · condemned, Trent Sess. VI can. 5, 1547 · DS 1555</span>"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "How grace that infallibly obtains consent leaves the consent free.",
                "feedback": "Respondeo: two certainties, one act. The efficacious grace given for an action obtains, infallibly, the will's consent; and in so acting, the man is free. Everyone at both lecterns holds both. The twenty years are spent on the joint between them, and the joint has a name coming: where does the efficacy come from?"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Whether Aquinas or a rival doctor should govern the schools of the orders.",
                "feedback": "A reasonable guess about two proud orders, and wrong in the best way: both sides claim Thomas himself. Molina wrote the first Jesuit commentary on the Summa; the Dominicans read the same pages. This is a fight inside the Thomist inheritance, which is precisely what makes it hard, and worth a pope's chair."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t9-l1-q2`,
          type: "mcq",
          stem: `Before the fight, the common ground. A sinner turns to God: a salutary act, one that counts toward salvation. Trent had already ruled on how such a turning begins. What must every doctor at both lecterns confess about its start?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Grace crowns the man who first does his natural best; the start is his.",
                "feedback": "The half-measure with a long history: let grace finish what nature begins. The Church condemned the beginning-from-man a thousand years before this hall convened, and Trent repeated the verdict: the call comes without any merits existing on their parts. Both lecterns hold the start to be God's, entirely.<span class=\"condemned\">Semipelagianism · condemned, Orange II, 529 · DS 373-397</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "God's unmerited prevenient grace begins it; man can reject it, and cannot begin alone.",
                "feedback": "Respondeo, in Trent's own words: the beginning is from the prevenient grace of God, without any merits existing on their parts; the man touched by it is able to reject it, yet is not able, by his own free will, without the grace of God, to move himself unto justice in His sight (Sess. VI, cap. 5 · DS 1525). Every word of that is signed at both lecterns before the disputation starts."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The beginning is grace, and its arrival extinguishes the power to refuse.",
                "feedback": "This overshoots the priority of grace into the death of freedom, and Trent's same chapter forbids it: the man is able to reject it. A later century will try exactly this thesis, that interior grace is never resisted, and the Church will condemn it by name. Grace goes first without going alone.<span class=\"condemned\">Jansenism · condemned, Cum occasione, 1653 · DS 2002</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Trent left the whole matter open, and the schools begin from silence.",
                "feedback": "This projects the coming liberty backward onto settled ground. Trent defined the start with precision: grace first, no merits, real power to reject, no power to begin alone. What stays open is narrower and harder: not whether grace begins and carries the act, but where an efficacious grace gets its efficacy. Walls first, then the fight inside them."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t9-l1-q3`,
          type: "mcq",
          stem: `The second piece of common ground, defined under anathema. Read the canon, then answer.<div class="auctoritas"><div class="formula"><span class="bl">&para;</span>If any one saith, that man's free will moved and excited by God, by assenting to God exciting and calling, nowise co-operates towards disposing and preparing itself for obtaining the grace of Justification; that it cannot refuse its consent, if it would, but that, as something inanimate, it does nothing whatever and is merely passive; let him be anathema.<span class="cite">Concilium Tridentinum, Sess. VI, De iustificatione, can. 4, 1547 · DS 1554 · trans. Waterworth</span></div></div>What does this canon nail to the wall for both schools?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That grace can always be refused in fact, so none infallibly obtains consent.",
                "feedback": "Read the canon's verb again: it cannot refuse its consent, if it would. The anathema guards the power to refuse, not the fact of refusal under every grace. Whether some grace infallibly obtains the consent it seeks is exactly the question the canon leaves standing, and the hall will spend twenty years on it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That the will cooperates by natural strength once grace has opened the door.",
                "feedback": "The canon's own participle blocks this: the will that cooperates is moved and excited by God, cooperating by assenting to God exciting and calling. The cooperation is itself under grace from first to last. Natural-strength cooperation is the Semipelagian ghost returning through a defined text, which is the worst door to choose."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That the Church here condemned every account of infallibly efficacious grace.",
                "feedback": "Banez taught that efficacious grace infallibly obtains consent, signed this canon without blinking, and died unanathematized; Rome then spent two decades declining to condemn his school. The canon aims at the Reformers' inert will, not at the Dominican account. Reading it wider than Rome reads it is not rigor; it is a mistake about jurisdiction."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That under God's motion the will truly cooperates and keeps the power to refuse.",
                "feedback": "Respondeo: two prongs, both binding. The will moved by God really cooperates, against the picture of the man as a stone in God's hands; and it can refuse its consent, if it would, against every irresistible-grace theology. Luther's inert will dies in the second clause. Both schools build on this canon; neither may build over it.<span class=\"condemned\">Luther, servum arbitrium · condemned, Trent Sess. VI can. 4-5, 1547 · DS 1554-1555</span>"
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t9-l1-q4`,
          type: "precision_check",
          stem: `A claim to test against the two truths you now hold. <em>"If God's grace infallibly obtains the will's consent, then the will contributes nothing and its freedom is a courtesy title."</em> Where exactly does it break?`,
          payload: {
            "statement": "If God's grace infallibly obtains the will's consent, then the will contributes nothing and its freedom is a courtesy title.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nowhere: infallibility and passivity are one claim in two dresses.",
                "feedback": "Trent unstitched the dresses: it anathematized the passive will while never condemning infallibly efficacious grace, though the question sat before Rome for twenty years. A council that condemns one and tolerates the other has told you they are two claims. The whole disputation lives in the space between them."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In the premise: no grace infallibly obtains consent; God waits on the outcome.",
                "feedback": "That denial is not a datum; it is one school's thesis wearing a referee's shirt. Deny infallible efficacy flatly and you have joined a party before the disputation starts, and put Scripture's own confidence on a diet: the king's heart is in the hand of the Lord, whithersoever he will, he shall turn it (Prov 21:1)."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In the leap from infallible to inert: how God moves is exactly what remains to be said.",
                "feedback": "Respondeo: the claim fuses what the canon splits. Cooperation is real and the power to refuse is real, both defined; whether a grace can be infallible in its effect without turning the will to stone depends entirely on the mode of the moving, and the mode is the disputation. The break is in the leap, and the leap is the module."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At courtesy title: freedom under grace needs no defense and gets none.",
                "feedback": "Freedom under grace got the strongest defense the Church has: a canon with an anathema on the end. What needs no defense is not defended at Trent. The claim's error is not that it takes freedom seriously; it is the leap it makes on the way, one option up."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t9-l1-q5`,
          type: "mcq",
          stem: `The schools share a vocabulary before they divide. <span class="lat">Gratia sufficiens</span>, sufficient grace: gives the real power to act well. <span class="lat">Gratia efficax</span>, efficacious grace: the grace with which the act is actually done. Both schools use both terms. Where exactly do they part?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "On where efficacy comes from: the grace itself, or the consent God foresaw.",
                "feedback": "Respondeo: the whole war in one preposition. The Dominican says efficacious grace is efficacious from within, <span class=\"lat\">ab intrinseco</span>: the gift itself carries the motion. The Jesuit says from without, <span class=\"lat\">ab extrinseco</span>: the gift is called efficacious because God foresaw the yes it would meet. Two lessons follow, one road each, both at full strength."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "On whether sufficient grace exists: one school calls it an empty courtesy.",
                "feedback": "You have quoted the standing joke, not the fault line: each side teases the other's sufficient grace as a grace that never suffices. Jokes aside, both schools affirm real power truly given in sufficient grace; Trent's chapter five requires no less of either. The division sits in the other term."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "On whether God knows future free acts: one school leaves Him guessing.",
                "feedback": "Neither school leaves God guessing; infallible foreknowledge is common ground as firm as the freedom itself. The dispute is over how God knows free futures, through His own decrees or through a special knowledge you will meet in lesson three, never over whether. A guessing God belongs to a later error, outside both these walls."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "On whether efficacious grace exists: one school reduces every grace to sufficient.",
                "feedback": "Both schools keep the term and mean something by it: graces that in fact issue in the act. What one school relocates is the ground of the efficacy, not the existence of it. Misstating an opponent's denial is the cheapest win available, and this course does not buy it."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t9-l1-q6`,
          type: "fill_blank",
          stem: `The shared vocabulary, locked. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Grace that gives the real power to act is <span class="fb-blank" data-blank="b1">______</span>; grace with which the act is actually done is <span class="fb-blank" data-blank="b2">______</span>; the schools divide on where its <span class="fb-blank" data-blank="b3">______</span> comes from.</span>`,
          latin_tag: `de auxiliis`,
          doctrine_line: `Grace infallibly obtains what God intends, and the will it moves can still refuse: both certain, and the whole dispute is how.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "sufficient"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "efficacious"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "efficacy"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "sufficient",
              "efficacious",
              "efficacy",
              "abundant",
              "necessity",
              "freedom",
              "merit",
              "feeling"
            ],
            "feedback": {
              "all_correct": "Locked: sufficient, efficacious, efficacy. Real power in every sufficient grace, a completed act with every efficacious one, and a single disputed preposition between the schools: from within the gift, or from without. Next lesson takes the Dominican road first.",
              "partial_correct": "Some blanks resisted. Sufficient grace gives the real power to act well; efficacious grace is the grace with which the act is actually done; and the twenty years were spent on where the efficacy comes from."
            }
          },
        }
      ],
    },
    {
      id: `t9-l2`,
      num: `II`,
      title: `The Thomist Line`,
      latin: `praemotio physica`,
      tag: `praemotio physica`,
      fin: {
        tag: `praemotio physica`,
        heading: `Moved, and never more your own.`,
        body: `The Dominican account runs on Part I's oldest law: nothing crosses from able-to-act to acting except by something already in act, and at the head of every such chain stands the First Mover. So when a will turns to God, God has moved it: really, not by advertisement, with a motion the school calls <span class="lat">praemotio physica</span>, prior in the order of causes and not in time, physical as opposed to moral suasion, not as opposed to spiritual. And here is the reversal the objectors never expect: this motion is why the act is free. God moves every nature according to its mode, necessary causes necessarily, contingent causes contingently, and the will He made free He moves freely; it would insult His motion for the will to come out necessitated. Efficacy sits inside the gift, and the gift's first fruit is your own free yes. The strongest man in the other chair has read all of this, and is not persuaded. Next lesson: Molina, in his own words.`,
      },
      questions: [
        {
          id: `t9-l2-q1`,
          type: "mcq",
          stem: `Begin where Part I began: nothing passes from able-to-act to acting except by something already in act. This morning a sinner's will was able to turn to God; this evening it actually turns. On the Dominican account, what carried it across?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The will carried itself; a free power is its own first mover when it chooses.",
                "feedback": "The will does move itself in willing means for the sake of ends it already wills; the school grants the self-motion and asks the older question: who moved it to its first act? Whatever moves itself still stands in a chain, and the chain's head is not in the creature. A first mover that began this morning is not first."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "God, first cause, really moved it across to its own free act.",
                "feedback": "Respondeo: the First Mover of the Five Ways does not retire at the border of the will. The school names the crossing <span class=\"lat\">praemotio physica</span>, physical premotion: a real motion, given first in the order of causes, applying the power to its act. Banez states the ground without flinching: no inferior cause can resist the efficacy of the first cause (Comm. in ST I q.14 a.13). How that leaves the act free is this lesson's work."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A congenial arrangement of motives; God persuades but never moves.",
                "feedback": "Persuasion is real and the school keeps it, but a first cause that only advertises is not first. The question was what reduced the power to act, and presented goods do not reach the will's exercise; something must move the mover of the body. Moral motion alone leaves the oldest law unpaid."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An appointed angel; God moves wills through created intermediaries.",
                "feedback": "Aquinas himself blocks the delegation: an angel can propose, illumine, and nudge the imagination, but no creature can move the will from within. Only the One who gave the power can move it immediately (ST I q.106 a.2; q.111 a.2). The interior of freedom has exactly one door, and He holds the key He made."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t9-l2-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>As Dionysius says (Div. Nom. iv) "it belongs to Divine providence, not to destroy but to preserve the nature of things." Wherefore it moves all things in accordance with their conditions; so that from necessary causes through the Divine motion, effects follow of necessity; but from contingent causes, effects follow contingently. Since, therefore, the will is an active principle, not determinate to one thing, but having an indifferent relation to many things, God so moves it, that He does not determine it of necessity to one thing, but its movement remains contingent and not necessary, except in those things to which it is moved naturally.</p><p>The Divine will extends not only to the doing of something by the thing which He moves, but also to its being done in a way which is fitting to the nature of that thing. And therefore it would be more repugnant to the Divine motion, for the will to be moved of necessity, which is not fitting to its nature; than for it to be moved freely, which is becoming to its nature.</p><div class="cr-cite">ST I-II, q. 10, a. 4, co. et ad 1 · trans. Fathers of the English Dominican Province · verified against New Advent</div></div>The objector had quoted Romans against him: Who resisteth His will? Aquinas answers with a stronger claim than the objector expected. Find it.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "God's motion is why free acts are free: He moves each nature according to its mode.",
                "feedback": "Respondeo: the reversal that defines the school. Freedom is not defended from the divine motion; it is delivered by it, since the motion extends to the mode of the effect, and the will's mode is freedom. Elsewhere he compresses it: God moves the will immutably, on account of the efficacy of the moving power, which cannot fail; yet the will is not necessitated, because of its own nature (De Malo q. 6, as the school reads it with Garrigou). Necessity here would be the violation."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "God's motion yields to freedom: in free creatures He moves only where unresisted.",
                "feedback": "You have imported the other school's grammar into the wrong text. Aquinas says God moves contingent causes contingently, not conditionally; the motion is not a proposal awaiting clearance. The passage's whole nerve is that the unfailing motion and the contingent mode arrive together, from the same cause."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Freedom survives because the motion reaches acts and never the will's interior.",
                "feedback": "The article's own subject is the will moved by the exterior mover which is God, interiorly and immediately; an exterior-acts-only providence is deism's floor plan, not Thomas's. What preserves freedom is not distance. It is the mode written into the motion itself."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Necessity everywhere: he concedes the objector's text from Romans and bows.",
                "feedback": "He keeps the Romans text at full strength and distinguishes: irresistible as to the outcome God wills, and free in mode, because the outcome God wills includes the freedom of its doing. Reading surrender into a distinguo mistakes the genre; you watched a whole module on the Summa's method to avoid exactly this."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t9-l2-q3`,
          type: "mcq",
          stem: `The term of art, exactly. <span class="lat">Praemotio physica</span>, physical premotion: pre, because it comes first in the order of causes, not of clocks. Physical, because... complete the definition as the school holds it.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because it is bodily: grace rides the brain and blood God also governs.",
                "feedback": "The oldest misreading of the word. Physical here opposes moral, not spiritual: the school means a real influence of being, and the will it moves is as immaterial as the soul Part I defended. A motion of neurons could never reach what neurons cannot house."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because it is felt: a push the saints notice and sinners sleep through.",
                "feedback": "The sentiment theory's ghost, met and sworn off in the prologue. The premotion is not an experience; most who receive it feel nothing and freely act. Grading graces by their temperature was refused when faith itself was defined as assent, not sensation."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because it is real: an influx of being applying the power to act, not advice.",
                "feedback": "Respondeo: physical as in physei, in the order of reality: a true efficient influx by which God applies the will to its own act, against every account that makes grace mere counsel, attraction, or example. Moral motion proposes a good; physical premotion moves the power itself. The school's whole claim hangs on that difference."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because it is necessary: physical names the necessity it lays upon the act.",
                "feedback": "Exactly what the word does not say, and the previous question's text is the answer: the motion that cannot fail moves the free nature freely. Physical names the reality of the influence, never the modality of the effect. Fuse them and you have handed the other lectern its favorite caricature."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t9-l2-q4`,
          type: "mcq",
          stem: `Press the account to its point. On the Dominican books, a grace that issues in conversion and a grace that is left resisted differ how?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Only in the man; the two graces themselves can be twins.",
                "feedback": "You have stated the Molinist account, one lesson early and quite accurately: equal graces, different men. The Dominican refuses it precisely here, on the principle of predilection: no one thing would be better than another, if God did not will greater good for one than for another (ST I q.20 a.3). Hold the thought; it gets its own chair next lesson."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In timing: efficacious grace arrives when the hour is softest.",
                "feedback": "That is congruism, the later Jesuit refinement: grace fitted to congenial circumstances, foreseen as such. Ingenious, and still efficacy from outside the gift; the Dominican objection lands on it unchanged. The school you are studying puts the difference nowhere in the calendar."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "They do not differ; every grace is efficacious and resistance is impossible.",
                "feedback": "This out-Dominicans the Dominicans into a condemned pew: it erases sufficient grace and the defined power to refuse in one stroke. The Church condemned exactly this in Jansen's second proposition. The school affirms real sufficient grace really resistible; its claim is about the efficacious gift, not the abolition of the other.<span class=\"condemned\">Jansenism, prop. 2 · condemned, Cum occasione, 1653 · DS 2002</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "In the gift itself: efficacious grace carries within it the motion of the will's free consent.",
                "feedback": "Respondeo: <span class=\"lat\">ab intrinseco</span>, from within. The efficacious gift differs in what it is, not in what it luckily meets: it includes the premotion by which the will freely and infallibly consents, since the divine will extends to the mode as well as the deed (q.10 a.4 ad 1). Efficacy inside the gift: that is the whole Dominican wager."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t9-l2-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "A motion no creature can resist necessitates the will; the Dominican has merely re-spelled Calvin."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Irresistible is irresistible; the rest is Dominican calligraphy.",
                "feedback": "The jab has edge, and the school's answer is not calligraphy but a distinction with teeth: under the motion the will never in fact refuses; the power to refuse stands whole, unexercised, like the geometer's art while he sleeps. Calvin denies the power itself and the real cooperation; Banez signs both under Trent's anathema. Same certainty, opposite anthropology."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Trent's fourth canon condemned this premotion by name.",
                "feedback": "History refuses the reason: the canon aimed at the Reformers' inert will, and Rome then examined premotion for twenty years without condemning it, under popes with every political reason to do so. A thing condemned by name does not get invited to dispute before the Pope for two decades."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The motion never fails, yet the power to refuse stands whole; Calvin denies the second.",
                "feedback": "Respondeo: the certainty sits in God's causality, the freedom in the act's mode, and the school holds both with one text: God moves the will immutably, on account of the efficacy of the moving power; the will is not necessitated, because of its own indifferent nature (De Malo q. 6). Paul V will say the rest out loud: the Dominican account is far from Calvin. Keep the verdict; it is Rome's."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The premotion is only God's foreknowledge under a sterner name.",
                "feedback": "Right verdict, deflated reason: the school means motion, not knowledge; a real influx of being, not a well-informed gaze. Melt the premotion into foreknowledge and the Dominican account loses exactly what makes it an account. The defense of freedom runs through the mode of a real motion, or it does not run."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t9-l2-q6`,
          type: "fill_blank",
          stem: `The Dominican line, locked. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">God moves the will <span class="fb-blank" data-blank="b1">______</span> as to the outcome, and the will acts <span class="fb-blank" data-blank="b2">______</span> in its mode; the premotion is prior in <span class="fb-blank" data-blank="b3">______</span>, not in time.</span>`,
          latin_tag: `praemotio physica`,
          doctrine_line: `Grace is efficacious from within: God's real premotion moves the free will as free, and the first cause does not compete with its creature.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "infallibly"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "freely"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "causality"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "infallibly",
              "freely",
              "causality",
              "time",
              "violently",
              "doubtfully",
              "merit",
              "nature"
            ],
            "feedback": {
              "all_correct": "Locked: infallibly, freely, causality. The first cause does not compete with its creature; it is why the creature's act is fully the creature's own. Now the other lectern. Next lesson: Molina, stated at the strength that kept Rome listening for twenty years.",
              "partial_correct": "Some blanks resisted. The motion cannot fail as to what God wills; the will's act keeps its free mode, because the divine will extends to the mode; and pre names the order of causes, never a moment on the clock."
            }
          },
        }
      ],
    },
    {
      id: `t9-l3`,
      num: `III`,
      title: `The Molinist Line`,
      latin: `scientia media`,
      tag: `scientia media`,
      fin: {
        tag: `scientia media`,
        heading: `The knowledge in the middle.`,
        body: `Molina's fear is honorable: that under an unfailing premotion, Trent's power to refuse dies with its boots on. His remedy is an architecture no one had built before. Between God's natural knowledge of all He could make and His free knowledge of all He has decreed, Molina sets <span class="lat">scientia media</span>, middle knowledge: God's sight, before any decree, of what every free will would do in any order of things He might create. Wanting this man's conversion, God consults that sight and gives the grace under which the man would freely say yes. The grace is called efficacious from the outside, <span class="lat">ab extrinseco</span>: from the consent it was foreseen to meet. Freedom stands vivid; no one is moved except as he would move. And the price is already visible on the ledger: what now distinguishes the man who consents from the man who refuses? Both lecterns have their answers. Next lesson they meet.`,
      },
      questions: [
        {
          id: `t9-l3-q1`,
          type: "mcq",
          stem: `Give the Jesuit his chair and his worry. Molina reads the same Trent as Banez, and signs the same canons. What is he afraid the premotion account loses?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The necessity of grace: premotion makes nature look self-starting.",
                "feedback": "Backwards: premotion is the least self-starting picture on the market, since nothing in it moves before God moves it. Molina's anxiety points the other way entirely, at what is left for the creature once the premotion has arrived. Reverse the arrow and you have him."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "God's foreknowledge: premotion leaves the future dark to Him.",
                "feedback": "The Dominican grounds foreknowledge in the decrees themselves: God knows free futures the way an author knows his plot, in His own causal will. Whatever else that account lacks, darkness is not it. Molina's objection concerns the creature's side of the ledger, not God's."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The Church's peace: his objection is diplomatic, not doctrinal.",
                "feedback": "Twenty years of disputation before two popes is a strange way to keep the peace. Molina's objection is doctrinal and sincere, and reducing an opponent's argument to his politics is the move this course keeps refusing, in both directions. Give the man his real worry."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Trent's guarded refusal: if consent is premoved, he fears the power to refuse has died.",
                "feedback": "Respondeo: he reads the canon's clause, it can refuse its consent, if it would, and asks what the can is worth if the premotion settles every actual outcome from within. The Dominican answers with the mode and the divided sense; Molina finds the answer verbal, a freedom on paper. That is a serious man's worry, not a rebel's, and his remedy is one of the boldest constructions in theology. It gets this lesson."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t9-l3-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>[The third type is middle knowledge,] by which, in virtue of the most profound and inscrutable comprehension of each faculty of free choice, He saw in His own essence what each such faculty would do with its innate freedom were it to be placed in this or that [situation], even though it would really be able, if it so willed, to do the opposite.</p><p>From these remarks it can easily be seen that even though God acquires no knowledge from things but instead knows and comprehends everything He knows in His own essence and in the free determination of His own will, nonetheless it is not because He knows that something is going to be that that thing is going to be. Just the opposite, it is because the thing will come to be from its causes that He knows that it is going to be.</p><div class="cr-cite">Ludovicus Molina, Concordia, pars IV, disp. 52 · trans. Freddoso (1988), pp. 168, 179 · verified via secondary citation, full-text recheck at Denzinger pass</div></div>God's natural knowledge sees all He could make; His free knowledge sees all He has decreed. What exactly has Molina inserted between them?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A knowledge God acquires by watching history run; the newness is the waiting.",
                "feedback": "Molina blocks this reading in the second paragraph himself: God acquires no knowledge from things, and sees the futures in His own essence. Whatever middle knowledge is, it is not journalism. The Thomist will ask whether Molina can keep that denial; but the denial is his, in print, and he is owed it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Pre-decree knowledge of what each will would freely do in any placement; the newness is the before.",
                "feedback": "Respondeo: the tradition calls the objects <span class=\"lat\">futuribilia</span>: not what will be, but what would be, free act by free act, placement by placement. And the engine is the timing: this knowledge stands prior to any free act of God's will, so God can consult it in deciding what to decree. Everything Molinism does, it does with that before."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Knowledge of what wills must do given their natures; the newness is the necessity.",
                "feedback": "Molina's own bracket forbids you: the will seen would really be able, if it so willed, to do the opposite. Turn the futuribles into necessities and middle knowledge collapses into natural knowledge of natures, which God had already. The construction exists precisely to see freedom without binding it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A devotional name for providence; nothing is really inserted.",
                "feedback": "Something is inserted, and the whole controversy is the proof: you do not convene eighty-five sessions over a synonym. The Thomist attack you will build next lesson requires the insertion to exist in order to object to it. Flattening the machinery is not charity to Molina; it is refusing him a hearing."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t9-l3-q3`,
          type: "mcq",
          stem: `Now the mechanism, in the shape Molina's readers actually used. Two graces stand ready, A and B. God, desiring this man's conversion, sees by middle knowledge that under A the man would freely consent, and under B freely refuse. God gives A; the man converts, freely. What made grace A efficacious?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The consent God foresaw: efficacy comes to the grace from the yes it would meet.",
                "feedback": "Respondeo: <span class=\"lat\">ab extrinseco</span>, from without. In themselves A and B may be equal helps; A wears the name efficacious because of what the man would freely do under it, which God saw before choosing. Molina keeps two freedoms intact at one stroke: God freely chose the order, the man freely consents inside it, two causes concurring in one salutary act."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The grace's own inner motion, which grace B happened to lack.",
                "feedback": "You have re-imported the Dominican grammar into the Jesuit ledger. On Molina's account nothing inner need distinguish A from B at all; the difference that matters lives in the foreseen response. Keep each school's books in its own hand, or the disputation next lesson will audit you."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing: efficacious is an honorific both schools should retire.",
                "feedback": "Retire the term and you retire Trent's working vocabulary along with the whole question; the Church did not spend twenty years on an honorific. Both schools mean something real by a grace with which the act is actually done. The dispute is over the ground of that reality, not its existence."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The man's natural resilience, which the grace merely decorated.",
                "feedback": "Molina refuses this with indignation, and is entitled to: on his account the consent itself is made under grace's living influence, never by bare nature. Salvation beginning from natural resources was condemned centuries before him, and he built his system inside that condemnation, not against it.<span class=\"condemned\">Pelagianism · condemned, Trent Sess. VI can. 1, 1547 · DS 1551</span>"
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t9-l3-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "On the middle-knowledge account, God learns from creatures what they would do."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The futurible is the creature's fact, and reading a fact is learning.",
                "feedback": "You have stated the Thomist objection, and stated it well; but the question asked what the account itself claims, and Molina expressly denies the learning. Keep the two separate: what a system says, and what its critics say it must concede. The objection gets its full hearing next lesson, in proper form."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Molina concedes it cheerfully; a God among free creatures must inquire.",
                "feedback": "Nothing in Molina is cheerful about divine inquiry; an inquiring God belongs to a much later and condemned-adjacent theology, not to any chair in this hall. Molina's entire second paragraph exists to refuse the concession you have him making. Read the man before recruiting him."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Molina: God knows all in His own essence and His will's determination; nothing arrives from outside.",
                "feedback": "Respondeo, in his own words: God acquires no knowledge from things but instead knows and comprehends everything He knows in His own essence (Concordia, disp. 52, Freddoso p. 179). His comprehension of each created will is so profound that He sees in Himself what it would freely do. Whether that answer survives the Thomist cross-examination is tomorrow's business; today it stands as stated, at strength."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Because the futuribles are decreed by God like everything else.",
                "feedback": "Right verdict, wrong school: decreed futuribles are the Dominican grammar, the very thing Molina's before any free act of God's will is built to refuse. If God decrees them, middle knowledge collapses into free knowledge and the construction vanishes. Save the decree; it belongs one lectern over."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t9-l3-q5`,
          type: "mcq",
          stem: `Price both schools can read. On Molina's books, two men receive equal graces; one perseveres, one refuses. Complete the audit: the final difference between them traces to what?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "God's greater love for the saved man; predilection survives untouched.",
                "feedback": "Not untouched: Molina relocates it. God's greater love now works through choosing which order of things to create, while inside the order, with equal helps, the men themselves diverge. Whether relocated predilection is still predilection, given that no one thing would be better than another unless God willed it greater good (ST I q.20 a.3), is precisely what the Thomist disputes. Do not settle in one option what took Rome twenty years."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The created yes: the man himself supplies what distinguishes him.",
                "feedback": "Respondeo: Molina owns it as the system's honesty about freedom: two partial causes, the free determination of the divine will and the free election of created choice, concurring in one total effect (Concordia, disp. 52, Freddoso p. 187). The Thomist hears Paul tighten: what hast thou that thou hast not received? (1 Cor 4:7). Both hearings are now on the record; the verdict waits for lesson six."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Unequal graces after all; the equality was bookkeeping.",
                "feedback": "Molina builds the case with the equality load-bearing: it is possible, he holds, that of two called with equal grace, one is converted and the other is not. Erase the equality and you have erased his account of freedom, which is the account under review. Audit what he wrote, not what would be easier to attack."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Chance, which both schools quietly employ at the margin.",
                "feedback": "Neither school has a margin where chance works; providence reaches every sparrow and both lecterns preach it. The Dominican traces the difference to God's gift, the Molinist to the created yes inside God's chosen order, and nobody in the hall traces anything to dice. The disagreement is too serious to be an accident."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t9-l3-q6`,
          type: "fill_blank",
          stem: `The Molinist line, locked. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Between natural and free knowledge stands <span class="fb-blank" data-blank="b1">______</span> knowledge; by it God sees what each will <span class="fb-blank" data-blank="b2">______</span> freely do in any order of things; efficacious grace is efficacious from the foreseen <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          latin_tag: `scientia media`,
          doctrine_line: `Molina grounds efficacy outside the gift: by middle knowledge God sees what each will would freely do, and chooses the order of things accordingly.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "middle"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "would"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "consent"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "middle",
              "natural",
              "free",
              "would",
              "must",
              "might",
              "consent",
              "decree"
            ],
            "feedback": {
              "all_correct": "Locked: middle, would, consent. Scientia media before every decree, futuribles seen in the divine essence, and efficacy granted to the grace from outside, by the yes it was foreseen to meet. Stated at the strength that kept popes listening. Next: the two lines meet, in proper form.",
              "partial_correct": "Some blanks resisted. Middle knowledge stands between God's knowledge of the possible and of the decreed; its objects are what wills would do, placement by placement; and the grace is called efficacious from the consent foreseen, ab extrinseco."
            }
          },
        }
      ],
    },
    {
      id: `t9-l4`,
      num: `IV`,
      title: `The Disputation`,
      latin: `disputatio`,
      tag: `disputatio`,
      fin: {
        tag: `disputatio`,
        heading: `You argued both chairs.`,
        body: `This is what eighty-five sessions before two popes actually felt like: objection in proper form, reply with a distinction, the distinction pressed, the reply refined. You built the Molinist case against premotion at its full strength and handed the Dominican his real answer: the power to refuse stands whole and unexercised, the composed and divided senses doing honest work. You built the Thomist case against middle knowledge and handed the Jesuit his real answer: comprehension so profound it sees the free yes without causing or awaiting it. And you watched what the twenty years established on the record: no Calvinism proved at one lectern, no Pelagianism at the other, two orthodox schools each unbroken by the other's best blow. The <span class="lat">quaestio disputata</span> was Part I's grammar; now it is the Church's own instrument on her hardest open question. What Rome did with an undefeated pair of answers is the next lesson, and it is the module's quietest surprise.`,
      },
      questions: [
        {
          id: `t9-l4-q1`,
          type: "syllogism_builder",
          stem: `The Jesuit rises first, against physical premotion. Build his objection in proper form, as he would build it: universal premise, particular premise, conclusion.`,
          payload: {
            "instruction": "Three statements, three roles. The universal states the objector's principle about real powers. The particular applies it to the premotion. The conclusion draws what the Molinist needs.",
            "components": [
              {
                "id": "c1",
                "text": "A will moved such that its refusal never in fact occurs is not exercising a real power to refuse.",
                "role": "major"
              },
              {
                "id": "c2",
                "text": "Under physical premotion to consent, refusal never in fact occurs.",
                "role": "minor"
              },
              {
                "id": "c3",
                "text": "Therefore under premotion the power to refuse is not real, and Trent's freedom is lost.",
                "role": "conclusion"
              }
            ],
            "feedback": {
              "correct": "Built, and built honestly: this is the objection that filled sixty-eight sessions, with Trent's own canon sitting in the major like a hostage. Do not reach for the reply yet; a disputation lets the objection stand until it is answered in form. The Dominican is next, and he will need his best distinction.",
              "incorrect": "The objection has three joints. The universal gives the Molinist's principle about what counts as a real power. The particular states what premotion does to actual refusal. The conclusion demotes the canon's can refuse to a word. Build it at strength; a weak objection teaches nothing."
            },
            "doctrineTag": "videtur quod"
          },
        },
        {
          id: `t9-l4-q2`,
          type: "dialogue_branch",
          stem: `The objection stands. The Commentator turns to the Dominican chair. Hand the friar the reply that keeps both the canon and the causality.`,
          payload: {
            "commentatorLine": "The Commentator dips his quill. 'The objection deserves better than a shrug, and the canon deserves better than surrender. One reply in the room does both. Find it.'",
            "branches": [
              {
                "text": "Distinguish the senses: joined with the motion, the will never refuses; its power to refuse stands whole and unexercised. A power need not fire to be real.",
                "verdict": "correct",
                "feedback": "The steel one: the composed and divided senses, Part I's grammar module earning its keep at the hardest table. The geometer asleep still owns his geometry; the will under premotion still owns its power to the opposite, unexercised because God's motion cannot fail, intact because the motion moves it as free. And note what the major would also destroy if it stood: God's own infallible foreknowledge would kill freedom by the same logic, which proves the major proves too much."
              },
              {
                "text": "Concede a small autonomy: the will adds one increment of act that God does not cause.",
                "feedback": "Peace purchased at the price of the Five Ways: one increment of being outside the first cause is one too many, and Paul's question arrives with interest: what hast thou that thou hast not received? The school does not hold its line out of stubbornness; it holds because the alternative unsells the whole metaphysics the course spent Part I earning."
              },
              {
                "text": "Deny that refusals fall under premotion: God moves the good acts and stands clear of the rest.",
                "feedback": "A tempting exit that collapses the doctrine of creation: whatever being a refusal has, God causes, or something exists outside the source of existence. The school's actual line is finer: God causes the act's being; the defect in it is the creature's own, as the motion is from the mover and the limp from the leg. Keep the causality universal and the deficiency local."
              },
              {
                "text": "Appeal to mystery now: the how is hidden, so the objection cannot land.",
                "feedback": "The lazy parry, and an insult to a good objection. Mystery has an honored place in this module, but it is the last room, entered after every distinction is spent, not a fog bank to hide in at the first volley. An appeal to mystery before the distinguo is indistinguishable from having no answer."
              }
            ]
          },
        },
        {
          id: `t9-l4-q3`,
          type: "syllogism_builder",
          stem: `Now the Dominican rises, against middle knowledge. Build his objection in proper form: universal premise, particular premise, conclusion.`,
          payload: {
            "instruction": "Three statements, three roles. The universal states the Thomist principle about determinate truth. The particular applies it to the futuribles. The conclusion draws what the Dominican needs.",
            "components": [
              {
                "id": "c1",
                "text": "Every determinate truth is fixed by something: by God's decree, or by an existing cause.",
                "role": "major"
              },
              {
                "id": "c2",
                "text": "The futurible's truth is, on middle knowledge, fixed before any decree and before any existing cause.",
                "role": "minor"
              },
              {
                "id": "c3",
                "text": "Therefore middle knowledge sees a determination nothing determined, and God's knowledge waits on it.",
                "role": "conclusion"
              }
            ],
            "feedback": {
              "correct": "Built at strength: the grounding objection, with the passivity charge in its tail. Garrigou states the school's principle without ornament: previous to any divine decree, there cannot be any conditionate future that is determined; and if the determination is not from God, His knowledge is passive toward it, a spectator of what distinguishes the just (Predestination, pp. 147-149). Pure Act does not audit facts it did not author. Let it stand; the Jesuit gets his reply.",
              "incorrect": "Three joints again. The universal names where determinate truth can come from at all. The particular states the futurible's strange position: before every decree, before every existing will. The conclusion charges the account with an undetermined determination and a passive God. Build the house's own objection as carefully as you built its opponent's."
            },
            "doctrineTag": "sed contra"
          },
        },
        {
          id: `t9-l4-q4`,
          type: "dialogue_branch",
          stem: `Fair is fair. The Commentator turns to the Jesuit chair. Hand Molina his strongest answer, not his weakest.`,
          payload: {
            "commentatorLine": "The Commentator raises the calmer eyebrow. 'A house that only arms its own side has trained a debater, not a doctor. The Jesuit rises; give him his best.'",
            "branches": [
              {
                "text": "God's comprehension of each will in His own essence is so profound that He sees the free yes without causing it and without awaiting it: depth of sight, not receipt of news.",
                "verdict": "correct",
                "feedback": "Molina's actual reply, sometimes called supercomprehension: the divine essence contains eminently every creature, and God's infinite penetration of the will He designed reaches even what it would freely do. The Thomist presses on: sight of an undetermined thing has no object to see. The Jesuit answers: the determination is the will's own, eternally present to depth enough. There the schools still stand, four centuries later. You have now argued both chairs, which is what this module owed you."
              },
              {
                "text": "Concede that the futuribles rest on God's decrees, but faintly, in a whisper.",
                "feedback": "A whispered decree is a decree: this collapses middle knowledge into free knowledge with extra steps, and hands Banez the match while bowing. Later Jesuits refined toward congruous grace precisely to avoid surrendering the before; refinement is legitimate, capitulation dressed as nuance is not. Give Molina his real answer."
              },
              {
                "text": "The futurible truths are brute: nobody fixes them, they are simply there.",
                "feedback": "This answer loses on the objection's own terms and then loses worse: a determination from nowhere, standing outside God, eternal and unauthored, is a second absolute in the room. No school in this hall can host it; Molina locates the futuribles in God's essence for exactly this reason. Brute facts are the one currency theology cannot mint."
              },
              {
                "text": "Attack premotion again instead of answering: their account is worse, so ours stands.",
                "feedback": "The debater's dodge, and the Commentator has seen it since Part I: an objection to your opponent is not a defense of your thesis. Two accounts can both be wounded; the disputation form exists to make each answer for itself. Molina had a real reply. Handing him a deflection insults him more than the objection did."
              }
            ]
          },
        },
        {
          id: `t9-l4-q5`,
          type: "mcq",
          stem: `Eighty-five sessions before two popes, twenty years of print and pulpit. Before Rome speaks, audit what the disputation itself established on the record.`,
          latin_tag: `disputatio`,
          doctrine_line: `Each school's best objection met the other's best answer for twenty years, and neither was convicted: know both arguments as their makers did.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Neither school convicted: no Calvinism proved at one lectern, no Pelagianism at the other.",
                "feedback": "Respondeo: each side's gravest charge failed to stick under the longest scrutiny Rome has ever given a theological question. The Dominicans, examined, are far from Calvin: they hold real cooperation and the whole power to refuse. The Jesuits, examined, are no Pelagians: they hold grace first and grace throughout. Two orthodox schools, each unbroken by the other's best blow: hold that result; the Pope is about to make it official."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A winner on points: the early commissions' censures of Molina settled it.",
                "feedback": "The commissions did censure Molina, twice, and the record's next line is the one that matters: the Pope declined to ratify, demanded the documents from Spain be weighed, and reopened the whole matter in his own presence. A verdict a pope refuses to sign is not a settlement; it is evidence the question was harder than the examiners thought."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That the question is meaningless, since good men differed for decades.",
                "feedback": "Good men differing for decades measures a question's difficulty, not its meaning; by this standard the Trinity itself would have dissolved at Nicaea. The disputation clarified terms, killed caricatures, and mapped exactly where the accounts divide. That is what meaning under pressure looks like."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Exhaustion only: nothing stands on the record but the years.",
                "feedback": "The record carries two hard-won negatives, and negatives are findings: the charge of Calvinism failed, the charge of Pelagianism failed. Courts and councils both know that what could not be proved is a result. Read the record before pitying it."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t9-l5`,
      num: `V`,
      title: `Rome Decides Not to Decide`,
      latin: `quaestio aperta`,
      tag: `quaestio aperta`,
      fin: {
        tag: `quaestio aperta`,
        heading: `The keeper declines to acquire.`,
        body: `September the fifth, 1607. The generals of both orders are summoned, and Paul V ends twenty years with three clauses: each school may defend its own account; neither may censure or condemn the other; both will await the final decision of the Apostolic See. Then the quietest sentence in the module: that decision has never come. Four years later the Holy Office suspends new books on efficacious grace entirely, and the question settles into the Church's permanent inventory of open cases. Understand what you are looking at. The commissions had twice voted to condemn; two popes declined to sign. Where the deposit decides, the keeper defines; where the deposit is silent, the keeper who taught you <span class="lat">guarding, not growing</span> refuses to manufacture a certainty God did not hand him. The refusal is not weakness. It is the office, working. What a serious house does inside that permission is the next lesson.`,
      },
      questions: [
        {
          id: `t9-l5-q1`,
          type: "mcq",
          stem: `September 5, 1607. Twenty years, eighty-five sessions before two popes, two commission reports against Molina that no pope would sign. Paul V summons the generals of both orders and speaks. What does he say?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Molinism is condemned; the commissions' patient work is ratified at last.",
                "feedback": "The ending the Dominicans expected, twice drafted and twice refused. Clement VIII would not sign it; Paul V, who sat through seventeen of the debates himself, declined it too. Whatever the house thinks of Molinism, the record is the record: Rome was pressed hard to condemn, nearly did under Clement, and finally would not."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Both schools may teach; neither may censure the other; the See reserves the final word.",
                "feedback": "Respondeo: the three clauses, communicated to both orders on 5 September 1607: each party allowed to defend its own doctrine; each enjoined from censuring or condemning the opposite opinion; both commanded to await, as loyal sons of the Church, the final decision of the Apostolic See. And the quiet coda that defines the case to this day: that decision has not been reached."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Both accounts are equally true; the Church now holds two doctrines of grace.",
                "feedback": "Permission is not parity. The decree ruled both accounts tolerable within the faith; it crowned neither, and it certainly did not define a contradiction as twice true. The space Rome opened is a space for continued argument, not a declaration that argument is over because everyone won."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The question is closed as unanswerable; theology must retire it.",
                "feedback": "Reserved is not retired. The See kept the case on its own docket, awaiting its own final word; it did not burn the file. Four centuries of Thomists and Molinists have argued inside that reservation with Rome's full knowledge. A question the Church retires does not get a standing injunction regulating how you fight about it."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t9-l5-q2`,
          type: "match_pair",
          stem: `The case, dated. Match each year to what happened in it.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "1588"
              },
              {
                "id": "L2",
                "text": "1598"
              },
              {
                "id": "L3",
                "text": "1607"
              },
              {
                "id": "L4",
                "text": "1611"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "Molina's Concordia printed at Lisbon; Spain erupts"
              },
              {
                "id": "R2",
                "text": "Clement VIII institutes the Congregatio de Auxiliis"
              },
              {
                "id": "R3",
                "text": "Paul V: both schools stand, mutual censures forbidden"
              },
              {
                "id": "R4",
                "text": "the Holy Office suspends new books on efficacious grace"
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
              ]
            ],
            "feedback": {
              "all_correct": "Twenty-three years, filed in order: a book, a tribunal, a permission, a silence (the 1611 decree's formula is preserved at DS 1997). The guarding office working at its own pace: examine everything, define nothing the deposit does not contain.",
              "partial_correct": "Walk the chronology again: the Concordia lights the fire in 1588; Clement VIII convenes the congregation in 1598; Paul V issues the three clauses in 1607; the Holy Office quiets the presses in 1611."
            }
          },
        },
        {
          id: `t9-l5-q3`,
          type: "mcq",
          stem: `The prologue taught the office: guard the deposit, expound it, add nothing. Where in that charter does a refusal to decide fit?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It does not fit; a refusal to decide is the office idling in place.",
                "feedback": "Look at the docket before calling it idle: twenty years of examination, eighty-five sessions attended by the popes in person, every charge weighed to destruction. The office worked the case as hard as any in its history. What it declined to do at the end is the question, and the charter answers it one option down."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It fits as diplomacy: two powerful orders, one prudent pope, zero doctrine.",
                "feedback": "The politics were real and the reading still fails, because it cannot explain the shape of the outcome: a pope playing pure diplomat splits differences and flatters both parties. This decree instead tracked the deposit's own boundary with precision: condemn what the faith excludes, tolerate what it does not. Prudence served the doctrine; it did not replace it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It fits as delay: the true definition exists and waits in a drawer.",
                "feedback": "Four centuries is long even for Roman drawers. The reservation named no timetable and implied no hidden verdict; it left the final word to the See precisely because the deposit, as given, does not dictate one. Imagining a finished answer in storage is more comfortable than an open question, which is why the module will not let you keep it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Squarely: where the deposit does not decide, the keeper must not manufacture a decision.",
                "feedback": "Respondeo: the museum keeper who owns nothing in the museum, met in the prologue, working his hardest case. To define either school as of the faith would have added to the deposit what the Apostles did not leave in it; the promise commissions guarding and expounding, never acquiring (Pastor Aeternus · DS 3070). The restraint is the charter, executed. Fidelity sometimes looks like a signature withheld."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t9-l5-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "A see that cannot make up its mind for four centuries is a weak court."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Courts exist to rule; four centuries without a ruling is dereliction.",
                "feedback": "The premise mistakes the court. A civil bench must rule because the parties cannot leave without justice; this tribunal's parties both live inside the faith, fully sacramented, awaiting nothing they lack. Where no soul is stranded, the only duty is accuracy, and accuracy here meant declining to outrun the deposit. The docket is not derelict; it is honest."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The endless delay proves the question was empty all along.",
                "feedback": "Empty questions do not get twenty years before two popes and a standing injunction on how to dispute them. The delay proves the opposite: a question so weighty that error in either direction, condemning the sound or crowning the unproven, was worse than patience. Difficulty is not emptiness; you learned that distinction on easier ground."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The restraint is jurisdictional honesty: where God has not spoken, the guardian does not invent.",
                "feedback": "Respondeo: the office's poverty is the deposit's security, and the principle cuts both ways: the keeper who cannot add new doctrine also cannot add new certainties. A magisterium that defined every hard question by fiat would be exercising exactly the authorship Pastor Aeternus denies it. Four centuries of not overstepping is the charter kept, and the strength is the kind the prologue taught you to recognize."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The See decided for the Thomists long ago and merely spares Jesuit feelings.",
                "feedback": "Right verdict, corrupt reason: it reads court gossip into a formal record that says the opposite. The decree protects both schools by name and binds both tongues equally; a secret verdict publicly denied would make the guarding office a diplomatic fiction. The house holds the Thomist line on argument, not on rumors of a wink from Rome."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t9-l5-q5`,
          type: "precision_check",
          stem: `A claim heard in every century since. <em>"Since Rome permits both accounts, both are equally sound, and preferring one is mere school spirit."</em> Where exactly does it break?`,
          payload: {
            "statement": "Since Rome permits both accounts, both are equally sound, and preferring one is mere school spirit.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At permitted-therefore-equal: Rome ruled both tolerable, not both true; ranking remains open work.",
                "feedback": "Respondeo: the decree draws a floor, not a tie. Below the floor lie the condemned things: inert wills, self-starting salvation. Above it stand two accounts the faith can host, and the whole unfinished question of which states the truth of God's grace more exactly. That question Rome reserved, which means it is still live, which means serious houses still argue it with reasons. Preference with reasons is called theology."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At the premise: Rome permits only the Thomist account in practice.",
                "feedback": "The record refuses you flatly: the decree names both parties, protects both, binds both. Whatever practical favor Thomism has enjoyed in Roman schools, the 1607 permission is symmetric on its face. A house that needs to falsify the record to feel secure in its line has a weak line; this house's line needs no such help."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nowhere: toleration just is equality, in the only sense theology has.",
                "feedback": "Then every tolerated opinion in history stands level with every other, and the Church's careful ladder of censures and notes, from heresy down to temerity, measures nothing. Theology has always distinguished what may be held from what is best held. Collapse that distinction and you lose the vocabulary this very module runs on: error, permitted, defined."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At school spirit: schools have no spirit, only theses.",
                "feedback": "Schools have plenty of spirit, some of it regrettable, and the claim's error is not there. The break is upstream, in the slide from permission to parity. Attack the joint that carries the weight; quibbling with the rhetoric while the inference walks by is spotting the wrong fallacy."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t9-l5-q6`,
          type: "fill_blank",
          stem: `The decree, in three verbs. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Each school may <span class="fb-blank" data-blank="b1">______</span> its own account; neither may <span class="fb-blank" data-blank="b2">______</span> the other; both <span class="fb-blank" data-blank="b3">______</span> the final word of the Holy See.</span>`,
          latin_tag: `quaestio aperta`,
          doctrine_line: `Paul V let both schools stand, forbade mutual censures, and reserved the final word to a see that has never spoken it: the guarding office, exercised by restraint.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "defend"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "censure"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "await"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "defend",
              "censure",
              "await",
              "improve",
              "replace",
              "demand",
              "invent",
              "forget"
            ],
            "feedback": {
              "all_correct": "Locked: defend, censure, await. Three verbs that have governed this question for four centuries, and the third still stands in the present tense. The wall here was drawn by Rome, and the fair fight continues inside it. Next: what a serious house does with the permission.",
              "partial_correct": "Some verbs misfiled. The 1607 decree allows each side to defend its own doctrine, forbids either to censure the other, and commands both to await the See's final decision, which has never come."
            }
          },
        }
      ],
    },
    {
      id: `t9-l6`,
      num: `VI`,
      title: `The Verdict and Its Limits`,
      latin: `sententia domus`,
      tag: `sententia domus`,
      fin: {
        tag: `sententia domus`,
        heading: `A verdict with a governed tongue.`,
        body: `Inside Rome's permission, this course keeps a house, and the house holds Banez. Not by inheritance: by the same verdict pattern you watched at <span class="lat">De Esse</span>. The charter reads Thomas whole, through his commentators, and read whole, the first cause's primacy runs unbroken from the Five Ways to the last grace: no one thing better than another unless God willed it greater good, nothing possessed that was not received. Middle knowledge, weighed, asks the school to see a determination nothing determined; the house declines, and calls the account an error. There the tongue meets its governor. Error is the strongest word the house owns here, because heresy was refused by the only court with jurisdiction: the Jesuits are no Pelagians, as the Dominicans are no Calvinists, and the 1607 injunction binds this course as it bound the lecterns. Sufficient grace is real, the fruit is in the flower, and no man is lost except by his own refusal. The recapitulation will ask you for all of it.`,
      },
      questions: [
        {
          id: `t9-l6-q1`,
          type: "mcq",
          stem: `Inside Rome's permission, this course keeps a house, and it holds the Dominican line. Give the reason that is an argument, not a loyalty.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Dominicans formed the course's tradition; houses keep their furniture.",
                "feedback": "The course's own constitution forbids taste-walls and pedigree-walls; a position held by inheritance falls to the first heir who redecorates. The verdict must survive a change of stewards, which means it must be an argument. One is available, and it is the same one that closed Part I's finale."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Reading Thomas whole: the first cause's primacy runs unbroken from the Five Ways to grace.",
                "feedback": "Respondeo: the De Esse pattern again. The charter commends Thomas whole, through the commentators; and whole, his metaphysics never lets a creaturely act stand outside the first cause's motion, least of all the act that saves. Predilection (ST I q.20 a.3) and Paul's question (1 Cor 4:7) are the same principle in doctrine and in Scripture. The house holds Banez because it kept the metaphysics it taught you; the grammar does not change at the altar of freedom."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Molinism was condemned in everything but name; the house reads between the lines.",
                "feedback": "The record says what it says: examined twenty years, censured twice in draft, condemned never, protected explicitly. A house that pretends its opponent was secretly condemned holds its line by fiction, and the wall this course lives under forbids exactly that comfort. The Thomist case is strong enough to need no forged verdicts."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Middle knowledge is complicated, and simplicity wins the tie.",
                "feedback": "Physical premotion is no picnic either; if parsimony judged this case, both schools would lose. The house's reason is not that Molina built too much machinery but that one part of the machine, the pre-decree determinate futurible, has nothing to stand on. Complexity is a cost, never a verdict."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t9-l6-q2`,
          type: "mcq",
          stem: `Two texts the house keeps at full weight. Aquinas: no one thing would be better than another, if God did not will greater good for one than for another (ST I q.20 a.3). Paul: what hast thou that thou hast not received? (1 Cor 4:7). What do these do in the dispute?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "They end it; Molina has no reply, and the 1607 permission was sentiment.",
                "feedback": "He has a reply, and you built it yourself in the disputation: God's love works through choosing the order of things. The house finds the reply insufficient, not absent, and the permission was the fruit of twenty years' scrutiny, not of sentiment. Overclaiming against a permitted opponent is how a strong case starts sounding weak."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "They are devotional garnish on what remains a metaphysical fight.",
                "feedback": "In this course Scripture is never garnish, and Paul's question is as exact as any syllogism in the module: it asks whether anything in the saved man, his final yes included, stands outside the received. That is the metaphysical fight, stated by an Apostle. The two registers are one case."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "They favor Molina: the yes is received as a power, then exercised as one's own.",
                "feedback": "Molina can say the power is received; the pinch is the exercise. On his books the exercise of the yes, precisely as distinguishing this man from that one, traces to the creature, not the gift; and then something decisive is possessed that was not received. The reply is clever, the house judges it a leak, and the texts are why."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "They are the house's hinge: every final difference between men traces to gift, never to an unaided yes.",
                "feedback": "Respondeo: the principle of predilection, which the house's reference commentator calls the heart of the whole matter. The Thomist account keeps both texts without remainder: the efficacious gift carries the free yes inside it, so the saved man's whole difference is received, and still his own. Any account that leaves the decisive difference to the creature must reread Paul slowly."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t9-l6-q3`,
          type: "precision_check",
          stem: `The house's tongue, tested. <em>"Molinism is Pelagianism with better manners, and a Thomist should say so plainly."</em> Where exactly does it break?`,
          payload: {
            "statement": "Molinism is Pelagianism with better manners, and a Thomist should say so plainly.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At the equation: Rome heard that charge for twenty years and refused it; argue error, never pin heresy.",
                "feedback": "Respondeo: the charge was the Dominicans' own, pressed by their best men, weighed by two popes, and not sustained: the Jesuits hold grace first and grace throughout, which is exactly what Pelagius denied. The house may argue that Molinism weakens grace's primacy, and does argue it; the house may not brand as heresy what the Church expressly declined to brand. The 1607 injunction governs this course's tongue too, and obedience here is not softness. It is the wall, drawn by Rome."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At better manners: politeness has no standing in doctrinal judgment.",
                "feedback": "True and beside the point: strike the rhetorical flourish and the claim's real cargo, the equation of a permitted opinion with a condemned heresy, sails through untouched. Diagnose the load-bearing joint. The manners were never the problem."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nowhere: what a house judges false it may also call heretical.",
                "feedback": "Heresy is not a volume knob on the word false; it is a precise censure meaning contrary to what must be held with divine and catholic faith, and applying it is the Church's act, not a school's. A house that inflates its censures debases its own currency, and this house's currency is precision. False, erroneous, temerarious, heretical: the ladder exists because the rungs differ."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At plainly: such verdicts should be whispered, not said.",
                "feedback": "Plainness is a virtue this course practices on every page; the defect was in what was to be said plainly, not in the volume. A wrong sentence whispered is still wrong. Correct the content and then say it as plainly as you like: Molinism is error, not heresy, and the house says so out loud."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t9-l6-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "On the Thomist account, the man with only sufficient grace never had a real chance; his loss was arranged."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. A sufficient grace that never suffices is a label, not a chance.",
                "feedback": "The standing Molinist jab, at full strength, and the school's answer has been on file for centuries: sufficient grace gives real power, power in the strict Part I sense, a true potency awaiting no further permission to be real. The man could act; that is what the grace bought him. Why he did not is answered by the next reason down, and it does not implicate the Giver."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Predilection means the lost were loved less, so the school should own the arrangement.",
                "feedback": "The school owns the mystery's edge without flinching: to be given more is to be loved more. But loved-less is not arranged-loss, and the account's asymmetry is the whole point: God causes every good and only permits defect; the refusal that costs the man efficacious grace is the man's own work. The edge is real. The arrangement is a slander on it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Real power was truly given; the man is deprived of efficacious grace because he resisted sufficient grace.",
                "feedback": "Respondeo, in the school's own settled words: man is deprived of efficacious grace because he resisted sufficient grace, never the reverse (Garrigou-Lagrange, Predestination, p. 333). And the image the same page keeps: sufficient grace virtually contains the efficacious grace offered in it, as the flower contains the fruit; the frost that kills the fruit is the man's refusal, not the Giver's economy. No one is lost except by his own act. That floor holds under every soul in the pews."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Because on the Thomist account every man finally receives efficacious grace.",
                "feedback": "Right verdict, imported universalism: the school teaches no such final distribution, and the difference between sufficient and efficacious grace is load-bearing precisely because not every sufficient grace flowers. The claim was false for the asymmetry's reason, one option up, not because everyone gets everything in the end."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t9-l6-q5`,
          type: "precision_check",
          stem: `One more test of the governed tongue. <em>"The Molinists deny that grace is efficacious."</em> Where exactly does it break?`,
          payload: {
            "statement": "The Molinists deny that grace is efficacious.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nowhere: extrinsic efficacy is denial in slow motion.",
                "feedback": "The polemicist's shortcut. The house argues that extrinsic grounding weakens the doctrine of efficacy; arguing a position weakens something is not reporting that it denies it. Erase that difference and every dispute becomes mutual heresy-hunting, which is the world the 1607 injunction was written to end."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At deny: they affirm efficacious grace, grounded extrinsically; misstating a permitted opinion breaks justice and the injunction.",
                "feedback": "Respondeo: the fair-fight rule is not etiquette; it is accuracy under oath. Molina affirms graces that infallibly issue in the act, efficacious in the composed sense from foreseen consent; the house contests the ground, not the affirmation. The strongest case against an opponent begins by stating him so well he would sign it. You watched the course do that for two lessons; the discipline is now yours to keep."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At the Molinists: the later Society quietly abandoned the account.",
                "feedback": "History says otherwise: the Society refined the account, congruism being the most famous refinement, and defended it for centuries with Rome's permission in hand. An opponent who evolved is not an opponent who surrendered. The claim's break is elsewhere, in the verb doing the misstating."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At grace: the dispute concerns nature, not grace.",
                "feedback": "The dispute is named de auxiliis, on the helps of grace, and every disputed proposition in it concerns grace's efficacy. Filing it under nature misplaces the entire controversy. The claim errs in its verb; the subject matter, at least, it got right."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t9-l6-q6`,
          type: "mcq",
          stem: `Last question before the recapitulation. State the house's full posture in one breath.`,
          latin_tag: `sententia domus`,
          doctrine_line: `The house holds the Thomist line at full strength, calls Molinism error and never heresy, and keeps the charity Rome commanded.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Thomist in public, agnostic in private; the permission makes conviction optional.",
                "feedback": "A house without conviction is a hallway. The permission makes condemnation forbidden, not conviction optional; four centuries of serious Thomists have held the line with their whole minds inside Rome's rules. Split the public and private registers and you have rebuilt the two-truths evasion this course refused in its first module."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Thomist by tradition, silent by policy; verdicts belong to reviewers.",
                "feedback": "The course renders verdicts on every open question it teaches; that is what the De Esse finale trained you for. What it does not render is censures beyond its authority. Silence and restraint are different disciplines, and the house practices only the second."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Molinist for preaching, Thomist for metaphysics; each account has its room.",
                "feedback": "The two-rooms floor plan again, refused in the prologue when it tried to separate faith and reason. One God, one grace, one account of how His gifts work, however hard: a house that preaches one theology and thinks another has a crack down its middle. The Thomist account preaches, and the flower-and-fruit line proves it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The Thomist line at full strength; Molinism error, not heresy; the final word Rome's, whenever given.",
                "feedback": "Respondeo: conviction, censure-discipline, and obedience in one sentence. The house argues its line as hard as Banez did, names the opposing account an error with reasons on the table, and leaves the last word where Paul V left it. Certainty where the Church is certain, liberty where she leaves liberty: you will meet that sentence again in the recapitulation, as the module's own doctrine."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `t9-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The course's mature lesson.`,
        body: `Hold the whole case in one hand. Two certainties: grace begins, carries, and completes every salutary act, and the will it moves can refuse. Two schools on the joint between them: efficacy within the gift, God's premotion moving the free will as free; efficacy from without, the consent God foresaw by <span class="lat">scientia media</span> before any decree. One disputation, run in proper form for twenty years. One decree: defend, do not censure, await. And one house verdict, rendered with a governed tongue: the Thomist line at full strength, Molinism error and never heresy, the last word Rome's whenever Rome gives it. This was never only about grace. It was the course showing you how a Catholic mind holds an open question: confession where the deposit speaks, disputation where it is silent, charity under law in both. Every hard question ahead of you, in this course and out of it, gets the pattern you now own. <span class="lat">Deo gratias</span>.`,
      },
      questions: [
        {
          id: `t9-l7-q1`,
          type: "match_pair",
          stem: `The module in four terms. Match each to its office.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "gratia sufficiens"
              },
              {
                "id": "L2",
                "text": "gratia efficax"
              },
              {
                "id": "L3",
                "text": "praemotio physica"
              },
              {
                "id": "L4",
                "text": "scientia media"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "real power to act well, truly given"
              },
              {
                "id": "R2",
                "text": "the grace with which the act is actually done"
              },
              {
                "id": "R3",
                "text": "the Thomist ground: God's real motion within the gift"
              },
              {
                "id": "R4",
                "text": "the Molinist ground: consent foreseen before any decree"
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
              ]
            ],
            "feedback": {
              "all_correct": "Four terms, correctly filed: the shared vocabulary, and the two grounds that divide the schools beneath it. Whoever owns these four can follow every page of a four-century dispute. That was the module's working promise, and it is now kept.",
              "partial_correct": "Some terms misfiled. Sufficient grace gives real power; efficacious grace completes the act; the Thomist puts the efficacy inside the gift as premotion; the Molinist puts it outside, in the foreseen yes."
            }
          },
        },
        {
          id: `t9-l7-q2`,
          type: "mcq",
          stem: `In the Church's own filing system, what kind of question is De Auxiliis?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Open between orthodox schools: both permitted, neither defined, the See's final word reserved.",
                "feedback": "Respondeo: the standing model case of the genus. Its walls are condemned errors on both sides: the inert will, the self-starting salvation. Its floor is Rome's permission; its ceiling, the reserved final word; and inside, four centuries of legitimate disputation. Knowing which questions the Church filed this way, and which she slammed shut, is half the discipline of this whole course."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Closed against Molina: the censures of 1598 remain the operative verdict.",
                "feedback": "Draft censures that two popes declined to ratify are not operative anything; the operative act is the 1607 decree that protects Molina's school by name. The house judges Molinism an error on arguments, and precisely because the question is open, argument is the only instrument it may use."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Closed against Banez: premotion survives on sufferance, awaiting condemnation.",
                "feedback": "The mirror image of the last error, popular at the other lectern for a while: the decree protects the Dominican school identically, and Paul V said out loud that its account is far from Calvin. Sufferance is the wrong word for a permission the Pope defended in person for seventeen sessions."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Meaningless: filed under questions wisely abandoned.",
                "feedback": "The Church does not issue standing injunctions regulating how to dispute abandoned questions. The file is open, the injunction is live, and this module just spent seven lessons proving the contents can be taught with precision to a beginner. Abandonment is the one filing the record excludes."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t9-l7-q3`,
          type: "mcq",
          stem: `Beyond the doctrine of grace, what did this module hand the rest of the course?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A settled doctrine of efficacious grace to recite on demand.",
                "feedback": "It handed you a held position, which is a different possession: the house line with its arguments attached, and the knowledge of exactly where the Church has and has not spoken. Recitation would have taken one lesson. The other six were spent on the part reciters never learn."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Permission to leave hard questions unanswered, since Rome does.",
                "feedback": "Rome left the question undefined and worked it for twenty years; that is the opposite of leaving it unanswered. The module's discipline is to answer with arguments while withholding only the censures you lack authority to issue. Unanswering is a counterfeit of restraint, and the house does not accept it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The pattern for every open question: house line at strength, opponents stated truly, walls where Rome built them.",
                "feedback": "Respondeo: the model case, portable. Ahead lie disputed motives of the Incarnation, disputed Marian vocabulary, and a hundred smaller forks where orthodox doctors differ; each gets this pattern. Confess what is defined, argue what is open, state the opponent so well he would sign it, and let no censure leave the house that Rome has not signed first."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Proof that theology cannot reach conclusions where philosophy could.",
                "feedback": "Theology reached many conclusions in this very module: the necessity of grace, the freedom under it, the falsity of the inert will, all defined; plus a house verdict argued to a conclusion inside the open zone. What it declined was a definition the deposit does not contain. Modesty about one joint is not impotence about the science."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t9-l7-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "Because the schools dispute the how of efficacy, the believer cannot pray with confidence."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Prayer needs the mechanism settled first; petitions require an engineering diagram.",
                "feedback": "By that standard no one prayed until 1588, and no one has prayed since 1607. The Church's actual order runs the other way: the praying came first, and the disputation arose from taking the prayed-to God seriously. Lex orandi survived the controversy untouched; both schools kneel at the same rail."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Until Rome defines the answer, confidence is presumption.",
                "feedback": "This would unchurch every century before the controversy and all four since. Trent itself commands a most firm hope in God's help while forbidding presumption of one's own election: confidence in the Giver, modesty about the self. The undefined joint between grace and freedom never touched the definition of whom to trust."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Both schools confess the same Father who gives; the dispute never touched whether to ask.",
                "feedback": "Respondeo: the king's heart is in the hand of the Lord; whithersoever he will, he shall turn it (Prov 21:1). Both lecterns preached that verse. The Thomist asks God to move his heart; the Molinist asks God to place him well; heaven files both under the same petition of the Our Father. The dispute concerns the metaphysics of the answer, never the address on the envelope."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Because prayer's efficacy is psychological, and psychology needs no theology.",
                "feedback": "Right verdict, and the sentiment theory's ghost carrying it: prayer as self-soothing was refused in the prologue when faith itself was defined as assent, not feeling. Prayer is real petition to a real Giver, which is exactly why the schools cared how His giving works. Keep the verdict; return the reason to its condemned drawer."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t9-l7-q5`,
          type: "fill_blank",
          stem: `The whole case, in one sentence. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The Thomist grounds efficacy <span class="fb-blank" data-blank="b1">______</span> the gift; the Molinist grounds it in foreseen <span class="fb-blank" data-blank="b2">______</span>; Rome permits both and forbids mutual <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "within",
                  "inside"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "consent"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "censure",
                  "censures"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "within",
              "without",
              "consent",
              "decree",
              "censure",
              "applause",
              "merit",
              "delay"
            ],
            "feedback": {
              "all_correct": "Locked: within, consent, censure. Four centuries of theology in fourteen words, and every term in it earned across seven lessons. The module's deliverable is that sentence, held with its arguments attached.",
              "partial_correct": "Some blanks resisted. Ab intrinseco: efficacy within the gift, the Dominican road. Ab extrinseco: efficacy from the consent foreseen, the Jesuit road. And over both, the 1607 decree: defend, do not censure, await."
            }
          },
        },
        {
          id: `t9-l7-q6`,
          type: "mcq",
          stem: `The course looks in the mirror once more. Why walk a beginner through a four-century dispute the Church herself has not settled?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `Certainty where the Church is certain, liberty where she leaves liberty: the house line held at strength, inside a wall drawn by Rome.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Erudition: a serious course displays the tradition's hardest furniture.",
                "feedback": "Display would have been a paragraph and a bibliography. You were made to build both schools' objections in proper form and hand each its best reply, which is training, not tourism. The course spends your effort only where it buys formation; seven lessons is a price, and it bought something specific."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Recruitment: to make you a Dominican by attrition.",
                "feedback": "A recruit by attrition would hold the house line without arguments and drop it at the first clever objection. The module built the opposing case at full strength precisely so your Thomism would be earned, the only kind worth having. If anything was recruited, it was your standards."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Completeness: no survey of grace could omit it.",
                "feedback": "Pedagogy outranks completeness in this course's constitution; hard debates enter only when they form the learner. Plenty of grace's subtopics were omitted without apology. This one was kept because it teaches something no settled doctrine can, which the correct answer names."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because the wall's rule is learned here or nowhere: full-strength fair fight inside limits the Church set.",
                "feedback": "Respondeo: the model case of the course's whole constitution. Where the deposit speaks, confession; where it is silent, disputation at full strength; and the limits drawn by Rome, not by the house's temper. You have now practiced all three on the hardest open question the Church possesses. Opens the door to every open question ahead."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    }
  ],
};
