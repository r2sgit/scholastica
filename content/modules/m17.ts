import type { ModuleMeta } from '../types';

export const m17: ModuleMeta = {
  id: 17,
  title: `Method of the Summa`,
  short: `Method of the Summa`,
  label: `Module 17 · Method of the Summa`,
  latin: `Modus Summae`,
  aim: `The article is the tradition's thinking technology: a question posed as genuinely open (utrum), the contrary case given its strongest day in court (videtur quod), the turn marked by an authority (sed contra), the master's determination argued from principles (respondeo), and every objection answered by distinction, never by dismissal (ad obiecta). Authorities carry ranked weights: canonical Scripture proper and incontrovertible, the doctors proper but probable, the philosophers extrinsic and probable; and the whole form is the fair-fight ethos made procedure. The learner has been living inside this grammar since the first lesson; this module hands over the machine itself.`,
  lessons: [
    {
      id: `m17-l1`,
      num: `I`,
      title: `Anatomy of an Article`,
      latin: `articulus`,
      tag: `articulus`,
      fin: {
        tag: `articulus`,
        heading: `The ritual you have been living in.`,
        body: `Open the Summa anywhere and the same choreography repeats, thousands of times: a question posed as open (<span class="lat">utrum</span>), the case against the author's own position stated at full strength (<span class="lat">videtur quod</span>), a short authority marking the turn (<span class="lat">sed contra</span>), the determination argued from principles (<span class="lat">respondeo</span>), and each objection answered, none dismissed (<span class="lat">ad obiecta</span>). It is not decoration; it is a machine for honest thinking, and it is the machine this course has quietly run on since the first apple. Next lesson: why the enemy speaks first, and why he is given the best lines.`,
      },
      questions: [
        {
          id: `m17-l1-q1`,
          type: "mcq",
          stem: `Open the Summa anywhere. Before Aquinas tells you what he holds, he argues against it, in numbered points, as persuasively as he can. Why would a teacher open with the enemy's case?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Medieval convention: disputations required it, and he complied.",
                "feedback": "The convention existed, and explaining the form by the custom only moves the question: why did the whole tradition bind itself to this custom? Conventions this expensive survive because they do something. Ask what this one does to the man who must write under it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The form commits him: no verdict may be spoken until the strongest contrary case has been heard in full.",
                "feedback": "Respondeo: the objections are a discipline the author imposes on himself. A position earns its determination only after the best case against it has stood in the room at full strength. The form makes intellectual honesty procedural, which is why it survived the men who used it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Rhetoric: a weak opposing case first makes the answer shine brighter.",
                "feedback": "Then he would write weak objections, and he writes the strongest on record; his statement of the case against God's existence armed atheists for seven centuries. A man rigging the fight does not hand his opponent the sharpest sword in the armory."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Suspense: the reader must be kept uncertain of the outcome.",
                "feedback": "No reader of the Summa is uncertain of the outcome; the sed contra tips the verdict before the answer begins, on purpose. The form is not a mystery novel. The objections are there for justice, not for drama."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m17-l1-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Objection 1. It seems that God does not exist; because if one of two contraries be infinite, the other would be altogether destroyed. But the word "God" means that He is infinite goodness. If, therefore, God existed, there would be no evil discoverable; but there is evil in the world. Therefore God does not exist.</p><div class="cr-cite">ST I, q. 2, a. 3, obj. 1 · trans. Fathers of the English Dominican Province · verified against New Advent</div></div>This paragraph sits at the head of the most famous article ever written. In the article's grammar, what is it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The videtur quod: the contrary case, stated as if believed, at full strength.",
                "feedback": "Respondeo: it seems that God does not exist. Aquinas writes the argument from evil so cleanly that seven centuries of unbelief have mostly footnoted him. That is the videtur quod's office: the opposing counsel's speech, written by the judge, with the judge's whole skill."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The author's confession of doubt before he begins.",
                "feedback": "Nothing here is confessed; everything is staged with intent. The medieval master states the contrary case as an office of the form, not as autobiography. Aquinas's own certainty is not in question; his fairness is being performed, procedurally."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The respondeo: the master's own determination of the question.",
                "feedback": "Read the last line again: therefore God does not exist. If that were the determination, the Summa would be a very different book. The respondeo comes later and argues the other way; this is the case it must first deserve to answer."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A strawman: a deliberately weak case set up for the knockdown.",
                "feedback": "Weigh it: if infinite goodness exists, how does any evil remain? Philosophers still call this the strongest argument against theism, and Aquinas wrote it for them. The form forbids straw; that prohibition is the next lesson entire."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m17-l1-q3`,
          type: "sequence",
          stem: `The five movements of one article, shuffled. Restore the choreography.`,
          payload: {
            "instruction": "Tap the parts in order, first to last.",
            "items": [
              {
                "id": "s1",
                "text": "utrum: the question, posed as genuinely open"
              },
              {
                "id": "s2",
                "text": "videtur quod: the objections, the contrary case at strength"
              },
              {
                "id": "s3",
                "text": "sed contra: the turn, marked by an authority"
              },
              {
                "id": "s4",
                "text": "respondeo: the determination, argued from principles"
              },
              {
                "id": "s5",
                "text": "ad obiecta: each objection answered by distinction"
              }
            ],
            "correct_order": [
              "s1",
              "s2",
              "s3",
              "s4",
              "s5"
            ],
            "feedback": {
              "all_correct": "The choreography, restored: question, contrary case, turn, determination, replies. Five movements, no substitutions, ten thousand performances across the Summa, and not one where the enemy was denied his speech.",
              "partial_correct": "The order slipped. Follow the courtroom: the question is called, the opposing counsel speaks first and fully, the bench signals the turn with an authority, the judge determines from principles, and every objection receives its answer before the court rises."
            }
          },
        },
        {
          id: `m17-l1-q4`,
          type: "mcq",
          stem: `Every article opens with <span class="lat">utrum</span>: whether. Whether God exists; whether sacred doctrine is a science; whether angels know singulars. What does that little word do?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It softens the doctrine, so the timid are not frightened off.",
                "feedback": "Nothing about the Summa is timid, least of all its questions; whether God exists is not a softened sentence. The whether is not upholstery. It is a procedural commitment about how the question will be treated once posed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It poses the question as genuinely open for the space of the disputation: the answer must be earned inside the article.",
                "feedback": "Respondeo: utrum suspends the verdict at the door. Within the article's walls, even what the whole Church holds is argued for, not presumed; the form refuses to let settled truths grow lazy. A doctrine that must earn its determination daily stays muscled."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It signals that the Church has no position, and the reader may choose.",
                "feedback": "The sed contra will tip the house position within two paragraphs, and the respondeo will argue it. The openness is methodological, not doctrinal: the question is treated as open so the answer can be shown to be earned. Liberty of conclusion was never the offer."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It is grammatical filler inherited from classroom Latin.",
                "feedback": "Inherited, yes; filler, no. The classroom it came from was the disputation, where the whether marked a real contest about to be staged. The Summa kept the word because it kept the contest. Nothing in this form is idle."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m17-l1-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "The objections in the Summa are strawmen: weak cases set up for an easy knockdown."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. No author gives real weapons to his enemies.",
                "feedback": "This author does, article after article. The evil objection you just read is still the unbeliever's best line; the objections against the Real Presence, the soul, and free will are the strongest their centuries produced. The form demanded real weapons, and he forged them."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Medieval opponents were weak, so the objections are weak by inheritance.",
                "feedback": "The medieval opponents included Averroes and Maimonides, and where the living opponents ran thin, Aquinas strengthened their cases himself before answering. The objections are often better than what the objectors actually wrote. That is the opposite of straw."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The objections are the strongest contrary cases the master can state; the form collapses without that honesty.",
                "feedback": "Respondeo: answer a weak case and the strong one survives you; the article's whole warrant is that what it determines has faced the best contrary evidence in the room. Aquinas states enemies better than they state themselves. The form is fair-fight ethics made procedure."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. There are no real objections; the numbered points are rhetorical questions.",
                "feedback": "Right verdict, wrong reading: the points are real arguments with premises and conclusions, and each will receive a real answer in the ad obiecta. Nothing in the article is rhetorical in the empty sense. The right rescue is the honesty of the objections, not their unreality."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m17-l1-q6`,
          type: "mcq",
          stem: `One more look around the room. Quaestio at the top of your screen; Respondeo on every answer you have chosen for seventeen modules. Where have you met the article's grammar before?`,
          latin_tag: `articulus`,
          doctrine_line: `The article runs in five movements: utrum, videtur quod, sed contra, respondeo, ad obiecta.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nowhere; this module introduces it fresh.",
                "feedback": "Scroll your memory: every lesson posed a quaestio; every option you weighed spoke as a respondeo; every feedback panel answered your chosen position the way replies answer objections. The introduction happened seventeen modules ago, quietly."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Everywhere: this course has been one long article, and you have been inside the form since the first apple.",
                "feedback": "Respondeo: the app's whole chrome is the disputation's furniture: questions posed open, positions stated at parity, verdicts earned, wrong answers honored with real replies. The course did not teach you ABOUT the method first; it formed you IN it. This module only hands you the machine you have been riding."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In the glossary, where the Latin terms were parked.",
                "feedback": "Parked is the wrong verb: utrum, respondeo, and sed contra have been working terms in the interface since the beginning, not exhibits. The grammar was load-bearing all along. This lesson only points at the beams."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "In the capstone lessons only, where recaps mimic disputation.",
                "feedback": "The recaps synthesize; the disputation runs everywhere else too, in every four-option contest between real positions. One lesson type does not hold the form. The form holds the course."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `m17-l2`,
      num: `II`,
      title: `The Objections Are Friends`,
      latin: `videtur quod`,
      tag: `videtur quod`,
      fin: {
        tag: `videtur quod`,
        heading: `He armed his enemies better than they armed themselves.`,
        body: `The <span class="lat">videtur quod</span> is the article's costliest discipline: the master must state the contrary case so well that its partisans would sign it. Aquinas's argument from evil is still atheism's best opening; his parsimony objection anticipated the razor by a generation. And the objections are never destroyed, only answered: they stand in the article forever, honored guests with their names on the replies. The learner who inherits this form inherits its ethic: no verdict before the best contrary case has spoken, and no contempt for it afterward. Next lesson: the strange short sentence that turns the article, and what quoting an authority actually proves.`,
      },
      questions: [
        {
          id: `m17-l2-q1`,
          type: "mcq",
          stem: `Writing the best possible case against your own position costs sweat and risk. What does the master buy with it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The right to a verdict: an answer earns its authority only over the strongest contrary case.",
                "feedback": "Respondeo: defeat a weak objection and the strong one is still out there, undefeated, waiting for your student to meet it unarmed. The article's determination is worth exactly as much as the objections it answered. Aquinas priced his verdicts high by arming the opposition fully."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A reputation for fairness, useful in academic politics.",
                "feedback": "Reputation follows the practice, but a form this expensive is not maintained for optics; plenty of cheaper fairness-signals existed. The purchase is epistemic: the answer that survives the best objection is the only answer worth determining. The politics were incidental."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Suspense capital, spent when the respondeo arrives.",
                "feedback": "The sed contra spoils the suspense on purpose before the respondeo ever arrives. The form spends nothing on drama. What the objections purchase is the right to speak at all: no determination without a fair hearing first."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Deniability: if refuted later, he can claim he saw it coming.",
                "feedback": "A master determining a question owns the verdict entirely; the form permits no hedging, which is why every article ends in a committed respondeo. The objections are not insurance. They are the opposing counsel the judge insists on funding."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m17-l2-q2`,
          type: "mcq",
          stem: `Weigh the evil objection as its author built it: infinite goodness and evil are contraries; an infinite contrary destroys its opposite entirely; evil remains. What makes the machine so strong?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Its emotional force: suffering makes readers doubt.",
                "feedback": "The emotional force is real and the objection uses none of it: no orphans, no plagues, not one tear staged. Aquinas built it cold, from the logic of contraries and the meaning of infinite. Its strength is that it works on a reader who feels nothing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The premises are the believer's own: God's infinite goodness supplies the weapon.",
                "feedback": "Respondeo: the objection borrows nothing from unbelief; it runs entirely on what the Church herself confesses, infinite goodness, plus one metaphysical rule about contraries. An argument against you built wholly from your own materials is the strongest kind there is, and Aquinas donated the materials."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Its novelty: no one had thought of evil as a problem before.",
                "feedback": "Job thought of it, and Epicurus, and every mother at a small grave since the beginning. The objection's power is not novelty but formalization: the ancient wound stated as a tight two-premise machine. Old pain, new rigor."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Its scope: it disproves every religion at once.",
                "feedback": "It targets one doctrine with precision: infinite goodness; a finite or indifferent god walks away untouched. The narrowness is the craftsmanship. It aims at exactly what Aquinas will defend, which is what a videtur quod is for."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m17-l2-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "Meeting weak objections is enough; most real objectors are weak anyway."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Teaching serves the average objector, not the strongest.",
                "feedback": "Teach to the average and your student meets the strong objector alone, years later, with nothing in his hands. The form trains for the hardest case precisely because the classroom cannot schedule which enemy shows up. Aquinas armed students for opponents not yet born."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Refuting the weak version refutes the strong by inclusion.",
                "feedback": "Inclusion runs the other way: the strong version contains everything the weak one had, plus what your refutation never touched. Answering less than the best leaves the best standing. The form's arithmetic is unforgiving on this point."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Truth is not established against weakness; the verdict is only as good as the case it survived.",
                "feedback": "Respondeo: the article form exists because of this exact rule. A determination that faced only soft objections has determined nothing; the answer's warrant is the strength of what it answered. Hence the master writes the enemy's best speech himself, and only then takes the bench."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. There are no weak objections; every objection is strong to someone.",
                "feedback": "Right verdict, sentimental reason. Objections differ in strength objectively, which is exactly why the form demands the strongest; if all were equal, any would do and the discipline would be pointless. The rescue dissolves the standard the rule depends on."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m17-l2-q4`,
          type: "mcq",
          stem: `The second objection against God's existence: everything we see can be accounted for by fewer principles, nature and human reason, so positing God is superfluous. Date-stamp that argument.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Eighteenth century: it is Hume's naturalism, read backward into the text.",
                "feedback": "It is on the page of a book finished by 1274, in the objection's own words: all natural things reduced to nature, all voluntary things to reason or will, therefore no need to suppose God. Hume inherited the argument. Aquinas had already written it for him, better."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Thirteenth century, by Aquinas's own hand: parsimony against God, a generation before Ockham owned a razor.",
                "feedback": "Respondeo: it is superfluous to suppose that what can be accounted for by a few principles has been produced by many (ST I q.2 a.3 obj. 2). The economy argument modern naturalism recycles was stated, at strength, by the man it targets. The videtur quod is why nothing in the New Atheism surprised the old books."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Twentieth century: it presupposes modern science's completed picture.",
                "feedback": "It presupposes only the ambition of explanation by fewer principles, which is as old as Thales' water. No completed picture is required to run it, which is why a medieval master could state it perfectly. The clothing changes; the argument has not aged a day."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Timeless, therefore unanswerable: parsimony always wins.",
                "feedback": "Timeless, yes; unanswerable, no. Parsimony cuts posited entities, not required ones, and the reply will argue that changeable nature and defectible reason require a first principle that is neither. The razor is honored and then shown where it cannot cut. That reply waits two lessons ahead."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m17-l2-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "An objection answered is an enemy destroyed."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Refutation is destruction; that is what winning means.",
                "feedback": "Then explain why the objections remain printed in the article forever, names attached, honored with individual replies. Nothing destroyed gets a permanent seat in the courtroom. The form wins differently, and the difference is the tradition's whole manner."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The ad obiecta erase the objections from the record.",
                "feedback": "The ad obiecta do the opposite of erasing: they preserve each objection and attach an answer to it, so every future reader inherits both the challenge and the reply. The record grows; nothing is expunged. Check any article: the enemy's speech is still there."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. An objection answered is a truth located: the reply finds what the objection saw and gives it a home.",
                "feedback": "Respondeo: nearly every objection is right about something, or it would tempt no one; the reply's craft is to name that something and place it where it belongs. Evil is real, says the first reply, and God brings good even from it. The objection is not destroyed. It is settled, with its property rights honored."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Objections are never really answered; disputes just move on.",
                "feedback": "Right verdict, despairing reason. The replies genuinely answer: the distinction shows why the objection's truth does not carry its conclusion. That is resolution, not fatigue. The claim fails because answering is milder than destroying, not because it is impossible."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m17-l2-q6`,
          type: "mcq",
          stem: `The learner who practices this form for years walks away with a habit. Name it.`,
          latin_tag: `videtur quod`,
          doctrine_line: `A position is held only when the strongest case against it has been met; the objections are the method's honesty made visible.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Steelman before verdict: no position judged until its best case has been stated fairly.",
                "feedback": "Respondeo: the videtur quod, worn into the soul. The internet calls it steelmanning and thinks it invented the practice; the tradition ran it as mandatory procedure for eight hundred years. The course you are inside has been training exactly this habit since its first four-option question."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Suspicion of all positions, since every one attracts objections.",
                "feedback": "The form breeds the opposite: confidence with receipts. Positions that have survived their strongest objections are held more firmly, not less. Universal suspicion is what happens to minds trained without the form, who never learn what surviving an objection feels like."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Debate-club reflexes: a counterargument for everything.",
                "feedback": "The debater wants to win the room; the disputant wants the question determined. Counterarguments-for-everything is the sophist's kit, and the form was built partly to starve it: every counterargument here must be answered, in writing, before anyone goes home."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Deference: the master answered everything, so the student needn't.",
                "feedback": "The Summa was written for beginners to ARGUE through, not to memorize; the form is an exercise machine, and machines train those who climb on. Deference is what the form prevents: you cannot inherit a verdict without walking through the objections yourself."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `m17-l3`,
      num: `III`,
      title: `The Turn`,
      latin: `sed contra`,
      tag: `sed contra`,
      fin: {
        tag: `sed contra`,
        heading: `One short sentence tips the court.`,
        body: `Between the objections and the answer stands the article's shortest movement: <span class="lat">sed contra</span>, on the contrary, usually a single authority, marking which way the master will determine. For God's existence it is God's own name: I am Who am. But the tradition keeps strict books on what citation proves. Canonical Scripture argues properly and incontrovertibly, for the faith rests on the revelation made to the apostles and prophets; the doctors of the Church properly but probably; the philosophers as extrinsic and probable witnesses (ST I q.1 a.8 ad 2). The sed contra tips the court; it never excuses the respondeo from arguing. Next lesson: the determination itself, and the art of answering without dismissing.`,
      },
      questions: [
        {
          id: `m17-l3-q1`,
          type: "mcq",
          stem: `After the objections comes one short movement: <span class="lat">sed contra</span>, on the contrary, usually a quotation. What is its office?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It marks the turn: an authority signals which way the master will determine.",
                "feedback": "Respondeo: the sed contra is the bench clearing its throat: the verdict's direction announced by a voice with standing, before the reasons are given. It is deliberately brief because it is a signpost, not the road. The road is the respondeo, and it still has to be built."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It is the proof: the quotation settles the question, and the rest is commentary.",
                "feedback": "If quotation settled questions, the respondeo would be one line long, and Aquinas writes his longest paragraphs exactly there. The authority marks the position; the argument earns it. A tradition that confused the two would have stopped thinking in the fourth century."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It is ornament: a devotional pause between the hard parts.",
                "feedback": "Nothing in this form pauses, and nothing decorates. The sed contra carries procedural weight: it stakes the determination publicly, so the respondeo argues under commitment rather than from ambush. Brevity is not idleness; it is a flag planted."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It is the strongest objection, saved for last.",
                "feedback": "The objections run the other way; the sed contra answers their direction, which is why it begins with on the contrary. Mistake it for an objection and every article reads as self-contradiction. It is the hinge where the door begins to swing back."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m17-l3-q2`,
          type: "mcq",
          stem: `For whether God exists, the sed contra is four words spoken from the burning bush: "I am Who am" (Exodus 3:14). Weigh the choice.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "An odd lapse: citing God to prove God begs the question.",
                "feedback": "It would, if the sed contra were the proof; it is the signpost, and the proof follows from motion, causality, contingency, degrees, and order, borrowing nothing from the bush. The authority marks where the article is going. The Five Ways pay the fare."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The deepest possible marker: the name God gives Himself is pure being, the very conclusion the Ways will argue toward.",
                "feedback": "Respondeo: I am Who am, and the respondeo will conclude to a first whose essence is to exist: the sed contra names the destination in God's own grammar before reason walks the road. The whole course's spine, esse itself, sits in the citation. Aquinas chose his four words the way an architect chooses a keystone."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Convention only: articles need a quotation, and Exodus was handy.",
                "feedback": "Handiness does not explain why THIS verse, the one where the divine name and the metaphysics of being coincide. The tradition read Exodus 3:14 as the scriptural summit of the doctrine of esse; placing it here welds revelation's word to reason's road. Nothing in the Summa is handy."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A concession that the question cannot really be argued.",
                "feedback": "The next movement is five arguments; the concession theory dies in the article's own body. The citation does not replace the arguing; it announces what the arguing will reach. Read on one paragraph and the Ways begin."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m17-l3-q3`,
          type: "distinction_application",
          stem: `The weights, fixed (ST I q.1 a.8 ad 2). Canonical Scripture: proper and incontrovertible. The doctors of the Church: proper, but merely probable. The philosophers: extrinsic and probable. Classify: the Summa cites Aristotle on the eternity of motion.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Extrinsic and probable: a philosopher's witness, weighty and open to correction.",
                "feedback": "Respondeo: the Philosopher is cited constantly and outranked always: an extrinsic witness whose arguments carry exactly the force of their reasons, and whose errors, the eternity of the world among them, the tradition corrects without ceremony. Aquinas reveres Aristotle the way a master reveres a great instrument: used daily, trusted conditionally."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Proper and incontrovertible: the Philosopher functions as Scripture in philosophy.",
                "feedback": "Nothing functions as Scripture except Scripture; that is what the ranking is for. Aquinas corrects Aristotle by name on creation, on the world's eternity, on beatitude. An incontrovertible authority does not collect corrections. File the Philosopher where the tradition filed him: honored, and checkable."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Proper but probable: Aristotle counts as a doctor of the Church.",
                "feedback": "The doctors argue from inside the faith; Aristotle never heard of it. His authority is extrinsic: a witness from natural reason's own precincts, admitted for what his arguments prove. The pagan's honor in the Summa is real and it is exactly one rung lower than Augustine's."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No weight at all: pagan sources are decoration in a sacred science.",
                "feedback": "Thousands of citations disagree; sacred doctrine makes use even of human reason, not to prove the faith but to make its teaching clearer (ST I q.1 a.8 ad 2). The handmaid lesson was two modules of this course. Extrinsic is a rank, not an exile."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m17-l3-q4`,
          type: "mcq",
          stem: `What does citing an authority never do, even at the top rank?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Excuse the respondeo from arguing: the determination is still earned from principles.",
                "feedback": "Respondeo: even where Scripture settles THAT a thing is so, the article still labors to show WHY and HOW it coheres; the respondeo argues from principles in every article, including those the sed contra already tipped. Authority supplies premises and marks verdicts. The thinking is never outsourced."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Appear in a philosophical question, where authority has no standing.",
                "feedback": "Authorities appear in every kind of question, ranked by kind: the philosophers in philosophical matters, at extrinsic weight. Standing is graded, not granted or refused wholesale. The form's craft is exactly this bookkeeping."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Outrank a clever modern argument, since arguments beat citations.",
                "feedback": "One authority outranks every argument ever framed: the canonical Scriptures, resting on revelation itself; that was the theology prologue's inversion, and a.8 states it flatly. The slogan arguments-beat-citations is true exactly below that line and false exactly at it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Get corrected: citation confers immunity.",
                "feedback": "The doctors are corrected respectfully and the philosophers freely; Aquinas spends whole articles doing both. Only the top rank is incontrovertible, and even it gets interpreted with sweat. Immunity is precisely what the ranked system refuses to hand out."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m17-l3-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "In the Summa, quoting Aristotle settles a question."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The Philosopher's title shows his word was final.",
                "feedback": "The title shows preeminence among philosophers, not finality over truth; Aquinas contradicts the Philosopher on the world's beginning in plain text. A final authority is not corrected in public by his own devotees. The title honors; the ranking governs."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Medieval method was citation; argument came with the moderns.",
                "feedback": "Read one respondeo and the theory evaporates: premises, distinctions, inferences, all load-bearing. The medievals argued more formally than the moderns who mock them, and ranked their citations more carefully too. The stereotype survives only at a distance from the page."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Aristotle argues at extrinsic and probable weight: his reasons count for what they prove, and no further.",
                "feedback": "Respondeo: sacred doctrine uses the authorities of philosophers as extrinsic and probable arguments (ST I q.1 a.8 ad 2). The citation is admission to the courtroom, not the verdict. Where the Philosopher's reasons hold, they hold as reasons; where they fail, the tradition says so and moves on."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Quotations settle nothing anywhere; authority is rhetoric by another name.",
                "feedback": "Right verdict about Aristotle, ruinous overreach past him. One authority genuinely settles: the canonical Scriptures, proper and incontrovertible, because the faith rests on revelation itself. Flatten all authority into rhetoric and theology's own ground dissolves. The system is ranked, not void."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m17-l3-q6`,
          type: "mcq",
          stem: `Why do the weights differ as they do: Scripture incontrovertible, doctors probable, philosophers extrinsic?`,
          latin_tag: `sed contra`,
          doctrine_line: `The sed contra marks the determination with an authority; authorities carry ranked weights, and none replaces the argument.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "By age: older sources outrank newer.",
                "feedback": "Aristotle predates Augustine and ranks below him; the calendar cannot be the ruler. The weights track something else entirely: whose speech the science's own foundation rests on. Follow the foundation, not the carbon dating."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "By nearness to the science's foundation: faith rests on the revelation made to apostles and prophets, not on later doctors.",
                "feedback": "Respondeo, in the article's own words: our faith rests upon the revelation made to the apostles and prophets who wrote the canonical books, and not on the revelations, if any such there are, made to other doctors (ST I q.1 a.8 ad 2). The weights are a map of the foundation: the closer a voice stands to the deposit itself, the harder it argues."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "By office: popes outrank bishops, who outrank professors.",
                "feedback": "Hierarchy of governance is real and is not this table; a.8 ranks kinds of testimony in argument, not ranks of jurisdiction. A professor quoting Isaiah wields the top weight; a prelate quoting Aristotle wields the third. The courtroom weighs the witness, not the miter."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "By eloquence: the best-written sources persuade most.",
                "feedback": "Then Cicero would outrank the Apocalypse, and the tradition never blinked toward that. Eloquence moves hearers; it adds nothing to warrant. The ranked weights exist precisely so persuasion cannot masquerade as proof."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `m17-l4`,
      num: `IV`,
      title: `The Answer and the Replies`,
      latin: `respondeo`,
      tag: `respondeo`,
      fin: {
        tag: `respondeo`,
        heading: `Distinguish, and every prisoner goes home.`,
        body: `The <span class="lat">respondeo</span> is the master's determination: the question, argued to a verdict from principles, because a disputation that never determines is a seminar without an ending. Then the article's mercy: <span class="lat">ad obiecta</span>, the replies, where each objection is answered by finding the truth it saw and giving that truth its lawful home. Evil is real, says the first reply to the strongest objection ever written, and God's omnipotence brings good even out of it: the datum honored, the conclusion declined. Nothing is dismissed; dismissal is the one move the form forbids. Next lesson you stop watching and take the chair: a modern question, run through the whole machine, by you.`,
      },
      questions: [
        {
          id: `m17-l4-q1`,
          type: "mcq",
          stem: `After objections and turn, the master must speak: <span class="lat">respondeo dicendum</span>, I answer that. Why must the article end in a determination rather than an open weighing?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because the master's office is to determine: a disputation that never concludes has taught the question but not the truth.",
                "feedback": "Respondeo: the medieval magister was obliged by office to determine the question after the arguments were heard; permanent suspension was the sophist's luxury, not the teacher's option. The form honors openness at the start (utrum) precisely so it can honor truth at the end. Weighing is the road. The verdict is the arrival."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because students demand answers, and customer satisfaction ruled the schools.",
                "feedback": "The determination often gave students the answer they liked least, and the masters kept determining. The obligation ran to the truth of the question, not to the room's comfort. A form built for satisfaction would have skipped the objections, which is where all the discomfort lives."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because authority required uniformity of conclusions.",
                "feedback": "The masters disagreed with each other constantly and the form survived every disagreement; determination is a duty of each article, not a uniformity across articles. Aquinas determines against his own teacher in places. The verdict binds the question, not the guild."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It need not: many articles end undetermined.",
                "feedback": "Find one. Every article of the Summa carries its respondeo; even where the matter is open among Catholics, the master states what he holds and why. Where the Church leaves liberty, the determination says so, which is itself a determination. The form has no shrug in its vocabulary."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m17-l4-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Reply to Objection 1. As Augustine says (Enchiridion xi): "Since God is the highest good, He would not allow any evil to exist in His works, unless His omnipotence and goodness were such as to bring good even out of evil." This is part of the infinite goodness of God, that He should allow evil to exist, and out of it produce good.</p><div class="cr-cite">ST I, q. 2, a. 3, ad 1 · trans. Fathers of the English Dominican Province · verified against New Advent</div></div>The strongest objection ever written receives four lines. Watch what the four lines do to it.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "They deny the premise: evil, rightly seen, does not exist.",
                "feedback": "Read again: He should allow evil to exist. The reply concedes evil's reality without a flinch; no Thomist answer to this objection has ever run through denial of the datum. The objection's facts are honored in full. What falls is the inference."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "They distinguish: infinite goodness excludes evil it cannot turn to good; omnipotent goodness permits what it transmutes.",
                "feedback": "Respondeo: the objection assumed contraries annihilate; the reply distinguishes the manner of the contrariety: a goodness that is also omnipotent has a second option the objection never priced, permitting evil and producing good from it. The distinction dissolves the necessity while keeping every fact. Four lines, because a distinction needs no more."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "They pull rank: Augustine is quoted, and the objection is thereby outvoted.",
                "feedback": "Augustine supplies the distinction, not a gavel; strike his name and the reply's logic stands whole. The quotation is a doctor's testimony at its proper weight, carrying the argument it contains. The objection is answered by the content, not the citation."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "They change the subject to God's mysterious ways, ending analysis.",
                "feedback": "Mystery-appeals end analysis; this reply performs it: premise kept, modality distinguished, conclusion released. Nothing is waved off into fog. The tradition holds real mysteries elsewhere and refuses to spend them where a distinction will do the work."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m17-l4-q3`,
          type: "mcq",
          stem: `The second reply meets the parsimony objection: nature explains the natural, reason the voluntary. How does the reply keep the razor and lose the conclusion?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It grants both principles, then asks what holds THEM up: the changeable and defectible must be traced to a first that is neither.",
                "feedback": "Respondeo: nature works for a determinate end under the direction of a higher agent, and reason can change and fail; both explain much and neither explains itself (ST I q.2 a.3 ad 2). The razor cuts superfluous entities; a required first principle is not superfluous. The objection's economy is honored, and shown to be incomplete bookkeeping."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It rejects parsimony: in divine matters, more principles are better.",
                "feedback": "The tradition loves parsimony; entities are not multiplied without necessity is a scholastic slogan before it is anyone's razor. The reply does not blunt the blade. It shows one entity the blade cannot reach, because that one is required, not posited."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It denies that nature explains anything, reclaiming all causality for God.",
                "feedback": "Secondary causes are the tradition's pride: nature really works, reason really chooses, and God moves each according to its manner. Reclaiming all causality upward is occasionalism, an error the school fought. The reply traces nature to God; it does not repossess nature's work."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It appeals to widespread belief: so many believers cannot be wrong.",
                "feedback": "Not a word of the reply counts heads; the argument runs on changeability and defectibility, properties the objector himself concedes to nature and reason. The form does not permit demographic premises where metaphysical ones are available. Nothing here is a poll."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m17-l4-q4`,
          type: "match_pair",
          stem: `The four working movements, matched to their offices.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "utrum"
              },
              {
                "id": "L2",
                "text": "videtur quod"
              },
              {
                "id": "L3",
                "text": "respondeo"
              },
              {
                "id": "L4",
                "text": "ad obiecta"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "poses the question as genuinely open"
              },
              {
                "id": "R2",
                "text": "gives the contrary case its strongest day"
              },
              {
                "id": "R3",
                "text": "determines the question from principles"
              },
              {
                "id": "R4",
                "text": "answers each objection by distinction"
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
              "all_correct": "Four offices, correctly held. The sed contra you already know: the turn between the second and third. The article is a small court where truth gets due process, and you now know every officer by name.",
              "partial_correct": "Some offices confused. Walk the courtroom once more: the question called open, the opposition's full speech, the bench's determination, and the answered objections filing out with their dignity intact."
            }
          },
        },
        {
          id: `m17-l4-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "A reply that says 'that objection is simply wrong' has done its job."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Wrong is wrong; brevity is a virtue in verdicts.",
                "feedback": "Brevity is a virtue; vacancy is not. Simply wrong locates nothing: not the premise that failed, not the truth that tempted, not the distinction that frees it. The objector leaves uninstructed and unconvinced. Four honest lines beat two empty words everywhere in this form."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Some objections deserve dismissal, and the form should allow it.",
                "feedback": "The form deliberately does not: whatever earned a place among the objections earned an answer, and what deserves no answer should never have been staged. The discipline cuts at selection, not at reply. Once in the courtroom, every voice is answered."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The reply must distinguish: name the truth the objection saw, and show why it does not carry the conclusion.",
                "feedback": "Respondeo: nearly every serious objection is right about something; the reply's whole craft is locating that something. Evil is real; nature does explain; authority is often weak: granted, granted, granted, and none of them carries. Distinguo is the tradition's scalpel, and dismissal is the one tool missing from its kit, by design."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. No reply can really answer an objection; the replies are polite theater.",
                "feedback": "Right verdict, wrong despair. The replies genuinely resolve: shown premises, named distinctions, released conclusions; that is answering, performed in public, checkable line by line. The claim fails because dismissal is too little, not because resolution is impossible."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m17-l4-q6`,
          type: "mcq",
          stem: `The article could end at the respondeo: verdict delivered, court adjourned. Instead it ends with the replies. Why does the form spend its last breath on the losing side?`,
          latin_tag: `respondeo`,
          doctrine_line: `The respondeo determines from principles; the ad obiecta answer every objection by distinction, never by dismissal.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because the disputation is complete only when every voice is answered: the objections are escorted out honored, their truths filed.",
                "feedback": "Respondeo: a verdict that leaves objections standing unanswered has not finished; the loose ends would snag every future reader. The ad obiecta close the accounts: each contrary voice heard, its truth located, its error released. The form's last breath is justice to the losing side, which is why the winning side stays credible for eight centuries."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because medieval page layouts required symmetrical endings.",
                "feedback": "Manuscripts cared nothing for symmetry of argument; plenty of medieval genres end mid-thought. The replies survive every layout because they do logical work: without them the objections stand undefeated in the record. The reason is justice, not typesetting."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "As a courtesy: politeness to opponents was a monastic virtue.",
                "feedback": "Courtesy rides along, but the engine is epistemic: an unanswered objection is an unfinished proof, whoever's feelings are at stake. The form would demand the replies from the rudest master alive. What looks like manners is bookkeeping."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "To pad the article: masters were paid by length.",
                "feedback": "The replies are the article's tersest prose, often one sentence each; a padding scheme would inflate the respondeo instead. Brevity there, thoroughness everywhere: the ad obiecta are short precisely because a good distinction needs no upholstery."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `m17-l5`,
      num: `V`,
      title: `Build a Disputation`,
      latin: `disputatio`,
      tag: `disputatio`,
      fin: {
        tag: `disputatio`,
        heading: `The chair is yours, and it held.`,
        body: `You posed the question cleanly, built the opponent's syllogism with your own hands, chose the authority that carries the determining principle, ordered the whole court, and answered the objector by distinction from the magister's chair. The question was modern; the machine was thirteenth-century; nothing rattled. That is the discovery worth keeping: the article is not a museum piece but a portable technology for honest thinking, and it runs on any century's questions. One movement remains for the module: owning the whole, and seeing what door it opens.`,
      },
      questions: [
        {
          id: `m17-l5-q1`,
          type: "mcq",
          stem: `Your disputation, from the first movement. The topic: whether the machine that writes thinks. Choose the well-formed <span class="lat">utrum</span>.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Whether artificial intelligence, which obviously cannot think, deceives its users.",
                "feedback": "The obviously has already determined the question in the doorway, and the form forbids verdicts before objections. A loaded utrum produces a rigged article. Pose it clean or the whole court sits in vain."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Whether machines are good or bad for society.",
                "feedback": "An honest question and a different one: practical, plural, and unanswerable in one determination. The disputation wants one precise point of contest. Aim the utrum at the joint: does composing true sentences amount to understanding?"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Utrum machina intelligat: whether the machine understands.",
                "feedback": "Respondeo: one question, precise terms, posed as genuinely open, and the verdict suspended until earned. The Latin is not costume; it marks that you are entering the form. Every article in the Summa began with exactly this discipline, and yours just did."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Whether the word think should be redefined for the machine age.",
                "feedback": "A lexicographer's project, and a surrender dressed as a question: redefine the word and the contest is dissolved, not determined. The tradition holds terms steady precisely so questions stay answerable. Keep think meaning what it means, and ask whether the machine does it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m17-l5-q2`,
          type: "syllogism_builder",
          stem: `Now the objector's speech, and you must write it at full strength: the best case FOR the machine's understanding. Assemble the objection.`,
          payload: {
            "components": [
              {
                "id": "major",
                "role": "major",
                "text": "Whatever composes true sentences about being, judges truly."
              },
              {
                "id": "minor",
                "role": "minor",
                "text": "The machine composes true sentences about being."
              },
              {
                "id": "conclusion",
                "role": "conclusion",
                "text": "Therefore the machine judges truly, and to judge is to understand."
              }
            ],
            "correct_order": [
              "major",
              "minor",
              "conclusion"
            ],
            "feedback": {
              "correct": "The videtur quod, built with your own hands and no straw in it: the premises are plausible, the minor is plainly true, and the conclusion follows. You have just done what Aquinas did for the atheist: armed the other side properly. Now the article owes this argument a real answer, and you will give it from the chair.",
              "incorrect": "A syllogism marches: universal rule, particular case, conclusion. Set the major first (whatever composes true sentences, judges), the minor second (the machine composes them), and let the conclusion close. The objector deserves a clean weapon."
            }
          },
        },
        {
          id: `m17-l5-q3`,
          type: "mcq",
          stem: `The turn. Choose the <span class="lat">sed contra</span> that carries the determining principle.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The Psalmist, of the idols: they have mouths and speak not.",
                "feedback": "Tempting, and nearly right: the Psalmist's idols are exactly the ancestors of this question, and the wit is worthy of the margin. But its sense here is figurative, and the turn wants the principle the respondeo will argue from. Keep the Psalm for the sermon; the court needs the definition."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Truth is the conformity of intellect and thing, known in judgment: the intellect knowing its own conformity to what is (ST I q.16 a.2).",
                "feedback": "Respondeo: this authority carries the exact principle on which the question turns: judging is not producing true strings but knowing one's conformity to the thing. The respondeo will argue from it; the replies will wield it. A sed contra is chosen the way a keystone is: for the weight it must bear."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A leading engineer's statement that the machine does not think.",
                "feedback": "An engineer's testimony on metaphysics is extrinsic and probable at best, and this one does not even give a reason, only a verdict. The turn wants an authority whose content determines. Expertise in building the machine is not expertise in what understanding is."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Common sense: everyone knows machines do not think.",
                "feedback": "Everyone has known many false things, and the objection you just built is precisely why this one is not obvious. Common sense is where questions come from, not where determinations rest. The form asks for an authority with standing and content; the crowd has neither here."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m17-l5-q4`,
          type: "sequence",
          stem: `The full court, assembled from your work. Put the disputation in order.`,
          payload: {
            "instruction": "Tap the movements in order, first to last.",
            "items": [
              {
                "id": "s1",
                "text": "Utrum machina intelligat: whether the machine understands"
              },
              {
                "id": "s2",
                "text": "Objection: whatever composes true sentences judges; the machine composes them; therefore it judges"
              },
              {
                "id": "s3",
                "text": "Objection 2: it converses, and conversation has always evidenced thought"
              },
              {
                "id": "s4",
                "text": "Sed contra: truth is conformity of intellect and thing, known in judgment (ST I q.16 a.2)"
              },
              {
                "id": "s5",
                "text": "Respondeo: knowing is immaterial reception of form; the machine arranges signs of knowledge and receives no form of anything"
              },
              {
                "id": "s6",
                "text": "Ad 1: composing true strings is not judging, which is knowing conformity; its truths are borrowed"
              },
              {
                "id": "s7",
                "text": "Ad 2: the conversation is inherited from the minds in its sources; the borrowed voice does not make a knower"
              }
            ],
            "correct_order": [
              "s1",
              "s2",
              "s3",
              "s4",
              "s5",
              "s6",
              "s7"
            ],
            "feedback": {
              "all_correct": "A complete article, and you ordered every movement: question, two objections at strength, the turn, the determination from principles, and both replies by distinction. Aquinas would recognize the shape at a glance, and the topic did not exist until your own lifetime. The form is portable; you just carried it.",
              "partial_correct": "The court fell out of order. Question first; objections next, at full strength; then the turn with its authority; then the determination; and the replies last, one per objection, none skipped."
            }
          },
        },
        {
          id: `m17-l5-q5`,
          type: "dialogue_branch",
          stem: `You hold the magister's chair now. A sharp student rises: "Your reply to the first objection just restates your doctrine. The objector said composing truths is judging; you said it is not. Assertion against assertion." Answer from the chair.`,
          payload: {
            "commentatorLine": "The Commentator, seated in the back row for once, watches you with visible enjoyment. 'The chair is yours, magister. The student's challenge is fair; meet it with the tools, not the title.'",
            "branches": [
              {
                "text": "The reply distinguishes rather than asserts: producing true strings is an effect signs can carry; judging is knowing one's conformity to the thing, which requires possessing the thing's form. The objection equivocated on judges; the distinction names where.",
                "verdict": "correct",
                "feedback": "The magister's answer: locate the equivocation, name the two senses, show which premise dies under each. The major is true of judging-as-output and false of judging-as-knowing-conformity; the minor is true only of output. No assertion anywhere: the distinction does the work in public, checkable step by step. The student sits, and learns the difference between a verdict and a shout."
              },
              {
                "text": "The doctrine is the tradition's settled position, and the chair teaches the tradition.",
                "feedback": "The chair does teach the tradition, and this answer betrays it: the tradition's authority in a disputation is exactly as strong as the argument it carries. Pulling rank against a fair logical challenge is the one thing the form was built to prevent. The student asked WHERE the objection fails. Show him, or yield the chair."
              },
              {
                "text": "Assertion against assertion is all philosophy ever is; the student should pick the nobler assertion.",
                "feedback": "Concede that and the whole courtroom is theater: objections, replies, and determinations all reduced to competing shouts. The form's existence refutes the concession: distinctions locate failures inside arguments, publicly, which is precisely more than assertion. Never surrender the method while sitting in its chair."
              },
              {
                "text": "The student should build the machine himself before questioning those who study it.",
                "feedback": "Credentials-gating, from the chair, in a disputation: three fouls in one sentence. The question is metaphysical and the student's challenge is logical; neither requires a soldering iron. Answer the argument or admit the chair is empty. The form knows no other options."
              }
            ]
          },
        },
        {
          id: `m17-l5-q6`,
          type: "mcq",
          stem: `Step back from the chair. What did this lesson actually demonstrate about the form?`,
          latin_tag: `disputatio`,
          doctrine_line: `The form is portable: any question, any century, run through utrum, objections, turn, determination, replies.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That it is portable: a thirteenth-century machine ran a twenty-first-century question without a single modification.",
                "feedback": "Respondeo: the question did not exist until your lifetime; the form predates printing; nothing rattled. Utrum, objections at strength, the turn, the determination, the replies: a thinking technology, century-proof, and now in your hands. The tradition did not leave you conclusions only. It left you the machine that produces them."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That modern questions are easier than medieval ones.",
                "feedback": "The machine question is among the hardest of your century, which is why it earned the full court. What made it tractable was not softness but structure: the form breaks any question into answerable movements. The ease you felt was the machine's, not the question's."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That the form only works when the Thomist side wins.",
                "feedback": "The form worked for Scotists disputing Thomists and for masters determining against their own teachers; it is a court, not a party. Your article's verdict came from the principles, not from the furniture. Had the principles run the other way, the form would have carried that verdict with equal calm."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That Latin labels make arguments more rigorous.",
                "feedback": "The labels name the movements; the rigor lives in the movements themselves: real objections, real principles, real distinctions. Run the court in English and it works identically. The Latin is the tradition's signature on a machine that would run unsigned."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `m17-l6`,
      num: `VI`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `You can read him unassisted now.`,
        body: `Open the Summa anywhere tonight and the page has changed: the parts are no longer furniture but moves, and you know each one's office. The question posed open; the enemy's best speech, written by the judge; the authority that tips the court at its proper weight; the determination earned from principles; the objections answered by distinction and sent home honored. You built one yourself, on a question Aquinas never met, and the machine ran clean. One door remains in the course. Behind it, the tradition disputes its own deepest word, <span class="lat">esse</span>, at full strength, every side in its own voice. You now know every move you will watch. Step in.`,
      },
      questions: [
        {
          id: `m17-l6-q1`,
          type: "match_pair",
          stem: `The five movements, one last time, matched to what each one guards.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "utrum"
              },
              {
                "id": "L2",
                "text": "videtur quod"
              },
              {
                "id": "L3",
                "text": "sed contra"
              },
              {
                "id": "L4",
                "text": "respondeo with its ad obiecta"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "honesty about the question: no verdict smuggled into the asking"
              },
              {
                "id": "R2",
                "text": "justice to the opponent: the strongest contrary case, fully staged"
              },
              {
                "id": "R3",
                "text": "candor about authority: the turn declared, at ranked weight"
              },
              {
                "id": "R4",
                "text": "truth with mercy: determination from principles, objections answered by distinction"
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
              "all_correct": "Each movement guards a virtue, and together they make honest thinking procedural: that is why the form outlived its century and why this course was built inside it. Machines for truth are rare. You now own one.",
              "partial_correct": "Some guards misassigned. The utrum keeps the asking honest; the objections keep the opponent whole; the sed contra keeps authority visible and ranked; the determination with its replies keeps truth and mercy in one act."
            }
          },
        },
        {
          id: `m17-l6-q2`,
          type: "mcq",
          stem: `Name the relationship between this module and the course's ethos.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The fair fight was never house style: it is the article form, inherited; the ethos IS the method.",
                "feedback": "Respondeo: every four-option contest between real positions, every wrong answer honored with a real reply, every verdict earned: the course's manners are the disputation's procedure, worn since Lesson 1. The tradition does not merely tolerate strong objections; its central literary form requires them. You have been formed by the machine you just learned to name."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "This module adds courtesy rules to an otherwise neutral course.",
                "feedback": "Nothing was added; something was unmasked. The rules were load-bearing from the first apple: options at parity, objections at strength, feedback as replies. A neutral course with courtesy bolted on would collapse the day the courtesy got expensive. This one is built of it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The method is medieval packaging; the ethos is modern fairness, coincidentally similar.",
                "feedback": "The dates refuse the coincidence: the form ran eight centuries before modern fairness-talk, demanding steelmen under pain of a failed disputation. If anything borrowed, it was not the medievals. The lineage runs from the article to the ethos, straight through."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "They conflict: the form determines questions, and fairness prefers them open.",
                "feedback": "Fairness to positions is not agnosticism about truth; the form honors the contrary case precisely on the way to a verdict. Openness forever is not a virtue but a stall. The fair fight ends in a determination, which is why it is worth staging."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m17-l6-q3`,
          type: "fill_blank",
          stem: `The article in one sentence. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The question is posed as <span class="fb-blank" data-blank="b1">______</span>; the objections give the <span class="fb-blank" data-blank="b2">______</span> its strongest day; the respondeo <span class="fb-blank" data-blank="b3">______</span> from principles; and the replies answer by <span class="fb-blank" data-blank="b4">______</span>.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "open"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "contrary"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "determines"
                ],
                "case_sensitive": false
              },
              {
                "id": "b4",
                "correct_answers": [
                  "distinction"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "open",
              "settled",
              "contrary",
              "faithful",
              "determines",
              "apologizes",
              "distinction",
              "dismissal"
            ],
            "feedback": {
              "all_correct": "Locked: open, contrary, determines, distinction. Four words that hold the whole machine, and not one of them optional. This sentence is the course's own constitution, stated as method.",
              "partial_correct": "Some gears misplaced. The asking stays open; the contrary case gets its day; the determination is argued, never presumed; and distinction, never dismissal, answers the objections."
            }
          },
        },
        {
          id: `m17-l6-q4`,
          type: "mcq",
          stem: `Tonight you open ST I q.75 cold, no course, no commentary. What is different from the last time you faced a bare page of the Summa?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The parts have become moves: you know what each is doing, to whom, and why, before you parse a word of doctrine.",
                "feedback": "Respondeo: structural literacy is exactly this: the objections read as the contrary's best case, the sed contra as the turn at ranked weight, the respondeo as the determination you can now grade, the replies as distinctions you can check. The page stopped being a wall of ritual and became a transcript of moves. That is what unassisted means."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The Latin no longer appears.",
                "feedback": "It appears exactly as before; what changed is that utrum, sed contra, and respondeo now name offices you know rather than noises you skip. The vocabulary was never the barrier. The architecture was, and it fell this module."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "You will now agree with every determination.",
                "feedback": "Structural literacy grades arguments; it does not pre-sign verdicts. You can now disagree with Aquinas COMPETENTLY, which he would prefer to incompetent agreement, having built a form that says so. Reading unassisted includes the right to object, in proper form."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing; reading the Summa always required a commentary.",
                "feedback": "It required the form, and now you have it. Commentaries help with doctrine's depths; the architecture was the actual gatekeeper, and it has handed you its keys. Open the page and watch: question, contrary case, turn, determination, replies. You will not get lost again."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m17-l6-q5`,
          type: "mcq",
          stem: `Recall the specimen whole: q.2 a.3, the most famous article ever written. Describe its motion in one breath.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Atheism's two best arguments, stated by a saint; God's own name as the turn; five roads argued from the world; and both objections answered with their truths intact.",
                "feedback": "Respondeo: evil honored and transmuted, parsimony honored and completed, I am Who am tipping the court, and the Five Ways walking from motion to a first whose essence is to be. One article, every movement of the form at full power. You dissected it, sequenced it, and answered from inside it. It is yours now."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A proof text: assertion of God, decorated with objections.",
                "feedback": "The objections arrive first and at full strength, which no decoration scheme would permit; and the assertion is argued five ways from public premises. Read as decoration, the article is baffling. Read as a court in session, every line falls into place."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A mystery statement: the existence of God proposed for faith alone.",
                "feedback": "The article argues from motion and causality precisely because this truth is a preamble, reachable by reason, not an article of faith alone; the theology course made that boundary doctrine. The Five Ways are philosophy performed in public. Faith crowns them; it does not replace them."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An antique: the physics moved on, so the article is a museum piece.",
                "feedback": "The Ways run on act and potency, causality, contingency, and finality, none of which expired with any physics; the course spent seventeen modules showing those beams still bear weight. Museums keep what stopped working. This article never did."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m17-l6-q6`,
          type: "mcq",
          stem: `Last question of the module. One door remains in the course. What waits behind it, and what do you carry in?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `Structural literacy owned: the learner can read the Summa unassisted, and watch the coming debate with the referee's eyes.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The tradition disputing its own deepest word, esse, at full strength: and you carry the referee's eyes and the disputation's own machine.",
                "feedback": "Respondeo: the final module is a real disputation, not a history lesson: the strict line and the existential reading, each in its own voice, arguing what being itself is. Fifteen modules gave you the doctrine, this one gave you the form, and the grammar module gave you the referee's whistle. Everything you have learned is the equipment. Step in."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A victory lap: the hard content is behind you.",
                "feedback": "The hardest content in the course is ahead of you: the dispute over esse is where the finest Thomistic minds of a century divided. What changed is your equipment, not the terrain. The course saved the summit for last and spent seventeen modules roping you for it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Theology: the course now crosses into the mysteries.",
                "feedback": "That crossing exists and it is a different course: the philosophy hands over at its own summit, and the theology receives from there. What remains HERE is philosophy's deepest in-house dispute, fought with every tool you now hold. Finish the philosophy; the sequel knows where to find you."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An exam over all seventeen modules.",
                "feedback": "The course does not end in an exam; it ends in a disputation you are now equipped to follow and judge: which is the only examination the tradition ever cared about. The final module will not test your memory. It will test your eyes, and this module just finished sharpening them."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    }
  ],
};
