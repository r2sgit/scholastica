import type { ModuleMeta } from '../types';

/** T14 · The Eucharist & the Sacrifice of the Mass. Wired into the live app by scholastica-claude-code-wing-parity-RUN.md (WP-A). Content is the authored t14-content.json, copied faithfully; no prose edits. */
export const t14: ModuleMeta = {
  id: 14,
  title: `The Eucharist & the Sacrifice of the Mass`,
  short: `De Eucharistia et Sacrificio Missae`,
  label: `Theologia XIV · The Eucharist & the Sacrifice of the Mass`,
  latin: `De Eucharistia et Sacrificio Missae`,
  aim: `The whole substance of bread and wine is converted into the body and blood of Christ, the species alone remaining; and the Mass is the same sacrifice as the cross, truly propitiatory, the victim and priest one and the same, the manner alone differing.`,
  lessons: [
    {
      id: `t14-l1`,
      num: `I`,
      title: `The Apple Returns`,
      latin: `substantia sub accidentibus`,
      tag: `substantia sub accidentibus`,
      fin: {
        tag: `substantia sub accidentibus`,
        heading: `The apple was always heading here.`,
        body: `The first distinction the course ever made, on the homeliest object it could find, turns out to have been packed for this journey from the start. Substance beneath, accidents above: on a table it was a remark; on an altar it is the grammar of the central mystery of the faith. The metaphysics does not prove what happens at the consecration, and it was never asked to. It does something humbler and rarer: it lets the Church say what she means without talking nonsense.`,
        distinction: {
          latin: `substantia  ·  accidentia`,
          english: `substance  ·  accidents`,
          gloss: `What a thing is, beneath everything it shows; the first tool the course ever handed you, kept sharp for its final use.`,
        },
      },
      questions: [
        {
          id: `t14-l1-q1`,
          type: "mcq",
          stem: `A green apple on a table: red-gold blush, sweet smell, a certain weight in the hand, and beneath all of it, the thing itself. Now an altar: bread and wine. If what a thing IS were to change while everything the senses reach remained, which pair of tools names the two layers?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Act and potency: what it already is, against what it could yet become.",
                "feedback": "That pair measures change over time: the cold coffee that could be hot, the log that could burn. Here the puzzle is not what the bread could become but what layers it has right now. The cut you need runs between what the thing is and what it shows."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Substance and accidents: what the thing is, and what belongs to it.",
                "feedback": "Respondeo: substance beneath, accidents above. The apple taught you the distinction when it was safe to learn; the course has been keeping that apple for the altar ever since. Every pair on this list is real equipment, but this is the one the Eucharist runs on."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Matter and form: the stuff of a thing, and its shaping principle.",
                "feedback": "A real pair, and close: matter and form are the ingredients of substance. But the change you are being prepared for converts the whole substance, matter and form together, which is exactly why that pair cannot frame it. The layer that matters here is substance against accidents."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Essence and existence: what a thing is, and that it is.",
                "feedback": "The deepest cut in the toolbox, and not the one this mystery turns on. Nothing here loses its act of being; something exchanges what it is for Someone else entire. The working pair is substance and accidents."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t14-l1-q2`,
          type: "mcq",
          stem: `Every sense files its report on the bread: color for the eye, weight for the hand, taste, texture, the faint smell of wheat. Which of these reports touches the substance itself?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "None: sense grasps accidents; substance was always the intellect's object.",
                "feedback": "Respondeo: the senses report accidents, and report them truly; what a thing IS never was visible, weighable, or sweet. Part I said this about every apple in the world, and it was a safe remark. The consecration is where the remark stops being safe and starts being load-bearing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Taste: alone among the senses it reaches past the surface of things.",
                "feedback": "Taste gets further inside the apple, not further into its being. Depth of penetration is still traffic in accidents: sweetness inheres exactly as color does. No sense, however intimate, has substance for its object."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "All of them together: substance just is the organized sum of appearances.",
                "feedback": "You have dissolved the thing into its bundle of impressions, which is the empiricist collapse. The course spent real effort keeping those layers distinct, and the altar is where the distinction earns its keep: if substance were only summed appearances, the Church's central sentence would be nonsense."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Touch: weight is resistance, and resistance is the thing itself asserting itself.",
                "feedback": "Sturdy common sense, and still a report on an accident. Weight is quantity's signature, not substance's face. The hand knows heaviness; only the intellect knows what is heavy."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t14-l1-q3`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>The presence of Christ's true body and blood in this sacrament cannot be detected by sense, nor understanding, but by faith alone, which rests upon Divine authority. Hence, on Luke 22:19: "This is My body which shall be delivered up for you," Cyril says: "Doubt not whether this be true; but take rather the Saviour's words with faith; for since He is the Truth, He lieth not."</p><p>Some men accordingly, not paying heed to these things, have contended that Christ's body and blood are not in this sacrament except as in a sign, a thing to be rejected as heretical, since it is contrary to Christ's words. Hence Berengarius, who had been the first deviser of this heresy, was afterwards forced to withdraw his error, and to acknowledge the truth of the faith.</p><div class="cr-cite">Summa Theologiae III, q. 75, a. 1, corpus. Dominican Fathers translation.</div></div>Aquinas names two faculties that cannot detect the presence, then names what holds it. On what does the doctrine finally rest?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "On the senses, rightly read: what is truly flesh will eventually betray itself.",
                "feedback": "You have re-enlisted the witnesses Aquinas just dismissed. The senses report accidents and will report bread-accidents forever, because bread-accidents are truly what remains. Nothing on any altar will ever taste different."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "On metaphysics: the substance-accident analysis demonstrates that the change occurs.",
                "feedback": "Generous to the course, and wrong about its reach. The metaphysics shows the doctrine can be stated without absurdity; it detects nothing on any altar. Aquinas is blunt: not by sense, <em>nor understanding</em>. The tool defends the mystery; it does not replace the witness."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "On faith, resting on the authority of the One who spoke the words.",
                "feedback": "Respondeo: faith alone, and faith with a reason: He who says \"This is My body\" is the Truth, and the Truth does not lie. Cyril's sentence is the whole epistemology of the Eucharist in one line. And note whom Aquinas names as the first to bend the words into mere sign: Berengarius, made to withdraw his error in 1079. The battlefield is old."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "On the Church's definitions, which made the teaching true by defining it.",
                "feedback": "Backwards by one step: the definition guards the fact; it does not manufacture it. The Church defines because the words of her Lord already say it and men had begun to unsay it. Definitions are fences, and fences are built around something."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t14-l1-q4`,
          type: "mcq",
          stem: `The appearances remain: what is no longer bread still looks, weighs, breaks, and tastes like bread. Aquinas finds this not awkward but providential, and gives three reasons. Which option states one of them?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Eating flesh in its own species would be horrible; He comes under the look of food.",
                "feedback": "Respondeo: the first of the three, in almost Aquinas's own words. The other two: that the sacrament not be derided by unbelievers, and that receiving Him invisibly may redound to the merit of faith. Mercy, prudence, and faith's reward: the veil is a kindness three times over."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The substance of bread must linger nearby to keep its accidents in being.",
                "feedback": "That move keeps the accidents afloat by keeping the bread, which is precisely what the doctrine denies. Nothing of the bread's substance survives, near or far. What holds the appearances is a better question, and Lesson 2 answers it with a stronger hand than bread's."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The senses would otherwise be deceived, and God cannot be the author of deception.",
                "feedback": "Sounds like Aquinas and is not among his three. The senses were never in danger of deception, because accidents are truly present and accidents were always all the senses reported. His reasons run to mercy, to the sacrament's honor before unbelievers, and to the merit of faith."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Appearances are all a sacrament requires, since signs need nothing beneath them.",
                "feedback": "You have quietly traded presence for signage. This sacrament is a sign that contains what it signifies, which is the whole scandal and the whole gift. The appearances remain for our sake, not because nothing is under them."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t14-l1-q5`,
          type: "true_false_with_reason",
          stem: `True or false: after the consecration, the communicant's senses are deceived.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The eye reports bread where there is none: a holy deception, but a deception.",
                "feedback": "The eye never reported bread; it reported white, round, and so-large, and every one of those is really there. You have promoted the eye to metaphysician and then blamed it for the promotion. Substance was always above its pay grade."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Every mystery outruns the mind, and outrunning is a kind of deceiving.",
                "feedback": "Outrunning is not deceiving, or every horizon would be a lie. A mystery exceeds what the mind can compass; a deception falsifies what a faculty properly reports. Nothing here is falsified: the accidents are present, the senses read them rightly, and faith reads further."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The accidents the senses report are truly there; substance was never their object.",
                "feedback": "Respondeo: no deception anywhere in the transaction. The color, weight, and taste are really present, and reporting them was always the senses' whole job, faithfully done. Substance belongs to the intellect, and the intellect, Aquinas says, is preserved from error by faith. Every witness at this altar tells the truth."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The senses are safe because the substance of bread quietly remains beneath them.",
                "feedback": "Right verdict, smuggled bread. Keep the acquittal of the senses and drop the contraband: no substance of bread remains at all, quietly or otherwise. The accidents stand without any subject, and how that is sayable is Lesson 2's business."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t14-l1-q6`,
          type: "mcq",
          stem: `At Capharnaum the saying was hard and many disciples walked away; He let them go rather than soften it (John 6). Trent reads the words of institution with what it calls their proper and most manifest meaning, the sense the Fathers universally received. What does the Church refuse to do with the words?`,
          latin_tag: `substantia sub accidentibus`,
          doctrine_line: `In the Eucharist the true body and blood of Christ are present under the appearances of bread and wine: the senses reach the appearances and report them truly; faith, resting on the word of the One who cannot lie, reaches the fact.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Refuse to explain them, leaving the faithful to private guesswork.",
                "feedback": "She has hardly been reticent: a definition at Trent, a feast of Corpus Christi, and a library of theology. The Church explains at length. What she will not do is explain the words away."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Bend them into figure and trope, against their plain sense and the Fathers' reception.",
                "feedback": "Respondeo: Trent's own verdict, nearly verbatim: it is a crime most unworthy that the words be wrested into fictitious and imaginary tropes against the universal sense of the Church. The scene at Capharnaum is the standing exhibit: the hearers took Him at His word, the word cost Him disciples, and He paid rather than retract it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Admit that any word of Scripture is ever figurative, lest this one fall.",
                "feedback": "Too much armor. Scripture is full of figures, and the Church reads the door and the vine as figures without a tremor. The claim is not that IS can never signify; it is that these words, at this supper, received in one sense by the whole believing world, mean what they say."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Submit them to each age's best philosophy for fresh reinterpretation.",
                "feedback": "That road makes the deposit a tenant of whatever system currently owns the building. The Church borrowed Aristotle's grammar because it served the words; she did not lease the words to Aristotle, and she will not lease them to anyone since."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `t14-l2`,
      num: `II`,
      title: `Transubstantiation`,
      latin: `transubstantiatio`,
      tag: `transubstantiatio`,
      fin: {
        tag: `transubstantiatio`,
        heading: `A change with a name of its own.`,
        body: `Every natural change swaps forms over a surviving subject: the cold coffee warms, the log becomes fire and ash. This change has no surviving subject and swaps nothing partial: whole substance into whole substance, a conversion only the Author of being can work, because only His action reaches being whole. The Church did not explain the mystery when she named it; she fenced it, word by word, against every smaller thing it might be mistaken for.`,
        distinction: {
          latin: `conversio substantialis  ·  conversio formalis`,
          english: `substantial conversion  ·  formal change`,
          gloss: `Nature changes forms in a subject that remains; God alone can convert the whole substance of one thing into the whole substance of another.`,
        },
      },
      questions: [
        {
          id: `t14-l2-q1`,
          type: "mcq",
          stem: `Before the consecration, bread; after it, the body of Christ, which was not there before. Aquinas allows only two ways a thing can begin to be where it was not: it is brought there, or something already there is changed into it. Which way does the sacrament take?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Brought there: the body descends unseen from heaven to each altar.",
                "feedback": "Local motion breaks three ways at once, says Aquinas: what travels must leave where it was, so heaven would stand empty; what travels crosses the space between, and nothing crosses; and one body cannot end one journey in ten thousand places this morning. The road to the altar is not a road."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Neither: the bread remains bread and acquires a new power of presenting Christ.",
                "feedback": "The move gives the bread a promotion instead of a successor: present in power, absent in person. It is a serious position with serious sponsors, and Lesson 3 meets them by name. But note what it concedes at the start: that the words This is My body say more than the theory allows to happen."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither: the bread is annihilated, and the body appears in the vacancy.",
                "feedback": "Two problems with the vacancy. Augustine's principle stands guard: God is not the cause of tending to nothing, and this sacrament is His work. And an annihilation followed by an apparition leaves the two events strangers; nothing would make THIS bread the point where HE begins. Conversion is what connects them."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Changed into it: the whole substance of the bread is converted into His body.",
                "feedback": "Respondeo: conversion, the second way, and the only one left standing. The fire in the house was carried in or kindled there; His body does not travel, so the bread must be, so to speak, kindled into Him. What no natural agent could do to any substance, the Author of substance does entire."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t14-l2-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Every created agent is limited in its act, as being of a determinate genus and species: and consequently the action of every created agent bears upon some determinate act... no natural or created agent can act except by changing the form in something; and on this account every change made according to nature's laws is a formal change. But God is infinite act; hence His action extends to the whole nature of being. Therefore He can work not only formal conversion, so that diverse forms succeed each other in the same subject; but also the change of all being, so that, to wit, the whole substance of one thing be changed into the whole substance of another. And this is done by Divine power in this sacrament... Hence this is not a formal, but a substantial conversion; nor is it a kind of natural movement: but, with a name of its own, it can be called "transubstantiation."</p><div class="cr-cite">Summa Theologiae III, q. 75, a. 4, corpus. Dominican Fathers translation.</div></div>Why is this conversion possible to God alone?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because God may suspend the rules of logic when He wills.",
                "feedback": "Aquinas never spends logic to buy a miracle; a suspended contradiction purchases nothing, since nonsense is not a thing even omnipotence can make. The argument in the passage runs on power's reach, not logic's holiday: created agents reach forms, infinite act reaches being."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Created agents change forms in a subject; the Author of being can reach being whole.",
                "feedback": "Respondeo: exactly the passage's spine. A sculptor reshapes marble and a fire re-forms the log, but each works on something that stays. God's action extends to the whole nature of being, so He can convert the whole of one thing into the whole of another, nothing staying. The change gets a name of its own because nothing else was ever like it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because nature performs the same conversion slowly, and God merely accelerates it.",
                "feedback": "There is no slow version. Every change nature performs at any speed is formal: a subject survives and trades forms. Transubstantiation is not a natural movement hurried along; it is not a kind of natural movement at all, which is the passage's own emphasis."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because the miracle consists in multiplying His body until it fills every altar.",
                "feedback": "Nothing multiplies. One body, numerically one, is present wherever the conversion terminates, sacramentally and not as in a place. Multiplication would give us many bodies and a crowded heaven; conversion gives us one Lord in many places, which is stranger and better."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t14-l2-q3`,
          type: "precision_check",
          stem: `A claim to test with full equipment: <em>"Transubstantiation is the Church's technical explanation of how the change is performed."</em> Where exactly does it go wrong?`,
          payload: {
            "statement": "Transubstantiation is the Church's technical explanation of how the change is performed.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At the Church's: the word is a medieval intrusion on a simpler apostolic faith.",
                "feedback": "The faith is apostolic; the word is younger and none the worse for it. Trent says the Church calls the conversion transubstantiation most aptly: a name coined late for a thing believed from the beginning, as Trinity was. Late names guard old truths."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At the change: nothing changes but the meaning the community assigns the bread.",
                "feedback": "That is the sign-only thesis wearing a linguist's coat, and it fails where it always fails: the words say body, not badge. If only meaning changed, Trent built a cathedral of anathemas around a metaphor. Lesson 3 gives this position its full hearing under its own names."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At explanation of how: the word states what occurs and its kind; the manner stays God's.",
                "feedback": "Respondeo: cut found. Transubstantiation names the fact with precision: whole substance into whole substance, the species alone remaining. It is a fence around a mystery, not a diagram of its interior; no mechanism is on offer because no natural mechanism exists. The Church defines what is, and leaves the how with God, where it lives."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At is performed: strictly, nothing is performed; grace acts only in the recipient.",
                "feedback": "You have moved the miracle from the altar to the pew. Something is performed, and performed before anyone receives: Trent anchors the presence to the consecration itself, prior to all use. The recipient's dispositions matter to the fruit, not to the fact."
              }
            ],
            "correct_option_id": "c",
            "correction": "Transubstantiation states what happens and what kind of change it is: the whole substance of bread converted into the whole substance of Christ's body, the accidents alone remaining. It explains no mechanism, because there is none of the natural kind to explain; the definition is a boundary stone, not a blueprint."
          },
        },
        {
          id: `t14-l2-q4`,
          type: "fill_blank",
          stem: `Trent, Session 13, Chapter 4: the definition, exact. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">"By the consecration of the bread and of the wine, a conversion is made of the <span class="fb-blank" data-blank="b1">______</span> of the bread into the substance of the <span class="fb-blank" data-blank="b2">______</span> of Christ our Lord, and of the whole substance of the wine into the substance of His <span class="fb-blank" data-blank="b3">______</span>; which conversion is, by the holy Catholic Church, suitably and properly called <span class="fb-blank" data-blank="b4">______</span>."</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "whole substance"
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
                  "blood"
                ],
                "case_sensitive": false
              },
              {
                "id": "b4",
                "correct_answers": [
                  "Transubstantiation"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "whole substance",
              "outward form",
              "body",
              "soul",
              "blood",
              "divinity",
              "Transubstantiation",
              "Consubstantiation"
            ],
            "feedback": {
              "all_correct": "Locked, in Trent's own words (DS 1642). Notice the discipline of the sentence: WHOLE substance, so nothing of the bread survives; into body and into blood, because the conversion terminates where the words of institution point. His soul and divinity are truly there too, but by another mode, which the next lesson names concomitance. The bank's last word, consubstantiation, is the definition's exact contradictory: keep them straight and you hold the doctrine.",
              "partial_correct": "Some blanks resisted. Read the definition the way Trent wrote it: a conversion of the whole substance, terminating in the body and the blood, and a name the Church calls proper. Each word was chosen against a specific escape route; put each back where it blocks one."
            }
          },
        },
        {
          id: `t14-l2-q5`,
          type: "mcq",
          stem: `The whiteness, the roundness, the weight of bread remain, and the substance of bread does not. Accidents inhere in substance, and these now inhere in nothing at all. What holds them in being?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The divine power immediately: an effect depends more on the first cause than the second.",
                "feedback": "Respondeo: Aquinas reaches for the book De Causis and finds the principle already waiting: an effect depends more on the first cause than on the second. Substance was always the second cause of its accidents' inherence; the First Cause now supplies immediately what He usually supplies through it. Nothing in the metaphysics snaps; one dependency is simply held by a stronger hand."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The body of Christ, which takes the bread's place as their new subject.",
                "feedback": "Then His body would be white, round, and an ounce and a half, and every mouse in the sacristy a communicant of the hypostatic order. The accidents do not transfer to a new subject; His body is present under them, not qualified by them."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The surrounding air, which receives them as a stand-in subject.",
                "feedback": "A solution the schoolmen actually weighed, which is why it earns a serious refusal: air cannot be white and crusty without becoming the very bread we just lost, and the accidents would migrate with every draft. The stand-in fails the audition. No created subject remains; the first cause holds them directly."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The mind of the beholder, where appearances live once their substance departs.",
                "feedback": "That turns the sacrament into a shared hallucination and the senses into its victims, which Lesson 1 already ruled out: the accidents are truly present, outside every skull. They need no beholder; they need a cause, and they have the First."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t14-l2-q6`,
          type: "true_false_with_reason",
          stem: `True or false: <em>accidents without a subject</em> is a contradiction in terms, so faith here believes an absurdity.`,
          latin_tag: `transubstantiatio`,
          doctrine_line: `By the consecration the whole substance of the bread is converted into the substance of Christ's body and the whole substance of the wine into His blood: a conversion possible to infinite act alone, which the Church most aptly calls transubstantiation.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. And so much the better: faith shows its mettle by believing the impossible.",
                "feedback": "The Church condemned that flourish under the name fideism: faith resting on absurdity honors neither faith nor the God who is Truth. Nothing impossible is proposed here, which is precisely the metaphysics' gift. Believing nonsense is not devotion; it is surrender wearing devotion's clothes."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Which is why the substance of bread must secretly remain as their subject.",
                "feedback": "You have rescued the accidents by re-hiring the bread, and the rescue costs the doctrine: if bread remains, This is My body is false of what the hand holds. The charge of contradiction was answerable without the contraband; see the FALSE option that answers it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Accidents are only ideas anyway, and ideas need no subject outside the mind.",
                "feedback": "Right verdict, ruinous reason: if the accidents live only in minds, the senses are deceived after all, and Lesson 1's acquittal collapses. The whiteness is really there. Keep the verdict and ground it in causes, not in idealism."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Inherence is the second cause's track; the first cause can supply the same directly.",
                "feedback": "Respondeo: no contradiction, only a dependency re-routed. That accidents inhere in substance is the created order's ordinary arrangement, not a law above God; the First Cause sustains immediately what substance sustained instrumentally. Above reason, cheerfully; against it, never. The same rule kept the faith honest at the Five Ways, and it holds at the altar."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `t14-l3`,
      num: `III`,
      title: `Really, Truly, Substantially`,
      latin: `vere, realiter, substantialiter`,
      tag: `vere, realiter, substantialiter`,
      fin: {
        tag: `vere, realiter, substantialiter`,
        heading: `Three adverbs, three locked doors.`,
        body: `Every reduced version of the Presence has been proposed, by serious men, and answered by name: the bare sign, the mere power, the presence lodging alongside surviving bread. Trent's three adverbs are not solemn decoration; each one bolts a specific door. And because the risen Lord dies now no more, wherever His body is, all of Him is: whole under either species, whole under every fragment, worthy of the adoration given to God because what is there is God.`,
        distinction: {
          latin: `vi verborum  ·  per concomitantiam`,
          english: `by force of the words  ·  by concomitance`,
          gloss: `The words effect what they say, body under bread, blood under wine; and whatever is really joined to what they effect comes with it: the whole living Christ.`,
        },
      },
      questions: [
        {
          id: `t14-l3-q1`,
          type: "mcq",
          stem: `Three ways to thin the Presence, each held by serious men: it is a bare sign of an absent Lord; it is a real power or influence, but no more; it is truly He, but alongside bread that remains. Trent's canon plants three adverbs in the ground: truly, really, substantially. What work are the adverbs doing?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Ornament: conciliar prose heaping solemnity on a single affirmation.",
                "feedback": "Councils under siege do not decorate. Every word in a Tridentine canon is load-bearing, purchased in committee at the price of years. Read the three denials in the stem again, then the three adverbs: the fit is not an accident."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Each adverb bolts one exit: not figure only, not power only, not alongside bread.",
                "feedback": "Respondeo: truly against the trope, really against the mere influence, substantially against the surviving bread. The middle exit deserves its sponsor named: Geneva's account, Calvin's, gave the sacrament a true power of Christ while His substance stayed in heaven, nobler than the bare sign and still a thinning; the canon's or virtue clause answers it. Three doors, three bolts, one sentence."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Degrees: each adverb names a deeper stage of one spiritual presence.",
                "feedback": "A staircase where Trent built a wall. The adverbs do not deepen one graded presence; they exclude three rival accounts of it. Grade-language is the very thinning the canon exists to stop."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Chronology: three clarifications marking stages of the Church's developing understanding.",
                "feedback": "The development story reads history into a sentence written all at once. The three adverbs answer three contemporaries, not three centuries; the faith they guard is the one Berengarius was made to confess five hundred years earlier. What developed was the precision of the fence, not the thing fenced."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t14-l3-q2`,
          type: "mcq",
          stem: `A serious voice from Zurich, in the 1520s: This is my body must mean this signifies my body, exactly as I am the door and I am the vine signify. The Supper is a memorial of a body absent in heaven until He comes. Scripture judged by Scripture's own scenes: where does the reading break?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At grammar: is can never carry a figure, in Scripture or anywhere.",
                "feedback": "Too much armor, and the wrong piece. The Church cheerfully reads the door and the vine as figures; no vineyard was harmed. The question was never whether IS can signify; it is what THESE words, at that supper, received in one sense by the whole believing world, actually say."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At authority: Zurich held no commission to interpret Scripture at all.",
                "feedback": "The slam answers a man instead of an argument, which is not how this course fights. The reading fails on the page, not on the credential: there is a scene in John where the literal sense was tested at the price of disciples. Argue from there."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At piety: a reading so cold could never console, and cold readings are false.",
                "feedback": "Warmth is not a truth-test, or half the heresies would be dogma by now; most of them consoled someone. The memorial reading has its own austere piety. It fails against a scene in the Gospel, not against a thermometer."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At John 6: hearers took Him literally and left, and He let them go unsoftened.",
                "feedback": "Respondeo: the one scene where the figure-reading had its chance to save everyone, and He declined to use it. This is a hard saying: a word would have kept them, the word it is only a figure, and He offered them instead a harder repetition and then Will you also go away? Zwingli, d. 1531, read IS as signifies; Trent's first canon (DS 1651) answers the sign, the figure, and the virtue by name. The plain sense cost Him disciples, and He paid."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t14-l3-q3`,
          type: "true_false_with_reason",
          stem: `Wittenberg's counter-proposal, at full strength: the Body is truly present in, with, and under the bread, whose substance remains alongside; later schools call it consubstantiation. True or false: <em>This is My body</em> could stand if the bread remained.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The word this points at the whole complex, bread and Body together.",
                "feedback": "The strongest defense the position has, and Aquinas meets it at the pronoun: a demonstrative in a sacramental form points at what is there when the sentence ends, and if bread is there, the sentence calls bread His body, which the substance of bread never is. The complex-reading saves the grammar by blurring exactly what the words insist on sharpening."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Sacramental speech is generous; strict precision belongs to the schools, not suppers.",
                "feedback": "It was at that supper that He chose the words, and He is not careless with pronouns on the night He is betrayed. The Church has always read the institution as the most deliberate sentence ever spoken. Generosity is real, and it arrives as precision, not instead of it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Bread is never His body; were bread remaining, the honest word is here, not is.",
                "feedback": "Respondeo: Aquinas's own grammatical scalpel: the substance of bread never is the body of Christ. Rather should one say, in that case, Here is My body. The demonstrative consecrates what it points at; a surviving bread would falsify the very words that effect the sacrament. Trent's second canon (DS 1652) closes the door on the conjoint substance by name, and Luther, d. 1546, stands answered at parity: a real presence, honored as the sign-theories never honored it, and still one substance too many."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Two substances can never occupy one place; the physics forbids it.",
                "feedback": "The wrong guard at the right door. Physics is not the objection, and cannot be: by concomitance the whole Christ stands under every fragment, which is far stranger than two substances sharing a location. The failure is in the words: bread remaining makes This is My body a false sentence, and the form of the sacrament cannot be false."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t14-l3-q4`,
          type: "mcq",
          stem: `By the force of the words, the bread becomes His body and the wine His blood. But the risen Lord, says Scripture, dieth now no more: His body is never again without His blood, His soul, His divinity. Trent names the consequence concomitance: what is really joined to what the words effect comes with it. A communicant receives the host only and never the chalice. How much of Christ?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The body only; the blood waits in the chalice he did not receive.",
                "feedback": "That parcels out a living Lord as if the consecration performed an autopsy. The words place the body under the bread; concomitance brings everything the risen body cannot be without: blood, soul, and, by the hypostatic union Trent itself invokes, divinity. Nobody at the rail receives a part."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Less than a two-species communion gives, by defect of the fuller sign.",
                "feedback": "The serious version of the error, because the sign really is fuller under both kinds: eating and drinking together signify the banquet more completely. But signification is not containing. Trent is arithmetic on the point: as much is contained under either species as under both. The sign varies; the Guest does not."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That depends on the communicant's devotion at the rail.",
                "feedback": "Devotion measures the fruit received, never the Presence receiving him. The whole Christ is under the species before, during, and after anyone's fervor, or the sacrament would be a mirror instead of a gift. What varies with devotion is what Lesson 6 discusses; what is contained does not vary at all."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The whole living Christ: body, blood, soul, divinity, under either species entire.",
                "feedback": "Respondeo: whole and entire, Trent's own words (DS 1640-1641): the Body under the bread by the force of the words, the rest by that natural connexion and concomitancy of a Lord who, risen from the dead, dies no more, and the divinity on account of the admirable hypostatical union. The chalice adds no missing portion; canon 3 (DS 1653) anathematizes the parceling by name."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t14-l3-q5`,
          type: "mcq",
          stem: `The charge has an old name, artolatria: bread-worship. If Catholics adore the Host and the Host were bread, the charge would simply be correct. Trent answers with the worship of latria, the adoration due to God alone, and the Church answers with a lamp burning before every tabernacle in the world. What grounds the practice?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That the substance there is He: adoration follows what a thing is, not what it shows.",
                "feedback": "Respondeo: latria is aimed by metaphysics: worship follows substance, and the substance under those accidents is the Son of God. Aquinas had already noticed the stakes from the other side: if any bread-substance remained, adoring the Host would risk the very idolatry the charge alleges, which is one of his arguments that none remains. The doctrine protects the adorer. Berengarius abjured the thinned presence in 1079 (DS 700); Wyclif's remanence was condemned at Constance in 1415 (DS 1151); Trent's canon 6 (DS 1656) calls the Host worthy of the adoration given to the true God, because that is Who is there."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A tolerated excess of popular devotion, permitted but never taught.",
                "feedback": "Trent teaches it, canonizes it, and attaches an anathema to its denial, which is a strange way to tolerate an excess. Corpus Christi is not a folk custom that slipped past the doctors; it is the doctrine walking through the streets."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The rite's beauty, which lifts the mind Godward the way an icon does.",
                "feedback": "An icon is honored for where it points; the veneration passes through it to its subject. The Host is not honored for where it points. What is on the altar is not an image of the Lord but the Lord, which is why the honor given is not an icon's veneration but latria itself."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Presence during Mass alone; the lamp honors a memory the rest of the week.",
                "feedback": "Then the tabernacle holds leftovers and the lamp burns for nothing. Trent's fourth canon anathematizes exactly this confinement of the Presence to the moment of use: He remains as long as the species remain, which is why the Church reserves the Host for the sick, an observance she can trace, she notes, to the age of Nicaea, and why a Catholic genuflects to a quiet box at noon on a Tuesday."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t14-l3-q6`,
          type: "fill_blank",
          stem: `Session 13, Canon 1: the fence, exact. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">"If any one denieth, that, in the sacrament of the most holy Eucharist, are contained <span class="fb-blank" data-blank="b1">______</span>, <span class="fb-blank" data-blank="b2">______</span>, and <span class="fb-blank" data-blank="b3">______</span>, the body and blood together with the soul and divinity of our Lord Jesus Christ... but saith that He is only therein as in a <span class="fb-blank" data-blank="b4">______</span>, or in figure, or virtue; let him be anathema."</span>`,
          latin_tag: `vere, realiter, substantialiter`,
          doctrine_line: `In the Eucharist are contained truly, really, and substantially the body and blood, soul and divinity of Christ, whole under either species and under every part of each; not only as in a sign, or in figure, or virtue.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "truly"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "really"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "substantially"
                ],
                "case_sensitive": false
              },
              {
                "id": "b4",
                "correct_answers": [
                  "sign"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "truly",
              "really",
              "substantially",
              "spiritually",
              "symbolically",
              "sign",
              "memorial",
              "mystery"
            ],
            "feedback": {
              "all_correct": "Locked: truly, really, substantially, against the sign, the figure, and the virtue (DS 1651). One bank word deserves its footnote: spiritually is not in the canon's list of exits, because in Augustine's mouth it is true: He is present spiritually, meaning invisibly and by the power of the Spirit, and Aquinas defends the word in that sense. The canon condemns only, never spiritually. Precision is knowing which of two true-sounding words the fence actually excludes.",
              "partial_correct": "Some blanks resisted. The canon plants three adverbs and names three exits; each adverb you misplace leaves one door unbolted. Say the three denials from this lesson aloud, then set each adverb against its own."
            }
          },
        }
      ],
    },
    {
      id: `t14-l4`,
      num: `IV`,
      title: `The Same Sacrifice`,
      latin: `sacrificium propitiatorium`,
      tag: `sacrificium propitiatorium`,
      fin: {
        tag: `sacrificium propitiatorium`,
        heading: `Once for all, and therefore daily.`,
        body: `Hebrews is not the objection to the Mass; it is the reason the Mass works. Because the one oblation lacks nothing, the altar adds nothing: no new victim, no new death, the same offering made present with its fruit applied to the living and to the dead in Christ not yet fully purified. The victim is one and the same, the manner alone differing. A sacrifice that could be added to would need repeating; this one needs only reaching us.`,
        distinction: {
          latin: `cruente  ·  incruente`,
          english: `in a bloody manner  ·  in an unbloody manner`,
          gloss: `One victim, one priest, one offering; the cross and the altar differ in the manner alone.`,
        },
      },
      questions: [
        {
          id: `t14-l4-q1`,
          type: "mcq",
          stem: `Hebrews 10:14, given its full strength: by one oblation He hath perfected for ever them that are sanctified. Once, and for ever, and lacking nothing. If the cross lacked nothing, what does this morning's Mass add to it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A fresh immolation each morning: unbloody, but each time new.",
                "feedback": "One word too many: new. The immolation on the altar is unbloody and it is the same, not another; a daily new offering would concede the objection and multiply victims besides. Trent's word is that same Christ, contained and immolated, not a Christ immolated again."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Church's merits, joined to Christ's to complete what remained.",
                "feedback": "Nothing remained; that is Hebrews' whole boast and Trent's whole premise. A Mass that completed Calvary would derogate from it, and Trent's fourth canon anathematizes the derogation from the other direction. The Church brings her devotion to the altar, not her supplement."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Our thanksgiving and remembrance: the only offering left for men to make.",
                "feedback": "Praise and thanksgiving are truly offered there, and if that were all, the third canon would not exist. What is offered is the Victim Himself, propitiatory for sins, which mere remembrance can never be. Keep the gratitude; it rides a greater offering than itself."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing: no new victim, no new death; the one offering made present, its fruit applied.",
                "feedback": "Respondeo: nothing, said without embarrassment: the Mass is not an increment to Calvary but Calvary's arrival. Trent leans into the logic: the fruits of the bloody oblation are received most plentifully through the unbloody one, so far is the latter from derogating from the former. Adding was never the job; applying is."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t14-l4-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>And forasmuch as, in this divine sacrifice which is celebrated in the mass, that same Christ is contained and immolated in an unbloody manner, who once offered Himself in a bloody manner on the altar of the cross; the holy Synod teaches, that this sacrifice is truly propitiatory... For the victim is one and the same, the same now offering by the ministry of priests, who then offered Himself on the cross, the manner alone of offering being different. The fruits indeed of which oblation, of that bloody one to wit, are received most plentifully through this unbloody one; so far is this latter from derogating in any way from that former oblation.</p><div class="cr-cite">Council of Trent, Session 22, Chapter 2 (DS 1743). Waterworth translation.</div></div>The chapter balances an identity against a difference. Which reading matches the text?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Same victim, same priest, same offering; the manner alone differs.",
                "feedback": "Respondeo: the sentence holds three identities and permits exactly one difference, and it marks the difference twice over: bloody there, unbloody here, the manner alone of offering being different. The same now offering by the ministry of priests, who then offered Himself: the Priest did not retire at the ninth hour. Everything else the eye sees differ, differs on the surface of one act."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Same victim, new priest: Calvary's offerer was Christ; the Mass's is the celebrant.",
                "feedback": "Read the relative clause again: the same now offering by the ministry of priests, who then offered Himself on the cross. The subject of both offerings is one. The celebrant is the ministry through which the same Priest offers; Lesson 5 gives the man at the altar his exact and modest place."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Same manner, different victim: bread now stands where the body once was.",
                "feedback": "Inverted at both joints. The victim is one and the same is the chapter's central assertion, and the manner is the single thing it allows to differ. A bread-victim in a repeated manner is the reading Trent wrote this chapter to make impossible."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Two offerings entirely, joined by memory across the centuries.",
                "feedback": "Memory joins a commemoration to its event; this text joins them tighter: contained and immolated, present tense, the fruits received most plentifully now. Two offerings joined by memory is the bare-commemoration thesis, and the next question shows you what Trent does to it."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t14-l4-q3`,
          type: "true_false_with_reason",
          stem: `Judge the claim, which is a quotation: <em>"the sacrifice of the mass is only a sacrifice of praise and of thanksgiving, or a bare commemoration of the sacrifice consummated on the cross, but not a propitiatory sacrifice."</em>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Propitiation ended at the ninth hour; gratitude is what remains to us.",
                "feedback": "Propitiation was accomplished at the ninth hour; whether its application reaches you this morning is the living question. Trent's answer is that the Mass is how it reaches: we obtain mercy and find grace in seasonable aid. Gratitude is real and is not the engine."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. A propitiatory Mass would make God's appeasement repeatable, hence unfinished.",
                "feedback": "The sharp version, and it cuts the wrong rope: re-presentation is not repetition. The Mass does not appease God again; it sets the one appeasement on this altar and applies its fruit. Only a NEW propitiation would imply unfinished business, and Trent teaches no new anything."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Trent anathematizes those words: truly propitiatory, offered for sins, punishments, satisfactions.",
                "feedback": "Respondeo: you have just judged canon 3 of Session 22 (DS 1753), nearly letter for letter: the claim is the anathematized formula itself. The Mass is truly propitiatory, offered not only for the sins, punishments, satisfactions, and other necessities of the living, but for the dead in Christ. The Lord, appeased by this oblation, forgives even heinous crimes, says the chapter: strong words, chosen by men who had heard the alternative."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Because propitiation happens newly at each Mass, Calvary needing the help.",
                "feedback": "Right verdict, and a reason Trent would anathematize from the other side: a Calvary needing help is exactly what canon 4 forbids us to imply. The Mass is propitiatory because it is the same offering applied, not because it is another one supplied."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t14-l4-q4`,
          type: "mcq",
          stem: `The Canon of the Mass prays first for the living, then turns: for them that are gone before us with the sign of faith and repose in the sleep of peace. Trent makes the range a matter of doctrine. For whom is the sacrifice rightly offered?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The living only; death settles every account one way or the other.",
                "feedback": "Then the Church has been praying over her dead under a misapprehension since the catacombs. Trent calls offering for the departed a tradition of the apostles. Death settles the direction of the account; it does not always settle the balance, and the altar reaches where the balance is still being paid."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The living, and the departed in Christ not yet fully purified.",
                "feedback": "Respondeo: Trent's own clause, and every word placed: in Christ, so the offering presumes their salvation rather than negotiating it; not yet fully purified, so something remains that mercy can still hasten. The course has now pointed twice past death toward a purification it has not yet taught; the last module on the map owns that country."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "All the dead without condition, since the offering is infinite.",
                "feedback": "The offering's worth is infinite; its application follows the soul's state, and a soul fixed against God has closed the account from the inside. In Christ is the canon's quiet, load-bearing qualifier. Infinite value, conditioned reach: hold both."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The saints in glory, that the Mass may add to their blessedness.",
                "feedback": "Trent faces this directly in the same session: masses in honor of the saints offer the sacrifice to God alone, thanking Him for their victories and asking their patronage: never sacrifice TO them, and nothing to complete IN them. The saints lack nothing a Mass could supply; they are what the Mass is for."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t14-l4-q5`,
          type: "dialogue_branch",
          stem: `A kitchen table, after a funeral lunch. Your brother-in-law, Reformed and serious, turns a Mass card over in his hands. "People keep handing us these. Masses will be offered for her. I know it is kindly meant. But Christ died once for all; Hebrews says so in so many words. Doesn't offering Him again and again say the cross wasn't enough?" He is not scoring points; he is grieving, and he wants to know. What do you say?`,
          payload: {
            "commentatorLine": "The Commentator sets down his cup, quiet for once. 'He has asked the question Hebrews asks, and he has asked it grieving. Answer the verse and the grief together, or answer neither.'",
            "branches": [
              {
                "text": "\"It's ceremony more than doctrine. Think of it as our way of remembering her with extra solemnity.\"",
                "feedback": "Kind, and it concedes everything: a bare commemoration is exactly what Trent says the Mass is not. Worse, it forfeits the gift in your hands: if the card promises only remembrance, it promises her nothing she needs. He asked a real question; he deserved the real answer."
              },
              {
                "text": "\"Because He died once for all, the Mass adds no death. Same victim, same priest, the manner alone differing: the cross reaching her now. Hebrews is why the Mass works, not the case against it.\"",
                "feedback": "Respondeo: the whole doctrine at a kitchen table, and not a word wasted. You granted his verse its full force, then showed the card runs on it: an offering that lacked nothing needs no repeating, only reaching, and the Mass is the reach. For her: the fruit of Calvary applied to one of the departed in Christ not yet fully purified. He may not cross the Tiber this afternoon, but he has heard the actual claim, stated with love, in his own Scripture's words.",
                "verdict": "correct"
              },
              {
                "text": "\"Trent settled this in 1562. Canon three: anathema on calling it bare commemoration. You are anathematizing yourself at my table.\"",
                "feedback": "Every citation accurate, every effect wrong. The canon guards the Church's confession; it is not cutlery. You have answered a grief with a filing system, and the next question about the faith will be asked to someone else. State the doctrine; sheath the anathema."
              },
              {
                "text": "\"In a mystical way He does die again at every altar, and He offers that new dying for her.\"",
                "feedback": "Piety in the vocabulary, surrender in the logic: a new dying, mystical or otherwise, concedes his premise that the Mass adds deaths to Calvary. Christ rising again from the dead, dieth now no more. The immolation is unbloody and the same, a re-presentation, never a repetition; defend her Mass card with the doctrine, not past it."
              }
            ]
          },
        },
        {
          id: `t14-l4-q6`,
          type: "mcq",
          stem: `Aquinas: the celebration of this sacrament is an image representing Christ's Passion, and the altar is representative of the cross itself. A skeptic nods along: "An image. So it is sacred theater, and honest as long as it admits it." What did the skeptic miss?`,
          latin_tag: `sacrificium propitiatorium`,
          doctrine_line: `The Mass is a true and propitiatory sacrifice: the same Christ who offered Himself in blood on the cross is contained and immolated in an unbloody manner, the victim one and the same, the manner alone differing; offered for the living and for the dead in Christ not yet fully purified.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing; the Church herself calls the Mass an image and asks no more.",
                "feedback": "She calls it an image and asks a great deal more: the same article's second reason is that this sacrament makes us partakers of the fruit of the Lord's Passion, which no portrait ever did for its subject. The skeptic quoted half of Aquinas and got half of the Mass."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That Aquinas's image was a slip of courtesy, corrected later by Trent.",
                "feedback": "No correction was needed; Trent and Aquinas hold the same two truths at once. The Mass really is representation, image, memorial: Aquinas compares it to a fresco of which we say this is Cicero. It is also the thing no fresco is, which is the point the skeptic missed and this option throws away with him."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That theater moves hearts, and moving hearts is the Mass's real work.",
                "feedback": "If moving hearts were the work, a better-staged Mass would be a better sacrifice, and the quiet low Mass at a side altar at dawn would be the least of liturgies instead of the same infinite offering. The fruit is applied, not felt into being. Hearts follow; they do not power the thing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That this image contains what it represents: the Victim Himself, not paint.",
                "feedback": "Respondeo: the difference between every other image and this one: a fresco of Cicero holds no Cicero, and the altar holds the Crucified. Image AND presence, representation AND application: whenever the commemoration of this sacrifice is celebrated, the work of our redemption is enacted, prays the Church in her own Secret. Sacred theater has no such stage directions."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `t14-l5`,
      num: `V`,
      title: `The Priest and the Victim`,
      latin: `sacerdos et victima`,
      tag: `sacerdos et victima`,
      fin: {
        tag: `sacerdos et victima`,
        heading: `One Priest, borrowed hands.`,
        body: `The man at the altar is the ministry, not the mystery: Christ offers, in whose person and by whose power the words are pronounced, and Christ is offered, the same on the cross and on every altar of the earth this morning, one sacrifice and not thousands. The oblation is clean because its worth was never lodged in the man; and man receives his worship in visible form because he is the soul-and-body creature whose nature requires it.`,
        distinction: {
          latin: `sacerdos principalis  ·  minister`,
          english: `principal priest  ·  minister`,
          gloss: `Christ offers every Mass; the ordained man lends voice and hands, acting in His person, and the offering's worth is the Victim's own.`,
        },
      },
      questions: [
        {
          id: `t14-l5-q1`,
          type: "mcq",
          stem: `At the altar stands a man in vestments. Trent has already told you the grammar of the scene: the same now offering by the ministry of priests, who then offered Himself on the cross. Properly speaking, who is the offerer of this sacrifice?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The congregation, whose common priesthood performs the offering through its delegate.",
                "feedback": "The baptized truly offer with and through the priest, and the Church prays my sacrifice and yours; that much is honored. But a delegate of the assembly could consecrate nothing: the words are pronounced in Christ's person, not the parish's. The assembly joins an offering it does not power."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Church as juridical person, acting through her authorized agent.",
                "feedback": "The Church offers, truly, as the Bride joined to her Head; but make her a legal person wielding an agent and the Mass becomes administration. The offerer in the strict sense is not a corporation. It is the High Priest, and the man at the altar is His ministry, not her paperwork."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Christ, the principal priest, offering by the ministry of the man you see.",
                "feedback": "Respondeo: the priest at the altar bears Christ's image, says Aquinas, in Whose person and by Whose power he pronounces the words of consecration. The offerer on Calvary and the offerer at the parish Mass are numerically one Priest; what changed is the ministry through which He acts. This is why a Mass said badly, plainly, or by a dull man loses nothing of its offering: the One offering is never dull."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The ordained man by his own conferred power, as Calvary's appointed successor.",
                "feedback": "One clause ruins it: his own. Ordination configures the man to act in Christ's person; it deposits no freestanding power he wields as successor. Christ has no successors in the priesthood, only ministers; the Epistle to the Hebrews is emphatic that His priesthood does not pass by succession at all."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t14-l5-q2`,
          type: "distinction_application",
          stem: `Distinguish two things at the altar: the worth of the offering, and the state of the minister. Trent, on the first: this is that clean oblation, which cannot be defiled by any unworthiness, or malice of those that offer it. Now the case: Father N. celebrates Sunday Mass while himself in grave sin. The parish kneels, receives, goes home. What have they received?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A defiled offering: sin in the offerer stains what is offered.",
                "feedback": "The move has a name and a history: the Donatists made the sacraments hostage to their ministers' holiness, and the Church refused the ransom, at Arles in 314 and ever after. Their zeal was real and misplaced by one crucial inch: it lodged the offering's worth in the wrong man. Malachias's oblation is clean because it is Christ."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The clean oblation entire: its worth is the Victim's; his sin is his own peril.",
                "feedback": "Respondeo: distinction applied at full strength. The oblation cannot be defiled by the malice of those who offer it, because the principal Offerer and the Victim are the same spotless Lord; the parish received everything. And the minister, says Paul, should tremble for himself: the same altar that protects the people accuses the unworthy hand. Both truths, no discount."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A valid but fruitless Mass: grace suspended until a worthier celebrant offers.",
                "feedback": "Half the distinction: you kept validity and confiscated the fruit, which puts the parish on rations for the priest's sins. The fruit of the sacrifice follows the offering's worth and the receivers' dispositions, not the celebrant's ledger. Nothing the people needed was suspended."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It cannot be known: interior states decide, and interiors are hidden.",
                "feedback": "If hidden interiors decided, no one could ever kneel in peace, which is precisely why the worth was never lodged in interiors. The Church built the doctrine so that the faithful need not audit their clergy before communion. The unknowability you cite is the argument for the distinction, not against the case's answer."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t14-l5-q3`,
          type: "mcq",
          stem: `This morning the sun crossed the earth and Mass was offered on tens of thousands of altars. Count the sacrifices.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "One: same victim, same priest everywhere; one body, not many; one sacrifice, not many.",
                "feedback": "Respondeo: the arithmetic of the Mass is the arithmetic of the Presence. Aquinas, through Ambrose: just as what is offered everywhere is one body and not many bodies, so also is it but one sacrifice. His body is on many altars not as in many places but sacramentally; multiply the altars all you like, you have multiplied ministries and locations, never victims. The count was fixed at Calvary: one."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Tens of thousands: each altar its own offering, each priest his own oblation.",
                "feedback": "That count makes every parish a new Calvary and hands the Reformers their best objection for free. The many Masses are many celebrations of one sacrifice, as a thousand performances would be of one drama, except that here the Protagonist is present rather than portrayed."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "None, strictly: the sacrifice happened once in Judaea, and memory multiplies.",
                "feedback": "Strictly is doing dishonest work there: the once-in-Judaea is true and the conclusion does not follow, unless the Mass is bare commemoration, which Trent anathematized two lessons ago. The one sacrifice is not remembered into the present; it is made present. Zero is the sign-theory's count, not the Church's."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "One per communicant, since each receives the application singly.",
                "feedback": "You have counted applications and called them offerings. The fruit is received soul by soul; the sacrifice from which it flows is one, whole at every altar and in every fragment, as Lesson 3 taught with smaller arithmetic. Distribution multiplies; oblation does not."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t14-l5-q4`,
          type: "true_false_with_reason",
          stem: `Do this in commemoration of me. Judge the claim: those words commissioned a memorial practice, and nothing in them makes priests.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. A command to repeat a supper is not an ordination; priesthood arrived later, with structure.",
                "feedback": "The serious historical reading, and Trent stakes the contrary as doctrine: the command to DO what He had just done, offer His body and blood, is a command to sacrifice, and the power to offer sacrifice is priesthood by definition. The structure elaborated; the constitution happened at the table."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Commemoration is memory's work, and memory has never needed an altar.",
                "feedback": "Memory needs no altar, which is exactly why the words cannot mean only memory: what He told them to DO was what He had just DONE, and what He had just done was offer His body and blood under the species. The commemoration commanded is a sacrifice that commemorates, not a memory that replaces one."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. By those words He constituted the apostles priests, ordained to offer His body and blood.",
                "feedback": "Respondeo: canon 2 of Session 22 (DS 1752), judged exactly: by those words Christ instituted the apostles priests and ordained that they and other priests should offer. The chapter says it warmly where the canon says it with a fence: He left His beloved Spouse a visible sacrifice and, at the same table, the men to offer it. Priesthood and Eucharist were born in one sentence; neither survives the other's removal."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The community's need generates priesthood, and the words presuppose the need.",
                "feedback": "Right verdict, functionalist engine: a priesthood generated by need is employed by the congregation, and we buried that account at question one. The words do not presuppose a need that makes priests; they MAKE priests. The gift precedes the job description."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t14-l5-q5`,
          type: "mcq",
          stem: `Trent gives the reason there is an altar at all: Christ left His Spouse a visible sacrifice, such as the nature of man requires. Pause on that clause. Which account of man is it resting on?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Man the pure spirit, temporarily embarrassed by a body.",
                "feedback": "A spirit merely lodging in flesh would need no candles, no bread, no bells: pure acts of pure mind would serve. The clause assumes the opposite creature. Angels worship without altars; we are not angels, and the Church has never apologized for it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Man the weak believer, indulged with signs until his faith matures past them.",
                "feedback": "Then the strongest faith would skip Mass, and the saints attended most. The visible sacrifice is not a training-wheel; it fits the nature, and the nature does not mature out of having a body. What requires the visible is what we ARE, not what we have failed so far to become."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Man the social animal, requiring public ceremony for group cohesion.",
                "feedback": "True as far as sociology reaches, and sociology stops at the church door: cohesion explains why men gather, never why what they gather around must be a sacrifice containing its Victim. Durkheim can seat the congregation; he cannot consecrate. Trent's clause runs deeper than the social."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Man the composite of soul and body, whose worship must arrive through the visible.",
                "feedback": "Respondeo: the creature the course spent two modules assembling: form and matter, soul and body, one being. His knowing begins in the senses, so his religion reaches him in bread, oil, water, word, and a hand raised over a bowed head. A worship without external helps, Trent says elsewhere in the same session, does not easily raise the mind of such a creature. The Mass is not a concession to the body; it is a compliment to the composite."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t14-l5-q6`,
          type: "mcq",
          stem: `Augustine set the rule for Calvary: in Christ's sacrifice the priest and the victim are one and the same. Aquinas says that at the Mass this holds too, in a measure. In what measure?`,
          latin_tag: `sacerdos et victima`,
          doctrine_line: `Christ is the principal priest of every Mass, offering by the ministry of men He constituted priests with the words Do this; the oblation is clean, undefiled by any unworthiness of those who offer; and on every altar of the world the sacrifice is one.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The celebrant becomes co-victim, made worthy by his devout suffering at the altar.",
                "feedback": "Devotion is asked of him and co-victimhood is not conferred by it. The measure Aquinas names runs through person, not through piety: the man acts in the person of the Priest-Victim; he does not enlist as a second victim. Keep the celebrant's sufferings in his own prayers, where they belong."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In no measure; the phrase is a rhetorical flourish about Calvary alone.",
                "feedback": "Aquinas does not spend flourishes; in a measure is doing exact work. The objection he is answering says the Mass cannot be Christ's sacrifice because priest and victim there are NOT the same; his reply is that they are, in the precise measure that the celebrant acts in the Victim's own person. Deflate the phrase and the objection stands back up."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Priest and people together constitute the victim, as Christ's own body.",
                "feedback": "There is a truth nearby: the Church is offered with her Head, and Augustine loved to say so. But the sacramental Victim on the altar is Christ Himself, not the congregation; the people's self-offering rides His, and never replaces it. The measure in question is the celebrant's acting in His person, not the parish's enlistment as the host."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The same Christ is offerer and offered; the celebrant acts in His person, lending voice and hands.",
                "feedback": "Respondeo: and so, in a measure, the priest and victim are one and the same, because at the altar as on the cross, the One offering and the One offered are the same Lord. The man in vestments is the measure's instrument: his voice, His words; his hands, His offering. The module's title was a description all along."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `t14-l6`,
      num: `VI`,
      title: `Communion`,
      latin: `communio`,
      tag: `communio`,
      fin: {
        tag: `communio`,
        heading: `The Food that eats the eater into Itself.`,
        body: `Ordinary bread surrenders to the one who eats it; this Bread reverses the verb, assimilating the communicant into the Body he receives. So the sacrament does everything food does, sustaining, increasing, restoring, delighting, and one thing no food dreamed of: it is the pledge, under veils, of the same banquet unveiled. Approach in charity and it repairs the day's small losses; approach in mortal sin and the Apostle's terror applies; approach in desire only, when no altar can be reached, and the fruit is real. It is bread, not poison, said Augustine: approach without fear.`,
        distinction: {
          latin: `sacramentaliter  ·  spiritualiter`,
          english: `sacramentally  ·  spiritually`,
          gloss: `Trent's three ways of receiving: the Host without the fruit, the fruit by desire without the Host, and both together at the rail.`,
        },
      },
      questions: [
        {
          id: `t14-l6-q1`,
          type: "mcq",
          stem: `Ordinary bread obeys the eater: chewed, changed, made into you. Damascene reaches for a stranger picture: a live ember is not simply wood, but wood united to fire. What does this Food do that no food does?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It assimilates the eater: not changed into you, it changes you into Him.",
                "feedback": "Respondeo: the direction of digestion reverses, because here the Food is the stronger life. Aquinas keeps the whole food-ledger, sustaining, giving increase, restoring, giving delight, and then hands it to grace: the sacrament does for the spiritual life all that material food does for the body, except surrender. The ember is Damascene's shorthand: wood united to fire keeps wood's look and burns with something not its own."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It nourishes the body first, and the soul by generous overflow.",
                "feedback": "Backwards plumbing: the sacrament's direct work is the soul's life, and the body's share arrives at the resurrection, when glory overflows the other way. Whoever ate for bodily health was at the wrong table; the fast before Mass was never a diet."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It symbolizes nourishment, which faith then supplies inwardly on its own.",
                "feedback": "The sign-only account again, now aimed at the effects: if faith supplies what the sacrament merely pictures, the Bread of Life discourse promised a metaphor. The sacrament confers what it signifies; that is the whole difference between a sacrament and a sermon."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It strengthens exactly in proportion to the eater's grasp of the doctrine.",
                "feedback": "Then theologians would be saints by seniority, a proposition against all observed evidence. Dispositions matter, charity above all; comprehension is not the meter. The simplest communicant in the state of grace out-receives a distracted doctor of the Church."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t14-l6-q2`,
          type: "mcq",
          stem: `A body loses a little every day to the mere heat of living, and food makes the loss good. Aquinas transfers the physiology: something of our fervor is lost daily through venial sins, which lessen the heat of charity; and Ambrose calls this daily bread a remedy against daily infirmity. What repair is being claimed?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Forgiveness of mortal sin, when confession cannot conveniently be reached.",
                "feedback": "Inverted at the doorstep: mortal sin is not daily wear but death, and the dead are not fed, they are raised. The sacrament of the dead is Penance; the Eucharist presupposes the life it nourishes. The next question stands at exactly this threshold."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Exemption from temptation for the day of a worthy reception.",
                "feedback": "No such armistice was signed. The sacrament guards, Aquinas says, as food strengthens from within and as armor repels from without, and Chrysostom promises we leave the table terrible to the devil; none of that suspends the war. Preservation is a strengthening, not an exemption, and free will remains gloriously in play."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Bodily health, as the manna once sustained Israel in the desert.",
                "feedback": "The manna fed bodies and its eaters died, as the Bread of Life discourse pointedly notes. This Bread's repair is aimed at the soul's daily wear; bodies wait for the resurrection for their share. Read the physiology in the stem as the metaphor it is."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Venial sins blotted out: charity's act rekindled burns off the small debris.",
                "feedback": "Respondeo: the daily losses made good by the daily bread. Venial sin cools the fervor of charity without killing it; the sacrament, whose reality is charity itself, rekindles the act, and by that act the small sins are forgiven, says Aquinas, as drops on a stove. Daily wear, daily remedy: the economy is domestic, which is the tenderness of it."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t14-l6-q3`,
          type: "true_false_with_reason",
          stem: `A communicant in the pew knows himself guilty of mortal sin. His contrition this morning feels perfect, his sorrow sincere. Judge: he may go up to the rail now and confess afterward.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Perfect contrition already restores friendship with God; the sacrament crowns it.",
                "feedback": "The near-truth that makes this hard: perfect contrition, with the intention of confessing, truly does restore the soul. But Trent legislated for exactly this morning: conscious of mortal sin, HOWEVER CONTRITE he may seem to himself, sacramental confession must come first when a confessor can be had. The law does not doubt his tears; it protects what he approaches, and it protects him from his own certainty about his tears."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. To refuse him would set a canon between a soul and its God.",
                "feedback": "The canon is not between him and God; it is the doorkeeper showing him the door that actually opens. Confession is not an obstacle to the Eucharist but its threshold, and Paul's eateth judgment to himself is the danger the Church is walking him around. Compassion that waves him past the confessional is not compassion; it is haste."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Trent: conscious of mortal sin, however contrite he seems, confession comes first.",
                "feedback": "Respondeo: Session 13, chapter 7, with canon 11 standing behind it (DS 1646-1647, 1661): faith alone is not sufficient preparation, and the how contrite soever clause answers this exact morning. One carve-out lives in the chapter's own text: a priest bound to celebrate in urgent necessity with no confessor available confesses as soon as possible after. The rule is reverence organizing love, not a wall against it; what waits at the rail deserves a soul that has knelt in the other box first."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. His remaining guilt proves the contrition was counterfeit all along.",
                "feedback": "Right ruling, cruel arithmetic: contrition can be real and the law still binding. Trent does not accuse his sorrow; it declines to make his sorrow the judge in its own case. Keep the verdict and lose the sneer; the man in that pew is being protected, not prosecuted."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t14-l6-q4`,
          type: "distinction_application",
          stem: `Trent's Fathers rightly and wisely distinguished three ways of receiving this sacrament: sacramentally only, as sinners do, the Host taken and the fruit refused; spiritually only, eating in desire by a lively faith which worketh by charity; and both together, sacramentally and spiritually, at the rail in the state of grace. Apply the distinction: a Catholic in a country stripped of priests keeps Sunday by the missal at her kitchen table, longing for the sacrament she cannot reach. Her reception?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Spiritually only: she eats in desire, and the fruit she receives is real.",
                "feedback": "Respondeo: Trent's second way, applied exactly (DS 1648): eating in desire that heavenly bread, by a lively faith which worketh by charity, made sensible of the fruit thereof. The Church does not shrug at her distance; desire is a mode of eating, and the table reaches farther than the rail. Centuries of the sick, the imprisoned, and the priestless have lived on the second way; she is in old company."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Sacramentally only: distance has made her, in effect, a fruitless receiver.",
                "feedback": "Sacramentally only is the sinner's mode, the Host on the tongue and the heart barred against it; she has the inverse, the heart open and no Host in reach. You have filed her under the one category she cannot occupy: nothing sacramental occurred at her kitchen table, and much fruit did."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Both together: desire counts as full sacramental reception when no priest exists.",
                "feedback": "Kindness inflating a category until it bursts: if desire were sacramental reception, the distinction Trent drew would erase itself, and the martyrs who died longing for viaticum received it after all, which even their acta do not claim. Her fruit is real; her reception is spiritual. The Church honors her by keeping the words exact."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither: reception requires the species, and absence is simply absence.",
                "feedback": "The rigorist reading, and Trent wrote the second way against it before rigorism had its modern names: some receive spiritually only. Absence of the species is not absence of the gift; the sacrament's power reaches through desire for it, as Aquinas taught of the sacrament's very efficacy. Her Sunday is not nothing; it is the second way, with real fruit."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t14-l6-q5`,
          type: "mcq",
          stem: `Give us this day our daily bread. Augustine pressed the adjective without mercy: If it be a daily bread, why do you take it once a year? Receive it daily, that it may benefit you every day. Aquinas gives the reason in kind. Which is it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Precept: the Church commands the faithful to receive every day.",
                "feedback": "The command runs the other way and lower: the precept is yearly at least, at Easter, on pain of canon 9. Daily is not the law's floor but devotion's invitation. Confusing the minimum with the measure would make Augustine's dare a citation, and it is a dare."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Reverence grows by rarity: the less often received, the more worthily.",
                "feedback": "The rigorist instinct, recurring in every century and corrected in most of them, most famously when Pius X threw the rails open to frequent communion in 1905. Rarity measures awe badly: the sacrament is medicine and food, and no physician doses reverence by starvation. Worthiness is a state, not a scarcity."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Symbol: daily bread means ordinary table bread, and nothing more.",
                "feedback": "Augustine is quoting the petition precisely to deny it stops at the table. The Fathers heard both breads in the verse, and the supersubstantial bread of Matthew's Greek was their warrant. Flatten the word to flour and the dare in the stem loses its object."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Daily defects: daily need of the Passion's fruits, so the sacrament is offered daily.",
                "feedback": "Respondeo: Aquinas's own reason for the Church's own practice: owing to our daily defects, we stand in daily need of the fruits of our Lord's Passion, and therefore this sacrament is offered regularly every day in the Church. The wound is daily, so the remedy is daily; liturgical frequency is diagnosis, not enthusiasm. Augustine's dare stands: receive it daily, that it may benefit you every day."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t14-l6-q6`,
          type: "mcq",
          stem: `Trent ends the chapter like a homesick letter: that we may arrive at our heavenly country, there to eat, without any veil, that same bread of angels which we now eat under the sacred veils. Eaten under veils, the sacrament is a pledge. Of what?`,
          latin_tag: `communio`,
          doctrine_line: `Received in charity, the sacrament nourishes as grace's own food: sustaining, increasing, restoring, delighting; blotting out venial sins and guarding against mortal; received in mortal sin it is received to judgment, and Trent requires confession first, however contrite the heart believes itself.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Glory to come: the same Lord, veiled now, seen then without any veil.",
                "feedback": "Respondeo: Trent's own earlier phrase is a pledge of our glory to come, and the chapter's last line names the cash value: the SAME bread of angels, the identical Lord, now under species, there face to face. Every communion is eschatology in miniature; the rail is the far country tasted early. What remains for the course is the country itself, and the last module on the map goes there."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Continuity of custom: the Church will always have her liturgy.",
                "feedback": "Smaller than the sentence. The pledge is not that Masses will continue but that Masses will END, gloriously: the sign gives way when the signified arrives, and no one eats under veils in the country where the veils are off. The liturgy is the promise's carrier, not its content."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A completed rite, sufficient in itself; the veils are the destination.",
                "feedback": "No sacrament is the destination; every sacrament is for the wayfarer, and viaticum means provisions for the road. Mistake the veils for the country and the homesick letter reads like a lease. The rite is complete AS a pledge, which is precisely to say it points past itself."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Weekly relief from the world, granted to the tired.",
                "feedback": "Relief is real and beside the point; the sentence is not about rest but arrival. A pledge binds the future: this Bread commits God to a banquet where nothing intervenes, not even appearances. Consolation you can get from a quiet hour; only this sacrament promises the veil's removal."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t14-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The summit, owned.`,
        body: `An apple on a table, a name of its own, three adverbs, one Victim on a hundred thousand altars, food that assimilates the eater: the module in five moves, and underneath all five, the distinction a beginner once practiced on fruit. This is what the philosophy was for; not to prove the mystery, but to hold it sayable while faith holds it true. Past the veils lies the country where the sayable is seen. One module remains.`,
        distinction: {
          latin: `sub velaminibus  ·  sine velamine`,
          english: `under the veils  ·  without any veil`,
          gloss: `The same bread of angels eaten hidden now and seen unveiled there: the sacrament's own door to the Last Things.`,
        },
      },
      questions: [
        {
          id: `t14-l7-q1`,
          type: "match_pair",
          stem: `The module in five images. Match each to the doctrine it carries.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the green apple, produced one last time"
              },
              {
                "id": "L2",
                "text": "a change with a name of its own"
              },
              {
                "id": "L3",
                "text": "the risen Lord, who dies now no more"
              },
              {
                "id": "L4",
                "text": "one Victim on a hundred thousand altars"
              },
              {
                "id": "L5",
                "text": "the bread of angels under sacred veils"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "substance beneath accidents: the mystery stated without absurdity"
              },
              {
                "id": "R2",
                "text": "the whole substance converted whole: possible to infinite act alone"
              },
              {
                "id": "R3",
                "text": "concomitance: whole Christ under either species and every part"
              },
              {
                "id": "R4",
                "text": "one sacrifice, the same as the cross, the manner alone differing"
              },
              {
                "id": "R5",
                "text": "the pledge of glory: eaten hidden now, seen unveiled there"
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
              "all_correct": "Five images, five doctrines, correctly seated: the apple to sayability, the name to the conversion, the deathless Lord to concomitance, the many altars to the one sacrifice, the veils to the pledge. A module you can now carry in one hand.",
              "partial_correct": "Some pairs misfiled. Walk the week again from the apple forward: what each image was doing when you met it is what it is doing here. The doctrines have not moved."
            }
          },
        },
        {
          id: `t14-l7-q2`,
          type: "mcq",
          stem: `The course's first lesson put an apple on a table and split what-it-is from how-it-appears. Name precisely what that purchase pays for here at the summit.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A proof: the metaphysics demonstrates that the consecration changes the bread.",
                "feedback": "The overreach the module has refused twice by name: nothing detects the change, not sense, not understanding. A metaphysics that could prove the Eucharist would make faith a redundancy and Cyril's sentence a filler. The purchase was real and it was not this."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Sayability: the doctrine stated without absurdity, against every charge of nonsense.",
                "feedback": "Respondeo: the exact yield. Substance-and-accident lets the Church say whole substance converted, species remaining and mean it, with no contradiction anywhere in the sentence; the charge of nonsense dies at the grammar. Faith supplies the fact, authority the warrant, metaphysics the sayability. The first tool the course ever handed you was being saved for the altar, and now you have seen it spent."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A picture: an aid for imaginations that need the abstract made homely.",
                "feedback": "The apple was never decoration; it was load-bearing. Remove the distinction it taught and Trent's definition does not become harder to picture, it becomes impossible to say. Pictures comfort; this one was scaffolding."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A hedge: vocabulary for doubting the senses respectfully.",
                "feedback": "The senses were acquitted in Lesson 1 and never re-indicted: they report accidents truly, before and after. No hedge was needed. The vocabulary's work was making the mystery pronounceable, not making doubt polite."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t14-l7-q3`,
          type: "precision_check",
          stem: `A claim to test at the summit: <em>"With transubstantiation defined, the mystery has been solved: we now know how the change works."</em> Where exactly does it go wrong?`,
          payload: {
            "statement": "With transubstantiation defined, the mystery has been solved: we now know how the change works.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At defined: Trent described the change devoutly but never defined anything.",
                "feedback": "Trent defined with canons and anathemas attached, which is definition wearing its formal dress. The error in the claim is not that a definition happened; it is what the claimant thinks a definition does."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At the mystery: there was never a mystery, only grammar awaiting cleanup.",
                "feedback": "The grammar was cleaned and the mystery is intact underneath it, which is the whole architecture: sayability is not transparency. A doctrine you can state without absurdity is not thereby a doctrine you can see through. Ask the angels, who see more and worship no less."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At solved and how: the definition fences the fact; the manner stays with God.",
                "feedback": "Respondeo: cut found, both words. The Church defines what is: whole substance into whole substance, species remaining; she exhibits no machinery, because the change is not a natural movement with workings to expose. A boundary stone tells you whose field it is, not what the soil is doing. The learner leaves this module knowing exactly what happens and reverently ignorant of how, which is the correct inventory."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At the change works: nothing works; presence is a relation, not a reality.",
                "feedback": "Relational presence is the thinned account this module has answered under three names already. Something works: a conversion terminating in the Body of the Lord. The claim's error was pride about the how, not excess about the what."
              }
            ],
            "correct_option_id": "c",
            "correction": "Transubstantiation defines what occurs and its kind; it neither exposes nor claims to expose the manner, which belongs to the power of God alone. The mystery is fenced, not dissolved: stated without absurdity, believed without diagram."
          },
        },
        {
          id: `t14-l7-q4`,
          type: "mcq",
          stem: `A friendly editor proposes trimming the module's vocabulary: keep sacred meal and memorial, both true, and retire the harder pair as period furniture. Which pair cannot go without the doctrine going with it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Mystery and presence: the softer words carry everything the harder ones did.",
                "feedback": "Both words are real and neither is the fence. A mysterious presence could still be a presence merely commemorated at a meal; Zwingli could sign that sentence. The pair the anathemas actually guard is sharper."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Sacrifice and propitiatory: the Mass offered for sins, for the living and the dead.",
                "feedback": "Respondeo: the two words Session 22 built its canons around (DS 1751, 1753): a true and proper SACRIFICE, truly PROPITIATORY, offered for the living and the dead; deny either and the anathema names you. Meal and memorial are true and cheap; this pair is true and costly, which is why the editor reached for it first. The confession the course carries says it plainly: truly propitiatory and expiatory, never a mere meal or memorial."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Latria and concomitance: the technical pair, hence the load-bearing one.",
                "feedback": "Technical, yes; foundational, no: both follow from the Presence rather than establish it. Grant that He is there and adoration and whole-under-each-part follow like corollaries. The pair the doctrine cannot survive losing is the one about what the Mass IS."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Species and substance: the metaphysics, without which nothing can be said.",
                "feedback": "Closer, and still one layer down: the metaphysical pair makes the doctrine sayable, but a Church that lost the words sacrifice and propitiatory while keeping her Aristotle would have a well-fenced field with the crop removed. The editor's blade was aimed at the crop."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t14-l7-q5`,
          type: "true_false_with_reason",
          stem: `A seven-year-old at the rail, first communion, receives one small fragment of a broken Host. Judge: she has received the whole Christ.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Whole Christ under every part of either species; breaking divides accidents, never substance.",
                "feedback": "Respondeo: Trent, chapter 3 and canon 3 (DS 1653): whole and entire under the species of bread AND UNDER EVERY PART of that species. What the fraction divides is quantity, and quantity is an accident; substance was never the kind of thing a knife reaches. She has received no less than the Pope at his own Mass: the whole living Lord, body, blood, soul, divinity. First communions are not scaled to size."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Her faith supplies whatever completeness the fragment lacks.",
                "feedback": "Right verdict, wrong engine: her faith receives; it does not top up. The fragment lacks nothing for faith to supply, or the doctrine would hang on the fervor of seven-year-olds, a foundation the Church has wisely declined. The completeness is in what is there, not in what she brings."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. A part contains a part; proportion is simple honesty.",
                "feedback": "Honest arithmetic applied to the wrong column: proportion governs quantity, and quantity stayed behind with the accidents. The substance under the fragment is not sliced because substance has no slices. Lesson 3 did this sum with the chalice; the rail does it with the fraction."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Only the unbroken Host carries the full presence, as the rubrics imply.",
                "feedback": "The rubrics handle fragments with reverence precisely because each fragment is the whole Lord, which is the opposite of what you inferred from them. Care for crumbs is concomitance in choreography. Nothing about wholeness waits on the baker's geometry."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t14-l7-q6`,
          type: "mcq",
          stem: `The course began with an apple on a table and stands now at the rail, at the summit of the sacramental order. The bread of angels is eaten under veils. One road remains on the map. Where does it go?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `Substance under accidents, the whole substance converted, whole Christ under every fragment, one propitiatory sacrifice on every altar, the bread of angels under veils: the course's first distinction has reached its summit, and one road remains.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Past the veils: death, judgment, and the vision where signs give way to sight.",
                "feedback": "Respondeo: the Last Things, where the course's whole journey lands: the same Lord eaten here under species, seen there without any veil, and the act of being the philosophy found on a table met at last as He is. Trent's homesick sentence was the itinerary all along. One module remains, and it is the arrival. Opens the door to the Last Things."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Back through the Church's structures, which administer what the altar gives.",
                "feedback": "The course has already walked that road: the visible body, her marks, her keys, her kingship. The sacramental summit does not descend back into administration; it looks up. What remains is not how the gifts are governed but where the Giver is seen."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A review of the metaphysics, now that its work is complete.",
                "feedback": "Its work is not quite complete: the same tools have one more country to describe, where the soul survives its body and the body returns to its soul. The philosophy retires after the vision, not before it. And even then, retirement is the wrong word for tools that turned out to be a road."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nowhere: the summit is the end, and the map is complete.",
                "feedback": "A summit with a homesick letter in its final chapter is not an end; it is a window. The pledge eaten under veils is a promissory note, and promissory notes mature. The map has one country left, and the course was built to end there: not at the altar, but at what the altar was the pledge of."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    }
  ],
};
