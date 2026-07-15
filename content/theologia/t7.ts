import type { ModuleMeta } from '../types';

/** T7 · Beatitude: The Last End. Wired into the live app (theology-wing completion pass: T6/T7/T15). Content is the authored t7-content.json, copied faithfully; no prose edits. */
export const t7: ModuleMeta = {
  id: 7,
  title: `Beatitude: The Last End`,
  short: `De Beatitudine`,
  label: `Theologia VII · Beatitude: The Last End`,
  latin: `De Beatitudine`,
  aim: `Every human act aims at an end, and the chain of ends cannot run backward forever: there is a last end, desired for itself, carrying every other desire, and all men seek it under the one aspect of happiness while warring over the thing itself. Audited one by one, every finite candidate fails: wealth is a means, honor a sign in someone else's act, fame a rumor, power a principle for good or ill, pleasure the bloom on a good and not the good, and even the soul's own virtue a participated and portioned good. Nothing can still the will except the universal good, which is found in no creature but in God alone: so beatitude, taken as the thing itself, is the uncreated God, and taken as its possession, it is a created operation in us, the one everlasting act of seeing the divine essence, with the will's delight as its crown. That vision no nature can reach by its own powers, ours or any angel's: the desire is natural and the fulfillment is gift, a created light of glory lifting the mind to an essence no created likeness can show. The Church has defined that the purified see it immediately after death, intuitively and face to face, before the resurrection and forever. The destination is fixed. Grace is the road.`,
  lessons: [
    {
      id: `t7-l1`,
      num: `I`,
      title: `Everything Aims`,
      latin: `finis ultimus`,
      tag: `finis ultimus`,
      fin: {
        tag: `finis ultimus`,
        heading: `The cup, replayed upward.`,
        body: `A knocked-over coffee cup once taught you what makes an act human: deliberation, will, an end in view. Replay the same cup upward and it teaches something larger: the end in view was itself for an end, and that one for another, and the ladder must top out somewhere or no rung would hold. There is a last end. Everyone is climbing toward it, the trader and the monk and the man refilling the cup, under one name, happiness, and with wildly different addresses written on the label. The Return has begun, quietly: the course's first two parts descended from God through creation to the government of the world; this part turns around and walks back, asking what the whole procession was FOR. The next lesson takes the addresses men actually write, wealth, honor, fame, power, pleasure, and audits them one by one. Aquinas conducted the audit seven centuries before the feed made the candidates a business model. Bring your phone.`,
      },
      questions: [
        {
          id: `t7-l1-q1`,
          type: "mcq",
          stem: `A man, frustrated by a meeting, deliberately knocks over a coffee cup. The old question was whether the act was human. The new question is hiding inside it: he wanted the coffee to stay awake, the wakefulness for the work, the work for the pay, the pay for the family, the family for. The chain climbs. Where does it end?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It loops: we want work for family and family for the strength to work.",
                "feedback": "A circle of ends is a treadmill, and a treadmill explains motion on it but not why anyone boarded. If A is for B and B is for A, neither carries the desiring; the whole loop hangs unexplained, wanted for nothing. Circles defer the question exactly as long as you refuse to look at them."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In a last end: something wanted for itself, for whose sake all the rest is wanted.",
                "feedback": "Respondeo: the chain of whys must terminate, or nothing in it would ever be wanted at all (q.1 a.4). Somewhere stands an end that is no means, drawing the whole ladder upward the way the target draws the arrow. The tradition names it the last end, and Augustine names what all men call it: happiness. The module's work is to find out what actually answers to the name."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It never ends: desire is endless by nature, and the chase itself is the point.",
                "feedback": "The becoming-doctrine, held in earnest by serious moderns: the horizon recedes and the runner is the meaning. But an infinite series of for-the-sake-ofs carries no desire anywhere, as an infinite series of borrowed lamps lights nothing. If every rung is for the next and no rung is home, the ladder was never worth a single step. The chase borrows its point from a catch."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At whatever feels final that day: ends rotate, and the chain re-roots each morning.",
                "feedback": "This describes how distracted lives feel, not how willing works. Serial finality is still finality borrowed: each morning's candidate rules only by wearing the crown of the one last end, the fulfillment of the whole person. The rotation is real; it is a rotation of pretenders to a single throne, which is the interesting fact."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t7-l1-q2`,
          type: "syllogism_builder",
          stem: `Build the argument that stops the regress. Place each statement in its role: universal premise, particular premise, conclusion.`,
          payload: {
            "instruction": "Three statements, three roles. The universal states how means carry desire. The particular closes the endless-chain escape. The conclusion names what must exist.",
            "components": [
              {
                "id": "c1",
                "text": "Whatever is desired as a means receives its desirability from the end it serves.",
                "role": "major"
              },
              {
                "id": "c2",
                "text": "In a chain where every end serves a further end without term, no member owns any desirability to lend.",
                "role": "minor"
              },
              {
                "id": "c3",
                "text": "Therefore there is a last end, desired for itself, from which the whole chain borrows.",
                "role": "conclusion"
              }
            ],
            "feedback": {
              "correct": "Respondeo: the universal states the law of borrowed desirability: means shine with their end's light. The particular blocks the only exit: an endless chain of borrowers with no lender leaves every hand empty. The conclusion follows: something is wanted for itself, or nothing is wanted at all (q.1 a.4). You built this argument's twin in the philosophy course with borrowed being; here it returns wearing desire.",
              "incorrect": "Trace the borrowing. Which statement is the general law about means? Which one shows that an endless chain of borrowers explains nothing? Which one names the lender that must exist?"
            }
          },
        },
        {
          id: `t7-l1-q3`,
          type: "mcq",
          stem: `An objection from your own morning: you ordered the coffee thinking of no last end whatever. You thought of being tired. Does the doctrine claim more than a mind actually does?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: the doctrine covers saints and philosophers; ordinary acts aim no further than their object.",
                "feedback": "This would split humanity into those with a last end and those with mornings only. But the ladder was found inside the most ordinary act on record, a cup of coffee wanted for something, which was wanted for something. The doctrine is not a spirituality for professionals; it is the anatomy of any deliberate act whatever."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, and honesty should trim it: most acts are habit, aimed at nothing.",
                "feedback": "Habit lowers the lights; it does not empty the act of direction. The half-asleep hand still reaches for the cup and not the stapler, because an order set long ago still stands. What runs on habit runs on ends adopted earlier, the way the riverbed steers water that is not thinking about the sea."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No: the claim is that acts aim at ends knowingly, and the last end is known vaguely in each.",
                "feedback": "Too strong in the wrong place. The doctrine does not need the last end to appear, even vaguely, inside every act's awareness; that would make every espresso an examen. The ordering is real without being rehearsed, which is exactly the distinction the correct answer draws."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No: the first step carries the journey without the traveler rehearsing the destination.",
                "feedback": "Respondeo: one need not think of the last end whenever one desires anything, says Thomas; the virtue of the first intention abides in every step, as the traveler does not consult the map at each stride (q.1 a.6). The destination rules the walking from behind the walker's attention. What the doctrine claims is order, not commentary; your coffee was ordered to your fulfillment whether or not you filed the paperwork."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t7-l1-q4`,
          type: "mcq",
          stem: `Seven billion people, seven billion pursuits: traders, monks, bodybuilders, poets. Augustine says all of them agree in desiring one thing. In what sense can that possibly be true?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "They agree in the aspect: all seek their fulfillment; they war over the thing that fulfills.",
                "feedback": "Respondeo: as to the ASPECT of last end, all agree, for all desire their perfection to be complete; as to the THING in which it lies, they divide, some choosing riches, some pleasure, some something else (q.1 a.7). Thomas's own image seals it: everyone loves the sweet, but one palate swears by wine and another by honey. The disagreement about happiness is itself the proof that everyone is aiming at it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "They agree only verbally: the word happiness papers over unrelated hungers.",
                "feedback": "If the hungers were unrelated, the arguments would never start; nobody debates whether the trader or the monk has the better postal code. Men fight about lives precisely because each life is a claim about the same prize. A mere word in common produces confusion; what we observe is competition, which requires a common object."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "They agree by conditioning: culture teaches one word and many advertisements.",
                "feedback": "Advertisements presuppose the appetite they exploit; no campaign ever had to create the desire to be fulfilled, only to misdirect it. The agreement runs beneath culture, in the will's own object: every appetite is for good, and the complete good is what fulfillment means. Culture decorates the target; nature hung it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "They do not agree: the saint and the cynic want different universes.",
                "feedback": "They want different ADDRESSES for the same homecoming. Even the cynic's refusal is a verdict about where fulfillment is not, which is a move in the game he claims not to play. Thomas is unsentimental here: the sinner has not resigned from the last end; he has misfiled it (q.1 a.7 ad 1). That misfiling is the next lesson's whole subject."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t7-l1-q5`,
          type: "true_false_with_reason",
          stem: `Judge the sentence: "Your cat seeks beatitude too, in her way."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: all things desire good, and beatitude is simply the good, so all things seek it.",
                "feedback": "The premise is the tradition's own; the conclusion slides. All things do tend to good, and in tending to their perfection they tend, in their way, toward God's likeness. But beatitude is not good-in-general; it is the COMPLETE good, possessed by knowing and loving. The cat tends; she cannot possess an end she cannot know as an end."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: creation itself groans for glory, the cat included in the groaning.",
                "feedback": "The groaning of creation is real Scripture and a real doctrine, but it is creation awaiting its renewal in man's glory, not each beast pursuing a beatitude of its own. The register slipped: the cat shares in the world's ordination to glory the way the stage shares in the play, not the way an actor does."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: only a nature that can know the universal good can seek or possess the last end as such.",
                "feedback": "Respondeo: the last end is attained by knowing and loving God, and this no creature below reason can do; irrational creatures reach their end as a likeness, not as a possession (q.1 a.8). The cat seeks the good OF a cat: warmth, the hunt, the patch of sun, and she finds it, being better at her end than most of us are at ours. What she cannot do is ask the question this module is. The asking is the rational creature's burden and its glory."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: animals seek nothing at all; they are mechanisms that merely react.",
                "feedback": "Right verdict, and a scorched-earth reason the tradition refuses. The beast-machine doctrine solves the problem by shooting the cat: genuine appetite, sensation, and estimative cunning are real perfections, taught with care in the philosophy course. The cat truly seeks; she seeks goods, not the Good. Keep the animals their souls and beatitude its altitude."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t7-l1-q6`,
          type: "mcq",
          stem: `Last question of the opening: the stakes. Suppose a man gets the last-end question wrong, quietly, without ever asking it. What follows for everything else he does?`,
          latin_tag: `finis ultimus`,
          doctrine_line: `Every deliberate act aims at an end, the chain of ends terminates in one last end, all men seek it under the aspect of happiness while disagreeing about the thing, and only a rational nature can seek and possess it as such.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Little: individual choices are judged locally, and most of life is local.",
                "feedback": "Locality is the illusion the ladder dissolved. Every local choice borrows its point from the rung above it, and the whole ladder leans on the last rung. A man whose final answer is wrong can still choose well locally the way a navigator can still hold a steady course to the wrong continent: skillfully, and in vain."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Everything tilts: the last end is the measure of every choice, so an error there misorders the whole.",
                "feedback": "Respondeo: the whole of life is ruled by the last end as an army by its general; the various pursuits of men flow from the various things in which they seek their consummate good (q.1 a.7). Get the general wrong and every disciplined regiment marches wrongly. This is why the next lesson is an audit and not a meditation: the candidates men actually elect must be examined one by one, and most of them are on your phone."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing follows necessarily: ends are private, and coherence is a taste.",
                "feedback": "Privacy misplaces the question. The last end is not a preference inside the man; it is what the man as a whole is FOR, and a thing can be wrong about what it is for: ask any ship run aground. Coherence with a false end is not taste; it is efficiency in the wrong direction, the most orderly way to be lost."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "He will feel it immediately: a wrong last end announces itself in misery without delay.",
                "feedback": "Would that it did; the audit would be self-executing. But false ends pay real installments of satisfaction, which is exactly their power to hold a life. The misery tends to arrive late, at the top of the ladder, where a man finds the view empty. The doctrine exists so the inspection can happen before the climb spends the decades."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `t7-l2`,
      num: `II`,
      title: `The Candidates Fail`,
      latin: `bonum particulare`,
      tag: `bonum particulare`,
      fin: {
        tag: `bonum particulare`,
        heading: `The audit closes; the feed is acquitted of nothing.`,
        body: `Five candidates walked in wearing crowns and walked out filed: means, sign, rumor, principle, accident. And one filed with honors: the soul's own virtue, noblest of the creatures audited and a creature still, participated, portioned, a sail mistaken for a harbor. Notice what the audit never did: it never called the goods bad. The money buys real bread, the honor attests real excellence, the pleasure blooms on real goods; the feed's mistake is not loving them but CROWNING them, electing to the infinite office a series of finite candidates who never asked for the job and cannot do it. The diagnostic travels well: whatever you possess and then despise was a means; whatever you possess and love the more was drawing you to the sovereign good. One verdict stands at the bottom of the ledger, and it is the largest sentence in the module: nothing created can lull the will. Which leaves exactly one candidate, and the next lesson asks the only remaining question: what would POSSESSING God even mean?`,
      },
      questions: [
        {
          id: `t7-l2-q1`,
          type: "mcq",
          stem: `Four lives on the screen: the yacht deck, the blue checkmark, the corner office, the infinity pool. The audit opens with the oldest candidate. Why can wealth not be the last end?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because it corrupts: money makes men worse, and the end cannot degrade its seekers.",
                "feedback": "A moralism where a metaphysics is needed, and false besides: wealth in a generous hand does not corrupt, and the tradition praises the magnificent giver. The disqualification is structural, not hygienic; it holds for the honest fortune as firmly as for the crooked one. Look at what wealth is FOR, and the last end cannot be for anything."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because it runs out: fortunes end, and the last end must be durable.",
                "feedback": "Then a sufficiently insured fortune would qualify, and the audit would be an actuarial problem. The failure is deeper than fragility: even the permanent endowment, even the dragon's unspendable hoard, is a heap of FOR, food and shelter and exchange, means all the way down. Durability cannot promote a means into an end."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because it is a means by its whole nature: natural wealth serves need, and money serves natural wealth.",
                "feedback": "Respondeo: wealth is twofold, natural and artificial; the natural kind, food, drink, shelter, is sought as support of human nature, and money is sought only for what it buys (q.2 a.1). A means twice over cannot be the last end any more than the ladder can be the roof. The audit's first rule appears here and never leaves: ask of each candidate not how much it glitters but what it is FOR. Whatever answers is disqualified by answering."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because Scripture says the poor are blessed, and revelation outranks the market.",
                "feedback": "Revelation does outrank the market, but the beatitude of the poor is not a doctrine that poverty is the last end, which would merely crown the opposite candidate. Thomas argues wealth down without a single proof-text, on its own structure as means; the argument works on a trading floor. Save the auctoritas for where reason cannot reach; here it can."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t7-l2-q2`,
          type: "mcq",
          stem: `Candidate two: honor. The award ceremony, the title, the room standing as you enter. Aquinas disqualifies it with a preposition. Where does honor actually live?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "In the one honoring: it is their act about your excellence, a sign paid, not a good possessed.",
                "feedback": "Respondeo: honor is not in the honored but in him who honors; it is a sign and attestation of an excellence already there (q.2 a.2). Your beatitude cannot be an event in someone else's will, a thing they could withhold at a committee meeting. And the sign presupposes the thing signed: honor can RESULT from happiness; it cannot constitute it. The virtuous who work FOR the honor have quietly changed professions: that trade is called ambition."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In the honored: it is a real perfection added to the one who receives it.",
                "feedback": "Read the transaction again: what changed in you between the announcement and the applause? The excellence was already yours or the honor was a lie. Nothing crossed the stage but recognition, which lives in the recognizers. A perfection that adds nothing to its possessor is a strange candidate for the perfection that is supposed to complete him."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nowhere: honor is an illusion of hierarchy, well lost to honest societies.",
                "feedback": "Too sharp by half. Honor is real, owed, and commanded; the tradition builds a whole virtue around rendering it, and God Himself is honored without illusion. The audit does not shoot the candidates; it files them. Honor is a true sign in another's act, excellent in its place, and its place is not the throne."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "In the deed honored: great acts carry their glory intrinsically, applause or none.",
                "feedback": "You have described virtue's own worth, not honor. The deed's goodness is intrinsic; the honoring of it is precisely what is not, being other people's act about it. The confusion flatters honor with virtue's credentials. Untangle them and the candidate stands in the right line: consequence, not constitution; sign, not substance."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t7-l2-q3`,
          type: "spot_the_fallacy",
          stem: `Now the argument itself, as the feed preaches it daily without writing it down. Four steps; three are sound, one carries the flaw that fells the whole. Find the broken joint.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Step:",
                "text": "Happiness is the end everyone seeks in everything they do.",
                "correct": false,
                "feedback": "Sound, and the course's own doctrine: all agree in the aspect of the last end (q.1 a.7). The influencer economy did not invent the aim; it inherited it. The rot is further down."
              },
              {
                "id": "b",
                "label": "Step:",
                "text": "The winners visibly hold what men chase: money, followers, power, pleasure, in heaps.",
                "correct": false,
                "feedback": "Sound as observation; the heaps are real and the cameras do not lie about the yacht. The audit never denied the goods are goods. What it denies is a claim this step has not yet made."
              },
              {
                "id": "c",
                "label": "Step:",
                "text": "If desire is still restless after gaining some, the dose was too small: enough of these goods is happiness.",
                "correct": true,
                "feedback": "Respondeo: found. The step reads restlessness as a supply problem when it is a kind problem. The will's object is the universal good, and naught can lull it save that, which is found in no creature (q.2 a.8): no quantity of the finite is a larger fraction of the infinite. Thomas even hands you the diagnostic: temporal goods, once possessed, are despised and others sought, which is Our Lord's 'whosoever drinketh of this water shall thirst again'; the sovereign good runs opposite, more possessed, more loved, 'they that eat me shall yet hunger' (q.2 a.1 ad 3). Test any prize by its aftertaste: if having it breeds contempt for it, you have found a means wearing a crown."
              },
              {
                "id": "d",
                "label": "Step:",
                "text": "So the rational plan is to maximize them and rest when rich, famous, strong, and pleased.",
                "correct": false,
                "feedback": "As logic, this step is innocent: it follows perfectly from the step before it. That is precisely the tragedy; the plan inherits the crack. And its own witnesses testify: the memoirs of the maximally rich, famous, strong, and pleased are the literature of the still-restless. Fix the joint above and this step re-derives itself with a different destination."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t7-l2-q4`,
          type: "distinction_application",
          stem: `The audit's ledger, four disqualifications now on file: a MEANS is for another and cannot be last; a SIGN lives in someone else's act about you; a PRINCIPLE is a source usable for good or ill, and the end must be good simply; an ACCIDENT follows a good as its bloom and is not the good. Now the fourth candidate: power, the corner office, command of ten thousand. Under which disqualification does power fall?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A sign: power exists in the deference of the ruled, as honor in the honorer.",
                "feedback": "Tempting, since power is fed by deference, but the analysis misfiles it. Power is genuinely IN the powerful as a capacity; the tyrant alone on an island retains his cunning and his will to command. What disqualifies it is not where it lives but what it is: a beginning, and beginnings point forward."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A principle: a source of doing, open to good and evil use; the end is neither.",
                "feedback": "Respondeo: power has the nature of principle, says Thomas, and happiness the nature of last end; and power relates to good and evil alike, while beatitude is man's proper and perfect good (q.2 a.4). A thing you can use well or badly is by that fact not the terminus; some happiness might lie in the good USE of power, which is virtue's business, never in the holding. The same article files all four external candidates at once: found in evil men, unable to satisfy, able to harm, and dealt by fortune. The ledger closes on the outside world."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A means: power is sought for wealth, as money is sought for bread.",
                "feedback": "Sometimes true of the corrupt, but it dignifies power too little and too much at once. Power is not intrinsically for wealth; many hold it for its own savor, which is exactly why it needs the deeper disqualification. A candidate can fail as means in one man and still need auditing in the man who wants it terminally. The structural verdict is elsewhere."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An accident: power blooms on excellence the way delight blooms on the good.",
                "feedback": "That is delight's file, and it is waiting for the pleasure candidate. Power does not follow excellence as its bloom; history is a long demonstration that it settles on the excellent and the vicious with impartial weather. An accident of happiness could never be found so comfortable in evil men, which is the article's own first test."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t7-l2-q5`,
          type: "true_false_with_reason",
          stem: `The noblest candidate, kept for last. Judge the sentence: "Happiness is virtue: the good soul is its own beatitude."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: the sage is happy even on the rack, needing nothing the world can take.",
                "feedback": "The Stoa at full nobility, and the tradition honors it as the best pagan answer to a question pagans could not close. But watch the rack test the thesis to destruction: whatever the sage keeps there, no honest witness calls it the COMPLETE good, lacking nothing. Virtue is the road's discipline mistaken for the destination's rest."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: since no external candidate survived the audit, the good must be internal, and virtue is the best internal good.",
                "feedback": "The elimination is sound and the inference slips at the last step: it assumes the inventory ends at the soul's own walls. The audit's logic points not inward but UPWARD: beyond goods of fortune and goods of the soul stands the good that is neither in the world nor in you, but is yours to possess. Interiority was the right direction and the wrong stop."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: the soul is in potentiality and its goods are participated; a portioned good cannot be the last end.",
                "feedback": "Respondeo: the soul, considered in itself, is in potentiality, becoming knowing from potentially knowing, virtuous from potentially virtuous; and any good inherent to it is participated, therefore portioned (q.2 a.7). The vessel cannot be its own filling. Happiness is indeed a good OF the soul, Thomas grants, as to its possession; but WHAT is possessed, the thing that makes happy, is outside the soul entirely. Virtue is the sail set right. The sail is not the harbor."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: virtue is a myth of the strong; happiness needs no character at all.",
                "feedback": "Right verdict, poisoned reason. Strip virtue from the account and the audit's own instrument breaks: it takes a well-disposed appetite to judge candidates truly, as it takes a healthy palate to judge the sweet (q.1 a.7's own image). Virtue is not the last end, and it is not optional either: it is required FOR the end, a distinction the next lessons will spend carefully."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t7-l2-q6`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>It is impossible for any created good to constitute man's happiness. For happiness is the perfect good, which lulls the appetite altogether; else it would not be the last end, if something yet remained to be desired. Now the object of the will, i.e. of man's appetite, is the universal good; just as the object of the intellect is the universal true. Hence it is evident that naught can lull man's will, save the universal good. This is to be found, not in any creature, but in God alone; because every creature has goodness by participation. Wherefore God alone can satisfy the will of man, according to the words of Psalm 102:5: "Who satisfieth thy desire with good things."</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae I-II q.2 a.8 &middot; Dominican Fathers translation</div></div>The audit's verdict, in the master's own hand. What does the whole argument run on?`,
          latin_tag: `bonum particulare`,
          doctrine_line: `Wealth is a means, honor a sign in another's act, fame unstable knowledge, power a principle open to evil, pleasure a proper accident, and the soul's own goods participated: no created good can lull the will, whose object is the universal good, found in God alone.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The will's object: an appetite whose object is universal good cannot rest in any participated good.",
                "feedback": "Respondeo: the argument is a measurement. The will's capacity was gauged in the philosophy course: its object is good AS SUCH, as the intellect's is truth as such. Set any creature against that aperture and the creature shows its edges, for every creature has goodness by participation, borrowed, portioned, bounded. An appetite calibrated to the universal cannot be filled by instances of it, no matter the count. Only the good that IS goodness fits the opening. The candidates did not fail by being bad; they failed by being small."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Experience: enough disappointed lives eventually prove the pattern.",
                "feedback": "The disappointed lives illustrate; they do not prove. Induction from misery could always be answered with one more optimist and a better yacht. Thomas's argument would hold if every rich man died grinning: it measures the will's object against the creature's mode of being, and metaphysics does not wait on memoirs."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Authority: the Psalm settles what satisfies, and the argument decorates it.",
                "feedback": "Inverted: the Psalm arrives as the seal, not the engine. The engine is the analysis of appetite and object, which would compel a reader who never opened a psalter. Auctoritas and argument ride together here, as the method module taught; mistake the seal for the engine and you make the faith look like it fears the reasoning it in fact commissioned."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Definition: happiness was defined as God from the start, so creatures lose by stipulation.",
                "feedback": "No stipulation anywhere in the lesson: happiness entered as the formal aspect everyone seeks, the complete fulfillment, and the candidates were audited on their own structures, means and sign and principle and accident. God arrives at the END of the elimination, as the only thing left standing that answers the aperture. The conclusion was earned rung by rung, which is why it can be preached to someone who did not grant it."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t7-l3`,
      num: `III`,
      title: `Only the Infinite Fills`,
      latin: `visio beatifica`,
      tag: `visio beatifica`,
      fin: {
        tag: `visio beatifica`,
        heading: `Rest, it turns out, is an act.`,
        body: `The grandmother's five words survived the jeweler: her happiness is God Himself, the uncreated Thing desired; and the possession of Him, when it comes, will be a created act in her, the soul's last operation, one and continual and everlasting. Not a nap on a cloud: the doctrine runs precisely opposite the cartoon, toward a life MORE in act than any moment you have ever been awake. The essence of that life is seeing; the will's joy is its crown, joy in truth, unfakeable because it blooms on an object no chemistry can counterfeit. Even the angels, who walked you home through the last module, bow out at this door: participated beings, magnificent lamps, not the sun. One enormous problem now stands in plain view. The seeing this lesson promised is a seeing of the divine ESSENCE, and nothing in your nature, or in any nature, can perform it. Eyes made for light still need the dawn. The next lesson is about the dawn.`,
      },
      questions: [
        {
          id: `t7-l3-q1`,
          type: "mcq",
          stem: `Augustine prayed the sentence everyone quotes: our heart is restless until it rests in Thee. The audit just turned the poetry into machinery. What is the ARGUMENT under the restlessness?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Psychology: humans habituate to any pleasure, so novelty must eventually run out.",
                "feedback": "Habituation is real and beside the point: it explains why the fifth yacht bores, not why the first one could never have sufficed. A treadmill of novelty describes the symptom's rhythm. The argument needs the disease's cause, which is not in the nervous system but in the will's object."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Capacity and object: a will aimed at good as such can rest only in the good that IS goodness.",
                "feedback": "Respondeo: the restless heart is q.2 a.8 wearing its Sunday best. The will's object is the universal good; every creature is good by participation; therefore no creature stills the appetite, and the good that is goodness itself, subsisting, does. Augustine's 'until it rests in Thee' is a measurement disguised as a sigh. The remaining question is what RESTING means, and the tradition's answer will keep you awake: it is not sleep."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Design flaw: desire overshoots what exists, a cruel surplus with no object.",
                "feedback": "The absurdist reading: an appetite built for nothing, evolution's cruel margin. But an aperture calibrated to the universal good is not an overshoot if the universal good exists, and the course spent two parts establishing that it does, subsistent, uncreated, one. The surplus is a fit awaiting its object. Despair reads the keyhole and forgets to ask about the key."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Testimony: the saints report restlessness, and their witness outweighs the world's.",
                "feedback": "The saints' testimony is precious and it is not the engine; on testimony alone the world could subpoena its own contented witnesses and the court would hang. Augustine's sentence is quotable precisely because the argument beneath it holds without him: he is describing a structure, not filing a mood report."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t7-l3-q2`,
          type: "precision_check",
          stem: `A grandmother, asked by her grandson what she is looking forward to, answers in five words. Judge the sentence with a jeweler's eye.`,
          payload: {
            "statement": "My happiness is God Himself.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At 'God Himself': strictly she should say the vision of God, not God.",
                "feedback": "Over-scrupled, and the scruple would correct Boethius and the Psalter besides. The end is twofold: the THING desired, and the possession of it. Taken as the thing, her happiness is exactly God Himself, uncreated; taken as her possession, it is the created vision in her. Her sentence speaks the first sense, as the tradition constantly does. She needs no editor."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At 'my': happiness is objective, and the possessive smuggles in subjectivism.",
                "feedback": "The possessive is not subjectivism; it is participation grammar. The one uncreated Good will be possessed by her, in her own created act of seeing, as truly hers as her own life. Beatitude is objective in its object and personal in its possession, and 'my' claims only the second. Strip the possessive and you have a doctrine nobody can look forward to."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At 'is': God causes happiness but cannot BE it; the verb overreaches.",
                "feedback": "The verb is the best word in the sentence. If God merely caused happiness, happiness would be some created thing He hands over, and the audit would reopen: every created thing was already disqualified. The thing desired is Himself, not a parcel from Him; He is the miser's coin, not the mint. The 'is' carries the whole doctrine the module just earned."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing to correct: the sentence states the object of beatitude exactly as the tradition states it.",
                "feedback": "Respondeo: nothing to correct, and be slow to out-precision a grandmother. Thomas splits the end into the thing itself and its attainment: as to the thing, man's last end is the uncreated good, God, who alone by His infinite goodness can perfectly satisfy man's will; as to attainment, it is a created act in her (q.3 a.1). Her five words state the first half; her looking-forward performs the second. The jeweler's eye exists to catch flaws, and part of its training is recognizing when there are none."
              }
            ],
            "correct_option_id": "d",
            "correction": "The sentence stands. In full dress: the THING her happiness is, is God Himself, uncreated; the POSSESSION of Him, the seeing, is a created operation in her (ST I-II q.3 a.1). Both senses are true, and she spoke the greater one."
          },
        },
        {
          id: `t7-l3-q3`,
          type: "mcq",
          stem: `Then the possession itself: what KIND of thing is your beatitude, in you? The cartoons vote for a very long nap on a very white cloud. Aquinas votes differently. What is it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "An operation: the soul's last act, one, continual, everlasting; the most alive you will ever be.",
                "feedback": "Respondeo: happiness is man's supreme perfection, and each thing is perfect so far as it is actual; therefore beatitude is operation, the last act of the operator (q.3 a.2). Not a badge conferred, not a state endured, and not rest-as-cessation: in that state the mind is united to God by ONE, CONTINUAL, EVERLASTING operation (a.2 ad 4). Eternal life is a life. The cloud-and-harp caricature dies not of irreverence but of metaphysics: pure receptivity would be less than you are now, and heaven is not built downward."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A state: the settled condition of possessing all goods, as Boethius defined it.",
                "feedback": "Boethius' definition is honored and then anatomized: the state of possessing the perfect good describes the happy man from outside; what ESTABLISHES him in that state is the question, and the answer is an act (q.3 a.2 ad 2). A state with no operation under it would be a throne with no king seated. The definition names the palace; Aristotle and Thomas name the living occupant."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A feeling: the permanent contentment of a desire finally met.",
                "feedback": "Contentment attends beatitude the way warmth attends fire, and mistaking it for the essence re-runs the pleasure candidate's file at higher altitude. A feeling is measured by its object; unmoor it from the seeing and the feeling could in principle be counterfeited, which is exactly what every lesser candidate offered. The joy is real and it is the crown, not the head."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A relation: to be beatified is to be newly related to God, as adopted, not to act.",
                "feedback": "The relation is real and presupposed, but a relation as such perfects nothing unless it lands in act; even now you are related to God as creature without thereby being blessed. Beatitude must be the FULFILLMENT of the nature, and natures are fulfilled by their operations, as the philosophy course taught with the sleeping pianist. The blessed are not merely re-filed. They are finally, fully, in act."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t7-l3-q4`,
          type: "mcq",
          stem: `The schools' own quarrel, held inside the wall: the beatific act, is it the intellect's or the will's? Love is greater than knowledge on the road, says everyone. At home, which power holds the essence of beatitude?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The will's: beatitude is perfect love, for love unites more closely than sight.",
                "feedback": "The Franciscan banner, Scotus bearing it, and the course names it with respect: a permitted position inside the wall, never condemned, argued by serious men on the Apostle's own 'the greater of these is charity.' The Thomist answer does not demote love; it locates it: love moves the whole journey and crowns the arrival, but the ARRIVING itself, the making-present of the End, is not what willing does. Desire is motion toward; delight is rest in what is already present; neither is the presenting. The house holds with q.3 a.4, and Rome holds the question open."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Both equally: the beatific act is a single composite of seeing and loving.",
                "feedback": "Irenic and structurally impossible: one act of two really distinct powers is a committee, not an operation. The blessed both see and love, wholly and forever; the question is which act is the ESSENCE and which the proper accident, and essence does not come in halves. The tradition's precision here is not pedantry; it protects both powers from doing the other's job badly."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The intellect's: attainment is presence, and presence to the mind is the intellect's act; delight follows in the will.",
                "feedback": "Respondeo: the covetous man does not have the money by wanting it; he has it by grasping it, and then the will delights in money got. So with the intelligible end: we attain it when it is made PRESENT, and presence to the mind is by an act of the intellect, whereupon the delighted will rests (q.3 a.4). The essence of beatitude is vision; the will's joy is its proper crown, 'joy in truth.' Love is greater in moving, knowledge first in attaining: both sentences are the house's, in order."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither: beatitude is the whole soul's harmony, beyond any one power's act.",
                "feedback": "Harmony language dissolves what it means to explain. The whole soul is indeed perfected, lower powers overflowed into, the body itself glorified at the end; but every overflow has a source, and the source is some act of some power. Name no power and you have named no perfection, only gestured at its atmosphere. The tradition's question is sharper because its answer has to be."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t7-l3-q5`,
          type: "mcq",
          stem: `One rung remains above you, and you know its residents personally now. Could the angels be the destination? Or their teaching, the fullest a creature ever gave? The guide who walked you home stands at the door. Why does he not come in as your beatitude?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Protocol: the angel could beatify, but God reserves that office to Himself.",
                "feedback": "This makes the disqualification a jurisdiction ruling, as if the angel had the goods and lacked the license. He lacks the goods: beatifying is not an office assignable in principle, because no participated being can be the terminus of an appetite for the unparticipated. The reservation is not divine protectiveness. It is arithmetic."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the angel is participated being: nothing that HAS goodness can fill a will aimed at what IS goodness.",
                "feedback": "Respondeo: angels have being and truth by participation, so contemplating them perfects the mind only by participation; the intellect's formal object is the true itself, and it rests only in the essence in which truth and being subsist (q.3 a.7). Thomas's verdict keeps the courtesy and the line: the angel enlightens as a minister, and helps man to happiness, but he is not the object of it. The colleague of the last module walks you to the door and bows out, which is the most angelic thing he does. Even the highest creature is a lamp, and the heart was made for the sun."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because angels are equals: one cannot rest in what stands on one's own rung.",
                "feedback": "The rung is wrong and the principle too: the angel stands above you in nature, and resting in a superior is exactly what the theory on trial proposed. The disqualification does not care about relative altitude among creatures; it cares that every altitude in creation is finite. From the will's aperture, the top rung and the bottom are the same distance from enough."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because contemplating angels is impossible: pure spirits exceed embodied knowledge entirely.",
                "feedback": "Too despairing, and the article says the opposite: contemplation of the angels is a HIGHER imperfect happiness than the sciences give, a real participation. The wayfarer's knowledge of them is hard-won and analogical, but the blessed will know them as fellow citizens. The problem was never access. It is that no creature, however knowable, is the End."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t7-l3-q6`,
          type: "true_false_with_reason",
          stem: `Judge the sentence: "In the end, the joy is the point: heaven is perfect happiness because it feels like nothing else."`,
          latin_tag: `visio beatifica`,
          doctrine_line: `Beatitude, as the thing desired, is the uncreated God; as possessed, a created operation, the intellect's vision of the essence, with the will's delight as its proper crown; no creature, not the highest angel, can be its object.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: what all seek in everything is delight, so delight must be the essence of the end.",
                "feedback": "The hedonist syllogism, met and turned in the audit: all desire delight BECAUSE delight is the appetite's rest in some good, so the good is principle and the delight follows (q.2 a.6). Universal pursuit proves delight is everywhere the shadow; shadows are cast, not self-standing. The blessed do not see because it delights them; they delight because they see."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: Scripture commands rejoicing, and a commanded joy must be the substance of glory.",
                "feedback": "Scripture commands rejoicing the way it commands gratitude: as the fitting response to a gift, which presupposes the gift. The command's existence proves joy is owed, not that joy is the substance it answers to. Read the grammar of 'rejoice IN the Lord': the preposition files the joy where the whole lesson files it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: delight is the proper accident of beatitude; the vision is the essence and the joy its crown.",
                "feedback": "Respondeo: delight results from the perfect good as its proper accident, as the risible follows the rational (q.2 a.6); the essence of beatitude is the act of seeing, and joy is its consummation, 'joy in truth' (q.3 a.4). Nothing is subtracted from the joy by filing it rightly; it is secured. A joy that WAS the essence could float free of its object and be counterfeited by any sufficient chemistry. The joy of the blessed cannot, because it is the bloom of a seeing no chemistry reaches."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: there is no feeling in heaven; the blessed know, and knowing has no warmth.",
                "feedback": "Right verdict, frostbitten reason. The delight of the blessed is real, overwhelming, and defined into the doctrine: in that vision they ENJOY the divine essence, says the Church's own definition. The correction never removes the joy; it seats it. Heaven with no warmth is not precision; it is a new error, colder than the first and no closer to the text."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t7-l4`,
      num: `IV`,
      title: `Seeing Requires Lifting`,
      latin: `lumen gloriae`,
      tag: `lumen gloriae`,
      fin: {
        tag: `lumen gloriae`,
        heading: `Eyes made for light still need the dawn.`,
        body: `The wonder that follows every eclipse, iterated to the horizon, was the natural desire in motion: to know not just THAT the First Cause is, but what He is. Nature carries the question and cannot carry the answer; man and angel alike stand below the vision infinitely, and the devil's clenched instant showed what becomes of a creature who decides to grasp it as his own. The tradition holds the paradox with both hands and no strain: the desire proves the fit, never the debt. What God does, He does to the seer, not to the sight: the lumen gloriae, created light, lifts the mind until the Essence itself, unshrunk, unpictured, unmediated by any creature, becomes present to it, plainly, clearly, openly, mox after death for the purified, before the bodies, before the last day, forever. Even the eulogy needed only one repair: she sees Him whole, and will never comprehend Him, which is why the joy cannot exhaust. One lesson remains: the recapitulation, and the question the whole Part now forces. The destination is fixed and the legs are insufficient. What is the road?`,
      },
      questions: [
        {
          id: `t7-l4-q1`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Man is not perfectly happy, so long as something remains for him to desire and seek . . . when man knows an effect, and knows that it has a cause, there naturally remains in the man the desire to know about the cause, "what it is." And this desire is one of wonder, and causes inquiry, as is stated in the beginning of the Metaphysics. For instance, if a man, knowing the eclipse of the sun, consider that it must be due to some cause, and know not what that cause is, he wonders about it, and from wondering proceeds to inquire. Nor does this inquiry cease until he arrive at a knowledge of the essence of the cause. If therefore the human intellect, knowing the essence of some created effect, knows no more of God than "that He is"; the perfection of that intellect does not yet reach simply the First Cause, but there remains in it the natural desire to seek the cause. Wherefore it is not yet perfectly happy. Consequently, for perfect happiness the intellect needs to reach the very Essence of the First Cause.</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae I-II q.3 a.8 &middot; Dominican Fathers translation</div></div>Read it with your own transcript in hand: eighteen modules of philosophy proved THAT He is. What does this passage make of that summit?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A completed education: the demonstrations satisfy reason, and faith adds comfort beyond.",
                "feedback": "The passage says the opposite in so many words: knowing THAT He is leaves the natural desire unsatisfied, still asking what He is. A completed education would have quieted the wonder; the course's whole effect was to sharpen it. If the demonstrations had satisfied you, the theology wing would be a lounge, not a road."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A mistake corrected: the demonstrations were provisional, useful before revelation and retired after.",
                "feedback": "Nothing is retired; the theology is BUILT on the demonstrations, as the whole wing has shown, walking back through the Ways and the attributes lesson by lesson. Grace does not bulldoze the porch to build the house. The passage grades the summit accurately: true, permanent, and penultimate. Penultimate is not provisional."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A threshold: quia-knowledge inflames the quid-question; the whole course was the eclipse and the wonder.",
                "feedback": "Respondeo: the mind that knows an effect and its cause's existence is not finished but IGNITED: the desire is one of wonder, and it does not cease until the essence of the cause is reached. Your Part I was the eclipse observed: borrowed being, the Ways, the attributes named by negation. Every demonstration ended in a 'that' pointing at an unopened 'what.' The passage names your condition: not disappointed, inflamed. Philosophy walks to the door it cannot open, which is the noblest thing a natural discipline has ever done."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A private itch of intellectuals: the wonder-argument describes scholars, not the race.",
                "feedback": "The eclipse example is chosen against you: wondering at the darkened sun is not a faculty-lounge experience. Every child's WHY, iterated to the horizon, is the argument in miniature; the philosopher differs from the child in stamina, not in appetite. The desire to know the cause's essence is the intellect's own nature in motion, distributed exactly as widely as intellects are."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t7-l4-q2`,
          type: "mcq",
          stem: `Now the paradox at the heart of the lesson, stated coldly: the desire to see God is natural, and no natural power, in man or angel, can reach it. Some conclude nature is owed the vision; others, that the desire is a phantom. What does the tradition hold?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nature is owed the dawn: a desire God implants, God is bound in justice to fulfill.",
                "feedback": "This bolts the gift to the nature and destroys its gratuity; the Church fenced it by name in 1950, against those who say God could not create intellectual beings without ordering them to the vision (Humani Generis, DS 3891). A God who OWES the vision has been annexed by His creature's appetite, and grace has become salary. The desire is real; the debt is fiction. Wonder is not an invoice."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The desire is a phantom: conditioned longing, curable by better psychology.",
                "feedback": "The phantom theory must explain why the appetite survives every satisfaction, in every civilization, including the ones that medicated it best; a conditioning with no conditioner and no cure is a strange phantom. The last lesson measured the desire against the will's own object: it is the aperture's size, not a cultural draft through it. Deny the desire and the audit's data goes unexplained."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Two happinesses, sealed apart: nature gets a natural end; the vision is an extrinsic bonus for the baptized.",
                "feedback": "Over-corrected into a duplex with no staircase. The tradition does speak of imperfect natural happiness, but sealing the floors makes the vision a bolt-on that answers no cry in the nature it crowns, exactly the caricature the gratuity's enemies attack. The fit is real: the desire is the keyhole's shape. The gift is that anything comes through the door. Hold both or lose both."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The desire proves the fit, never the debt: eyes made for light still need the dawn.",
                "feedback": "Respondeo: the vision of God surpasses the nature of every creature, and neither man nor angel attains it by natural powers (q.5 a.5); yet the desire for it is the intellect's own wonder in motion (q.3 a.8). Fit without debt: the eye's transparency to light does not summon the sunrise. Thomas's own resolution rides in an image: nature gave man no wings, but free-will, with which he can TURN to God, that He may make him happy; what we do by means of our friends is in a sense done by ourselves (a.5 ad 1). The school keeps finer debates on file, Cajetan's precisions among them; the wall keeps only this: desire natural, fulfillment gratuitous, both stated at full strength."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t7-l4-q3`,
          type: "mcq",
          stem: `Then what actually happens to a created mind so that it can see the Essence? The definition you will read shortly rules out one whole class of answers: no created likeness stands in as the thing seen. So what does the tradition say God does to the seer?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "He strengthens the mind itself: a created light of glory elevates the intellect, and the Essence joins it directly.",
                "feedback": "Respondeo: what cannot be supplied as a picture must be supplied as POWER: the lumen gloriae, a created light poured into the intellect, disposing and elevating it so that the divine essence itself becomes the form by which it understands (I q.12 a.5 by the tradition's account). The Psalm had it in nine words: in Thy light we shall see light. Nothing shown at one remove, nothing projected on a creature-screen: the mind is lifted to the Essence, not the Essence shrunk to the mind. The dawn does not paint the eye a picture of the sun; it makes the eye able."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "He supplies the perfect infused species: the angels' mode of knowing, at last given to man.",
                "feedback": "The subtlest wrong answer on the page, and the last module built your immunity: species infusae are how angels know CREATURES, and no species, theirs or any, can present the Essence, for every created likeness is finite and the thing to be seen is not. The definition's own clause will close this door: without the mediation of any creature by way of object seen. The angel's library does not contain this book; the angel too needs the dawn."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "He accommodates downward: the Essence appears in a form scaled to creaturely capacity.",
                "feedback": "Scaling the Essence is precisely what cannot be done to the absolutely simple; a scaled-down God is a creature wearing the name, and seeing it would be seeing something else. Accommodation is real in revelation's WORDS, which is the modus-significandi lesson; the vision is exactly where accommodation ends. What is seen is the Essence unscaled, or the promise is broken."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "He replaces the mind's act with His own: God sees Himself in us, and we are the theater.",
                "feedback": "This saves the vision by deleting the seer. If the act is not MINE, the beatitude is not mine either; a theater is not blessed by the play. The tradition's care here mirrors the government lesson: God does not replace creaturely acts, He empowers them. The light of glory makes the creature's own act reach the Essence, which is the whole difference between beatitude and being bypassed."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t7-l4-q4`,
          type: "mcq",
          stem: `You have seen this exact grasp before, from below: an instant that never unclenched. The devil's sin was to want beatitude by his own power. Pelagius later preached the human edition. What does the doctrine of the ascent actually leave for nature to do?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing: nature is a spectator, and any motion of ours would contaminate the gift.",
                "feedback": "The overcorrection that burns the field to kill the weed. If nature contributed nothing, there would be no one home to beatify; the gift presupposes and perfects the nature it lifts. The tradition anathematized the self-lift and never the self: what was condemned at Carthage in 418 was nature CLIMBING, not nature TURNING. The lesson's grammar has three verbs, not one."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Everything but the summit: a life of virtue carries you nearly there, grace tops the final yard.",
                "feedback": "The mountaineering picture, and it re-runs Pelagius at altitude: if virtue carries to the last yard, the Pelagian thesis is conceded for the whole climb but the ribbon. The vision is not the top of nature's mountain; it is another ORDER, as q.5 a.5 measured: surpassing every created substance infinitely. There is no yard of it that legs cover. There is a turning, and a being-carried, and the carrying is the whole verticality."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Merit strictly: a just life earns the vision as wages, or heaven is favoritism.",
                "feedback": "Wages-language locks the whole economy to debt, and the vision was measured beyond every nature's earning power; even the tradition's real doctrine of merit, which a later module owns, grows INSIDE grace, never underneath it as its ground. Note the fork you are standing at: earned wages or arbitrary favor are not the only options. Gift is a third thing, and the whole Part is named after it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The turning: free-will can turn to God, who alone can make happy; the grasp was the one fatal move.",
                "feedback": "Respondeo: nature gave man free-will, with which he can TURN to God, that He may make him happy; what we do by means of our friends is done, in a sense, by ourselves (q.5 a.5 ad 1). Turning, asking, receiving: real acts, none of them a climb. The devil's move was the exact inversion, beatitude grasped as one's own power's prize, and the instant never unclenched; Pelagius taught the same grasp with a longer timeline, and Carthage condemned it in 418. The creature's part is not smaller than the grasp. It is smarter: the hand opens."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t7-l4-q5`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>By this Constitution which is to remain in force for ever, we, with apostolic authority, define the following: According to the general disposition of God, the souls of all the saints . . . provided they were not in need of any purification when they died . . . or else, if they then needed or will need some purification, after they have been purified after death . . . already before they take up their bodies again and before the general judgment, have been, are and will be with Christ in heaven . . . and these souls have seen and see the divine essence with an intuitive vision and even face to face, without the mediation of any creature by way of object of vision; rather the divine essence immediately manifests itself to them, plainly, clearly and openly, and in this vision they enjoy the divine essence.</p><div class="cr-cite">Benedict XII, Benedictus Deus (1336), DS 1000 &middot; On the Beatific Vision of God</div></div>A pope defining, with the strongest formula in the toolbox. What question was this built to close?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Whether the vision is of the essence or only of created glory: the definition chose the essence.",
                "feedback": "True doctrine, wrong target: that the blessed see the essence itself was the tradition's possession before and after; the definition states it with both hands but was not provoked by its denial. Read the clause the text keeps repeating in different dress: before the bodies, before the judgment, ALREADY. The urgency has a timestamp."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "WHEN the blessed see: immediately after death and purification, not waiting for the general judgment.",
                "feedback": "Respondeo: mox, immediately: the purified see the essence before they take up their bodies again and before the general judgment, a vision intuitive, facial, unmediated by any creature as object, and never interrupted (DS 1000). The backstory is a masterclass in theological weights: John XXII had preached the delayed vision as a private opinion, was contested by the theologians, and retracted on his deathbed; his successor defined the contrary within two years. A pope's sermon is not the chair speaking; the chair spoke here, and the formula shows it: we define, in force for ever. Your dead in Christ, purified, are not in a waiting room. They see Him now."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Whether the body is needed for beatitude: the definition rules the soul alone can be blessed.",
                "feedback": "A true consequence, visibly carried in 'before they take up their bodies again,' but as the target it misses the fight. The resurrection's glory is not demoted: the body will share by overflow, and the blessed await it. What the definition refuses is a beatitude POSTPONED until the body returns, which was the live error on the table. The soul sees now; the body will join the seeing it did not have to wait for."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Whether faith survives in heaven: the definition retires faith and hope for the seers.",
                "feedback": "The document does teach it, one paragraph on: vision and enjoyment retire faith and hope, which are of things unseen and awaited. But that clause is harvest, not battlefield; nobody was defending everlasting faith among the blessed. It rides along because it follows: where the seeing is facial, believing is finished, and only love of the three remains. The main definition aims at the calendar."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t7-l4-q6`,
          type: "precision_check",
          stem: `A eulogy, warmly meant, one verb overloaded. Judge the sentence with a jeweler's eye.`,
          latin_tag: `lumen gloriae`,
          doctrine_line: `The desire to see the First Cause is natural and its fulfillment above every nature: the light of glory elevates the created mind to the Essence itself, unmediated; the purified see it immediately after death, and no creature ever comprehends it.`,
          lesson_complete: true,
          payload: {
            "statement": "She is with God now, and finally comprehends Him.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At 'comprehends': the blessed see the whole Essence, but never wholly; God alone comprehends God.",
                "feedback": "Respondeo: the happiness of God, who in understanding His essence comprehends it, stands above that of man or angel, who sees it indeed but comprehends it not (q.3 a.8 ad 2). Seeing whole without seeing wholly: the vision is of the entire simple Essence, and the finite act never exhausts the infinite intelligibility. This is T3's greater-unlikeness clause keeping its post inside heaven itself: the Creator-creature line is not erased by glory, it is consummated. Eternity will not run out of God, which is why it will not run out of joy."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At 'finally': the vision waits for the resurrection, so 'now' overclaims.",
                "feedback": "You have corrected the sentence with the condemned timetable. Mox post mortem, the definition says: purified souls see before the bodies return, before the judgment, now. 'Finally' and 'now' are the two words in the eulogy Benedictus Deus underwrites in full. The flaw is the verb between them."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At 'with God': souls await heaven in a neutral place until the last day, so the phrase is premature.",
                "feedback": "The waiting-room doctrine again, condemned by the same definition twice over: the purified are with Christ in heaven, joined to the company of the angels, already. There is no neutral anteroom for the purified dead. If she died in grace and is purified, 'with God now' is not piety rounding up; it is the defined faith speaking plainly."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing to correct: love speaks loosely and heaven forgives the grammar.",
                "feedback": "Heaven forgives; the catechist should still repair. One verb in the sentence promises what no creature ever receives, and it matters pastorally: a God comprehended is a God finished, and a finished God is a boredom waiting to happen. The true doctrine is better than the loose one: she sees Him whole, forever, and forever there is more. Keep the eulogy; change one word."
              }
            ],
            "correct_option_id": "a",
            "correction": "Say rather: she sees Him now, face to face, whole; and she will never comprehend Him, which is why the joy has no floor to strike (ST I-II q.3 a.8 ad 2; I q.12 a.7 by position). Vision is total as seeing, inexhaustible as seen."
          },
        }
      ],
    },
    {
      id: `t7-l5`,
      num: `V`,
      title: `Recapitulatio`,
      latin: `beatitudo perfecta`,
      tag: `beatitudo perfecta`,
      fin: {
        tag: `beatitudo perfecta`,
        heading: `The destination fixed; the road, next.`,
        body: `The Return's first province is mapped: a last end that every act was always seeking, an audit that cleared every created candidate including the noblest, a destination named with precision, the essence of God seen facially, enjoyed forever, dated mox for the purified, and a measurement that ought to frighten more than it does: no nature, yours or the seraph's, walks there on its own legs. The desire is the keyhole; the lifting is the gift; the participation begins now, in installments any wayfarer can taste. Thomas, who measured all of it, also wrote a prayer for exactly this situation: Concede mihi, the petition for a life wisely ordered to the end, the module's whole doctrine on its knees. The Oratorium will hand you his own words in time; the course hands you the next question now. Between a fixed destination and insufficient legs there is only one thing to ask for. The tradition calls it gratia, and the next module is the anatomy of the gift: what it is, what it heals, what it builds, and how a nature gets lifted without getting bypassed. The destination was never in doubt. The road begins.`,
      },
      questions: [
        {
          id: `t7-l5-q1`,
          type: "match_pair",
          stem: `Five images carried the module. Give each its doctrine.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the coffee cup, replayed upward"
              },
              {
                "id": "L2",
                "text": "the four prizes on the feed"
              },
              {
                "id": "L3",
                "text": "the eclipse and the wonder"
              },
              {
                "id": "L4",
                "text": "eyes awaiting the dawn"
              },
              {
                "id": "L5",
                "text": "the definition with the timestamp"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "finis ultimus: every chain of whys tops out, or nothing would be wanted"
              },
              {
                "id": "R2",
                "text": "bonum particulare: no finite good fills; possessed, then despised"
              },
              {
                "id": "R3",
                "text": "visio Dei: the mind rests only in the essence of the First Cause"
              },
              {
                "id": "R4",
                "text": "lumen gloriae: desire natural, lifting gratuitous"
              },
              {
                "id": "R5",
                "text": "mox post mortem: the purified see now, face to face, before the last day"
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
              "all_correct": "Five images, one ascent: the ladder of ends found its top, the audit cleared the field of pretenders, the wonder named the only resting place, the dawn was promised to eyes that could not make it, and the Church dated the sunrise: immediately, for the purified, forever. The Return's first province is mapped.",
              "partial_correct": "Walk the module in order: the chain that must end, the candidates that must fail, the vision that alone fills, the light that alone lifts, the definition that alone dates it. Each image was built for exactly one doctrine."
            }
          },
        },
        {
          id: `t7-l5-q2`,
          type: "mcq",
          stem: `The spine, in one sentence. Which holds the whole module?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Happiness is the well-ordered life: virtue now, and heaven as its continuation.",
                "feedback": "Half the audit undone in a relative clause. Virtue is the road's discipline and real participation begins here, but heaven as mere continuation flattens the two orders the module kept distinct: the vision is not more of the same life, better organized; it is another altitude, unreachable by continuation. The sentence promotes the sail to harbor again."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "All seek happiness; nothing created supplies it; God grants it in the vision of His essence, above every nature.",
                "feedback": "Respondeo: the whole Part's opening move in one breath: the last end sought in every act by every agent, the audit that disqualified each creature including the auditor's own soul, and the answer that stands: the essence seen, by a mind lifted to it, gratuitously. Aristotle carried the question as far as legs go; the Gospel answered what he asked. That is this course's deepest claim about itself, performed again in miniature."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Happiness is unattainable in principle: the module proved desire outruns every object.",
                "feedback": "It proved desire outruns every CREATED object, which is the opposite of unattainable in principle: it is the measurement that located the true object. Stop the argument one lesson early and you manufacture despair; the aperture argument was always aimed at the Sun. The module's news is not that the heart is bottomless. It is that something fills it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Happiness is God's own possession, lent to creatures in figure but never truly shared.",
                "feedback": "The definition itself contradicts the stinginess: the blessed SEE the essence and ENJOY it, truly, as their own act, forever. God's beatitude is essential and ours participated, but participation is not figure; it is the realest thing a creature ever does. The doctrine's scandal runs generous, not stingy: He shares the seeing of Himself."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t7-l5-q3`,
          type: "true_false_with_reason",
          stem: `Judge the sentence: "A real share of beatitude can be had in this life."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: an imperfect beatitude is possible now, in contemplation and virtue, a true participation of the end.",
                "feedback": "Respondeo: perfect happiness cannot be attained in this life, where the operation cannot be one and continual; but a PARTICIPATION of happiness can, first and principally in contemplation, secondarily in the active life's good order, and Aristotle is graded honestly: we call men happy, but only as men (q.3 a.2 ad 4; q.5 a.3). The now-and-not-yet without deferral: the wayfarer already tastes what the seer possesses. Every hour of prayer, every act of charity, every true thought is beatitude in installments, imperfect and real."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: for the well-planned life, this world's happiness is the full thing, and heaven a bonus.",
                "feedback": "The audit called and it wants its verdict back. No planning turns participated goods into the universal good; the fullest life on earth still runs on an operation interrupted by sleep, sickness, and the calendar. Real participation, yes, gloriously; the full thing, never here. The bonus-theory of heaven demotes the end to an appendix of the means."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: this life is a vale of tears, and calling any of it beatitude flatters exile.",
                "feedback": "Pious overcorrection, and the tradition declines it: the vale of tears is real and the participation is real IN it, which is precisely the mercy. Deny the installments and you make the faith describe a God who starves wayfarers as policy. The doctrine is more exact than the gloom: imperfect happiness now, by participation; perfect happiness there, by vision. Both halves are load-bearing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: happiness language belongs to heaven alone; here there is only duty.",
                "feedback": "Right concern for the two orders, wrong deletion of the bridge between them. If nothing here were happiness in any sense, the last end would rule this life only as a threat, and the module's first lesson showed it ruling every act from within, as the point of every step. Duty without participated joy is not orthodoxy; it is Kant with incense. Thomas is on the record for the installments."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t7-l5-q4`,
          type: "mcq",
          stem: `Every module ends by naming what cannot be surrendered. Two clauses from this one are non-negotiable. Which pair?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That imperfect happiness needs contemplation, and that the active life ranks second.",
                "feedback": "True house doctrine, and surrenderable in its details without a column falling: the contemplative primacy is argued, not defined, and the active life's saints are not second-class citizens of glory. The unsurrenderable pair sits beneath both lives, in what any life is FOR and how the FOR is reached."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That the essence of beatitude is in the intellect, and that delight follows in the will.",
                "feedback": "The house line, held at strength all module, and the module itself told you its rank: the Franciscan school holds the will's primacy inside the wall, uncondemned. A doctrine the course teaches WITH its own school-label attached is by that label not the unsurrenderable core. Guard the ranks; that discipline is half the wing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That no created good is man's last end, and that the vision of God is gratuitous, above every nature.",
                "feedback": "Respondeo: the two clauses everything else hangs from. Surrender the first and some creature is enthroned: the feed wins, or the Stoa, or the self. Surrender the second and the vision becomes nature's wage: Pelagius wins the summit, and the whole Part named De Gratia loses its subject before it starts. One clause guards the throne, the other guards the gift; between them stands everything this module defined, argued, and promised."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That the blessed see before the resurrection, and that their number is beyond counting.",
                "feedback": "The first is defined indeed, and rode along in the pair's shadow: it specifies WHEN the gratuitous vision begins, presupposing the deeper clause about gratuity itself. The second is nowhere defined at all; the elect's census is God's ledger. One true definition plus one pious unknown does not make the load-bearing pair."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t7-l5-q5`,
          type: "mcq",
          stem: `The airport gate, any Tuesday: the man flying to close the deal, the woman flying home to her mother, the student flying toward a life she cannot name yet. The module's last verdict on the crowd: what are they all doing?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Distracting themselves: most lives never engage the last end at all.",
                "feedback": "The doctrine will not permit the condescension: NO deliberate life fails to engage the last end, because engagement is what deliberate acting is. Distraction is a style of pursuit, not an exemption from it. The crowd is not asleep to the question; it is answering it all day, in the only handwriting acts have."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Seeking beatitude, every one, mostly at wrong addresses; sin itself is a misdirected homing.",
                "feedback": "Respondeo: those who sin turn from the thing wherein the last end really is, but not from the intention of the last end, which they seek mistakenly in other things (q.1 a.7 ad 1). The whole gate is flying home; some of the tickets are wrong. This is the doctrine that makes evangelization sane: you are never installing a desire, only re-addressing one, and the desire is your ally in every conversation. The Commentator has never met an atheist who wasn't seeking beatitude. Neither will you."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Expressing preferences: travel plans are tastes, and tastes have no address at all.",
                "feedback": "Taste-language is the audit refused at the door. The sweet is pleasant to every palate, and the wine-lover and the honey-lover are disagreeing about something, which is why they argue; preferences with no common object would generate no arguments, only inventories. The gate's crowd shares one destination under many labels. That is a fact about wills, not a poem."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Earning outcomes: each pursuit will be paid what it deserves, and that is the whole story.",
                "feedback": "A ledger where a homecoming should be. Deserts are real and a later module weighs them; but the frame of wages misses what the module found under every pursuit: not a claim to be paid but a hunger to be home. The story's engine is desire, not payroll. Read the crowd through the hunger and the Gospel makes sense; read it through payroll and grace never will."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t7-l5-q6`,
          type: "mcq",
          stem: `The Part's opening module closes with its own accounts unbalanced, deliberately. The destination: fixed, defined, dated. The legs: measured, and found infinitely short. What must the next module supply?`,
          latin_tag: `beatitudo perfecta`,
          doctrine_line: `All men seek beatitude in every act; no created good supplies it; it is the vision of the divine essence, gratuitous, above every nature, possessed by the purified immediately after death; a real participation begins now, and grace is the road.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Techniques: the disciplines of prayer and asceticism that condition the soul for flight.",
                "feedback": "The disciplines are real and the metaphor gives the game away: conditioning strengthens what nature already has, and the module measured nature's whole inventory as insufficient IN KIND. No regimen crosses an infinite gap; training for the vision by technique is the mountaineer's error with a prayer rope. What is needed is not a better use of the equipment. It is new equipment."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Certainty: the proof that I, individually, will arrive.",
                "feedback": "The wrong supply, and a door the tradition keeps closed on purpose; presumption is not provisions. What the wayfarer gets is better than a certificate: a road that actually reaches, hope with grounds, and means that really carry. The personal ledger stays sealed to keep both despair and presumption off the road. Ask for the road, not the manifest."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The road: grace, by which God heals and lifts a nature to walk to an end above it.",
                "feedback": "Respondeo: the destination is above every nature and the desire is native to yours: what remains is the gift that bridges, and the tradition's name for it is grace. The medicine image from the lesson holds the whole next module in seed: he is better disposed to health who can attain perfect health, albeit by means of medicine (q.5 a.5 ad 2). How that medicine works, what it heals, what it builds in the soul, and what it makes possible: next module. The destination was this module's gift. Grace is the road."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The map of the afterlife: purgatory, judgment, and the geography past the door.",
                "feedback": "The geography has its module, and it is the course's last, where the veils drop and the whole Return is walked in order. Between here and there stands everything that MOVES a wayfarer: the gift, the freedom it meets, the God-man who carries it, His Body, His table. The course does not skip to the map. It builds the road first, which is what the next Part of the walking is for."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    }
  ],
};
