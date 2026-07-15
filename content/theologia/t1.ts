import type { ModuleMeta } from '../types';

/** DRAFT: theologian review required (wall doc 2.4.3). Authored 2026-07-05
    at R2's direction ahead of the standing gate; shipped to the live app
    2026-07-05 per R2's explicit override (his call, plainly stated).
    Source verification was done at authoring time; the Denzinger pass on
    the auctoritas Latin formulas is still owed. Keep the DRAFT badge in
    the UI until a theologian actually signs off, this comment does not
    replace that surfacing. */
export const t1: ModuleMeta = {
  id: 1,
  title: `Sacra Doctrina: What Theology Is`,
  short: `Sacra Doctrina`,
  label: `Theologia I · Sacra Doctrina: What Theology Is`,
  latin: `De Sacra Doctrina`,
  aim: `Reason climbed to Ipsum Esse and stopped at the threshold: it can prove that God is, never see what He is. God has spoken; the deposit of faith, complete with the Apostles, is received by fides, an intellectual virtue assenting on the authority of God who reveals, who can neither deceive nor be deceived. Sacra doctrina is a true science proceeding from God's own knowledge, using philosophy as handmaid; faith and reason cannot really collide, having one Author; and the magisterium religiously guards and faithfully expounds the deposit without ever adding to it. The course's own rule is the first doctrine it teaches.`,
  lessons: [
    {
      id: `t1-l1`,
      num: `I`,
      title: `The Ceiling of Reason`,
      latin: `praeambula fidei`,
      tag: `praeambula fidei`,
      fin: {
        tag: `praeambula fidei`,
        heading: `The ladder reached the roof.`,
        body: `Eighteen modules of climbing, and the climb was real: the act of being found, defended, and followed to <span class="lat">Ipsum Esse Subsistens</span>. But the philosopher at the top of that ladder knows that God is, and what He is not, and how creatures may speak of Him; the divine essence itself he has never seen. The tradition names his winnings with respect: <span class="lat">praeambula fidei</span>, the preambles of faith, reason's own work, which faith presupposes as grace presupposes nature. And it names his poverty without embarrassment: the truths reason could reach came to few, late, and mixed with errors, and the truths he needs most were never within reach at all. What no eye could climb to can still be spoken from above. Next lesson: God has.`,
        distinction: {
          latin: `praeambula fidei`,
          english: `the preambles of faith`,
          gloss: `Reason's own work about God, which faith presupposes as grace presupposes nature.`,
          motif: `ladder-light`,
        },
      },
      questions: [
        {
          id: `t1-l1-q1`,
          type: "mcq",
          stem: `The disputation hall, one last time. The verdict on <span class="lat">esse</span> stands, and the philosopher walks out having proven that Being Itself subsists. Stop him at the door and ask what God is, in Himself. What does he have?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Everything needed: to prove that a thing is, is to know what it is.",
                "feedback": "Part I's very first distinction forbids this: what a thing is and that it is are two questions, and the whole course ran on their difference. The proofs conclude to existence, not to a view of the essence. The philosopher holds a that with no what."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Negations and analogies: what God is not, and how creatures may speak of Him; the essence itself unseen.",
                "feedback": "Respondeo: this is the honest inventory of natural theology's winnings (cf. ST I q.3, proem.). Simplicity, eternity, unity: each a creaturely limit denied. Good, wise, living: each said by analogy, mode confessedly limping. The ladder is real and the roof is real. What stands above the roof, reason cannot climb to."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing at all: the proofs were words, and the door he exits opens onto agnosticism.",
                "feedback": "An overcorrection the course has already refused. The demonstrations stand; that God is, that He is one, simple, unlimited: these are owned, not rented. The poverty is real but bounded: reason holds true conclusions about God while never seeing what He is. Half-full is not empty."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A feeling of the sacred, which is what the arguments were secretly about.",
                "feedback": "The arguments were about being, and they concluded, and feelings were consulted nowhere in the chain. Reducing reason's climb to sentiment insults the climb; a stranger move waits ahead that reduces revelation the same way, and it has been condemned by name. Keep the ledger exact: conclusions, not moods."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l1-q2`,
          type: "mcq",
          stem: `The tradition has a name for reason's winnings: the <span class="lat">praeambula fidei</span>, the preambles of faith. In the theology's ledger, what was the whole philosophy course?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A rival account of God, now to be corrected by the true one.",
                "feedback": "Nothing in Part I gets corrected here; it gets employed. The demonstrations of Part I are not a competing religion but reason's own preparation, and faith will lean on them the way a builder leans on surveyed ground. Rivalry is the wrong picture entirely."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A devotional warm-up, useful for motivation, logically dispensable.",
                "feedback": "Dispensable it is not: faith presupposes natural knowledge the way grace presupposes nature. Strip the preambles away and the act of faith still stands on God's authority, but the mind meets revelation unprepared, and error breeds in exactly that dark. The course was groundwork, not mood-setting."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The preambles: reason's work that faith presupposes, as grace presupposes nature.",
                "feedback": "Respondeo, in Aquinas's own words: the existence of God and other like truths about God, which can be known by natural reason, are not articles of faith, but are preambles to the articles; for faith presupposes natural knowledge, even as grace presupposes nature (ST I q.2 a.2 ad 1). Eighteen modules of preamble, and none of it wasted."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The articles of faith themselves, reached the hard way.",
                "feedback": "The hard way reached real conclusions, but not the articles. What reason demonstrates is precisely not believed on authority; it is seen. The articles begin where the seeing stops: Trinity, Incarnation, grace. The preamble ends at the threshold it was always walking toward."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t1-l1-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "If revelation was coming anyway, the philosophy was wasted effort."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. A gift from above makes the ladder below it a vanity.",
                "feedback": "Grace does not despise nature; it presupposes and perfects it. The gift honors the ladder: faith leans on reason's preambles, borrows its distinctions, and answers its questions. A vanity would be a ladder built to replace the gift. This one was built to receive it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Revelation repeats reason's conclusions, and repetition is waste.",
                "feedback": "It repeats some of them, and Aquinas gives the unsentimental reason why that repetition was necessary: left to reason alone, those truths would be known by few, late, and with errors mixed in. Revelation of the knowable is mercy on the many, not redundancy for the few."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Faith presupposes natural knowledge; the ladder is honored, not kicked away.",
                "feedback": "Respondeo: grace presupposes nature, and faith presupposes the natural knowledge the course spent eighteen modules building (ST I q.2 a.2 ad 1). Theology will use every distinction Part I forged, starting tonight. The effort was not wasted; it was commissioned."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Philosophy is its own reward, whatever theology does with it.",
                "feedback": "True as far as it goes, and it does not go far enough for this course. Philosophy is worth having for itself; but the claim on the table was about waste relative to revelation, and the answer to that is the presupposition structure, not a consolation prize. The tools were made to be used."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t1-l1-q4`,
          type: "mcq",
          stem: `It cost you months to reach <span class="lat">esse</span>, with a course pointing the way. Aquinas asks the sharper question: what would the truth about God cost mankind if reason were the only road (ST I q.1 a.1)?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing serious; the truth is public, and public things get found.",
                "feedback": "Found by whom, and when, and in what condition? The metaphysics that crowns natural theology is the hardest ground in philosophy; most of the race has fields to plow and children to raise. Public in principle is not possessed in fact. Aquinas counts the actual cost, and it is heavy."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It would be known only by a few, after a long time, and with the admixture of many errors.",
                "feedback": "Respondeo, verbatim: the truth about God such as reason could discover, would only be known by a few, and that after a long time, and with the admixture of many errors; whereas man's whole salvation depends upon the knowledge of this truth (ST I q.1 a.1). Hence revelation even of the reason-reachable: mercy on the many, speed for the short-lived, purity for the error-prone."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Total loss: without revelation, reason finds nothing of God at all.",
                "feedback": "Aquinas's argument runs on the opposite premise: reason CAN discover truths about God, which is exactly why the question of its sufficiency arises. Deny reason's reach and you have overshot into a ditch the Church will later condemn by name. The problem is not blindness; it is fewness, slowness, and mixture."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A delay only; given enough centuries, philosophy delivers everyone.",
                "feedback": "The centuries have been given, and the delivery rate speaks for itself. But even granting the optimism, souls do not live in the aggregate: a man saved by truth needs it in his own seventy years, not in philosophy's seventy centuries. Salvation's timetable is why the teaching came by revelation."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l1-q5`,
          type: "mcq",
          stem: `Draw the ceiling exactly. Which truths could reason never reach, even in principle, given endless time and genius?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The mysteries hidden in God: Trinity, Incarnation, grace; the supernatural order as such.",
                "feedback": "Respondeo: what God is in His inner life, and what He has freely done above nature's order, no created reasoning could derive; unless divinely revealed, these cannot be known (cf. Dei Filius, cap. 4). The ceiling is not a failure of effort but a fact of proportion: finite light, infinite depth. Above the ceiling, only speech from above."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "God's existence, which the Ways only made probable.",
                "feedback": "The Ways demonstrate; they do not handicap. God's existence sits below the ceiling, among the preambles, knowable with certainty by the natural light: the Church will define exactly that against those who doubt it. Do not surrender ground reason actually holds."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing, in principle; genius given infinite time derives all truth.",
                "feedback": "A mystery is not a very hard theorem. The Trinity is not waiting at the end of a longer proof; no chain of created premises concludes to God's inner processions, because every premise reason owns is drawn from creatures. The ceiling is structural. Time does not dissolve proportion."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Moral truths; reason handles metaphysics but not conduct.",
                "feedback": "Backwards from the course you just took: the natural law modules were reason working conduct out loud. Much of morality sits comfortably below the ceiling. What sits above it is not ethics but the inner life of God and His free elevations of nature. The line runs higher than conduct."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t1-l1-q6`,
          type: "fill_blank",
          stem: `Set the ceiling in stone. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Reason can prove <span class="fb-blank" data-blank="b1">______</span> God is; it cannot see <span class="fb-blank" data-blank="b2">______</span> He is; and the truths it could reach would come to few, late, and mixed with <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          latin_tag: `praeambula fidei`,
          doctrine_line: `Reason proves that God is and stops before what He is; its work is the preambles, and faith presupposes them.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "that"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "what"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "errors"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "that",
              "what",
              "why",
              "errors",
              "ease",
              "doubts",
              "feelings",
              "proofs"
            ],
            "feedback": {
              "all_correct": "Locked: that, what, errors. The course's first distinction, carried to the top of the ladder: a that without a what, and even the that arriving few, late, and mixed when reason walks alone. The whole case for revelation is in those three blanks.",
              "partial_correct": "Some blanks resisted. What versus that is Part I's oldest tool: the proofs deliver that God is, never a sight of what He is. And Aquinas's sober census (ST I q.1 a.1): few knowers, long delays, many errors."
            }
          },
        }
      ],
    },
    {
      id: `t1-l2`,
      num: `II`,
      title: `God Has Spoken`,
      latin: `depositum fidei`,
      tag: `depositum fidei`,
      fin: {
        tag: `depositum fidei`,
        heading: `A letter you could not have written.`,
        body: `Revelation is not humanity's best guess promoted, nor religious experience written up. It is God speaking: truths above reason's ceiling, handed down and handed over. The tradition's word is <span class="lat">depositum fidei</span>, the deposit of faith, and it has a closing date: public revelation was complete with the Apostles, and the claim that it kept growing was condemned by name. The deposit is also one cloth: refuse a single thread on God's authority and what remains is not a smaller faith but no faith, only opinion in the shape of faith. Understanding grows; the deposit does not. How such a letter is received, and by what strange virtue, is the next lesson.`,
        distinction: {
          latin: `depositum fidei`,
          english: `the deposit of faith`,
          gloss: `Revelation closed with the Apostles and held whole: one cloth, guarded, never grown.`,
          motif: `wax-seal`,
        },
      },
      questions: [
        {
          id: `t1-l2-q1`,
          type: "mcq",
          stem: `A letter arrives that answers questions you never managed to ask, in a hand steadier than any you know, about matters no one on earth could testify to. You could not have written it to yourself. What is revelation?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Humanity's religious genius at its best, gathered and canonized.",
                "feedback": "Genius writes from below, and its letters read like it: sublime guesses, local colors, corrections every century. This letter claims an Author outside the room, and treats of things no genius could witness. The moderns tried exactly this reduction, and the Church answered with a condemnation, not a compliment.<span class=\"condemned\">Modernism · condemned, Lamentabili prop. 22, 1907</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "God's own speaking: truths delivered from above, on the Author's authority.",
                "feedback": "Respondeo: revelation is God teaching what eye had not seen: some truths reason could have reached but slowly and badly, and mysteries it could never reach at all. The letter's warrant is its Author, and the Author can neither deceive nor be deceived. Everything in this course arrives in that envelope."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Reason's conclusions, dressed in story so the many can carry them.",
                "feedback": "Then the Trinity would be a theorem in costume, and no theorem concludes to it; the ceiling lesson stands. Revelation includes what no syllogism from creatures delivers. Stories carry much of it, but the cargo outweighs any dress reason could have cut."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The community's record of its encounters with the sacred.",
                "feedback": "Records of encounters run from below and bind no one beyond the campfire. This letter binds, because it claims and proves a sender above every community. The dogmas-as-experience-write-up thesis is the same modern move as option one, and it fell under the same census of errors."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l2-q2`,
          type: "mcq",
          stem: `Public revelation has a last page. When was it written?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It has no last page; revelation grows as the Church grows.",
                "feedback": "This exact sentence sits in the Church's syllabus of condemned propositions: that revelation, constituting the object of Catholic faith, was not completed with the Apostles. The deposit was delivered once, whole, to be guarded. Growth belongs to understanding, never to the deposit.<span class=\"condemned\">Modernism · condemned, Lamentabili prop. 21, 1907</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At Trent, when the canon and doctrines were fixed against the reformers.",
                "feedback": "Trent defined and defended; it did not receive new revelation, and would have anathematized the suggestion. Councils spend the deposit's own coin: they guard and expound what was already handed over. The last page predates every council that ever cited it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "With the death of the last Apostle: the deposit complete, entrusted, closed.",
                "feedback": "Respondeo: what Paul commanded Timothy names the whole economy: guard the deposit (1 Tim 6:20). Delivered to the Apostles, complete with them, transmitted since: the depositum fidei. Private revelations may still visit the saints; they bind no one and add nothing. The public letter is finished, and the Church is its keeper, not its co-author."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Each age receives its own edition, suited to its needs.",
                "feedback": "Then no age could be corrected by the letter, since every age would be holding its own. An edition per era is revelation dissolved into the mood of the reader. The Church's teaching runs opposite: one deposit, all ages, the same sense; the ages are measured by it, never it by the ages."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t1-l2-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "Because revelation is closed, the Church's understanding of it is frozen too."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. A closed source permits no movement of any kind.",
                "feedback": "The Council says otherwise, and warmly: may understanding, knowledge and wisdom increase, as ages and centuries roll along, and greatly and vigorously flourish. The deposit is closed; the penetration of it deepens. A sealed spring still feeds a growing river."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Frozen is what faithful means; development talk is disloyalty.",
                "feedback": "Loyalty guards the sense, not the standstill. Vatican I blesses growth in the same breath that forbids sense-change: increase, but in its own proper kind, in the same doctrine, the same sense, and the same understanding. The frost picture mistakes the guardrail for the road."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Understanding rightly changes dogma's meaning as each age requires.",
                "feedback": "Right verdict, condemned reason. Meaning-change dressed as understanding is the exact misrepresentation the Church put under oath against: dogmas do not evolve from one meaning to another different from the one the Church held previously. The thaw you are defending is the freeze's opposite error.<span class=\"condemned\">Modernism · condemned, Sacrorum Antistitum, 1910 · DS 3541</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Understanding deepens while the sense stays the same; the deposit does not grow, penetration does.",
                "feedback": "Respondeo: growth in understanding, yes, and only in the same doctrine, the same sense, and the same understanding (Dei Filius, cap. 4). The acorn-to-oak of dogma is deepening grasp of one meaning, never a swap of meanings. Closed deposit, living study: both, without strain."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t1-l2-q4`,
          type: "mcq",
          stem: `A modern habit: receive the faith like a menu, keep the consoling dishes, send back the hard ones. Aquinas examines the diner. What is left on his table?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A smaller but genuine faith: fewer articles, same virtue.",
                "feedback": "The arithmetic fails because faith is not a stack of separate assents. One motive carries all the articles: God's authority revealing. Refuse one article and you have dismissed the witness himself; what remains cannot be running on his word. Smaller faith is not faith at a discount. It is the counterfeit."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Opinion in faith's clothing: he now believes himself, agreeing with God where convenient.",
                "feedback": "Respondeo, in Aquinas's own hard words: neither living nor lifeless faith remains in a heretic who disbelieves one article of faith; he has no faith in the other articles, but only a kind of opinion in accordance with his own will (ST II-II q.5 a.3). The menu-reader's rule of selection is his own judgment, so his own judgment is what he actually believes. The deposit is one cloth."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Full faith, provided the refused article was a minor one.",
                "feedback": "Articles do not come in skippable sizes, because none of them is held on its own evidence; each is held on the Author's word. To call an article minor enough to refuse is to say the Author may err in small things, and a witness who errs in small things is impeached for all. The cloth has no optional threads."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Honest doubt, which is faith's respectable cousin.",
                "feedback": "Honest difficulty is faith's constant companion; ten thousand difficulties, as the saying goes, do not make one doubt. But the diner is not struggling to hold the hard dish; he has sent it back with a verdict. Deliberate refusal of the witness is not a cousin of faith. It is the door out of it."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l2-q5`,
          type: "mcq",
          stem: `Why is the letter trustworthy? Not the messengers, not the parchment: the root warrant.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It has survived every empire that tried to burn it.",
                "feedback": "A magnificent fact and a secondary one. Survival commends the letter to a historian; it cannot ground the assent of faith, since sturdy errors also survive. The endurance is evidence about the letter. The warrant is the Author."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Church enforces it, and enforcement settles questions.",
                "feedback": "The Church proposes and guards the letter; she does not make it true, and she would anathematize the compliment. Her authority is the postman's seal, real and necessary, resting on the Sender's. Enforcement without a truthful Author would be power, not faith."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The authority of God revealing, who can neither deceive nor be deceived.",
                "feedback": "Respondeo: the Council's own words: because of the authority of God himself, who makes the revelation and can neither deceive nor be deceived (Dei Filius, cap. 3 · DS 3008). Omniscience cannot be deceived; holiness cannot deceive. The letter is trustworthy because of whose word it is. That motive, and no other, is faith's ground."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It rings true in the heart, and the heart knows its own.",
                "feedback": "Hearts ring for many letters, including forgeries; consolation is a fruit here, not a foundation. Ground the letter on the reader's resonance and each reader becomes the author of his own gospel. The ground is outside the reader entirely, in the One who cannot lie."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t1-l2-q6`,
          type: "fill_blank",
          stem: `The deposit, dated and sealed. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Revelation was complete with the <span class="fb-blank" data-blank="b1">______</span>; the Church guards this <span class="fb-blank" data-blank="b2">______</span> of faith; understanding may grow, but always in the same <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          latin_tag: `depositum fidei`,
          doctrine_line: `Revelation is God's own speaking, complete with the Apostles, held whole: the deposit of faith.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "Apostles",
                  "apostles"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "deposit",
                  "depositum"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "sense"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "Apostles",
              "councils",
              "deposit",
              "library",
              "sense",
              "direction",
              "volume",
              "century"
            ],
            "feedback": {
              "all_correct": "Locked: Apostles, deposit, sense. The letter is finished, entrusted, and read ever more deeply in one unchanging meaning. Every module after this one spends from that deposit and adds nothing to it, on principle.",
              "partial_correct": "Some blanks resisted. Complete with the Apostles (the contrary is condemned, Lamentabili prop. 21); held as the depositum fidei; growing only in understanding, in the same doctrine, the same sense, the same understanding (Dei Filius, cap. 4)."
            }
          },
        }
      ],
    },
    {
      id: `t1-l3`,
      num: `III`,
      title: `Faith Is Not a Feeling`,
      latin: `fides`,
      tag: `fides`,
      fin: {
        tag: `fides`,
        heading: `Certainty without seeing.`,
        body: `<span class="lat">Fides</span> is an act of the mind, and the moderns denied precisely that. Their counterfeit was solemnly renounced under oath: faith is not a blind sentiment of religion welling up from the depths of the subconscious, but a genuine assent of the intellect to truth received by hearing. The believer does not see the Trinity; he sees the trustworthiness of the Witness, and his certainty is the Witness's own. That is why faith is dark and firm at once: the obscurity belongs to the object, the firmness to the motive. And it is a supernatural virtue: the assent is God's gift before it is the believer's act. If faith is real knowing on real authority, a stranger question opens: can there be a science of it? Next lesson climbs into the architect's office.`,
        distinction: {
          latin: `fides`,
          english: `faith`,
          gloss: `Certain assent on the authority of God who reveals: dark where it looks, unshakable where it stands.`,
          motif: `sun-silhouette`,
        },
      },
      questions: [
        {
          id: `t1-l3-q1`,
          type: "mcq",
          stem: `You have never seen Antarctica, your own birth, or the inside of your friend's mind. Most of what you know arrived by trusting witnesses. Is assent on testimony really knowledge?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes, when the witness is competent and truthful; testimony is one of knowledge's ordinary doors.",
                "feedback": "Respondeo: the certificate on your wall, the map on your phone, the date of your birth: all held firmly, none of it seen, every bit of it knowledge in good standing. Assent on adequate testimony is how finite minds inherit more than they can verify. Faith will be this door, with an infinite Witness behind it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No; knowledge means seeing for yourself, and everything else is guesswork.",
                "feedback": "Then each man knows a village and guesses a universe, and every court, laboratory, and history book runs on guesswork. The seeing-only standard destroys the sciences it means to flatter, since even the physicist trusts a thousand reports he never reran. Testimony is not the failure of knowing. It is most of it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It is practical reliance, useful for living, but never true assent.",
                "feedback": "You do not merely rely on your birth date the way one relies on a weather forecast; you would stake arguments, documents, and oaths on it. The assent is genuine, firm, and truth-claiming. Downgrading testimony to mere use is the first step of the sentiment theory, and it should be refused at the door."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Only when the testimony can in principle be checked in person.",
                "feedback": "The checkable-in-principle clause quietly excludes exactly the cases that matter: your birth, the mind of your friend, the far side of history. Testimony's worth rests on the witness's competence and honesty, not on your travel budget. Some witnesses can vouch for what no visit could show you."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t1-l3-q2`,
          type: "mcq",
          stem: `The Church defines the act. Read the definition, then answer.<div class="auctoritas"><div class="formula"><span class="bl">&para;</span>This faith, which is the beginning of human salvation, the catholic church professes to be a supernatural virtue, by means of which, with the grace of God inspiring and assisting us, we believe to be true what He has revealed, not because we perceive its intrinsic truth by the natural light of reason, but because of the authority of God himself, who makes the revelation and can neither deceive nor be deceived.<span class="cite">Concilium Vaticanum I, Dei Filius, cap. 3, 1870 · DS 3008</span></div></div>On this definition, what makes the assent of faith reasonable?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The intrinsic evidence of each mystery, seen clearly once explained.",
                "feedback": "The definition rules this out in so many words: not because we perceive its intrinsic truth by the natural light of reason. If the mysteries were intrinsically evident, faith would be sight and merit would vanish. The reasonableness sits elsewhere in the sentence: read on past the not."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The motive: the authority of God revealing, who can neither deceive nor be deceived.",
                "feedback": "Respondeo: an omniscient Witness cannot be deceived; an all-holy Witness cannot deceive. Assent on that authority is the most reasonable act a mind can perform about matters above its sight, more reasonable than trusting the surveyor, the historian, or your own tired eyes. Faith's motive is the strongest warrant in the world, borrowed by the weakest knowers in it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The consolation it brings; a belief that heals is thereby warranted.",
                "feedback": "Consolation is a fruit and sometimes absent; the saints report long winters of dryness with faith intact. Ground assent on comfort and the first desolation refutes the creed. The definition grounds it on the Revealer, which is why the desolate believer is not an ex-believer."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The number of believers; so great a cloud of witnesses cannot err.",
                "feedback": "Multitudes have erred at scale, and the Church was founded precisely to outvote no one. The cloud of witnesses commends the faith to inquiry; it is not the motive of the act. One Witness above the cloud carries the whole assent."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l3-q3`,
          type: "distinction_application",
          stem: `Three assents, fixed. Science: assent compelled by evidence seen. Opinion: assent inclined, with fear the opposite may be true. Faith: assent certain and firm, on the authority of a witness, without inner sight of the thing. Classify: a Catholic's assent to the Trinity.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Opinion, since the doctrine is unseen and unproven.",
                "feedback": "Opinion trembles by definition: it holds with fear of the contrary. The martyrs did not tremble; they sang. Unseen does not mean unsure when the warrant is a Witness who cannot err. The classification misses the third column entirely, which exists precisely for this case."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Science, since theology demonstrates the Trinity from its principles.",
                "feedback": "Theology shows the doctrine coherent and answers every objection; it derives the mystery from nothing, because nothing creaturely concludes to it. The assent to the premise itself rides on authority, not demonstration. Call it science and you have promised a proof no one has, which is how apologetics embarrasses itself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Faith: certain assent on God's authority, firm without inner sight.",
                "feedback": "Respondeo: unseen, undemonstrated, and held more firmly than the multiplication table, because the Witness outranks every evidence the believer could inspect. The strange pairing of darkness and certainty is not a defect of faith; it is its exact anatomy. Object obscure, motive unshakable."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A fourth kind: religious commitment, which is a doing rather than an assent.",
                "feedback": "Commitment follows the assent and lives off it; a man commits to what he first holds true. Make faith pure doing and it claims nothing, and what claims nothing can never be contradicted, or true. The Church's definition keeps faith in the mind's column: believing truths, on authority."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t1-l3-q4`,
          type: "mcq",
          stem: `The counterfeit, met head on. A modern voice: "Faith is deeper than doctrines. It is the religious sense rising from within, and the formulas merely express it." The Church heard this exact theory. What did she do?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Adopted it, as a humbler account of belief for a scientific age.",
                "feedback": "She did nearly the opposite, and put the refusal under oath for every priest and professor. A faith welling from within has each believer as its spring, and springs disagree; the deposit dissolves into biography. Humility before the age is not a virtue when the age is wrong about the soul.<span class=\"condemned\">Modernism · condemned, Pascendi, 1907</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Condemned it, and bound the clergy by oath: faith is assent of the intellect to truth heard.",
                "feedback": "Respondeo, in the Oath's own words: faith is not a blind sentiment of religion welling up from the depths of the subconscious, but a genuine assent of the intellect to truth received by hearing from an external source (Sacrorum Antistitum, 1910 · DS 3542). The letter comes from outside; the sense-from-within theory makes every man his own revelation, and it was condemned by name."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Ruled it acceptable for laity, though too soft for theologians.",
                "feedback": "The Church does not keep two doctrines of faith, one per tax bracket. The sentiment theory was condemned for everyone, precisely because the ordinary believer is the first person it robs: his creed becomes his mood. The oath was imposed on the teachers to protect the taught."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Left it open, as Rome left the grace debates open.",
                "feedback": "The De Auxiliis pattern covers disputes between orthodox positions; this was not one. The sentiment theory unseats revelation itself, so Rome closed it with a syllabus, an encyclical, and an oath inside four years. Knowing which questions Rome left open, and which she slammed shut, is half the discipline of this course."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l3-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "Faith is certain, therefore the believer must in some way see what he believes."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Certainty is proportioned to sight; no vision, no firmness.",
                "feedback": "Your own case refutes the axiom nightly: you are certain of your birth date and saw nothing of the day. Certainty follows the warrant, and warrants come in two kinds: the thing seen, or the witness trusted. Faith runs entirely on the second, with the best Witness there is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The saints report an inner sight that ordinary believers lack.",
                "feedback": "The saints report the opposite with distressing consistency: night, cloud, dryness, and firmness straight through it. Mystical consolations exist and prove the rule: they are gifts alongside faith, not its ground. The Carmelite in darkness believes with the same anatomy as the child at catechism."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The certainty comes from the Witness, not from vision; obscurity of object and firmness of assent coexist.",
                "feedback": "Respondeo: faith's object stays dark in this life; its motive is luminous. The believer does not see the Trinity, he sees that God has spoken and cannot lie, and the firmness of the second carries the darkness of the first. Certainty without seeing is not a paradox. It is what trusting the truthful means."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Faith is not certain at all; it is a brave wager.",
                "feedback": "Right verdict on the seeing, wrong surrender on the certainty. A wager trembles by nature, and the Church defines faith as firm assent; martyrs are not gamblers hedging a bet. The claim fails because certainty has two springs, not one, and faith drinks from the deeper."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t1-l3-q6`,
          type: "mcq",
          stem: `The definition called faith a supernatural virtue, with grace inspiring and assisting. What does the word supernatural add to everything this lesson has said?`,
          latin_tag: `fides`,
          doctrine_line: `Faith is a supernatural virtue of the intellect: certain assent to what God has revealed, on His authority, not on inner sight or sentiment.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That the assent is God's gift before it is the believer's act; no one argues himself into faith.",
                "feedback": "Respondeo: the definition says grace inspiring and assisting, and it means the beginning too: the very power to make this assent is given from above (Dei Filius, cap. 3). Apologetics can clear the road; only grace moves the traveler. This door opens fully in the grace modules; walk past it knowing it is there."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That the content is exotic; supernatural describes the strangeness of the mysteries.",
                "feedback": "The mysteries are indeed above nature, but the word in the definition modifies the virtue, not the syllabus. It is the act of believing that exceeds nature's powers, however homely the article believed. A man needs grace to believe the simplest line of the creed on God's authority."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That faith bypasses the mind, arriving as pure gift without an act of assent.",
                "feedback": "Gift and act are not rivals; grace moves the mind to do its own believing, freely. Bypass the intellect and you are back at the sentiment theory through the servants' entrance. The whole lesson holds: genuine assent of the intellect, and genuinely given from above. Both, without subtraction."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That the certainty is emotional after all, since gifts are felt.",
                "feedback": "Some gifts are felt; this one is often held in the dark, which is the lesson's whole refrain. Grace elevates the assent's power, not its temperature. The believer may feel nothing and believe everything, and heaven counts the second."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t1-l4`,
      num: `IV`,
      title: `A Science From Above`,
      latin: `sacra doctrina`,
      tag: `sacra doctrina`,
      fin: {
        tag: `sacra doctrina`,
        heading: `The architect keeps the surveyor.`,
        body: `<span class="lat">Sacra doctrina</span> is a science, and a strange one: it borrows its first principles, the way music borrows from mathematics, from the science of God and the blessed. Its premises are revealed; its arguments are real arguments; its conclusions are owned, not felt. And it employs the whole of Part I: philosophy serves it, in Aquinas's blunt phrase, as of the lesser, and as handmaidens, not because theology is needy but because our intelligence is, climbing more easily from the natural to what is above it. In that court the old rule inverts: the authority argument, weakest in philosophy, is here the strongest of all, for the authority is God revealing. One question remains before the module closes its frame: two lights, one Author. Can they ever really cross? Next lesson.`,
        distinction: {
          latin: `sacra doctrina`,
          english: `sacred doctrine`,
          gloss: `A true science proceeding from God's own knowledge, with philosophy for its handmaid.`,
          motif: `ladder-of-ratios`,
        },
      },
      questions: [
        {
          id: `t1-l4-q1`,
          type: "mcq",
          stem: `An architect designs a cathedral. A surveyor measures the ground, and his instruments are excellent. Which science is theology, in this picture, and why does the picture matter?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The surveying, since theology measures the ground of all the sciences.",
                "feedback": "Inverted: surveying serves the design, taking its brief from above. Theology does not take its brief from the sciences it employs; it receives its principles from higher up than any of them reach. The instruments in this picture belong to the other man, and Part I forged them."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The architecture: it works from the owner's own plans and employs the measuring sciences beneath it.",
                "feedback": "Respondeo: sacra doctrina builds from plans it did not draft, delivered by the Owner, and it hires every honest instrument on the site. The surveyor's mathematics is not insulted by the arrangement; it is employed at the one work worth measuring. Part I was the surveying. Welcome to the architect's office."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither; theology is the cathedral itself, a thing built rather than a science.",
                "feedback": "Handsome, and it forfeits the lesson: Aquinas insists theology is a scientia, a discipline with principles, arguments, and conclusions, not merely an edifice to admire. The cathedral image belongs to the faith as lived. The science is the drafting room where its truths are ordered and defended."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The owner's taste: theology decorates what the real sciences construct.",
                "feedback": "Decoration is the one job description theology has never accepted. It argues, defines, condemns, and demonstrates conclusions from its principles; wallpaper does none of these. The modern arrangement that keeps theology as ornament over a scientific building was condemned within living memory of its proposal."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l4-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>So it is that sacred doctrine is a science because it proceeds from principles established by the light of a higher science, namely, the science of God and the blessed. Hence, just as the musician accepts on authority the principles taught him by the mathematician, so sacred science is established on principles revealed by God.</p><div class="cr-cite">ST I, q. 1, a. 2, co. · trans. Fathers of the English Dominican Province · verified against New Advent</div></div>Music does not prove its ratios; it receives them from mathematics and composes. Find what this makes theology.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A subalternate science: real, argumentative, with first principles received from God's own knowledge.",
                "feedback": "Respondeo: theology stands under God's knowledge as music stands under mathematics: borrowing its principles, then genuinely working. The scientia of God and the blessed sees what we receive as articles; theology argues from them with full rigor. Received premises, real science. The combination is the whole design."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A failed science: real sciences prove their own principles.",
                "feedback": "By that standard geometry fails too, resting on axioms it cannot prove, and every science fails, since none demonstrates its own first principles; that was Part I's logic module. Sciences receive their principles from somewhere. Theology's somewhere is simply higher than anyone else's."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A provisional science, holding its principles until they can be demonstrated.",
                "feedback": "The musician is not waiting to redo the mathematics, and theology is not waiting to see God; in this life the principles stay received. Provisional describes a scaffold; these premises are foundation stone, held on an authority no future demonstration could out-warrant. The waiting ends in vision, not in proof."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A poetic science: the passage's analogy admits theology runs on images.",
                "feedback": "The analogy is doing what analogies do in an argument: exhibiting a structure, here the borrowing of principles. Nothing in it demotes the borrowed content to imagery. Aquinas will spend four thousand articles arguing from these principles with a rigor no poet is held to."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t1-l4-q3`,
          type: "mcq",
          stem: `Then what, exactly, was Part I for? Aquinas assigns philosophy its title in this house.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The judge: philosophy examines revelation's claims and licenses the credible ones.",
                "feedback": "A judge outranks the defendant, and nothing outranks the principles received from God. Set reason above revelation as its licensing board and you have rationalism, which the next lesson meets with its condemnation attached. The examiner's office exists; it is called the preambles, and it operates below the articles, not above them."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The handmaid: employed to make teaching clearer, because our minds climb from the natural.",
                "feedback": "Respondeo: theology uses the philosophical sciences as of the lesser, and as handmaidens; and it does so not due to its own defect or insufficiency, but to the defect of our intelligence, which is more easily led by what is known through natural reason to that which is above reason (ST I q.1 a.5 ad 2). The title is honorable and exact: indispensable to us, subordinate to the science."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The rival: two accounts of reality, negotiating a border.",
                "feedback": "Rivals share a rank, and these two do not; one receives its premises from the Author of the other's whole subject matter. The border metaphor produces the two-compartment mind, and the tradition rejected that evasion centuries before it became respectable. One reality, two lights, one hierarchy."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The retired founder: honored, framed, no longer consulted.",
                "feedback": "Consult the next fourteen modules: suppositum at the Trinity, substance at the altar, habitus in grace, signs in the sacraments. Philosophy is on every page as working equipment. Nothing about the handmaid is retired; she carries the instruments up the scaffold daily."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l4-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "Theology needs philosophy the way a building needs its foundation."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Remove the metaphysics and the theology collapses; that is what foundations mean.",
                "feedback": "Tempting, after a course that built the metaphysics first. But Aquinas is explicit: sacred doctrine accepts its principles not from other sciences, but immediately from God, by revelation. The faith of a peasant with no metaphysics stands on the same foundation as the Summa: God's word. Philosophy serves the exposition, not the standing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Historically the Church built on Greek philosophy, and history is destiny.",
                "feedback": "Historically she also converted the philosophy she used, correcting Aristotle where the deposit required. A foundation cannot be corrected by the house standing on it. The relation runs the other way: the deposit judged the philosophy, kept what served, and reforged the rest. That is employment, not dependence."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Its principles come immediately from God; philosophy serves our weakness, not theology's need.",
                "feedback": "Respondeo: not as though it stood in need of them, but only in order to make its teaching clearer; the use is due to the defect of our intelligence, not of the science (ST I q.1 a.5 ad 2). The foundation is revelation. The handmaid carries lamps through it for climbers like us. Load-bearing and lamp-bearing are different offices."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Theology and philosophy never actually touch, so neither supports the other.",
                "feedback": "Right verdict, and a partition the whole module contradicts: they touch on every page, or the handmaid would have nothing to carry. The claim fails not because the two are strangers but because the dependence runs through our weakness rather than theology's want. Contact everywhere, need nowhere."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t1-l4-q5`,
          type: "mcq",
          stem: `In Part I, citing an authority was the weakest move at the table. Theology turns the table around. Why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because theology's authorities are older, and age confers weight.",
                "feedback": "Age confers manuscripts, not warrant; old error is a genre. The inversion has nothing to do with the calendar. Ask instead who the authority is, and what kind of knower stands behind the citation, and the answer arrives at once."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the faithful accept authority more readily, so the argument works better here.",
                "feedback": "What an audience accepts measures rhetoric, not truth; the tradition never grades arguments by their reception. The authority argument is strongest in theology for a reason about its source, and it would remain strongest if every hearer in the room resisted it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because here the authority is God revealing: the weakest warrant among men is the strongest when the witness is omniscient.",
                "feedback": "Respondeo: the argument from authority based on human reason is the weakest, yet the argument from authority based on divine revelation is the strongest (ST I q.1 a.8 ad 2). Human authorities can err, so citing them settles little. The Witness here cannot err or lie, so citing Him settles everything He has said. Same move, transfigured source."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because theology, lacking demonstrations, must make do with citations.",
                "feedback": "Theology demonstrates constantly: from its revealed premises it argues to conclusions with full logical rigor, as fourteen modules ahead will show. The citation is not a crutch where proof failed; it is the delivery of the premise itself, from the one source entitled to hand premises down."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t1-l4-q6`,
          type: "fill_blank",
          stem: `The office, chartered. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Sacred doctrine is a <span class="fb-blank" data-blank="b1">______</span> whose principles are received from <span class="fb-blank" data-blank="b2">______</span>; philosophy serves it as <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          latin_tag: `sacra doctrina`,
          doctrine_line: `Sacred doctrine is a true science, proceeding from principles revealed by God, and it uses philosophy as its handmaid.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "science",
                  "scientia"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "God",
                  "revelation"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "handmaid",
                  "handmaiden"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "science",
              "feeling",
              "God",
              "Aristotle",
              "handmaid",
              "master",
              "rival",
              "footnote"
            ],
            "feedback": {
              "all_correct": "Locked: science, God, handmaid. A real science on borrowed principles, the borrowing from God's own knowledge, and eighteen modules of philosophy hired into honorable service. The architect's office is open for business.",
              "partial_correct": "Some blanks resisted. Scientia, like music under mathematics (ST I q.1 a.2); principles immediately from God by revelation; philosophy as handmaid, for our intelligence's sake, not the science's need (a.5 ad 2)."
            }
          },
        }
      ],
    },
    {
      id: `t1-l5`,
      num: `V`,
      title: `Faith and Reason Cannot Collide`,
      latin: `fides et ratio`,
      tag: `fides et ratio`,
      fin: {
        tag: `fides et ratio`,
        heading: `Two books, one Author.`,
        body: `The book of creation and the book of revelation carry one signature, so no page of the first can finally contradict a page of the second. Vatican I stated it for the ages: there can never be any real disagreement between faith and reason, since it is the same God who reveals the mysteries and infuses faith, and who has endowed the human mind with the light of reason. When contradiction appears, the Council names the only two suspects: doctrine misread against the mind of the Church, or an unsound view parading as reason's verdict. The believer's discipline follows: hold both lights, recheck both readings, amputate neither. Above reason is not against reason; a mystery exceeds the mind and never insults it. One question remains: who keeps the reading straight? Next lesson: the keeper who owns nothing in the museum.`,
        distinction: {
          latin: `fides et ratio`,
          english: `faith and reason`,
          gloss: `Two lights from one Author: no true quarrel is possible, and every apparent one has a culprit.`,
          motif: `lamps-one-sun`,
        },
      },
      questions: [
        {
          id: `t1-l5-q1`,
          type: "mcq",
          stem: `Two books arrive from one author. Page 40 of the first seems to contradict page 12 of the second. Before any investigation, what do you already know?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "One of the books is a forgery, and the honest reader must choose.",
                "feedback": "The signature on both is established; that was the preambles' work and the last lesson's. Forgery-hunting between creation and revelation is the reflex of a reader who forgot who signed them. The suspects live in the readings, not in the books."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The contradiction is apparent: at least one of the two readings is wrong.",
                "feedback": "Respondeo: one author does not contradict himself across his own books; the seeming clash convicts a reading, never the Author. Either page 40 was misread, or page 12 was, or both. The whole doctrine of this lesson is that sentence with the names filled in: nature misread, or doctrine misread. Truth cannot oppose truth."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The author changed his mind between books, as authors do.",
                "feedback": "Authors under time revise; the Author of both books is not under time, and His knowledge does not improve between volumes. Immutability was proven in Part I and will be doctrine in T3. Mind-changing is a creaturely explanation applied to the one case it cannot reach."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Both pages are true in their own separate worlds, and comparison was the mistake.",
                "feedback": "The two-worlds escape is the old double-truth evasion, and the tradition refused it long before the moderns rediscovered it. Truth is one because reality is one; a proposition cannot be true in the laboratory and false in the nave. Comparison was not the mistake. It was the homage truth pays to itself."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l5-q2`,
          type: "close_reading",
          stem: `The Council defines the peace, and names the two impostors. Read, then answer.<div class="auctoritas"><div class="formula"><span class="bl">&para;</span>Even though faith is above reason, there can never be any real disagreement between faith and reason, since it is the same God who reveals the mysteries and infuses faith, and who has endowed the human mind with the light of reason. God cannot deny himself, nor can truth ever be in opposition to truth. The appearance of this kind of specious contradiction is chiefly due to the fact that either the dogmas of faith are not understood and explained in accordance with the mind of the church, or unsound views are mistaken for the conclusions of reason.<span class="cite">Concilium Vaticanum I, Dei Filius, cap. 4, 1870 · DS 3017</span></div></div>On what does the impossibility of real conflict rest?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "On the Church's authority to silence one side when quarrels start.",
                "feedback": "The text grounds the peace in God, not in refereeing; the Church adjudicates readings precisely because the peace is already metaphysically guaranteed. A silencing power with no deeper ground would be armistice, not harmony. The Council's since-clause points higher than any tribunal."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "On the identity of the Giver: one God gives both lights, and He cannot deny Himself.",
                "feedback": "Respondeo: the same God reveals the mysteries and endowed the mind with reason; truth cannot oppose truth because both truths have one Source who cannot contradict Himself. The peace between faith and reason is not negotiated at their border. It is inherited from their common origin."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "On reason's good manners: it agrees not to examine what faith holds.",
                "feedback": "The Council praises reason's examinations and defines its real reach; nothing here muzzles inquiry. A peace kept by not looking would be fear wearing courtesy. The text locates the peace in God's self-consistency, which survives any amount of honest looking."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "On the weakness of both parties: neither sees enough to contradict the other.",
                "feedback": "Reason sees enough to demonstrate, and faith holds enough to define; these are not two fogs politely missing each other. The impossibility is grounded positively, in the one Author, not negatively in shared blindness. Weak parties can still collide; one self-consistent Source cannot."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l5-q3`,
          type: "mcq",
          stem: `A confident voice: "Physics has shown that the dead stay dead. So the Resurrection contradicts reason, and the Council's peace is broken." Run the Council's diagnosis. Which impostor is this?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "An unsound view mistaken for a conclusion of reason: physics describes nature's course, not what nature's Author can do.",
                "feedback": "Respondeo: the second impostor, in a lab coat. Physics states what bodies do left to themselves; the Resurrection was never a claim about bodies left to themselves. The sound conclusion of reason is that corpses do not self-start, and the Church teaches the same. Nothing in the syllogism touches an act of the Author of physics. Distinguo, and the peace stands."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A dogma misread against the mind of the Church: the Resurrection was always a metaphor.",
                "feedback": "That rescue sells the creed to save it: the Church's mind is brutal on the point, from the empty tomb to the article of the flesh. Metaphorizing the dogma is itself the first impostor committed in the other direction. The clash dissolves by distinguishing nature's course from nature's Lord, not by dissolving the doctrine."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A real conflict at last; the Council wrote before modern science matured.",
                "feedback": "The Council's ground was not the state of science but the self-consistency of God, which does not mature. Any finding physics ever makes describes creation's regularities; a miracle is the Creator acting above them, and no description of the rule refutes an exception worked by the Rulegiver. The peace was built to survive every laboratory."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither impostor; the sentence is meaningless and should be ignored.",
                "feedback": "The sentence means something false, which is different from meaning nothing, and ignoring it abandons the neighbor who said it. The Council gave the diagnostic precisely so such sentences could be answered rather than waved off. Name the smuggle: a statement of nature's course promoted into a verdict about nature's Author."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t1-l5-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "Faith is above reason, so at least sometimes it is against reason's rules."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Above the rules means exempt from them; mysteries may be contradictions we honor.",
                "feedback": "A mystery honored as a contradiction is an absurdity worshiped, and the Church has never asked for one. The Trinity is not one God and not-one God in the same respect; every definition labors to exclude exactly that. Above reason's reach, always; against reason's laws, never. The distinction is the whole battle."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Credo quia absurdum: the tradition itself boasts of believing the absurd.",
                "feedback": "The tag is not the tradition's; it is a misquote worn smooth, and the Church's actual definitions run the other way: faith is reasonable service, and the Council anathematizes the claim that faith and reason can truly disagree. The tradition's boast is stranger and better: nothing God has said, rightly read, is absurd."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Above is not against: mysteries exceed reason's reach and never violate its laws.",
                "feedback": "Respondeo: a truth above reason outruns the mind's sight; a truth against reason would unmake the mind's laws, and one Author gives both the truth and the laws. The mysteries are supra-rational, not irrational: too much light, never darkness posing as light. This is the reception register's exact motto: state it precisely, and see why it is not absurd."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Nothing is above reason; given time, the mysteries will be demonstrated.",
                "feedback": "Right verdict on the against, and the rescue tips into the opposite ditch: rationalism, which the same Council condemned. The mysteries stay above reason in this life and in every life; the ceiling was structural, not scheduling. Faith neither fights reason nor waits to be replaced by it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t1-l5-q5`,
          type: "mcq",
          stem: `The road between two ditches. Name the ditches, and the road.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The ditches are doubt and certainty; the road is permanent open-mindedness.",
                "feedback": "Certainty is not a ditch; the Council defines faith as certain and reason as genuinely knowing. A road of permanent suspension arrives nowhere, which is the one thing roads may not do. The real ditches are two accounts of the lights, each killing one of them."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Fideism, which despairs of reason; rationalism, which puts reason over revelation; the road holds both lights in their order.",
                "feedback": "Respondeo: one ditch drowns reason to exalt faith, and the Church condemned it: God can be known with certainty by the natural light (Dei Filius, cap. 2 · DS 3004, with its canon). The other crowns reason judge of revelation, and fell under the same Council's anathemas. The road: reason demonstrating the preambles, faith receiving the mysteries, neither devouring the other.<span class=\"condemned\">Rationalism · condemned, Dei Filius canones, 1870</span>"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Science and religion; the road is keeping them in non-overlapping territories.",
                "feedback": "The territories overlap constantly, because reality declines to be partitioned: creation, man, miracles, and morals sit in both jurisdictions. The non-overlap treaty is the double-truth evasion with modern branding, and it dies at the first shared question. One world, two lights, one order between them."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Emotion and logic; the road is balancing the heart against the head.",
                "feedback": "The lesson's parties are two kinds of knowing, not a mood and a faculty. Balance-talk imports the sentiment theory through the side door, and it was shown out of this course two lessons ago. The order between faith and reason is doctrinal, not temperamental."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l5-q6`,
          type: "mcq",
          stem: `A believing geologist hits a stratum that seems, on her best reading, to unsettle a doctrine as she learned it. The Council has already told her what to do. What is it?`,
          latin_tag: `fides et ratio`,
          doctrine_line: `Faith is above reason, never against it: one God gives both lights, and truth cannot oppose truth.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Suspend the faith until the science settles, as an honest mind must.",
                "feedback": "Her faith rests on the authority of God, which no stratum outranks; suspending it pending fieldwork inverts the warrants. The Council's peace means she can keep full assent and full curiosity in the same head. What goes under review is a reading, never the Revealer."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Suspend the science inside church walls, and dig agnostically on weekdays.",
                "feedback": "The two-compartment mind again, now with a shovel. A truth checked at the nave door was never held as truth. The Council blesses her geology as God's other book; the discipline it asks is better reading of both, not a schedule of alternating blindness."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Hold both lights and recheck both readings: the stratum's interpretation, and the doctrine's, against the mind of the Church.",
                "feedback": "Respondeo: the Council's two suspects are her checklist: is the science actually concluding what it seems to, and is the doctrine actually what she learned in the version she learned? One of the readings is wrong, and finding which is scholarship, not crisis. The tradition has run this drill for centuries and the deposit has never lost."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Publish the conflict as a refutation, since evidence outranks authority.",
                "feedback": "Evidence outranks human authority, and the last lesson set the one exception in stone: the Witness who cannot err. Her stratum testifies truly about creation's course; it cannot testify against creation's Author. The refutation headline commits the second impostor at print speed."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t1-l6`,
      num: `VI`,
      title: `Guarding, Not Growing`,
      latin: `magisterium`,
      tag: `magisterium`,
      fin: {
        tag: `magisterium`,
        heading: `The keeper owns nothing in the museum.`,
        body: `The Church's teaching office holds the strangest commission ever written: total authority to guard, zero authority to add. Vatican I chiseled it: the Holy Spirit was promised to Peter's successors not so that they might make known some new doctrine, but that they might religiously guard and faithfully expound the deposit. Dogma may be understood ever more deeply, but in the same doctrine, the same sense, the same understanding; the contrary was sworn against by every priest of a generation: handed down in exactly the same meaning and always in the same purport. And the commission binds this course too. Scholastica transmits; it invents nothing; the wall it teaches is the wall it lives under. The frame is set. Next lesson closes it.`,
        distinction: {
          latin: `magisterium`,
          english: `the teaching office`,
          gloss: `Total authority to guard, none to add: the keeper owns nothing in the museum.`,
          motif: `borrowed-crown`,
        },
      },
      questions: [
        {
          id: `t1-l6-q1`,
          type: "mcq",
          stem: `A museum hires a keeper. He may sell nothing, repaint nothing, acquire nothing; his whole authority is custody, and it is absolute. Who holds this exact commission?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The theologian, whose learning entitles him to curate the collection.",
                "feedback": "The theologian studies the collection and serves the keeper; his learning earns him no keys. When theologians have reached for the curator's brush, councils have taken it back. The commission belongs to an office, not to expertise, and the office's charter is custody."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Each believer, keeper of the faith as his conscience receives it.",
                "feedback": "Each believer guards the faith in his own soul, truly; but a museum with millions of curators and no commission is a flea market by nightfall. The office exists so that what each conscience receives is the deposit and not the neighborhood's edits. Private custody presupposes the public keeper."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No one; collections that cannot grow die, so the picture is wrong.",
                "feedback": "Collections of human works die without acquisitions; this collection is complete because its Donor finished it. The growth that keeps it alive is in the visitors: deeper understanding, same exhibits. The picture is not wrong. It is the one commission where completeness is the treasure's glory."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The magisterium: the Church's teaching office, sovereign in guarding the deposit, powerless to enlarge it.",
                "feedback": "Respondeo: the pope and the bishops in communion with him hold exactly this: absolute custody, zero acquisition. The museum is the deposit of faith; the keeper expounds, defines, condemns, and defends, and may not add one exhibit. The powerlessness is not a limit on the office. It is the office."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t1-l6-q2`,
          type: "precision_check",
          stem: `The charter itself, then a claim to test against it.<div class="auctoritas"><div class="formula"><span class="bl">&para;</span>For the holy Spirit was promised to the successors of Peter not so that they might, by his revelation, make known some new doctrine, but that, by his assistance, they might religiously guard and faithfully expound the revelation or deposit of faith transmitted by the apostles.<span class="cite">Concilium Vaticanum I, Pastor Aeternus, cap. 4, 1870 · DS 3070</span></div></div>The claim: <em>"Since the pope enjoys the Holy Spirit's assistance, he may add new revelations to the faith when the times require it."</em> Where exactly does it break?`,
          payload: {
            "statement": "Since the pope enjoys the Holy Spirit's assistance, he may add new revelations to the faith when the times require it.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nowhere; the assistance is real, so the conclusion follows.",
                "feedback": "The assistance is real and the conclusion inverts it. Read the charter's own grammar: promised NOT so that they might make known some new doctrine, BUT that they might guard and expound. The claim concludes to exactly what the promise excludes. Real premise, contradicted conclusion: the cleanest break there is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In the premise: popes enjoy no special assistance of the Spirit.",
                "feedback": "Overcorrection into the opposite error: the assistance is defined doctrine, the very ground of infallibility's careful conditions. Deny the premise and you have not saved the deposit; you have unmanned its keeper. The break is not in the help. It is in what the help is for."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In the leap from assistance to authorship: the Spirit's help is FOR guarding and expounding, never for new doctrine.",
                "feedback": "Respondeo: the charter attaches the assistance to a purpose, and the purpose is custody: religiously guard, faithfully expound. Assistance for keeping, converted into license for adding, is the precise inversion Pastor Aeternus was written to forbid. The pope is the deposit's most bound servant, not its editor."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "In the phrase when the times require it: times never require anything.",
                "feedback": "Times require plenty: new defenses, new expositions, new condemnations of new errors, all drawn from the old deposit. The keeper works overtime in every age. What no time can require is a new exhibit, because the Donor declared the collection complete. Aim the objection at the addition, not at the clock."
              }
            ],
            "correct_option_id": "c",
            "correction": "The Spirit's assistance is purposive: promised for guarding and expounding the deposit transmitted by the Apostles, expressly not for making known new doctrine. From assistance-for-custody nothing follows about authority-to-add; the office's power and its poverty are one charter."
          },
        },
        {
          id: `t1-l6-q3`,
          type: "fill_blank",
          stem: `The charter's keystone words. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Not so that they might make known some <span class="fb-blank" data-blank="b1">______</span> doctrine, but that they might religiously <span class="fb-blank" data-blank="b2">______</span> and faithfully <span class="fb-blank" data-blank="b3">______</span> the deposit of faith.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "new"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "guard"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "expound"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "new",
              "hard",
              "guard",
              "improve",
              "expound",
              "extend",
              "soften",
              "publish"
            ],
            "feedback": {
              "all_correct": "Locked: new, guard, expound. Three words that carry the whole office: no new doctrine, religious guarding, faithful expounding (Pastor Aeternus, cap. 4 · DS 3070). Every act of the magisterium in every century is an arrangement of these three.",
              "partial_correct": "Some keystones misplaced. The promise excludes new doctrine and commissions two verbs only: guard religiously, expound faithfully. The office's grammar is custody, and the formula deserves exactness: it is the wall's founding sentence."
            }
          },
        },
        {
          id: `t1-l6-q4`,
          type: "mcq",
          stem: `Two claims about growth. First: the Church's understanding of dogma deepens over centuries. Second: dogma's meaning evolves as ages require. The Council blessed one and the Oath damns the other. Sort them.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Both are blessed; they are two phrasings of one development.",
                "feedback": "They are opposites wearing one coat. Deepening keeps the sense and sees further into it; evolving swaps the sense and keeps the words. The Oath was written because the second had learned to introduce itself as the first. Sorting them is not pedantry; it is the whole defense of the deposit.<span class=\"condemned\">Modernism · condemned, Lamentabili prop. 58, 1907</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The first is blessed, the second condemned: growth in understanding, always in the same sense; never a change of meaning.",
                "feedback": "Respondeo: the Council blesses increase of understanding in the same doctrine, the same sense, the same understanding, and forbids abandonment of the declared sense under the pretext or in the name of a more profound understanding (Dei Filius, cap. 4 · DS 3020). The Oath adds the personal seal: the same meaning and always the same purport. Deeper into one meaning: yes, forever. Onward to another meaning: never."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Both are condemned; safety lies in repeating the formulas without study.",
                "feedback": "The Council explicitly prays the opposite: may understanding, knowledge and wisdom increase, and greatly and vigorously flourish. Repetition without penetration starves the faithful and flatters the archivist. The wall was never against study; it is against the study that comes home with different doctrine."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The second is blessed for experts, the first for beginners.",
                "feedback": "There is no expert lane around the deposit; the Oath was imposed precisely on the experts, because the evolution theory was theirs. Truth does not stratify by credentials: the meaning held by the Church binds the seminary and the pew identically. One sense, all readers, every century."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l6-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "A teaching office that can add nothing is a weak office."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Power is measured by what an office can produce, and this one produces nothing.",
                "feedback": "It produces definitions, condemnations, councils, and catechisms without pause; what it cannot produce is new revelation, which is not a product but a pretension. Measure the office by its actual work and it is the busiest custody on earth. The production standard belongs to factories, not to keepers of a finished gift."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Circumstances change, and an office that cannot add cannot answer them.",
                "feedback": "It has answered twenty centuries of circumstances from one unchanged deposit, which is the standing refutation. New errors meet old truth newly expounded; that is the office's whole craft. An office that answered novelty with novelty would not be answering. It would be surrendering with paperwork."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The inability is the guarantee: because the keeper cannot add, what he hands you is what the Apostles left.",
                "feedback": "Respondeo: the office's poverty is the deposit's security. A magisterium that could add could also dilute, and your creed would be a running tab of administrations. Because it can only guard and expound, the faith you receive is the faith delivered once for all. Weakness toward novelty is strength toward you."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The office secretly adds all the time, and the strength lies in the discretion.",
                "feedback": "Right verdict, poisoned reason: it concedes the Modernist history of dogma while keeping the compliment. Definitions draw out what the deposit contained; the Assumption was defined, not acquired. Discreet addition would be the exact corruption the charter forbids, and no strength worth the name is built on it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t1-l6-q6`,
          type: "mcq",
          stem: `Last question of the lesson, and the course looks in the mirror. Why may Scholastica itself never update the theology it teaches?`,
          latin_tag: `magisterium`,
          doctrine_line: `The magisterium religiously guards and faithfully expounds the deposit; it makes known no new doctrine, and no one may.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because its audience prefers the old ways, and products serve their markets.",
                "feedback": "If preference ruled, the course would update the moment the market did, which is exactly the corruption in question. The audience is owed the deposit because it is true, not because it is their taste. A wall built of preferences is a fence, and fences move."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because no one may: even Peter's successors only guard and expound; a course transmits, or it trespasses.",
                "feedback": "Respondeo: the rule that binds the pope a fortiori binds the courseware. Pastor Aeternus leaves no office anywhere with authority to add, so Scholastica's only honest work is transmission: the deposit as taught by Aquinas and defined by the Church, whole and unimproved. The wall the course teaches is the wall it lives under, and this question is the course signing it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because updating requires committees, and the project is too small to form one.",
                "feedback": "Size is an accident here; a curia of ten thousand holds the same zero authority to add. The barrier is not logistical but constitutional: the deposit has no editors at any scale. A one-man project and an ecumenical council stand under the identical charter."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because novelty is untested, and prudence waits for testing.",
                "feedback": "Prudence-about-novelty would permit novelty after trials, and that is precisely what the charter never permits: tested new doctrine is still new doctrine. The exclusion is absolute, not probationary. The course declines to invent for the same reason the keeper declines to acquire: the commission forbids the category."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `t1-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `You know what kind of course this is.`,
        body: `The frame is set. Reason's ladder reached its roof and was honored, not burned: the <span class="lat">praeambula fidei</span>. God spoke; the letter closed with the Apostles and is held whole, one cloth, the <span class="lat">depositum fidei</span>. It is received by <span class="lat">fides</span>, the intellect's certain assent on the authority of God who can neither deceive nor be deceived, sworn clear of every sentiment theory. <span class="lat">Sacra doctrina</span> works those premises as a true science with philosophy as handmaid; faith and reason keep an unbreakable peace, having one Author; and over it all stands the keeper who owns nothing in the museum, guarding and expounding, adding never. Everything after this module is that commission executed. Next: the road to God reopened, with full equipment. The Five Ways at depth.`,
        distinction: {
          latin: `sacra doctrina`,
          english: `sacred doctrine`,
          gloss: `A true science proceeding from God's own knowledge, with philosophy for its handmaid.`,
          motif: `ladder-of-ratios`,
        },
      },
      questions: [
        {
          id: `t1-l7-q1`,
          type: "match_pair",
          stem: `The module in four charters. Match each term to its office.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "praeambula fidei"
              },
              {
                "id": "L2",
                "text": "depositum fidei"
              },
              {
                "id": "L3",
                "text": "fides"
              },
              {
                "id": "L4",
                "text": "sacra doctrina"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "reason's own work about God, which faith presupposes"
              },
              {
                "id": "R2",
                "text": "revelation complete with the Apostles, held whole"
              },
              {
                "id": "R3",
                "text": "certain assent on the authority of God who reveals"
              },
              {
                "id": "R4",
                "text": "the science from God's own knowledge, philosophy its handmaid"
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
              "all_correct": "Four charters, correctly filed: what reason brings, what God gave, how it is received, and the science that orders it. The prologue's whole architecture in one table. Every module ahead assumes all four without re-arguing them.",
              "partial_correct": "Some charters misfiled. Climb the module again: preambles below the ceiling, the closed deposit above it, faith the receiving act, sacred doctrine the receiving science."
            }
          },
        },
        {
          id: `t1-l7-q2`,
          type: "mcq",
          stem: `So: what kind of course is this second course?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Received doctrine transmitted whole: precision the skill, authority a real warrant, mysteries shown coherent, never derived.",
                "feedback": "Respondeo: the reception register, stated as a syllabus. You will not derive the Trinity; you will state it exactly and watch every objection break against it. Authority arguments carry their full weight here, because the Authority is God revealing. The course's one deliverable is the deposit, undamaged, in your hands."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Apologetics bootcamp: arguments to win the internet's debates.",
                "feedback": "Winning debates is a side effect the course declines to aim at; aimed at directly, it breeds the debater's vice of loving victory over truth. The formation is prior: hold the faith with precision and the answers assemble themselves. Part I never trained you for applause either."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Speculative construction: theology built fresh on Part I's metaphysics.",
                "feedback": "The one thing this course is forbidden to be, by the charter it just spent a lesson teaching. Nothing is built fresh; the deposit is received and expounded, and Part I's metaphysics serves as handmaid, not as foundation for novelties. A course that constructed doctrine would have left the wall at the first lesson."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A devotional mood piece: doctrine as atmosphere for prayer.",
                "feedback": "Prayer is the course's hoped-for fruit and its atmosphere will not be faked here: the register is exact statement, argued coherence, and named errors. Devotion grows best on doctrine held precisely; fog waters nothing. The chapel and the classroom share a wall, and this room is the classroom."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t1-l7-q3`,
          type: "fill_blank",
          stem: `The frame, in one sentence. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Faith is assent on the <span class="fb-blank" data-blank="b1">______</span> of God who reveals; theology is a <span class="fb-blank" data-blank="b2">______</span> from God's own knowledge; and the magisterium <span class="fb-blank" data-blank="b3">______</span> the deposit and adds nothing.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "authority"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "science",
                  "scientia"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "guards"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "authority",
              "evidence",
              "science",
              "story",
              "guards",
              "grows",
              "edits",
              "feels"
            ],
            "feedback": {
              "all_correct": "Locked: authority, science, guards. The motive of faith, the status of theology, the office of the keeper: the prologue's three load-bearing walls, each defined by a Council and defended by an oath.",
              "partial_correct": "Some walls wobbled. The motive is God's authority (DS 3008); the status is scientia on revealed principles (ST I q.1 a.2); the office is custody without addition (DS 3070)."
            }
          },
        },
        {
          id: `t1-l7-q4`,
          type: "mcq",
          stem: `A friend, warmly: "Dogma is the Church's poetry about her deep experiences, and like all poetry it matures with the poet." You have a whole module now. Answer him.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Agree; poetry is no insult, and maturation is growth.",
                "feedback": "Poetry is no insult, and the sentence is still two condemned propositions holding hands: dogma as write-up of experience, and truth maturing with man. Both fell in one syllabus. Warmth deserves warmth, but the friend is quoting Modernism verbatim without knowing its name; tell him its name.<span class=\"condemned\">Modernism · condemned, Lamentabili props. 22 &amp; 58, 1907</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Answer: revelation is God speaking, not the Church journaling; complete with the Apostles, held in one unchanging sense.",
                "feedback": "Respondeo: the letter came from outside and closed with its bearers; the Church keeps it, expounds it, deepens in it, and may not remix it. What matures is understanding, in the same sense forever. Dogma is not the poet's diary. It is the King's dictation, and the scribes are under oath."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Concede the poetry, contest the maturing: the verses are fixed even if inspired.",
                "feedback": "Half a defense loses the whole field: grant that dogma rises from experience and the fixity becomes arbitrary, a poet forbidden to revise. The fixity is intelligible only because the source is God's speech, not the Church's artistry. Defend the origin and the permanence defends itself."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Decline the conversation; mysteries do not survive discussion.",
                "feedback": "Mysteries survive discussion magnificently; they have been discussed for twenty centuries under anathema-grade scrutiny and stand unrevised. Declining the conversation abandons the friend to the theory he caught. The module armed you precisely for this table talk. Sit down."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t1-l7-q5`,
          type: "mcq",
          stem: `Ahead of you: God, Trinity, creation, grace, Christ, sacraments, the last things. What will this course do with your Part I equipment?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Retire it with honors; theology travels light.",
                "feedback": "Check the itinerary: suppositum at the Trinity and the Incarnation, participation at creation, habitus at grace, signs and instruments at the sacraments, substance and accidents at the altar. The luggage IS the journey. Nothing retires; everything reports for duty."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Test it against revelation and discard whatever conflicts.",
                "feedback": "Nothing will conflict, and the module you just finished told you why in a conciliar formula: truth cannot oppose truth. Where a tool ever seemed to clash with a mystery, the tradition sharpened the tool's use, never the deposit. Expect refinements of employment, zero discards."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Keep it in a separate room, since faith runs on other fuel.",
                "feedback": "The separate-rooms plan is the double-truth evasion's floor plan, twice refused in this module alone. Faith's warrant differs from reason's; their house is one. The equipment moves in with you, or the cathedral goes up crooked."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Deploy it, module by module: every mystery met with the distinction forged for it.",
                "feedback": "Respondeo: each theology module opens on the Part I tool it runs on, because the philosophy was for this. The apple that taught you substance will return at the Eucharist; the persona that taught you personhood waits at the Trinity. The handmaid climbs the whole cathedral with the architect. Watch for your own tools in every doorway."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t1-l7-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "In theology, leaning on authority is a confession of weakness."`,
          latin_tag: `recapitulatio`,
          doctrine_line: `Theology received, not invented: the deposit whole, faith on God's authority, reason in honorable service, the keeper adding nothing.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Strong minds verify; only weak ones accept on another's word.",
                "feedback": "By that rule the strong mind knows only what it has personally rerun, a village of certainties in a universe of hearsay. Part I already buried this axiom at the lesson on testimony. Strength is proportioning trust to the witness, and this course's Witness ends the proportion."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Authority arguments were the weakest in philosophy, and theology inherits the ranking.",
                "feedback": "The ranking was indexed to the authority's fallibility, and the index just changed hands. Human authority argues weakly because humans err; the inheritance breaks exactly where the Witness becomes unerring. Theology did not inherit the ranking. It inherited the reason for it, which now runs the other way."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Here the authority is God revealing: the strongest of all arguments, leaned on by design.",
                "feedback": "Respondeo: the argument from authority based on divine revelation is the strongest (ST I q.1 a.8 ad 2). Leaning on it is not weakness but accuracy about who is speaking. The prologue closes on the inversion it opened with: the weakest move at philosophy's table is the keystone of theology's, because of the One who sits at the head of it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Authority and argument never mix, so the question is confused.",
                "feedback": "They mix on every page of the Summa: the sed contra cites, the respondeo argues, and neither apologizes to the other. An authority supplies premises; argument works them; theology is the two in harness. The question was not confused. It was the course's oldest habit, asking to be retrained."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    }
  ],
};
