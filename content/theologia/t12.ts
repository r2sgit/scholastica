import type { ModuleMeta } from '../types';

/** T12 · The Church and the Kingship of Christ. Wired into the live app by scholastica-claude-code-wing-parity-RUN.md (WP-A). Content is the authored t12-content.json, copied faithfully; no prose edits. */
export const t12: ModuleMeta = {
  id: 12,
  title: `The Church and the Kingship of Christ`,
  short: `De Ecclesia et Regno Christi`,
  label: `Theologia XII · The Church and the Kingship of Christ`,
  latin: `De Ecclesia et Regno Christi`,
  aim: `The Church of Jesus Christ is a real body, visible because she is a body and living because Christ is her Head: the visible society and the mystical body are one thing, as body and soul are one man. Four visible marks identify her, and they belong together, to the Roman Church alone. Her visible head on earth guards a deposit he did not write and cannot grow, and when he defines from the Chair what was handed down, he cannot err. Outside her there is no salvation: a dogma defined three times at the highest level and understood as the Church herself understands it, reaching even the man of invincible ignorance through a desire informed by faith and charity; softened for no one, and hardened past the magisterium for no one. Because the one road is hers, the mandate to teach all nations binds until the end of time. And her Founder is King in the strict and proper sense: of minds, wills, hearts, families, and nations, whose public rejection of His empire is the plague His own vicar named.`,
  lessons: [
    {
      id: `t12-l1`,
      num: `I`,
      title: `A Visible Body`,
      latin: `corpus mysticum`,
      tag: `corpus mysticum`,
      fin: {
        tag: `corpus mysticum`,
        heading: `The body on the public record.`,
        body: `The certificate called the corporation a person, and every lawyer in the room knew the word was borrowed: a fiction with a filing number, useful, bloodless, dissolvable by the same pen that made it. The Church arrives wearing the same grammar, a body with members, and the grammar this time is not borrowed but paid in full. She is <span class="lat">corpus mysticum</span>, the mystical body: many members living one supernatural life that pours from one Head, and visible for exactly the reason your own body is, because a body that cannot be seen is not a body at all. Leo XIII closed the question with a tool you have owned since the philosophy course: soul alone is a ghost, body alone is a corpse, and only the union is a man. So with the Church: strip the visible society and you hold a mist; strip the supernatural life and you hold a bureau. She is one thing from both, and she can be found in the street, which matters, because next lesson you go looking for her marks.`,
      },
      questions: [
        {
          id: `t12-l1-q1`,
          type: "mcq",
          stem: `A filing cabinet, a certificate of incorporation: the law calls the company a person, and everyone understands the loan. It holds property, speaks with one voice, and can be dissolved by a signature. Scripture calls the Church a body with many members (1 Cor 12). Same kind of talk?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: a legal person, a useful fiction for holding property and speaking as one.",
                "feedback": "The Church does own property and speak with one voice, and the resemblance ends exactly where life begins. A fiction has a filing number and no pulse; Leo XIII: the Church is not something dead, but the body of Christ endowed with supernatural life. The lawyers lend personhood; here the Head gives life. The analogy was a ladder, not the roof."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A figure of speech: the reality is believers one by one; the body is decoration.",
                "feedback": "Then Paul decorated in a strange place: he was answering real divisions at Corinth with the body, not ornamenting them. A figure of speech cannot be wounded by schism or fed by sacraments. The one-by-one picture makes the Church an aggregate, a heap; and a heap, Part I taught you, is precisely what a body is not."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No: a real body, many members living one supernatural life from one Head.",
                "feedback": "Respondeo: the corporation is a person by courtesy of the law; the Church is a body by the life of her Head. One faith, one baptism, one supernatural life circulating through visibly joined members: more truly a body than the firm, not less. The tradition's name for her is coming this lesson: <span class=\"lat\">corpus mysticum</span>, the mystical body. What mystical does and does not mean is the rest of the day's work."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A spiritual body only: the visible organization is scaffolding around the true, hidden Church.",
                "feedback": "The oldest wrong turn at this corner: keep the soul, dismiss the body, and call the remainder purer. A church of the invisibly saved was formally proposed and formally condemned; a body you cannot see is a body you cannot join, wound, or find. The scaffolding reading gets its full answer two questions from now, from Leo XIII.<span class=\"condemned\">Hus, the Church as the totality of the predestined · condemned, Council of Constance, 1415 · DS 1201</span>"
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t12-l1-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>As the whole Church is termed one mystic body from its likeness to the natural body of a man, which in divers members has divers acts, as the Apostle teaches (Romans 12; 1 Corinthians 12), so likewise Christ is called the Head of the Church from a likeness with the human head, in which we may consider three things, viz. order, perfection, and power... Now these three things belong spiritually to Christ. First, on account of His nearness to God His grace is the highest and first... Secondly, He had perfection as regards the fulness of all graces... Thirdly, He has the power of bestowing grace on all the members of the Church, according to John 1:16: "Of His fulness we have all received."</p><div class="cr-cite">ST III, q. 8, a. 1, co. · trans. Fathers of the English Dominican Province · verified against New Advent</div></div>A skeptic objects: Aquinas wrote no treatise on the Church, so the mystical body must be a later invention. You have just read Aquinas. What does the text show?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The mystical body is his working doctrine: Christ its Head in order, perfection, and power.",
                "feedback": "Respondeo: no treatise, but the doctrine is load-bearing in the middle of the Summa's Christology. Thomas takes the Apostle's body at full metaphysical weight and analyzes headship the way he analyzes everything, by distinction: first in order, fullest in perfection, source in power. The later popes who wrote the ecclesiology treatises quarried this very article. The skeptic confused the absence of a shelf with the absence of the books."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "He treats the body as devotional ornament; the doctrine had to wait for later centuries.",
                "feedback": "Read what the ornament is doing: it is carrying the theology of grace itself, how the fulness in the Head reaches every member. Ornaments do not bear loads. When a scholastic gives a likeness three numbered respects and cites his warrants, he is not decorating; he is defining. You watched a whole module on the Summa's method to recognize exactly this."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The Church here means the hierarchy only; the members are the clergy.",
                "feedback": "The text's own citations refuse the shrinkage: Romans 12 and 1 Corinthians 12 are about the whole believing multitude, divers members with divers acts. The hierarchy has its place in the body, and a later lesson gives the head of the visible body his due; but the body is everyone the Head's grace reaches. Clericalizing the corpus mysticum is a modern error read backward."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "He borrowed a civic metaphor and left it unbaptized: the ruler as head of the people.",
                "feedback": "He quotes that civic usage, and then does to it what he does to every borrowed word: he converts it. The three respects are cashed out in grace, grace, and grace: highest, fullest, source. Nothing civic survives the analysis except the shape. The move is M16's whole lesson: analogy lifts a word to carry a higher truth without breaking it."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t12-l1-q3`,
          type: "mcq",
          stem: `The invisible-church thesis returns in every century: the real Church is the hidden company of true believers; the visible organization is at best her shell. Leo XIII answered with an old tool.<div class="auctoritas"><div class="formula"><span class="bl">&para;</span>It is assuredly as impossible that the Church of Jesus Christ can be the one or the other, as that man should be a body alone or a soul alone. The connection and union of both elements is as absolutely necessary to the true Church as the intimate union of the soul and body is to human nature.<span class="cite">Leo XIII, Satis Cognitum, 1896, n. 3</span></div></div>What work is the analogy doing?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It ranks them: the soul outranks the body, so the hidden Church may correct the visible one.",
                "feedback": "The sentence you read was built to forbid precisely this use: not a ranking but a union, absolutely necessary on both sides. A soul that corrects its body from outside is a ghost haunting a house. Whoever pleads the invisible Church against the visible has already cut the man in half and sided with the half he cannot locate."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It concedes two churches, spiritual and institutional, in loose federation.",
                "feedback": "Two churches in federation is exactly the picture the analogy exists to kill: your soul and your body are not allies, they are you. Leo's next sentence calls the hidden-church picture a grievous and pernicious error, and the institutional-shell picture errs symmetrically. One Church, one thing, from both elements: the conjunction is the doctrine."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It assigns the body to the laity and the soul to the clergy.",
                "feedback": "A misreading with a long parlor history and no standing in the text: the elements are the visible society and the supernatural life, not two classes of member. Clergy and laity alike are visible; grace in clergy and laity alike is not. Divide the Church by rank here and you have changed the subject of Leo's sentence entirely."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It welds them: visible society and supernatural life are one Church, as soul and body are one man.",
                "feedback": "Respondeo: the union you spent Part I learning to defend, now doing ecclesiology. Body alone is a corpse: an institution without grace, which is one error. Soul alone is a ghost: a spiritual church without flesh, which is the other. Leo even maps the two errors onto the old Christological ones, a body-only Christ and a Godhead-only Christ, and the course will walk through that battlefield when the Incarnation module opens. The Church is one thing from both, or she is not the Church."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t12-l1-q4`,
          type: "mcq",
          stem: `Pius XII, defining terms in 1943.<div class="auctoritas"><div class="formula"><span class="bl">&para;</span>If we would define and describe this true Church of Jesus Christ, which is the One, Holy, Catholic, Apostolic and Roman Church, we shall find nothing more noble, more sublime, or more divine than the expression "the Mystical Body of Christ."<span class="cite">Pius XII, Mystici Corporis, 1943, n. 13</span></div></div>One sentence, two descriptions. What has it welded?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Two overlapping circles: the mystical body is wider than the Roman Church and contains it.",
                "feedback": "The sentence has one subject wearing two names, not two circles sharing a lens. Nine paragraphs later the same encyclical counts the members of this body: the baptized who profess the true faith and are not cut off from its unity. A body wider than the visible Church would need members the encyclical just excluded. The wider-circle reading is imported into the text, not found there."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "One referent, two names: the mystical body is the Roman Church, not a church above her.",
                "feedback": "Respondeo: <em>this true Church... which is the One, Holy, Catholic, Apostolic and Roman Church</em>, and her noblest description is <span class=\"lat\">corpus mysticum</span>. Not a spiritual church floating over the institutional one; not an institution with a pious nickname. The identity runs both directions, which is why the same letter can call the merely spiritual church an error in a matter of divine truth. Whoever says mystical body has, whether he likes it or not, said Rome."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A poetic flourish: mystical body is praise-language, not a defining term.",
                "feedback": "The Pope's own verb is against you: <em>if we would define and describe</em>. Encyclicals do praise, but this sentence is doing ontology, and the whole letter proceeds to draw doctrinal consequences from it, membership conditions included. When the magisterium says define, the reader who hears only music has stopped reading."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A concession: the juridical Church is the husk; the mystical body is the kernel within.",
                "feedback": "Husk-and-kernel is the invisible-church thesis in agricultural dress, and this encyclical is its refutation, not its concession: the Church is visible because she is a body, and the merely pneumatological church is named an error outright (n. 14). The kernel picture always ends with someone shelling the husk. Pius XII wrote precisely so that no one could do it in his name."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t12-l1-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "The word mystical concedes the point: the Church's real unity is invisible, a union of hearts no census could ever count."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Paul's body language is devotional; hearts are the only real members.",
                "feedback": "Paul used the body on the Corinthians because their divisions were public and countable: factions at the assembly, lawsuits in the forum. Devotional language does not settle lawsuits. The union of hearts is real and required; it is the soul of the thing, not the whole of it, and a soul without a body is precisely what this lesson has been ruling out."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The Spirit gives the life, and what the Spirit does cannot be institutionalized.",
                "feedback": "The premise is pious and the inference is the condemned part: the same encyclical that exalts the Spirit's invisible work rejects the merely pneumatological church by name. The Spirit who cannot be institutionalized was pleased to institute: apostles, baptism, a chair. Setting the Giver against His own gifts is not reverence; it is the error wearing reverence's coat.<span class=\"condemned\">the merely pneumatological church · rejected, Mystici Corporis, 1943, n. 14</span>"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Mystical marks the body off from natural and moral bodies; the unity stays visible and countable.",
                "feedback": "Respondeo: mystical does not mean misty. It says this body is neither a natural organism nor a mere club, because its bond is the supernatural life from the Head. And the members remain countable, by the encyclical's own census line: those baptized, professing the true faith, not separated or cut off (Mystici Corporis, n. 22 · DS 3802). Three visible conditions. A parish register is not an insult to the mystery; it is one of its organs."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Because the Church is a juridical structure and mystical adds nothing real.",
                "feedback": "Right verdict, opposite disease: this deflation amputates the soul to save the body. If mystical adds nothing, then the Church differs from the empire only in paperwork, and Leo's corpse is on the table again. The word adds everything the law cannot give: the life. Keep the verdict; return the reason to the bureau it came from."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t12-l1-q6`,
          type: "fill_blank",
          stem: `The first doctrine, locked. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The Church is a real <span class="fb-blank" data-blank="b1">______</span>; because she is a body she is <span class="fb-blank" data-blank="b2">______</span>; and her visible society and mystical body are <span class="fb-blank" data-blank="b3">______</span> thing.</span>`,
          latin_tag: `corpus mysticum`,
          doctrine_line: `The visible society and the mystical body of Christ are one Church, as body and soul are one man: visible because she is a body, alive because Christ is her Head.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "body"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "visible"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "one"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "body",
              "symbol",
              "visible",
              "invisible",
              "one",
              "two",
              "spirit",
              "fiction"
            ],
            "feedback": {
              "all_correct": "Locked: body, visible, one. The corporation lent its grammar and the Head paid the loan in life. Soul alone is a ghost, body alone is a corpse, and the Church is neither. A visible body can be identified in the street; how to identify her among the claimants is the next lesson.",
              "partial_correct": "Some blanks resisted. She is a real body, not a fiction; a body is by nature visible; and the visible society and the mystical body are one thing, as body and soul are one man."
            }
          },
        }
      ],
    },
    {
      id: `t12-l2`,
      num: `II`,
      title: `The Four Marks`,
      latin: `notae ecclesiae`,
      tag: `notae ecclesiae`,
      fin: {
        tag: `notae ecclesiae`,
        heading: `The signature is written in public.`,
        body: `Seventeen centuries of Sundays have sung the same four adjectives, and they were never decoration: they are the <span class="lat">notae Ecclesiae</span>, the marks by which the one true Church can be picked out among the claimants. Marks must be visible or they mark nothing; a sign nobody can perceive signifies to nobody, which you learned when the course taught you what a sign is. So the marks stand in daylight: one faith, worship, and government; a holy Founder with holy means and a steady crop of saints; the same whole faith for every nation and century; and an unbroken line back to the Apostles carrying an unchanged deposit. Taken singly they can be counterfeited for a while. Taken together they are a joint signature, and the house that bears all four at once has borne them from the beginning. The claim is public and the evidence is public, which is the whole scandal of it. Next lesson: the first mark has a guarantor, and he holds keys.`,
      },
      questions: [
        {
          id: `t12-l2-q1`,
          type: "mcq",
          stem: `Sunday, the Creed, the same four words since the fourth century: I believe in one, holy, catholic, and apostolic Church (Nicene-Constantinopolitan Creed · DS 150). Four adjectives, sung standing. What are they?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Aspirations: four ideals the Church pursues and hopes one day to possess.",
                "feedback": "The Creed's grammar is against you: credo takes objects that are, not objects that are hoped. A church one day to be one would be, today, not the Church professed. The marks are present possessions or the Creed has been misreporting for seventeen centuries; and an identifying mark you do not yet have identifies nothing today, when the seeker is looking."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Marks: visible properties by which the true Church is recognized among claimants.",
                "feedback": "Respondeo: the tradition calls them <span class=\"lat\">notae Ecclesiae</span>, the notes or marks of the Church. The Founder made one Church and many bodies claim the inheritance; He was not so careless as to leave her unrecognizable. Four properties, each visible, each flowing from what she is: the seeker checks the claimants against the signature. The rest of this lesson is the checking."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Compliments: liturgical praise-language, warm and true the way anthems are true.",
                "feedback": "Anthems do not get defined at ecumenical councils under anathema. These four words were hammered out at Nicaea and Constantinople against live opponents, each adjective closing a door some heresy had opened. Praise is real in them, as praise is real in any exact description of a beautiful thing; but the exactness came first."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A composite: four excellences gathered from the many churches, pooled into one ideal portrait.",
                "feedback": "The Creed says one Church with four properties, not four properties seeking a church. A pooled portrait belongs to no subject, and you cannot be baptized into a composite. The reading has a modern name and a nineteenth-century condemnation coming two questions from now; hold your objection until the theory stands up properly."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t12-l2-q2`,
          type: "match_pair",
          stem: `The four marks, unpacked. Match each mark to what it names.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "one"
              },
              {
                "id": "L2",
                "text": "holy"
              },
              {
                "id": "L3",
                "text": "catholic"
              },
              {
                "id": "L4",
                "text": "apostolic"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "one faith, one worship, one government under one visible head"
              },
              {
                "id": "R2",
                "text": "holy Founder, holy means of grace, real fruits of holiness in every age"
              },
              {
                "id": "R3",
                "text": "the same whole faith for all nations and all centuries"
              },
              {
                "id": "R4",
                "text": "unbroken succession from the Apostles, carrying an unchanged deposit"
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
              "all_correct": "Four marks, correctly unpacked. Notice the architecture: apostolicity guards the deposit, the deposit grounds the one faith, the one faith feeds the holiness, and the whole is offered to every nation. They are not four separate badges but one nature showing four faces.",
              "partial_correct": "Some marks misfiled. Unity is of faith, worship, and government; holiness is of Founder, means, and fruits; catholicity is the whole faith for the whole world; apostolicity is the unbroken line that carries the deposit unchanged."
            }
          },
        },
        {
          id: `t12-l2-q3`,
          type: "mcq",
          stem: `A quiet premise under the whole lesson, worth dragging into the light. Why must the marks be visible at all? Recall what a sign is: something that, being perceived, brings something else to knowledge.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "They need not be: the marks are known to faith alone, invisible to inquiry.",
                "feedback": "Then they mark nothing, and the seeker is stranded: to see the marks he must already believe, and to believe he was supposed to find the Church by her marks. The circle strangles itself. Faith perfects the seeing, certainly; but the marks were given precisely so that inquiry has somewhere to stand before faith crowns it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Visibility is a courtesy: God prefers to make finding the Church easy, though hiddenness would serve.",
                "feedback": "Not courtesy: necessity, given what a mark is. A sign that cannot be perceived brings nothing to knowledge; it fails as a sign the way a bridge that spans half the river fails as a bridge. If the Church is found by marks, the marks are visible by definition, not by generosity. The necessity sits in the semantics, where the course taught you to look."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A mark is a sensible sign: imperceptible marks identify nothing, and an unfindable Church cannot be joined.",
                "feedback": "Respondeo: the sign machinery from Part I, earning its theological keep. The marks are signs given to be perceived, so that the man commanded to enter the one Church can locate the one Church. An invisible church with invisible marks makes the command to enter her a cruelty. God commands entry; therefore He provides an address; the marks are the address, legible from the street."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because visibility impresses: institutions with public marks recruit better than hidden ones.",
                "feedback": "The Church has never been above a good procession, but recruitment is an effect, not the reason. Marks are for identification, not advertisement: they answer which one is she, not why join. Ground them in persuasion and they sway with fashion; ground them in what a sign is and they stand while fashions die. The course grounds them in the sign."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t12-l2-q4`,
          type: "mcq",
          stem: `Now the hard edge. A learned theory proposes: the one Church subsists in three great branches, Roman, Orthodox, Anglican; each keeps some marks well enough, and their sum is the Catholic Church of the Creed. Where does the theory break?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nowhere: the branch theory is generous, and generosity in ecclesiology is truth.",
                "feedback": "Generosity that redraws the Founder's architecture is not generosity to Him. The theory was examined on its merits by the Holy Office and rejected in a formal letter to the English bishops: the true Church is one by unity of government, and a Church in three mutually excommunicate branches has no such unity to show. Kindness to persons, always; surgery on the marks, never.<span class=\"condemned\">the branch theory · rejected, Holy Office letter to the bishops of England, 1864 · DS 2885-2888</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At Anglican: with valid orders the branch would stand, and orders are the open question.",
                "feedback": "Orders were examined and ruled on: Leo XIII declared Anglican ordinations absolutely null and utterly void (Apostolicae Curae, 1896 · DS 3315-3319). But notice: even granted valid orders, the theory still falls, as the Orthodox case shows. Succession of hands without unity of government and faith does not make one Church of two bodies not in communion. The break is deeper than the pipeline."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At three: with more branches included the sum would finally reach catholicity.",
                "feedback": "The arithmetic is the disease, not the dose. Marks are properties of one subject, not shares to be pooled: no quantity of partial claimants sums to one Church, as no quantity of half-bridges sums to a crossing. Adding branches multiplies the problem it was meant to solve, which is why the theory's own century saw Rome decline the courtesy of being a branch."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At the root: the marks are one signature borne together by one subject, or they identify nothing.",
                "feedback": "Respondeo: unity itself is the first casualty; a church of mutually excommunicate branches would be visibly not one, and a mark held by nobody identifies nobody. The four belong together and to one claimant: the confession this course inherits states it plainly, the Roman Church alone possesses simultaneously the four marks. Simultaneously is the load-bearing word. A signature is not a signature in installments."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t12-l2-q5`,
          type: "precision_check",
          stem: `An objection older than the Creed, delivered nightly. <em>"The Church cannot be holy: I have met her members."</em> Where exactly does it break?`,
          payload: {
            "statement": "The Church cannot be holy: I have met her members.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At cannot: holiness names Founder, means, and fruits; it never promised sinless membership.",
                "feedback": "Respondeo: the mark claims a holy Head, holy instruments (the sacraments, the doctrine, the counsels), and a harvest of real saints in every generation; it does not claim a membership without sinners. The Lord's own field grows wheat and tares until the harvest, by His explicit instruction. A hospital is not refuted by the presence of the sick; it is refuted by never healing anyone, and the calendar of saints is the healing on public record."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nowhere: the objection stands, so holiness must be an aspiration after all.",
                "feedback": "Concede this and the pure-church error walks in wearing your coat: if members' sins void the mark, the true Church must be the sinless remnant, invisible by necessity, and you have rebuilt Hus's church of the predestined which the Council of Constance condemned. The mark survives the members because it was never predicated of their virtue.<span class=\"condemned\">Hus, the Church as the totality of the predestined · condemned, Council of Constance, 1415 · DS 1201</span>"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At met: private anecdote is no census, and the objector's sample is small.",
                "feedback": "A statistician's parry, and beneath the objection's dignity: the Church herself concedes the sample cheerfully and enlarges it. Sinners in the Church are not a sampling error to be argued away; they are the expected population of a field sown with wheat and tares. Quibbling with the evidence misses the joint that actually carries the weight, one option up."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At members: the truly justified cannot sin mortally, so the scandalous were never members.",
                "feedback": "This purchases the mark at the price of a condemned proposition: Trent anathematizes whoever says the justified can sin no more or lose grace (Sess. VI can. 23 · DS 1573). The baptized sinner in mortal sin remains a member, wounded, not amputated; membership is by baptism, professed faith, and unity, not by the state of grace. The pure-church shortcut always ends outside the wall.<span class=\"condemned\">the impeccability of the justified · condemned, Trent Sess. VI can. 23, 1547 · DS 1573</span>"
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t12-l2-q6`,
          type: "mcq",
          stem: `The fourth mark does quiet structural work. What does apostolic concretely require of a church claiming it?`,
          latin_tag: `notae ecclesiae`,
          doctrine_line: `One, holy, catholic, apostolic: four visible marks, one joint signature, borne together by the Roman Church alone.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Antiquity: the claimant must be old, with documents to show it.",
                "feedback": "Old is necessary and cheap: several claimants are old, and error is older than most of them. Apostolicity is not a carbon date; it is a chain of custody. A church as old as the Apostles that teaches what they did not teach has kept the warehouse and lost the deposit, and the deposit was the point of the warehouse."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Succession in office and in doctrine: the Apostles' line, carrying the Apostles' deposit unchanged.",
                "feedback": "Respondeo: two chains or nothing. Lawful succession of shepherds from the Apostles, and identity of teaching with the Apostles: hands and content together. Break the first and you have enthusiasm without commission; break the second and the commission carries someone else's message. The mark is the wall's own logic made visible, and it opens this module's next door: the successor of the chief Apostle, and what his office is for."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Valid orders: an unbroken pipeline of ordinations, whatever came to be taught.",
                "feedback": "The pipeline alone fails the mark's own purpose: succession exists for the deposit, not for itself. A line of validly ordained hands teaching a new gospel would be apostolic in plumbing and alien in fact. The mark demands the teaching travel with the office; divorce them and apostolic shrinks to a genealogical hobby."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Apostolic energy: missionary zeal after the Apostles' example.",
                "feedback": "Zeal imitates the Apostles; it does not descend from them. Every earnest sect has energy, and energy proves motion, not commission. The mark asks a colder question: who sent you, and through whom, and with what message? Enthusiasm answers none of these. The line and the deposit answer all three."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `t12-l3`,
      num: `III`,
      title: `Peter and His Charism`,
      latin: `ex cathedra`,
      tag: `ex cathedra`,
      fin: {
        tag: `ex cathedra`,
        heading: `The keeper receives his keys.`,
        body: `The museum keeper who owns nothing in the museum turns out to hold a commission written in the Gospel's own hand: feed my lambs, feed my sheep, confirm thy brethren. A visible body needs a visible head, and the Lord appointed one, with a primacy of real jurisdiction and not of courtesy, perpetual in his successors. Thomas taught the reason six centuries before the definition: there must be one faith of the whole Church, and one faith requires one final judge of what the faith is. Vatican I drew the charism's exact borders: speaking <span class="lat">ex cathedra</span>, from the Chair, as teacher of all Christians, defining faith or morals for the whole Church, he is kept from error, and his definitions stand of themselves, not from the Church's later consent. Note what the definition does not say: nothing of new revelation, nothing of impeccability, nothing of infallible table talk. The Holy Spirit was not promised to Peter's successors so that they might coin new doctrine, but so that they might guard and expound the deposit. The office's poverty is its glory. And what the keeper guards above all is a door, which is the next lesson, and the hardest.`,
      },
      questions: [
        {
          id: `t12-l3-q1`,
          type: "mcq",
          stem: `A keeper walks a museum at dusk, keys at his belt, owning nothing in the collection. By the lake after the Resurrection, the Lord asks Simon Peter three times whether he loves Him, and three times commissions him: feed my lambs, feed my sheep (Jn 21). What did Christ establish in Peter?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A primacy of honor: first among equal apostles, presiding in charity, ruling nothing.",
                "feedback": "Honor does not feed sheep; jurisdiction does. The shepherd's verb is a governing verb, and the definition drawn from it anathematizes exactly this reduction: whoever says Peter received a primacy of honor only, and not of true and proper jurisdiction, let him be anathema. The East's most serious claim was weighed at a council and answered.<span class=\"condemned\">primacy of honor only · condemned, Pastor Aeternus ch. 1, 1870 · DS 3055</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A grant to the whole Church, which delegates its exercise to Peter as her minister.",
                "feedback": "The Gospel's grammar runs the other way: to Simon alone, by name, before and after the Resurrection. The community-first theory makes the shepherd the sheep's employee, and it was condemned when the Synod of Pistoia proposed it: power does not ascend from the flock to the pastor. What Peter received, he received from Christ directly, which is why no flock can take it back.<span class=\"condemned\">power derived from the community to the pastors · condemned, Auctorem Fidei, 1794 · DS 2602</span>"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A personal charism for the apostolic age, complete in Peter and buried with him.",
                "feedback": "The commission was given for the flock's sake, and the flock did not die with the fisherman. What was established for the perpetual welfare of the Church must, by the same institution, endure as long as she does: whoever denies that Peter has perpetual successors in the primacy falls under the second chapter's anathema. The keys were cut for a line of keepers, not a lifetime.<span class=\"condemned\">the primacy as non-perpetual · condemned, Pastor Aeternus ch. 2, 1870 · DS 3058</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A real primacy of jurisdiction over the whole flock, given to Peter alone and directly.",
                "feedback": "Respondeo: true and proper jurisdiction, immediately and directly promised and conferred, over lambs and sheep, the whole fold without remainder. A visible body, last lesson taught, is one thing; a visible body with no visible head would be an anomaly the Founder did not leave behind. What this authority is for, and what it can never do, is the rest of the lesson, and the museum keeper already knows the answer in his bones."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t12-l3-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Consequently to publish a new edition of the symbol belongs to that authority which is empowered to decide matters of faith finally, so that they may be held by all with unshaken faith. Now this belongs to the authority of the Sovereign Pontiff, "to whom the more important and more difficult questions that arise in the Church are referred"... The reason of this is that there should be but one faith of the whole Church, according to 1 Corinthians 1:10: "That you all speak the same thing, and that there be no schisms among you": and this could not be secured unless any question of faith that may arise be decided by him who presides over the whole Church, so that the whole Church may hold firmly to his decision.</p><div class="cr-cite">ST II-II, q. 1, a. 10, co. · trans. Fathers of the English Dominican Province · verified against the Benziger text</div></div>An objector insists papal infallibility was invented in 1870, a modern novelty imposed on a reluctant Church. You have just read a text from about 1270. What does it show?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Only that popes may write creeds for liturgical use; deciding doctrine is another matter.",
                "feedback": "The text's own verbs outrun the liturgy: to decide matters of faith finally, so that they may be held by all with unshaken faith. Finality and unshaken assent are the substance of what 1870 defined; the creed is merely the instrument case. Shrink the passage to hymnal management and its reason, one faith of the whole Church, becomes absurdly large for the job."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Thomas grounds the pope's final say in the unity of faith: 1870 defined what the schools taught.",
                "feedback": "Respondeo: the argument is structural, not sentimental. One Church must confess one faith; disputed questions therefore need one final judge whose decision the whole Church holds firmly; and that judge is he who presides over the whole Church. Six centuries later Vatican I defined the same charism with conciliar exactness. Definitions guard old doctrine against new denial; they do not mint novelties, which is this very module's refrain."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Thomas subordinates the pope's decision to the consensus of the theologians.",
                "feedback": "The passage cites the Decretals to the opposite effect: the more important and more difficult questions are referred to him, not by him to the faculty lounge. Theologians argue the question toward clarity, as this course lives by; the final decision is precisely what they cannot supply, or the schisms Paul feared would simply relocate into the schools, where, history notes, they have often summered."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The text proves councils outrank popes, since creeds came from councils.",
                "feedback": "The same article's sed contra observes that the symbol was published by a general council convoked by the authority in question; and Thomas concludes that publishing the symbol belongs to the sole authority of the Sovereign Pontiff, as do all other matters which concern the whole Church, such as to convoke a general council. The conciliarist reading dies in the very sentence it hoped to live in."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t12-l3-q3`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>We teach and define that it is a divinely-revealed dogma: that the Roman Pontiff, when he speaks ex Cathedra, that is, when in discharge of the office of Pastor and Teacher of all Christians, by virtue of his supreme Apostolic authority, he defines a doctrine regarding faith or morals to be held by the Universal Church, by the divine assistance promised to him in blessed Peter, is possessed of that infallibility with which the divine Redeemer willed that His Church should be endowed for defining doctrine regarding faith or morals: and that therefore such definitions of the Roman Pontiff are irreformable of themselves, and not from the consent of the Church.</p><div class="cr-cite">Pastor Aeternus, cap. 4, 18 July 1870 · DS 3074 · trans. Manning</div></div>Read the definition like a lawyer, which its authors did. What does it actually claim?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That defining popes receive fresh revelation, a private line the Apostles lacked.",
                "feedback": "The constitution had already barred that door two paragraphs earlier: the Holy Spirit was not promised to Peter's successors that they might make known new doctrine by His revelation. The charism is assistance in guarding, not dictation of novelties. Whoever hears oracle in the definition has read past the document's own loudest sentence."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That whatever a pope teaches on faith binds infallibly, conditions being ceremonial.",
                "feedback": "The definition is mostly conditions, and they are load-bearing: from the Chair, as Pastor and Teacher of all Christians, by supreme authority, defining, faith or morals, to be held by the whole Church. Strike them and you have the caricature that Döllinger left over and the definition never taught. A charism defined by its limits is not honored by erasing them."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That papal definitions become binding once the bishops subsequently ratify them.",
                "feedback": "The definition's last clause was written to kill this exact theory, the Gallican fourth article: irreformable of themselves, and NOT from the consent of the Church. Ratification-theology makes the flock the judge of the shepherd's judgment, and the See that Rome voided it under Alexander VIII saw it buried at the Vatican Council.<span class=\"condemned\">the Gallican Articles · declared null and void, Alexander VIII, 1690 · DS 2281-2285</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Under stated conditions the pope exercises the Church's own infallibility, and such definitions stand of themselves.",
                "feedback": "Respondeo: read the possessive carefully: that infallibility with which the divine Redeemer willed that His Church should be endowed. Not a private talent but the Church's own charism, exercised by her head when, and only when, the four conditions meet: the Chair, the universal office, the defining act, the matter of faith or morals. Within those walls, no error; and no appeal, since his decision is the whole Church holding firm. Everything else a pope says is as reformable as breakfast."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t12-l3-q4`,
          type: "precision_check",
          stem: `A claim heard at every dinner party since 1870. <em>"Infallibility means Catholics believe the pope cannot err."</em> Where exactly does it break?`,
          payload: {
            "statement": "Infallibility means Catholics believe the pope cannot err.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At Catholics: the dogma binds all men, not Catholics only, so the claim is too narrow.",
                "feedback": "A pedant's lunge at the wrong joint. The truth of the dogma is universal as all truth is; but the claim's error is not in who must believe it, it is in what it says the dogma means. Fix the content first; the audience will sort itself. Diagnose where the weight sits, not where the grammar twitches."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nowhere: that is the dogma, and squeamish Catholics should own it plainly.",
                "feedback": "This is the caricature the definition's enemies and its most excitable friends briefly shared, and it emptied pews in Munich for nothing: Döllinger left the Church over a dogma she never taught. The pope errs in opinions, predictions, prudential calls, and chess. The definition claims one guarded act, fenced by four conditions. Owning more than the Church defined is not boldness; it is inaccuracy with confidence."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At cannot err: the charism is conditioned, negative, of the office; it guards defining acts, nothing else.",
                "feedback": "Respondeo: three precisions carry it. Conditioned: only ex cathedra, on faith or morals, binding the whole Church. Negative: the assistance keeps error out of the definition; it inspires nothing new and improves no one's chess. And of the office, not the man: no impeccability, no wisdom on tap, no infallible interviews. The keeper's hands are tied to the collection; that the knots hold at the one decisive moment is the whole dogma, and it is enough."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At the pope: infallibility belongs to the bishops in council, never to him alone.",
                "feedback": "The definition says otherwise in its operative clause: the Roman Pontiff, under the conditions, is possessed of that infallibility with which the Church is endowed, and his definitions stand of themselves. Councils share the charism; they do not monopolize it, and appeal from pope to council was condemned four centuries before Vatican I said it again.<span class=\"condemned\">appeal from pope to council · condemned, Pius II, Execrabilis, 1460 · DS 1375</span>"
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t12-l3-q5`,
          type: "mcq",
          stem: `The keeper's charter, now in a dogmatic constitution.<div class="auctoritas"><div class="formula"><span class="bl">&para;</span>For the Holy Spirit was not promised to the successors of Peter that by His revelation they might make known new doctrine, but that by His assistance they might inviolably keep and faithfully expound the Revelation, the Deposit of Faith, delivered through the Apostles.<span class="cite">Pastor Aeternus, cap. 4, 1870 · DS 3070 · trans. Manning</span></div></div>What follows for how the pope relates to doctrine?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Doctrine matures into genuinely new truths, and the pope midwifes the evolution.",
                "feedback": "Evolution-of-dogma was proposed in exactly those terms and condemned in exactly those terms: dogmas presented as interpretations that evolve with religious consciousness are the Modernist thesis, and the sentence you just read is its standing refutation. The deposit closed with the Apostles; understanding deepens, the deposit does not grow. The difference is the whole wall.<span class=\"condemned\">evolution of dogma · condemned, Lamentabili, 1907 · DS 3454</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Supreme authority in service of a fixed deposit: he defines what was handed down, never what was not.",
                "feedback": "Respondeo: the highest teaching office in the world, and its entire jurisdiction is custody. He can define, bind, anathematize; he cannot add, subtract, or improve. You met this as an image in the prologue and as a workday discipline in the grace dispute, where two popes examined for twenty years and declined to manufacture a certainty the deposit did not contain. Here it is in its own dogmatic text: the promise itself is a promise of guarding."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Definitions register the consensus of the faithful, formalizing what the community already believes.",
                "feedback": "The sense of the faithful is real and the direction of this theory is backward: it makes the flock the source and the shepherd the secretary, the Pistoian inversion in polite dress. Definitions bind because of the authority Christ gave the office, not because a poll came back favorable; the constitution says of themselves, not from consent. The community's faith is guarded by the office, not constitutive of it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The deposit grows by addition: each definition is a new stone in a rising wall.",
                "feedback": "Close enough to be dangerous: definitions multiply, the deposit does not. A definition makes explicit, against a live denial, what was handed down implicitly; the museum hangs a clearer label, it acquires no new painting. Confuse explication with addition and you have accidentally conceded the Modernist premise with a trowel in your hand."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t12-l3-q6`,
          type: "fill_blank",
          stem: `The definition's borders, locked. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">From the Chair, he defines doctrine of <span class="fb-blank" data-blank="b1">______</span> or morals, to be held by the <span class="fb-blank" data-blank="b2">______</span> Church; such definitions are irreformable of themselves, not from the <span class="fb-blank" data-blank="b3">______</span> of the Church.</span>`,
          latin_tag: `ex cathedra`,
          doctrine_line: `A real primacy of jurisdiction, and a charism that guards: the pope defines infallibly only from the Chair, only on faith and morals, only what was handed down.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "faith"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "whole"
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
              "faith",
              "policy",
              "whole",
              "local",
              "consent",
              "silence",
              "custom",
              "senate"
            ],
            "feedback": {
              "all_correct": "Locked: faith, whole, consent. Four conditions fence one guarded act, and the last clause buries the ratification theory. The charism guards; it never grows. What the keeper guards above all is a door, and the next lesson reads what is written over it.",
              "partial_correct": "Some borders slipped. The matter is faith or morals; the binding reaches the whole Church; and the definitions stand of themselves, not from the consent of the Church, which was the Gallicans' last stand."
            }
          },
        }
      ],
    },
    {
      id: `t12-l4`,
      num: `IV`,
      title: `No Salvation Outside`,
      latin: `extra ecclesiam`,
      tag: `extra ecclesiam`,
      fin: {
        tag: `extra ecclesiam`,
        heading: `One ark, one door, and the reach of grace.`,
        body: `The ark rides the flood with a single door, and the dogma over the door has been defined three times at the highest level: <span class="lat">extra Ecclesiam nulla salus</span>, outside the Church there is no salvation. The course transmits it at full strength, and in the sense the Church herself gives it, which is the only sense a dogma has. Thomas equipped you centuries early: membership in act and membership in potency, Christ the Head of all men diversely. Trent named the desire, <span class="lat">votum</span>, that reaches the laver before the water does. Pius IX taught invincible ignorance and the one road in consecutive paragraphs of one letter, unembarrassed. And when one century produced both editors, the diluter who made sincerity a sacrament and the hardener who made the axiom crueler than its Author, the same Holy Office corrected both in a single page: no salvation by any sort of desire, only desire informed by supernatural faith and perfect charity; and no reading of the dogma harder than the Church's own. The man saved in invincible ignorance is saved in the ark by desire, not outside it by exception. But he cannot be sure, and he is deprived of many helps; the door exists to be walked through. Who will tell him it is there? Next lesson: the mandate.`,
      },
      questions: [
        {
          id: `t12-l4-q1`,
          type: "mcq",
          stem: `Three definitions, three centuries. Lateran IV, 1215: one universal Church of the faithful, outside of which there is absolutely no salvation (DS 802). Boniface VIII, 1302: it is altogether necessary to salvation for every human creature to be subject to the Roman Pontiff (DS 875). Then Florence:<div class="auctoritas"><div class="formula"><span class="bl">&para;</span>It firmly believes, professes, and proclaims that those not living within the Catholic Church, not only pagans, but also Jews and heretics and schismatics cannot become participants in eternal life... unless before the end of life the same have been added to the flock... no one, whatever almsgiving he has practiced, even if he has shed blood for the name of Christ, can be saved, unless he has remained in the bosom and unity of the Catholic Church.<span class="cite">Concilium Florentinum, Cantate Domino, 1442 · DS 1351 · Denzinger trans.</span></div></div>What is the standing of this teaching?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Medieval severity, since outgrown: the Church's mercy matured past her old wording.",
                "feedback": "Dogma does not molt. The maturing-mercy theory is the evolution thesis wearing a kind face, and it was condemned by name: dogmas are not interpretations that develop past their own meaning. The Church of 1949 called the axiom an infallible declaration while correcting a priest who read it too narrowly; she guards it, she does not outgrow it.<span class=\"condemned\">evolution of dogma · condemned, Lamentabili, 1907 · DS 3454</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A disciplinary rule about formal membership, revisable as canon law revises fasting.",
                "feedback": "Read the verbs of Florence again: firmly believes, professes, and proclaims. That is the grammar of dogma, not of discipline; fasting rules do not get defined with the Trinity and the Incarnation in the same bull. Discipline binds conduct and can change; this binds belief and cannot. Filing it under regulations is not a reading but an escape."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Defined dogma, thrice over: to be believed, and understood in the sense the Church herself gives it.",
                "feedback": "Respondeo: the highest register the Church has, used three times. And the second clause is not a softener but a rule of method the Holy Office stated while defending the dogma: it must be understood in the sense attributed to it by the Church herself, for the Saviour entrusted the deposit's explanation to the teaching authority, not to private judgment (Suprema haec sacra, 1949 · DS 3866). Private judgment can misread a dogma in either direction; this lesson will watch it do both."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Preacher's hyperbole: the councils spoke to move hearts, not to bind minds.",
                "feedback": "Councils in solemn session are the one place the Church is never rhetorical: every clause of Cantate Domino was weighed by men who anathematized for a living. Hyperbole is what the axiom's embarrassed friends call it and what its enemies hope it was; the Church has called it neither. She has called it the faith, and taught you how to hold it, which is the rest of this lesson."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t12-l4-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>This is the difference between the natural body of man and the Church's mystical body, that the members of the natural body are all together, and the members of the mystical are not all together... We must therefore consider the members of the mystical body not only as they are in act, but as they are in potentiality... if we take the whole time of the world in general, Christ is the Head of all men, but diversely. For, first and principally, He is the Head of such as are united to Him by glory; secondly, of those who are actually united to Him by charity; thirdly, of those who are actually united to Him by faith; fourthly, of those who are united to Him merely in potentiality, which is not yet reduced to act...</p><p>Those who are unbaptized, though not actually in the Church, are in the Church potentially. And this potentiality is rooted in two things: first and principally, in the power of Christ, which is sufficient for the salvation of the whole human race; secondly, in free-will.</p><div class="cr-cite">ST III, q. 8, a. 3, co. et ad 1 · trans. Fathers of the English Dominican Province · verified against New Advent</div></div>Two centuries before Florence defined the axiom, Thomas wrote this. What equipment does it hand the dogma?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Act and potency applied to membership: union in act by glory, charity, faith; the unbaptized in real potency.",
                "feedback": "Respondeo: the course's very first distinction, working at the door of salvation. Membership is not a single on-off switch but act and potency: some united actually, some standing in real potentiality that Christ's power keeps live. The unbaptized man is not actually in the Church, and he is not simply nowhere: he is in her potentially, and grace can reduce potency to act. Hold this text; the next questions watch the magisterium build with it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A denial: the unbaptized have no relation to the Church whatever until the water touches them.",
                "feedback": "The reply you just read says the opposite in so many words: though not actually in the Church, they are in the Church potentially. The no-relation reading was pressed in one American city in living memory, and the Holy Office answered it with, among other things, exactly this scholastic equipment. Whoever erases the potency has corrected Thomas without noticing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A softening: membership becomes a matter of degrees of religious feeling.",
                "feedback": "The degrees in the text are metaphysical, not emotional: glory, charity, faith, potency, each a precise mode of union, none of them a mood. Thomas measures by grace and act, not by warmth. The sentiment reading would dissolve the very distinctions the passage exists to draw, and the course has refused that solvent since the prologue defined faith as assent."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Universalism in seed: every potency to union is eventually reduced to act.",
                "feedback": "The passage's own next clause forecloses it: some are in potentiality who will never be reduced to act. Real potency is real possibility, not scheduled fulfillment; the fourth and fifth classes in Thomas's list part ways precisely there. The text keeps the door genuinely open and genuinely a door: it can be missed. That severity is part of the equipment too."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t12-l4-q3`,
          type: "mcq",
          stem: `A herdsman is born where the Gospel has never been preached. He keeps, with effort, the law written on his heart; he is ready to obey God as best he knows Him. Trent taught that justification cannot be effected without the laver of regeneration, or the desire thereof (Sess. VI ch. 4 · DS 1524). And Pius IX:<div class="auctoritas"><div class="formula"><span class="bl">&para;</span>Those who are struggling with invincible ignorance about our most holy religion. Sincerely observing the natural law and its precepts inscribed by God on all hearts and ready to obey God, they live honest lives and are able to attain eternal life by the efficacious virtue of divine light and grace.<span class="cite">Pius IX, Quanto conficiamur moerore, 1863 · DS 2866</span></div></div>What does the Church teach about the herdsman?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "His honest life saves him of itself: nature keeping its own law earns its own heaven.",
                "feedback": "Strike the words the Pope refused to omit: by the efficacious virtue of divine light and grace. The herdsman's honesty is the soil, never the seed; salvation begins from grace or it does not begin, a wall this course built during the grace dispute and will not unbuild for anyone's pastoral convenience. Nature earning heaven was buried at Carthage and stayed buried at Trent.<span class=\"condemned\">Pelagianism · condemned, Council of Carthage, 418; Trent Sess. VI can. 1, 1547 · DS 1551</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "He cannot be saved: without water and enrollment, ignorance however invincible avails nothing.",
                "feedback": "This out-guards the guardian: it reads the axiom more narrowly than the tribunal that owns it. The Holy Office censured exactly this rigor in 1949, teaching that God accepts, in the invincibly ignorant, an implicit desire contained in the soul's good disposition. The priest who would not yield was excommunicated in 1953, for disobedience, not for loving the dogma; he was reconciled before his death. Zeal past the magisterium is not fidelity; it is private judgment running hot.<span class=\"condemned\">the Feeneyite rigor · censured, Holy Office, Suprema haec sacra, 1949 · DS 3866-3872</span>"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "All religions are roads up one mountain: his as good as ours, given sincerity.",
                "feedback": "Pius IX called this a very grave error in the same letter you just read, and his predecessor condemned it by name as indifferentism: the theory that eternal salvation can be had in any religion whatever. The Church's mercy toward the ignorant is not a license for the instructed; the letter that comforts the herdsman does not comfort the professor.<span class=\"condemned\">indifferentism · condemned, Mirari Vos, 1832 · DS 2730-2731; Syllabus props. 15-17, 1864 · DS 2915-2917</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "He can be saved, by grace, through desire of the Church implicit in his readiness toward God.",
                "feedback": "Respondeo: the <span class=\"lat\">votum</span>, desire: Trent's word for the laver, extended by the Church to the ark itself. God, who instituted the Church as the means of salvation by His free ordinance and not by intrinsic necessity, can let the means reach a man who desires it implicitly, his will conformed to God's will without knowing all it contains. If the herdsman is saved, he is saved in the Church by desire, never outside her by exception: the axiom stands whole while grace does its quiet arithmetic. What that desire must contain, the next question sharpens."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t12-l4-q4`,
          type: "precision_check",
          stem: `Now the diluter's move, stated at strength. <em>"Since implicit desire can save, visible membership is optional and missionary urgency was a period costume: sincerity is the real sacrament."</em> Where exactly does it break?`,
          payload: {
            "statement": "Since implicit desire can save, visible membership is optional and missionary urgency was a period costume: sincerity is the real sacrament.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At implicit desire: no such category exists; the Church requires explicit intention in all cases.",
                "feedback": "The category exists on the Holy Office's own page: when a man is in invincible ignorance, God accepts an implicit desire, so called because it is contained in the soul's good disposition. Denying the category is the hardener's move, censured in the same letter that broke the diluter. The claim's error is downstream of the category, in what it pours through it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At any sort of desire: the desire that saves must carry supernatural faith and perfect charity.",
                "feedback": "Respondeo, in the letter's own words: it should not be thought that any sort of desire suffices; it must be animated by perfect charity, and it cannot produce its effect without supernatural faith, for he that cometh to God must believe (DS 3872). Sincerity is a condition of the desire, never its content; grace is the sacrament's giver, not sentiment. And the man so united cannot be sure of his eternal salvation and remains deprived of many heavenly gifts and helps found only in the Church. Optional is the one thing the letter never says."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nowhere: this is the Church's mature position, whatever older documents say.",
                "feedback": "The letter that taught the votum censured this reading in the same breath: the Pope condemns those who wrongly affirm that all men can be saved equally in all religions, one sentence after condemning those who exclude the invincibly ignorant. One page, two censures, both editors. Calling the diluted version mature slanders the document doing the diluting's autopsy."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At membership: membership resists definition, so nothing about it can be optional or required.",
                "feedback": "Membership was defined in one sentence you have already read: the baptized who profess the true faith and are neither separated from the Body's unity nor cut off by legitimate authority (Mystici Corporis, n. 22 · DS 3802). Three conditions, all visible. The claim's break is not in a definition the Church supposedly lacks; it is in the traffic the claim runs through the desire, one option up."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t12-l4-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "The 1949 precisions are modern dilution: the medieval Church knew nothing of salvation by desire."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Florence's wording admits no desire, and Florence outranks a Holy Office letter.",
                "feedback": "Florence defines the necessity; it does not adjudicate every mode of the necessity's fulfillment, and the harmonizing office belongs to the Church, not to the objector's ear for severity. The tribunal that guards Florence issued the 1949 letter, teaching that the dogma must be understood in the sense the Church herself gives it. Ranking documents against their own guardian is private judgment saluting the magisterium while overruling it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Mercy widened as dogma evolved, and honesty should admit the evolution.",
                "feedback": "This defends the 1949 letter by conceding the Modernist premise, which is a strange way to defend anything: dogmas as evolving interpretations were condemned in 1907, and the letter needs no such patron. The precisions are older than the objection, as the correct answer's dates show. Never rescue a truth with a condemned theory; the truth will not thank you.<span class=\"condemned\">evolution of dogma · condemned, Lamentabili, 1907 · DS 3454</span>"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Thomas taught in-potency union, Trent the votum, Pius IX invincible ignorance: the precisions predate the objection by centuries.",
                "feedback": "Respondeo: the paper trail is the answer. ST III q.8 a.3 before Florence was convoked; the laver of regeneration or the desire thereof at Trent, a century after Florence and in its full light; the herdsman's paragraph in 1863; the letter of 1949 merely assembling the tradition's own parts against a reader who had lost the assembly manual. Nothing was diluted in 1949; something was remembered, by the office whose job remembering is."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Because Florence was a local synod whose bull binds nobody.",
                "feedback": "Right verdict, disastrous reason: Florence was the seventeenth ecumenical council and Cantate Domino is as solemn as documents come; this course quoted it as defined dogma one lesson-screen ago and meant it. Defending the precisions by demoting the definition saws off the branch the precisions sit on. The dogma and its precisions stand together or not at all."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t12-l4-q6`,
          type: "mcq",
          stem: `The same pope, the same letter, consecutive paragraphs. Pius IX, 1863: the invincibly ignorant, by grace, are able to attain eternal life (n. 7). And immediately: also well known is the Catholic teaching that no one can be saved outside the Catholic Church (n. 8 · DS 2867). He saw no tension worth a paragraph break. Why not?`,
          latin_tag: `extra ecclesiam`,
          doctrine_line: `Outside the Church there is no salvation: defined dogma, held in the sense the Church herself gives it, reaching the invincibly ignorant through a desire informed by faith and charity; neither loophole nor cruelty.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The man saved in invincible ignorance is saved in the Church by desire, not outside her by exception.",
                "feedback": "Respondeo: the axiom names the one road; the votum is a way of being on the road, never a bypass around it. Christ's power holds the unbaptized in real potency to the one ark, and grace can make that potency a desire informed by faith and charity. So paragraph seven describes a man entering the door invisibly, and paragraph eight says there is no other door: one doctrine, two faces, no seam. The Church has never needed the contradiction her critics and her over-eager friends keep offering her."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because Pius IX contradicted himself within a page, as committee drafting sometimes does.",
                "feedback": "A pope teaching solemnly on salvation does not misplace a contradiction at arm's length; and the same both-and appears in Thomas, in Trent, and in the 1949 letter, which is a long committee. When every major witness across seven centuries holds two statements together, the working hypothesis is that they cohere and you have not yet seen how. This module exists to show you how."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because paragraph seven is pastoral comfort and paragraph eight doctrine: different registers, no collision.",
                "feedback": "Both paragraphs are doctrinal to the bone: the seventh teaches what grace can do, with conditions attached (grace, natural law kept, readiness to obey); the eighth teaches the necessity of the Church. Splitting comfort from doctrine is the two-rooms floor plan this course has refused since the prologue: one God, one truth, one register. The Pope needed no such partition, and neither do you."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because the Church holds both and forbids asking how they fit.",
                "feedback": "Mystery has an honored place in this course, and it is the last room, never the first: entered after the distinctions are spent, not instead of them. Here the distinctions do the whole job: act and potency, in re and in voto, ordinary road and extraordinary reach. An appeal to mystery before the distinguo, you learned at the grace dispute, is indistinguishable from having no answer. Here there is an answer, and you just gave it a moment's less credit than it deserves."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t12-l5`,
      num: `V`,
      title: `The Missionary Mandate`,
      latin: `mandatum`,
      tag: `mandatum`,
      fin: {
        tag: `mandatum`,
        heading: `The arithmetic of love.`,
        body: `The last lesson's mercy is this lesson's spur. If desire can reach the door, why cross oceans? Because the Lord's parting sentence was an imperative with no expiration: going, therefore, teach ye all nations. The Holy Office called it a very strict mandate in the same letter that taught the <span class="lat">votum</span>, and the two teachings never blink at each other: the man united by desire alone cannot be sure of his salvation and is deprived of many helps, and the Church holds the sure road, the sacraments, the doctrine, in her hands. To withhold the ordinary because God commands the extraordinary is not trust; it is sloth wearing trust's cloak. And the appeal is charity or it is nothing: the same Pius IX who taught the one road forbade unkindness to those off it in the very next paragraph. The confession this course inherits says it without flinching: to renounce the mandate is the gravest of crimes against humanity. A Church commanded to address every nation on earth is already a public thing, with a claim no parlor can contain. What that claim is, the next lesson crowns.`,
      },
      questions: [
        {
          id: `t12-l5-q1`,
          type: "mcq",
          stem: `The risen Lord's parting grammar: Going, therefore, teach ye all nations; baptizing them in the name of the Father, and of the Son, and of the Holy Ghost (Mt 28:19). The Holy Office, defending the axiom in 1949, reached first for this verse: in the first place, the Church teaches that in this matter there exists a very strict mandate from Jesus Christ. What kind of obligation is the mandate?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A counsel of perfection: binding on missionary orders, edifying for everyone else.",
                "feedback": "The verse's addressees are the Apostles, and the Apostles' office does not retire; the command runs to the Church as such, and through her to every member in his station. Orders take the field, certainly; but a counsel is what you may decline without sin, and the Holy Office's word was mandate, and strict. The division of labor is real; the division of obligation is not."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A standing command, binding until the end of time, which the Church has no power to suspend.",
                "feedback": "Respondeo: the sentence ends with its own duration clause: I am with you all days, even to the consummation of the world. The mandate is the Founder's, so the Church can no more waive it than amend the Creed; the confession this course inherits states the consequence at full voltage: to renounce its fulfilment is the gravest of crimes against humanity. Why the mercy of the last lesson makes the mandate more urgent, not less, is this lesson's work."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A first-century directive, substantially fulfilled once the Roman world had heard.",
                "feedback": "All nations is not a province list, and the consummation of the world is not the fall of Rome. The fulfilled-mandate theory would have surprised the missionaries of every subsequent century into early retirement, Xavier included. A command with an eschatological horizon expires at the horizon, and the horizon, you may have noticed, has not arrived."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An aspiration, conditioned on the nations' cultural readiness to receive it.",
                "feedback": "The grammar is imperative and the condition is absent: teach, baptizing, all. Readiness governs prudence, the how and the when of a mission; it never governs the whether. An obligation conditioned on the audience's welcome is called an invitation, and the Lord did not issue an invitation. The Church reads her orders as given, which is why she has died in so many interesting places."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t12-l5-q2`,
          type: "true_false_with_reason",
          stem: `True or false: "Since God can save the invincibly ignorant, missions are optional; indeed preaching adds risk, since it converts safe ignorance into culpable refusal."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The risk arithmetic is sound: silence keeps them innocent, and innocence saves.",
                "feedback": "Run the arithmetic honestly and it forbids the Apostles Pentecost. Ignorance is not innocence but a deprivation grace must overcome without the ordinary helps; the man in it cannot be sure, and is deprived of many gifts, by the Holy Office's own accounting. A rescuer who withholds the rope lest the drowning man misuse it has confused caution with charity. The Lord's command settles whose arithmetic governs."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The votum is now the ordinary way, so the ordinary way need not be preached.",
                "feedback": "Inverted: the votum is the extraordinary reach of an ordinary means, God's mercy where His entrusted road did not arrive. The 1949 letter teaches the mandate and the desire on the same page, first the mandate. Make the exception the rule and you have repealed the road because the ambulance exists, an inversion no traffic authority, earthly or heavenly, has ever endorsed."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The mandate is Christ's, not the Church's to waive; truth, sacraments, certainty are goods charity cannot withhold.",
                "feedback": "Respondeo: three walls, any one sufficient. The command stands until the consummation, and obedience is not contingent on our risk models. The goods withheld are real: sure doctrine, the sacraments, the fellowship of the visible body; leaving a man to the uncovenanted mercies while holding the covenanted ones in your hands is not respect, it is abandonment with manners. And the risk argument proves too much: it would have counseled silence at Pentecost. Charity that calculates itself out of speaking has stopped being charity."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Because invincible ignorance no longer exists in a connected world.",
                "feedback": "Right verdict, empirical crutch: connectivity delivers noise as efficiently as truth, and a man can scroll past a thousand gospels invincibly ignorant of all of them; invincibility measures the will's honest reach, not the signal coverage. The mandate would bind even in a world of perfect ignorance or perfect wifi, because it binds from the Lord's command, not from the state of the network."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t12-l5-q3`,
          type: "dialogue_branch",
          stem: `The fence, a summer evening. Your neighbor, a decent man and a fair gardener, sets down his shears: "So your church teaches that I, a decent man, am damned?" Hand him the true answer, which is also the charitable one.`,
          payload: {
            "commentatorLine": "The Commentator leans on the fencepost, uninvited but not unwelcome. 'He has asked you the hardest question in the module, and he has asked it holding shears. Answer him with the whole doctrine or not at all.'",
            "branches": [
              {
                "text": "It teaches one road, and real mercy for the man who cannot find it through no fault of his own. But I will not gamble your soul on the mercy reserved for the man who never had what I am offering you now.",
                "verdict": "correct",
                "feedback": "The whole doctrine over one fence: the dogma unsoftened, the precision unhidden, and the offer made, which is the mandate in its native habitat. Notice what the answer refuses: it neither reassures him into indifference nor sentences him past the magisterium; it tells him the truth and hands him the rope. Pius IX in a garden: the one road, and charity's arithmetic, and no unkindness anywhere in it. The Baptist did as much for a king, at higher cost."
              },
              {
                "text": "No, of course not: sincerity is what God weighs, and yours is evident. Stay as you are.",
                "feedback": "Kind, and false twice: it promises what the Church has never taught, that any sort of sincerity saves, and it closes the door the mandate commands you to open. Stay as you are is the one sentence charity can never say across that fence. The theory underneath it has a name and a condemnation.<span class=\"condemned\">indifferentism · condemned, Mirari Vos, 1832 · DS 2730-2731</span>"
              },
              {
                "text": "Yes: outside the visible rolls there is only fire, and your decency is chaff before it.",
                "feedback": "This sentences the man past the magisterium: it erases the votum, the in-potency union, and the invincible-ignorance teaching in one swing, reading the axiom more narrowly than the tribunal that guards it. The Holy Office censured that reading in 1949, and it loses the gardener besides, which the true answer need not. Rigor that outruns Rome is not orthodoxy; it is private judgment with a stern face.<span class=\"condemned\">the Feeneyite rigor · censured, Holy Office, Suprema haec sacra, 1949 · DS 3866-3872</span>"
              },
              {
                "text": "That old line is poetry from a harsher age; the modern Church has quietly buried it.",
                "feedback": "This soothes him with a double falsehood: the dogma is defined and standing, called an infallible declaration by the same twentieth-century office your century likes to cite; and a Church that quietly buries dogmas is precisely what Pastor Aeternus rules out. You have slandered the Church to spare the neighbor, and lost both: he deserved the truth, and she never authorized the burial.<span class=\"condemned\">evolution of dogma · condemned, Lamentabili, 1907 · DS 3454</span>"
              }
            ]
          },
        },
        {
          id: `t12-l5-q4`,
          type: "mcq",
          stem: `The mandate also draws a line the century dislikes. What does teach all nations exclude?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Treating the Church as one religious option among peers, proposing herself as a preference.",
                "feedback": "Respondeo: a Church commanded to convert every nation cannot present herself as a taste. Pius XI refused the pan-religious congresses on exactly this ground: they presume all religions more or less good and praiseworthy, and that presumption abandons the true religion (Mortalium Animos, 1928). The confession this course inherits keeps the edge: she can in no way be regarded or treated on an equal footing with a false form of worship. The mandate is the equal-footing theory's standing refutation."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Charity toward those outside: the mandate hardens the heart to sharpen the message.",
                "feedback": "Pius IX wrote the standing rebuttal in the letter you already know: God forbid that the children of the Catholic Church should even in any way be unfriendly to those not united to us; let them attend to their needs with all the kind services of Christian charity. The mandate is charity's errand; a hard heart cannot run it. Whoever sharpens the message on his neighbor has blunted it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The study of other religions, lest knowledge soften conviction.",
                "feedback": "The Church that commissioned Ricci to master the Chinese classics does not fear the syllabus. Knowing the nations is the mandate's own logistics: you cannot address what you have not bothered to understand, and error is answered by being known exactly, a discipline this course practices on heresies weekly. Conviction that requires ignorance for its safety was never conviction."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Dialogue in any form: proclamation only, questions afterward, preferably never.",
                "feedback": "The Areopagus was a dialogue, and Paul quoted the Athenians' own poets before he preached them the Resurrection. The mandate fixes the destination, not the conversational route; the Church has argued, answered, and disputed her way across every continent, this course being a late artifact of the habit. What she may not do is mistake the dialogue for the destination. Talk serves the teaching, or it is only talk."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t12-l5-q5`,
          type: "fill_blank",
          stem: `The mandate, locked. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The command is to teach all <span class="fb-blank" data-blank="b1">______</span>; its urgency stands because the <span class="fb-blank" data-blank="b2">______</span> that can save is not the road entrusted to our hands; and the appeal is made with <span class="fb-blank" data-blank="b3">______</span>, as rescue and never as conquest.</span>`,
          latin_tag: `mandatum`,
          doctrine_line: `Teach all nations: a strict mandate binding until the end of time, urgent because the votum is not the entrusted road, and charitable because rescue is charity's own grammar.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "nations"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "desire"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "charity"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "nations",
              "elites",
              "desire",
              "census",
              "charity",
              "force",
              "commerce",
              "caution"
            ],
            "feedback": {
              "all_correct": "Locked: nations, desire, charity. The mercy of lesson four and the urgency of lesson five are one teaching seen from two sides, and neither survives without the other. A Church with orders to address every nation is a public claimant by construction. Her Founder's public title is the next lesson.",
              "partial_correct": "Some blanks resisted. The command runs to all nations until the end of time; the votum's existence never repealed the road; and the appeal is charitable or it is not the Church's appeal."
            }
          },
        }
      ],
    },
    {
      id: `t12-l6`,
      num: `VI`,
      title: `Christ the King`,
      latin: `Christus Rex`,
      tag: `Christus Rex`,
      fin: {
        tag: `Christus Rex`,
        heading: `The crown on the prow.`,
        body: `The polite settlement offers Christ a chaplaincy: hearts, Sundays, and silence in the assembly. Pius XI declined on His behalf. The kingship is no metaphor: it is His in the strict and proper sense, by nature, because the Person who is man is God, and by acquired right, because He bought His subjects with His blood. The kingdom is spiritual in its nature and its means, no armies, no tax stamps; and universal in its claim, because there is no difference in this matter between the individual and the family or the State. Rulers owe Him public honor and obedience; laws answer to His law. The century's counter-confession has a name, <span class="lat">laicismus</span>, the plague of secularism: the empire of Christ rejected, His Church leveled with the sects, then chartered beneath the state. Against it the Pope raised not an army but a feast, <span class="lat">Christus Rex</span>, because the Church answers rebellions liturgically: what is confessed every year cannot be legislated out of memory. <span class="lat">Non eripit mortalia qui regna dat caelestia</span>: He who gives heavenly kingdoms does not snatch away mortal ones. The King is not the state's rival; He is its reason. One recapitulation remains.`,
      },
      questions: [
        {
          id: `t12-l6-q1`,
          type: "mcq",
          stem: `The modern settlement, stated politely: Christ may reign in hearts; parliaments are neutral ground. Pius XI heard the settlement and wrote a feast against it. In what sense does the Church teach that Christ is King?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Metaphorically: King names His moral eminence, as we call a lion king of beasts.",
                "feedback": "The encyclical grants the metaphorical usage its long custom and then walks past it: if we ponder this matter more deeply, we cannot but see that the title and the power of King belongs to Christ as man in the strict and proper sense too. The lion comparison is where the doctrine begins, not where it rests. A merely moral kingship would have needed no feast; eminence does not legislate."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "As God only: the Word rules all things; the man Jesus holds no royal office.",
                "feedback": "Backward by one nature: as consubstantial with the Father the Word possesses all things in common with Him eternally, which is why the encyclical says it is precisely as man that He received power and glory and a kingdom. The kingship worth defining is the one conferred on the assumed nature: Daniel's son of man given dominion. Deny the man the crown and the Incarnation changed nothing in public."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In the strict and proper sense, as man: real legislative, judicial, and executive power.",
                "feedback": "Respondeo: a threefold power which is essential to lordship, the encyclical says: lawgiver, whom Trent anathematizes us for reducing to redeemer only; judge, with the Father's judgment given to the Son; executor, whose commands none may escape. Kingship in the proper sense, held by the man Christ Jesus. On what foundation the crown sits, the next reading shows; it is a foundation this course spent a module learning to name."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Eschatologically: King at the end of history, claimant until then.",
                "feedback": "The kingdom comes in fullness at the end; the kingship holds now: all power is given to me in heaven and in earth is a perfect tense spoken on a Galilean hill. A claimant-until-then Christology would make the Church's whole public worship an anticipation of a title not yet conferred, and the Creed's sits at the right hand a courtesy seat. He reigns; the end reveals it; the feast confesses it early and annually."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t12-l6-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>"Christ," he says, "has dominion over all creatures, a dominion not seized by violence nor usurped, but his by essence and by nature." His kingship is founded upon the ineffable hypostatic union. From this it follows not only that Christ is to be adored by angels and men, but that to him as man angels and men are subject, and must recognize his empire; by reason of the hypostatic union Christ has power over all creatures. But a thought that must give us even greater joy and consolation is this that Christ is our King by acquired, as well as by natural right, for he is our Redeemer.</p><div class="cr-cite">Pius XI, Quas Primas, 1925, n. 13, quoting Cyril of Alexandria · DS 3675-3676</div></div>Where does the encyclical ground the kingship?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "In the consent of Christian peoples: kingship by the baptized world's long plebiscite.",
                "feedback": "The text's first clause forecloses it: a dominion not seized nor usurped, and not elected either, but his by essence and by nature. A kingship by plebiscite would fall by plebiscite, which is precisely the century's project the encyclical was written against. Thrones held by polling are called something else, and the something else was the disease."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In the hypostatic union first, and in the Redemption besides: by nature and by purchase.",
                "feedback": "Respondeo: the crown sits on the union. The man Christ is King because that man is the divine Person: the distinction between nature and person, which you learned on taxes and corporations, here carries a throne. And a second title stacks on the first: by acquired right, for he is our Redeemer; you were bought with a great price. By nature and by purchase: either would suffice; He holds both. What follows for parliaments, the lesson now presses."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In the Church's medieval political experience, generalized into doctrine.",
                "feedback": "The passage quotes a fifth-century Alexandrian on Daniel's son of man; the grounding predates Christendom by the whole patristic age and scripture besides. Medieval polities applied the doctrine, variously and mortally; they did not manufacture it. Read the citation trail before assigning the birthplace: this crown was not forged at Aachen."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "In Old Testament royal poetry, taken as court flattery fulfilled.",
                "feedback": "The Psalms and prophets supply the encyclical's evidence, and evidence is not ground: the texts testify to a kingship whose foundation the passage names outright, the ineffable hypostatic union. Poetry announces the King; the union makes Him one. Confuse the herald with the title deed and the whole doctrine floats loose, which is exactly how the century preferred it."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t12-l6-q3`,
          type: "mcq",
          stem: `Two texts from one encyclical. This kingdom is spiritual and is concerned with spiritual things (n. 15). And: it would be a grave error to say that Christ has no authority whatever in civil affairs; nor is there any difference in this matter between the individual and the family or the State (nn. 17-18). How do both stand?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "They cannot both stand: the Church should absorb civil functions and rule directly.",
                "feedback": "The theocratic reading loses both texts at once: the kingdom's spiritual nature forbids the Church becoming a state, and the old bull's own image kept the temporal sword in the hands of kings, wielded for the Church, not by her priests. Two powers, distinct in their orders, both under one King: the Church claims the King's rights, not the magistrate's desk. Absorption is the error's mirror, not its answer."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The first text wins: the kingship is inward, and civil life stays neutral ground.",
                "feedback": "You have chosen the settlement the encyclical calls a grave error, in those words. Spiritual names the kingdom's nature and means, not its jurisdiction's edge: the same document binds rulers and princes to give public honor and obedience to Christ. Neutral ground is the one thing the doctrine denies exists; the parliament that owes Him nothing has already crowned someone else."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The second wins: the kingdom is political after all, and awaits its armies.",
                "feedback": "The Lord settled this before Pilate: my kingdom is not of this world, spoken while claiming to be a king. The kingship binds polities without becoming a polity: no armies, no rival administration, a claim on laws and public honor rather than a seat in the ministry. Militarize the kingdom and you have traded the doctrine for the caricature its enemies prefer to fight."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Both: spiritual in nature and means, universal in claim; states owe public honor and laws respecting His law.",
                "feedback": "Respondeo: distinguish, as always, and both texts keep their full strength. The kingdom's nature is spiritual: entered by faith and baptism, armed with truth and grace only. Its claim is universal: men are His subjects in all their acts, and men legislate, judge, and govern; so the State as such owes public worship and laws answerable to His law: the ruler's dignity demands that the State take account of the commandments of God and Christian principles in legislating (n. 32). Spiritual does not mean private; it means the weapons are not carnal. The century's whole error lived in that confusion."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t12-l6-q4`,
          type: "mcq",
          stem: `The encyclical names the disease it medicates.<div class="auctoritas"><div class="formula"><span class="bl">&para;</span>The empire of Christ over all nations was rejected. The right which the Church has from Christ himself, to teach mankind, to make laws, to govern peoples in all that pertains to their eternal salvation, that right was denied. Then gradually the religion of Christ came to be likened to false religions and to be placed ignominiously on the same level with them. It was then put under the power of the state and tolerated more or less at the whim of princes and rulers.<span class="cite">Pius XI, Quas Primas, 1925, n. 24</span></div></div>What is the diagnosis?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Secularism is not neutrality but a rival confession: the state that dethrones Christ enthrones itself.",
                "feedback": "Respondeo: read the sequence as a coronation in reverse: empire rejected, teaching right denied, the true religion leveled with the false, then licensed by the state, which now stands where the King stood, granting toleration at whim. The Latin names it <span class=\"lat\">laicismus</span>; the English translation says anti-clericalism, but the disease is larger than a dislike of clergy: it is the polity's apostasy dressed as evenhandedness. The confession this course inherits draws the corollary: secularism of nations is an implicit denial of the divinity and universal kingship of Our Lord. Neutral is what the new sovereign calls itself.<span class=\"condemned\">separation of Church and State as the ideal · condemned, Syllabus prop. 55, 1864 · DS 2955</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The disease is atheism proper; secular neutrality is a benign waiting room.",
                "feedback": "The sequence you just read is the waiting room's floor plan: leveling, then licensing, each step polite, none of them atheist in name. The state need never deny God; it need only tax Him like the sects and schedule Him like the fairs. Pius XI diagnosed the gradualism precisely because it wears benignity all the way down. The last step is unbelief; the plague is the staircase."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The disease is rudeness to clergy, an etiquette problem with political symptoms.",
                "feedback": "The translation's word anti-clericalism invites the shrinkage, and the text refuses it: what was rejected is the empire of Christ, what was denied is the Church's right to teach and govern unto salvation. Clergy are jostled in every age and the Church survives the elbows. The plague is constitutional, not conversational: a public order built on the King's absence. Read the sequence, not the label."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The disease is religion meddling in politics, which provoked the state's just defense.",
                "feedback": "This is the plague writing its own case history, and one great condemnation already answered it: the thesis that the state may charter, judge, and subordinate the Church was Marsilius of Padua's, and John XXII condemned it while Dante's ink was scarcely dry. The Church teaching nations is not a meddler in the King's realm; she is the realm's notary. The defense theory inverts landlord and tenant.<span class=\"condemned\">Marsilius of Padua, the Church subject to the state · condemned, John XXII, Licet iuxta doctrinam, 1327 · DS 941-946</span>"
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t12-l6-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "Quas Primas was nostalgia: with Christendom gone, the social kingship expired as a dead letter."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The encyclical mourns a lost world, and doctrine follows the world it was made for.",
                "feedback": "Check the document's own tense: it was written after Christendom's fall, for an age in open rebellion, and it institutes a feast rather than a requiem. Mourning does not legislate annual observances to the end of time. And doctrine following the world is the exact thesis the anti-Modernist corpus exists to refuse; the kingship is grounded two lessons deep in who Christ is, which no armistice or abdication can amend."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Rights unrecognized lapse, in crowns as in easements.",
                "feedback": "Prescription runs against human titles because human titles are conventions; this title is the hypostatic union, and no statute of limitations reaches into the Trinity. A rightful king ignored is a king wronged, not a king retired: the encyclical's word for the ignoring is rebellion, which is not the vocabulary of expiry. The easement analogy would amuse the King's lawyers; it would not move His court."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The kingship rests on union and Redemption, not on polities; the feast was made for the rebel age.",
                "feedback": "Respondeo: the doctrine's ground is Christological, so it survives every political weather; and the document's occasion proves the point, since Pius XI raised the feast as the remedy for the plague, medicine for the present day, not incense for a memory. A doctrine designed for the rebellion cannot expire with the ancien régime it postdates. The King's claim on the twenty-first century's parliaments is exactly His claim on the thirteenth's: whole."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Because Christendom never really ended, only changed offices.",
                "feedback": "Right verdict, wishful premise: the encyclical itself describes the empire of Christ rejected and the Church put under the state, which is Christendom ended in the operative sense, whatever survives in the stonework. The kingship does not need Christendom alive to bind; that is the correct answer's whole point, and it needs no denial of the obvious to make it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t12-l6-q6`,
          type: "fill_blank",
          stem: `The kingship, locked. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Christ is King by <span class="fb-blank" data-blank="b1">______</span>, through the union of God and man in one Person, and by <span class="fb-blank" data-blank="b2">______</span> right, through the price of His Blood; His kingdom is spiritual in its means and binds individuals, families, and <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          latin_tag: `Christus Rex`,
          doctrine_line: `Christ is King in the strict and proper sense, by nature and by acquired right: His kingdom is spiritual in its means and universal in its claim, binding individuals, families, and nations.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "nature"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "acquired"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "nations"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "nature",
              "election",
              "acquired",
              "delegated",
              "nations",
              "parishes",
              "feelings",
              "majorities"
            ],
            "feedback": {
              "all_correct": "Locked: nature, acquired, nations. Two titles, one crown, and a claim no parliament can table. The feast keeps the confession annual, because what is sung is not forgotten. One lesson remains: the whole Church, held in one hand.",
              "partial_correct": "Some blanks resisted. By nature, because the Person is divine; by acquired right, because He purchased His subjects; and the claim reaches nations as surely as hearts, or the grave error has won the wording."
            }
          },
        }
      ],
    },
    {
      id: `t12-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The whole Church, in one hand.`,
        body: `Hold the module the way you would hold a coin: one thing, faces you can name. A real body, visible because bodies are visible, alive with her Head's own life, the corporation's borrowed grammar paid in blood. Four marks in one signature, borne together or borne by no one. A keeper with keys and a bound tongue: supreme jurisdiction whose whole business is custody, infallible only from the Chair, only on the deposit, guarding, never growing. One ark with one door, and the dogma over the door held exactly as the Church holds it: desire informed by faith and charity can cross a threshold the feet never found, and the mercy makes the mandate more urgent, not less. And on the prow, a crown: the King by nature and by purchase, whose empire includes parliaments, whose feast is the Church's annual refusal to be chartered. This was the module the philosophy could not have written alone: the magisterium taught most of it, because the Church defining herself is the Church teaching, and you now know why that is not circular but constitutional. The visible body acts through visible signs. Seven of them wait, one lesson-door down. <span class="lat">Deo gratias</span>.`,
      },
      questions: [
        {
          id: `t12-l7-q1`,
          type: "match_pair",
          stem: `The module in four images. Match each to the doctrine it carried.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the certificate of incorporation"
              },
              {
                "id": "L2",
                "text": "the museum keeper's keys"
              },
              {
                "id": "L3",
                "text": "the ark with one door"
              },
              {
                "id": "L4",
                "text": "the crown on the figurehead"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "a body real beyond legal fiction, alive with the Head's own life"
              },
              {
                "id": "R2",
                "text": "supreme authority whose whole office is custody of the deposit"
              },
              {
                "id": "R3",
                "text": "one Church necessary for salvation, reached in act or by desire"
              },
              {
                "id": "R4",
                "text": "the King whose empire includes nations as well as hearts"
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
              "all_correct": "Four images, correctly filed, and notice they are one picture: the living body sails as an ark, keeps her deposit under one keeper, and flies her Founder's colors over every sea she crosses. Whoever owns these four can state the treatise on the Church that Thomas never wrote, which is roughly what the popes did.",
              "partial_correct": "Some images misfiled. The certificate taught the real body; the keys taught custody without invention; the ark taught the one door and the desire that reaches it; the crown taught the kingship of nations."
            }
          },
        },
        {
          id: `t12-l7-q2`,
          type: "mcq",
          stem: `Leo XIII answered the invisible-church thesis with an analogy this course taught you in its opening weeks. Which one, and why does it close the question?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Soul and body: one man from two principles; strip either and what remains is not a man.",
                "feedback": "Respondeo: the union of soul and body, the philosophy course's hardest-won picture of unity, is Satis Cognitum's whole argument in one image. Soul alone is a ghost: the invisible church. Body alone is a corpse: the merely human institution. The true Church is one thing from visible society and supernatural life, exactly as a man is one thing from body and soul; and nobody who understood the second week of hylomorphism can be surprised by the ecclesiology. The tools were always for this."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The sculptor and the marble: the Church as matter shaped by grace's form.",
                "feedback": "A workable image for grace perfecting nature, and not the one Leo reached for, because it leaves the two terms separable: the sculptor walks away and the marble remains. The invisible-church error needs an analogy where separation is death, not departure; only the soul-body union kills the separability, which is why the encyclical staked its argument there."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The chain of movers: the visible Church moved by the invisible one.",
                "feedback": "Mover-and-moved keeps the two churches the error wanted: an invisible principal working a visible instrument at arm's length. Leo's analogy forbids the arm: soul and body are not two agents in relay but one substance in act. The difference between a chain and a union is the difference between the error and the doctrine, so the choice of image was the argument."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Substance under accidents: the true Church hidden beneath institutional appearances.",
                "feedback": "This image has a glorious future one module from now, and a disastrous present here: substance under accidents would put the real Church beneath her visible surface, which is the invisible-church thesis in the course's own vocabulary. Leo needed visibility to be of the essence, not of the wrapping. Right tool, wrong job: the course keeps its apple for the altar."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t12-l7-q3`,
          type: "mcq",
          stem: `This module leaned on papal and conciliar texts more heavily than any other in the course, because Aquinas left no treatise on the Church. Why is that reliance fitting rather than embarrassing?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It is a little embarrassing: doctrine is sturdier when a Summa article underwrites it.",
                "feedback": "Sturdiness measured by shelf location is a bibliographer's theology. Thomas himself argued from the Church's authority as from a first principle: the sed contra you read in lesson three rests the symbol on the Sovereign Pontiff. The Summa is the course's master teacher, not the deposit's landlord; the deposit's landlord is the subject of this module, which is the point you are being asked to see."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because later centuries produce better theology, and the popes wrote later.",
                "feedback": "Later is not better; later is later, and the evolution thesis lurking in better was condemned in 1907. The encyclicals you read are authoritative because of the office that issued them, not the century; they define and expound what was handed down, Leo quoting Cyril, Pius XII quoting Paul. The magisterium's lateness is custody's timestamp, never improvement's."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because Aquinas's silence shows the doctrine was undeveloped, so the module teaches recent opinion.",
                "feedback": "His silence was a missing shelf, not a missing doctrine: you read his mystical body, his membership in act and potency, his pope publishing the symbol, all load-bearing, all seven centuries old. The module's texts define against later denials what those articles already held. Undeveloped is what lesson one refuted with a close reading; recent opinion is what an anathema is not."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The Church defining herself is the Church teaching: the magisterium is not a source here but the subject.",
                "feedback": "Respondeo: in every other module the magisterium guards the content; in this one it enacts it. When Pastor Aeternus defines the primacy, the primacy is doing the defining; when the Holy Office rules on the axiom's sense, the Church exercises the very custody the module describes. That is not circularity but constitution: the living authority is itself the doctrine under study, caught in the act. No other treatise could be taught this way, and none other would need to be."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t12-l7-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "A Catholic may now say: the Church is a spiritual reality whose visible organization, papacy included, is negotiable scaffolding."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The mystical body outranks its structures, and rank licenses renovation.",
                "feedback": "The module's first lesson was built to prevent this sentence: the mystical body IS the visible Church, one referent under two names, so there is no higher church in whose name the scaffolding could be struck. Renovation theology always begins by splitting what Pius XII joined. The split was the error; the rank never existed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE. Visibility is of her essence, the primacy of divine institution with perpetual successors; invisible marks mark nothing.",
                "feedback": "Respondeo: three locks on the door. She is visible because she is a body, essentially, not conveniently. The primacy is Christ's own architecture, under anathema perpetual (DS 3058), so it is no more negotiable than baptism. And the marks must stand in daylight or the seeker was mocked. Scaffolding comes down when the building is finished; the Church is the building, and her visible frame is wall, not falsework."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE. Only defined dogma binds; church order is administration, and administration is negotiable.",
                "feedback": "Doctrinal minimalism, and it fails on the record: the Church's constitution is itself defined dogma. Perpetual successors in the primacy stand under anathema (DS 3058); the primacy is of jurisdiction, not courtesy (DS 3055). The organization's spine IS doctrine; only its human furniture, curial departments and the rest, is reformable, and the claim said papacy included, which crosses the defined line."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Because no reality can be spiritual and organized at once, so the premise is nonsense.",
                "feedback": "The premise is not nonsense; it is half the truth, which is the most durable kind of error. She is spiritual, and organized, and one, as a man is soul and body and one: the module's opening analogy exists because both halves are true together. Deny the coexistence and you have refuted the ghost-church by conceding its logic. Keep the verdict; the reason needs lesson one again."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t12-l7-q5`,
          type: "fill_blank",
          stem: `The module in one breath. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">One visible <span class="fb-blank" data-blank="b1">______</span> with four marks; one keeper who <span class="fb-blank" data-blank="b2">______</span> and never invents; no salvation <span class="fb-blank" data-blank="b3">______</span> her; and her Founder is King of nations as well as hearts.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "body"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "guards"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "outside"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "body",
              "symbol",
              "guards",
              "grows",
              "outside",
              "beyond",
              "against",
              "beneath"
            ],
            "feedback": {
              "all_correct": "Locked: body, guards, outside. Fourteen words and the treatise is in your pocket, with its precisions attached and its censures where Rome put them. The deliverable of this module is that sentence, held whole, softened for no one, hardened past no definition.",
              "partial_correct": "Some blanks resisted. A visible body, not a symbol; a keeper who guards, since growing is the one thing forbidden him; and no salvation outside her, in exactly the sense she herself teaches."
            }
          },
        },
        {
          id: `t12-l7-q6`,
          type: "mcq",
          stem: `Last question, and a door. The Church is a visible body dispensing invisible grace. By what manner of instrument would such a body do its daily work?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `One visible body with four marks; one keeper who guards and never invents; no salvation outside her, held in her own sense; and her Founder King of nations as well as hearts.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "By ideas alone: doctrine taught, grace following comprehension.",
                "feedback": "Doctrine is real bread, and man is not a mind on a stick: the course's anthropology gave him a body, senses, and a soul that learns through matter. A Church of ideas alone would feed the professor and starve the child, the peasant, and most professors. The Founder, who took flesh, did not found a seminar. Something more incarnate is coming."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "By moral influence: example and exhortation, warming souls toward God.",
                "feedback": "Influence is real and the question was about instruments: exhortation proposes, it does not pour. A body whose Head bestows grace on all the members needs channels that deliver what they announce, or the mystical body is a lecture society with incense. The tradition's word for a sign that delivers is the next module's first lesson."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "By visible signs that really cause what they signify: sensible things carrying grace.",
                "feedback": "Respondeo: as the Church is visible society and invisible life in one, her instruments are sensible sign and real cause in one: water that speaks and washes, words that name and effect. You own the machinery already: the sign from the semiotics module, the instrumental cause from the chisel. Seven springs from one rock, one door down. Opens the door to the Sacraments."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "By juridical acts: grace assigned by decree, as citizenship is conferred.",
                "feedback": "The Church does wield real juridical power, lesson three was clear; but grace is not a legal status, and decrees do not regenerate. The juridical reduction is the corpse-error's last redoubt: body without life. The true instruments will be stranger than paperwork and humbler than ideas: bread, oil, water, and a hand raised over a bowed head. The course has been saving an apple for exactly this."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    }
  ],
};
