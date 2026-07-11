import type { ModuleMeta } from '../types';

/** T8 · Grace. Wired into the live app by scholastica-claude-code-wing-parity-RUN.md (WP-A). Content is the authored t8-content.json, copied faithfully; no prose edits. */
export const t8: ModuleMeta = {
  id: 8,
  title: `Grace`,
  short: `De Gratia`,
  label: `Theologia VIII · Grace`,
  latin: `De Gratia`,
  aim: `Grace is a real gift in the soul, not a divine attitude at a distance: an abiding quality that heals and elevates nature (sanctifying), and a divine motion to act (actual); unmeritable at its beginning, it makes men truly just, truly free, and truly able to merit, so that God crowns His own gifts.`,
  lessons: [
    {
      id: `t8-l1`,
      num: `I`,
      title: `What Practice Cannot Build`,
      latin: `gratia supra habitum`,
      tag: `gratia supra habitum`,
      fin: {
        tag: `gratia supra habitum`,
        heading: `The ceiling of ten thousand hours.`,
        body: `Practice deposits real perfections in a real subject; the course learned that on a pianist's hands and never took it back. But every acquired habit perfects man toward the good his nature can reach, and the life now in question is not that good: it is God's own life, participated. No repetition scales that wall. What is above nature must be lowered in, and the lowering is called infusion: a quality, a light, a root from which faith, hope, and charity grow. The word for the whole arrangement is grace, and it is the subject of everything that remains.`,
        distinction: {
          latin: `habitus acquisitus  ·  gratia infusa`,
          english: `acquired habit  ·  infused grace`,
          gloss: `What repeated acts deposit, nature's ceiling included; and what God alone pours in, a participation of His own nature.`,
        },
      },
      questions: [
        {
          id: `t8-l1-q1`,
          type: "mcq",
          stem: `A pianist sits down at a strange piano and her hands already know the way; ten thousand hours deposited that readiness in her. Now consider faith, hope, and charity, the three that stand above everything practice can build. What separates them from her art?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Difficulty: they are like her habit, only far harder to acquire.",
                "feedback": "Harder would still be reachable; a taller ladder is still a ladder. The three theological virtues are not at the top of the practice-ladder but off it altogether: no number of hours deposits charity, because the end it aims at exceeds what any human act can earn or build. The difference is kind, not degree."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Subject matter: hers concern music, these concern religion.",
                "feedback": "By that sorting, a habit of theology-reading would be a theological virtue, and notoriously it is not. The line does not run between topics but between origins and ends: what acts can build, aimed at nature's good, against what God alone infuses, aimed at Himself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Origin and end: hers was built by acts toward nature's good; these are infused, toward God Himself.",
                "feedback": "Respondeo: both joints at once. Acquired habits are deposited by repeated acts and perfect man toward the good proportioned to his nature; the theological virtues are infused by God alone and order man to a happiness that surpasses his nature. The pianist's hands mark the exact ceiling of practice, which is why the course showed you those hands before it showed you this door."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Certainty: her habit can fail on a bad night; the infused three cannot.",
                "feedback": "Charity, alas, can be lost in one mortal act, which is a worse night than any pianist has had. Security is not the difference; infusion is. What God pours in, no practice pours in, and that remains true even though the vessel can still be tipped."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t8-l1-q2`,
          type: "mcq",
          stem: `The word grace gets used loosely: God's favor, God's fondness, a divine attitude warming toward you. Aquinas notices something about divine love that no human love can claim: when a man favors you, your good qualities came first and drew the favor. When God loves, which comes first?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "His love: it does not find the good in us, it causes it.",
                "feedback": "Respondeo: man's love presupposes the good it loves; God's love creates the good it loves, since every good in the creature flows from the divine will. So the grace of God cannot be only a smile at a distance: every time He loves someone into friendship, something real arrives in the one loved. The gift is the proof of the favor, and the next question asks what the gift is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Our merits: God, being just, loves those who have earned regard.",
                "feedback": "Then grace would be wages, and the Apostle closes that door in one clause: if by grace, it is not now by works, otherwise grace is no more grace. Nothing in us preceded His love except need. What He rewards later, His love planted first."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither: love between God and man is mutual and simultaneous.",
                "feedback": "Warm, symmetrical, and impossible: the creature's very power to love back is itself among the goods God's love causes. We love Him because He first loved us is not poetry but causality. The symmetry you want arrives at the end of the story, not the beginning."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Our nature: being human is what draws the divine love.",
                "feedback": "Being human is already His gift; you have moved the question back one step without escaping it. And the love in question here is more than the common love that gives natural being: it is the special love that draws the rational creature above its nature, which nature as such cannot invoice."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t8-l1-q3`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Man is aided by God's gratuitous will in two ways: first, inasmuch as man's soul is moved by God to know or will or do something... secondly, man is helped by God's gratuitous will, inasmuch as a habitual gift is infused by God into the soul; and for this reason, that it is not fitting that God should provide less for those He loves, that they may acquire supernatural good, than for creatures, whom He loves that they may acquire natural good. Now He so provides for natural creatures, that not merely does He move them to their natural acts, but He bestows upon them certain forms and powers, which are the principles of acts... Much more therefore does He infuse into such as He moves towards the acquisition of supernatural good, certain forms or supernatural qualities, whereby they may be moved by Him sweetly and promptly to acquire eternal good; and thus the gift of grace is a quality.</p><div class="cr-cite">Summa Theologiae I-II, q. 110, a. 2, corpus. Dominican Fathers translation.</div></div>Aquinas argues from how God equips natures to how He equips His friends. What is the conclusion?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That grace is God's continual pushing, replacing any need for something in the soul.",
                "feedback": "You kept the first way and discarded the second, which the passage exists to add. God does move us act by act; AND He infuses an abiding quality, precisely because He equips His friends no worse than His creatures. A God who only pushed would have given fire a nature and His children none."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That the soul becomes divine by substance, no longer merely human.",
                "feedback": "The passage says quality, and the word is load-bearing: what is substantial in God becomes accidental in the soul that participates Him. The creature remains a creature; grace is above her nature without abolishing it. Divinization by substance is the pantheist exit, and Aquinas has bolted it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That natures and grace are the same gift under two names.",
                "feedback": "The passage runs on their difference: nature is the equipment for natural good, grace the equipment for supernatural good, and the argument moves from the one to the other precisely because they are not the same floor of the house. Conflate them and Pelagius, two lessons from now, will thank you for the loan."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That grace is a real infused quality, so that God's friends act sweetly and promptly toward eternal good.",
                "feedback": "Respondeo: the argument is an a fortiori from providence: God gives natural things forms and powers so their movements come naturally and easily; much more does He give those He moves toward Himself an abiding supernatural quality, so that eternal good is pursued sweetly and promptly, not by perpetual outside shove. Grace names first of all this gift IN the soul. The lesson's earlier point stands under it: His love causes what it loves."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t8-l1-q4`,
          type: "mcq",
          stem: `So grace is an infused quality, and faith, hope, and charity are infused virtues. A tidy learner proposes a merger: grace simply IS the three theological virtues, counted together. Aquinas declines. Why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because the virtues are many and grace is one, and one cannot be three.",
                "feedback": "Arithmetic is not the objection; a single habit could in principle wear three work-clothes. The refusal runs deeper: the virtues presuppose something they flow FROM. Count them however you like, they are branches, and branches are not the root."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Grace is the root from which the infused virtues flow, as nature's light grounds the acquired.",
                "feedback": "Respondeo: as the natural light of reason is something beneath the acquired virtues that serve it, so the light of grace, a participation of the Divine Nature, is something beneath the infused virtues that flow from it and are ordained to it. Grace makes the tree live; faith, hope, and charity are how the living tree acts. A disposition presupposed to the infused virtues, as their principle and root: his own words."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because the three virtues are acquired by acts, while grace alone is infused.",
                "feedback": "The three are infused too; that was this lesson's opening door. You have handed faith, hope, and charity back to the practice-ladder, and no hours climb to them. The difference between grace and the virtues is root against branches, not infused against acquired."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because grace belongs to the Church collectively, virtues to persons singly.",
                "feedback": "Both are lodged in persons; the soul of each of the baptized carries her own grace and her own charity. There is indeed a grace given for the sake of others, and Lesson 2 will name it, but sanctifying grace is not a group possession. The refusal you want is root-versus-branches."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t8-l1-q5`,
          type: "true_false_with_reason",
          stem: `True or false: <em>grace is, at bottom, God's attitude toward you: His decision to regard you favorably, with nothing thereby changed in you.</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. God's regard is almighty; it needs no deposited souvenir to be real.",
                "feedback": "Almighty is exactly the problem with your conclusion: an almighty regard is one that accomplishes something. Human favor leaves the favored unchanged; the divine favor cannot, because His love causes the good it loves. The souvenir, as you call it, is the soul's new life."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Whatever changes would be a creature, and no creature could unite us to God.",
                "feedback": "A serious argument with a long career, and the tradition answers it: the created gift does not replace the Giver, it is how the Giver dwells. The quality in the soul and the indwelling of God are not rivals; the light in the room does not compete with the sun. Refuse every created gift and you refuse the temple its lamp."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Grace implies something real in the soul: light in the enlightened, life in the enlivened.",
                "feedback": "Respondeo: light implies something in what is enlightened, and grace is the soul's light: Aquinas's own sed contra. When God befriends a soul, the soul is different afterward, really and interiorly, the way a dark room is different at noon. The attitude-only account will return wearing a Reformer's coat in Lesson 4; you have already met its refutation."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Because the change is in our behavior: grace means acting differently.",
                "feedback": "Right verdict, wrong depth: behavior is downstream. A baptized infant asleep behaves not at all and is in the state of grace entire, which the next lesson will use with some relish. The change is in what the soul IS before it is in what the soul does."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t8-l1-q6`,
          type: "mcq",
          stem: `One more precision before the taxonomy: WHERE does this quality live? The infused virtues perfect the soul's powers: faith the intellect, charity the will. Grace, says Aquinas, is planted deeper. Where, and why there?`,
          latin_tag: `gratia supra habitum`,
          doctrine_line: `Grace is something real in the soul: an infused quality, above nature, prior to the infused virtues as their root; not a change in God's attitude but a gift that changes what the soul is.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "In the essence of the soul itself: a new birth lands where life is, before its powers.",
                "feedback": "Respondeo: by grace we are born again sons of God, and generation terminates at the essence prior to the powers. As the soul's powers flow from its essence, so the infused virtues flow into the powers from grace seated in the essence: a participation of the Divine Nature at the root of what you are. The temple language the course has used before now has its ground floor: what makes the soul a dwelling is planted in the soul's own being."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In the will alone, since love is the whole of the law.",
                "feedback": "Then the intellect would be graced only by courtesy, and faith left renting. The will receives charity; grace itself is deeper than any single power, or it could not be the common root of virtues lodged in different powers. The law is fulfilled by love; the soul is reborn beneath it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In the body as well as the soul, since man is a composite.",
                "feedback": "The composite is real and the body will get its glory, but at the resurrection, as overflow. Grace's subject now is the soul in its essence; the body serves the graced soul and awaits its share. Do not hurry the flesh; its turn is the last chapter of the course."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nowhere: grace is a relation, not a resident.",
                "feedback": "The relation is real and rides on something: relations of friendship between God and man are grounded in the gift He causes in the friend. A resident-less relation is the attitude-theory again, one question after its funeral. Let it rest."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t8-l2`,
      num: `II`,
      title: `The Kinds of Help`,
      latin: `gratia sanctificans · gratia actualis`,
      tag: `gratia sanctificans · gratia actualis`,
      fin: {
        tag: `gratia sanctificans · gratia actualis`,
        heading: `The lamp and the current.`,
        body: `A lamp burns because something abides in it; a wire works because something moves through it. The soul in friendship with God has both: the abiding gift that makes her pleasing, adopted, and alive, and the passing motions by which God stirs her to each good act, from the first turn of the will to the last step of the deed. The course has been saying life of grace and state of grace for six modules on credit; the credit is now paid in the module's own coin: sanctifying and actual, habit and help, the lamp and the current.`,
        distinction: {
          latin: `gratia habitualis  ·  gratia actualis`,
          english: `habitual grace  ·  actual grace`,
          gloss: `The gift that abides, making the soul pleasing to God; and the motion that passes, moving her here and now to act.`,
        },
      },
      questions: [
        {
          id: `t8-l2-q1`,
          type: "mcq",
          stem: `Two electrical facts about one house: the lamp on the table burns all night because something abides in it, and the doorbell rings just once, because something moved through the wire just then. Divide the grace of God with that picture: which is which?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The lamp is heaven's reward; the current is grace, all of it.",
                "feedback": "That wires the whole house wrong: it makes every grace a passing jolt and postpones every abiding gift to the next life. But the habitual gift is now: the soul in grace is presently alive, presently pleasing, presently a temple. Glory is the lamp at full brightness, not the first time the lamp exists."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The lamp is sanctifying grace, the abiding state; the current is actual grace, the motion to act.",
                "feedback": "Respondeo: the two ways of q. 110 a. 2, now named. Sanctifying (habitual) grace abides: a quality seated in the soul's essence, making her holy and pleasing to God. Actual grace passes: the divine help moving mind and will to this act, here, now. One makes you His; the other moves you for Him. The course's borrowed phrases, state of grace and life of grace, were always drawing on the first."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The lamp is the sacraments; the current is private prayer.",
                "feedback": "Both sacraments and prayer are occasions of both kinds; the division you need is in the gift, not the delivery. A sacrament confers the abiding gift and God moves souls at kitchen sinks. Sort graces by what they are, then ask how they arrive; the second question belongs to another module."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The lamp is the Church's holiness; the current is the individual's share.",
                "feedback": "Collectivizing the lamp evicts it from the soul, where the last lesson so carefully installed it. Each soul in grace has her own abiding gift; the Church's holiness is the communion of many lamps from one Light, as an earlier module taught with its own image. Keep the lamp personal and the taxonomy will hold."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t8-l2-q2`,
          type: "distinction_application",
          stem: `The distinction, fixed: sanctifying grace abides (a habitual gift making the soul pleasing to God, no act required); actual grace moves (a divine help to know, will, or do, here and now). Now the case: a baptized infant, three weeks old, asleep in her crib, incapable of a single deliberate act. What does she have?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Neither yet: grace waits for the age of reason.",
                "feedback": "Then baptism gave her nothing, and the Church has been solemnly doing nothing to infants since the apostles. The gift that requires no act is exactly the gift an infant can carry. What waits for the age of reason is her cooperation, not her adoption."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Actual grace only: God moves in her dreams until she can hold a state.",
                "feedback": "Backwards at both ends: actual grace is precisely the help toward acts, of which she is performing none, while the abiding state is precisely what needs no act to be possessed. You have given her the current and unplugged the lamp. Reverse it and the crib makes sense."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Both in full operation: her sleep itself is cooperation.",
                "feedback": "A gallant promotion of napping, but cooperation is an act of the will and she has none yet to give. Grant her the state entire and wait on the motions; God will move her will when she has one to move. Precision here is kindness later, when someone tells her grace must be felt."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Sanctifying grace entire: asleep, actless, and wholly pleasing to God.",
                "feedback": "Respondeo: distinction applied at full strength, and notice what it kills: the reduction of grace to religious experience. She experiences nothing, performs nothing, earns nothing, and is a daughter of God in whom the Trinity dwells, because the habitual gift is a state of BEING, seated below the powers. Every adult in grace asleep tonight holds the gift the same way she does."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t8-l2-q3`,
          type: "mcq",
          stem: `Augustine, quoted by Aquinas as the rule for how the divine motion relates to our willing: <em>He operates that we may will; and when we will, He cooperates that we may perfect.</em> A man who willed evil for years finds his will, one morning, turned. Whose operation was the turning?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "God's alone: in the will's first turning, the will is moved and does not move.",
                "feedback": "Respondeo: operating grace, in Aquinas's precise sense: in that effect in which our mind is moved and does not move, but God is the sole mover, the operation is attributed to God. Once the will wills, God does not withdraw; He cooperates, strengthening within and providing without, and the act is truly also ours. Note what this does NOT settle: how the motion infallibly attains its effect while the will stays free is the next module's famous quarrel, and this course will not smuggle a verdict."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "His own: somewhere in him a residue of health finally asserted itself.",
                "feedback": "The residue theory has a name and a condemnation coming one lesson from now. A will that willed evil does not secrete its own cure; the first turn toward God is God's, or the Psalmist's Convert us, O Lord, was a decorative request. Save the man's own contribution for the second moment, where it truly lives."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Half and half: God supplied strength, the man supplied direction.",
                "feedback": "Splitting the first motion gives man the steering wheel and God the fuel, which is the subtler Pelagian vehicle. In the FIRST turning there is no prior good direction in the man to contribute; direction is what arrives. Cooperation is real and comes second: when we will, He cooperates."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The question is meaningless: two agents cannot share one act.",
                "feedback": "They can when one is the First Cause and the other His creature; the course settled that a first mover moving a free will as free is no contradiction. What would be meaningless is two rival movers on the same level, and God is on no level. The grammar holds; the mystery of its mechanics is T9's."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t8-l2-q4`,
          type: "match_pair",
          stem: `The taxonomy, assembled. Match each grace to its description.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "sanctifying (habitual) grace"
              },
              {
                "id": "L2",
                "text": "actual grace"
              },
              {
                "id": "L3",
                "text": "operating grace"
              },
              {
                "id": "L4",
                "text": "cooperating grace"
              },
              {
                "id": "L5",
                "text": "gratuitous graces (gratis datae)"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "the abiding gift: the soul made holy, pleasing, adopted"
              },
              {
                "id": "R2",
                "text": "the passing divine motion to know, will, or do"
              },
              {
                "id": "R3",
                "text": "God alone moving: the will's first turn to good"
              },
              {
                "id": "R4",
                "text": "God strengthening the will that now also moves itself"
              },
              {
                "id": "R5",
                "text": "gifts for others' sake: tongues, prophecy, healing"
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
              "all_correct": "Five graces correctly seated. The last pair deserves its footnote: the gratis datae (tongues, prophecy, healing, 1 Corinthians 12) sanctify nobody by themselves; they are given that one man may help lead another to God. Aquinas ranks them BELOW sanctifying grace, since the Apostle, having listed them all, shows a more excellent way and means charity. The prophet in mortal sin is a signpost pointing to a country he is not in.",
              "partial_correct": "Some graces misfiled. Sort by two questions: does it abide or pass? and is it for the bearer's holiness or the neighbor's benefit? The lamp, the current, the first turn, the strengthened walk, and the gifts-for-others fall into place."
            }
          },
        },
        {
          id: `t8-l2-q5`,
          type: "mcq",
          stem: `One more pair from the treatise: prevenient and subsequent grace. Aquinas lists five effects: the soul healed; the good willed; the good done; perseverance in good; glory attained. How many graces is that?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Five graces, in sequence, each earned by the one before.",
                "feedback": "Two errors for one: the count is wrong and the earning is fatal. If each effect earned the next, grace would be wages by the second step, and the whole treatise unravels. The effects are five; the grace is one, named by where it stands; and nothing earns its own principle."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Two: prevenient for beginners, subsequent for the advanced.",
                "feedback": "The pair does not sort persons into grades; it names one grace by its relation to effects. The same grace preceding an effect is prevenient toward it, and following another is subsequent to it. There is no beginners' brand; the saint at glory is carried by the grace that first healed her."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "One grace, called prevenient or subsequent by its place relative to each effect.",
                "feedback": "Respondeo: the same grace, viewed against the parade of its effects: prevenient inasmuch as it heals, subsequent inasmuch as, being healed, we are strengthened, in Augustine's phrasing. The division cuts effects, not essence. Keep this; it inoculates against the picture of grace as a series of separate injections, each a fresh negotiation."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "None strictly: these are metaphors for one divine attitude.",
                "feedback": "The attitude-theory again, third appearance, now wearing a taxonomist's coat. The effects are real, the gift causing them is real, and Lesson 1 buried the attitude account with honors. What is one here is the grace, not the metaphor."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t8-l2-q6`,
          type: "true_false_with_reason",
          stem: `A stylite question for the taxonomy's edge: true or false: <em>the wonder-working saint is, by that fact, the holier man; miracle-grace is the greater gift.</em>`,
          latin_tag: `gratia sanctificans · gratia actualis`,
          doctrine_line: `Sanctifying grace is the abiding habitual gift that makes the soul holy and pleasing to God; actual grace is the divine motion that moves it to know, will, and act; God operates that we may will, and cooperates when we will.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. God does not lend His power to men He does not prize above others.",
                "feedback": "Scripture is bleaker and better: many will say, Lord, did we not prophesy in Thy name? and He will profess He never knew them. The gratis datae certify the message, not the messenger. God has spoken through Balaam's donkey, who is not canonized."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The rarer gift is the higher gift; charity is common, miracles are few.",
                "feedback": "Rarity prices tulips, not graces. The scale of gifts runs by what they unite you to, not how many share them; and the commonest gift in the Church, charity, unites to God Himself. That is why the Apostle lists the spectacular gifts and then points past every one of them."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Because miracles ceased with the apostles; the question is empty.",
                "feedback": "Right verdict, false premise: the Church has never taught the cessation of miracles, and her canonization process cheerfully demands them to this day. The comparison is live, and the answer stands on ranking, not extinction: the gift that unites to God outranks the gift that merely advertises Him."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Miracles serve others' salvation; sanctifying grace unites the man himself to God.",
                "feedback": "Respondeo: the gratis datae are ordained to what is preparatory: by prophecy and miracles men are INDUCED toward the end; sanctifying grace joins a man to the end itself, and the end outranks every means. Hence Aquinas: sanctifying grace is nobler. The widow in the state of grace at a weekday Mass carries a greater gift than a wonder-worker out of it carries on his best day."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `t8-l3`,
      num: `III`,
      title: `You Cannot Start Yourself`,
      latin: `initium fidei`,
      tag: `initium fidei`,
      fin: {
        tag: `initium fidei`,
        heading: `Even the turning is a gift.`,
        body: `Pelagius gave man the whole road; his refiners kept only the first step, and the Church took even that. Whoever has his eyes turned away from the sun prepares to receive its light by turning toward it, and the turning, Aquinas says, is already the sun's doing. Free will remains: the grace that calls can be refused, and Trent anathematizes anyone who makes the soul a stone. But between a will that can refuse and a will that could begin lies the whole doctrine: you can slam the door; you cannot build the knock.`,
        distinction: {
          latin: `gratia praeveniens  ·  liberum arbitrium`,
          english: `prevenient grace  ·  free will`,
          gloss: `The call that arrives before all merit and every first step; and the freedom that can assent to it or refuse it, but never replace it.`,
        },
      },
      questions: [
        {
          id: `t8-l3-q1`,
          type: "mcq",
          stem: `A serious voice, British, around 400: "God gave you reason, free will, the commandments, and Christ's example. That equipment is grace enough; demanding some further inner rescue insults the Creator who equipped you. Sin is habit, not helplessness; try harder." State where the position breaks.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At the equipment list: it names every gift except the life the gifts were for.",
                "feedback": "Respondeo: Pelagius, condemned at Carthage in 418 and again at Ephesus in 431, and stated here at his strongest: a moralist's respect for nature, and no room for a supernatural end. Reason, will, law, and example equip a man for the good proportioned to his nature; sonship, indwelling, and the vision of God are not on that inventory and cannot be climbed to from it. And after Adam the climber is wounded besides. The insult to the Creator is imagining He aimed us no higher than our own legs could carry."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At its optimism about effort: trying harder is psychologically naive.",
                "feedback": "Psychology is not the ground the Church fought on; plenty of Pelagians were better ascetics than their opponents. Effort is commanded, not mocked. The break is metaphysical: no effort of nature reaches a supernatural end, and wounded nature cannot even muster all its own good. Aim the objection at the inventory, not the willpower."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At the word habit: sin is an offense, never a habit.",
                "feedback": "Sin is both, and the course's own module on habits explains exactly how vice deposits itself. Granting Pelagius his observation costs nothing; his error is not noticing that habit-breaking equipment exists, but pricing the destination within nature's budget. Keep the diagnosis, refuse the bill."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At the geography: no serious heresy ever came from Britain.",
                "feedback": "History declines the alibi; the isles have exported their share, and sanctity too. Positions fall by their content, not their passports, and this one falls at its inventory: every gift listed, the one needful gift missing. Answer the argument; leave the map alone."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t8-l3-q2`,
          type: "mcq",
          stem: `The refinement came from better men, monks of southern Gaul, and it is subtler: "Grace is necessary, certainly, for the whole journey. But the FIRST step, the initium fidei, the first flicker of desire and belief, is ours to contribute, so that grace answers those who reach first." Where does the Church's answer land?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nowhere: the refinement is orthodox, and only later rigorism condemned it.",
                "feedback": "The Second Council of Orange, 529, confirmed by Boniface II, is not later rigorism; it is the Church defining that the semi-Pelagian compromise fails. If the first reach is ours, grace is a response and God a rewarder of unaided beginnings, and the Apostle's what hast thou that thou hast not received loses its sting exactly where it was aimed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "On the works that follow faith: those alone need grace.",
                "feedback": "That inverts the actual definition, which guards the beginning most jealously of all. Orange II teaches that the very desire to be cleansed, the beginning of faith itself, comes through the Holy Ghost's infusion. Later works were never the battleground; the first flicker was."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "On the beginning itself: even the initium fidei is grace, defined at Orange II, 529.",
                "feedback": "Respondeo: the beginning of faith is itself God's gift: Orange II's teaching, here given by name and date and characterized from the standard record rather than quoted, a restraint the module owes you honestly. Aquinas hands you the picture: whoever turns his eyes toward the sun prepares to receive its light, and that they are turned to God can only spring from God's having turned them. The monks of Gaul were holy men refining Pelagius into something politer; the Church took the polite version too."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "On timing only: the first step is ours, but grace arrives so fast it seems first.",
                "feedback": "A photo-finish theory of salvation, and the definition is not about clocks. Even a simultaneous first reach, if it sprang from nature alone, would make grace a response to us at the root. The priority is causal, not chronological: the turning is the Turner's before it is the turned's."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t8-l3-q3`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>The Synod furthermore declares, that in adults, the beginning of the said Justification is to be derived from the prevenient grace of God, through Jesus Christ, that is to say, from His vocation, whereby, without any merits existing on their parts, they are called; that so they, who by sins were alienated from God, may be disposed through His quickening and assisting grace, to convert themselves to their own justification, by freely assenting to and co-operating with that said grace: in such sort that, while God touches the heart of man by the illumination of the Holy Ghost, neither is man himself utterly without doing anything while he receives that inspiration, forasmuch as he is also able to reject it; yet is he not able, by his own free will, without the grace of God, to move himself unto justice in His sight. Whence, when it is said in the sacred writings: Turn ye to me, and I will turn to you, we are admonished of our liberty; and when we answer; Convert us, O Lord, to thee, and we shall be converted, we confess that we are prevented by the grace of God.</p><div class="cr-cite">Council of Trent, Session 6, Chapter 5 (DS 1525). Waterworth translation.</div></div>The chapter holds two truths in one sentence-frame. Which pair?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That grace begins in baptism, and adults must wait for it there.",
                "feedback": "The chapter is describing what happens BEFORE the font: the call, the disposing, the free assent of adults on the way to justification. Baptism is the instrumental door, next lesson's business; this chapter guards the road to it. Read the frame again: called without merits, able to reject, unable to begin."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Prevenience and liberty: called before all merit, free to reject, unable to self-begin.",
                "feedback": "Respondeo: both truths, each with its own proof-text: Turn ye to me admonishes our liberty; Convert us, O Lord confesses His prevenience. Man is not a stone under grace (he freely assents, cooperates, can refuse), and not a self-starter either (without merits existing on their parts... not able to move himself unto justice). Two scriptures, two truths, one chapter: the Catholic both/and against the two one-legged theories this lesson has met."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Mercy and wrath: God calls some and hardens the rest.",
                "feedback": "Hardening is not in the passage, and Trent elsewhere anathematizes the claim that those not predestined are called only in name and moved to evil by divine power. This chapter's whole grammar is invitation: called, touched, illuminated, able to reject. You have imported another century's quarrel into a text built to prevent it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Faith and works: belief begins the journey, deeds complete it.",
                "feedback": "Close to the next chapter's territory, but not this text's cut. The pair here is not faith against works; it is God's initiative against man's liberty, held together without either eating the other. Get this frame right and the faith-and-works chapter reads itself."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t8-l3-q4`,
          type: "true_false_with_reason",
          stem: `The overcorrection, stated with Reformation vigor: true or false: <em>since man cannot begin his own conversion, he contributes nothing at all; under grace the soul is passive as a stone, and free will after Adam is a name without a reality.</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Anything the will contributed would steal glory from grace.",
                "feedback": "The zero-sum picture of glory is the engine of the error: as if God's causality and man's freedom competed for one steering wheel. The course broke that picture at the First Way and T9 will break it again professionally. A God who moves free wills AS FREE loses no glory when the moved will really wills."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Scripture says we were dead in sin, and the dead do not cooperate.",
                "feedback": "The metaphor is real and Trent uses its substance: alienated, unable to rise. But the same Scripture commands the dead man to turn, and Trent's chapter holds both: quickened BY grace, the quickened man freely assents. Press the corpse-image past the text and you lose the man God bothered to call."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The will begins the work and grace reinforces what it began.",
                "feedback": "Right verdict, and you have refuted Wittenberg with Gaul: the will-begins account is the semi-Pelagian thesis buried two questions ago. Between the stone and the self-starter runs the narrow orthodox road: grace begins, the freed will walks. Do not escape one ditch by the other."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Moved by grace, man freely assents and cooperates, and is able to reject.",
                "feedback": "Respondeo: Trent's own fence, both canons of it: anathema on the claim that the will, moved by God, in no wise cooperates, that it cannot refuse, that it behaves as something inanimate; anathema likewise on free will after Adam as a thing with only a name, a figment introduced by Satan. The will contributes nothing FIRST and contributes truly SECOND: freely assenting to and co-operating with that said grace. Attenuated, bent, by no means extinguished: the Council's anthropology in five words."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t8-l3-q5`,
          type: "mcq",
          stem: `Precision about the wound: what CAN corrupted nature still do, without grace? Aquinas is exact where partisans exaggerate: like a sick man who can make some movements but cannot rise to full health unaided, fallen man can...`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing but sin: every act of the unbaptized is an offense to God.",
                "feedback": "That thesis is on Trent's anathema list by name: whoever says all works before justification are truly sins, let him be anathema. The pagan who builds a house or keeps a promise does a real particular good. Blackening nature does not brighten grace; it slanders the Creator to flatter the Redeemer, who wants no such flattery."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Particular goods, truly: build, plant, keep faith with a friend; not the whole natural good, and nothing salvific.",
                "feedback": "Respondeo: Aquinas's sick man exactly: some movements of himself, full health only by medicine. Corrupt nature works real goods (to build dwellings, plant vineyards, and the like, his own homely list), cannot sustain even ALL its natural good, and can do nothing proportioned to eternal life. Three tiers, no exaggeration in any direction: the doctrine that respects both the ruin and the residue."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Everything natural, intact: the fall cost supernatural extras only.",
                "feedback": "The tidy two-story theory where the fall stripped the attic and left the house untouched. But the sick man limps in his own house: nature falls short even of nature's whole good, as anyone who has kept a resolution past February knows. The wound is real inside nature's own floor, or grace would heal nothing and only add."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Whatever it wills: the fall wounded desire but left ability whole.",
                "feedback": "Willing IS the wounded thing, most of all: Aquinas says nature is more corrupted in the desire for good than in the knowledge of truth. An ability whose steering is bent is not whole in any sense that matters on a road. The residue is real; do not promote it to health."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t8-l3-q6`,
          type: "mcq",
          stem: `Last precision, aimed forward: a man IN grace, habitually justified, lamp lit. Does he still need actual grace, or does the habit now run on its own?`,
          latin_tag: `initium fidei`,
          doctrine_line: `Without prevenient grace man cannot move himself to justice in God's sight, though he remains free to reject the grace that moves him; even the beginning of faith is God's gift, as the Church defined against Pelagius and his refiners.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Runs on its own: that is what habitual means, or the gift was defective.",
                "feedback": "By that logic the healthiest eye should see at midnight. The habit is not defective for needing the motion; finite gifts operate under the First Mover as everything finite does, and the supernatural habit is no exception. Self-sufficiency was never on offer to any creature at any altitude."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Needs it for extraordinary acts only; the daily walk is habit's own business.",
                "feedback": "The daily walk is exactly where Aquinas locates the need: to be moved by God to act righteously at all, and to be guarded amid the flesh, the world, and the devil. Reserve the current for emergencies and the lamp gutters on an ordinary Tuesday. No act, ordinary or heroic, escapes the First Mover."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Needs it only if his grace is still young; mature sanctity graduates.",
                "feedback": "The saints report the opposite curve: the holier the soul, the louder its confession of dependence. Nobody graduates from being a creature. What grows with sanctity is docility to the motion, not distance from it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Still needs it: the healthiest eye sees nothing without light.",
                "feedback": "Respondeo: Augustine's image, kept by Aquinas: as the most healthy eye cannot see unless helped by brightness, the most righteous man does not live righteously unless helped by the eternal light. The habitual gift heals and elevates; the divine motion still moves each act, and T9's whole vocabulary of auxilium, the divine help to act, names precisely this. Note also what the man in grace now needs it FOR, looking one lesson ahead: standing tomorrow is not contained in standing today."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `t8-l4`,
      num: `IV`,
      title: `Made Just, Not Declared Just`,
      latin: `iustificatio`,
      tag: `iustificatio`,
      fin: {
        tag: `iustificatio`,
        heading: `The courtroom or the hospital.`,
        body: `One picture: a courtroom, where the guilty man is declared acquitted while remaining inwardly what he was, another's justice thrown over him like a coat. The other: a hospital, where the dying man is healed, so that what the physician declares is true because the physician made it true. Trent chose with all the precision committee prose allows: not remission of sins merely, but sanctification and renewal of the inward man; not only reputed, but truly called, and are, just. God's verdicts are not legal fictions; when He says just, He has made it so. And the justice He infuses is inherent in us while remaining entirely from Him: the whole quarrel of a century, resolved in one preposition.`,
        distinction: {
          latin: `iustitia inhaerens  ·  iustitia imputata`,
          english: `inherent justice  ·  imputed justice`,
          gloss: `The justice God pours in, truly the soul's own because truly His gift; against a justice only reckoned to the account of a man left unchanged.`,
        },
      },
      questions: [
        {
          id: `t8-l4-q1`,
          type: "mcq",
          stem: `Wittenberg's picture, stated at strength: "Justification is God's courtroom verdict: for Christ's sake the sinner is DECLARED righteous, Christ's justice imputed to his account, while in himself he remains at once just and sinner. To claim an interior transformation is to make salvation rest on the patient instead of the Physician." Trent's counter-picture is the hospital. What is the actual difference?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Optimism: Trent thinks better of human nature than Wittenberg does.",
                "feedback": "Trent's first chapter is as bleak about unaided nature as any Reformer: servants of sin, under the power of the devil. The quarrel is not over the diagnosis but over what the Physician does about it. Read both pictures again: the difference is in the cure, not the chart."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Whether God's declaration changes the man: acquitted and unchanged, or healed so the verdict is true.",
                "feedback": "Respondeo: the whole century in one hinge. Trent: justification is not remission of sins merely, but also the sanctification and renewal of the inward man, so that we are not only reputed, but truly called, and ARE, just. God's word does what it says; He does not call clean what He leaves dirty. Canon 11 (DS 1561) closes the imputation-only and remission-only exits by name. The Physician's honor is precisely that His patients live."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Vocabulary only: courtroom and hospital are two metaphors for one doctrine.",
                "feedback": "Then Trent anathematized a synonym and Wittenberg died for a thesaurus entry. The metaphors cash out opposite claims about what exists in the justified man: nothing new, says the coat of imputed justice; a new creature, says the infused gift. Men do not burn each other over interchangeable figures of speech; the difference is real, and it is in the soul."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Speed: the courtroom is instant, the hospital gradual.",
                "feedback": "Both accounts have an instant: Trent's justification arrives whole in a moment, the preparation being long but the gift entire when given. Growth comes after, as the next lesson's increase; the moment itself is not the quarrel. What divides the pictures is whether the moment CHANGES the man, not how long it takes."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t8-l4-q2`,
          type: "precision_check",
          stem: `A claim to test with full equipment: <em>"In justification God declares the sinner righteous while he remains inwardly unchanged."</em> Where exactly does it break?`,
          payload: {
            "statement": "In justification God declares the sinner righteous while he remains inwardly unchanged.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At remains inwardly unchanged: the formal cause is a justice God makes inherent in us.",
                "feedback": "Respondeo: cut found. Trent: the alone formal cause is the justice of God, not that whereby He Himself is just, but that whereby He maketh us just... receiving justice within us. A formal cause, as the course has known since its fourth module, is what makes a thing to BE what it is called: the whiteness in the white wall, the justice in the just man. Declared-yet-unchanged deletes the form while keeping the adjective, and adjectives without forms are the precise definition of a fiction."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At God declares: God does not declare; He only acts.",
                "feedback": "He declares constantly; Scripture is a record of His declarations. The point is that His declarations are effective: He says light and there is light, He says just and there is justice. Keep the declaring; correct what the declaring does."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At the sinner: God justifies only those already improving.",
                "feedback": "Backwards, and Trent's own chapter forbids it: the beginning is from prevenient grace, without any merits existing on their parts. God justifies the ungodly, not the promising. The scandal of gratuity stands; the fiction of non-renewal falls. Do not repair the wrong clause."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At righteous: only Christ is righteous, so the word cannot apply to men.",
                "feedback": "It applies because He applies it: the justice called ours, says Trent, is ours because inherent in us, and God's because infused by Him through Christ's merit. Reserving the word for Christ alone re-erects the coat-theory with pious lumber. The gift is really given; the word really lands."
              }
            ],
            "correct_option_id": "a",
            "correction": "Justification is remission of sins AND the sanctification and renewal of the inward man: God's declaration effects what it declares, by the infused justice which is its formal cause. The justified man is truly changed: not only reputed, but truly called, and is, just."
          },
        },
        {
          id: `t8-l4-q3`,
          type: "mcq",
          stem: `Trent, teaching the causes of justification, reaches for a toolbox this course gave you ten modules ago: a final cause (the glory of God and eternal life), an efficient cause (the merciful God who washes gratuitously), a meritorious cause (Christ in His Passion), an instrumental cause (baptism, the sacrament of faith), and one formal cause. Why does the Council insist the formal cause is ONE: the justice God infuses?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "If anything else formally made us just, we would be just by something other than the gift.",
                "feedback": "Respondeo: the ALONE formal cause, says the decree, and the adjective is a fence: not Christ's own personal justice imputed from without (canon 10 refuses that formalism), not our works, not the Church's regard, but the justice of God whereby He maketh us just, received within us, each according to his measure. The four-causes grammar you learned on bronze and sculptors now performs the most consequential analysis the course has asked of it. That is what the toolbox was for."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because councils prefer simple schemes for teaching purposes.",
                "feedback": "This council multiplied causes cheerfully, five of them in one sentence; simplicity was not the drafting instinct. The singular is doctrinal: one formal cause, because what makes the man just must be IN the man, and there is exactly one such gift. Pedagogy explains the list; the fence explains the ALONE."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because baptism had to be demoted from a formal to an instrumental role.",
                "feedback": "Baptism was never a candidate for form; an instrument is its proper dignity and a high one, the sacrament of faith through which the gift arrives. The chapter's own assignment stands, and the machinery of HOW instruments confer grace is a later module's inheritance, not this question's. The ALONE guards the form, not the font."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because the other four causes are figures of speech, and only the formal is literal.",
                "feedback": "All five are literal; the merciful God really effects, Christ's Passion really merits, baptism really instruments, glory really finalizes. The course's causal grammar does not grade causes into real and decorative. The ALONE marks uniqueness in one slot, not unreality in the others."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t8-l4-q4`,
          type: "true_false_with_reason",
          stem: `Judge the claim, which built a movement: <em>"man is justified by faith alone, in such wise that nothing else is required to cooperate."</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Trent itself calls faith the beginning, foundation, and root of all justification.",
                "feedback": "You have quoted the Council's honor-guard for faith and missed its fence: the same decree anathematizes by faith ALONE... in such wise as to mean that nothing else is required (canon 9). Beginning, foundation, root: three words that presuppose a building and a tree. Faith alone, unless hope and charity be added, neither unites man perfectly with Christ nor makes him a living member: dead faith is real faith and saves no one."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Otherwise justification rests on works, and grace is no more grace.",
                "feedback": "The gratuity you are guarding, Trent guards in the same chapter: nothing preceding justification, WHETHER FAITH OR WORKS, merits the grace itself. Note the sting: Trent lists faith among the non-meriting things, which is more radical about gratuity than the slogan is. Grace is protected by the giftedness of the whole, not by the loneliness of faith."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Faith is the root of justification, and hope and charity are infused with it, disposition cooperating.",
                "feedback": "Respondeo: canon 9 (DS 1559) against the slogan, chapter 8 (DS 1532) giving faith its true crown: the beginning of human salvation, the foundation and root of all justification. In the gift itself, faith, hope, and charity are infused TOGETHER; in the approach, the freely assenting will cooperates. The Catholic answer honors what the Reformers meant to protect, gratuity, and declines what the slogan actually asserts, solitude."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Faith contributes nothing; only charity justifies.",
                "feedback": "Right verdict, decapitated doctrine: without faith it is impossible to please God, and Trent calls it the root of the whole affair. Exiling faith to spite a slogan is the overcorrection's overcorrection. Root and branches, faith and charity, together in one infusion: the both/and holds here as everywhere."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t8-l4-q5`,
          type: "mcq",
          stem: `In the moment of justification, according to Trent, what arrives in the soul?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Faith first; hope and charity follow later as the man matures.",
                "feedback": "The installment plan is not the decree's: man receives, IN the said justification, TOGETHER with the remission of sins, all these infused AT ONCE, faith, hope, and charity. Growth comes after; the trio arrives whole. A justification that delivered faith alone would be canon 9 wearing a delivery-schedule."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Remission of sins only; the virtues are earned by practice afterward.",
                "feedback": "Both halves fail: remission-only is anathematized in canon 11, and the theological virtues are never earned by practice, as the pianist's ceiling taught in this module's first breath. What practice builds later is facility and the acquired virtues; the infused three are in the gift itself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A new public status, with interior gifts reserved for the saints.",
                "feedback": "The two-tier theory, laity on status and saints on substance, has no footing in the decree: every justified soul receives the renewal, each one according to his own measure, as the Holy Ghost distributes. Sanctity differs in degree; the gift is one kind. There is no economy class in justification."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Remission of sins and, at once, infused faith, hope, and charity: the inward man renewed.",
                "feedback": "Respondeo: the decree's own inventory: remission, and all these infused at once, faith, hope, and charity, the sanctification and renewal of the inward man. The lamp is lit and the three flames are its burning. This is why the course could show you the infused three back in the module on habits and promise their source later: the source is this moment."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t8-l4-q6`,
          type: "mcq",
          stem: `The pastoral edge of the doctrine: a devout Reformed friend says, "I KNOW I am justified, with the certainty of faith itself; to doubt it would insult the promise." Trent, chapter 9, weighs exactly this. What does it conclude?`,
          latin_tag: `iustificatio`,
          doctrine_line: `Justification is not the remission of sins only, but the sanctification and renewal of the inward man: by the one formal cause, the justice of God whereby He makes us just, we are not merely reputed but truly are just, faith, hope, and charity infused together.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "No one can know with certainty of faith that he has obtained grace; confidence, not certitude.",
                "feedback": "Respondeo: seeing that no one can know with a certainty of faith, which cannot be subject to error, that he has obtained the grace of God: the chapter's own words, with canons 13 and 14 fencing it. The reason is humble and empirical: certainty of faith attaches to what God has revealed, and God has not revealed to your friend the state of his own soul. Trust in God's mercy: unshakable. An article of faith about MYSELF: not on offer. The difference matters enough that a later lesson stakes a conversation on it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That such certainty is available, but only to the baptized in the state of grace.",
                "feedback": "That grants the thing while gating it, and the chapter grants it to no one without special revelation. The man IN grace is precisely the one who, regarding his own weakness, may have fear and apprehension touching his own grace. The gate you built has nobody inside it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That the claim is harmless piety, best left uncorrected.",
                "feedback": "Trent judged it neither harmless nor piety: a vain confidence alien from all godliness is the decree's phrase for the boast, and two canons carry anathemas. The harm is real: a certainty no one can have becomes either presumption when believed or despair when it cracks. The Council corrected it because souls were breaking on it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That the doubt itself is the sin: whoever questions his state has lost it.",
                "feedback": "Inverted: Trent DEFENDS the questioner. It is the claim that everyone must believe himself certainly absolved that the Council rejects; wholesome fear and apprehension about oneself coexist with firm hope in God. The examined life is not apostasy; it is the decree's own recommendation."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t8-l5`,
      num: `V`,
      title: `Merit Without Presumption`,
      latin: `meritum`,
      tag: `meritum`,
      fin: {
        tag: `meritum`,
        heading: `The drawing on the Father's wall.`,
        body: `A child draws a picture and the father frames it. The paper was his, the crayons were his, the kitchen table and the child were his, and the drawing is truly hers: both facts stand at full strength, and the framing is neither wage nor fiction but the justice of a house built on gift. Aquinas uses the same family: the child merits from the father, not as an equal in a marketplace, but within an ordination of love. So with merit before God: unmeritable at its root, real in its fruit, and crowned at the end by the Father who will have the things which are His own gifts be their merits.`,
        distinction: {
          latin: `meritum de condigno  ·  meritum de congruo`,
          english: `condign merit  ·  congruous merit`,
          gloss: `The claim grace's dignity grounds in justice; and the fittingness by which God honors a friend's good use of His gifts.`,
        },
      },
      questions: [
        {
          id: `t8-l5-q1`,
          type: "mcq",
          stem: `Begin with the scandalized objection: "Merit before GOD? Between infinite and finite there is no common measure; He owes nothing, gains nothing, and has given whatever we would pay Him with. The very word is presumption." Aquinas grants every premise. How does merit survive?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It does not survive; the pious speak of merit only loosely.",
                "feedback": "Trent speaks of it strictly and attaches an anathema to its denial: the justified truly merit increase of grace and eternal life. A word the Church fences with canons is not a loose word. The objection's premises are granted; its conclusion is refused; the trick is in the frame, and the correct option names it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Within God's own ordination: He rewards, as a father does, what He gave the power to do.",
                "feedback": "Respondeo: man's merit with God only exists on the presupposition of the Divine ordination: He ordained that His gifts, freely used, should attain what He appointed for them, as the child merits something from his father, Aquinas's own domestic image. Justice between unequals is real but relative: no marketplace, a household. God becomes no man's debtor simply, but His own: it is right that His will should be carried out. The word survives because the house is His."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "By Christ's merit replacing ours, so that only He ever merits.",
                "feedback": "His merit is the fountain and does not abolish the stream: Christ's virtue continually infused into the justified, as the head into the members, is exactly WHY their works can be meritorious, says Trent. Only-Christ-merits sounds humble and unchurches the whole vocabulary of crowns. The Head merits that the members may."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "By lowering the prize: we merit temporal helps, never heaven itself.",
                "feedback": "Trent's canon says eternal life and its attainment, in so many words, for those who die in grace. Discounting the prize to save the arithmetic is the one move the decree forecloses. Keep the full prize and fix the frame: the arithmetic was never between equals."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t8-l5-q2`,
          type: "mcq",
          stem: `The root question, and the taxonomy's sharpest tooth: can anyone merit the FIRST grace, the one that begins everything, for himself?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes, congruously: doing one's natural best fittingly draws the gift.",
                "feedback": "The politest form of the old Gaulish refinement, and it fails at the same joint: before grace, a man in sin has an obstacle, and nature's best is not proportioned to a supernatural gift at all. Whatever moved him toward his best was already the gift arriving. Facienti quod in se est was never a contract."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, condignly, if the works are heroic enough.",
                "feedback": "Heroism raises the price without changing the currency: acts of nature, however splendid, purchase in nature's coin, and the first grace is not sold in it. Besides which the treatise's principle stands across every case: the principle of merit does not fall under the merit it grounds. Nothing buys its own beginning."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No one but the baptized, whose baptism was the merit.",
                "feedback": "Baptism is the instrument of the gift, not the wage of it; the infant at the font has merited exactly nothing, which is the glory of the scene. You have relocated the purchase, not refused it. The first grace has no purchaser at any font."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No: grace is the principle of all merit; reward is a work's term, never its start.",
                "feedback": "Respondeo: no one can merit the first grace, and Aquinas gives the structural reason: grace is the principle of every good work, and what is the principle cannot be the wage; reward is the term of the work, but grace is the principle of all our good works. If by grace, it is not now by works. The whole economy hangs from an unbought first link, which is why it is an economy of adoption and not of employment."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t8-l5-q3`,
          type: "fill_blank",
          stem: `Trent, Session 6, Chapter 16: the sentence this lesson was named for. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">"Life eternal is to be proposed to those working well unto the end, and hoping in God, both as a <span class="fb-blank" data-blank="b1">______</span> mercifully promised to the sons of God through Jesus Christ, and as a <span class="fb-blank" data-blank="b2">______</span> which is according to the promise of God Himself, to be faithfully rendered to their good works and merits... whose bounty towards all men is so great, that He will have the things which are His own <span class="fb-blank" data-blank="b3">______</span> be their <span class="fb-blank" data-blank="b4">______</span>."</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "grace"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "reward"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "gifts"
                ],
                "case_sensitive": false
              },
              {
                "id": "b4",
                "correct_answers": [
                  "merits"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "grace",
              "wage",
              "reward",
              "debt",
              "gifts",
              "works",
              "merits",
              "dues"
            ],
            "feedback": {
              "all_correct": "Locked, and read the architecture: eternal life is BOTH grace AND reward, with no embarrassment between the two, because the reward crowns what the grace planted: His own gifts be their merits. Augustine said it first (when God crowns our merits, He crowns His own gifts), and Trent set it in conciliar stone (ch. 16, DS 1545-1550). Every Protestant worry about boasting and every Pelagian dream of wages dies in this one sentence, which is why the module made you memorize it.",
              "partial_correct": "Some blanks resisted. The sentence balances two pairs: grace-and-reward for what eternal life is, gifts-and-merits for what our works are. Keep both pairs and the doctrine assembles itself: what He crowns in us is what He first gave us."
            }
          },
        },
        {
          id: `t8-l5-q4`,
          type: "true_false_with_reason",
          stem: `Judge, with the taxonomy in hand: <em>the man in the state of grace, working well by charity, truly merits eternal life condignly: in justice, not merely by courtesy.</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The work proceeds from the Holy Ghost's motion and the dignity of adoption; heirs have rights.",
                "feedback": "Respondeo: TRUE, and the grounds are everything: considered as from free will alone there is no condignity, but as it proceeds from the grace of the Holy Ghost moving us to life everlasting, the work merits condignly: the value flows from the Spirit's motion, the worth from the dignity of grace whereby a man, made partaker of the Divine Nature, is adopted a son, to whom the inheritance is due by right of adoption: if sons, heirs also. Canon 32 anathematizes the denial. Grace at present is glory in seed, says Aquinas: the whole tree in the acorn. Justice, in a house where justice itself was the gift."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Because good works are simply valuable, and value obliges whoever receives it.",
                "feedback": "Right verdict, marketplace engine: value obliging the receiver is commerce, and God receives nothing He lacked. The condignity runs through what the works proceed FROM, the Spirit and adoption, not what they deliver TO God. Keep the verdict; trade the engine."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Between God and man there is only mercy; justice-language is Pelagian residue.",
                "feedback": "The residue is conciliar: a crown of justice which the Lord, THE JUST JUDGE, will render, quoted by Aquinas from the Apostle, and Trent's reward faithfully rendered. Mercy founds the order; justice operates within it, because God ordained it so. Calling the Church's canon Pelagian is a bold career move; decline it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Merit is always congruous at best; condign belongs to Christ alone.",
                "feedback": "Christ alone merits condignly FOR OTHERS their first grace; the justified merit condignly their own increase and crown. The distinction you flattened is load-bearing: His condignity is the Head's, ours the members', derived and real. Reserve for Christ what is His, the fountain, without draining the streams."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t8-l5-q5`,
          type: "mcq",
          stem: `A widowed mother has prayed thirty years for her son, who left the faith at nineteen. Can she merit his conversion?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "No: merit is strictly personal, and her prayers are pious but idle.",
                "feedback": "Idle is refuted by the entire history of the saints, and strictly personal by Aquinas himself, who carves the exact channel her thirty years run in. What she cannot do is oblige in justice; what she can do is everything else. The correct option names the channel and its most famous traveler."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, condignly: thirty years of charity establish a claim in justice.",
                "feedback": "No one can merit condignly for another his first grace, save Christ alone: each man is moved by God for himself, and condign merit does not reach beyond that motion; only the Head's reaches the members. Her decades are not a ledger against heaven. They are something better, which justice-language cannot hold."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes, congruously: it is fitting to friendship that God fulfill a friend's desire for another's salvation.",
                "feedback": "Respondeo: congruous merit, in Aquinas's own frame: a man in grace fulfils God's will, and it is congruous and in harmony with friendship that God should fulfil man's desire for the salvation of another, though sometimes there is an impediment on the other side. And prayer runs on a second channel besides: impetration rests on mercy, where merit rests on justice, so she may obtain far more than she could ever merit. Monica wept for Augustine on both channels for seventeen years; ask the son what came of it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The question is closed: his freedom makes her prayers powerless by definition.",
                "feedback": "His freedom is the impediment-clause Aquinas honestly names, not a fortress grace cannot enter; every conversion in history happened to someone free. Prayer does not pick locks; it petitions the One who moves wills as wills. Powerless-by-definition would have left Augustine in Carthage."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t8-l5-q6`,
          type: "distinction_application",
          stem: `The pair, fixed: condign merit rests on justice within God's ordination (the work proceeding from grace and adoption); congruous merit rests on fittingness and friendship. Now sort the hard case: a man long in the state of grace does a hidden work of charity. Toward WHICH goods does that one work reach, and how?`,
          latin_tag: `meritum`,
          doctrine_line: `The justified truly merit increase of grace and eternal life, condignly, because their works proceed from the Holy Ghost's motion and the dignity of adoption; the first grace no one merits; and God's bounty is so great that He will have His own gifts be their merits.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Condignly toward his own increase of grace and eternal life; congruously, at most, toward another's good.",
                "feedback": "Respondeo: the mapping entire. His own increase and crown: condign, by the dignity of what the work proceeds from (and Trent's canon 24: works are not merely fruits and signs but a cause of increase). Another's first grace: congruous only, the friendship-channel. His own future perseverance: neither, as the next lesson will insist with some solemnity. One act, three reaches, two of them real and one of them reserved to God's free keeping: the taxonomy earning its precision."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Condignly toward everything at once: his crown, his mother's health, his own final perseverance.",
                "feedback": "Two of your three items just broke the instrument. Temporal goods fall under merit only so far as they serve salvation, and final perseverance falls under merit not at all, resting solely on the divine motion. Condignity is a scalpel, not a shotgun; it cuts exactly where adoption's justice runs, at his own increase and crown."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Congruously toward his own eternal life: friendship is the highest frame there is.",
                "feedback": "Generous, and it under-sells the decree: for his OWN eternal life the justified man's grace-borne work merits condignly, in the relative justice of the household, and canon 32 guards the strong word. Friendship is the frame of the OTHER-directed channel. You have filed the crown one drawer too soft."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It depends on whether the work is seen and praised; hidden works reach lower.",
                "feedback": "Exactly backwards by Gospel arithmetic: thy Father who seeth in secret will repay thee. Visibility adds spectators, not value; the value flows from charity and the Spirit's motion, which hide well. The taxonomy never asks for an audience."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t8-l6`,
      num: `VI`,
      title: `Perseverance`,
      latin: `donum perseverantiae`,
      tag: `donum perseverantiae`,
      fin: {
        tag: `donum perseverantiae`,
        heading: `The gift that cannot be banked.`,
        body: `Everything else in the treasury, the justified man may grow: grace increases, charity deepens, merit accumulates toward the crown. One thing cannot be banked: tomorrow's standing. Perseverance to the end is a special gift, resting solely on the motion of God, unmeritable by any work and yet promised to humble asking, which is why the Church has always prayed for it rather than presumed it. Between the man who is sure he cannot fall and the man who is sure he will, the doctrine walks its narrow both/and: fear and trembling in the working, a most firm hope in the One who began the good work and is able to perfect it.`,
        distinction: {
          latin: `praesumptio  ·  desperatio`,
          english: `presumption  ·  despair`,
          gloss: `The twin thefts: one steals certainty God has not given, the other refuses the hope He has commanded.`,
        },
      },
      questions: [
        {
          id: `t8-l6-q1`,
          type: "mcq",
          stem: `The justified man has the abiding gift, the infused three, and a growing account of merit. Trent adds, gravely, that as regards THE GIFT OF PERSEVERANCE he must look nowhere but up: it cannot be derived from any other but Him who is able to establish him who standeth. Why is remaining standing a SPECIAL gift, beyond the state of grace itself?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because grace is given in installments, and next year's was never included.",
                "feedback": "The installment picture broke in Lesson 2: one grace, many effects. What is special about perseverance is not a missing shipment but a different kind of thing: the meeting of a mutable will with every future hour, which no present habit contains. The lamp is whole; the question is every tomorrow's wind."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The habit does not fix the will; standing through every tomorrow rests on God's continued motion.",
                "feedback": "Respondeo: free will remains flexible toward good and evil in this life, says Aquinas; only glory fixes it. So the state of grace, whole and real today, does not contain tomorrow's assent the way a habit contains its facility; the healthy eye still needs light, and needs it again at every dawn. Perseverance names the divine motion meeting the soul across time unto the end, and that continuance is God's free and special gift, not the habit's momentum."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because most graces are earned, and this one alone is free.",
                "feedback": "The module has spent five lessons establishing that no grace is earned at its root; gratuity is the genus, not this gift's specialty. What sets perseverance apart is that it cannot even be merited by the graced, as the increase and the crown can. Special means beyond merit's reach, not uniquely gratis."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because it is reserved for the greatest saints, a decoration of heroic souls.",
                "feedback": "Every soul that dies in grace received it, including the quiet millions no one canonized; it is the ordinary ending of ordinary sanctity, and the thief on the cross got it in an afternoon. Special names its source and its unpurchasability, not an elite clientele."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t8-l6-q2`,
          type: "true_false_with_reason",
          stem: `Geneva's confident thesis, stated at strength: true or false: <em>the truly justified cannot finally be lost; if a man falls away and stays fallen, that only proves he was never truly justified at all.</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. God finishes what He starts; a reversible justification insults His power.",
                "feedback": "His power is not the question; His economy is. He wills to preserve free creatures AS free, and Trent teaches that God forsakes not those He justified UNLESS first forsaken by them. The falling is the man's own; the standing was the gift. Irreversibility belongs to glory, where the will is fixed in the vision; on the road, the road can still be left."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Scripture says no one shall snatch them out of My hand.",
                "feedback": "No one shall snatch; the hand does not imprison. The verse guards against every thief except the sheep's own free refusal, which is exactly the one Trent legislates for: grace is lost by any mortal sin, not only by infidelity. Exegesis that turns a promise of protection into a padlock has left both the text and the sinner's real history."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Because no one is ever truly justified in this life; only the dead are safe to call just.",
                "feedback": "Right verdict, and you have paid for it with the whole fourth lesson: men ARE truly just now, inherently, by the infused gift. The correction of Geneva's padlock is not a lockout. Grace is real and losable; both, or the story has no stakes and penance no meaning."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Grace truly received is truly lost by any mortal sin, and truly recovered through penance.",
                "feedback": "Respondeo: Trent, chapter 15 and canon 23: the received grace of justification is lost not only by infidelity but by any mortal sin whatever, though faith may remain; and chapter 14: the fallen may be AGAIN justified, through the sacrament of penance, the second plank after shipwreck. David fell from real grace and returned to real grace; the retroactive-fake theory would have to unwrite his psalm. Real gift, real loss, real recovery: the doctrine takes the drama of a soul seriously at every act."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t8-l6-q3`,
          type: "precision_check",
          stem: `A claim to test at the doctrine's pastoral edge: <em>"Since no one can be absolutely certain of persevering, the Christian life is lived under a low ceiling of anxious dread."</em> Where exactly does it break?`,
          payload: {
            "statement": "Since no one can be absolutely certain of persevering, the Christian life is lived under a low ceiling of anxious dread.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At no one can be certain: the saints achieved certainty, and we may too.",
                "feedback": "Trent's canon 16 stands over every rank: no absolute and infallible certainty short of special revelation, saints included; Paul himself chastised his body lest he become a castaway. The premise you attacked is the one part of the claim that holds. The break is downstream, in the alleged ceiling."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At anxious dread: certainty is withheld, but a most firm hope is commanded.",
                "feedback": "Respondeo: cut found. Trent's own sentence carries both clauses: let no one promise himself anything as certain with an absolute certainty, THOUGH ALL OUGHT TO PLACE AND REPOSE A MOST FIRM HOPE IN GOD'S HELP. Hope is not a thinner certainty; it is a different virtue with a different object: not my performance, His fidelity. The man without the padlock is not therefore out in the weather; he is held by a Person instead of a receipt, which is better held. Dread and presumption are the two ways of refusing that grip."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At absolutely: ordinary certainty is available, just not the mathematical kind.",
                "feedback": "The qualifier is Trent's own and does real work, but moral confidence about one's present state is not the claim's target; the FUTURE standing is, and about that no grade of certainty is promised to anyone. Splitting hairs on the adverb leaves the dread-conclusion untouched, and the dread is the error."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At the Christian life: perseverance-doubt concerns only the scrupulous few.",
                "feedback": "It concerns everyone with a future, which is the whole membership. The doctrine is not a pathology of the scrupulous but the sober condition of wayfarers as such. The claim's error is not its scope; it is the conclusion that withheld certainty means installed dread."
              }
            ],
            "correct_option_id": "b",
            "correction": "Certainty of final perseverance is withheld (Trent ch. 13, can. 16); anxious dread is not thereby installed, because a most firm hope in God's help is commanded in the same breath. Fear and trembling season the working; they do not govern the house."
          },
        },
        {
          id: `t8-l6-q4`,
          type: "dialogue_branch",
          stem: `Lunch break, and your coworker means it kindly and entirely: "Can I ask you something? If you died tonight, do you KNOW you'd go to heaven? Because I settled that years ago: saved, sealed, certain. It sounds like your church keeps you guessing your whole life. How do you live like that?" He is not scoring points; he wants to know how you carry it. What do you say?`,
          payload: {
            "branches": [
              {
                "text": "\"Honestly, deep down I have the same certainty you do. The theology's complicated, but in my heart I know I'm in.\"",
                "feedback": "Kind, and it hands over the store: the certainty he describes is exactly what Trent says no one has, and your heart is not an exempt jurisdiction. Worse, it leaves him thinking the difference between you is mood. He asked how a Catholic carries the question; he deserved the actual answer, which is stronger than the borrowed one."
              },
              {
                "text": "\"I don't have a certificate about tomorrow, and I don't need one: I know Whom I have believed. My confidence is in Him, firm as anything I own; the watchfulness is for me. Hope plus vigilance; it is a good way to live.\"",
                "feedback": "Respondeo: the whole doctrine at a lunch table, and warmly: certainty of MY future state, not on offer to anyone (and his own Paul worked out salvation with fear and trembling, chastising his body lest he be castaway); a most firm hope in God's fidelity, absolutely on offer and absolutely held. You honored what he protects, assurance resting on God not works, and returned it to its true object: a Person, not a policy. He may keep his framework this afternoon, but he has met a Catholic who is not guessing.",
                "verdict": "correct"
              },
              {
                "text": "\"Trent, Session 6, canon 16: your certainty is anathematized. You'd know that if your church read councils.\"",
                "feedback": "The citation is exact and the lunch is over. The canon guards the Church's confession; it is not a condiment. You have answered a sincere question about how you live with a document about why he is wrong, and taught him only that Catholics keep their doctrine in a holster. State the hope; save the anathema for the seminar."
              },
              {
                "text": "\"You can't know, and neither can I. Nobody can know anything about it; I just try my best and brace for the odds.\"",
                "feedback": "You have corrected his presumption with your despair, which is trading one theft for the other: his stole a certainty God has not given, yours refuses the hope God has commanded. Bracing for the odds is not a theological virtue. The narrow road runs between you: no padlock, and no weather either; a most firm hope, held by its proper object."
              }
            ],
            "commentatorLine": "The Commentator stirs his coffee, unhurried. 'He has asked you the tenderest question in the treatise, and he has asked it happy. Do not take his assurance from him without handing him its true name.'"
          },
        },
        {
          id: `t8-l6-q5`,
          type: "mcq",
          stem: `The practical resolution, and it is ancient: if final perseverance cannot be merited by any work, what is the one thing the tradition says to DO about it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Ask for it: unmeritable is not unimpetrable; prayer obtains what merit cannot touch.",
                "feedback": "Respondeo: we impetrate in prayer things that we do not merit, says Aquinas, since God hears sinners begging pardon they have not earned; so too may we impetrate the grace of perseverance for ourselves or for others, although it does not fall under merit. Impetration rests on mercy, merit on justice, and mercy's counter is open all night. This is why the Church ends her oldest prayers with now and at the hour of our death: the doctrine of perseverance, folded into ten words and prayed by children."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Accumulate merit early, as a reserve against late weakness.",
                "feedback": "Merit does not escrow against the one thing it cannot reach: the treasury you build is real and none of it purchases tomorrow's standing, which rests solely on the divine motion. A man could die rich in merit and poor in perseverance, which is the whole terror of the doctrine and the whole reason for the correct answer's verb."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing: what cannot be merited cannot be affected, so live and let God.",
                "feedback": "The quietist shrug, and Aquinas forecloses it in the same article that denies the merit: otherwise it would be useless to ask it of God in the petitions of the Lord's Prayer, and lead us not into temptation is precisely that asking. Unmeritable marks the boundary of justice, not the end of agency; the agency left is called kneeling."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Take a vow: solemn promises bind the future will in advance.",
                "feedback": "Vows are noble and bind the vower, which is exactly the problem: the mutable will that made the vow is the same one that must keep it, and no act of the will fixes the will. Religious life has never taught that profession is perseverance-insurance; its houses pray for the gift daily, which is the correct option wearing a habit."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t8-l6-q6`,
          type: "mcq",
          stem: `Name the architecture of the two errors this lesson has been walking between. Presumption and despair are called twin thefts. What does each steal?`,
          latin_tag: `donum perseverantiae`,
          doctrine_line: `Final perseverance is a special gift of God, unmeritable though truly impetrable by prayer; grace once received can be lost by any mortal sin and recovered through penance; and the Christian holds no absolute certainty of his own perseverance, but a most firm hope in God's help.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Presumption steals joy; despair steals discipline.",
                "feedback": "Each error would happily loan you what you have assigned it stealing: the presumptuous are often disciplined and the despairing rarely joyful, but those are symptoms trading places. The theft is at the level of the virtue itself: what hope holds, one error counterfeits and the other discards."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Presumption steals from the intellect; despair steals from the body.",
                "feedback": "Both are wounds of the same power: hope lives in the will, and both thefts are the will's mishandling of the future good. Faculty-sorting misses the symmetry that makes them twins: one object, hope's, abused in two opposite directions."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Presumption steals a certainty God has not given; despair refuses a hope God has commanded.",
                "feedback": "Respondeo: twin thefts against the one virtue of hope: presumption pockets an assurance no wayfarer holds (canon 16's fence), despair throws away the most firm hope Trent commands in the same chapter. Each is the other's mirror: both refuse to live as what man is, a beggar with a faithful Benefactor. The lunch-table conversation you just had ran the narrow road between them; most souls' whole lives do."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Presumption steals from God's justice; despair steals from His mercy: they offend different attributes.",
                "feedback": "Closer, and the classical note is real: presumption presumes on mercy without justice, despair fears justice without mercy. But the theft-frame this lesson built is aimed at the virtue in the man: what each error does to HOPE, whose object is one. Keep your note as the corollary; the twins are defined at hope's expense."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t8-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The house that gift built.`,
        body: `A pianist's ceiling, a lamp and a current, a sun that turns the eyes that see it, a hospital where verdicts heal, a child's drawing framed by the father, a gift that cannot be banked but can be begged: the module in six images, and beneath them one economy, in which everything is gift and nothing is fiction. Man is truly freed, truly renewed, truly meriting, because the gift is truly given. One question the module deliberately left standing: how God's motion infallibly attains its effect while the moved will stays free. Two schools answered; Rome refereed; the next module is the courtroom. Bring everything you own.`,
        distinction: {
          latin: `gratia  ·  libertas`,
          english: `grace  ·  freedom`,
          gloss: `Both fully affirmed, de fide; the manner of their meeting is the disputation the course stages next.`,
        },
      },
      questions: [
        {
          id: `t8-l7-q1`,
          type: "match_pair",
          stem: `The module in five images. Match each to the doctrine it carries.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the pianist's hands at their ceiling"
              },
              {
                "id": "L2",
                "text": "the lamp and the current"
              },
              {
                "id": "L3",
                "text": "eyes turned toward the sun"
              },
              {
                "id": "L4",
                "text": "the hospital, not the courtroom"
              },
              {
                "id": "L5",
                "text": "the child's drawing, framed"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "what practice builds ends at nature; the infused is poured in"
              },
              {
                "id": "R2",
                "text": "sanctifying grace abides; actual grace moves to each act"
              },
              {
                "id": "R3",
                "text": "even the turning is the sun's: prevenient grace before all merit"
              },
              {
                "id": "R4",
                "text": "justification renews inwardly: made just, not merely declared"
              },
              {
                "id": "R5",
                "text": "His own gifts crowned as our merits"
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
              "all_correct": "Five images, five doctrines, correctly hung. The sixth, the gift that cannot be banked, presides over them all from Lesson 6: everything on this wall is held in hope, not in escrow. A module you can now carry in one hand, and will need in the next one.",
              "partial_correct": "Some pairs misfiled. Walk the week: the ceiling, the two electricities, the turning, the healing verdict, the framed drawing. Each image was doing one doctrine's work; rehang them where they worked."
            }
          },
        },
        {
          id: `t8-l7-q2`,
          type: "mcq",
          stem: `An audit of the course's own books: for six modules the theology wing has been saying life of grace, state of grace, the gift of grace, generically and on credit. What did this module actually pay?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing new: the phrases were always self-explanatory.",
                "feedback": "Self-explanatory phrases do not get eight-lesson modules or five-hundred-year wars. Before this week, state of grace named something you trusted; now it names something you can define, divide, and defend: an abiding infused quality, seated in the soul's essence, root of the infused three. The credit was real and so is the payment."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A new doctrine: grace meant attitude before, substance now.",
                "feedback": "Not new doctrine, new precision: the Church never taught the attitude-theory; the course simply had not yet opened the treatise. What changed this week is your equipment, not the deposit. Development happens in the learner too, and this was yours."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A retraction: earlier modules spoke too loosely and stand corrected.",
                "feedback": "Nothing needed correcting; the earlier modules spoke generically ON PURPOSE, each ledger deferring the anatomy to this one. That discipline, borrowing without contradicting, is why the payment fits every prior debt exactly. The course plans its debts; this module was always the creditor."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The technical anatomy: sanctifying and actual, the divisions, justification's causes, merit's kinds, perseverance's gift.",
                "feedback": "Respondeo: the wing's working vocabulary, now owned: the temple's ground (an indwelling riding on the habitual gift), the corporation's one life (sanctifying grace across the members), the altar's food register (the state it nourishes), all of it resting on the taxonomy this module built: habitual and actual, operating and cooperating, condign and congruous, and the one unbankable gift. The course borrows forward and pays with interest; this was the payment week for grace."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t8-l7-q3`,
          type: "precision_check",
          stem: `A last claim to test with the whole module: <em>"Grace is God's help for doing what, at bottom, we could manage anyway."</em> Where exactly does it break?`,
          payload: {
            "statement": "Grace is God's help for doing what, at bottom, we could manage anyway.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At God's help: grace is God Himself, not a help from Him.",
                "feedback": "The indwelling is real and rides on a created gift; refusing the distinction re-fights Lesson 1's third question and loses again. Grace is truly help and truly gift, the created effect of the uncreated Love. The claim's disease is elsewhere: in the word anyway."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At doing: grace concerns being, never doing.",
                "feedback": "It concerns both, in order: the habitual gift renews being, the actual motions move doing. Half the taxonomy is about acts; deleting the doing deletes the current and leaves an ornamental lamp. The break is not in the verb; it is in the ceiling-clause at the end."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At could manage anyway: grace heals what we cannot mend and lifts to what we could never reach.",
                "feedback": "Respondeo: cut found, and it is the module's spine: two reasons in the state of corrupt nature, says Aquinas, to be HEALED, and then to be RAISED to works exceeding nature altogether. Nothing in the treatise is a booster for the basically-competent; the patient was sick and the destination was above the stairs. Pelagius lives in the word anyway, and the whole module is his refutation."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At we: grace is given to the Church, not to persons.",
                "feedback": "The Church is graced in her members, each soul carrying her own lamp, as the sleeping infant settled in Lesson 2. Collectivizing the gift dodges the claim's real error, which is anthropological optimism, not bad grammar about persons. Keep the we; kill the anyway."
              }
            ],
            "correct_option_id": "c",
            "correction": "Grace heals a nature that could not mend itself and elevates it to an end it could never reach: healing and elevation, not assistance toward the achievable. The word anyway is where Pelagius hides."
          },
        },
        {
          id: `t8-l7-q4`,
          type: "true_false_with_reason",
          stem: `The recapitulating objection, one last time: true or false: <em>if salvation is grace from beginning to end, then my freedom is a ceremonial fiction.</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. One steering wheel, one driver: every inch God moves is an inch I do not.",
                "feedback": "The zero-sum wheel is the picture the whole course exists to break: God is not a rival driver but the First Cause of there being a driver at all. He moves free wills AS free; the motion founds the freedom instead of consuming it. The inch-for-inch ledger works between creatures only, and God is not one."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Trent itself says man cannot even begin, which concedes the fiction.",
                "feedback": "Read the same chapter to its end: the man who cannot begin FREELY ASSENTS and cooperates once begun, and is able to reject. Inability to self-start is not inability to steer; the doctrine denies the first and guards the second with anathemas. You have quoted the diagnosis and skipped the anatomy."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Grace frees freedom: moved by God, the will truly wills, truly cooperates, truly can refuse.",
                "feedback": "Respondeo: the module's both/and, complete: prevenient grace begins (Lesson 3), the freed will assents and cooperates (Trent's canon 4 against the stone-soul), merit is real because the free work is real (Lesson 5), and refusal remains possible to the end (Lesson 6, soberly). Grace is not freedom's rival but its physician: the will was not fictional before, only sick. HOW the infallible motion and the intact freedom cohere in the metaphysical fine grain: that question has a room of its own, next door."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Because freedom means only that no one feels forced, and grace is never felt as force.",
                "feedback": "Right verdict, psychological floorboards: unfelt force would still be force, and compatibilism-by-anesthesia is no one's doctrine here. The will is really free, not just comfortable; God's motion reaches it as what it is. Keep the verdict and build it on causes, not sensations."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t8-l7-q5`,
          type: "mcq",
          stem: `The module's unsurrenderable pair, the two words that cannot be traded away without the doctrine going with them. Which pair?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Experience and feeling: grace known by its warmth.",
                "feedback": "The sleeping infant of Lesson 2 vetoes this pair permanently: wholly graced, feeling nothing. Warmth visits the graced and the ungraced alike and proves nothing either way. The pair that holds the doctrine is about what the gift IS, not how it registers."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Inherent and gratuitous: justice truly in us, truly from Him alone.",
                "feedback": "Respondeo: the two words the wars were about, held together: INHERENT against the coat-theory (canon 11: the justice whereby we are justified is poured into our hearts and abides there), GRATUITOUS against every wage-theory (chapter 8: nothing before justification merits it, whether faith or works). Drop inherent and the hospital becomes a courtroom; drop gratuitous and the Father's house becomes a marketplace. Each word guards the other, which is why the Church would not sell either."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Sudden and total: conversion in a single stroke.",
                "feedback": "The gift arrives whole in a moment, and the preparation may take thirty years and the increase a lifetime; Trent teaches all three clauses. Tempo was never the fenced doctrine. The anathemas guard what the gift is and where it comes from: the correct pair, one option up."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Rare and costly: grace as heaven's scarce resource.",
                "feedback": "Scarcity is the one economy grace does not run: sufficient grace is denied to no one, and the treasury's whole scandal is abundance. Costly, yes, to the Son; rare, never, to the sons. The unsurrenderable pair guards the gift's reality and gratuity, not a supply curve."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t8-l7-q6`,
          type: "mcq",
          stem: `The door. This module affirmed two things with equal weight: God's grace moves the will efficaciously, and the moved will remains truly free. It declined, several times and on purpose, to explain HOW both are true at once. Why decline, and what waits through the door?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `Grace heals and elevates: an abiding gift and a divine motion, unmeritable at its root, making men truly just and truly meriting, held in hope without presumption; how the motion and the freedom cohere is the disputation the next module stages.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because the question is above every pay grade: the Church forbids asking it.",
                "feedback": "She staged the asking for eighty years at the highest level she has, which is the opposite of forbidding. What she forbade at the end was each side calling the other heretical. The question is not closed; it is OPEN, formally, by decree, which is a stranger and more instructive thing than either answer would have been."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because both accounts are equally true: contradictions are welcome in theology.",
                "feedback": "Neither the Church nor this course has ever seated a contradiction; both-permitted is not both-true. One school reads the efficacy from within the gift, the other from a knowledge in God; at most one anatomy is right, and Rome declined to say which. Permission to hold is not a verdict of truth: the distinction is the next module's first lesson."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because the answer is obvious once the terms are defined, and the dispute was verbal.",
                "feedback": "Eighty years, the two greatest schools in the Church, congregations in Rome, and a papal decision to decide nothing: verbal disputes do not leave that kind of paperwork. The terms were defined with exquisite care on both sides; the mystery survived the definitions. It usually does."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The mechanics are a dispute Rome left open: the De Auxiliis, the course's model disputation, is next.",
                "feedback": "Respondeo: this module taught the de fide floor both schools stand on: efficacious grace, real freedom, both defined. The mechanics above the floor, whether efficacy is intrinsic to the gift (the Thomist line, the house position) or resolved through God's middle knowledge (the Molinist line, error but never heresy), is the dispute Paul V refused to close in 1607. The next module stages that fight at full strength and teaches, along the way, the rarest churchly art: certainty where the Church is certain, liberty where she leaves liberty. Opens the door to the Disputation on Grace and Freedom."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    }
  ],
};
