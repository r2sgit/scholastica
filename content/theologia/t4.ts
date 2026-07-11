import type { ModuleMeta } from '../types';

/** T4 · The Trinity. Wired into the live app by scholastica-claude-code-wing-parity-RUN.md (WP-A). Content is the authored t4-content.json, copied faithfully; no prose edits. */
export const t4: ModuleMeta = {
  id: 4,
  title: `The Trinity`,
  short: `De Deo Trino`,
  label: `Theologia IV · The Trinity`,
  latin: `De Deo Trino`,
  aim: `One God in Trinity and Trinity in Unity, neither confounding the Persons nor dividing the Substance: one essence, numerically one, subsisting in three Persons really distinct by relations of origin alone. Two processions, by way of intellect and of will: the Word begotten, not made; Love proceeding from Father and Son as from one principle. The relations, really identical with the simple essence, are the Persons: subsistent relations, distinct only where opposition of relationship interferes. Reason could not climb here and cannot prove it; revelation gives it, and the grammar of who and what holds it. The missions carry the processions into time: the Son visibly in flesh, the Spirit visibly at Pentecost and invisibly into every soul in grace, the whole Trinity indwelling as in a temple, the newness all on the creature's side.`,
  lessons: [
    {
      id: `t4-l1`,
      num: `I`,
      title: `What Was Revealed`,
      latin: `Trinitas in Unitate`,
      tag: `Trinitas in Unitate`,
      fin: {
        tag: `Trinitas in Unitate`,
        heading: `One what. Three whos. Said exactly.`,
        body: `A man pays taxes and his human nature pays nothing, because natures do not act; the ones who have them act. The course spent a week on that grammar once, and here is why. The central sentence of the faith counts two different things at once: one God, naming the single undivided what; three Persons, naming the Father, the Son, and the Holy Ghost, each a who possessing that what whole. The Athanasian Creed holds the sentence with two fences: neither confounding the Persons, as if the three were one who wearing masks, nor dividing the Substance, as if the one what were split three ways or shared like a family name. Reason did not climb here and cannot; creation shows the one essence working, not the three Persons facing one another. The datum is received. The grammar to hold it was already yours.`,
      },
      questions: [
        {
          id: `t4-l1-q1`,
          type: "mcq",
          stem: `A man named John pays taxes. His human nature pays nothing: natures do not sign, the who that has the nature signs. Now the faith's central sentence, counted with that grammar: one God, three Persons. What exactly is being counted?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Three divine beings, one in the way a family shares its name and its house.",
                "feedback": "A family shares a nature the way three men share humanity: specifically, each with his own copy. That arithmetic yields three gods wearing one surname, and the Creed will slam that door by name: not three Gods, but one God. The unity revealed is not membership. It is numerically one what, possessed whole by each who, which no family has ever managed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "One divine Person, presented to us under three successive names and faces.",
                "feedback": "One who, three costumes: the tidy answer, and the Creed's first fence stands exactly against it. There is one Person of the Father, another of the Son, another of the Holy Ghost: three real whos, not three appearances of one. A later lesson will show what this tidiness costs: a Son with no one to pray to, and a Father crucified. The names are not masks. They are answers to Who."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "One what, three whos: one undivided divine essence, three Persons each possessing it whole.",
                "feedback": "Respondeo: the sentence counts two registers without confusing them, and only a learner who owns the who/what distinction can even parse it. What is God? One essence, simple and undivided. Who is God? Father, Son, Holy Ghost: three. The taxes were the tuition; this is what the distinction was for. Nothing in the dogma asks one to equal three in the same respect, which is why the mystery is above arithmetic, never against it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "One divine whole, three parts: as one triangle is one figure with three sides.",
                "feedback": "The triangle is honest geometry and dishonest theology: sides are parts, and parts compose, and what is composed depends on its composition. The philosophy course closed that door from the far side: God is His own existence, simple, uncomposed. Each Person is not a third of God but wholly God, which no side of any triangle ever was of its figure. The shamrock and the triangle retire together."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t4-l1-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>And the Catholic Faith is this, that we worship one God in Trinity and Trinity in Unity. Neither confounding the Persons, nor dividing the Substance. For there is one Person of the Father, another of the Son, and another of the Holy Ghost. But the Godhead of the Father, of the Son and of the Holy Ghost is all One, the Glory Equal, the Majesty Co-Eternal.</p><div class="cr-cite">Athanasian Creed (Quicunque vult) &middot; DS 75 &middot; trans. Marquess of Bute &middot; verified against New Advent</div></div>Two prohibitions, one sentence apart. What is each fence built against?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Confounding collapses the three whos into one; dividing splits the one what into three.",
                "feedback": "Respondeo: the Creed's architecture is a ridge with a ditch on either side. Confound the Persons and the Father, Son, and Ghost become one who under three names: the whole left ditch. Divide the Substance and the one Godhead becomes three shares or three ranks: the whole right ditch. Every Trinitarian heresy in history is one of these two falls, which is why a creed of fences, written before most of them, answers them all in advance."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Confounding mixes the divine with the created; dividing separates God from His works.",
                "feedback": "That fence is real but it guards a different field: Creator and creature, the wall around all theology. This creed's two prohibitions both operate inside the Godhead: Persons confounded with each other, Substance divided against itself. Read the next sentence as the key: one Person of the Father, another of the Son. The whole drama here is internal to the one God, which is precisely what makes it the strangest sentence ever guarded."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Confounding treats the mystery carelessly; dividing analyzes what should be adored whole.",
                "feedback": "This reads the fences as manners, a caution against sloppiness and a caution against curiosity. But the Creed is not policing tone; it is naming two specific wrong doctrines with technical precision: person-collapse and substance-split. The proof is what follows: paragraph after paragraph of exact analysis, uncreate, incomprehensible, eternal, counted and recounted. A document that forbade analysis would not conduct this much of it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Both fences guard worship: confounding disorders prayer, dividing multiplies its objects.",
                "feedback": "Downstream truths: prayer does go wrong when doctrine does, and the Creed does open with worship. But the fences themselves are metaphysical before they are liturgical: they state what God is and is not, and right worship follows. Reverse the order and doctrine becomes a servant of devotional convenience, which is how one Person in three masks got popular in the first place: it is so very easy to pray to."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t4-l1-q3`,
          type: "mcq",
          stem: `The Creed presses the count deliberately: the Father is God, the Son is God, the Holy Ghost is God; and yet not three Gods, but one God. What keeps the third sentence from contradicting the first three?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Reverent arithmetic: the Church rounds the three down to honor the divine unity.",
                "feedback": "Councils do not round. If the three were really three Gods, saying one would be false, not reverent; the Creed is claiming truth, not performing modesty. The resolution is not in softening either count but in noticing what each counts. Three answers to Who; one answer to What. Nothing was rounded. Two different questions were answered exactly."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The word God is equivocal: it means the essence once and the Persons another time.",
                "feedback": "Close to the machinery, wrong about the word. God is not equivocal in the Creed, said in unrelated senses like bank of a river and bank on a corner; it names the one divine essence every time. The precision is in the subjects, not a shifting predicate: each who is the one what entirely. Make God equivocal and the sentence is saved by making it meaningless, which is a rescue the dogma declines."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Mystery suspends logic here: the faithful affirm both counts without asking how.",
                "feedback": "The course has never sold that, and the Creed does not either: it resolves the counts in its own next lines, as we are compelled to acknowledge every Person by Himself to be God, so we are forbidden to say three Gods. Compelled and forbidden are logic's own words. The mystery is above reason because the essence is unseen, not because the sentence is incoherent. Faith holds exactly; it does not hold its nose."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "God names a nature that is numerically one, not a species with three members.",
                "feedback": "Respondeo: three men are three humans because humanity multiplies in its instances, a copy apiece. The divine essence does not multiply: each Person is the numerically same what, whole and undivided. So counting whos never adds gods, the way counting three men adds humans. The Creed's grammar rests on exactly this: divinity is not a kind with members but one indivisible act of being, possessed thrice over without being had in thirds."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t4-l1-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "One cannot be three. The doctrine of the Trinity asks faith to swallow a flat contradiction and call the swallowing humility."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Mystery means exactly this: holding contradictions the mind cannot resolve.",
                "feedback": "That definition would end theology in its first hour, and this course with it. A contradiction is not a deep truth; it is no truth, and God is not honored by nonsense affirmed loudly. The tradition's word mystery names what exceeds our mode of knowing while remaining perfectly consistent in itself. The Trinity outruns the mind. It does not insult it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. But the contradiction is harmless, since numbers are only metaphors in theology.",
                "feedback": "The Creed counts with a straight face: one Person of the Father, another of the Son, another of the Holy Ghost; not three Gods. If the numbers were metaphors, the anathemas guarding them would be poetry with a sword. Three is literally three; one is literally one. What saves the sentence is not softer numbers but different questions being answered, and that is the next option's business."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Both counts describe the essence, taken first absolutely and then relatively.",
                "feedback": "The right verdict holding the wrong map. Three is never said of the essence in any mode, absolute or relative; the essence is one without qualification, and saying it three ways is the substance-dividing the Creed forbids. Three counts Persons. The repair matters: put both numbers on the essence and you have rebuilt the contradiction inside the defense of the dogma."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. One counts the what, three counts the whos; contradiction requires the same respect.",
                "feedback": "Respondeo: a contradiction affirms and denies the same thing in the same respect. Here nothing is: God is one in essence, three in Persons, and essence and Person answer different questions. The mind cannot see how one essence subsists thrice, and no one promised it would; that is the mystery's altitude, not its incoherence. The philosopher's oldest rule, in the same respect, turns out to be the Creed's bodyguard."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t4-l1-q5`,
          type: "mcq",
          stem: `Eighteen modules of natural reason reached one God: subsistent being, pure act. Could reason, pressed harder, have reached three Persons?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: perfect love requires a beloved, so the divine goodness demands plurality.",
                "feedback": "Richard of St. Victor's argument, stated at strength and honored by name: joyous possession of good requires partnership. Aquinas answers it gently: that holds for one whose goodness is imperfect, who needs another to be happy. God's beatitude needs nothing, and creation itself already displays infinite goodness communicating. The argument is beautiful, edifying, and short of demonstration: it confirms believers and convicts no one."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No: reason reads God from creatures, and creation is the undivided essence's work.",
                "feedback": "Respondeo: ST I q.32 a.1, the boundary drawn by Aquinas himself: creatures lead to God as effects to their cause, and the creative power belongs to the unity of the essence, common to the Three. So the world carries no fingerprints of the Persons as distinct, and reason, reading effects, can never spell Father, Son, and Ghost from them. Whoever tries to prove the Trinity, Thomas adds dryly, derogates from faith, and hands unbelievers a laugh at its expense."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes in outline: the mind's own word and love display the Trinity to introspection.",
                "feedback": "Augustine's psychological image, and this module will lean on it hard, so the correction must be exact: the image confirms the doctrine to those who already believe; it demonstrates nothing. Aquinas compares such reasons to the astronomers' epicycles: they save the appearances, another theory might too. The mind's word is the best window we have. A window is not a proof, and Augustine himself said faith comes first."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No, because the Trinity is against reason, and proofs work only on reasonable things.",
                "feedback": "The right verdict with a poisoned warrant. The Trinity is not against reason; the last question just retired that charge. It is above reason's reach for a stated cause: effects reveal their cause's existence and unity, not its inner processions. Say against and you concede to every scoffer that faith believes nonsense. Say above and you have marked, precisely, where demonstration ends and authority begins."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t4-l1-q6`,
          type: "fill_blank",
          stem: `The Creed's architecture, exact. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">We worship one God in <span class="fb-blank" data-blank="b1">______</span>, and Trinity in <span class="fb-blank" data-blank="b2">______</span>; neither <span class="fb-blank" data-blank="b3">______</span> the Persons, nor <span class="fb-blank" data-blank="b4">______</span> the Substance.</span>`,
          latin_tag: `Trinitas in Unitate`,
          doctrine_line: `One God in Trinity and Trinity in Unity: neither confounding the Persons, nor dividing the Substance.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "Trinity"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "Unity"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "confounding"
                ],
                "case_sensitive": false
              },
              {
                "id": "b4",
                "correct_answers": [
                  "dividing"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "Trinity",
              "Unity",
              "confounding",
              "dividing",
              "blending",
              "multiplying",
              "Majesty",
              "Godhead"
            ],
            "feedback": {
              "all_correct": "Locked, in the Creed's own balance: one God in Trinity, Trinity in Unity, the Persons unconfounded, the Substance undivided. Every Trinitarian error in this module's fifth lesson dies on one of these four words. Sung at Prime on Sundays for a thousand years, and not a syllable to spare.",
              "partial_correct": "Some blanks resisted. The sentence is a chiasm: one God in Trinity, and Trinity in Unity, each half guarding the other. Then the two fences in order: the Persons are not confounded into one who; the Substance is not divided into three whats. Set it exactly; the whole module stands on these four words."
            }
          },
        }
      ],
    },
    {
      id: `t4-l2`,
      num: `II`,
      title: `Processions`,
      latin: `processiones`,
      tag: `processiones`,
      fin: {
        tag: `processiones`,
        heading: `What proceeds without leaving.`,
        body: `Think of the sea, and something forms in you that is not the sea and never leaves you: an inner word, conceived whole, remaining within. That homely fact, learned in the modules on knowledge, is the least inadequate window creation offers onto the generation of the Son: a procession by way of intellect, issuing a Word who remains in the Speaker, perfectly one with Him because in God the act of understanding is the very substance of the One who understands. And where there is a word there is a movement toward what it presents: from Father and Word together, as from one principle, proceeds Love, the Holy Ghost, by way of will. Two immanent operations, two processions, and no third, since a spirit's acts that remain within are knowing and loving, and there the fountain rests: one perfect Word, one perfect Love, His fecundity complete.`,
      },
      questions: [
        {
          id: `t4-l2-q1`,
          type: "mcq",
          stem: `You think of the sea, and something forms within you: a conception of it, whole, silent, going nowhere. Scripture says the Son proceeds from the Father. On which model of proceeding does the faith read that sentence?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "As the inner word proceeds from the mind: issuing within, never departing.",
                "feedback": "Respondeo: Aquinas's own resolution: procession in God is understood by way of an intelligible emanation, the word proceeding from the speaker yet remaining in him. Bodily processions depart; this one issues and remains, which is the only kind of proceeding a simple God can house. The mind you have been studying since the knowledge modules was, all along, the creature's best window on the fountain of the Godhead."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "As an effect proceeds from its cause: the first and highest thing God produced.",
                "feedback": "Stated seriously, for a priest of Alexandria staked his soul on it: the Son as first creature, made before the worlds. Aquinas names him in the article itself and answers from Scripture: the Son is true God, and temples are not built to creatures. Read procession as production and the Godhead loses the Son in the act of gaining a masterpiece. The fifth lesson will hear this voice at full strength, dated and condemned."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "As heat proceeds from a fire: the one God reaching outward under a second name.",
                "feedback": "The other misreading Aquinas stages: procession as the cause extending toward its effects, so that Father names God apart and Son names God reaching the world. That is one who under working titles, the first fence of the Creed knocked flat. The Lord's own grammar resists: the Son cannot of Himself do anything He sees not the Father doing; someone is speaking to someone. Heat has no such conversations with its fire."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "As a spoken word proceeds from a speaker: sent out, distinct, gone into the air.",
                "feedback": "One clause too far. The spoken word does proceed from the speaker, but by departing: sound leaves, fades, and is over. The model the faith needs is one step inward: the word of the heart, which the voice merely signifies. That word issues truly and remains truly, and the more perfectly it proceeds, Aquinas says, the more it is one with its source. Departure is the one feature the analogy must lose at the door."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t4-l2-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Whenever we understand, by the very fact of understanding there proceeds something within us, which is a conception of the object understood, a conception issuing from our intellectual power and proceeding from our knowledge of that object... Procession, therefore, is not to be understood from what it is in bodies, either according to local movement or by way of a cause proceeding forth to its exterior effect... Rather it is to be understood by way of an intelligible emanation, for example, of the intelligible word which proceeds from the speaker, yet remains in him. In that sense the Catholic Faith understands procession as existing in God.</p><div class="cr-cite">ST I, q. 27, a. 1, co. &middot; trans. Fathers of the English Dominican Province &middot; verified against New Advent</div></div>Why must the model come from mind and not from bodies?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because minds are nobler, and God deserves comparisons drawn from the top shelf.",
                "feedback": "Aquinas does say we should understand God from the highest creatures, but nobility is the corollary, not the engine. The argument is structural: what kind of proceeding can exist inside a simple God at all? Only the kind that does not exit. A nobler image that still departed would fail identically. The top shelf matters because on it, and only on it, procession stays home."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because minds are invisible, and only an invisible model suits an invisible God.",
                "feedback": "Invisibility is shared by magnetism, which would model the processions catastrophically: fields extend outside their source. The passage's criterion is not what cannot be seen but what does not leave: the act remaining in the agent. An invisible departure is still a departure. The word of the heart qualifies not by hiding but by staying, one with the very power that speaks it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because bodily procession departs its source; the inner word issues and remains within.",
                "feedback": "Respondeo: the whole hinge. Every bodily going-forth separates: the arrow from the bow, the heat from the flame, the son from the father's house. If the Son proceeded so, He would be outside God, either creature or second god, and both roads are ditches. The intelligible emanation is the one procession creation exhibits where what proceeds stays within its principle, and, Aquinas adds, the more perfect the proceeding, the more perfect the unity. In God, that unity is total."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because Scripture calls the Son the Word, and exegesis binds theology to that image.",
                "feedback": "John's prologue does hand the tradition its noun, and the fittingness is no accident. But Aquinas's argument in this passage runs on metaphysics, not citation: he shows why nothing bodily could work, then finds the one creaturely act that could. Scripture names the Word; the analysis shows why that name, of all names, was the load-bearing one. Revelation and reason arriving at one image is the fittingness, not a proof-text."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t4-l2-q3`,
          type: "mcq",
          stem: `The mind's word answers for the Son. Aquinas then finds a second procession and stops at two. Why exactly two, and why the stop?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Revelation names two and no more; counting operations is reading in.",
                "feedback": "Revelation does name two, and theology could rest there; Aquinas does not, because sacra doctrina shows the fittingness of what it receives. His account is structural: the immanent acts of a spiritual nature are exactly two, so the processions are exactly two. The count is not read into the data; it is the data, found intelligible. Faith seeking understanding is this course's whole method, one floor up."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A spirit's immanent acts are two, knowing and loving; so the processions are two.",
                "feedback": "Respondeo: procession in God rides only on actions that remain within the agent, and in an intellectual nature those are the act of understanding and the act of will. The Word proceeds by the first; Love, the Holy Ghost, proceeds by the second, as the beloved is present in the lover. Power gives no third, for power points outward to effects; sensation gives none, for spirits have no senses. Two operations, two processions, and the fountain is complete."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Two is the least plurality, and God multiplies nothing beyond necessity.",
                "feedback": "A razor borrowed from the wrong shop. Economy governs hypotheses, not the Godhead; and if parsimony ruled, one procession would beat two, and none would beat one. The count is not minimized but derived: from the kinds of act that remain within a spirit. Aquinas even entertains the multiplication worry, whether word begets word forever, and answers it: one simple act of understanding, one perfect Word. The stop is structural, not thrifty."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Goodness diffuses itself twice, once as truth and once as gift, exhausting the essence.",
                "feedback": "Goodness-diffusing language is venerable and Aquinas honors it, but he declines to run the processions on it: goodness belongs to the essence, he answers, and grounds a procession only as the will's object. Nothing exhausts the essence, and truth is not a diffusion. The clean derivation stays with the two immanent operations; the bonum diffusivum line, pressed as machinery, produced Richard's lovely non-proof one lesson ago."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t4-l2-q4`,
          type: "true_false_with_reason",
          stem: `An old slogan, sung in the streets of Alexandria: "If the Son is begotten, there was once when He was not." True or false?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Begetting is an event, and every event has a before.",
                "feedback": "For creatures, exactly so: begetting there is a change, potency stepping into act, with matter and a calendar. That is the first of the two senses of generation Aquinas distinguishes, and the one he strikes from God entirely. What remains is origin without change: living from living, like from like. Keep the creaturely sense and the slogan follows; the whole question is whether it must be kept. It must not."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Otherwise begotten and unbegotten would be empty words, and the Father nothing more.",
                "feedback": "The words are not empty; they mark the realest distinction in the Godhead, origin: the Father from none, the Son from the Father. What they do not mark is a start date. The slogan's force lives entirely on smuggling time into begotten; refuse the smuggling and the Father remains Father, the Son remains Son, and eternity keeps them both. Distinction of origin without priority of age: that is the doctrine's exact shape."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The generation is eternal: the Word is coeval with the Mind that speaks Him.",
                "feedback": "Respondeo: God's act of understanding is His very substance, eternal and complete; the Word proceeding in that act is therefore as eternal as the Speaker. The sun was never without its radiance, said the Fathers; the mind is never without its word once it understands, and God never began to understand. The Psalm's this day, Aquinas notes, is the day of eternity, a present with no yesterday. The slogan was answered with an anathema at Nicaea, and the fifth lesson will read it.<span class=\"condemned\">Arianism &middot; condemned, Council of Nicaea, 325 &middot; DS 125-126</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The Son is begotten timelessly because time began only at creation.",
                "feedback": "True premise, insufficient warrant. Time's creaturehood rules out a calendar before the world, but the slogan would survive in eternity's own grammar: a priority of the Father by nature, the Son dependent like a lesser light. The full answer is not that no clock existed but that generation in God is the eternal issuing of the Word within the eternal act of understanding: no change, no interval, no junior partner. Kill the change, and the when dies with it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t4-l2-q5`,
          type: "mcq",
          stem: `The second procession puzzles the vocabulary: why is the Holy Ghost not a second Son, a brother to the Word?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Reverence reserves sonship for the Word; the titles differ, the processions do not.",
                "feedback": "If the processions did not differ, the Persons would not either: relations ride on origins, and two identical origins would give two indistinguishable Persons, which multiplies nothing. The titles track a real difference in the mode of proceeding, or the next lesson's whole machinery seizes. Reverence is real, but here it follows the metaphysics; it does not substitute for it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Spirit proceeds from two, and what has two principles cannot be a son.",
                "feedback": "The Spirit does proceed from Father and Son as from one principle, and that will matter in a moment; but it is not why He is no Son. A son from two parents is nature's ordinary case. The disqualifier is the mode, not the count: proceeding by way of will is an impulse, not a likeness-issuing, and only likeness-issuing is generation. Fix the mode and the count takes care of itself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Scripture names Him Spirit, and the Church declines to reason past her sources.",
                "feedback": "The Church reasons with her sources, which is this course's charter. Aquinas takes the revealed name and shows its fittingness: spirit names breath, impulse, movement, exactly what proceeding-by-love is like, as begotten names likeness-issuing, exactly what proceeding-by-intellect is like. The names are data; the account of why they fit is theology doing its proper work. Declining to reason is not reverence. It is unemployment."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Generation issues by way of likeness; love proceeds as impulse toward, not image of.",
                "feedback": "Respondeo: q.27 a.4's exact blade. The intellect is actualized by the object's similitude residing in it, so its issue is a likeness, and issuing-a-likeness from a living conjoined principle is generation: hence Word, hence Son. The will is actualized as inclination toward what is loved: its issue is not an image but a leaning, a vital impulse. So He who proceeds as Love is not begotten but breathed: spiration, the tradition's word, breath for the mode of love."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t4-l2-q6`,
          type: "mcq",
          stem: `Florence, defining: the Holy Spirit proceeds from the Father and the Son, who are not two principles but one principle. What is that clause guarding?`,
          latin_tag: `processiones`,
          doctrine_line: `Two processions, within and without departure: the Word by way of intellect, Love by way of will.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The Spirit's unity of origin: one spiration from Father and Word together, undivided.",
                "feedback": "Respondeo: the Word proceeds as the Father's perfect likeness; Love proceeds from the knowing that holds the beloved, so from Father and Son as from one fountain, by one breathing. Florence's own sentence: not two principles of the Holy Spirit, but one principle, as the Trinity is one principle of the creature. The clause forecloses two errors at once: a Spirit from the Father apart from His Word, and a committee of two spirators taking turns."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Father's primacy: the Son joins the spiration by delegation, not by right.",
                "feedback": "Delegation is a category from chanceries, not the Godhead. Whatever the Son has, He has from the Father by generation, including being one principle of the Spirit with Him: from the Father, yes; by commission, no. Florence's principle from a principle names exactly this: received origin, full possession. A delegated spiration would make the Son the Father's instrument, and instruments stand below their wielders. The lesson on missions buries that grammar for good."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Poetry: one principle rounds off a diplomatic formula for two estranged churches.",
                "feedback": "The council was indeed a reunion council, and the formula was indeed the peace's hinge, but read the instrument: believes, professes, and preaches, with anathemas trailing. Churches do not anathematize around a metaphor. One principle is exact metaphysics: numerically one spirative power, possessed by Father and Son in the one essence. The diplomacy was real. The definition was more real, which is why it outlived the diplomacy."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The processions' order: spiration must follow generation in time, Word before Love.",
                "feedback": "Half a truth wearing a clock. There is an order: love proceeds only from the known, so spiration presupposes generation in the order of origin. But in time, nothing: both processions are eternal, and neither waits. Aquinas is careful to say order of nature without priority of duration, the same care that answered Arius one question ago. The Word is not older than the Love. He is only, eternally, its principle with the Father."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t4-l3`,
      num: `III`,
      title: `Relations Are the Persons`,
      latin: `relatio subsistens`,
      tag: `relatio subsistens`,
      fin: {
        tag: `relatio subsistens`,
        heading: `The thinnest reality, standing up.`,
        body: `The day his daughter is born, no new part lodges inside a man, and yet something real is newly true of him: he is a father. Relation, the thinnest kind of being, a real being-toward that adds nothing to what a thing is. Philosophy filed it among the accidents and moved on. Revelation reached past every richer category and picked up exactly this thin one, because it alone distinguishes without dividing. In God the relations of origin are real: paternity, filiation, spiration, procession. They cannot inhere in Him, for nothing inheres in the simple God who is His own existence; so they are the essence itself, subsisting, distinct from one another only where relation opposes relation: begetter to begotten, breather to breathed. And that is what a divine Person is: a subsistent relation. The suppositum learned on a taxpayer turns out to be, in God, a relation standing up. Everything is one, Florence says, where no opposition of relationship interferes; where it interferes, there stand the Three.`,
      },
      questions: [
        {
          id: `t4-l3-q1`,
          type: "mcq",
          stem: `The day his daughter is born, a census of the man's insides finds nothing new: no organ, no quality, no added inch. Yet something real is newly true of him: he is a father. What has philosophy just handed theology?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A warning: what adds nothing real can only be a name, and fatherhood a legal fiction.",
                "feedback": "The nominalist's cut, and it bleeds more than intended: if being-toward is fiction, then debtor, creditor, spouse, and creature are fictions, and the moral world closes. The tradition holds the harder, saner line: relation is real while adding no absolute thing, the minimal reality, a genuine toward. Theology is about to need precisely that minimum. Erase it and the Trinity has nothing left to be distinct by."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A category that is fully real while adding nothing absolute: pure being-toward.",
                "feedback": "Respondeo: relation alone among the categories consists wholly in reference to another: the man is really a father, his daughter really his, and nothing absolute grew in either. That thinness looked like a defect in the philosophy course. In this module it is the one qualification that matters: a reality that can distinguish without dividing, multiply whos without multiplying whats. Revelation, needing exactly that, reached past substance and quality and took the thinnest thing on the shelf."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "An analogy of grace: fatherhood images God's care without metaphysical weight.",
                "feedback": "Devotionally true and categorically idle: the lesson is not gathering warm images but load-bearing structure. The Creed needs paternity to be real in God, really distinguishing the Father from the Son He begets, or the Persons collapse into the first fence's rubble. An image without metaphysical weight could not hold that; the real relation can. The warmth survives, but it rides on ontology, not instead of it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A proof that every relation requires two substances, so God must contain three.",
                "feedback": "Backwards at the decisive joint. Creaturely relations do run between substances, but importing that rule into God would give three divine substances, tritheism by geometry. The doctrine runs the other way: one substance, within which relations of origin really oppose one another. The relations do not presuppose the Three as separate things; the Three are the relations, subsisting. That inversion is this lesson's whole work, one question down."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t4-l3-q2`,
          type: "mcq",
          stem: `Bookkeeping, taxonomy first. Two processions yield four real relations: paternity (Father to Son), filiation (Son to Father), spiration (Father and Son to the Spirit), procession (the Spirit to both). Four relations; the Creed counts three Persons. Where did the fourth go?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Absorbed: spiration folds into paternity, as acts of one fatherly initiative.",
                "feedback": "Fold spiration into paternity and the Spirit proceeds from the Father precisely as begotten, a second Son, which the second lesson closed against. The two relations remain really distinct notions: begetting issues a likeness, breathing issues Love. What spiration lacks is not reality but opposition to either of its holders, and only opposition makes Persons. Keep the count honest: four relations, one of them shared."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Only three of the four are real; active spiration is a manner of speaking.",
                "feedback": "All four are real, or the Spirit proceeds from nothing real. The asymmetry is elsewhere: reality is not the filter, opposition is. Spiration is as real as paternity; what it lacks is a relative opponent in the Father and the Son who share it. Demote it to a figure of speech and the procession of Love loses its principle. The doctrine needs all four standing, and exactly one of them shared."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Persons rise only from opposed relations; spiration opposes neither Father nor Son.",
                "feedback": "Respondeo: distinction in God rides on relative opposition alone: begetter cannot be the begotten he begets; breather cannot be the breathed. Paternity, filiation, and procession each oppose another relation, and there stand the Three. Active spiration opposes only procession, not paternity or filiation, so Father and Son possess it together without becoming a fourth who. Four real relations, three oppositions, three Persons: the arithmetic of the Godhead, exact."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The fourth awaits us: the saints joined to God complete the count in glory.",
                "feedback": "A beautiful confusion of registers: the creature's union with God is by grace and charity, a likeness freely given, never a relation of origin inside the Godhead. Add the blessed to the Trinity's bookkeeping and the Creator-creature line, the deepest line in the course, is erased at its deepest point. Lateran IV met exactly this in Joachim's collective unity, and the sixth question holds the receipt. The Godhead does not take applications."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t4-l3-q3`,
          type: "precision_check",
          stem: `A claim to audit with the lesson's instruments: <em>"The three Persons are real additions to the divine essence, inhering in it the way accidents inhere in a substance."</em> Where exactly does it break?`,
          payload: {
            "statement": "The three Persons are real additions to the divine essence, inhering in it the way accidents inhere in a substance.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At real: the Persons are distinctions of our thought, projected onto the simple God.",
                "feedback": "This repairs the sentence by demolishing the dogma: relations of reason distinguish nothing outside the mind, and the Father would differ from the Son only in our grammar, which is the first fence fallen again. The relations are real, really distinguishing the Persons. The break is not in real. It is in the borrowed physics of inherence one word later."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At additions and inhering: nothing inheres in God; the relations are the essence, subsisting.",
                "feedback": "Respondeo: caught at the joint. God is His own existence, simple, receiving nothing: the philosophy course closed the door on which inherence knocks. So the real relations do not lodge in the essence as accidents in a subject; each is really identical with the essence itself, subsisting, distinct only from its relative opposite. Paternity does not sit in God. Paternity, subsisting, is the Father. The thinnest category, asked to stand, stands as a Person."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At three: relations come in pairs, so the count should be four or two.",
                "feedback": "The count is not the fracture; the previous question audited it and it holds: four real relations, three of them mutually opposed, three Persons. Whoever fixes three here has repaired sound masonry while the actual crack, the inherence model, runs on unattended. In a precision check, the skill is locating the break, not improving the claim's arithmetic."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At substance: God transcends substance, so no comparison with substance can begin.",
                "feedback": "Too much demolition. God is not a substance in the categories' sense, true; but analogy still speaks, and the tradition itself says one substance, one essence, in creeds this module has already read. Strike every substance-word and Nicaea's consubstantial goes mute. The claim's failure is specific: it makes the Persons inhere. Answer that, and the word substance can stay in the room where the councils put it."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t4-l3-q4`,
          type: "mcq",
          stem: `The philosophy course defined a person as a complete individual substance of a rational nature: the who that owns the what. Apply it in God, where the who turns out to be a subsistent relation. What survives the promotion?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Everything load-bearing: a distinct who, wholly possessing the divine what.",
                "feedback": "Respondeo: the definition's soul was never separateness; it was distinct subsistence in a rational nature: someone, not something, owning a nature whole. In God that someone is a relation subsisting, distinct by opposition rather than by matter or parts, possessing the entire essence rather than a share. The Father is a who; the Son is another who; each is the one what entirely. The taxpayer's grammar holds at the summit. Only the creaturely packaging fell away."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Little: person is said of God and creatures by courtesy, two words in one spelling.",
                "feedback": "That is equivocation wearing humility, and the course's analogy module exists to refuse it. Said by courtesy, the word would tell us nothing; said univocally, it would drag creaturely separateness into God. It is said analogically: the proper sense of distinct rational subsistence holds, purified of matter and division. Between Creator and creature the unlikeness is always greater, Lateran IV reminds; greater unlikeness is not unlikeness entire."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The count survives, but the Persons become three centers of consciousness in dialogue.",
                "feedback": "The modern picture, stated seriously since serious people hold it: three subjectivities facing one another, a divine society. But three centers of consciousness are three intellects in act, and in God intellect is the one essence; the picture buys vividness at the price of the unity, tritheism with a psychology degree. The Persons converse in Scripture because Persons truly distinct can be so shown, not because the Godhead contains three minds."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The name survives; the reality is one Person relating to Himself three ways.",
                "feedback": "Self-relation distinguishes nothing: a man who is his own debtor owes nothing, and a God who is His own Father begets no one. Real distinction needs real opposition, and opposition needs two terms that are not each other. One Person in three self-directed postures is the first fence again, third costume change. The relations are subsistent precisely so that the whos are three and the self-relating rescue is unnecessary."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t4-l3-q5`,
          type: "true_false_with_reason",
          stem: `Florence's rule: in God everything is one where no opposition of relationship interferes. Now the test: "The Son possesses every divine perfection the Father possesses, identically and entirely, except that the Son does not beget." True or false?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Only opposed relations distinguish; in all else the Two are one and the same.",
                "feedback": "Respondeo: Florence's rule, applied without flinching: power, wisdom, goodness, eternity, the very act of being, numerically one in Father and Son; the sole daylight between them is the opposition of begetter and begotten. So the Son is almighty with the Father's own almightiness, not a copy of it. The rule even quietly grounds the last lesson's Filioque: spiration, opposing neither, is one in both. Learn the rule and the whole grammar of the Godhead fits in a sentence."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The Father shares each perfection with the Son as a perfect and total gift.",
                "feedback": "The warmth is right and one word wrecks it: shares. What is shared is portioned or at least doubled; what the Son has is the numerically same essence, wholly, by eternal generation: given, yes, as Lateran IV says the Father imparted His substance without dividing or transferring it, but given as identity, not distribution. Gift language survives in the tradition under strict escort. Unescorted, it builds two treasuries, and the second fence falls."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The Son holds the perfections in a lesser degree, as befits one who receives.",
                "feedback": "Receiving entails lesser only where what is received is a share, and no sharing happens in eternal generation: the Son receives the undivided essence whole. Grade the Persons and Florence has already answered: the council condemns any who place grades or inequality in the Trinity, in the same breath that names the Arians. None is afore or after, none greater or less, sang the Creed in lesson one.<span class=\"condemned\">grades or inequality in the Trinity &middot; condemned, Council of Florence, Cantate Domino, 1442 &middot; DS 1332</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Each Person keeps proper perfections: power the Father's, wisdom the Son's.",
                "feedback": "That would divide the treasury three ways, and the treasury is the one simple essence: divide it and no Person is fully God. The familiar assignments, power to the Father, wisdom to the Son, are real usage but a different device, one the next lesson names and disarms: common perfections spoken toward one Person for our teaching, never owned by Him alone. What is proper to each Person is his relation. Everything else is everyone's, or no one's."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t4-l3-q6`,
          type: "mcq",
          stem: `Lateran IV, 1215, against Abbot Joachim: the council confesses one supreme reality which truly is Father, Son, and Holy Ghost, and adds a strange clause: that reality neither begets, nor is begotten, nor proceeds; it is the Father who begets, the Son who is begotten. What was worth a conciliar chapter?`,
          latin_tag: `relatio subsistens`,
          doctrine_line: `In God the real relations of origin do not inhere in the essence; they are the essence, subsisting: and a subsistent relation is a Person.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A grammar lesson: councils tidy theological usage as academies tidy dictionaries.",
                "feedback": "The chapter ends with let him be repressed by all as a heretic, which is strong copy-editing. The usage protected is load-bearing: let the essence beget and either it stands prior to the Father as a fourth thing that acts, or essence and Person collapse and the count fails. Councils reach for grammar precisely when a soul-shaped error hides in a verb. This one did: the subject of begets decides whether God is three or four."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Persons' equality: Joachim ranked the Son beneath the Father's majesty.",
                "feedback": "Wrong abbot's error: ranking the Son is the Arian fall, met at Nicaea and re-condemned wherever it resurfaces. Joachim's failure ran the other axis: not grading the Persons but loosening their unity into a collective, and blaming Peter Lombard for a quaternity along the way. The council cleared Lombard, kept the essence off the verb beget, and left equality exactly where the Creed had nailed it. Diagnose before condemning: the two ditches are different falls."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The unity's kind: God's oneness is identity of essence, not a collective of three.",
                "feedback": "Respondeo: Joachim read the Three as one the way many faithful are one Church: a unity of collection and likeness. The council answered with the realest sentence in the genre: each of the three Persons is that supreme reality, substance, essence, or divine nature; one in identity, not in assembly. And since only a who begets, the essence common to Three does none of the begetting: the Father begets, the Son is begotten, the Spirit proceeds. Team-of-three theology died there, with a heresy clause for anyone reviving it.<span class=\"condemned\">Joachim of Fiore's collective unity &middot; condemned, Lateran IV, 1215 &middot; DS 803-806</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Divine simplicity: the council forbade all real distinction inside the Godhead.",
                "feedback": "One clause too greedy. Simplicity stands, and the chapter leans on it: the Father's substance is indivisible, imparted without diminution. But the same chapter insists on the real distinction it does allow: begetter, begotten, proceeding, Persons truly distinct in the one reality. Forbid all real distinction and the council would have canonized the first fence's error in the act of guarding the second. The dogma lives exactly in the room this option closes."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t4-l4`,
      num: `IV`,
      title: `The Grammar of Three`,
      latin: `essentiale et notionale`,
      tag: `essentiale et notionale`,
      fin: {
        tag: `essentiale et notionale`,
        heading: `Three questions, sorted forever.`,
        body: `Aquinas reduces the whole discipline to three questions. What is God? The essence: one, simple, almighty, eternal, and every essential term with it, said equally of Father, Son, and Holy Ghost. Who is God? Three answers, each a Person, named by the relations of origin: Father, Son, Holy Ghost, with the notional verbs that belong to whos alone: begets, is begotten, proceeds. Whereby do the Three differ? By opposed relations, and by nothing else. Everything the Church says of God sorts into that grammar, and the famous appropriations, power to the Father, wisdom to the Son, goodness to the Spirit, are teaching devices inside it: common perfections spoken toward one Person for our learning, never private property. The works of God outside the Godhead are one act of the Three, one principle, as Florence says; only the missions will show a single Person taking a term in flesh or in the soul. Learn the grammar and no sentence of the liturgy will ever ambush you.`,
      },
      questions: [
        {
          id: `t4-l4-q1`,
          type: "distinction_application",
          stem: `The sorting rule, fixed. <em>Essential terms</em> name the one what and are said equally of all three Persons: God, eternal, almighty. <em>Notional terms</em> name a who by relation of origin: Father, begets, proceeds. Classify: <em>Almighty</em>.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Essential: almightiness belongs to the one essence, said equally of the Three.",
                "feedback": "Respondeo: power belongs to the what, so the Father is almighty, the Son almighty, the Holy Ghost almighty, and yet not three Almighties but one Almighty: the Creed ran this exact drill in lesson one. The classifying skill is the module's spine: before parsing any sentence about God, ask whether its predicate answers What or Who. Almighty answers What. It never distinguishes a Person, which is why all three own it identically."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Notional: almighty names the Father's role as source and ruler of all.",
                "feedback": "The pull is real: the Creed's first article says Father almighty, and the ear welds the two words. But test with the rule: can the Son be called almighty? The Creed itself says yes, emphatically, three times over. A notional term can never migrate like that; the Son cannot be called Father. Almighty travels to all three, so it is essential. The welding in the ear is appropriation at work, and a later question disarms it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Both at once: essential in substance, notional in emphasis and address.",
                "feedback": "A diplomatic answer to a question that forbids diplomacy: the registers are exclusive by construction, since one names the what and the other a who. What this option gropes toward has a proper name, appropriation: an essential term spoken toward one Person for teaching's sake. That is not a third register; it is the first register, aimed. Keep the taxonomy clean and the aiming becomes visible instead of confusing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither: almighty is a creature-facing title, meaningful only about the world.",
                "feedback": "Power is indeed named from effects, the philosophy course said as much; but named-from-creatures does not mean about-creatures-only. Almightiness is true of God eternally, world or no world, as the essence's own infinite capability. File it as creature-facing and God grows a new attribute at creation, which simplicity forbids. It is essential, eternal, and one: the effects taught us the word, not the reality."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t4-l4-q2`,
          type: "match_pair",
          stem: `Aquinas's three questions and two hard sentences. Match each item to its verdict.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "What is God?"
              },
              {
                "id": "L2",
                "text": "Who is God?"
              },
              {
                "id": "L3",
                "text": "Whereby do the Three differ?"
              },
              {
                "id": "L4",
                "text": "\"The divine essence begets\""
              },
              {
                "id": "L5",
                "text": "\"The Son is what the Father is\""
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "one answer: the essence, simple and undivided"
              },
              {
                "id": "R2",
                "text": "three answers: Father, Son, Holy Ghost"
              },
              {
                "id": "R3",
                "text": "by opposed relations of origin, and by nothing else"
              },
              {
                "id": "R4",
                "text": "false: only a who begets; Lateran IV against Joachim"
              },
              {
                "id": "R5",
                "text": "true: consubstantial, the numerically same essence"
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
              "all_correct": "The grammar, sorted: What takes one answer, Who takes three, Whereby takes only opposition. And the two test sentences fall exactly where the councils put them: the essence does no begetting, and the Son is everything the Father is except Father. Aquinas says the abstract answers Whereby, the concrete answers Who: paternity is that whereby the Father is Father. Keep the three questions distinct and every heresy in the next lesson becomes a filing error you can name.",
              "partial_correct": "Some pairs resisted. Run the three questions in order: What is God gets the essence, one and simple; Who is God gets the three Persons; Whereby they differ gets opposed relations alone. Then the tests: begets is a notional verb, so no essence may govern it, per Lateran IV; and what the Father is, the Son is, per consubstantiality. The grammar is small. It carries the whole dogma."
            }
          },
        },
        {
          id: `t4-l4-q3`,
          type: "mcq",
          stem: `The Nicene Creed sings: God from God, Light from Light, true God from true God. Parse it with the lesson's grammar: what do those repetitions actually assert?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The essence proceeds from itself, eternally self-giving in a circle of light.",
                "feedback": "The essence proceeds from nothing, itself included: self-origination is incoherence, and essence-origination is Joachim's verb error with better lighting. From marks relation between whos, never a loop in the what. The Creed's poetry is strict: someone from someone. Read it as the essence cycling and the previous lesson's council chapter files its objection within the hour."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A courtesy of style: liturgical repetition intensifies devotion without adding doctrine.",
                "feedback": "Every phrase in that creed was purchased at Nicaea against live denials, and this triplet is the receipt for the most expensive fight of all: the from concedes real origin to the Arians' delight, then true God from true God takes back everything they wanted it to mean. Liturgy does intensify; this line also defines. The Church sings her metaphysics precisely so the faithful memorize their armor."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The Son is a lesser light kindled from the greater, as lamp is lit from lamp.",
                "feedback": "The lamp image is venerable, and the Fathers used it for the sharing of undiminished light; but lesser is exactly what the line exists to forbid. Light from Light was chosen because radiance is coeval and cosubstantial with its source, not junior to it. Read a dimming into the from and Florence's condemnation of grades answers from lesson three. Origin, in God, ranks no one."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A who from a who, each wholly the one what: origin without inequality.",
                "feedback": "Respondeo: every from in the triplet relates Persons: the Son from the Father, God naming each concretely as the essence subsisting in a who. So the line asserts real origin, notional register, and identical divinity, essential register, in six words: the whole grammar of this lesson set to music. The repetitions hammer because each noun carries the full essence: God, Light, true God, and each from carries only relation. Nothing dims in transit."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t4-l4-q4`,
          type: "mcq",
          stem: `The tradition constantly says: power to the Father, wisdom to the Son, goodness to the Holy Ghost. Lesson three proved no Person privately owns any of these. What, then, is the tradition doing?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Appropriating: speaking a common perfection toward one Person, for our learning.",
                "feedback": "Respondeo: appropriation, the device named at last: essential attributes, owned by the Three identically, are spoken toward the Person whose relational character they best display: power toward the Father as source, wisdom toward the Son as Word, goodness toward the Spirit as Love. The likeness teaches; the ownership never moves. Aquinas notes the philosophers themselves glimpsed the appropriated triad while the Persons stayed dark to them: the device is a lamp for us, not a ledger in God."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Dividing labor: each Person contributes His specialty to every common work.",
                "feedback": "A committee Godhead: the Father supplying horsepower, the Son the blueprints, the Spirit the goodwill. But the works of God outside are one act of the one power, which is the one essence; contributions cannot divide where nothing divides. The specialty picture is tritheism in overalls, and Florence's one principle of the creature stands against it. The next question drives that nail to the head."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Correcting itself: earlier ages assigned properties that later precision withdrew.",
                "feedback": "There was no retraction, because there was no error: the appropriating texts and the precision texts are the same authors on the same pages, Augustine and Aquinas doing both in one breath. The tradition never believed the Son owned wisdom privately; it deliberately spoke wisdom toward Him because He proceeds as Word. A device used knowingly for centuries is not a mistake surviving. It is pedagogy, and this course of all places should salute it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Conceding mystery: the assignments are pious guesses where knowledge gives out.",
                "feedback": "Appropriation is not a guess; it is a mapped correspondence with stated warrants: power fits the Father because He is principle without principle, wisdom the Son because He proceeds by way of intellect, goodness the Spirit because He proceeds as Love. Each fit is argued from the processions, which are known by faith, not guessed. Mystery marks where comprehension ends, not where the Church starts improvising. She has never improvised less than here."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t4-l4-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "The Father alone created the world; the Son and the Spirit entered later, at Bethlehem and Pentecost."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The Creed itself assigns creation to the Father almighty, maker of all things.",
                "feedback": "The Creed speaks toward the Father what the Three do as one: appropriation, the device this lesson just named, aiming creation at the principle without principle. The same Creed calls the Son Him by whom all things were made, and Scripture gives the Spirit brooding over the waters. Read the first article as private ownership and the second article contradicts it within ten lines. Creeds do not contradict themselves. Readers without the grammar do."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Origin orders the working: the Father initiates, the others assist in season.",
                "feedback": "Origin does order the working, but as one operation flowing through the order of Persons, the Father through the Son in the Spirit, never as initiative and assistance taking turns on a calendar. Assistance grades the Persons, and grading died at Florence; in season puts the Trinity on shift work, and the missions are not shifts. One power, one act, an eternal order within it: that is the whole correction, and it is enough."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The works outside the Godhead are one undivided act of the Three.",
                "feedback": "Respondeo: creation belongs to the essence's power, and the essence is one: so Father, Son, and Spirit create in one act, one principle of the creature, as Florence defines. Aquinas grounds the point from the far side: reason cannot find the Persons in creation precisely because creation shows the common power, not the distinctions. What Bethlehem and Pentecost add is not the Son's and Spirit's first employment but their visible missions: a Person taking a created term. The next lesson but one lives there."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Creation is appropriated to the Spirit, whose goodness diffuses being.",
                "feedback": "Right verdict, wrong deed to the property. Creation is classically appropriated to the Father, as power and principle suit the principle without principle; goodness aims at the Spirit, and the finishing or vivifying of things is sometimes spoken toward Him. This matters because appropriation is a mapped discipline, not a devotional lottery: each aiming has a warrant in the processions. Scramble the map and the device stops teaching, which is the only work it exists to do."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t4-l4-q6`,
          type: "mcq",
          stem: `Every liturgy ends by drilling the lesson: Glory be to the Father, and to the Son, and to the Holy Ghost. One doxology, two ands. What do those ands assert, grammatically?`,
          latin_tag: `essentiale et notionale`,
          doctrine_line: `What is God: one answer. Who is God: three. Whereby do they differ: by opposed relations alone. The grammar is the guardrail.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Courtesy toward mystery: the ands leave the inner relations reverently unspecified.",
                "feedback": "The relations are the one thing the formula does specify: the names themselves are the relations, Father and Son opposed as begetter and begotten, the Spirit named as breathed. Nothing is left vague; the doxology is the third lesson chanted. What stays unspecified is only what stays incomprehensible: how one essence subsists thrice. Reverence in this tradition specifies exactly and kneels exactly there, one lesson's precision at a time."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Sequence: glory ascends stepwise, from the Spirit through the Son to the Father.",
                "feedback": "There is a real ascent in the other formula, through Christ, in the Spirit, to the Father: the economy's shape, prayer riding the missions home. But the Gloria Patri is built on and precisely to say something else: not the ladder but the summit, three Persons coequally glorified. The Church needs both sentences because both are true. Confuse them and one truth eats the other, which is how subordinationism got its start."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Accumulation: the Church multiplies names to amplify a single divine addressee.",
                "feedback": "Amplification by synonym is a real rhetorical device and exactly what this is not: Father, Son, and Holy Ghost are not three names for one who but three whos named in order. Read the doxology as pile-up and the first fence falls in the middle of prayer: confounding the Persons at the very moment of glorifying them. The as it was in the beginning that follows seals it: the Three were, before every world, distinct."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Coequal coordination: three whos receiving the one glory, none afore or after.",
                "feedback": "Respondeo: and coordinates equals; the doxology sets the three Persons side by side under one Glory be, which is the Creed's none is greater or less made prayable. The older heresies heard it and flinched: an Arian wants through the Son, not and to the Son, subordination hiding in a preposition. The Church kept both forms and knows which is which: mediation in the economy, through; equality in the Godhead, and. Grammar is doctrine, prayed."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `t4-l5`,
      num: `V`,
      title: `The Failed Alternatives`,
      latin: `haereses trinitariae`,
      tag: `haereses trinitariae`,
      fin: {
        tag: `haereses trinitariae`,
        heading: `The ridge, and the men who fell off it.`,
        body: `The dogma is a narrow ridge with long drops. Arius kept the Father's transcendence and lost the Son: a creature, however exalted, cannot deify anyone. Sabellius kept the unity and lost the Persons: one actor, three masks, a Son with no Father to pray to and a Father crucified in costume. The Eunomians made unbegottenness the very essence, the Macedonians demoted the Spirit to the order of creatures, and assorted graders ranked what cannot be ranked. Florence read the whole casualty list in one paragraph and condemned it wholesale: whoever confuses the persons, whoever puts Son or Spirit among creatures, whoever places grades or inequality in the Trinity. Notice the pattern, because it is the pattern of all heresy: each fall saves one clause of the Creed by burning another. Orthodoxy is not the middle of the road. It is the whole sentence, held together at full strength, which is always the harder and always the truer thing.`,
      },
      questions: [
        {
          id: `t4-l5-q1`,
          type: "mcq",
          stem: `Four accounts of the Father, the Son, and the Holy Ghost. Three cost their holders a condemnation. Which stands?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The Son is the first and most exalted of creatures, made before all worlds as God's instrument.",
                "feedback": "Stated at strength, for a disciplined ascetic priest held it and half the empire's bishops wavered toward it: it protects God's transcendence by making the Son its greatest exception. The cost is the whole gospel: a creature cannot give what only God has, and worship of a creature, however first, is idolatry by the tradition's own rule. Nicaea answered with one word, consubstantial, and an anathema on there was when He was not.<span class=\"condemned\">Arianism &middot; condemned, Council of Nicaea, 325 &middot; DS 125-126; renewed at Florence &middot; DS 1332</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "One God in three coequal Persons, distinct by relations of origin, one in essence.",
                "feedback": "Respondeo: the dogma, bearing its scars: consubstantial against the creature-Son, three real Persons against the masks, coequal against every grader, relations of origin against all who divide the substance. Notice what the survivors lack and this account keeps: both fences of the Creed at once. Each rival was simpler. Every simplification bought its clarity by selling a clause of revelation, which is the one currency the Church refuses."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "One divine Person who presents Himself as Father in creation, Son in redemption, Spirit in grace.",
                "feedback": "The tidiest monotheism on the menu, and serious souls preferred it: one God, three self-presentations, nothing to count. The price surfaces in the Gospels themselves: at the Jordan the Son stands in the water, the Father speaks, the Spirit descends, and one actor cannot fill three positions in one scene. Rome condemned the account in its own century, and Florence renewed the sentence: Sabellius, who confuses the persons.<span class=\"condemned\">Sabellianism (modalism) &middot; condemned under Pope St. Dionysius, c. 260 &middot; DS 112-115; Florence &middot; DS 1332</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Three divine beings united in perfect will and love, one God as one unbreakable alliance.",
                "feedback": "Tritheism with good manners: the unity demoted from essence to agreement, three whats holding hands. Joachim's collective version fell at Lateran IV; Florence swept the whole family: whoever places grades or inequality, whoever breaks the one substance into a society. An alliance, however unbreakable, is a creature-shaped unity: parts first, union second. God's unity is prior to every union, one essence no census can pluralize.<span class=\"condemned\">tritheism / collective unity &middot; condemned, Lateran IV, 1215 &middot; DS 803-806; Florence &middot; DS 1332</span>"
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t4-l5-q2`,
          type: "mcq",
          stem: `A quieter demotion, a generation after Nicaea: the Son is God, granted; but the Holy Ghost is a sanctifying force, first of the ministering spirits. Why does Nicaea's own logic crush this within a lifetime?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It does not: the Spirit's case is genuinely weaker, and the Church ruled on authority alone.",
                "feedback": "The scriptural surface differs, true: no consubstantial verse names the Spirit. But the Church did not shrug and legislate; she argued from the economy: the Spirit indwells as temples are indwelt by God, sanctifies as only God sanctifies, is blasphemed as only God is blasphemed, and baptism seals in His name alongside Father and Son. Authority defined, at Constantinople and after; the logic that carried the definition was Nicaea's own, aimed one Person further."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the Creed's poetry needs a third member for its rhythm to close.",
                "feedback": "The Creed's rhythm follows the faith, not the reverse; a Church willing to fight a century over one iota was not padding stanzas. The third article is load-bearing: the Lord and Giver of life, worshipped and glorified together with the Father and the Son. Every phrase does dogmatic work against this exact demotion. If rhythm ruled creeds, the heretics would have won every fight; their formulas were usually catchier."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because Scripture nowhere calls the Spirit a creature, and silence settles doctrine.",
                "feedback": "Silence settles nothing; Scripture nowhere says consubstantial either, which was the Arians' favorite observation. The argument is positive, not silent: divine works are predicated of the Spirit, and what does what only God does, is God. Searching and knowing the depths of God, giving life, sanctifying: creatures receive these; the Spirit works them. The demotion fails on what Scripture says, not on what it omits."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because a created sanctifier re-opens Arius' wound: only God can give a share in God.",
                "feedback": "Respondeo: the soteriological blade, the same that cut Arius: what deifies must be divine. If the Spirit who sanctifies, indwells, and makes sons is a creature, then sanctification hands us to a middleman and never to God. The Macedonians kept Nicaea's Son and reproduced the whole crisis one Person down; the Church saw one heresy in two installments. Florence's list names them between the Arians and the graders, same paragraph, same sentence.<span class=\"condemned\">Macedonianism (Pneumatomachi) &middot; condemned, Council of Constantinople, 381 &middot; DS 150-151; Florence &middot; DS 1332</span>"
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t4-l5-q3`,
          type: "dialogue_branch",
          stem: `Coffee after Mass. A friend, honest and unchurched in his reading, sets down his cup: "Jesus was the greatest man God ever made. Isn't that enough? Why does the extra metaphysics matter?" Hand him the true answer, which is also the kind one.`,
          payload: {
            "commentatorLine": "The Commentator materializes by the pastry table, examining a donut with scholarly detachment. 'He has just offered you fourth-century Alexandria with milk and sugar. Answer the man, not the century; but do answer.'",
            "branches": [
              {
                "text": "If He is only the greatest creature, then God still keeps His distance and we are still unsaved. The whole point is that God Himself crossed over. True God from true God, or the gift never arrives.",
                "verdict": "correct",
                "feedback": "The Nicene answer in a kitchen register: doctrine argued from the gift. A creature, however great, gives at most what creatures have; sonship, forgiveness, a share in the divine life are God's to give and no one else's. So the metaphysics is not extra; it is the difference between a hero to admire and a Savior who saves. Notice the answer honors his instinct, the greatness of Christ, and completes it: greater than he dared say. That is how the fair fight sounds over coffee."
              },
              {
                "text": "Honestly, it is enough for most practical purposes. The councils argued over words; what matters is following His example.",
                "feedback": "Kind, and a surrender on both fronts: it leaves your friend holding Arius' position with your blessing, and it sells the councils as pedants, when one iota carried the difference between worshipping God and worshipping a creature. Example-following is real but it is not the gospel; the gospel is what God did. The word that cost a century was the word that kept the gift divine. Some arguments over words are arguments over everything.<span class=\"condemned\">the creature-Christ thesis &middot; condemned, Nicaea, 325 &middot; DS 125-126</span>"
              },
              {
                "text": "Deeper than that: Jesus simply is the Father, God Himself in human costume. No distance to cross at all.",
                "feedback": "Overcorrection into the other ditch: rescuing Christ's divinity by erasing His Person. If the Son is the Father in costume, the Jordan is a puppet show, Gethsemane is God praying to Himself, and the Cross has the Father suffering in disguise, the old Patripassian scandal that discredited modalism on its own. Your friend asked a good question; this answer would trade his Arianism for Sabellianism, one condemned account for another.<span class=\"condemned\">Sabellianism / Patripassianism &middot; condemned, c. 260 &middot; DS 112-115</span>"
              },
              {
                "text": "The Church has defined it, and that settles it. Some things are not ours to question over coffee.",
                "feedback": "The authority is real and the deployment of it here is a small disaster: it answers a sincere question with a door in the face, and it confirms his suspicion that the doctrine has no reasons. Aquinas warned exactly against this: offering the faith without its intelligibility invites ridicule and closes hearts. Authority grounds the assent; the fittingness can still be shown, warmly, over exactly this cup of coffee. You had a better answer, and charity owed it to him."
              }
            ]
          },
        },
        {
          id: `t4-l5-q4`,
          type: "mcq",
          stem: `The fourth century's costliest single letter: consubstantial (homoousios) against of-like-substance (homoiousios). One iota. Why was it worth a century of exile and riot?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Like-substance still leaves the Son outside the one essence: a second god or a top creature.",
                "feedback": "Respondeo: likeness is a creature's relation to God; every soul in grace is like God. Say the Son is only like the Father and He stands outside the one essence, and outside there are exactly two addresses: creature, which is Arius plain, or second god, which is paganism with better vocabulary. Same-substance closes both doors: the numerically one essence, wholly possessed. The iota was the whole distance between worshipping God and flattering a creature; the Fathers who died over it counted correctly."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Politics: two court parties needed a shibboleth, and an iota is easy to police.",
                "feedback": "The politics were real, exiles and emperors and all, and this option still explains nothing: parties form around stakes, and the stake must exist before anyone politicizes it. The men who suffered for the iota, Athanasius five times exiled, were not enforcing a password; they had done the metaphysics and knew what like-substance cost. Cynicism about councils is cheap history. The word was fought over because the word was the faith."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Semantics: both words gesture at the same mystery, and the quarrel was translation friction.",
                "feedback": "Some honest bishops did hope so, and for a season the words blurred in charitable minds; the blur could not hold because the referents differ: numerically one essence versus resembling essences, identity versus similarity. Once pressed, every meaning of like that is not same puts the Son outside the Godhead. The Church's eventual precision was not pedantry but triage: the wound was real, and only one word closed it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither word is scriptural, so the fight discredited both sides equally.",
                "feedback": "The Arians made exactly this objection, loudly: consubstantial is not in Scripture. The answer defines the Church's whole relationship to language: when heresy weaponizes scriptural words, read in a twisted sense, the Church may mint an unscriptural word to guard the scriptural meaning. The test of a formula is fidelity, not concordance-presence. Otherwise Trinity itself falls, and the deposit is at the mercy of whoever twists fastest."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t4-l5-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "Modalism is the safest Trinitarian error, since whatever else it loses, it protects the divine unity."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Between too much unity and too little, too much is the reverent failure.",
                "feedback": "Errors do not rank by reverence, and this one's reverence is cosmetic: the unity it protects is not even the dogma's unity, which is one essence in three real Persons, not one Person economizing on identity. A safest heresy is a category mistake besides; each burns a clause of the deposit, and the deposit does not carry insurance on some clauses. The Creed's two fences fall together or stand together."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Its account of Scripture is thinner but its worship lands on the one true God.",
                "feedback": "Its worship lands on a God who was never revealed: a solitary actor behind three masks, whom no page of the New Testament describes. The Gospels show Someone praying and Someone heard, Someone sent and Someone sending; erase the real distinctions and the entire revealed drama becomes staging. Worship aimed at an unrevealed God by way of a falsified revelation is not landing on truth. It is missing it devoutly."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. It abolishes the real relations revelation shows: the Son would pray to no one.",
                "feedback": "Respondeo: run the Gospel scenes under modalism and they die in order: the Jordan becomes ventriloquism, Gethsemane a soliloquy, and the Cross the Father suffering in costume, the Patripassian scandal that made even pagans wince. The relations are not decoration on the revelation; they are its content: the Father loves the Son, the Son returns to the Father, the Spirit is sent by both. A doctrine that makes God's love self-directed theater has not protected monotheism. It has protected loneliness.<span class=\"condemned\">Sabellianism &middot; condemned under Pope St. Dionysius, c. 260 &middot; DS 112-115; Florence &middot; DS 1332</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Modalism is not an error at all when read charitably, as emphasis on unity.",
                "feedback": "Charity reads persons generously and doctrines exactly; blurring the second in the name of the first helps no one, least of all the modalist. Emphasis on unity is orthodoxy; denial of the real distinction of Persons is Sabellius, condemned by name at Rome and again at Florence. The reading that cannot tell the two apart has abandoned the analyst's chair, and the wall doc's rule holds: state the truth, distinguish the error, move on."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t4-l5-q6`,
          type: "mcq",
          stem: `Arius divided the substance. Sabellius confounded the Persons. The Macedonians demoted the Spirit; the graders ranked the ridge into a staircase. One pattern underneath all four. Name it.`,
          latin_tag: `haereses trinitariae`,
          doctrine_line: `Every Trinitarian heresy saves one clause of the Creed by burning another; the faith is the whole sentence, held together.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Foreign philosophy: each error imported Greek metaphysics into Hebrew revelation.",
                "feedback": "The imports ran every direction, including into orthodoxy: consubstantial is as Greek as anything Arius owned, and Aquinas will happily note the Platonists glimpsing the Word. Philosophy was the common air, not the differential cause. What separated the ridge from the ditches was not vocabulary but fidelity: whether the whole revealed sentence governed the metaphysics, or one clause of it was promoted to edit the rest."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Impatience with mystery: each preferred a God the mind could close its hand around.",
                "feedback": "Warm, and half the diagnosis: the simplified gods are certainly more graspable, and the Creed's ridge does ask the mind to hold what it cannot close. But impatience explains the motive, not the mechanism. The mechanism is the trade: each error purchased its graspable God by selling a specific revealed clause, and naming the clause sold is what lets you refute the error instead of merely deploring it. The next option holds the mechanism."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Each saves one clause of the Creed by burning another; the faith is the whole sentence.",
                "feedback": "Respondeo: the pattern of all heresy, visible here in its purest cases: Arius saves one God and burns true God from true God; Sabellius saves one God and burns the three real Persons; the Macedonians save the Son's divinity and burn the Spirit's; the graders save all three names and burn the equality. Orthodoxy is the refusal to trade: every clause at full strength, together, though the holding costs more than any simplification. Heresy is always easier. That is nearly its definition."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Bad luck of timing: each spoke before the defining council clarified the terms.",
                "feedback": "Sabellius was condemned before Nicaea existed to be early for; Arius was answered at a council convened about him; and material error before definition is exactly why the Church distinguishes erring from heresy, obstinacy after correction. But the pattern under study is doctrinal, not chronological: what each account did to the deposit's sentence. Calendars excuse men, sometimes. They do not repair propositions, ever."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t4-l6`,
      num: `VI`,
      title: `Missions`,
      latin: `missiones divinae`,
      tag: `missiones divinae`,
      fin: {
        tag: `missiones divinae`,
        heading: `Sent, without leaving.`,
        body: `A river reaches the far field and never leaves its spring. That is the grammar of a divine mission: the eternal procession, now with a term in time. The Son, eternally proceeding from the Father, begins to exist visibly in the world by taking our nature: sent, while remaining what and where He was, for He was in the world already and the world was made by Him. The Spirit, eternally proceeding as Love, is sent visibly at Pentecost and invisibly into every soul the gift of grace makes new. Nothing changes in God; the newness is the creature's, as a man newly standing in sunlight changes nothing in the sun. The Father, from no one, is sent by no one: not rank, only origin, and He comes freely where His Son and Spirit are sent, to make His abode. Here the doctrine stops being architecture and becomes address: the Trinity is not a diagram to admire but a life that has moved toward you, Word and Love, into flesh and into souls. The rest of Part II walks through what They came to do.`,
      },
      questions: [
        {
          id: `t4-l6-q1`,
          type: "mcq",
          stem: `A river reaches a far field and never leaves its spring. Scripture says the Father sent the Son, and that Father and Son send the Spirit. What is a divine mission, exactly?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A journey: the Person departs heaven, arrives here, and returns when finished.",
                "feedback": "Departure is the one thing omnipresence forbids: whoever is everywhere quits nowhere and arrives nowhere by travel. Aquinas strikes local motion from the definition on the first page: the Person sent neither begins to exist where He was not, nor ceases to exist where He was. The Ascension itself is not the Son commuting home but His humanity entering glory. Missions are real without being trips; the field genuinely gets the river, and the spring loses nothing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The eternal procession, gaining a created term: a new way of existing in another.",
                "feedback": "Respondeo: Aquinas's two-part definition: the procession of origin from the sender, plus a new mode of existing in the one sent to. The Son eternally proceeds from the Father; sent, that same procession terminates newly in a created nature. The Spirit eternally proceeds as Love; sent, He begins to exist in a soul in a way He did not before. Mission adds nothing inside God: it is the procession itself, wearing a temporal effect. The river was always flowing. Now there is a field in it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A manner of speaking: Scripture dramatizes as sending what is simply divine action.",
                "feedback": "Flatten the missions to metaphor and the New Testament loses its plot: the sent Son is not generic divine action but the Word made flesh, this Person and not another. Divine action in general belongs to the Three as one, the previous lesson's grammar; mission is precisely where a single Person takes a created term. Lose the distinction and Pentecost is redundant after Bethlehem, two costumes for one energy. The Church counts two missions because two Persons proceed."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An office assumed: the Person takes up a saving role assigned for a season.",
                "feedback": "Role language keeps the calendar and loses the anchor: a role could be assigned to anyone, but the Son is sent because He proceeds, and only as He proceeds. Mission tracks origin, not staffing: the Father, from no one, is unsendable; the Word is sent as Word, Love as Love. Aquinas's phrase is exact: mission includes the eternal procession, with the addition of a temporal effect. The office reading trades that necessity for a rota, and the rota is Sabellius' furniture."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t4-l6-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Thus the mission of a divine person is a fitting thing, as meaning in one way the procession of origin from the sender, and as meaning a new way of existing in another; thus the Son is said to be sent by the Father into the world, inasmuch as He began to exist visibly in the world by taking our nature; whereas "He was" previously "in the world" (John 1:1).</p><div class="cr-cite">ST I, q. 43, a. 1, co. &middot; trans. Fathers of the English Dominican Province &middot; verified against New Advent</div></div>He began to exist visibly, whereas He was previously in the world. What is that final clause guarding?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That mission adds newness on the creature's side only: no change, no arrival, in God.",
                "feedback": "Respondeo: the clause anchors the whole doctrine: the Word was already in the world, upholding it; what begins at Bethlehem is a new mode, visible existence in an assumed nature, and the newness is entirely the creature's. Aquinas says it flatly elsewhere in the question: the newness comes from change in the creature, as God is called Lord in time because creatures began, not because He acquired a title. The sun does not warm itself when a man steps into its light."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That the Son's presence before Bethlehem was partial, completed by the coming in flesh.",
                "feedback": "Partial presence is quantity-thinking, and God does not come in installments: the Word was wholly present to the world He upheld, as being is present to what exists. The Incarnation adds a mode, visible and in our nature, not a missing percentage. Read completion into the clause and the mission starts repairing a defect in omnipresence, which is exactly the reading the clause was built to forbid. New mode, not more presence: the whole lesson in four words."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That the world deserved the visit, having been made through the Word it received.",
                "feedback": "The made-through-Him line is indeed John's, and the fittingness is real: the world receives its own Architect. But desert is the one word the gospel refuses: His own received Him not, and the coming was grace, not wages. The clause under study is doing metaphysics, not merit: it locates the newness of the mission in visibility and assumed nature, against any picture of a God who had been absent. Fittingness yes, entitlement never."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That the missions are eternal, since the Word's presence in the world never began.",
                "feedback": "Aquinas answers this in the very next article: mission is temporal, precisely because its term is temporal. The presence that never began is the presence of the Creator to creation; the mission is the new visible mode that began at a date, under a governor, in a stable. Merge them and either creation becomes incarnation or incarnation becomes wallpaper. The doctrine holds both edges: eternal procession, temporal term; the clause names the first while the sentence dates the second."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t4-l6-q3`,
          type: "mcq",
          stem: `The tradition counts the missions: two visible, and the invisible ones without number. Lay out the map.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Visible: Sinai and Bethlehem. Invisible: the Spirit's work in the Church's sacraments.",
                "feedback": "Sinai is theophany, not mission: fire and trumpet manifest God without a Person taking a created term in the mission's proper sense. The map's second half also slips: the sacraments are instruments of grace, and the invisible mission happens in the souls they serve, not in the rites as such. Right instinct, wrong pins: the visible pair is Bethlehem and Pentecost, and the invisible mission's address is every sanctified soul."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Visible: the Son at every Mass. Invisible: the Spirit in private prayer.",
                "feedback": "The altar does hold the Son truly, but sacramental presence is its own doctrine with its own module, already behind you; the visible mission names the once-for-all taking of a nature, not each renewal of presence. And the Spirit's invisible mission is not confined to prayer's private moments; it is the whole life of grace, liturgical and hidden alike. The map wants the two great inaugurations, each dated, each seen: a stable, and a wind with fire."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Visible: the Son once at the Jordan. Invisible: the Word's presence in Scripture.",
                "feedback": "The Jordan is the Trinity manifested, the catechism's favorite scene, and the dove there is indeed counted among the Spirit's visible signs; but the Son's visible mission is the Incarnation itself, of which the Jordan is an epiphany. And Scripture's Word-presence is inspiration, another doctrine: the invisible mission is the Persons indwelling souls by grace. Keep the registers distinct: manifestation, inspiration, mission. The third is this lesson's business."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Visible: the Son in flesh, the Spirit at Pentecost. Invisible: the indwelling of souls in grace.",
                "feedback": "Respondeo: two visible missions, matching the two processions: the Word sent into a nature He assumed, at Bethlehem; Love sent in signs of wind, fire, and a dove, at Pentecost and the Jordan. And one standing invisible mission: wherever the gift of grace makes a soul new, the Spirit is sent into it, and with Him, since the Persons are never apart, the Son, and the Father coming though never sent. The map's quiet lesson: the extraordinary happened twice so the ordinary could happen daily."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t4-l6-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "The Father is never sent. Therefore the Father outranks the Son and the Spirit, as every sender outranks his messenger."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Sending is authority, and authority is precedence in any coherent order.",
                "feedback": "For servants and masters, yes: mission by command implies the commander's greater standing, and Aquinas lists exactly that case in order to strike it. Divine mission is the other kind on his list: according to origin only, as the flower is sent forth by the tree, and origin in God carries equality, the third lesson's whole burden. Import the office model and you have made the Godhead a chancery. The Creed already answered: none is afore or after."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. But the rank is economic only: in saving work, not in eternal being.",
                "feedback": "A halfway house with the roof missing: rank in the economy that is no rank in being would still make the missions misleading, revelation showing us a hierarchy that is not there. The tradition reads it cleanly instead: the sent Persons are those who proceed, and proceeding is not inferiority even economically; the Son sent is equal to the Father precisely while obedient in the assumed nature. Where subjection appears, it belongs to the manhood: a later module owns that anatomy."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Mission tracks origin, not rank: the Father, from no one, cannot be sent, yet comes.",
                "feedback": "Respondeo: to be sent means to proceed from another; the Father, principle without principle, has no one to proceed from, so mission is simply ungrammatical of Him: a fact about relations, not a promotion. Aquinas seals it with the Gospel's own tenderness: the Father is not sent, but He comes, We will come to him and make Our abode with him. Unsendable and yet arriving: the doctrine in one breath, and not a rank in sight."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The Father is sent, in the Son: whoever sees the Son sees the Father who sent Him.",
                "feedback": "The verse is real and the inference crosses a wire: the Father is seen in the Son because the Persons are one in essence and indwell one another, not because the Father acquired a mission. Sent has a definition, proceeding-from with a temporal term, and the Father meets neither half. Blur it and innascibility dissolves, the one notion that is the Father's alone. He is visible in His Image and sendable never: both truths, no trade."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t4-l6-q5`,
          type: "mcq",
          stem: `The invisible mission, stated plainly: what actually happens in a soul when the Spirit is sent into it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The soul is sent on mission itself, joining the Spirit's work in the world.",
                "feedback": "Downstream and true: the sent Church is real, and souls in grace are indeed enlisted. But the question asks what the mission is, and this answers what it produces. Invert the order and the indwelling becomes a job placement, grace reduced to deployment. The tradition's order is contemplative first: the Persons come to abide, the soul becomes a temple, and only because it houses the fire does it carry any. What you are sent to give, you must first be given."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A created likeness of the Spirit arrives; the Person Himself remains in glory.",
                "feedback": "The cautious error, and Aquinas refuses the caution: the mission terminates in the Person really present, not a deputy. Created gifts do come, and by them the soul is disposed and the Person possessed; but if only the gifts arrived, the indwelling verses would be courtesy language and the temple would house a portrait. The tradition's daring is the doctrine: God Himself, not His effects only, dwells in the just. Losing that loses the whole cash value of the lesson."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A moral alliance begins: God befriends the soul and follows its progress attentively.",
                "feedback": "Friendship is the right family of ideas, and charity will be defined as friendship with God in a module long past; but alliance keeps the parties at diplomatic distance, and the doctrine claims residence. God attends to every creature already, holding it in being; the invisible mission is the more that grace adds: presence as in a temple, as known and loved within, the beginning of the life the blessed live in vision. Not warmer relations. A new mode of existing in the soul: the definition, kept."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The whole Trinity comes to dwell in it as in a temple, by the gift of grace.",
                "feedback": "Respondeo: Aquinas ties the mission to the gift that renews: the Person is sent to exist in the soul in a new way, and possessed by it, and that happens only by the grace that makes the soul pleasing to God. And since the Persons are inseparable, where Love is sent the Word comes, and the Father with them: your members are the temple, and the abode is made now, not at death. The Trinity studied for five lessons turns out to be, in every soul in grace, the resident."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t4-l6-q6`,
          type: "mcq",
          stem: `Aquinas asks why we needed to know the Trinity at all, and answers: chiefly, that we may think rightly concerning the salvation of the human race, accomplished by the Incarnate Son and by the gift of the Holy Ghost. What does that sentence do to this module?`,
          latin_tag: `missiones divinae`,
          doctrine_line: `A mission is the eternal procession with a created term: the Person sent neither leaves the Godhead nor changes; the newness is all on our side.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It demotes it: the practical lessons matter, and the inner-Trinity lessons were scaffolding.",
                "feedback": "Read the sentence again: think rightly about salvation, and the missions cannot be thought rightly without the processions they carry, which cannot be stated without relations, Persons, and the guarded grammar. Nothing demoted; everything ordered. The immanent Trinity is not scaffolding around the economy; it is what the economy delivers: this God, as He is, given. Remove the architecture and the gift loses its content, which is the opposite of practical."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It aims it: the doctrine was learned so the gift could be recognized when it arrives.",
                "feedback": "Respondeo: the module's five lessons of architecture were never for admiration; they were for this: when the Word takes flesh and Love is poured into hearts, the learner knows Who has come, from Whom, and why nothing in God bent or lessened in the coming. The doctrine is the grammar of the gift. And the sentence quietly hands the course its future: the Incarnate Son and the gift of the Spirit are the remaining wings of Part II, waiting."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It concedes the point of lesson one: reason needed no Trinity, and neither did theology.",
                "feedback": "The sentence says nearly the reverse: knowledge of the Persons was necessary, Aquinas's own word, on two grounds: right thought about creation, God making by Word and Love, freely; and chiefly, right thought about salvation. What lesson one denied was reason's power to climb to the Persons; this sentence names why revelation stooped to give them. Unprovable and indispensable are not rivals. They are the two properties of everything this course files under gift."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It ends it: with the missions stated, the Trinity treatise has nothing left to say.",
                "feedback": "One lesson remains, and its work is not decoration: the recapitulatio binds five lessons into one holdable whole, which is how this course ends every module, and the door out of this one opens onto creation: God making by His Word and Love, the very ground Aquinas names first. Treatises end. Formation recapitulates, and then walks through the next door with everything in hand. The habit should be familiar by now; it is the course's signature, and it is not done with you."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `t4-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The mystery, held with precision.`,
        body: `Hold the module in one hand. A taxpayer taught you to count whos and whats separately, and the Creed counted them: one what, three whos, neither confounded nor divided. An inner word taught you procession without departure, and the fountain gave two: the Word by way of intellect, Love by way of will, eternally, no before. A father holding his newborn taught you the thinnest reality, and in God that thinness stands up: subsistent relations, distinct only where opposition interferes, each wholly the one essence. The grammar sorted every sentence: What, one answer; Who, three; Whereby, opposition alone; appropriation aiming common perfections for teaching. The failed alternatives showed the price of trading any clause for relief. And the missions brought the architecture home: the Word into flesh, Love into souls, the newness all on our side. What reason could never climb to, revelation handed down, and the handing was itself Word and Love at work. One door remains open: the God who is fountain in Himself now speaks a world into being through that same Word, and rests on it with that same Love. Creation is next, and you already know the grammar it was made in.`,
      },
      questions: [
        {
          id: `t4-l7-q1`,
          type: "match_pair",
          stem: `The module in five images. Match each to its doctrine.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "John pays taxes; his nature pays nothing"
              },
              {
                "id": "L2",
                "text": "the sea, conceived whole within the mind"
              },
              {
                "id": "L3",
                "text": "a new father, with nothing new inside him"
              },
              {
                "id": "L4",
                "text": "one iota, fought over for a century"
              },
              {
                "id": "L5",
                "text": "a river reaching the field, never leaving the spring"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "one what, three whos: essence and Person counted apart"
              },
              {
                "id": "R2",
                "text": "generation as the Word's procession: within, without departure"
              },
              {
                "id": "R3",
                "text": "real relation, adding nothing absolute: in God, subsisting as Person"
              },
              {
                "id": "R4",
                "text": "consubstantial: same essence, not like essence"
              },
              {
                "id": "R5",
                "text": "mission: the eternal procession with a created term"
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
              "all_correct": "Five images, one Godhead. Read them in order and the module retells itself: the grammar of who and what, the procession that never departs, the relation that stands up as a Person, the iota that kept the essence one, the sending that changes everything here and nothing there. None of the images was new this module; the course planted every one of them lessons or years ago. That is the deepest thing the matching can teach: the philosophy was always for this.",
              "partial_correct": "Some pairs resisted. Walk the module's own order: the taxpayer gave you who against what; the inner word gave you procession without departure; the new father gave you relation, real and thin, subsisting in God as Person; the iota bought consubstantiality, same essence not similar; and the river-and-spring gave you mission, procession wearing a created term. Each image is a lesson folded small; unfold them in sequence and the whole module returns."
            }
          },
        },
        {
          id: `t4-l7-q2`,
          type: "mcq",
          stem: `The philosophy course spent a week on suppositum and persona: the who that owns a nature. Only now is the tuition's full size visible. What did that week buy this module?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A devotional bridge: familiar words easing the entry into unfamiliar mystery.",
                "feedback": "The words did ease entry, but easing was not the purchase: they carried load. Without the who/what distinction the Creed's central sentence cannot be parsed at all, let alone defended; one God, three Persons reads as a contradiction or a costume drama. Familiarity is a side effect of ownership. The learner owns the grammar, which is why the mystery could be stated to her exactly rather than gestured at warmly."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A liability: creaturely person-language had to be mostly unlearned at the summit.",
                "feedback": "Some packaging was surrendered: separateness, matter, one-nature-per-person. But mostly unlearned inverts the accounting: distinct subsistence in a rational nature survived the ascent intact, and it is the load-bearing wall. The analogy module taught exactly this discipline: words stretch to God by keeping their core and shedding their creaturely mode. Person stretched. It did not snap, and the councils that chose it knew the difference."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The precision to count whos and whats separately, which is the dogma's own grammar.",
                "feedback": "Respondeo: the entire module ran on one distinction: What is God, one answer; Who is God, three. A learner without it hears one and three collide and reaches for masks or committees, the two ditches of lesson five. A learner with it parses the Creed, the doxology, and Lateran IV's verb discipline without flinching. That is what the week of taxes bought: not comfort near the mystery but grammar inside it. The tools were always for this."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A proof-in-waiting: the metaphysics of person, completed, entails the Three.",
                "feedback": "Lesson one closed this door from inside: no metaphysics entails the Trinity, and Aquinas calls the attempt a disservice to faith. Person-language holds the revealed datum; it does not generate it. Watch the direction of service: philosophy is the handmaid here, honored precisely by not being promoted to prophetess. What entails nothing may still carry everything, which is a fair one-line biography of this course's first eighteen modules."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t4-l7-q3`,
          type: "precision_check",
          stem: `A last claim to audit: <em>"The three Persons share the one divine nature, as three men share human nature."</em> Where exactly does it break?`,
          payload: {
            "statement": "The three Persons share the one divine nature, as three men share human nature.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At three Persons: person cannot be said of God and men in any common sense.",
                "feedback": "Overcorrection: person is said analogically, and the councils said it on purpose; strike every common sense and the Creed goes mute mid-sentence. The claim's failure is not in counting three Persons, which is dogma, but in the comparison that follows: how the Three possess the one nature. Aim the audit at the as-clause, where the real contraband crossed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At as three men: humanity multiplies in its bearers; the divine essence is numerically one in Three.",
                "feedback": "Respondeo: caught at the joint. Three men are three humanities, a copy each, specifically one and numerically three: that is what sharing a nature means among creatures, and it is exactly what the Godhead does not do. The Persons each possess the numerically same essence, whole: not three instances of divinity but one undivided what subsisting in three whos. Joachim fell here, reading the unity as a collective; Lateran IV holds the receipt. Share is a creature's word. Identity is the dogma's."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At the one divine nature: nature is a creaturely category, unsayable of God.",
                "feedback": "The councils say one nature, one substance, one essence in their own definitions: Florence's very sentence carries them. Analogy stretches the words and keeps them; forbidding them outright would silence the Creed to spite the claim. The audit's discipline is surgical: remove the failed comparison, spare the sound vocabulary. This option amputates the healthy limb and leaves the infection in place."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At share: even among men, natures are private; nothing is truly common to three.",
                "feedback": "That is nominalism doing collateral damage: deny real commonality among creatures and species dissolve, science loses its objects, and the philosophy course's third week files a grievance. Men do share human nature, specifically; the claim's error is promoting that creaturely mode of sharing into God, where the unity is numerical identity, not specific likeness. The fix is not to abolish sharing below. It is to refuse its export above."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t4-l7-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "Since the Trinity is a mystery above reason, precise language about it is presumption; reverence should stay vague."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Definitions shrink what they define, and God must not be shrunk.",
                "feedback": "Definitions of God's essence would shrink Him if they claimed to comprehend; the Church's definitions do something else: they fence the revealed statement against corruptions. Neither confounding nor dividing shrinks nothing; it keeps the mystery this mystery instead of a tidier idol. The module's whole history testifies: vagueness never protected the Godhead. It fed the simplifiers, every time."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The saints knew God without syllogisms, and their knowledge sufficed.",
                "feedback": "The saints prayed the Athanasian Creed at Prime and died for the iota; sanctity and precision have never been rivals in this tradition, and the martyrs of the Arian century were rarely confused about which word they were dying over. Simple faith is real and full; but the simplicity of a saint holds the exact faith implicitly, not a vague one contentedly. Ask any of them whether the Son is a creature and observe the precision arrive."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Where liberty is possible the Church grants it; the dogma itself she guards exactly.",
                "feedback": "Right verdict, and the reason chosen names a real nuance: Aquinas allows contrary opinions about the notions, where no consequence touches faith. But that liberty is the exception proving the deeper ground, and the deeper ground is what the question asked for: why precision itself is not presumption. The stronger answer stands one option down: precision is how a received mystery is reverenced, because the exactness guards the gift."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Precision is reverence: the fences keep the mystery whole against every shrinking.",
                "feedback": "Respondeo: the module's two fences, four relations, three questions, and one iota were all reverence in action: each exactness stopped a specific shrinking of the revealed God into something the mind could pocket. Vagueness is not humility; it is unlocked doors. And the Church knows exactly where liberty lives, in the notions, Aquinas says, opinions may vary without heresy, and where it does not: the trinity and unity itself. Precision about the dogma, freedom in the school questions, and kneeling throughout: that is the house style, and now it is yours."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t4-l7-q5`,
          type: "mcq",
          stem: `Aquinas gives a second reason the Trinity had to be revealed: for the right idea of creation. God made all things by His Word, and by the Love of His goodness. What does the doctrine of the processions correct in advance?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Every necessity-picture: a God who creates by Word and Love creates knowingly and freely.",
                "feedback": "Respondeo: Aquinas's own sentence: saying God made all things by His Word excludes those who say He produced by necessity of nature; naming the procession of Love shows He created not from need but from love of His own goodness. The processions are the pre-answer to every emanationist cosmos where the world leaks out of God like light from a bulb. The fountain is full before anything overflows: Word spoken, Love breathed, and then, freely, a world."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The eternity of matter: the processions prove the world began in time.",
                "feedback": "Wrong instrument for that question, and the course keeps its instruments honest: whether the world began is settled by revelation, not demonstrated by the processions or anything else; Aquinas famously holds reason cannot prove a beginning. What the processions correct is the manner of creating, necessary versus free, not the calendar. A learner who reaches for the Trinity to date the cosmos has confused the two gifts revelation actually gave."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Polytheism: the three Persons replace the pagan pantheon with a lawful plurality.",
                "feedback": "The Trinity is not a baptized pantheon, and lawful plurality concedes the frame it should refuse: the Persons are not three gods sharing labor, which lesson five buried with Florence's own paragraph. Against polytheism the correction is the one essence, monotheism entire. What the processions add is interior: the one God is not solitary, fountain within Himself, Word and Love before any world. Fullness, not company; and creation flows from fullness, freely."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Deism: the processions guarantee God stays engaged after the launch.",
                "feedback": "Providence and conservation answer deism, and the course has them filed where they belong. The processions correct the opposite error about the beginning, not the aftermath: the necessity-picture, a world squeezed out of God by nature. By His Word: knowingly. By His Love: freely, from goodness, not need. That double stroke is why creation will read as gift in the next module rather than as leakage. The engaged God is true; this doctrine's work is the free one."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t4-l7-q6`,
          type: "mcq",
          stem: `Last question, and a door. The module left the Godhead complete in itself: Word spoken, Love breathed, nothing lacking. And yet a world exists. What stands ready, one module ahead?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `One essence, three subsistent relations, two processions, two missions: the mystery held with precision, and precision held with reverence.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The moral law: from the Trinity, the course turns to what the Three command.",
                "feedback": "Commands presuppose creatures to command, and the creatures are not on stage yet: the course's order is being before behavior, here as everywhere. The philosophy course ran the same sequence, metaphysics before ethics, and Part II keeps the spine: God in Himself, then God creating, then the long road of the return. The law will come in its season. First, the sheer existence of anything besides God has to be accounted for, and that is the door standing open."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Creation: the free overflow of the fountain, all things from nothing, by Word and Love.",
                "feedback": "Respondeo: the processions were the module's secret cosmology all along: a God who eternally speaks His Word and breathes His Love creates the way an artist gives, not the way a spring leaks. Lamps lit from one sun, the old participation image, now with the Giver's inner life known: one principle of the creature, Florence said, and you now know the Three who are it. Creation from nothing, held in being, freely: the next module's whole business. Opens the door to Creation."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The Incarnation: the Word's visible mission is the natural next chapter.",
                "feedback": "It is coming, and the missions lesson has already laid its foundation: when the course reaches the Word made flesh, nothing will need re-teaching. But the Summa's own order intervenes, and this course walks it: before the Word enters creation, creation itself must be on the table, from nothing, ordered, held. The economy's chapters keep their sequence: what God made, then what God did about its wound. The stable waits several doors down; the fiat lux is next."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing stands ready: the Trinity is the summit, and the course descends from here.",
                "feedback": "The Trinity is the summit of the mystery, but this course does not descend from it; it proceeds from it, the way all things do. Exitus and reditus: everything flows out from the Triune fountain, everything is called back to it, and the remaining modules walk the whole arc: creation, grace, Christ, the Church already met, the sacraments already met, and the vision at the end where the Three are seen. The summit is not behind you. You have been given the map of everything that follows."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    }
  ],
};
