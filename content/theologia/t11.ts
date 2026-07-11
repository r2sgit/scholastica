import type { ModuleMeta } from '../types';

/** T11 · The Redemption & the Mother. Wired into the live app by scholastica-claude-code-wing-parity-RUN.md (WP-A). Content is the authored t11-content.json, copied faithfully; no prose edits. */
export const t11: ModuleMeta = {
  id: 11,
  title: `The Redemption & the Mother`,
  short: `De Redemptione et Matre Dei`,
  label: `Theologia XI · The Redemption & the Mother`,
  latin: `De Redemptione et Matre Dei`,
  aim: `The Cross was chosen, not extracted: God could have pardoned by decree and elected instead the way that teaches while it pays, so that man might learn how greatly he is loved and be stirred to love back. Satisfaction is that teaching made payment: an offense is properly atoned when something is offered that the offended one loves as much as, or more than, he detested the offense, and by suffering out of love and obedience Christ gave more than the offense of the whole race required, superabundantly, because acts are weighed by their Who and this Who is God. The Passion merited and satisfied in one act, paid to God and not to the devil, and it grounds the office the Apostle states with both edges: one Mediator of God and men, the man Christ Jesus, sole because no second fountain exists, generous because participations are His own creation, dispositive and ministerial, windows sharing one sun. Nearest the fountain stands His Mother: Theotokos, because the union was made in the womb itself and mothers bear persons; immaculately conceived, preserved not exempted, redeemed more perfectly in view of the merits of her Son, as the schools disputed for five centuries and the magisterium harvested in 1854; associated directly and intimately with the entire work of Redemption, in the terms received from Tradition, meriting de congruo what He merited de condigno, Minister of a distribution whose treasury is exclusively the fruit of His Death, with no productive power of grace and no share in the price's sufficiency. Associated, not equal: divine wisdom loves to give creatures the dignity of causing, and at the summit of creaturely cooperation stands the first of the redeemed, everything received, everything returned.`,
  lessons: [
    {
      id: `t11-l1`,
      num: `I`,
      title: `Why the Cross`,
      latin: `satisfactio`,
      tag: `satisfactio`,
      fin: {
        tag: `satisfactio`,
        heading: `The weight that carried Him.`,
        body: `Augustine's sentence went up the hill and held. My love is my weight: the Cross was not extracted from God by a debt He could not waive, nor forced on a Son who drew the short straw. Charity carried Him, obedience shaped the offering, and the offering repaired more than the offense had broken, because the scale of satisfaction weighs love on both pans. God could have pardoned by decree; He elected the way that teaches while it pays, so that man might learn how greatly he is loved and be stirred to love back. Keep the two corrections within reach: the price was paid to God, not to the devil's jail; and the Cross changed us, not God. What remains is to price the gift. That is the next lesson's ledger.`,
        distinction: {
          latin: `satisfactio`,
          english: `satisfaction`,
          gloss: `An offense is properly atoned when something is offered that the offended one loves as much as, or more than, he detested the offense. Love is the currency; the Cross is its superabundant payment.`,
          motif: `the-weight-that-carried-him`,
        },
      },
      questions: [
        {
          id: `t11-l1-q1`,
          type: "mcq",
          stem: `My love is my weight, said Augustine; wherever I am carried, it is love that carries me. Good Friday puts the sentence to its hardest test: what carried Christ to the Cross?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The Father's justice compelled it: once sin existed, no other payment was possible.",
                "feedback": "You have re-armed the necessity the last module disarmed. God with His omnipotent power could have restored human nature in many other ways; the tenth module banked that, horse and journey and all. A compelled Cross is not a gift but a foreclosure, and the tradition will not mortgage omnipotence to explain mercy. The Cross was chosen. The question is what chose it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nothing carried Him: politics killed Him, and God salvaged the wreck afterward.",
                "feedback": "That reading makes providence a scavenger. The malice of the executioners was real, and Aquinas says so without blinking; but on His own side the Passion was offered, not merely suffered. He delivered Himself up, an oblation and a sacrifice, and the offering was underway before any soldier was briefed. A salvage operation does not say, the night before the wreck, this is my body, which is given for you."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Love first: charity carried Him, and obedience gave the offering its shape.",
                "feedback": "Respondeo: by suffering out of love and obedience, Aquinas writes, Christ gave more to God than the offense of the whole race required (ST III q.48 a.2). The twelfth module taught you that love is the appetite's first yes, the weight that carries every act. Here is the sentence at full scale: the weight that carried Him up the hill was not the wood. Augustine's line was a prophecy."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Prudence: the Cross was the least destructive of the endings actually available.",
                "feedback": "You have made the Redemption a piece of damage control, and God a triage officer cornered by circumstances. But nothing corners God; the tenth module ruled out even the gentler necessity of a debt with no other exit. The Cross is not the least bad option. It is the most loving one, elected precisely for what it heals and shows. Fittingness, not triage."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t11-l1-q2`,
          type: "mcq",
          stem: `A boy shatters a neighbor's window and spends his Saturday rebuilding the frame with his father; the neighbor finds he values that afternoon more than he ever valued the glass. The tradition calls the move <em>satisfactio</em>, satisfaction: an offense repaired by a gift. On Aquinas's definition, when is an offense properly atoned for?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "When the offender suffers a penalty equal in pain to the harm he inflicted.",
                "feedback": "That is a tariff, not a satisfaction. Vindictive punishment measures pain against harm; satisfaction measures gift against offense, and the two are different instruments. The boy could have been fined the price of the glass and the neighbor left exactly as unloved as before. Aquinas's definition runs on what the offended one comes to love, not on what the offender is made to feel."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "When something is offered that the offended one loves as much as he hated the offense, or more.",
                "feedback": "Respondeo: the definition verbatim. He properly atones for an offense who offers something which the offended one loves equally, or even more than he detested the offense (ST III q.48 a.2). Notice the currency: love, on both sides of the scale. The offense weighed as detestation; the repair weighs as delight. Keep this scale in hand; the next questions load it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "When the offended party freely decides to let the matter drop, asking nothing.",
                "feedback": "That is remission without satisfaction, and it is genuinely possible; God could have pardoned the race by decree, as a man forgives a debt no one repays. But then nothing is atoned, nothing offered, nothing rebuilt on a Saturday. The marvel of the actual economy is that God willed the fuller thing: pardon that arrives inside a gift, mercy that leaves justice richer rather than waived."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "When a third party absorbs the consequences so the offender never has to face them.",
                "feedback": "You have described an evasion scheme, and satisfaction is the opposite of one. The satisfier does not smuggle the offender out of the story; he acts from within friendship, so that the repair belongs to the friendship itself. Aquinas is explicit that one can satisfy for another only insofar as the two are one in charity. Whoever pays, the offender is brought in, not helped to escape."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t11-l1-q3`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>He properly atones for an offense who offers something which the offended one loves equally, or even more than he detested the offense. But by suffering out of love and obedience, Christ gave more to God than was required to compensate for the offense of the whole human race. First of all, because of the exceeding charity from which He suffered; secondly, on account of the dignity of His life which He laid down in atonement, for it was the life of one who was God and man; thirdly, on account of the extent of the Passion, and the greatness of the grief endured. And therefore Christ's Passion was not only a sufficient but a superabundant atonement for the sins of the human race; according to 1 John 2:2: He is the propitiation for our sins: and not for ours only, but also for those of the whole world.</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae III q.48 a.2 · Dominican Fathers translation</div></div>Aquinas gives three reasons the offering outweighed the offense, in a deliberate order. What does the FIRST reason make the primary currency of atonement?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Pain: the atonement weighs what the Sufferer endured, torment answering guilt.",
                "feedback": "You have promoted the third reason to first place. The extent of the Passion and the greatness of the grief are on Aquinas's list, and he refuses to sentimentalize them away; but they come last, as the scale of the offering, not its principle. An economy that weighed pain first would make the executioners the ministers of our salvation. Read the order again; it is doing doctrine."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Blood: the physical life poured out is itself the price that clears the debt.",
                "feedback": "Close to the second reason, but the second reason is not about blood as fluid; it is about whose life the blood carried, the life of one who was God and man. Scripture's blood-language is real and the course will not launder it into metaphor. But even the precious blood has its price from the charity and the Person, or a transfusion could have saved the world."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Obedience: a broken law is answered by a kept one, compliance for defiance.",
                "feedback": "Obedience is genuinely in the sentence; He suffered out of love and obedience, and a disobedience was indeed answered by an obedience unto death. But watch what Aquinas puts first when he enumerates: the exceeding charity from which He suffered. Obedience gives the offering its shape; charity gives it its weight. The order of the reasons is the order of the currencies."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Charity: the exceeding love from which He suffered, with the rest weighed after it.",
                "feedback": "Respondeo: first of all, because of the exceeding charity from which He suffered. The scale of satisfaction weighs love before it weighs anything else, which is why the definition spoke of what the offended one loves. The twelfth module's sentence holds at Golgotha: love comes first, here too. The dignity of the Person and the extent of the grief follow, and the next lesson prices the second of these."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t11-l1-q4`,
          type: "true_false_with_reason",
          stem: `A common picture, put to the judgment: <em>God demanded blood before He would forgive; the Cross changed His mind about the human race.</em> True or false?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "False: the Cross changes us, not God. His love gave the Cross before the Cross gave anything.",
                "feedback": "Respondeo: God so loved the world that He gave His only-begotten Son. The giving comes first; the love is the cause of the Cross, never its effect. Nothing in God moves from wrath to warmth, for the third module taught you a God who is His own act, without before and after. Satisfaction unfolds inside a love already given, and its work is done entirely on our side of the relation: we are repaired, He is not appeased into existence. The picture had the arrow backwards."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "False: because God never required anything at all, and the language of debt is a metaphor we should outgrow.",
                "feedback": "You have saved God's honor by dissolving the doctrine. Trent says without embarrassment that Christ made satisfaction for us to God the Father; the debt-language is the Church's own, not scaffolding to kick away. The right correction keeps the debt and fixes the arrow: the Father's love gives the Satisfier. Outgrow the metaphor and you will find you have outgrown the Creed."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "True: Scripture speaks of wrath, and wrath must be discharged somewhere before mercy can begin.",
                "feedback": "Wrath in Scripture names the steady opposition of holiness to sin, not a mood that accumulates until spent. Make it a pressure needing discharge and you have given God a nervous system and the Cross the office of a lightning rod. The tradition reads the wrath-texts through the immutability the course established long ago: what changed on Calvary was the standing of the race, not the temperature of God."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "True: justice is prior to love in God, so payment had to precede pardon.",
                "feedback": "In the simple God nothing is prior to anything; His justice is His love is His act of being, and the third module's whole audit stands behind that sentence. A God whose justice outranks His love would be a composite of departments, and the department picture is exactly what simplicity forbids. The order you sensed is real but it lives in the economy, in how salvation reaches us, not in God's anatomy."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t11-l1-q5`,
          type: "mcq",
          stem: `Grant that God could have pardoned by a word, no Cross at all. Aquinas grants it. Why then was the Cross the more fitting way?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because pardon without payment would have violated the divine nature itself.",
                "feedback": "That un-grants what you just granted. God is no private plaintiff bound by a higher court; He is the sovereign good, and to remit an offense against Himself wrongs no one, as Aquinas argues when he clears the ground. The Cross is not what the divine nature demanded on pain of contradiction. It is what divine wisdom elected as best, and the difference between those two sentences is the whole lesson."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the devil held valid rights over mankind, and only a ransom paid to him could clear the title.",
                "feedback": "The Fathers loved the ransom image, and Aquinas keeps what is true in it: by God's just permission we lay under the devil's power. But he corrects the ledger in so many words: the price was paid not to the devil, but to God (q.48 a.4). The jailer had no title deed, only a jail. Press the image into a contract with hell and you have made the Redemption a payoff to a squatter."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "More is healed this way: man learns how much God loves him and is stirred to love back.",
                "feedback": "Respondeo: Aquinas's first reason for the fittingness, with Augustine supplying the voice: in order that man might know how greatly God loves him, and be stirred to love Him in return, wherein lies the perfection of salvation. The horse-and-journey grammar from the tenth module finishes here: the journey's end is love returned, and the Cross is the way that teaches while it pays. A decree would have cleared the debt and left us uninstructed in the one lesson we were dying of."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because only a public execution could satisfy the visible order of cosmic justice.",
                "feedback": "That is theater dressed as theology. The fittingness arguments never appeal to spectacle for its own sake; they appeal to what the way accomplishes in us: knowledge of the love of God, an example of obedience and humility, merit and satisfaction in one act. The publicity of Calvary serves those ends. A cosmos that simply demanded a show would deserve the critics it gets."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t11-l1-q6`,
          type: "precision_check",
          stem: `A devotional pamphlet, meaning reverence: <em>"On the Cross, God punished Jesus instead of punishing us, so that His anger could finally be satisfied."</em> Test it with the lesson's equipment.`,
          latin_tag: `satisfactio`,
          doctrine_line: `Satisfaction is love offering more than the offense took: the Cross is chosen fittingness, not forced payment.`,
          lesson_complete: true,
          payload: {
            "statement": "On the Cross, God punished Jesus instead of punishing us, so that His anger could finally be satisfied.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At God: the sentence should say the Father stood aside and the Son acted alone.",
                "feedback": "That repair breaks the Trinity to save the pamphlet. The Passion is the Father's gift and the Son's own offering in one motion: God so loved that He gave, and the Son loved me and delivered Himself. No Person stands aside. The leak in the sentence is not in the word God; it is in the machinery the sentence gives Him."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At punished instead: satisfaction is love offered from within our race, not punishment rerouted onto a substitute.",
                "feedback": "Respondeo: there is the leak. Punishment transferred to an innocent third party is not justice anywhere, and it is not the doctrine. Satisfaction is a different instrument: the Head, one with His members, offers from inside the race a love that outweighs the offense (q.48 a.2). He is no lightning rod standing between us and the weather; He is the Brother whose gift repairs the house. Trent's verb is chosen with care: He merited our justification and made satisfaction, out of the exceeding charity wherewith He loved us."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At anger: God has no anger, so the sentence should speak only of sorrow and welcome.",
                "feedback": "An overcorrection into upholstery. Scripture's wrath-language is not an embarrassment to be redacted; it names the real opposition of holiness to sin, and the course keeps it, rightly read. Strike the word and you flatter the age; parse the word and you teach it. The pamphlet's error is not that it mentions anger. It is what it makes the anger do."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing to correct: this is simply the doctrine of satisfaction in plain speech.",
                "feedback": "It reads devoutly, which is how it survives the editor. Run the audit: punished instead makes the Cross a penal transfer, and anger satisfied makes God the one changed by it. Both arrows point the wrong way. The plain-speech version of the actual doctrine is stranger and better: out of love, one of us who was also God gave more than all of us had broken. Precision is not pedantry here; it is the difference between a Father and an executioner."
              }
            ],
            "correct_option_id": "b",
            "correction": "Say rather: out of the exceeding charity wherewith He loved us, Christ merited justification for us by His most holy Passion and made satisfaction for us to God the Father (Trent, Sess. 6 ch. 7 · DS 1529; ST III q.48 a.2)."
          },
        }
      ],
    },
    {
      id: `t11-l2`,
      num: `II`,
      title: `The Price and Its Worth`,
      latin: `meritum Christi`,
      tag: `meritum Christi`,
      fin: {
        tag: `meritum Christi`,
        heading: `Weighed by the Who.`,
        body: `The absurd proportion resolved the moment the fifth module's grammar walked in: acts belong to persons, and the Person acting on Calvary is divine. So the afternoon outweighs the ages; the atonement is not sufficient merely but superabundant, more given than all the breaking took. Trent named the two motions in one breath: He merited for us and made satisfaction for us, gain and repair, the exceeding charity driving both. And the gain is not marooned in the first century: grace made Him Head, His fullness overflows, His condign claim covers the members as if the works were theirs, because in the one mystic person they are. He even took wages Himself, lowliness paid in glory, so that the road of merit would have His footprints on it. One question is now unavoidable. If the price is His alone, and infinite, what exactly is left for anyone else to do or be in this economy? The next lesson answers with a single word held very carefully: sole.`,
        distinction: {
          latin: `meritum Christi`,
          english: `the merit of Christ`,
          gloss: `The Passion as gain: proceeding from the fullness of grace and the dignity of a divine Person, Christ's act claims our justification in justice, condignly, and as Head He claims it for His members.`,
          motif: `weighed-by-the-who`,
        },
      },
      questions: [
        {
          id: `t11-l2-q1`,
          type: "mcq",
          stem: `One afternoon of one man's suffering, set against every sin from Eden to the last day. The proportion looks absurd, and the tradition agrees it would be, on one condition. What settles the worth of the act?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The quantity of suffering: no one ever suffered more, so the sum covers the total.",
                "feedback": "The greatness of the grief is real, and Aquinas keeps it on his list of reasons. But quantity of pain is a finite currency however you stack it, and a bigger whip does not reach infinity. Weigh the Passion by torment alone and some ingenious accountant will always ask whether one more martyr might have tipped the scale. The tradition's answer lies elsewhere: not in how much, but in who."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Person who offers: the acts of the God-man carry the dignity of the one who does them.",
                "feedback": "Respondeo: the fifth module's grammar, bearing its heaviest load. Acts belong to the suppositum: John pays taxes, not his human nature, and on Calvary the one who suffers, loves, and offers is a divine Person in the human nature He assumed. Aquinas draws the conclusion exactly: the dignity of Christ's flesh is to be estimated from the Person assuming it, the result of which was that it was of infinite worth (q.48 a.2). One act of the God-man outweighs the world, because the world was weighed against a who, not a what."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The Father's acceptance: any offering becomes sufficient the moment God counts it so.",
                "feedback": "That is the Scotist account, offered by serious men and worth stating fairly: the worth of the offering lies in the divine acceptation, God freely valuing it as payment. The house holds the other line: the acceptance answers a worth intrinsically there, the infinite dignity of the Person in the act, or else a faithful mouse could in principle have redeemed the world had God chosen to count it. Rome has not settled the schools' dispute; the course tells you which reading it finds true and why, and leaves the fight honest."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The sinlessness of the victim: innocence, wherever found, outweighs any measure of guilt.",
                "feedback": "Innocence is necessary and not sufficient. The Lamb had to be without blemish, and He was, as the fifth lesson of the last module confessed. But the martyrs are innocent in their measure and redeem no one; their sufferings profit the Church by example and exhortation, not by ransom. An innocent creature's act remains a creature's act, finite in dignity. Only innocence joined to infinite Personhood pays this bill."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t11-l2-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Of this Justification the causes are these: the final cause indeed is the glory of God and of Jesus Christ, and life everlasting; while the efficient cause is a merciful God who washes and sanctifies gratuitously; but the meritorious cause is His most beloved only-begotten, our Lord Jesus Christ, who, when we were enemies, for the exceeding charity wherewith he loved us, merited Justification for us by His most holy Passion on the wood of the cross, and made satisfaction for us unto God the Father.</p><div class="cr-cite">Council of Trent, Session 6, Decree on Justification, ch. 7 · Waterworth translation · DS 1529</div></div>Trent hands the Passion two verbs. Which pair, and why does the Council need both?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Suffered and died: the verbs name the cost, and the cost is the doctrine.",
                "feedback": "Those verbs live in the Creed, but look again at the sentence in front of you: its operative verbs are merited and made satisfaction. The cost enters through the phrase most holy Passion, yet Trent is not itemizing the cost here; it is naming what the cost accomplished, in the precise causal grammar the eighth module taught you to read. The fourth module's causes are doing conciliar work: final, efficient, meritorious, each labeled."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Merited and earned: two words for a single motion of gain, doubled for emphasis.",
                "feedback": "Trent does not stutter. Merited and made satisfaction are two distinct motions, not synonyms: merit looks forward to the goods won for us, satisfaction looks back to the offense repaired before God. A workman's wage and a debtor's discharge are both payments, but no bookkeeper files them in one column. The Council's doubled verb is doubled doctrine."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Loved and forgave: the legal-sounding verbs are scaffolding around these two real ones.",
                "feedback": "The charity clause is there, and it governs everything: for the exceeding charity wherewith he loved us. But you have demoted the verbs the Council chose to enact that charity. Love is the source; merit and satisfaction are what love did. Strike them as scaffolding and the sentence collapses into sentiment, which is precisely what a council defining against sentiment declined to write."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Merited and made satisfaction: the Passion wins goods for us and repairs what we broke, in one act.",
                "feedback": "Respondeo: meritum and satisfactio, the two faces of the one Passion. Merit is gain: the Head winning justification, grace, and glory for His members, in the very grammar of condign merit the grace module fixed. Satisfaction is repair: the offense against God outweighed by a greater love, as the last lesson taught. One act, two relations; Aquinas devotes them separate articles and Trent separate verbs (q.48 aa.1-2; DS 1529). Learn to say both or you will shortchange one."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t11-l2-q3`,
          type: "mcq",
          stem: `Grant the act infinite worth. It is still HIS act, done twenty centuries before your baptism. By what right does His merit become yours?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Grace made Him Head, so what the Head does overflows to His members as their own.",
                "feedback": "Respondeo: grace was bestowed upon Christ not only as an individual, but as Head of the Church, so that it might overflow into His members; and therefore Christ's works are referred to Himself and to His members (q.48 a.1). The tenth module named that fullness gratia capitis, the grace of the Head. Aquinas presses the union further in the next article: the head and members are as one mystic person, which is why His satisfaction belongs to all the faithful as His members. What that one Body is, in its full anatomy, a later module owns; here it is enough that the overflow is real, not rhetorical."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "By legal fiction: God files His act under our names, though nothing in us changes.",
                "feedback": "That is imputation without inherence, and Trent met it head on: we are not only reputed just, but are truly called, and are, just, receiving justice within us. The grace module banked that canon already. A filing system saves paperwork, not sinners. The transfer the Church confesses is organic before it is forensic: union with the Head, His life become the members' life."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "By example only: His act moves us to imitate Him, and the imitation is the salvation.",
                "feedback": "You have kept the schoolroom and sold the hospital. The example is real; Aquinas lists it among the fruits of the fitting way, and the last lesson leaned on it. But reduce the Passion to moral influence and nothing was paid, nothing repaired, nothing conferred; a drowning man needs more than a swimming demonstration.<span class=\"condemned\">Exemplarism (Abelard's reduction of the Redemption) &middot; condemned, Council of Sens, 1141, confirmed by Innocent II</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It does not become yours until death; the living hold only a promissory note.",
                "feedback": "The living hold considerably more than paper. The merit of the Passion is communicated now: Trent's own decree says the grace whereby we are made just is bestowed in this life, through the laver of regeneration or its desire. How the payment reaches a particular Tuesday, through which appointed channels, is the business of a later module; that it reaches, and reaches the living, is settled doctrine. Heaven does not deal in IOUs."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t11-l2-q4`,
          type: "true_false_with_reason",
          stem: `Judge, with the scale from Lesson 1 in hand: <em>Christ's Passion was not merely a sufficient atonement for the sins of the human race, but a superabundant one: it gave more than the whole offense required.</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "True: because His pain was infinite, and infinite pain overpays any finite debt.",
                "feedback": "Right verdict, wrong engine. His grief was the greatest of this life, Aquinas argues, but pain is not the currency that reaches infinity; the Person is. Ground superabundance in tormenta and you rebuild the accountant's error from the first question with a plus sign. The overflow comes from the exceeding charity and the infinite dignity of the one who suffered, with the extent of the Passion third on the list, where Aquinas put it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "True: Aquinas writes those very words; the overflow measures the love, not surplus inventory.",
                "feedback": "Respondeo: not only a sufficient but a superabundant atonement, according to 1 John 2:2: He is the propitiation for our sins, and not for ours only, but also for those of the whole world (q.48 a.2). Superabundance is not a warehouse problem; nothing of an infinite act sits unused, because acts of love are not consumed by application. It is the signature of the Giver: where sin abounded, grace did more abound. The Church draws on that treasury without fear of the bottom, and the modules ahead will show you the drawing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "False: the payment was calibrated exactly to the debt, since God does nothing in excess.",
                "feedback": "You have made divine wisdom a minimalist, and the text will not allow it. Aquinas writes superabundant on purpose, and Scripture before him: good measure, pressed down, shaken together, running over. God's works exceed their occasions because they express His goodness, not merely our arithmetic. Exact calibration is the instinct of an insurer; it is not the style of the God who made ten thousand species of beetle and one Redeemer whose act outweighs every possible world of sin."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "False: superabundance would mean part of the price bought nothing, since some are lost.",
                "feedback": "The lost prove no waste; they mark the difference between a price paid for all and a price received by each, the very grammar of sufficiency and efficacy the ninth module's disputation turned on. The Church condemned the tidy alternative, that Christ died only for the predestined, as a mutilation of the gospel's for all.<span class=\"condemned\">Jansenism, fifth proposition &middot; condemned, Innocent X, Cum occasione, 1653 &middot; DS 2005-2006</span>"
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t11-l2-q5`,
          type: "mcq",
          stem: `The Passion merited for us. Did it merit anything for HIM? Scripture answers before the theologians do: He humbled Himself, becoming obedient unto death. THEREFORE God exalted Him.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing: He possessed all things from the first instant, so His meriting is a figure of speech.",
                "feedback": "In His divinity, nothing could be added, and in His soul's grace and glory He was full from the first. But the tradition refuses to let therefore God exalted Him evaporate into rhetoric: as man He truly merited what as man He had set aside the display of. Augustine's line, quoted by Aquinas as the authority here, is not a figure: the lowliness merited the glory; the glory was the reward of the lowliness."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "His own exaltation as man: resurrection, ascension, the Name above every name, lowliness paid in glory.",
                "feedback": "Respondeo: exactly the Pauline therefore, read with Augustine and Aquinas (q.48 a.1). The Head merited for Himself what the members hope for through Him: the body glorified, the Name exalted, the enemies made a footstool. Nothing was added to God; everything owed to obedient manhood was rendered to it, with interest. Which means the pattern you are asked to walk is one He walked first, wages and all: the economy of merit is not a rumor about heaven but a road with footprints."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The Father's love, which the Son as man had first to win back for Himself.",
                "feedback": "Never lost, so never won back. This is my beloved Son was said over the Jordan long before Golgotha, and the Father's delight in the Son is eternal, the fourth module of this wing having taught you processions that no history interrupts. What the Passion merited was rendered TO a beloved, not extracted BY a suitor. Confuse the two and the Trinity becomes a domestic drama, which it is not."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Release from the human nature, His tour of duty in flesh completed at last.",
                "feedback": "The Ascension does not undress Him. He rose in the body, ascended in the body, and intercedes now as the man Christ Jesus; the tenth module fixed the union as forever, and the wounds He showed Thomas were not props to be returned after the scene. His reward was the glorification of the manhood, not liberation from it. The Incarnation has no expiry date; that is half the comfort of it."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t11-l2-q6`,
          type: "distinction_application",
          stem: `The pair, fixed by the grace module: <em>condign</em> merit claims in justice within God's ordination; <em>congruous</em> merit persuades by fittingness and friendship. Now the capital case: in which register did Christ merit our salvation?`,
          latin_tag: `meritum Christi`,
          doctrine_line: `One act of the God-man outweighs the world: the Person gives the price its worth, and the Head gains it for His members.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Congruously only: even His acts could not put the Father under anything like justice.",
                "feedback": "Caution in the wrong place. The grace module taught the condign conditions: a work proceeding from grace and the dignity of adoption claims in justice within God's own ordination. Christ exceeds the conditions rather than failing them; His works proceed from the fullness of grace and the dignity of a divine Person. If the adopted can merit condignly, the natural Son is not reduced to hinting. The Father is not coerced by this; He ordained it, and delights to owe what His own gift established."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Condignly for Himself, congruously for us: a person's strict claims end at his own skin.",
                "feedback": "The skin rule is exactly what the Head clause breaks. For any other man your instinct would hold: my neighbor's justice earns nothing in strict right for me, and the widowed mother of the grace module merited her son's conversion congruously, by friendship. But Christ and His members are one mystic person; the overflow is built into the constitution of the Head. His condign merit covers the Body, not by stretching a private claim but because the claim was never private."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In neither register: merit is a category for creatures, and He has outgrown it.",
                "feedback": "Trent begs to differ in the sentence you read an hour ago: He merited justification for us by His most holy Passion (DS 1529). The Council's verb is the theologians' verb is Scripture's logic. As God, granted, He merits nothing; merit belongs to the wayfarer. But He was truly a wayfarer in the nature He assumed, and the whole point of the assuming was to plant merit where the race could inherit it. Retire the category and you retire the inheritance."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Condignly, and for us: the Head's claim in justice covers the members joined to Him.",
                "feedback": "Respondeo: condign merit at full strength, and communal by constitution. The work proceeds from unmeasured grace and infinite personal dignity, within an ordination in which He is given as Head; so the claim is in justice, and the claim is ours, because His works are referred to His members as a man's works to himself (q.48 a.1). The widowed mother persuaded heaven for her son; the Son claims it for His brethren. Both are real; only one is the fountain. Keep the registers distinct and you will never confuse the fountain with the channels, which is the next lesson's whole business."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `t11-l3`,
      num: `III`,
      title: `Sole Redeemer`,
      latin: `unus mediator`,
      tag: `unus mediator`,
      fin: {
        tag: `unus mediator`,
        heading: `The fountain and the windows.`,
        body: `Sole survived the audit, and so did the saints. The Mediator's office is to unite, and He alone unites perfectly, as man, by the death that reconciled the race; no parallel fountain, no second price, no rival way to the Father. But the same Aquinas who fences the office opens the courtyard: others mediate dispositively and ministerially, in Him, the way windows share one sun. The prophets prepared, the priests of the New Law administer, the saints intercede, and none of it embezzles a glory that is magnified precisely by being given away. Nothing is wanting to the sufferings of Christ except the Body's share in bearing them. One participation remains to be named, the highest of them all: a mediation so close to the fountain that the Church has spent centuries finding the exact words for it. She is the next three lessons. Begin where a council began: with her Son.`,
        distinction: {
          latin: `unus mediator`,
          english: `the one Mediator`,
          gloss: `Christ alone, as man, unites God and men perfectively, by His death; others mediate only dispositively and ministerially, in Him. Sole excludes rival fountains, not participated channels.`,
          motif: `fountain-and-windows`,
        },
      },
      questions: [
        {
          id: `t11-l3-q1`,
          type: "mcq",
          stem: `There is one God, and one Mediator of God and men, the man Christ Jesus. Paul's sentence has teeth on both edges, so hold it still and ask the first question: what does a mediator, properly speaking, DO?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Carries messages between two parties who never actually meet.",
                "feedback": "That is a courier, and couriers leave the distance intact. The whole scandal of this Mediator is that the distance closes: God was in Christ reconciling the world to Himself. If the parties never meet, the mediation failed. Aquinas defines the office by the meeting, not the mail."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Softens the terms of each side until a settlement both can live with emerges.",
                "feedback": "A negotiator splits differences; this Mediator fulfills them. God's terms were not marked down at Calvary, they were satisfied superabundantly, as two lessons have now established. And man's side was not talked into a compromise but remade. Nothing was watered; something was paid and something was healed. Mediation by discount is the one thing the Cross is not."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Stands with the stronger party to see the outcome enforced on the weaker.",
                "feedback": "You have described an enforcer, and made the Cross an instrument of the strong. But the Mediator stands in the middle by being genuinely of both: true God, and true man born under the law. He enforces nothing on us that He did not first bear for us. The office is defined by union, not leverage."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Joins the two: a mean that unites the extremes, communicating what belongs to each.",
                "feedback": "Respondeo: the office of a mediator is to join together and unite those between whom he mediates, for extremes are united in the mean (ST III q.26 a.1). And the mean must be distant from each extreme while touching both, which is why Paul writes the MAN Christ Jesus: as God He differs in nothing from the Father, but as man He stands between, communicating God's gifts to men and offering man's satisfaction and prayers to God (a.2). The union you studied in the tenth module turns out to be an office as well as a mystery."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t11-l3-q2`,
          type: "mcq",
          stem: `Press the point the last question opened. Why does Aquinas insist Christ is Mediator precisely AS MAN, when the whole worth of the price came from His being God?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "As God He is simply one with the Father; only as man is He a mean between.",
                "feedback": "Respondeo: a mean must stand at a distance from each extreme, and as God, Christ does not differ from the Father and the Holy Ghost in nature or power. But as man He is distant from God by nature and from men by the dignity of grace and glory: the mean exactly (q.26 a.2). The two lessons meet here without collision: the PRICE takes its worth from the Person who is God; the OFFICE is exercised in the nature that is ours. One Christ, two natures, and the grammar of the tenth module earning its keep again."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the divinity withdrew during the Passion, leaving the manhood to conduct the mediation alone.",
                "feedback": "Nothing withdrew. The union is indissoluble, and what suffered was the divine Person in His human nature, as the communication of idioms taught you to say without flinching. A divinity that steps out for the difficult scenes is Nestorius's partnership wearing a stage door. The AS MAN clause distributes offices, not occupancy."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because sinners cannot survive unmediated contact with God, so a buffer had to be interposed.",
                "feedback": "That is the pagan picture, a god too hot to approach and middle beings to absorb the heat. Aquinas faced its refined version in the objection about angels and answered it: the good angels minister, but they cannot unite us to God principally, and no buffer was ever the point. God is not dangerous matter to be handled with tongs; He is the end to be reached, and the Mediator is the reaching, not the shielding."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because in the order of salvation the manhood ranks above the Godhead, being nearer to us.",
                "feedback": "Nearer to us it is; above the Godhead nothing is, and the sentence dissolves on inspection. The manhood is the instrument of the Godhead, as the last module said with Damascene: honored precisely as instrument, never promoted over the agent. Invert the ranks and you have a new religion with familiar vocabulary. The tradition keeps the ranks and gets the intimacy anyway, which is the better bargain."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t11-l3-q3`,
          type: "precision_check",
          stem: `A pamphlet from the other side of town: <em>"Since Christ is the sole Redeemer and sole Mediator, asking the saints or His Mother to pray for us insults Him."</em> Audit the inference.`,
          payload: {
            "statement": "Since Christ is the sole Redeemer and sole Mediator, asking the saints or His Mother to pray for us insults Him.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At sole: the Church knows many redeemers, each saving in his own measure.",
                "feedback": "You have repaired the sentence by demolishing the doctrine. Sole stands, and the course will spend two more lessons keeping it standing: only Christ was made a curse for us, only His blood is the price, and whoever pays with another's coin is not the chief redeemer (q.48 a.5). The pamphlet's premise is Catholic. It is the inference that leaks."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At insults: the practice is merely useless, not offensive, and should be retired quietly.",
                "feedback": "The same leak in a politer register. If the saints' intercession trespassed on the one Mediation, it would indeed offend; if it does not trespass, it is not useless but the Body working as designed. Trent chose its verbs against exactly this softness: it is good and useful suppliantly to invoke them. Quiet retirement is still surrender; the grammar deserves better."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At the inference: participations the Mediator Himself creates cannot insult Him; others mediate dispositively and ministerially, in Him.",
                "feedback": "Respondeo: Aquinas closes the gap in one sentence: nothing hinders certain others from being called mediators in some respect, forasmuch as they cooperate in uniting men to God, dispositively or ministerially (q.26 a.1). The sun is not insulted by windows. Asking a friend on earth to pray for you is the same grammar one floor down, and no one calls it blasphemy at a hospital bedside. Trent made the application explicit: it is good and useful suppliantly to invoke the saints and to have recourse to their prayers (Sess. 25 · DS 1821). Sole means no rival fountain. It never meant no channels."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing to correct: the Reformation drew the consequence honestly and the Church should concede it.",
                "feedback": "Honestly drawn, and drawn from half the doctrine. The Reformers kept sole and dropped participation, as if God's glory were a fixed sum that creatures could only embezzle. But the Catholic instinct runs the other way: the Giver is glorified in what His gifts can do, and a Mediator who makes intercessors of beggars is more sovereign, not less. Trent answered the consequence four centuries ago; the answer has not aged."
              }
            ],
            "correct_option_id": "c",
            "correction": "Christ alone redeems; those He joins to Himself share His mediation dispositively and ministerially, the way a window shares the sun (ST III q.26 a.1; Trent, Sess. 25 · DS 1821). Ask them boldly: the light they hand you is still His."
          },
        },
        {
          id: `t11-l3-q4`,
          type: "mcq",
          stem: `Hold the word steady and let it cut. What does SOLE actually exclude?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Any role for creatures anywhere in salvation: God acts, and we watch.",
                "feedback": "Too much knife. The grace module taught you operating AND cooperating grace: God does not save the free by suspending their freedom, and the justified truly merit, truly work, truly pray for one another. A sole that excluded creaturely cooperation would contradict the very economy the sole Redeemer set up. The exclusion is aimed elsewhere: at rivals, not at instruments."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Any independent source of grace beside Him: no parallel fountain, no second price.",
                "feedback": "Respondeo: exactly the fence. Every mediation that is real, of priests, of saints, of the Mother herself, is real the way a channel is real: wholly derived, wholly dependent, adding no second spring. The confession of 2026 says it with all its edges: appointed the sole Redeemer and Saviour of the world through the Incarnation and the voluntary offering of the Sacrifice of the Cross; therefore the sole Mediator between God and men and the sole way to come to the Father. Independence is the one thing no creature brings to this economy, and dependence, it turns out, is the one thing that scales."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The priests and prophets of the Old Law, who claimed a mediation that was never real.",
                "feedback": "They claimed less and had more than your sentence allows. Aquinas calls them mediators dispositively and ministerially: they foretold and foreshadowed the true Mediator, and their mediation was real as preparation is real (q.26 a.1). Figures are not frauds. The dawn does not lie about the sun."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The priesthood of the New Law, which Hebrews retires as obsolete along with the old sacrifices.",
                "feedback": "Hebrews retires the shadows, not the ministry. The priests of the New Law, Aquinas says in the same breath, are ministers of the true Mediator, administering the saving sacraments in His stead (q.26 a.1). What they hold is not a rival priesthood but His own, exercised through men; how that instrument works, whose hands are in whose, is a later module's whole subject. Sole excludes replacements. It employs ministers."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t11-l3-q5`,
          type: "true_false_with_reason",
          stem: `Paul to the Colossians: I fill up those things that are wanting of the sufferings of Christ, in my flesh, for his body, which is the church. Judge the inference: <em>so the sufferings of the saints add to the redemption what Christ's Passion lacked.</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "False: nothing was lacking to the price; what remains is the Body's share, applied, not augmented.",
                "feedback": "Respondeo: the Passion was superabundant, and superabundance leaves no deficit to top up; Lesson 2 closed that ledger. What is wanting is wanting in Paul's flesh, not in Christ's: the Head has suffered whole, and the Body now suffers its portion through history, the one mystic person completing in its members what the Head does not need but wills to share. Aquinas files the saints' sufferings under example and exhortation, not redemption (q.48 a.5): they profit the Church immensely and purchase nothing twice. Co-heirs, if we suffer with Him: the WITH is the whole theology."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "False: because the saints' sufferings are private misfortunes with no standing in the economy at all.",
                "feedback": "An overcorrection that throws out Paul with the error. His sufferings were FOR the body, which is the church; the apostle says so and means it. The grace module's widowed mother merited her son's conversion congruously, by the fittingness of friendship, and the saints' crosses work in that register constantly. No standing at all is not the answer; the answer is the right standing: fruit of the one price, never a second one."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "True: Paul writes wanting, and the plain sense of one apostle outweighs the systems of the schools.",
                "feedback": "The same apostle wrote one Mediator and gave Himself a redemption for all, and Scripture is not a knife fight between verses. The plain sense of wanting is fixed by asking what could possibly be lacking to an infinite satisfaction, and answering: nothing on the Head's side, everything on the Body's side that has not yet been suffered in time. Read Paul whole and the schools turn out to be his students, not his editors."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "True: the elect must each co-pay a fixed portion, and the saints pay ahead for the rest of us.",
                "feedback": "Salvation by installment plan, with the saints as the well-funded relatives. But grace is not a mortgage and the treasury is not a co-op. What the saints hand forward through the communion of the Church is real, and a later module will name the mechanisms; what they do not do is complete a purchase price, because completing the infinite is not even a coherent errand. The Redeemer paid; the redeemed share the paying's fruit and the paying's pattern."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t11-l3-q6`,
          type: "mcq",
          stem: `A confession of faith placed in a pope's hands in 2026 reads: <em>He is therefore the sole Mediator between God and men and the sole way to come to the Father.</em> The seventeenth module taught you to read an auctoritas closely. THEREFORE: after what?`,
          latin_tag: `unus mediator`,
          doctrine_line: `One Mediator, no rivals: every true mediation beside His is His own light through His own windows.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "After the four marks of the Church: her unity proves His unicity.",
                "feedback": "The marks appear later in the same confession, and they lean on this sentence rather than holding it up. Read the order of the document as you would read the order of a Summa article: what precedes the therefore is what grounds it, and what precedes it here is not ecclesiology. Go back one clause."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "After the Old Covenant's abolition: with the old way closed, He is the last way standing.",
                "feedback": "The abolition is confessed in the same breath, but as a consequence of the New and Eternal Covenant established in His blood, not as the argument for His mediation. A sole way by elimination would be a bleak sort of gospel: the last road open after the closures. The confession argues from fullness, not from vacancy."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "After the offering: sole Redeemer through the Incarnation and the Sacrifice, therefore sole Mediator and sole way.",
                "feedback": "Respondeo: the confession runs exactly so: appointed the sole Redeemer and Saviour of the world through the Incarnation and the voluntary offering of the Sacrifice of the Cross; Our Lord satisfied divine justice by shedding His Most Precious Blood; He is THEREFORE the sole Mediator between God and men (Declaration of Catholic Faith, Pagliarani to Leo XIV, 14 May 2026). The office rests on the work: mediation on redemption, the title on the price. Which is this lesson's whole architecture, met again in a living document: Lessons 1 and 2 were the grounds; this lesson was the therefore."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "After the missionary mandate: exclusivity keeps the message simple enough to preach everywhere.",
                "feedback": "You have run the document backwards. The mandate binds BECAUSE the way is one; the confession derives the urgency of preaching from the singleness of the way, never the singleness from the convenience of preachers. Simplicity is a fruit here, not a motive. Doctrine does not take marketing notes."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t11-l4`,
      num: `IV`,
      title: `The Mother of God`,
      latin: `Theotokos`,
      tag: `Theotokos`,
      fin: {
        tag: `Theotokos`,
        heading: `The grammar crowned.`,
        body: `The tenth module fought this title as a defense of the Son; this lesson turned it over and found the Mother's whole crown underneath. The union was made in the womb itself, so the birth is His and the maternity is real: she bore a divine Person, and from that single relation an almost infinite dignity flows, as Aquinas dared to put it. The tradition graded its honors to match the metaphysics: latria for God alone, dulia for His saints, hyperdulia for the woman nearer the fountain than any creature stands. Nestorius offered her a courteous discount and the Church declined on her behalf. Now the method is in your hands: every Marian truth is applied Christology, read off her relation to Christ, glorious precisely as derived. The next lesson takes the method to the furthest point back it can reach, the first instant of her existence, where a debate five centuries long waited for a pope to say the word preserved.`,
        distinction: {
          latin: `Theotokos`,
          english: `Mother of God`,
          gloss: `Because the union was made in the womb itself, the one born of Mary is the divine Person in His own flesh: she is truly Mother of God, and the divine maternity is the root of all her dignities and of her hyperdulia.`,
          motif: `the-grammar-crowned`,
        },
      },
      questions: [
        {
          id: `t11-l4-q1`,
          type: "mcq",
          stem: `Mothers bear whos, not whats. A council once spent itself on that grammar, and the tenth module watched it do so. Now turn the sentence around: what does the title Mother of God give MARY, beyond what it defends in her Son?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The root of every other honor she bears: her dignities grow from the divine maternity, not beside it.",
                "feedback": "Respondeo: the divine maternity is not one item on a list of privileges; it is the stem the list grows on. Aquinas goes as far as language allows: from the fact that she is the Mother of God, the Blessed Virgin has a certain infinite dignity, from the infinite good which is God (ST I q.25 a.6, the reply on whether God could make anything better). Everything the next two lessons will weigh, her conception, her cooperation, her titles, is priced from this relation. Get the root right and the branches stop looking like decorations."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A share in the Godhead itself, since what bears God must in some way be divine.",
                "feedback": "There is the mother-goddess move, and the Church has been refusing it since before your language existed. She is a creature: made, redeemed, finite, and the letter you are about to read denies in so many words that the Word's divinity took its beginning from her. The pagan pantheons promoted mothers; the Church did something stranger and kept a creature at the summit of creatures. The title elevates without divinizing, which no myth ever managed."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing beyond a courtesy: the title honors her Son and leaves her where it found her.",
                "feedback": "A relation to a divine Person is not a courtesy; it is the most load-bearing fact about her. Motherhood is a real relation, as the fourth module of this wing taught you relations can be real, and this one terminates in God the Son according to the flesh. A woman of whom God was born is not where anything found her. Minimalism here is not sobriety; it is a refusal to read what the grammar already signed."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Independence from her Son's grace, a mother's natural precedence over her child.",
                "feedback": "Run that by the Magnificat: my spirit hath rejoiced in God my SAVIOR. Her own mouth files her among the saved. The natural precedence of mothers is real and He honored it at Nazareth; the order of grace runs the other way, from Redeemer to redeemed, and she is its first and most perfect case, as the next lesson will show at the level of her very conception. She outranks every creature and depends on Him for the ranking."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t11-l4-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>So then he who had an existence before all ages and was born of the Father, is said to have been born according to the flesh of a woman, not as though his divine nature received its beginning of existence in the holy Virgin... but since, for us and for our salvation, he personally united to himself an human body, and came forth of a woman, he is in this way said to be born after the flesh; for he was not first born a common man of the Holy Virgin, and then the Word came down and entered into him, but the union being made in the womb itself, he is said to endure a birth after the flesh, ascribing to himself the birth of his own flesh. ... This was the sentiment of the holy Fathers; therefore they ventured to call the Holy Virgin, the Mother of God, not as if the nature of the Word or his divinity had its beginning from the Holy Virgin, but because of her was born that holy body with a rational soul, to which the Word being personally united is said to be born according to the flesh.</p><div class="cr-cite">St. Cyril of Alexandria, Second Letter to Nestorius, received by the Council of Ephesus, 431 · DS 251 · NPNF translation</div></div>Cyril says the Fathers VENTURED the title. What makes the venture safe?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The Virgin's own holiness: a mother so pure may bear any title the Church can coin.",
                "feedback": "Her holiness is real and the next lesson will measure it, but it is not this letter's ground. Cyril argues nothing from her merits and everything from her Son's identity; a Nestorian could grant her every virtue and still refuse the title, because the dispute was never about her quality. Read where the letter puts its weight: on the union, not on the bearer."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Poetic license: Theotokos is doxology, and doxology is not owed precision.",
                "feedback": "Then a council wasted a summer. The letter in front of you argues grammar with a jeweler's patience: not the nature, but the Person; not a man later joined, but the union in the womb itself. And Ephesus received the argument as doctrine, anathemas attached. When the Church sings, she means it; the tradition's poetry is load-bearing, which is why the enemies of doctrine always start by calling it poetry."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The union in the womb itself: she bore the Word united to His flesh; the birth is His.",
                "feedback": "Respondeo: the letter's own hinge: he was not first born a common man, and then the Word came down and entered into him, but the union being made in the womb itself, he ascribes to himself the birth of his own flesh (DS 251). Birth attaches to the person born, and the person born of Mary is the Word in the flesh He took from her. The fifth module's grammar has been waiting eleven modules for this sentence: mothers bear whos. She bore this Who. The venture is safe because it is simply the union, said of His mother."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The divinity taking its beginning from her, hedged by careful qualifications.",
                "feedback": "The letter denies exactly this, in so many words: not as though his divine nature received its beginning of existence in the holy Virgin. No hedge, no qualification, a flat denial. The title never claimed she originated the Godhead; it claimed she mothered the Person who possesses it eternally. Miss that distinction and both the heresy and the dogma become invisible at once."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t11-l4-q3`,
          type: "mcq",
          stem: `Nestorius offered a compromise title: Christotokos, Christ-bearer. Courteous, scriptural-sounding, and refused. From MARY'S side of the grammar, what would the compromise have cost her?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Merely a style of address: the fight was clerical vanity on both sides.",
                "feedback": "The tenth module already showed you the invoice on Christ's side: two sons, a partnership instead of an Incarnation. If the split were real, no one anywhere would be both God and born of woman, and the price of YOUR salvation changes, not just the honors list. Fights about grammar are fights about reality; this course exists because of that sentence."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Her real motherhood of a divine Person: she would be mother of God's associate, not of her Lord.",
                "feedback": "Respondeo: Christotokos concedes she bore a Christ joined to the Word, some way or other, and a mother of the joined-to is no Mother of God. The council refused her the lesser title to keep her the true one, because the one she bore is one Son, one who, divine and born. Notice the pattern the whole wing keeps showing you: guard the union and every honor follows; loosen it and everything, including hers, quietly deflates.<span class=\"condemned\">Nestorianism &middot; condemned, Council of Ephesus, 431 &middot; DS 251-252</span>"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing for her: Mariology and Christology are separate files, and only His file was at stake.",
                "feedback": "The lesson exists to burn the folder divider. Her first title was defined at a Christological council because the files were never separate: what you may call the mother is fixed by who the Son is, and who the Son is shows in what you may call the mother. Applied Christology, the blueprint calls Mariology, and Ephesus is the application in the original hand."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Her virginity, which the compromise title implicitly denied.",
                "feedback": "Different doctrine, different fight. Her perpetual virginity was confessed before and after Ephesus and Christotokos never touched it; a title about WHOM she bore says nothing about HOW. Keep the dossiers straight: the council adjudicated maternity's object, not its manner. The manner has its own confessors and its own history, for another hour."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t11-l4-q4`,
          type: "fill_blank",
          stem: `Set Cyril's grammar in stone. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">She is called Mother of God, not because the <span class="fb-blank" data-blank="b1">______</span> of the Word began from her, but because from her was born the holy <span class="fb-blank" data-blank="b2">______</span>, animated by a rational soul, to which the Word was united in <span class="fb-blank" data-blank="b3">______</span>; and since mothers bear <span class="fb-blank" data-blank="b4">______</span>, not natures, the Son she bore is God.</span>`,
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
                  "body"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "person"
                ],
                "case_sensitive": false
              },
              {
                "id": "b4",
                "correct_answers": [
                  "persons"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "nature",
              "body",
              "person",
              "persons",
              "essence",
              "natures",
              "dignity",
              "titles"
            ],
            "feedback": {
              "all_correct": "Locked: nature, body, person, persons. The whole of Ephesus in one breath, and every word of it is the fifth module's metaphysics doing dogmatic work. The union is personal, hypostatic, made in the womb itself; so the birth belongs to the Person, and the mother of that Person is Mother of God (DS 251). The taxpayer from the old lesson has become a Christmas doctrine: acts, births, and mothers all attach to the who.",
              "partial_correct": "Some stones resisted. Sort by office: what did NOT begin from her is the divine nature; what WAS born of her is the holy body; the union is in person, not in nature; and mothers bear persons. Run the audit again with the fifth module's grammar in hand."
            }
          },
        },
        {
          id: `t11-l4-q5`,
          type: "true_false_with_reason",
          stem: `Judge: <em>the title Mother of God, rightly understood, honors the Son before it honors the Mother.</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "True: because Mary needs no honor, and the Church intends her none by it.",
                "feedback": "Right verdict, false economy. The Church intends her enormous honor by it; the honor is real, owed, and paid in every Ave. What the verdict turns on is order, not exclusion: the title honors her BECAUSE of what it confesses about Him. Protect the priority without inventing a Church too stingy to honor the woman all generations shall call blessed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "False: a title belongs to its bearer, and this one is hers, full stop.",
                "feedback": "Hers it is; full stop it is not. The title is hers precisely as a relation, and relations are read from both ends: Mother OF GOD. Ephesus fought for the second half, and her glory is that the second half is true. A jewel is truly the queen's without ceasing to be praised chiefly for the stone in it. Grammar again, doing all the work."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "True: it confesses who her Son is; her honor, hyperdulia, flows from that and stays beneath adoration.",
                "feedback": "Respondeo: the title is a Christological confession that crowns her in the confessing. The tradition even built the grammar of honors to match: latria, adoration, for God alone; dulia, veneration, for the saints; and for her, hyperdulia, a veneration above every saint and infinitely beneath adoration, because the divine maternity puts her nearer the Author of grace than any other creature stands. Honor ordered this way cannot compete with worship; it is worship's echo in the highest of the redeemed."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "False: the Church has quietly retired the title in favor of safer language.",
                "feedback": "Check the second half of any Hail Mary said tonight: Holy Mary, Mother of God, pray for us sinners. The title is prayed hourly on every continent, defined at Ephesus, and renewed every time the Church opens her mouth. Whatever your sentence describes, it is not this Church. Options should be eliminable only by thought, but the tradition permits itself one freebie per module."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t11-l4-q6`,
          type: "mcq",
          stem: `The blueprint of this wing calls Mariology applied Christology. Say precisely what that means for everything still ahead: her conception, her cooperation, her titles.`,
          latin_tag: `Theotokos`,
          doctrine_line: `Theotokos: mothers bear persons, and the Person she bore is God. Every honor she carries grows from this root.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Every Marian truth is read off her relation to Christ; the derivation is her glory, not diminishment.",
                "feedback": "Respondeo: the council's order, kept for good: the Son fixes what may be said of the mother, and everything true of her is true because of Him: Theotokos from the union, the Immaculate Conception from His merits applied in advance, the cooperation from His grace making cooperators. Derived is not diminished; a moon that owns no light still rules the night. And the derivation cuts the other way too: touch her titles and you have touched His identity, which is why the Church guards Mariology like a border province. The next lesson tests the method on the hardest case."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Church needed a maternal figure, and Christology supplied respectable credentials for one.",
                "feedback": "Sociology of religion, wearing the lesson's vocabulary. It cannot survive the documents: Ephesus argues metaphysics, not demographics, and the title was defended by exiles who gained nothing from market research. Whether religions tend to enthrone mothers is a question for a different faculty; whether THIS mother bore God is settled by who her Son is. The credentials were never the need; they were the fact."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Mariology launches from Christology, then floats free: the rest is devotion's own invention.",
                "feedback": "Nothing here floats free; that is the whole discipline of the thing. Watch the next lesson do it again in public: a dogma about her conception anchored, inside its own defining formula, to the merits of Jesus Christ the Savior of the human race. Devotion embroiders, granted, and the Church prunes the embroidery on schedule. The dogmas themselves stay anchored, every one, to Him. Applied Christology is a method, and the method never retires."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The phrase is for theologians only; the faithful may hold Marian doctrine as licensed poetry.",
                "feedback": "The faithful pray it as fact, which is more than most theologians manage before breakfast. Mother of God in the Ave is not a metaphor with an imprimatur; it is the Creed's own logic addressed to a person. The old rule runs lex orandi, lex credendi: the law of prayer is the law of belief, and it binds the pews and the faculties alike. Poetry with a license is exactly what Cyril refused to settle for."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t11-l5`,
      num: `V`,
      title: `Conceived Without Stain`,
      latin: `Immaculata Conceptio`,
      tag: `Immaculata Conceptio`,
      fin: {
        tag: `Immaculata Conceptio`,
        heading: `Caught before the fall.`,
        body: `The pit image held all the way down. She owes the Rescuer more, not less, having been caught before the fall by the merits of a Cross her whole life preceded: preservative redemption, the more perfect mode, defined in 1854 with the dependence written into the formula itself. The story behind the formula is the magisterium's self-portrait: Thomas hesitating for the sake of universal redemption, Scotus distinguishing for the sake of the privilege, Rome guarding the fight for five centuries and then harvesting both, the principle from one school, the mechanism from the other. Baius tested the fence and was condemned; Trent had already stepped around her on its way to defining the common inheritance. And Pius X, fifty years on, showed the dogma working as a load-bearing wall: confess her Conception and you have confessed the Fall, the Redeemer, and sovereign grace in one breath. In 1950 the same pattern rhymed once more, a definition crowning long centuries of the Church's faith, and she arrived whole where the course itself is headed. One question remains, the most delicate in the wing: what did she DO in the work her Son did alone? The last lesson before the recap holds the scales.`,
        distinction: {
          latin: `Immaculata Conceptio`,
          english: `the Immaculate Conception`,
          gloss: `Mary, in the first instant of her conception, by singular grace and privilege, in view of the merits of Jesus Christ, was preserved free from all stain of original sin: redeemed more perfectly, by preservation.`,
          motif: `caught-before-the-fall`,
        },
      },
      questions: [
        {
          id: `t11-l5-q1`,
          type: "mcq",
          stem: `A man is pulled from a pit he fell into. His sister is caught by the same rescuer in the instant before she would have fallen. Which of the two owes the rescuer more?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The brother: a real fall makes a real rescue, and hers is honorary at best.",
                "feedback": "Count what she owes: not only the climb out, which she never needed, but the whole fall she never took, the bruises never suffered, the years never lost at the bottom. Preservation is not rescue's honorary degree; it is rescue operating at full power, before the harm instead of after it. The physician who prevents the disease has not done less than the one who cures it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Neither owes anything: rescue is a gift, and gifts create no debts.",
                "feedback": "Gratitude is a debt, the happiest kind, and the grace module taught you an economy where God's gifts really do found claims and thanks without ceasing to be gifts. Flatten every debt of gratitude and the Magnificat becomes inexplicable: her soul magnifies the Lord precisely as one who has received. The question is not whether the two owe, but who owes for more."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The sister, if anything: preserved by the rescue from ever falling, she is its most perfect fruit.",
                "feedback": "Respondeo: and you have just performed Scotus's move a lesson before being told its name. To preserve from falling is the more excellent way of rescuing, so the perfect Redeemer fittingly redeems His mother in the more excellent way: this is the Immaculate Conception, <em>Immaculata Conceptio</em>, glossed plainly: Mary preserved from original sin from the first instant, by the merits of her Son applied in advance. Not exempted from redemption; redeemed better. Hold the pit image; the rest of the lesson is its paperwork."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The question is confused: only an actual fall can be the object of a rescue.",
                "feedback": "That confusion is precisely the knot the schools took five centuries to cut. If rescue requires a prior fall, then a preserved Mary is an unredeemed Mary, and the universal Redeemer has an exception standing next to His cross. The cut, when it came, was a distinction: preservative redemption is redemption, the debt met before it fell due. Watch this lesson show you who hesitated at the knot, who cut it, and who sealed the cutting."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t11-l5-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>We declare, pronounce, and define that the doctrine which holds that the most Blessed Virgin Mary, in the first instance of her conception, by a singular grace and privilege granted by Almighty God, in view of the merits of Jesus Christ, the Savior of the human race, was preserved free from all stain of original sin, is a doctrine revealed by God and therefore to be believed firmly and constantly by all the faithful.</p><div class="cr-cite">Bl. Pius IX, Ineffabilis Deus, 8 December 1854 · DS 2803</div></div>One clause keeps this dogma inside the last lesson's sole Redeemer. Which?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "In view of the merits of Jesus Christ: her preservation is His Passion applied in advance.",
                "feedback": "Respondeo: the anchoring clause, written into the definition itself so that no one could ever quote the dogma without quoting its dependence. The merits priced in Lesson 2 reach backward here: the sole fountain, opened at the earliest possible channel. She is not the exception to the Redemption but its masterpiece, the one case where the medicine arrived before the wound. Applied Christology, executing exactly as the last lesson promised: even her first instant is read off her relation to Him."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Singular grace and privilege: the uniqueness fences off any rivalry with Him.",
                "feedback": "Singular does real work: it tells you no one else, not John the Baptist, not the saints, holds this privilege, and so blocks the slide from privilege to precedent. But a fence around WHOM says nothing about FROM WHERE. A singular gift could, grammatically, have come from anywhere; the clause that names its source, and so bolts the dogma to the Redeemer, is elsewhere in the sentence."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "First instance of her conception: the timing is the safeguard.",
                "feedback": "The timing states the marvel: not cleansed early, not sanctified in the womb like the Baptist, but preserved from the first instant, so that there was never a moment of stain. Marvels, though, are not safeguards. Push the timing back as far as you like and the question WHO PAID still stands open. The clause that answers it is the one the Pope threaded through the middle of the definition."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "To be believed firmly and constantly: obedience settles what argument cannot.",
                "feedback": "That clause binds believers; it does not ground the doctrine. The definition binds because the doctrine is revealed by God, and the following paragraph adds the old shipwreck warning for those who would think otherwise (DS 2804). But authority here is sealing an anchor already set: the dogma leans on the merits clause, not on the binding clause. The seventeenth module taught you to keep warrant and ground distinct; do it here."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t11-l5-q3`,
          type: "mcq",
          stem: `Now the story, told without embarrassment. St. Thomas hesitated: if she never contracted the stain, how is she among the redeemed whom Christ saves? Scotus answered with a distinction: to preserve is the more perfect way to redeem. Rome watched the schools argue for centuries, then defined in 1854. What does the sequence teach about how the magisterium settles a question?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That Thomas was refuted, and this course's allegiance to him properly ends at this lesson.",
                "feedback": "He was answered, not disgraced, and the difference matters to everything this course is. His scruple, that she must be truly redeemed or the Redeemer is not universal, is INSIDE the definition: in view of the merits is Thomas's principle, honored in the very formula (his treatment of her sanctification stands at ST III q.27, taught here by name). He guarded the truth the dogma keeps; Scotus supplied the distinction that lets both truths stand. A house that cannot say its master hesitated is a cult, not a school."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That Scotus outranks Thomas whenever a Franciscan reading suits the reigning pope.",
                "feedback": "The cynic's church history, and it cannot survive the dates: popes of every formation let the dispute run for five centuries, Dominicans defended the feast while their school hesitated at the formula, and the definition adopted a DISTINCTION, not a party. When Rome finally spoke, it spoke Scotus's mechanism wrapped around Thomas's principle. If that is factional triumph, it is the strangest one on record: both schools are quoted by the result."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That doctrine gets invented when devotion demands it loudly and long enough.",
                "feedback": "Invention is the one move the sequence rules out. The datum was ancient: all fair, no stain, the Fathers' Eve-parallel, the feast kept for a thousand years; what the centuries added was not new revelation but new precision about what had been handed down, the development of doctrine working at its ordinary pace. The Church that waited five hundred years for a distinction is many things; suggestible is not one of them. Novelty is what the definition excluded, not what it enacted."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That Rome lets the schools fight, harvests the best distinction, and defines when the Church's faith is ripe.",
                "feedback": "Respondeo: the fair fight inside the wall, adjudicated by the wall's own keeper. The schools argued in earnest, Thomas guarding universal redemption, Scotus offering the preservative mode; Rome protected the debate, forbade the parties to anathematize each other, and defined only when the sensus fidelium, the Fathers, and the theology had converged. Set it beside the ninth module's story: on grace, Rome refused to define and left both schools standing; on this, Rome defined. Same magisterium, two verdicts, one method: the deposit guarded at the pace of certainty, not of enthusiasm."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t11-l5-q4`,
          type: "true_false_with_reason",
          stem: `A century after Trent, a Louvain doctor argued: <em>no one but Christ is without original sin; hence the Blessed Virgin died on account of the sin contracted from Adam.</em> Judge it with the dogma in hand.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "False: she never died at all, having been exempt from every consequence of Adam.",
                "feedback": "Overcorrected past the deposit. Her freedom from the stain is defined; her freedom from death is not, and the Church, defining her Assumption in 1950, chose its words to leave the question of her death open (Munificentissimus Deus &middot; DS 3903: having completed the course of her earthly life). The Redeemer Himself died, sinless, freely; death embraced without debt is not evidence of stain. Guard the dogma without decorating it; the decorations are where the next error nests."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "False: the proposition was condemned; her preservation is Christ's merit applied, not a breach in His uniqueness.",
                "feedback": "Respondeo: the sentence is Baius's seventy-third proposition, censured by St. Pius V three centuries before Pius IX defined the dogma it denied.<span class=\"condemned\">Baius, prop. 73 &middot; condemned, St. Pius V, Ex omnibus afflictionibus, 1567 &middot; DS 1973</span>The logic you have already learned dissolves it: NO ONE BUT CHRIST is without original sin BY NATURE OR BY RIGHT; she is without it by singular privilege, in view of His merits, which makes her preservation a triumph of His uniqueness rather than a breach in it. Trent had even left the door marked: its decree on original sin declares it does not intend to include the blessed and immaculate Virgin (Sess. 5 &middot; DS 1516)."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "True: Pius V censured the proposition, but censures govern conduct, not belief.",
                "feedback": "A censure that governed only conduct would be a curious instrument against a proposition, which is a thing believed. The condemnation of Baius's theses bound the intellect then and stands ratified by the later definition now: what he asserted, the Church defined to be false. You may not keep a condemned sentence as a private opinion while behaving politely about it; that arrangement has a name in the anti-Modernist corpus, and the course was built inside the wall that excludes it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "True: death entered by sin; she died; therefore she sinned in Adam.",
                "feedback": "The syllogism proves too much: the Sinless One died on Calvary, so death without personal or original debt is demonstrably possible, and the middle term collapses. Whether she in fact died the Church has declined to define; that IF she died it was as her Son did, freely and without debt, follows from the dogma itself. Baius's inference runs the causality backwards, from the common penalty to a guilt the definition excludes. Distinguish, and the argument disarms in your hand."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t11-l5-q5`,
          type: "mcq",
          stem: `Fifty years after the definition, a pope argued that this dogma is strategically load-bearing for the whole faith. What does confessing the Immaculate Conception force a mind to confess with it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That original sin is less serious than preached, since one of us escaped it.",
                "feedback": "Backwards: the exception proves the severity. If the stain were light, no singular grace and privilege would be needed to escape it; the very machinery of the exemption, a divine intervention at the first instant, in view of an infinite merit, measures how total the common inheritance is. Fortresses are not built against dust. The dogma is original sin's most emphatic witness, not its discount."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nothing beyond itself: it is a private devotion promoted to doctrine, self-contained.",
                "feedback": "Pius X argued the exact opposite in Ad Diem Illum: he watched the century's errors and found this dogma standing in their road. A doctrine that entails the Fall, the Redeemer, and the supernatural order is the least self-contained sentence in the Creed's neighborhood. Nothing in the deposit is a cul-de-sac; the wing keeps demonstrating that, module by module."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That human nature at its best does not really need grace.",
                "feedback": "She is not nature at its best; she is GRACE at its best, and the difference is the whole lesson. Her preservation was not an achievement of unusually good stock but a singular grace and privilege of Almighty God, the definition says so in those words. Read her as nature's triumph and you have rebuilt Pelagius with a Marian facade; the grace module's foundations forbid it.<span class=\"condemned\">Pelagianism &middot; condemned, Councils of Carthage and Orange II, 418 and 529</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The Fall, the Redeemer, and grace, in one breath: deny them and her Conception has nothing to mean.",
                "feedback": "Respondeo: Pius X's own argument: let people believe and confess that the Virgin Mary has been preserved from the first moment of her conception, and it is straightway necessary that they admit both original sin and the rehabilitation of the human race by Jesus Christ (Ad Diem Illum, 1904). Preserved FROM what? The Fall is confessed. Preserved BY what? His merits are confessed. Preserved AS what? Grace, gratuitous and sovereign. Rationalism, he concluded, is torn up by the roots. One Marian sentence carries half the Creed as freight; that is what applied Christology means when it works."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t11-l5-q6`,
          type: "fill_blank",
          stem: `The defining formula, set in stone as the Church set it. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">In the <span class="fb-blank" data-blank="b1">______</span> instance of her conception, by a <span class="fb-blank" data-blank="b2">______</span> grace and privilege granted by Almighty God, in <span class="fb-blank" data-blank="b3">______</span> of the <span class="fb-blank" data-blank="b4">______</span> of Jesus Christ, the Savior of the human race, she was preserved <span class="fb-blank" data-blank="b5">______</span> from all stain of original sin.</span>`,
          latin_tag: `Immaculata Conceptio`,
          doctrine_line: `Preserved, not exempted: the Immaculate Conception is the Redemption arriving first, in view of the merits of her Son.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "first"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "singular"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "view"
                ],
                "case_sensitive": false
              },
              {
                "id": "b4",
                "correct_answers": [
                  "merits"
                ],
                "case_sensitive": false
              },
              {
                "id": "b5",
                "correct_answers": [
                  "free"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "first",
              "singular",
              "view",
              "merits",
              "free",
              "second",
              "common",
              "spite",
              "works",
              "safe"
            ],
            "feedback": {
              "all_correct": "Locked, clause by clause: first instance, singular privilege, in view of the merits, preserved free (DS 2803). Every stone bears weight: FIRST leaves no stained instant, SINGULAR fences the privilege, IN VIEW OF THE MERITS bolts it to the Redeemer, PRESERVED names the more perfect mode. And the paragraph that follows in the Bull adds the old maritime warning: to think otherwise is to have suffered shipwreck in the faith (DS 2804). Definitions are anchors; this one was five centuries in the forging.",
              "partial_correct": "Some clauses slipped. Rebuild from the logic: the timing is FIRST, the fence is SINGULAR, the source is IN VIEW OF THE MERITS, the mode is PRESERVED FREE. Each answers one of the lesson's questions; misplace one and a different doctrine appears."
            }
          },
        }
      ],
    },
    {
      id: `t11-l6`,
      num: `VI`,
      title: `Associated, Not Equal`,
      latin: `socia Redemptoris`,
      tag: `socia Redemptoris`,
      fin: {
        tag: `socia Redemptoris`,
        heading: `The scales, held steady.`,
        body: `The wing's most delicate weighing, done in public with the Church's own weights. On one pan, everything denied: no productive power of grace, no second price, no co-payment, no gentler judge behind the Judge. On the other, everything affirmed: consent given in the place of the whole human nature, companionship in the suffering, merit de congruo answering His de condigno, ministry over the distribution of what His Death alone filled, association direct and intimate with the entire work, in the terms received from Tradition. The title question stays at its actual rank, used, disputed, undefined, and the course leaves it exactly there, because never closing what Rome leaves open is not timidity but obedience. Why any of it, when the price was whole without her? Because divine wisdom loves to give creatures the dignity of causing, and she is that love's masterpiece: the first of the redeemed, cooperating in the redemption, everything received, everything returned. Now gather the whole module; the recap is waiting, and it ends at a nest.`,
        distinction: {
          latin: `socia Redemptoris`,
          english: `associate of the Redeemer`,
          gloss: `Mary's cooperation in the Redemption: real, direct, and intimate by divine decree, yet wholly subordinate and derived: no productive power of grace, merit de congruo not de condigno, ministry of distribution over a treasury that is exclusively the fruit of His Death.`,
          motif: `scales-held-steady`,
        },
      },
      questions: [
        {
          id: `t11-l6-q1`,
          type: "mcq",
          stem: `An angel stands in a room in Nazareth, and heaven's embassy waits on a girl's answer. Two generations from the apostles, Irenaeus fixed the parallel for good: the knot of Eve's disobedience was untied by Mary's obedience. What is the tradition claiming her fiat WAS?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A private act of devotion that God graciously chose to notice and record.",
                "feedback": "Private is the one thing the scene refuses to be. The angel does not inform her of a decision already executed; he proposes, and waits. Aquinas reads the waiting as the whole point: the Annunciation sought her consent so that the Incarnation would enter by a freedom, not over one. A recorded devotion would make Gabriel a court stenographer. He was an ambassador, and ambassadors wait on answers that matter."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Real cooperation: consent given freely, in the place of the whole human nature, at the Redemption's threshold.",
                "feedback": "Respondeo: Aquinas says it in those very terms: the Annunciation awaited her consent IN THE PLACE OF THE WHOLE HUMAN NATURE, <em>loco totius humanae naturae</em> (ST III q.30 a.1, taught by name). Her yes was not the hinge God depended on; it was the hinge God freely chose to turn on, so that our nature would say yes to its own rescue in her mouth. Irenaeus's knot-image is the same doctrine in thread: obedience untying what disobedience tied. This is the association at its first instant, and it is already cooperation, not spectating."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Strictly necessary: without her yes, the plan of salvation had no way forward.",
                "feedback": "The first lesson's grammar forbids the move: nothing corners God, and a fiat extracted by necessity would be no fiat at all. Her consent was freely given and freely waited for, but the waiting was itself God's choosing, not God's predicament. Say fitting, say chosen, say honored; do not say trapped. The economy runs on gift at every joint, including this one."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A narrative flourish: where omnipotence acts, a creature's consent can add nothing real.",
                "feedback": "The ninth module spent seven lessons on why that sentence is false: God moves free wills freely, and the motion's being His does not make the consent less hers. Her fiat adds nothing to omnipotence and everything to the manner of its arrival, which is precisely what wisdom cares about. Erase the consent as decoration and you have erased the whole Catholic account of grace, which is a large casualty for one flourish."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t11-l6-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>It cannot, of course, be denied that the dispensation of these treasures is the particular and peculiar right of Jesus Christ, for they are the exclusive fruit of His Death, who by His nature is the mediator between God and man. Nevertheless, by this companionship in sorrow and suffering between the Mother and the Son, it has been allowed to the august Virgin to be the most powerful mediatrix and advocate of the whole world with her Divine Son. ... We are then, it will be seen, very far from attributing to the Mother of God a productive power of grace - a power which belongs to God alone. Yet, since Mary carries it over all in holiness and union with Jesus Christ, and has been associated by Jesus Christ in the work of redemption, she merits for us de congruo, in the language of theologians, what Jesus Christ merits for us de condigno, and she is the supreme Minister of the distribution of graces.</p><div class="cr-cite">St. Pius X, Ad Diem Illum Laetissimum, 1904 · DS 3370</div></div>The Pope stacks a denial and an affirmation in one paragraph. Which pair?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Denies her holiness exceeds the saints'; affirms her equality among them.",
                "feedback": "Read the clause again: she carries it over all in holiness and union with Jesus Christ. Over all is not equality; it is the hyperdulia of the fourth lesson stated as fact. The paragraph's denial aims elsewhere entirely, at a power no creature holds. Find the sentence with ALONE in it; papal paragraphs put their fences where the wolves are."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Denies Christ's exclusive right to the treasury; affirms a shared title over it.",
                "feedback": "Precisely inverted: the paragraph OPENS by securing the exclusive right: the particular and peculiar right of Jesus Christ, the exclusive fruit of His Death. Nothing in what follows repeals the opening; the nevertheless builds on it. A shared title is what the paragraph exists to rule out while still saying everything else it says. That is why it is worth reading slowly."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Denies theologians any voice in the matter; affirms devotion as the only measure.",
                "feedback": "He quotes the theologians' own vocabulary with a courteous attribution: de congruo, in the language of theologians. The paragraph is a masterclass in letting the schools supply precision to devotion and devotion supply warmth to the schools. Nobody is dismissed; everybody is put in order. Which is, incidentally, the method of this entire course."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Denies her any productive power of grace; affirms association, merit de congruo, and ministry of distribution.",
                "feedback": "Respondeo: the exact weighting, executed in public. DENIED: productive power of grace, which belongs to God alone; she is no source. AFFIRMED: associated by Jesus Christ in the work of redemption; meriting for us de congruo what He merits de condigno; supreme Minister of the distribution. Every affirmation is relational and derived; every clause bows to the fountain it draws from. And note the register of her merit: the grace module's widowed mother, meriting congruously for her son by the fittingness of friendship, was the scale model. Here is the full-size case, at the foot of the Cross."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t11-l6-q3`,
          type: "precision_check",
          stem: `A well-meant devotional sentence, put to the audit: <em>"Mary contributed her share of the price of our redemption, so that Christ's payment and hers together purchased our salvation."</em>`,
          payload: {
            "statement": "Mary contributed her share of the price of our redemption, so that Christ's payment and hers together purchased our salvation.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At together: her cooperation is wholly from His merits, adding no second payment to an infinite price.",
                "feedback": "Respondeo: there is the leak, and it is arithmetical before it is theological. An infinite price leaves nothing for a second contributor to top up; Lesson 2 closed that ledger. Her association is real, intimate, and unique, but it operates entirely INSIDE His payment: enabled by His grace, meriting congruously what He merited condignly, cooperating in the application of a redemption she is herself the first fruit of. TOGETHER, said of two payers, makes her a co-fountain. The tradition's word is finer: associated, <em>socia</em>: joined to the Redeemer, not added to the price."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At price: redemption should never be spoken of in commercial figures at all.",
                "feedback": "Scripture will not sign your amendment: you are bought with a great price, redeemed not with gold or silver but with precious blood. The purchase-figure is apostolic and the course keeps it, weighed as the fourth lesson of the first module taught you to weigh figures. The pamphlet's trouble is not the metaphor; it is the arithmetic performed inside the metaphor. Keep the figure, fix the sum."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At her share: she had none, and association is an honorary word for proximity.",
                "feedback": "Now the fence has fallen on the other side. A living confession of the faith states it plainly: by divine decree she has been directly and intimately associated with the entire work of Redemption, and to deny this association, in the terms received from Tradition, is to alter the very notion of Redemption as willed by divine Providence. Her fiat, her compassion at the Cross, her congruous merit: real cooperation, really hers. Proximity is what the beloved disciple had; she had an office. Deny it and you have not protected the Redeemer, you have edited His plan."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing to correct: generosity toward the Mother can only honor the Son.",
                "feedback": "Generosity by addition dishonors both parties: it makes His payment partial and her role parasitic on the shortfall. The true honor runs the other way, as this lesson's Pope showed: deny her any productive power of grace, and then say everything else without fear. She is more glorious as the masterpiece of the Redemption than as its junior partner; a co-payer is smaller than a perfectly redeemed cooperator. In this territory, precision IS the devotion."
              }
            ],
            "correct_option_id": "a",
            "correction": "By divine decree she is directly and intimately associated with the entire work of Redemption, in the terms received from Tradition (Declaration of Catholic Faith, 14 May 2026): subordinately, by His gift, from His merits, adding nothing to their sufficiency and receiving everything from it (Ad Diem Illum · DS 3370)."
          },
        },
        {
          id: `t11-l6-q4`,
          type: "dialogue_branch",
          stem: `Lunch, two desks over. A colleague you like, serious about his Bible, sees the rosary in your bag: "Help me understand. You seem reasonable. Jesus said come to ME. Why would you pray to Mary?"`,
          payload: {
            "branches": [
              {
                "text": "\"Honestly, it's mostly meditation. The Mary part is more cultural than doctrinal.\"",
                "feedback": "Peace purchased by pawning the doctrine. The invocation of the saints is not a cultural garnish; Trent called it good and useful, and the whole grammar of participated mediation stands behind it. You have also quietly confirmed his suspicion that the practice cannot be defended, which is neither true nor kind. He asked a real question; he deserved the real grammar."
              },
              {
                "text": "\"I don't pray to her instead of Him. I ask her to pray for me, the way I'd ask you, except she's sinless and sees her Son face to face. Every grace she hands me is His; the one Mediator is her Redeemer too.\"",
                "feedback": "Respondeo: the grammar, whole, in three sentences. TO her, never INSTEAD of Him: the asking runs on the same rails as any request for a friend's prayers, one floor up; her mediation is ministerial, inside His, and the treasury she distributes from is exclusively His Death's fruit. You even paid the doctrine's tollbooth: she is redeemed, most perfectly of all. If he follows up, you have Ephesus, a definition of 1854, and a paragraph of Pius X in your pocket, and none of it needed a raised voice.",
                "verdict": "correct"
              },
              {
                "text": "\"Refusing her insults the King. You don't walk past the Queen Mother to see the King. Careful.\"",
                "feedback": "You have answered a question about grammar with a threat about protocol, and the court-etiquette image, whatever its devotional charm, concedes his actual worry: that Catholics route around Christ through more approachable royalty. His concern was for the unique Mediator; honor that concern first, from First Timothy, and THEN show how her intercession lives inside it. Winning the exchange while confirming the caricature is a loss with good posture."
              },
              {
                "text": "\"Because she understands us better. He's the Judge; she's the mercy that gets things past Him.\"",
                "feedback": "That is the good-cop heresy, and it divides the Heart of the Redeemer down the middle. He IS mercy; the Cross of Lessons 1 and 2 was mercy's own arithmetic, and her advocacy rides His love, never routes around it. Pius X denied her any productive power of grace in the same breath that crowned her Minister of its distribution. A Mary who outflanks her Son's justice is not the Church's Mary; she is a projection of our fear, and fear is the one thing the actual doctrine retires."
              }
            ],
            "commentatorLine": "The Commentator has attended this lunch every century since the sixteenth. The napkin-folded surrender, the throne-room threat, the good-cop theology: he has watched each one fail. The three quiet sentences with the grammar intact are the only version he has ever seen produce a second conversation."
          },
        },
        {
          id: `t11-l6-q5`,
          type: "true_false_with_reason",
          stem: `Judge, with the full weighing-kit of this lesson: <em>the Church has defined that Mary is to be invoked under the title Co-redemptrix.</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "False: because the idea behind the title is an excess the Church has always discouraged.",
                "feedback": "Wrong reason, and it surrenders real doctrine. The idea behind the title, her unique association in the work of Redemption, is not an excess; you have spent a lesson establishing it from a pope's own pen and a living confession. What has NOT been done is the dogmatic definition of the title itself. Distinguish the doctrine from the vocabulary and both halves of the sentence come apart cleanly."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "True: popes have used the word, and papal usage is definition enough.",
                "feedback": "The seventeenth module's grammar of authority answers this: usage, even papal usage, gives a term standing in the Church's vocabulary; definition is a distinct and solemn act, and it has not been performed here. Many venerable words live their whole lives at that rank. Promote usage to definition and you would have dogmatized half the devotional literature of Christendom by breakfast, which no one, least of all the popes, intends."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "False: the association is doctrine; the title has papal usage, no definition, and disputed fitness.",
                "feedback": "Respondeo: exactly weighted, which in this territory is the whole exam. Defined: nothing, regarding the title. Doctrine held and taught: her direct and intimate association with the entire work of Redemption, in the terms received from Tradition. Disputed among serious Catholics: whether this particular word serves or obscures that doctrine, since CO can whisper parity to modern ears while the tradition means wholly subordinate cooperation. The course's rule, learned at the ninth module's disputation, applies: never close a question Rome has left open, in either direction. Transmit the doctrine exactly; hold the vocabulary at its actual rank."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "True: the defining clause of Ineffabilis Deus itself employs the title.",
                "feedback": "You memorized that clause one lesson ago; recite it and the option dissolves: first instance, singular grace, in view of the merits, preserved free. No such title appears in it, nor in the definition of 1950. The check took ten seconds and a memory you already own, which is why the course made you memorize it. Definitions are citable or they are not definitions."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t11-l6-q6`,
          type: "mcq",
          stem: `Last question before the recap, and the deepest: WHY does God will association at all? The price was infinite and His. Nothing needed help. Why is there a socia in this economy?`,
          latin_tag: `socia Redemptoris`,
          doctrine_line: `Associated, not equal: from His merits, under His mediation, she cooperates in the whole work; the channel glorifies the fountain.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because the Redemption needed reinforcement at its one weak point, the human response.",
                "feedback": "Nothing needed reinforcement; the superabundance of Lesson 2 has no weak points, and the human response is itself carried by grace, as the whole grace module established. Need-language will always misprice this mystery. The question is not what the work lacked but what the Worker loves, and the answer to that has been visible since creation itself: He loves to give His causes causes."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Sentiment: religions keep mothers near the altar, and Christianity obliged the pattern.",
                "feedback": "Comparative religion can catalog the pattern; it cannot produce this doctrine, which is fenced on every side by distinctions no myth bothers with: no productive power of grace, merit congruous not condign, ministry not source. Sentiment builds goddesses; the Church spent nineteen centuries refusing to. What stands at the altar's side is stranger than the pattern: a redeemed creature cooperating by pure gift. Myths are easier; that is how you know this is not one."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "To give the devout a gentler judge standing behind the strict one.",
                "feedback": "The good-cop error, met at lunch an hour ago and no truer at the second serving. There is one Judge, and He is the same Person who bled for the defendants; gentleness is not outsourced in this economy. Her advocacy is real and the Church begs it hourly, but it presupposes His mercy rather than supplementing it. Whoever needs a Mary to soften Christ has not yet met Christ; the remedy is introduction, not division of labor."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because divine wisdom gives creatures the dignity of causing: grace makes cooperators, and she stands at their summit.",
                "feedback": "Respondeo: the course's oldest pattern, surfacing at its highest point. Providence executes through secondary causes, as the third module taught; grace does not replace freedom but moves it, as the ninth disputed and the eighth established; the sacraments will shortly show God pouring His life through creatures of water and word. Dignitas causandi: the dignity of being a cause. God does not merely rescue His creation; He honors it with real agency inside its own rescue, and the fiat at Nazareth is that whole principle gathered into one consenting person. She is not the exception to the economy. She is its exemplar: what the whole Body is called to be, cooperator down to the last fiber, everything received, everything returned."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `t11-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The price, and the first of its fruits.`,
        body: `Count what you now hold. Satisfaction is love offering more than the offense took, and the Cross was chosen for what it teaches, not extracted for what it owed. The offering outweighs every sin because acts are weighed by their Who, and this Who is God: sufficient would have been true, superabundant is the fact. The price was paid to God, not the devil; it merited and it satisfied; and it made its Payer sole Mediator, sole Redeemer, sole way, with a whole courtyard of participated mediations shining like windows under one sun. Among them, one without parallel: the woman who bore the Person and is therefore Mother of God; preserved at her conception by the merits she would consent to at Nazareth, in the place of the whole human nature; associated, directly and intimately, with the entire work, adding nothing to its sufficiency and receiving everything from it. The pelican feeds the nest from its own wound, and the mother at the nest's edge was fed first. What remains is delivery: the Body, the channels, the altar, the vision. The price is paid. The course now follows it home.`,
        distinction: {
          latin: `recapitulatio`,
          english: `recapitulation`,
          gloss: `The Redemption in one breath: superabundant satisfaction from love, priced infinite by the divine Person, paid to God, meriting condignly for the members; one Mediator with ministerial participations; and His Mother: Theotokos, immaculately conceived in view of His merits, associated in the whole work, not equal to its Worker.`,
          motif: `the-pelican-and-the-nest`,
        },
      },
      questions: [
        {
          id: `t11-l7-q1`,
          type: "match_pair",
          stem: `The module's images report for the recap. Match each to the doctrine it carried.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the window rebuilt on a Saturday"
              },
              {
                "id": "L2",
                "text": "the act weighed by its Who"
              },
              {
                "id": "L3",
                "text": "the windows sharing one sun"
              },
              {
                "id": "L4",
                "text": "the union made in the womb itself"
              },
              {
                "id": "L5",
                "text": "the sister caught before the fall"
              },
              {
                "id": "L6",
                "text": "the knot untied at Nazareth"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "satisfaction: a gift the offended one loves more than he hated the offense"
              },
              {
                "id": "R2",
                "text": "infinite worth: the Person gives the price its weight"
              },
              {
                "id": "R3",
                "text": "participated mediation: ministerial, dispositive, in the one Mediator"
              },
              {
                "id": "R4",
                "text": "Theotokos: she bore the Person, so the birth is God's"
              },
              {
                "id": "R5",
                "text": "Immaculate Conception: preservative redemption, in view of His merits"
              },
              {
                "id": "R6",
                "text": "the fiat: free cooperation in the place of the whole human nature"
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
              ],
              [
                "L6",
                "R6"
              ]
            ],
            "feedback": {
              "all_correct": "Six images, six doctrines, one arc. The Saturday window taught the currency of atonement; the taxpayer's grammar priced it infinite; the sun and its windows kept the Mediator sole without emptying the courtyard; the womb-union crowned the Mother; the caught sister showed redemption's more perfect mode; and the untied knot placed a free creaturely yes at the threshold of the whole work. Notice what the images have in common: every one of them is about love operating through order. That is this module's signature, and the wing's.",
              "partial_correct": "Some images wandered. Re-run the arc in order: satisfaction first (the window), then its worth (the Who), then the office it grounds (sole Mediator, shared windows), then the Mother the office involves: her title (the womb), her conception (the catch), her cooperation (the knot)."
            }
          },
        },
        {
          id: `t11-l7-q2`,
          type: "mcq",
          stem: `One sentence must carry the whole module. Choose the one that holds.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "God's justice required an infinite payment, and His mercy found a technicality to satisfy it.",
                "feedback": "Both clauses fail the audit you have already run. Nothing REQUIRED the payment: God could have pardoned by decree, and elected the more fitting way instead. And satisfaction is no technicality but the fullest form mercy could take: pardon arriving inside a gift, justice left richer rather than waived. A technicality saves paperwork. The Cross saved persons, and taught them what they are worth while doing it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Cross and the Mother are separate tracts, bound in one module by editorial custom.",
                "feedback": "The module's whole argument ran the other way: she is IN the tract on the Redemption because every truth about her is applied Christology, from Theotokos to the fiat. Her conception is defined in terms of His merits; her cooperation is weighed against His price; her titles are His identity, confessed from one step away. Separate the tracts and both lose pages. The binding is doctrinal, not editorial."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Love carried the price, the Person gave it worth, and the payment's first fruit stood beside the Cross.",
                "feedback": "Respondeo: the module in one breath. Charity carried Him up the hill, the divine Who made one afternoon outweigh the ages, and the woman standing at the foot of the gibbet was herself the payment's first and most perfect effect, preserved by it before she cooperated with it, consenting at Nazareth in the name of us all and companioning the suffering to its end. Redemption superabundant, mediation sole, association real and subordinate: every scale from six lessons balances inside that sentence."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Redemption is a legal transaction whose surplus the Church now administers as a going concern.",
                "feedback": "The vocabulary of the ledger served the module well, and then the module kept correcting it: paid to God not the devil, love not tariff, superabundance not surplus inventory, ministry not administration of assets. A going concern distributes what is scarce; the treasury of this economy is an infinite act that application does not diminish. Keep the figures; refuse the reduction. The tradition does both at once, which is why it has outlived every accounting standard."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t11-l7-q3`,
          type: "precision_check",
          stem: `A parish bulletin achieves three leaks in one sentence: <em>"Christ paid our debt to the devil, with Mary contributing her merits to complete the price, which she alone now distributes as she sees fit."</em> Audit with everything you have.`,
          payload: {
            "statement": "Christ paid our debt to the devil, with Mary contributing her merits to complete the price, which she alone now distributes as she sees fit.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "All three fail: the price went to God, nothing completes the infinite, and she ministers, not owns.",
                "feedback": "Respondeo: a clean sweep, and you had the tools for each. THE CREDITOR: the price was paid not to the devil but to God; the jailer held a jail, never a title deed (q.48 a.4). THE ARITHMETIC: an infinite satisfaction leaves nothing to complete; her cooperation lives inside His payment, congruous within condign, never alongside it. THE DEED OF TITLE: she is Minister of the distribution, supreme among ministers and still a minister; the treasury remains the exclusive fruit of His Death, dispensed by His right, through her hands, according to His will. Three leaks, one root: each clause quietly promotes a participant into a principal. The module existed to teach you the difference."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Only the devil clause fails; the Marian clauses are generous but sound.",
                "feedback": "Generosity was audited in Lesson 6 and found to be the leak's favorite disguise. CONTRIBUTING TO COMPLETE makes His payment partial, which no pious intention can underwrite; AS SHE SEES FIT unhooks the ministry from the fountain it serves. The devil clause is the oldest error in the sentence but not the only one. Bulletins fail in clusters; audit to the end."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Only the Marian clauses fail; the devil held real rights until the ransom cleared them.",
                "feedback": "You have corrected the Mother and paid off the squatter. By God's just permission the devil held POWER over the race; rights he never had, and the ransom-image, kept by the Fathers for its truth about our captivity, was corrected by Aquinas on exactly this point: justice required man's redemption WITH REGARD TO GOD, not with regard to the devil (q.48 a.4). Both fences matter; a bulletin that leaks toward hell is not improved by leaking accurately about heaven."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing fails: each clause has some precedent somewhere in the tradition.",
                "feedback": "Precedent-somewhere is how error ships. The ransom figure has patristic precedent AND a scholastic correction; Marian generosity has devotional precedent AND papal fences built for it; distribution-language has a pope's own words AND the word Minister holding them in order. The tradition is not a quarry of quotable stones; it is a building, and the mortar is the distinctions. Quarry it and you can justify anything, which is the surest sign the method is wrong."
              }
            ],
            "correct_option_id": "a",
            "correction": "The price was paid to God, whole and superabundant, by Christ alone; Mary cooperates within it, meriting congruously and ministering its distribution by her Son's gift, never by her own right (ST III q.48; Ad Diem Illum · DS 3370)."
          },
        },
        {
          id: `t11-l7-q4`,
          type: "true_false_with_reason",
          stem: `A last judgment on the whole territory: <em>Marian doctrine is a later growth that drifted away from the gospel's center.</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "True: the New Testament's near-silence about her settles the question.",
                "feedback": "The silence is loud with content: consent asked and given at the threshold, the Magnificat's theology of the poor of the Lord, Cana's whatsoever he shall say to you, the mother given from the Cross, the woman clothed with the sun. Sparse is not silent, and Tradition, as the first module of this wing taught, is a source alongside the page, not a supplement to it. What the texts sketch, the centuries inked; nothing was drawn on blank paper."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "True: devotion inflated doctrine once imperial Christianity had leisure for it.",
                "feedback": "Irenaeus wrote the knot-and-obedience parallel within two generations of the apostles, long before any emperor found the Church convenient; the New Eve is older than the councils, older than the canon's final list. The inflation story requires the evidence to arrive late, and it stubbornly arrives early. Chronology is the cheapest test of a genealogy, and this genealogy fails it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "False: because nothing can develop after the apostles, so the definitions merely repeated old words.",
                "feedback": "Right verdict, broken engine. The definitions of 1854 and 1950 did not repeat old words; they gave the deposit's ancient content new precision, which is what development means when it is legitimate: the same truth, better stated, never a new truth smuggled in. Deny development entirely and you cannot explain a single council, including the ones that gave you the word consubstantial. The wall against novelty is not a wall against growth in precision; the anti-Modernist corpus itself distinguishes them."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "False: each Marian dogma stands guard over a Christological one; the Mother's titles are the Son's defenses.",
                "feedback": "Respondeo: the module's method, now a verdict. Theotokos guards the union; the virginity guards the Incarnation's manner; the Immaculate Conception guards the universality and perfection of His redemption; the association, rightly weighted, guards the dignity of what grace can make of a creature. Drift away from the center is precisely what the dogmas prevent: every one of them is a fence around the Incarnation, built where someone was trying to climb. The Church did not wander to Mary from Christ. She stationed Mary's doctrine where Christ's is attacked."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t11-l7-q5`,
          type: "mcq",
          stem: `The Redemption is priced, its Mediator sole, His Mother weighed exactly. What does this module hand forward to the rest of the course?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing: the tract on redemption closes here, complete in itself.",
                "feedback": "Complete as a payment, not as a delivery. A price paid twenty centuries ago still has to reach a soul on a Tuesday, and nothing in this module explained the reaching: only pointed at it, twice, with the phrase a later module owns that. Doctrine is a relay, not a museum; this module's baton is stamped APPLIED."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The applied Redemption: the Body, the channels, the altar, and the vision that crowns it.",
                "feedback": "Respondeo: the course's remaining map, read off this module's open doors. The one mystic person of the Head and members wants its full anatomy: the Church. The faith and the sacraments of faith through which the Passion touches particular lives want their machinery: the signs that cause. The clean oblation at the center wants its own module: the altar. And the whole reditus wants its arrival: the vision, where the first of the redeemed has already gone, whole. Everything ahead is this module's price, in delivery."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "An indefinite Mariology: the remaining modules unfold her further titles in sequence.",
                "feedback": "Her doctrine is complete for this course's purposes: title, conception, association, each weighed. What remains ahead is not more Mariology but the economy she is the masterpiece of: Church, sacraments, altar, glory. She will appear again the way a first fruit appears at a harvest, as promise of the crop, not as the crop. The course's discipline holds: one module's business per module."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A change of subject: the Church is new business, unrelated to the price just paid.",
                "feedback": "The Church is the price's own body: the one mystic person this module quoted from Aquinas twice is the next module's entire subject, and the overflow of the Head's grace is its constitution. New chapter, same sentence. Nothing in this wing changes the subject; the subject is the return of creatures to God, and every module is one bend of the same road."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t11-l7-q6`,
          type: "mcq",
          stem: `The bestiaries drew Christ as a pelican, piercing her own breast to feed her young, and the Adoro te devote sings it: <em>pie pellicane</em>. Why does THIS module earn the old image twice over?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `The Redemption owned: love's superabundant satisfaction, priced by the Person, ministered through His Mother and His members.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because medieval zoology, though wrong about the bird, was right about the sentiment.",
                "feedback": "The image survives its zoology because it was never resting on it; the bestiary pelican is a doctrine wearing feathers. Sentiment could have chosen any tender bird. The tradition chose the one that feeds FROM ITS OWN WOUND, because the point is not tenderness but the source of the meal. Precision again, even in the aviary."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the pelican's brood must earn the feeding, as the justified earn their crown.",
                "feedback": "The brood earns nothing; it is fed because it is the brood, and the feeding is pure gift from the parent's own substance. Even the crown the justified truly merit is, as Trent put it in the sentence the grace module loved best, God crowning His own gifts. An image of wages would have shown the young bringing something to the nest. They bring only their hunger, which is the one contribution this economy has ever asked."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A Person feeds His own from His wound, and the mother at the nest's edge was fed first.",
                "feedback": "Respondeo: the module's two doctrines in one emblem. The satisfaction was not paid from a treasury external to the Payer: He gave what was of greatest price, Himself, the feeding drawn from the wound. And the image holds a second figure if you look: the first mouth His redemption ever fed was His mother's own being, preserved at her conception from the wound He would bleed for, standing now at the nest's edge, fed first, feeding others from what she received. Where that feeding becomes a standing meal, at an altar, under signs, is two modules ahead, and the pelican will be waiting there in the hymn. The course keeps its images the way the Church keeps hers: because they are load-bearing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because vivid blood-imagery, whatever its excesses, keeps doctrine memorable.",
                "feedback": "Mnemonics explain why images survive in notebooks, not why the Church prays them at the altar. The pelican is in the Adoro te because it is TRUE: the feeding from the wound is the plain shape of the satisfaction this module priced. An image kept for memorability alone would have been retired when the zoology failed. This one was kept when the zoology failed, which tells you what it was actually carrying."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    }
  ],
};
