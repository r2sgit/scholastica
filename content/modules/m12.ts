import type { ModuleMeta } from '../types';

export const m12: ModuleMeta = {
  id: 12,
  title: `Natural Law`,
  short: `Natural Law`,
  label: `Module 12 · Natural Law`,
  lessons: [
    {
      id: `m12-l1`,
      num: `I`,
      title: `Actus Humanus / Actus Hominis`,
      latin: `actus humanus · actus hominis`,
      tag: `actus humanus  ·  actus hominis`,
      fin: {
        tag: `actus humanus  ·  actus hominis`,
        heading: `The cut between what a man does and what happens to him.`,
        body: `Aquinas built half a moral theology on a single distinction: the deliberate act is yours; the reflex is not. Every later question in the module presupposes this one — what counts as a moral act in the first place.`,
      },
      questions: [
        {
          id: `m12-l1-q1`,
          type: "mcq",
          stem: `A man, falling asleep at his desk, knocks over a coffee cup. Another man, frustrated by a meeting, deliberately knocks over a coffee cup. Aquinas distinguishes <em>actus humanus</em> — a deliberate human act, willed through reason — from <em>actus hominis</em> — an act <em>of</em> a man, performed without deliberation (a reflex, a motion in sleep, an autonomic stir). Which is which?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The first is <span class="lat-inline">actus hominis</span>; the second is <span class="lat-inline">actus humanus</span>.`,
              correct: undefined,
              feedback: `Yes. The cut is between what a man <em>does</em> and what merely happens to him while he is occupied being a man. Sleep-knocked is <span class="lat-inline">actus hominis</span>; deliberately-knocked is <span class="lat-inline">actus humanus</span>. Only the deliberate one is morally evaluable — and the rest of the module is built on this single cut.`,
            },
            {
              id: `b`,
              text: `Both are equally <span class="lat-inline">actus humanus</span> — the cup is knocked over either way, so the moral consequence is identical.`,
              correct: undefined,
              feedback: `You have collapsed the act into its outcome. Aquinas's whole moral theology rests on the cut you just refused to make: an outcome is something that happens; an act is something a person <em>does</em>. The cup on the floor is a fact in either case. The morally evaluable thing is the <em>doing</em>, not the spill.`,
            },
            {
              id: `c`,
              text: `Both are <span class="lat-inline">actus hominis</span> — the first because the man was asleep, the second because frustration overrides the will.`,
              correct: undefined,
              feedback: `Frustration is a <em>circumstance</em>, not a defeat of voluntariness. People act under provocation all the time and remain responsible for what they then choose. The will moved by reason — even reason inflamed — is still the will. <span class="lat-inline">Actus humanus</span> requires deliberation, not tranquility.`,
            }
            ],
          },
        },
        {
          id: `m12-l1-q2`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE — every act performed by a human being is a <em>human act</em> in Aquinas's technical sense. Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "FALSE — a human act proceeds from deliberate will. A reflex is performed by a human but does not proceed from deliberation.",
                "feedback": "Right. <span class=\"lat-inline\">Actus humanus</span> is the deliberate act; <span class=\"lat-inline\">actus hominis</span> covers the rest — reflexes, autonomic processes, things that happen <em>through</em> a person rather than <em>from</em> him. The whole grammar of moral evaluation begins here."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE — because acts done in error are not properly human acts.",
                "feedback": "You have confused <em>deliberation</em> with <em>correctness</em>. A mistaken deliberate act is still a human act — it is just an erring one. Errors are evaluated, not exempted. Lesson 4 will sharpen this further; for now, hold deliberation and correctness apart.",
                "voice_check": false
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE — by definition, anything a human being does is a human act.",
                "feedback": "This is the trap of an English word doing two jobs. In ordinary English, \"human act\" means \"act done by a human.\" In Aquinas's technical sense, it means an act that proceeds from deliberate will. Reflexes, sleep-talking, sneezes — performed by humans, but not <span class=\"lat-inline\">actus humanus</span>."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "TRUE — because the body and the will are one in the human person.",
                "feedback": "The premise is half-right and the inference is wrong. The body and will are unified in the human person, but Aquinas's distinction operates <em>within</em> that unity: only the deliberate motions of the unified person count as human acts in the moral sense. The blink and the lie both belong to the same person; only one is evaluable."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l1-q3`,
          type: "distinction_application",
          stem: `Which of the following is <em>actus humanus</em> — a deliberate act fully attributable to the agent?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Reciting the rosary distractedly while driving.",
                "feedback": "Yes. The recitation was deliberately undertaken; distraction is a <em>circumstance</em>, not a defeater of voluntariness. The act is still <span class=\"lat-inline\">actus humanus</span> — just a poorly attended one. Don't let attention quality decide the category."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Breathing while asleep.",
                "feedback": "No deliberation possible. This is pure <span class=\"lat-inline\">actus hominis</span> — something the body does on the person's behalf, with no will involved. Reflexes and autonomic functions never make it onto the moral ledger."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Blinking when something flies toward the eye.",
                "feedback": "Reflex, not deliberation. The blink protects the eye before the will has a chance to weigh in — it is <span class=\"lat-inline\">actus hominis</span> through and through. The morally interesting question is what one does <em>after</em> the blink."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Raising one's hand in class because one was just called on.",
                "feedback": "This is the edge case the lesson is built to surface. Most students want to call it <span class=\"lat-inline\">actus humanus</span> because the agent moved his arm, but the operative question is whether deliberation, however brief, occurred. If the hand went up before any weighing — pure habituated response — it is closer to <span class=\"lat-inline\">actus hominis</span>. The point is not to memorize the verdict but to feel where the cut runs."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l1-q4`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Of actions done by man those alone are properly called &ldquo;human,&rdquo; which are proper to man as man. Now man differs from irrational animals in this, that he is master of his actions. Wherefore those actions alone are properly called human, of which man is master. Now man is master of his actions through his reason and will; whence, too, the free-will is defined as &ldquo;the faculty and will of reason.&rdquo; Therefore those actions are properly called human which proceed from a deliberate will.</p><div class="cr-cite">ST I-II q. 1 a. 1, <em>respondeo</em></div></div><br>Which of these statements best captures Aquinas's argument in the passage?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "An act is fully <em>human</em> only insofar as it proceeds from will, and the will is moved by reason's apprehension of the good.",
                "feedback": "Yes. Aquinas grounds the human in <em>mastery</em> — and mastery for him is reason-and-will operating together. Strip out the will and you have a reflex; strip out reason's grasp of the good and you have an appetite. The human act is the rare thing that has both."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "An act is fully human only when it produces a good outcome.",
                "feedback": "Outcome-based reasoning, smuggled in. Aquinas says nothing about outcomes here — he is naming what makes an act <em>human</em> in its species, before evaluation begins. A bad deliberate act is no less human than a good one. The cut runs through deliberation, not through results."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "An act is fully human only when the agent intends it consciously every moment.",
                "feedback": "Too strict. Aquinas's <span class=\"lat-inline\">deliberatio</span> does not require uninterrupted conscious attention; if it did, no habituated act could ever be human, and the moral life would be impossible. Deliberation is the originary act of will and reason — the act remains human even after attention drifts."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An act is human only when it is irrational — only when reason is not in control.",
                "feedback": "The opposite of Aquinas's position. He defines the human precisely by <em>mastery through reason</em>. The unreasoned act is closer to the brute's; the reasoned act is closer to the human's. The whole passage runs the other way from this answer."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l1-q5`,
          type: "mcq",
          stem: `A surgeon, mid-operation, reflexively flinches at a loud noise but completes the cut without harm. Which statement is true?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The flinch is <span class="lat-inline">actus hominis</span>; the completion of the cut is <span class="lat-inline">actus humanus</span>.`,
              correct: undefined,
              feedback: `Yes. The same person performs both, but only one of them passes through deliberation. The flinch is reflex; the completion is willed. A single moment can contain both kinds of motion — that is the precision the distinction buys you.`,
            },
            {
              id: `b`,
              text: `Both are <span class="lat-inline">actus humanus</span> because the surgeon is professionally responsible.`,
              correct: undefined,
              feedback: `You have substituted <em>responsibility</em> for <em>voluntariness</em>. They are related but not identical. A surgeon is professionally responsible for the conditions in which he operates, including reflexes; that does not make the reflex itself a deliberate act. The category test is voluntariness, not job title.`,
            },
            {
              id: `c`,
              text: `Both are <span class="lat-inline">actus hominis</span> because the surgeon was startled.`,
              correct: undefined,
              feedback: `Startle does not contaminate the surrounding deliberate acts. The cut continues to be willed even while a reflex passes through the body. Aquinas's whole point is that the categories nest — a person can be performing a human act and a non-human one at the same time.`,
            }
            ],
          },
        },
        {
          id: `m12-l1-q6`,
          type: "mcq",
          stem: `Which sentence uses <em>actus humanus</em> and <em>actus hominis</em> correctly?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Only acts proceeding from deliberate will are <span class="lat-inline">actus humanus</span>; the rest are <span class="lat-inline">actus hominis</span>.`,
              correct: undefined,
              feedback: `Right — and it is the cleanest one-sentence summary of Lesson 1. <span class="lat-inline">Actus humanus</span> is the deliberate act; <span class="lat-inline">actus hominis</span> is everything else a human body does. Hold this distinction and the rest of the module has a place to land.`,
            },
            {
              id: `b`,
              text: `<span class="lat-inline">Actus humanus</span> means a good act; <span class="lat-inline">actus hominis</span> means a bad act.`,
              correct: undefined,
              feedback: `You have confused <em>category</em> with <em>evaluation</em>. Both terms are pre-evaluative — they sort acts into morally evaluable and morally inert, before any verdict on goodness or badness. A bad deliberate act is still <span class="lat-inline">actus humanus</span>.`,
            },
            {
              id: `c`,
              text: `<span class="lat-inline">Actus humanus</span> means a public act; <span class="lat-inline">actus hominis</span> means a private one.`,
              correct: undefined,
              feedback: `The distinction has nothing to do with audience. A private deliberate act is <span class="lat-inline">actus humanus</span>; a public reflex is <span class="lat-inline">actus hominis</span>. The category turns on the will, not on who is watching.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m12-l2`,
      num: `II`,
      title: `The Three Sources of Morality`,
      latin: `fontes moralitatis`,
      tag: `fontes moralitatis`,
      fin: {
        tag: `fontes moralitatis`,
        heading: `Object, end, circumstance — and a single rule that governs all three.`,
        body: `An act is good when its object, its end, and its circumstances are all in order. <em>Bonum ex integra causa, malum ex quocumque defectu.</em> The next two lessons supply the faculties — synderesis and conscientia — that the three sources actually run through.`,
      },
      questions: [
        {
          id: `m12-l2-q1`,
          type: "mcq",
          stem: `A man steals to feed his family. The act of theft has which moral character, evaluated through the <em>fontes moralitatis</em>?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The end is good; the object — taking another's property — is bad. A good end cannot redeem an evil object.`,
              correct: undefined,
              feedback: `Yes. The three sources run independently and must all be in order. A good <span class="lat-inline">finis</span> cannot rescue an evil <span class="lat-inline">objectum</span>. (Grave necessity, where goods become common in the strict sense, is a separate question — flagged here, adjudicated elsewhere.)`,
            },
            {
              id: `b`,
              text: `The good end justifies the act — feeding the family is the morally decisive consideration.`,
              correct: undefined,
              feedback: `This is the consequentialist move, and the dominant modern intuition. Aquinas's tradition cuts directly against it: <span class="lat-inline">bonum ex integra causa, malum ex quocumque defectu</span>. The good must be whole; one good source does not redeem a bad one. The end matters, but it does not <em>dictate</em>.`,
            },
            {
              id: `c`,
              text: `The act is morally neutral, since hunger is a circumstance that excuses the agent.`,
              correct: undefined,
              feedback: `Hunger is indeed a circumstance, but "morally neutral" treats the object — taking another's property — as if it had no character of its own. The whole point of the <span class="lat-inline">fontes</span> is that the object has its own species independent of circumstances.`,
            }
            ],
          },
        },
        {
          id: `m12-l2-q2`,
          type: "distinction_application",
          stem: `For each scenario, which <em>fons moralitatis</em> is most decisively out of order? Pick the example whose <em>intentio finis</em> (the agent's intended end) is the source of disorder.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A man gives alms in order to be praised.",
                "feedback": "Yes. Object good, circumstances unremarkable, but the <span class=\"lat-inline\">finis operantis</span> — the agent's intended end — is vanity. The act is vitiated by the intention, not by what it visibly does. Almsgiving is the cleanest test of the intention axis precisely because the object is so obviously good."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A doctor performs a medically required surgery.",
                "feedback": "Object good, end good, circumstances ordinary. Nothing here is out of order on the standard reading. Look for the case where the intention itself spoils an otherwise good object."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A man lies to protect a friend's reputation.",
                "feedback": "The disorder here is in the <em>object</em>, not the end — lying is intrinsically bad regardless of intention. Good test of whether you can hold the axes apart, but the question asked specifically for an <span class=\"lat-inline\">intentio finis</span> failure."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A soldier kills in just war.",
                "feedback": "Object permissible (defense of just order), end good, circumstances determine proportionality. Nothing categorically disordered here. The question is asking for the case where <em>intention itself</em> spoils the act."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l2-q3`,
          type: "syllogism_builder",
          stem: `Construct the practical syllogism. Place each element in its correct role — universal premise, particular premise, conclusion-as-action.`,
          payload: {
            "instruction": "Each statement plays one role. Universal comes from <span class=\"lat-inline\">synderesis</span>; particular from perception and reason judging the case; conclusion is not a sentence but an act.",
            "components": [
              {
                "id": "c1",
                "text": "Goods of the body are to be preserved.",
                "role": "major"
              },
              {
                "id": "c2",
                "text": "This food is poison.",
                "role": "minor"
              },
              {
                "id": "c3",
                "text": "Don't eat this.",
                "role": "conclusion"
              }
            ],
            "feedback": {
              "correct": "Yes. The <span class=\"lat-inline\">synderesis</span> supplies the universal; perception and reason supply the particular; the practical intellect's <span class=\"lat-inline\">electio</span> is the conclusion — not a sentence, but an act. This is what makes practical reason <em>practical</em> rather than theoretical.",
              "incorrect": "Look at where each premise comes from. The universal premise is supplied by <span class=\"lat-inline\">synderesis</span> — it is the first principle applied to a domain. The particular comes from sensory cognition and reason's judgment of the case. And the conclusion is not a sentence at all — it is an action. The whole movement is <em>toward</em> doing, not <em>about</em> doing."
            },
            "doctrineTag": "syllogismus practicus"
          },
        },
        {
          id: `m12-l2-q4`,
          type: "dialogue_branch",
          stem: `A friend pushes back on the three sources. How do you answer?`,
          payload: {
            "commentatorLine": "Suppose someone says: <em>&ldquo;If theft feeds the hungry, the theft is good. The outcome is what matters morally.&rdquo;</em> How would you answer?",
            "branches": [
              {
                "id": "b1",
                "text": "Outcomes matter, but they are circumstances surrounding the act, not the object that defines it.",
                "verdict": "partial",
                "feedback": "Closer — but you have collapsed two different things. Outcomes are <em>downstream</em> of the act; circumstances <em>surround</em> it. They are not the same. Try again."
              },
              {
                "id": "b2",
                "text": "An evil object cannot be redeemed by a good outcome — three sources must all be in order, and a defect in any one spoils the whole.",
                "verdict": "correct",
                "feedback": "Yes. The tradition has a Latin axiom for exactly this asymmetry: <span class=\"lat-inline\">bonum ex integra causa, malum ex quocumque defectu</span> — the good comes from the <em>whole</em> cause; the bad from any defect at all. Three sources, each with its own claim — and a single rule governing all three. This is the axiom that does the work in every hard moral case ahead.",
                "doctrineTag": "bonum ex integra causa"
              },
              {
                "id": "b3",
                "text": "Outcomes are not part of moral evaluation — only the rule under which the act falls matters.",
                "verdict": "wrong",
                "feedback": "Now you have over-corrected. Circumstances <em>do</em> matter — they can aggravate, mitigate, and sometimes change the species of an act. They simply cannot rescue an evil object. The tradition holds the middle, not either extreme."
              }
            ]
          },
        },
        {
          id: `m12-l2-q5`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>&ldquo;A morally indifferent act is one whose object, end, and circumstances are all neutral.&rdquo;</em> Pick judgment <em>and</em> best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE in the abstract; in concrete particulars, no act is fully indifferent, because the agent always intends some end.",
                "feedback": "Right. Aquinas grants the abstract category and then qualifies it: <em>in concreto</em>, every actual human act has an intended end, and the end always carries some moral weight. The category survives in textbooks; the experience of it does not survive contact with reality."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE — and it follows that morally indifferent acts are common in everyday life.",
                "feedback": "The first half is right; the second half is the over-confident reading Aquinas explicitly resists. Indifferent acts are easy to imagine and rare to actually perform — because the moment a real agent acts, an actual end is intended, and the act picks up moral weight."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE — every act has a moral character, however small.",
                "feedback": "Strictly speaking, Aquinas grants the abstract category of indifferent acts. The qualification is that real, situated acts always involve an intended end, so the indifference rarely survives the move from logic to lived case. Your instinct is in the right direction; it just over-shoots."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE — circumstances always determine the act's moral character.",
                "feedback": "Circumstances are one source, not the master source. Object and end have their own claim, and an evil object is not rescued by neutral circumstances any more than by a good end. The whole point of the <span class=\"lat-inline\">fontes</span> is that all three matter — none of them dominates."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l2-q6`,
          type: "mcq",
          stem: `Which axiom captures the structure of moral evaluation according to the <em>fontes moralitatis</em>?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `<span class="lat-inline">Bonum ex integra causa</span> — Good comes from the whole cause; bad from any defect.`,
              correct: undefined,
              feedback: `Yes. The full axiom is <span class="lat-inline">bonum ex integra causa, malum ex quocumque defectu</span> — the most economical Latin sentence in the moral tradition. Three sources must all be in order for the act to be good; any one of them out of order is enough to make it bad. Asymmetric, demanding, and exact.`,
            },
            {
              id: `b`,
              text: `<span class="lat-inline">Bonum est diffusivum sui</span> — The good is self-diffusing.`,
              correct: undefined,
              feedback: `A real Thomistic axiom — but a metaphysical one, about the nature of goodness itself, not about how to evaluate a moral act. Easy to confuse the two when both have <em>bonum</em> in them. The axiom you want is the one that names the asymmetry between goodness and evil.`,
            },
            {
              id: `c`,
              text: `<span class="lat-inline">Agere sequitur esse</span> — Action follows being.`,
              correct: undefined,
              feedback: `Also a real axiom, also Thomistic, also not the one. <span class="lat-inline">Agere sequitur esse</span> grounds activity in nature; the moral evaluation axiom is downstream of it. The question is asking for the rule that <em>scores</em> the act.`,
            }
            ],
          },
        },
        {
          id: `m12-l2-q7`,
          type: "mcq",
          stem: `Match the three sources of morality to their Latin terms.`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Object → <span class="lat-inline">objectum</span>; end → <span class="lat-inline">finis</span>; circumstances → <span class="lat-inline">circumstantiae</span>.`,
              correct: undefined,
              feedback: `Yes. Three Latin terms, three sources, one rule governing all of them. With these in hand, you can name where any moral case is going wrong: it is one of three, and the diagnostic is exact.`,
            },
            {
              id: `b`,
              text: `Object → <span class="lat-inline">finis</span>; end → <span class="lat-inline">objectum</span>; circumstances → <span class="lat-inline">circumstantiae</span>.`,
              correct: undefined,
              feedback: `The first two are swapped. <span class="lat-inline">Objectum</span> is the act in its species — the <em>what</em>. <span class="lat-inline">Finis</span> is the agent's intended end — the <em>why</em>. Easy to confuse because both are foundational; the cure is to remember that <span class="lat-inline">objectum</span> is in the act itself, not in the agent's mind.`,
            },
            {
              id: `c`,
              text: `Object → <span class="lat-inline">circumstantiae</span>; end → <span class="lat-inline">finis</span>; object → <span class="lat-inline">objectum</span>.`,
              correct: undefined,
              feedback: `The mapping has scrambled the object into circumstances. The object is what the act <em>is</em> — not the conditions surrounding it. Hold these apart and the whole moral grammar holds together.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m12-l3`,
      num: `III`,
      title: `The Practical Syllogism and Synderesis`,
      latin: `synderesis · bonum est faciendum`,
      tag: `synderesis  ·  bonum est faciendum`,
      fin: {
        tag: `synderesis  ·  bonum est faciendum`,
        heading: `The first principle of practical reason — <em>per se nota</em>.`,
        body: `<em>Synderesis</em> is the natural habit by which practical reason grasps its first principles. The first principle is <em>bonum est faciendum et prosequendum, malum vitandum</em> — good is to be done and pursued; evil is to be avoided. Lesson 4 brings in the faculty that applies it.`,
      },
      questions: [
        {
          id: `m12-l3-q1`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Now a certain order is to be found in those things that are apprehended universally. For that which, before aught else, falls under apprehension, is &ldquo;being,&rdquo; the notion of which is included in all things whatsoever a man apprehends. Wherefore the first indemonstrable principle is that &ldquo;the same thing cannot be affirmed and denied at the same time,&rdquo; which is based on the notion of &ldquo;being&rdquo; and &ldquo;not-being&rdquo;: and on this principle all others are based. Now as &ldquo;being&rdquo; is the first thing that falls under the apprehension simply, so &ldquo;good&rdquo; is the first thing that falls under the apprehension of the practical reason, which is directed to action: since every agent acts for an end under the aspect of good. Consequently the first principle of practical reason is one founded on the notion of good, viz. that &ldquo;good is that which all things seek after.&rdquo; Hence this is the first precept of law, that &ldquo;good is to be done and pursued, and evil is to be avoided.&rdquo;</p><div class="cr-cite">ST I-II q. 94 a. 2, <em>respondeo</em></div></div><br>Which best captures the analogy Aquinas is drawing?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Practical reason has its own first self-evident principle, parallel to theoretical reason's principle of non-contradiction.",
                "feedback": "Yes. The Latin tags: <span class=\"lat-inline\">bonum est faciendum</span> for the first principle, <span class=\"lat-inline\">per se nota</span> for the kind of knowing it is. Aquinas builds practical reason in parallel to theoretical reason — same architectural move, different first object. Theoretical reason starts with <em>being</em>; practical reason starts with <em>good</em>. From those two roots the entire intellectual life unfolds."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Practical reason is just theoretical reason applied to action.",
                "feedback": "This is the tempting flattening Aquinas is explicitly resisting. If practical reason were merely theoretical reason aimed at conduct, its first principle would be the principle of non-contradiction. Aquinas is naming a <em>distinct</em> first principle precisely because practical reason is its own kind of reason, with its own starting point."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Aquinas is saying that the good is whatever each person prefers.",
                "feedback": "You have read &ldquo;good is that which all things seek after&rdquo; as a sociological observation about preferences. Aquinas is making an ontological claim: every agent that acts at all acts for the sake of <em>some</em> good, real or apparent. That is what makes practical reason possible — not what makes it subjective."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l3-q2`,
          type: "syllogism_builder",
          stem: `A young woman is at a stranger's door. She hears a child crying inside. She has no obligation to enter, but she does. Reconstruct the practical syllogism that ran through her mind in roughly the form Aquinas would render it.`,
          payload: {
            "instruction": "Three elements; three roles. Place each in its correct slot.",
            "components": [
              {
                "id": "c1",
                "text": "Help is to be given to those in distress when one is able.",
                "role": "major"
              },
              {
                "id": "c2",
                "text": "This child is in distress and I am able to help.",
                "role": "minor"
              },
              {
                "id": "c3",
                "text": "I help.",
                "role": "conclusion"
              }
            ],
            "feedback": {
              "correct": "Yes. The universal is supplied by <span class=\"lat-inline\">synderesis</span>; the particular is supplied by perception together with reason's judgment of the case; the conclusion is not a sentence but an act. Practical reason is reason whose conclusion is a deed.",
              "incorrect": "The universal is the <em>principle</em> — it does not refer to this case. The particular brings the principle into contact with the case. And the conclusion is the act — not a description of the act, but the doing itself. If you put a sentence where an act belongs, you have collapsed practical reason back into theoretical."
            },
            "doctrineTag": "ratio practica"
          },
        },
        {
          id: `m12-l3-q3`,
          type: "mcq",
          stem: `<em>Synderesis</em> is best described as…`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The natural habit of the practical intellect by which it grasps the first principles of natural law without learning them.`,
              correct: undefined,
              feedback: `Yes. The technical word is <span class="lat-inline">habitus</span> — not a feeling, not a faculty separate from intellect, not a list of rules, but a <em>habit</em> of the practical intellect, native to it, by which the first principles are held without ever having been taught. Lesson 4 will bring in the faculty that applies them.`,
            },
            {
              id: `b`,
              text: `The conscience — the inner judgment by which we know what is right in any particular case.`,
              correct: undefined,
              feedback: `The cleanest possible test, and the most common conflation. Modern "conscience" usually means what Aquinas calls <span class="lat-inline">conscientia</span> — the <em>application</em> of principles to particular cases. <span class="lat-inline">Synderesis</span> is the layer underneath: the principles themselves, held habitually. Different layers, different reliabilities.`,
            },
            {
              id: `c`,
              text: `An emotional sense of right and wrong, prior to deliberate reasoning.`,
              correct: undefined,
              feedback: `<span class="lat-inline">Synderesis</span> is intellectual, not affective. It belongs to the practical <em>intellect</em>, not to the passions. Sentiment is a different layer of the human person — sometimes aligned with synderesis, sometimes not. Don't put feeling where habit-of-intellect belongs.`,
            },
            {
              id: `d`,
              text: `A learned set of rules acquired through moral training and habituation.`,
              correct: undefined,
              feedback: `Aquinas is explicit: <span class="lat-inline">synderesis</span> grasps its principles <em>without learning them</em>. They are <span class="lat-inline">per se nota</span> — known through themselves, immediately. Moral training shapes <span class="lat-inline">conscientia</span>, the application; synderesis is the layer training presupposes.`,
            }
            ],
          },
        },
        {
          id: `m12-l3-q4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>Synderesis can err.</em> Pick judgment <em>and</em> best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "FALSE — synderesis grasps first principles infallibly; the application to particulars is what can err.",
                "feedback": "Right. The principles themselves are <span class=\"lat-inline\">per se nota</span> — known through themselves — and not the kind of thing that can be wrong; they are the standard against which wrongness is measured. The faculty that errs is <span class=\"lat-inline\">conscientia</span> — the faculty that <em>applies</em>. Hold the layers apart and most modern confusions about \"following your conscience\" dissolve."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE — everyone makes moral mistakes, so synderesis must err too.",
                "feedback": "You have moved from <em>everyone errs</em> (true) to <em>synderesis errs</em> (not true). Mistakes happen in application, not in the principles. The first principles are indestructible — what gets damaged, obscured, or misapplied is the working-out."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE — because moral errors are always voluntary.",
                "feedback": "Right judgment for the wrong reason. <span class=\"lat-inline\">Synderesis</span> does not err <em>because the principles themselves are infallible</em>, not because all errors are voluntary. (Many moral errors are not voluntary — invincible ignorance is real, and Lesson 4 will sharpen it.)"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "TRUE — different cultures hold different first principles.",
                "feedback": "Aquinas would say what differs across cultures is the <em>secondary</em> precepts and the application — not the primary precepts that <span class=\"lat-inline\">synderesis</span> holds. Lesson 6 will work this out in detail. For now: the first principles are stable; the conclusions drawn from them are contestable."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l3-q5`,
          type: "distinction_application",
          stem: `Which of the following is at the level of <em>synderesis</em> — pure first principle, not an application to a case?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "&ldquo;Good is to be done.&rdquo;",
                "feedback": "Yes. The bare first principle, applied to no particular case. <span class=\"lat-inline\">Bonum est faciendum</span> in its pure form. From here, every concrete moral judgment derives by way of <span class=\"lat-inline\">conscientia</span>."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "&ldquo;In this case, returning the wallet is the good.&rdquo;",
                "feedback": "This is a <span class=\"lat-inline\">conscientia</span> judgment — the principle applied to a particular case. The <em>this case</em> gives it away. <span class=\"lat-inline\">Synderesis</span> never names a case; it names the rule."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "&ldquo;I should not steal.&rdquo;",
                "feedback": "Closer than (b), but still a derivation — the bare first principle has been specified to a domain (property). Aquinas would call this a <em>near-first</em> precept; it sits between pure synderesis and full conscientia. Real, but not the unmodified first principle."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "&ldquo;My friend's secret should not be repeated to my mother.&rdquo;",
                "feedback": "Pure conscientia — the application of multiple principles (truth, friendship, prudence) to a particular relationship. Maximum specificity, maximum room for error. The faculty that produces this judgment is exactly the one that can mistake the case."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l3-q6`,
          type: "mcq",
          stem: `<em>Bonum est faciendum et prosequendum, malum vitandum</em> is best translated as…`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Good is to be done and pursued; evil is to be avoided.`,
              correct: undefined,
              feedback: `Yes. The first precept of practical reason. Note the asymmetry that the next module will exploit: good has two verbs (do <em>and</em> pursue); evil has one (avoid). The whole structure of moral action is in those three verbs.`,
            },
            {
              id: `b`,
              text: `What is good is what is useful; what is evil is what is harmful.`,
              correct: undefined,
              feedback: `You have substituted utility for goodness. Aquinas's first principle is not pragmatic — it is ontological. The good is what every agent acts for; utility is one species of good among others. Don't shrink the principle to its instrumentalist cousin.`,
            },
            {
              id: `c`,
              text: `Good is what feels right; evil is what feels wrong.`,
              correct: undefined,
              feedback: `The sentimentalist reduction. Aquinas's principle does not run through feeling; it runs through reason's apprehension of the good. Feeling can track the good (when well-formed) or miss it; the principle is independent of either case.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m12-l4`,
      num: `IV`,
      title: `Conscientia — the Binding Judgment`,
      latin: `conscientia`,
      tag: `conscientia`,
      fin: {
        tag: `conscientia`,
        heading: `An erring conscience binds — and there is a prior duty to form it.`,
        body: `Conscience is real and conscience is fallible. Aquinas holds the two together with a precision modern moral discourse has mostly lost. The duty to follow conscience is matched by the prior duty to <em>form</em> it rightly.`,
      },
      questions: [
        {
          id: `m12-l4-q1`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>And since the object of the will is that which is proposed by the reason, as stated above, from the very fact that a thing is proposed by the reason as being evil, the will by tending thereto becomes evil. And this is the case not only in indifferent matters, but also in those that are good or evil in themselves. For not only indifferent matters can receive the character of goodness or malice accidentally; but also that which is good, can receive the character of evil, or that which is evil, can receive the character of goodness, on account of the reason apprehending it as such. For instance, to refrain from fornication is good: yet the will does not tend to this good except in so far as it is proposed by the reason. If, therefore, the erring reason propose it as an evil, the will tends to it as to something evil. Consequently the will is evil, because it wills evil, not indeed that which is evil in itself, but that which is evil accidentally, through being apprehended as such by the reason. We must therefore conclude that, absolutely speaking, every will at variance with reason, whether right or erring, is always evil.</p><div class="cr-cite">ST I-II q. 19 a. 5, <em>respondeo</em></div></div><br>Which reading is closest to Aquinas's argument?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The will moves toward what reason presents as good; refusing this is acting against one's own reason.",
                "feedback": "Yes. The argument is structural: the will moves toward what reason presents as good. To move <em>against</em> one's own reason — even erring reason — is to be at variance with oneself. That is the formal disorder. Conscience binds because acting against it is acting against the only access to the good one has."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Aquinas is saying that doing wrong is fine if you didn't know it was wrong.",
                "feedback": "This is the relativist misread, and it is exactly what the passage rules out. Aquinas says the act remains evil if reason erred culpably — the question of <em>excuse</em> is a separate question (and Lesson 4 Q3 sharpens it). The article you just read is about why conscience <em>binds</em>, not about when ignorance excuses."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Aquinas is saying conscience is irrelevant if the act is objectively wrong.",
                "feedback": "The opposite over-correction. Aquinas's whole argument is that conscience <em>does</em> matter — the will at variance with conscience is evil, even when conscience errs. The objective wrongness of the act is one question; the subjective state of the will is another. Both real."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l4-q2`,
          type: "dialogue_branch",
          stem: `A friend invokes conscience as the end of the argument. How do you respond?`,
          payload: {
            "commentatorLine": "A friend says: <em>&ldquo;I follow my conscience and that is enough — no one can judge me.&rdquo;</em> How do you answer?",
            "branches": [
              {
                "id": "b1",
                "text": "You are right that conscience binds — but binding is only half the story. Conscience can err, and there is a duty to <em>form</em> it rightly.",
                "verdict": "correct",
                "feedback": "Now you have both halves. Conscience binds, even when it errs — and the agent has a prior duty to form it rightly so that it does not err. The Thomistic position holds the binding and the duty-to-form together; the modern reduction usually drops one.",
                "doctrineTag": "conscientia ligat"
              },
              {
                "id": "b2",
                "text": "Conscience does not really bind — people should be judged by external standards regardless of their inner judgment.",
                "verdict": "wrong",
                "feedback": "Too far in the other direction. Conscience does bind — even erring conscience, even the friend's. The Thomistic line is that <em>both</em> duties are real: follow conscience <em>and</em> form it. Surrender either half and you lose the position."
              },
              {
                "id": "b3",
                "text": "You are right — no one can judge another, since following one's own conscience is always sufficient.",
                "verdict": "wrong",
                "feedback": "That is what the friend wanted to hear, but the tradition does not say that. The duty to follow conscience does not abolish the duty to form it. A well-meaning erring conscience is still erring; the agent's good will does not change what is the case. Try again."
              }
            ]
          },
        },
        {
          id: `m12-l4-q3`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>&ldquo;A vincibly erroneous conscience excuses the agent from moral responsibility.&rdquo;</em> Pick judgment <em>and</em> best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "FALSE — an invincibly erroneous conscience excuses, but a vincibly erroneous one does not.",
                "feedback": "Right. Vincible / invincible is the cut. If the error could have been corrected with reasonable care, the agent owns the error and the resulting act. If it could not have been — given the agent's situation, capacities, and access — the error excuses. Two real categories, both demanded by the structure."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE — conscience is conscience.",
                "feedback": "Over-broad. \"Conscience is conscience\" sounds like a binding principle but actually erases the distinction Aquinas is making. Vincible and invincible erring consciences are both consciences and they bind the will differently. The error matters because <em>fault for the error</em> matters."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE — conscience never excuses.",
                "feedback": "Under-broad. Invincible ignorance does excuse — when an agent could not have known better, the error is not held against him. The Thomistic position is precise: vincible no, invincible yes. \"Never\" loses the precision that does the work."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "TRUE — a sincere conscience is enough.",
                "feedback": "&ldquo;Sincere&rdquo; is doing all the work, and Aquinas is suspicious of words that smuggle conclusions in. Sincerity does not entail invincibility — one can be sincerely wrong about something one had a duty to know. The exemption is keyed to <em>vincibility</em>, not to subjective sincerity."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l4-q4`,
          type: "distinction_application",
          stem: `Which scenario describes a <em>vincibly erroneous</em> conscience — one whose error is the agent's own fault?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "An adult who has never bothered to learn what theft means takes another's wallet.",
                "feedback": "Yes. The ignorance is culpable — there was both opportunity and obligation to learn. <em>Vincible</em> error: the agent could have corrected it with reasonable diligence, and did not. The conscience binds; the excuse does not."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A child raised without any moral instruction takes another's toy without grasping that taking is wrong.",
                "feedback": "Closer to <em>invincible</em>, depending on capacity. The child had no access to the formation that would correct the error; the error is not the child's fault. The shape of vincibility is opportunity-plus-obligation, and a young child has neither in the relevant sense."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A person who has investigated carefully concludes wrongly that a particular act is permitted.",
                "feedback": "<em>Invincibly</em> erroneous, if the investigation was sufficient and the error genuinely unavoidable. The agent did the work; the error survived. The category exists precisely for cases like this — careful, sincere, wrong, excused."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A person who has investigated carefully concludes correctly.",
                "feedback": "Not erroneous at all. A correct conscience is the third category — and the goal of the formation duty in the first place. The other three options test the shape of erring; this one tests whether you noticed which question was being asked."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l4-q5`,
          type: "mcq",
          stem: `Which axiom captures the relationship between <em>synderesis</em> and <em>conscientia</em>?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `<span class="lat-inline">Synderesis</span> grasps the first principles infallibly; <span class="lat-inline">conscientia</span> applies them to particulars and can err.`,
              correct: undefined,
              feedback: `Yes. Two layers, two reliabilities. The principles are the kind of thing that cannot be wrong; the application is the kind of thing that can. Most modern confusion about "conscience" comes from collapsing these layers into a single faculty.`,
            },
            {
              id: `b`,
              text: `<span class="lat-inline">Synderesis</span> and <span class="lat-inline">conscientia</span> are the same faculty under different names.`,
              correct: undefined,
              feedback: `Exactly the conflation Lessons 3 and 4 are built to undo. Different layers — different reliabilities. If they were the same, conscience could not err, and the whole question of formation would be incoherent. Hold them apart.`,
            },
            {
              id: `c`,
              text: `<span class="lat-inline">Conscientia</span> is feeling; <span class="lat-inline">synderesis</span> is reason.`,
              correct: undefined,
              feedback: `Both are reason — both belong to the practical intellect. Feeling is something else entirely. Don't smuggle the modern intuition that conscience is affective into a tradition that emphatically denies it.`,
            }
            ],
          },
        },
        {
          id: `m12-l4-q6`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>If then reason or conscience err with an error that is involuntary, either directly or through negligence, so that one errs about what one ought to know; then such an error of reason or conscience does not excuse the will, that abides by that erring reason or conscience, from being evil. But if the error arise from ignorance of some circumstance, and without any negligence, so that it cause the act to be involuntary, then that error of reason or conscience excuses the will, that abides by that erring reason, from being evil.</p><div class="cr-cite">ST I-II q. 19 a. 6, <em>respondeo</em></div></div><br>What is Aquinas's <em>qualified</em> answer?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Following conscience is necessary but not sufficient; there is also a duty to form it rightly.",
                "feedback": "Yes. The qualification is the whole position. Conscience binds always; conscience excuses only when the error was unavoidable. Negligent error does not excuse, because the agent had a prior obligation to know better. The duties run on two axes — follow it now, form it before now."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Following conscience is sufficient — sincere conscience always excuses.",
                "feedback": "The over-broad reading the article is explicitly ruling out. Aquinas's distinction between voluntary and involuntary error is precisely what blocks this conclusion. Sincere does not entail invincible; \"I really meant well\" is not the test."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Following conscience is irrelevant if the act is objectively wrong; only objective truth counts.",
                "feedback": "The opposite over-correction. Aquinas's whole article presupposes that conscience matters morally — the question is just <em>when</em> error excuses. \"Irrelevant\" loses the entire layered structure the lesson is teaching."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l4-q7`,
          type: "mcq",
          stem: `Which best captures the Thomistic position on conscience?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `An erring conscience binds; the duty to follow conscience does not abolish the prior duty to form conscience rightly.`,
              correct: undefined,
              feedback: `Yes. Both halves, held together. Modernity tends to keep the first half and drop the second; rigorism tends to keep the second and weaken the first. The Thomistic line holds both — and that is why it cuts in directions neither side expects.`,
            },
            {
              id: `b`,
              text: `Conscience is the final word — there is nothing prior or above it.`,
              correct: undefined,
              feedback: `The half-truth that has caused most modern damage. Conscience is the proximate norm of action; it is not the source of the norm. The duty to <em>form</em> conscience presupposes that there is something true about which conscience can be right or wrong. Drop that and conscience-language collapses into preference-language.`,
            },
            {
              id: `c`,
              text: `Conscience matters less than the rule book.`,
              correct: undefined,
              feedback: `The other half-truth, in the other direction. Aquinas says the will at variance with even erring reason is evil — that is, conscience genuinely binds, even when it conflicts with the rule. The position is not "rule beats conscience" any more than "conscience beats rule." Both real, both binding, both with their own duties attached.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m12-l5`,
      num: `V`,
      title: `The Fourfold Law`,
      latin: `lex aeterna · naturalis · humana · divina positiva`,
      tag: `lex aeterna  ·  naturalis  ·  humana  ·  divina positiva`,
      fin: {
        tag: `lex aeterna  ·  naturalis  ·  humana  ·  divina positiva`,
        heading: `Four laws — nested, not competing.`,
        body: `Eternal, natural, human, divine. Natural law is the rational creature’s participation in the eternal; human law is the determination of natural law for the common good; divine positive law reaches beyond what natural reason can disclose.`,
      },
      questions: [
        {
          id: `m12-l5-q1`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>As stated above, a law is imposed on others by way of a rule and measure. Now a rule or measure is imposed by being applied to those who are to be ruled and measured by it. Wherefore, in order that a law obtain the binding force which is proper to a law, it must needs be applied to the men who have to be ruled by it. Such application is made by its being notified to them by promulgation. Wherefore promulgation is necessary for the law to obtain its force.</p><p>Thus from the four preceding articles, the definition of law may be gathered; and it is nothing else than an ordinance of reason for the common good, made by him who has care of the community, and promulgated.</p><div class="cr-cite">ST I-II q. 90 a. 4, <em>respondeo</em></div></div><br>Aquinas's definition of law gathers four elements. Which of these is <em>not</em> one of them?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "An effective enforcement mechanism — the power to compel obedience.",
                "feedback": "Yes — enforcement is what <em>modern</em> legal positivism puts at the heart of law: the command of a sovereign, backed by the threat of sanction. Aquinas's definition has four elements and that is not one of them: <span class=\"lat-inline\">rationis ordinatio</span> (an ordering by reason), <span class=\"lat-inline\">ad bonum commune</span> (for the common good), <span class=\"lat-inline\">ab eo qui curam communitatis habet</span> (by him who has care of the community), and <span class=\"lat-inline\">promulgata</span> (promulgated). Coercion can attach to a law; it does not constitute one."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "An ordinance of reason — directed by reason, not by mere will.",
                "feedback": "You named one of the four. <span class=\"lat-inline\">Rationis ordinatio</span> — law belongs to reason, not to the legislator's appetite. The article one back (q. 90 a. 1) is precisely this point. The question was for the feature that is <em>not</em> in the definition."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Ordered to the common good — not to the private benefit of the lawmaker.",
                "feedback": "Also one of the four. <span class=\"lat-inline\">Ad bonum commune</span> is what distinguishes a law from a private command. A king who legislates for his own pleasure is not legislating; he is dictating. The question was for the feature <em>missing</em> from the definition."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Promulgated — made known to those it is meant to bind.",
                "feedback": "Also one of the four. <span class=\"lat-inline\">Promulgata</span> is the element the passage spends the most time on: a rule no one can know cannot bind anyone. The question was for the feature that does <em>not</em> appear in Aquinas's definition."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l5-q2`,
          type: "match_pair",
          stem: `Four kinds of law in Aquinas. Match each kind to its definition.`,
          payload: {
            "instruction": "Each kind is defined in ST I-II q. 91. The third — human positive law — operates as a <span class=\"lat-inline\">determinatio</span>: a particular ruling by competent authority that specifies how a general principle of natural law applies in a concrete community.",
            "left": [
              {
                "id": "L1",
                "text": "Eternal law"
              },
              {
                "id": "L2",
                "text": "Natural law"
              },
              {
                "id": "L3",
                "text": "Human positive law"
              },
              {
                "id": "L4",
                "text": "Divine positive law"
              }
            ],
            "right": [
              {
                "id": "R1",
                "text": "The plan of divine wisdom directing all created things to their proper ends."
              },
              {
                "id": "R2",
                "text": "The rational creature's participation in the eternal law, knowable by reason from within human nature."
              },
              {
                "id": "R3",
                "text": "A determination by competent authority that specifies how a principle of natural law applies in a particular community for the common good."
              },
              {
                "id": "R4",
                "text": "Law revealed by God to direct human beings to a supernatural end natural reason cannot disclose."
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
              "correct": "Yes — and notice the structure. The four laws are not parallel; they are <em>nested</em>. <span class=\"lat-inline\">Lex aeterna</span> is the outermost — God's plan for creation. <span class=\"lat-inline\">Lex naturalis</span> is the rational creature's reading of that plan from within human nature. <span class=\"lat-inline\">Lex humana</span> is a <span class=\"lat-inline\">determinatio</span> — a particular ruling that gives flesh to a natural-law principle in a concrete community (the natural-law principle <em>do no harm</em> becomes a determinate speed limit). <span class=\"lat-inline\">Lex divina positiva</span> enters from outside — revelation, reaching what natural reason alone cannot, because the human end is supernatural. The Thomistic political philosophy stands or falls on this nesting.",
              "incorrect": "The four laws nest, they do not compete. Pull the outermost first: <span class=\"lat-inline\">lex aeterna</span> is the divine plan, and everything else is downstream of it. Then natural law (the rational creature reading that plan from inside human nature). Then human law (a <span class=\"lat-inline\">determinatio</span> that specifies natural law for a particular community). Then divine positive law (what reason alone cannot reach). Outside-in — each subsequent kind is defined by its position in the structure."
            }
          },
        },
        {
          id: `m12-l5-q3`,
          type: "distinction_application",
          stem: `Each of these statements operates in the register of one of the four laws — sometimes more than one. <em>(i)</em> &ldquo;Goods of the body should be preserved.&rdquo; <em>(ii)</em> &ldquo;Speed limits in school zones are 25 mph.&rdquo; <em>(iii)</em> &ldquo;Honor your father and mother.&rdquo; <em>(iv)</em> &ldquo;God's plan directs all things to their proper ends.&rdquo; Which assignment is correct?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "(i) natural; (ii) human positive; (iii) natural <em>and</em> divine positive; (iv) eternal.",
                "feedback": "Yes — across the board, including the half-step on (iii). The Decalogue's commandment to honor parents inscribes what natural reason already grasps about filial piety; the precept lives in <em>both</em> registers, and the categories overlap rather than carve cleanly. (i) is the natural-law way the bodily-goods principle shows up in practical reason — the rational creature reading the eternal law from inside its own nature. (ii) is a <span class=\"lat-inline\">determinatio</span>: a particular community's ruling that specifies the natural-law principle <em>do no harm</em> in a concrete case. (iv) is the plan-as-it-stands-in-God, before any creature has read it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "(i) natural; (ii) human positive; (iii) divine positive; (iv) eternal.",
                "feedback": "Almost. The miss is on (iii) — you assigned <em>Honor your father and mother</em> to divine positive law alone. But this is the precept Aquinas uses to show that the four laws <em>nest</em>: the Decalogue inscribes what natural reason can already grasp about filial piety. The same precept lives in two registers. The categories overlap; they do not carve up."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "(i) eternal; (ii) human positive; (iii) divine positive; (iv) eternal.",
                "feedback": "You assigned (i) to eternal law because the principle sounds plan-like — and the eternal law <em>is</em> the divine plan. But the cut between eternal and natural is whether the plan stands <em>in God</em> (eternal) or has been <em>read by a rational creature from within its own nature</em> (natural). &ldquo;Goods of the body should be preserved&rdquo; is the second: it is how a creature's practical reason reads the plan on bodies."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "(i) natural; (ii) natural; (iii) divine positive; (iv) eternal.",
                "feedback": "You assigned (ii) to natural law — but speed limits are not natural law. Speed limits are a <span class=\"lat-inline\">determinatio</span>: a particular community's ruling that specifies how a natural-law principle (<em>do no harm to others</em>) applies in a concrete case. The principle is natural law; the 25-mph specification is human positive. Collapsing the two would mean treating every traffic ordinance as written into the structure of practical reason itself."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l5-q4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>&ldquo;A human law contrary to the natural law binds in conscience.&rdquo;</em> Pick judgment <em>and</em> best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "FALSE — an unjust law fails as law and does not bind in conscience as such, though prudence may counsel obedience.",
                "feedback": "Yes — and notice that the Thomistic position has <em>both</em> halves. <em>Half one:</em> an unjust law (one contrary to the natural law) is a <span class=\"lat-inline\">corruptio legis</span> — a corruption of law — and lacks the binding force proper to law as such. <em>Half two:</em> prudence may still counsel obedience in a particular case (to avoid scandal, to preserve the common good, to keep some order in place of none). The bind in the first half is metaphysical; the counsel in the second is prudential. Positivism keeps neither half cleanly. The Thomistic line keeps both."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE — law is law. Human authority is competent to bind, and conscience must follow its lawful command regardless of content.",
                "feedback": "The positivist line — and the one Aquinas explicitly rejects. A law that is unjust does not have the binding force proper to law; Aquinas can use the word <em>law</em> for an unjust ordinance only in a degraded sense (<span class=\"lat-inline\">corruptio legis</span>). A conscience that simply submits to such a command has confused authority with force."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE — and therefore one is free to disregard any law one personally judges to be unjust.",
                "feedback": "You have over-corrected. The unjust law does not bind in conscience as such, but it does not follow that one is <em>free</em> to disregard any law one personally judges unjust. Prudence may counsel obedience in a particular case (to preserve the common good, to avoid scandal). The non-binding character of the unjust law is metaphysical; the right way to act in particular cases is still a prudential question."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE — and one is bound in conscience to actively resist any law contrary to natural law.",
                "feedback": "Over-corrected in the other direction. An unjust law does not bind in conscience, but it does not follow that one is bound to <em>actively resist</em>. Aquinas distinguishes the duty to refuse positive cooperation with evil from the duty (or even permission) to actively oppose. The first is broad; the second is governed by prudence about means and consequences."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l5-q5`,
          type: "mcq",
          stem: `Why must there be a <span class="lat-inline">lex divina positiva</span> in addition to the natural law?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Because human beings are ordered to a supernatural end (the beatific vision) that natural reason cannot disclose.`,
              correct: undefined,
              feedback: `Yes. Natural law is <em>adequate</em> for natural ends — the rational creature, knowing its own nature, can grasp by reason alone what perfects it within that nature. But Aquinas holds that the human end is not bounded by nature: human beings are ordered, by grace, to the <span class="lat-inline">visio beatifica</span> — the direct vision of God in His essence. That end exceeds what reason can reach. Hence revelation, and hence <span class="lat-inline">lex divina positiva</span> as the law that directs human beings toward an end natural reason cannot see.`,
            },
            {
              id: `b`,
              text: `Because the natural law is too vague to settle particular moral cases without further specification.`,
              correct: undefined,
              feedback: `Aquinas would say the natural law is in fact adequate for the ends to which natural reason is ordered. Vagueness in particular cases is <em>also</em> a feature of natural law — but it is not what divine positive law fixes. The reason for divine positive law is not that natural law fails on its own terms; it is that the human end goes beyond natural law's terms entirely.`,
            },
            {
              id: `c`,
              text: `Because the natural law has been corrupted by sin and cannot be relied upon for sure guidance.`,
              correct: undefined,
              feedback: `Aquinas grants that the secondary precepts of natural law can be obscured by passion, evil custom, or corrupt habit (q. 94 a. 6). But the primary precepts are indelible — they cannot be erased. So sin's effect on practical reason is real but partial, and that is not the reason for divine positive law. The reason is the gap between natural and supernatural ends, not the corruption of natural reason.`,
            },
            {
              id: `d`,
              text: `Because divine positive law issues clear commands; natural law gives only general inclinations.`,
              correct: undefined,
              feedback: `The contrast between command and inclination is real but it is not the right axis. Natural law itself contains both inclinations <em>and</em> precepts (the precepts are derived from the inclinations). Divine positive law is not necessary because natural law lacks <em>commands</em>; it is necessary because human beings are ordered to a supernatural end that natural law's commands and inclinations alike cannot reach.`,
            }
            ],
          },
        },
        {
          id: `m12-l5-q6`,
          type: "mcq",
          stem: `Which axiom best captures the relationship between <em>natural</em> law and <em>eternal</em> law?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `<span class="lat-inline">Lex naturalis nihil aliud est quam participatio legis aeternae in rationali creatura</span> — Natural law is nothing other than the rational creature's participation in the eternal.`,
              correct: undefined,
              feedback: `Yes — and notice the Latin: <span class="lat-inline">nihil aliud quam</span>, &lsquo;nothing other than.&rsquo; Aquinas is not saying natural law <em>resembles</em> eternal law, or <em>derives from</em> it. Natural law simply <em>is</em> the rational creature's participation in eternal law — the eternal law as the rational creature reads it from within its own nature. Lose this, and the four laws lose their nesting; hold this, and Module 12's Thomistic political philosophy stands.`,
            },
            {
              id: `b`,
              text: `<span class="lat-inline">Lex est rationis ordinatio ad bonum commune</span> — Law is an ordering of reason directed to the common good of the community.`,
              correct: undefined,
              feedback: `This is the definition of law in general (q. 90 a. 4 — the passage L5 Q1 read in close). One of the great Thomistic sentences, but not what the question asked. The relation between <em>natural</em> and <em>eternal</em> law is named in a different axiom — one that turns on the word <span class="lat-inline">participatio</span>.`,
            },
            {
              id: `c`,
              text: `<span class="lat-inline">Bonum faciendum, malum vitandum</span> — Good is to be done and pursued; evil is to be avoided.`,
              correct: undefined,
              feedback: `This is the first principle of practical reason — what <span class="lat-inline">synderesis</span> grasps, per Lesson 3. Foundational, but not what the question asked. The relation between natural and eternal law is named in an axiom that uses <span class="lat-inline">participatio</span>.`,
            },
            {
              id: `d`,
              text: `<span class="lat-inline">Gratia non tollit naturam sed perficit</span> — Grace does not destroy human nature, but raises and perfects it from within.`,
              correct: undefined,
              feedback: `A real and beloved Thomistic axiom, and one that matters to the architecture of the four laws (it is what makes <span class="lat-inline">lex divina positiva</span> intelligible alongside the natural law). But it speaks to the relation of grace and nature, not natural law and eternal law. The axiom you want uses <span class="lat-inline">participatio</span>.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m12-l6`,
      num: `VI`,
      title: `Natural Law in Detail`,
      latin: `prima principia · praecepta secundaria`,
      tag: `prima principia  ·  praecepta secundaria`,
      fin: {
        tag: `prima principia  ·  praecepta secundaria`,
        heading: `Three orders of inclination; primary precepts indelible; secondary precepts obscurable.`,
        body: `Natural law is structured: orders of inclination, primary precepts, secondary precepts. The structure does the work the modern reduction tries to skip.`,
      },
      questions: [
        {
          id: `m12-l6-q1`,
          type: "distinction_application",
          stem: `Aquinas distinguishes <em>three orders of natural inclination</em> in ST I-II q. 94 a. 2: <em>first</em>, what we share with all substances (e.g., self-preservation); <em>second</em>, what we share with other animals (e.g., procreation, care of offspring); <em>third</em>, what is proper to rational creatures (e.g., seeking truth, living in political community). For each, identify which order it belongs to: <em>(i)</em> preserving one's own life; <em>(ii)</em> raising children; <em>(iii)</em> seeking truth about God; <em>(iv)</em> living in political society.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "(i) first; (ii) second; (iii) third; (iv) third (political community is proper to rational creatures).",
                "feedback": "Yes — including the cut on (iv). Aquinas treats <em>political</em> society as belonging to the third order, not the second. Animals live in aggregations; only rational creatures live in <span class=\"lat-inline\">communitas</span> proper — a community ordered to a common good through speech, deliberation, and shared law. The first-order inclination preserves your existence as a substance; the second-order inclinations are what you share with other animate substances; the third-order inclinations express what is <em>proper to you as a rational creature</em>, including the political dimension. Confuse the second and third orders here and the rest of Aristotelian-Thomistic political philosophy goes with it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "(i) first; (ii) second; (iii) third; (iv) second (animals also live in groups).",
                "feedback": "You assigned (iv) to the second order because animals also live in groups — and that is the most common error here. But the cut Aquinas makes is between <em>aggregation</em> and <em>political community</em>. Bees swarm; wolves form packs; herring school. None of these is a <span class=\"lat-inline\">communitas</span> ordered to a common good through speech, deliberation, and shared law. Political society is the third-order inclination because it is the social form proper to <em>rational</em> nature."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "(i) first; (ii) second; (iii) second; (iv) second (everything social belongs together).",
                "feedback": "You collapsed (iii) and (iv) into the second order — but seeking truth about God and living in political society are the two paradigm cases of <em>third-order</em> inclinations in q. 94 a. 2. Aquinas is precise about this: the rational creature has inclinations animals do not — to know what is true (especially about God) and to live in a community ordered by reason, not by instinct."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "(i) first; (ii) third (raising children requires reason); (iii) third; (iv) third.",
                "feedback": "You moved (ii) to the third order because raising children requires reason. Aquinas would grant the point but place the inclination differently: the <em>inclination</em> to raise offspring is what humans share with other animals (second order); what is <em>proper</em> to rational creatures is the <em>way</em> children are raised — through deliberation, instruction, formation. The order classifies the inclination's source, not the method of its execution."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l6-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>As stated above, to the natural law belongs those things to which a man is inclined naturally: and among these it is proper to man to be inclined to act according to reason. Now the process of reason is from the common to the proper. The practical reason, on the other hand, is busied with contingent matters, about which human actions are concerned: and consequently, although there is necessity in the general principles, the more we descend to matters of detail, the more frequently we encounter defects. Accordingly then in speculative matters truth is the same in all men, both as to principles and as to conclusions. But in matters of action, truth or practical rectitude is not the same for all, as to matters of detail, but only as to the general principles: and where there is the same rectitude in matters of detail, it is not equally known to all.</p><p>It is therefore evident that, as regards the general principles whether of speculative or of practical reason, truth or rectitude is the same for all, and is equally known by all. But as to the proper conclusions of the practical reason, neither is the truth or rectitude the same for all, nor, where it is the same, is it equally known by all.</p><p>Consequently we must say that the natural law, as to general principles, is the same for all, both as to rectitude and as to knowledge. But as to certain matters of detail, which are conclusions, as it were, of those general principles, it is the same for all in the majority of cases, both as to rectitude and as to knowledge; and yet in some few cases it may fail, both as to rectitude, by reason of certain obstacles, and as to knowledge, since in some the reason is perverted by passion, or evil habit, or an evil disposition of nature; thus formerly, theft, although it is expressly contrary to the natural law, was not considered wrong among the Germans, as Julius Caesar relates.</p><div class="cr-cite">ST I-II q. 94 a. 4, <em>respondeo</em></div></div><br>What is Aquinas's <em>qualified</em> answer to whether the natural law is the same in all?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The natural law is the same in all in its <em>primary principles</em>; secondary precepts can fail in particular cases through passion, evil custom, or corrupt habit.",
                "feedback": "Yes — the qualified answer that holds the whole article together. <em>Primary principles</em> (the foundational moral judgments — &lsquo;do good and avoid evil,&rsquo; &lsquo;do not kill the innocent,&rsquo; &lsquo;preserve life&rsquo;) are <span class=\"lat-inline\">per se nota</span>: known immediately, the same for all, indelible. <em>Secondary precepts</em> (the conclusions drawn from primary principles in particular conditions) can fail in two ways — <em>as to rectitude</em> (the conclusion is wrong because some obstacle deflects practical reason) and <em>as to knowledge</em> (the conclusion is right but not equally known). Aquinas's example: theft was not considered wrong among the Germans, even though it is contrary to the natural law. The example is precisely calibrated — not to relativize the natural law, but to show how its secondary precepts can be obscured by passion, evil habit, or corrupt custom."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The natural law is the same in all without qualification — anyone can know it perfectly through unaided reason.",
                "feedback": "This is the over-reading the article is built to refuse. Aquinas's whole argument is that the natural law's <em>secondary</em> precepts — its conclusions — can fail to be known. He cites the Germans' approval of theft as an example. To say the natural law is the same in all without qualification is to skip the article's distinction between primary and secondary, and to claim more for natural reason than the tradition does."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The natural law varies by culture; different peoples genuinely have different first principles of practical reason.",
                "feedback": "The under-reading — the historicist drift. Aquinas grants that secondary precepts can be obscured in particular cultures, but he is firm that <em>primary</em> principles are the same in all and equally known by all. The variation across cultures is real, but it is variation <em>within a structure that is itself the same</em>. Lose the structure and Aquinas is doing comparative anthropology, not natural-law theory."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The natural law is the same in all; the differences observed across cultures concern only its enforcement, not its rectitude.",
                "feedback": "You located the variation on the wrong axis. Aquinas does not say the natural law is uniformly known and only its enforcement varies. He says the variation is in <em>knowledge of the secondary precepts themselves</em> — &lsquo;in some the reason is perverted by passion, or evil habit, or an evil disposition of nature.&rsquo; This is variation in moral cognition, not in moral implementation."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l6-q3`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>&ldquo;The natural law can change.&rdquo;</em> Pick judgment <em>and</em> best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "FALSE in its primary precepts; conditionally TRUE only in additions made by divine positive law, never in subtractions from the core.",
                "feedback": "Yes — and the qualification matters. Aquinas's actual answer: the natural law cannot be subtracted from in its primary precepts, which are <span class=\"lat-inline\">indelebilia</span>. It <em>can</em> be added to — chiefly by divine positive law, which directs human beings to a supernatural end natural reason cannot reach (the move L5 Q5 named). And in its <em>secondary</em> precepts, individual cases can fail to be known, as q. 94 a. 4 just showed. So the answer is FALSE on what most people mean by &lsquo;change&rsquo; (the core principles vary), and qualifiedly TRUE on what addition <em>by grace</em> means. Both halves keep the architecture intact."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE — the natural law is eternal and admits of no qualification or exception whatsoever.",
                "feedback": "You stripped the qualifications. Aquinas does not say the natural law admits of no qualification — he distinguishes primary from secondary precepts and grants that secondary precepts can be obscured. He also grants that natural law can be <em>added to</em> by divine positive law (the move that makes <span class=\"lat-inline\">lex divina positiva</span> intelligible alongside the natural law). The over-strict reading flattens the architecture the lesson is teaching."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE — moral standards evolve as cultures and circumstances change; the natural law evolves with them.",
                "feedback": "The historicist drift Aquinas explicitly resists. He grants real variation in <em>secondary</em> precepts across cultures (the Germans' approval of theft is his own example), but the <em>primary</em> principles are <span class=\"lat-inline\">per se nota</span>: indelible, the same for all. To say the natural law evolves with culture is to surrender the structure that makes natural-law reasoning possible at all."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE — both primary and secondary precepts are equally fixed, and any apparent variation is mere error in particular agents.",
                "feedback": "You collapsed the distinction between primary and secondary — the very thing q. 94 a. 4 spent its argument distinguishing. Primary precepts are fixed and equally known by all; secondary precepts are derived and can fail in particular cases. The variation Aquinas grants is real but precise: it lives at the secondary level, and even there is failure of knowledge or rectitude in the agent, not change in the law itself."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l6-q4`,
          type: "dialogue_branch",
          stem: `A friend pulls you into a coffee-shop argument. How do you answer?`,
          payload: {
            "commentatorLine": "Suppose he says: <em>&ldquo;&lsquo;Natural law&rsquo; is just a fancy phrase for empirical regularity. If most humans do X, then X is natural for humans. The natural law is whatever shows up in the species' behavior most of the time.&rdquo;</em> How do you answer?",
            "branches": [
              {
                "id": "b1",
                "text": "Category error. You've turned <em>natural</em> from a normative term into a descriptive one. The natural law is about what flows from human nature as ordered to its end — not what humans actually do.",
                "verdict": "correct",
                "feedback": "Yes — the descriptive/normative cut is exactly the move. <em>Natural</em> in &lsquo;natural law&rsquo; does not mean &lsquo;statistically common.&rsquo; It means <em>flowing from the rational creature's nature as ordered to its end</em>. The first is a question for sociology; the second is a question for practical reason. Most humans lie sometimes; that does not make lying part of the natural law. The natural law is a <em>plan</em>, not a poll. (Hume's is-ought is the modern form of the same warning: you cannot derive an <em>ought</em> from a list of <em>is</em>. The Thomistic tradition had been making the distinction for centuries; Hume just gave it a slogan.)",
                "doctrineTag": "natura ut ordinata ad finem"
              },
              {
                "id": "b2",
                "text": "Yes — natural law just describes what humans tend to do. The species' typical behavior is the moral baseline.",
                "verdict": "wrong",
                "feedback": "You have collapsed practical reason into sociology — and the whole point of <span class=\"lat-inline\">lex</span> is that it gives a <em>plan</em>, not a poll. If natural law just summarized what humans usually do, then any prevailing pattern (cruelty, infidelity, whatever happens to be common in a given era) would automatically be natural law. The Thomistic tradition is firm: natural law tracks what is <em>good for the rational creature given its nature and end</em>, not what the creature happens to do most often. The Germans approving of theft is q. 94 a. 4's canonical case where prevailing custom and natural law come apart."
              },
              {
                "id": "b3",
                "text": "Natural law has nothing to do with what's natural in any empirical sense — it's purely a matter of pure reason, independent of human nature.",
                "verdict": "wrong",
                "feedback": "Over-corrected — and you have lost the <em>natural</em> in natural law. Aquinas grounds the natural law in <em>real, existing human nature</em>: rational, embodied, social, ordered to specific goods. The natural law is not a Kantian scheme floating above the human; it is what flourishing for <em>this</em> kind of creature looks like, given <em>this</em> nature and <em>this</em> end. The friend's mistake was to confuse &lsquo;flourishing&rsquo; with &lsquo;frequently observed.&rsquo; The over-correction's mistake is to throw out the &lsquo;flourishing&rsquo; with the &lsquo;frequently observed.&rsquo;"
              }
            ]
          },
        },
        {
          id: `m12-l6-q5`,
          type: "mcq",
          stem: `Why are some <em>secondary</em> precepts of the natural law obscured in this or that culture, while the <em>primary</em> precepts are not?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Primary precepts are immediately self-evident; secondary precepts are derived and can be obscured by passion or evil custom.`,
              correct: undefined,
              feedback: `Yes. Primary precepts are <span class="lat-inline">per se nota</span> — &lsquo;known through themselves,&rsquo; immediately self-evident, the same in every rational creature. They are the kind of judgment that does not depend on argument: &lsquo;do good and avoid evil,&rsquo; &lsquo;do not kill the innocent,&rsquo; &lsquo;preserve life.&rsquo; <em>Secondary</em> precepts are conclusions <em>drawn from</em> primary precepts in particular conditions — and the drawing can go wrong. Aquinas names three obstacles: passion, evil custom, corrupt habit. Each represents a real way practical reason can be deflected from the conclusion that follows from a primary principle. The structure is what makes natural-law reasoning possible: a fixed core plus a derivable but obscurable surface.`,
            },
            {
              id: `b`,
              text: `Because some cultures are morally inferior to others; their practical reason is dimmer than ours.`,
              correct: undefined,
              feedback: `You got the fact right and the reason wrong. <em>Yes,</em> different cultures have different track records on secondary precepts — that is what q. 94 a. 4 is examining (the Germans on theft is the canonical example). But the explanation is not that some cultures are inferior; it is that secondary precepts depend on derivation, and derivation can be deflected by passion, evil custom, or corrupt habit — in any culture, including yours. The Thomistic answer is structural, not invidious.`,
            },
            {
              id: `c`,
              text: `Because the natural law itself varies — different cultures have genuinely different natural laws.`,
              correct: undefined,
              feedback: `This is the position q. 94 a. 4 was written to refuse. The natural law itself does not vary — its primary principles are <span class="lat-inline">per se nota</span> and the same in all. What varies is whether secondary precepts are correctly drawn from those principles in this or that culture. Lose the distinction between primary and secondary and the article's whole structure collapses.`,
            },
            {
              id: `d`,
              text: `Because secondary precepts depend on contingent facts about a culture's environment and material conditions, not on practical reason.`,
              correct: undefined,
              feedback: `The contingent-facts angle is not what's doing the work here. Aquinas is clear that the obscuring of secondary precepts comes from <em>defects in practical reason</em> (&lsquo;the reason is perverted by passion, or evil habit, or an evil disposition of nature&rsquo;) — not from environmental contingency. The Germans were not approving theft because their climate was unusual; they were approving it because their custom had deflected practical reason from a derivable conclusion.`,
            }
            ],
          },
        },
        {
          id: `m12-l6-q6`,
          type: "mcq",
          stem: `Which best captures the structure of the natural law as Aquinas develops it in ST I-II q. 94?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Three orders of inclination, primary precepts indelible, secondary precepts derived and obscurable in particular cases.`,
              correct: undefined,
              feedback: `Yes — and that is the whole architecture of q. 94. Three orders of <em>inclination</em> (first, second, third) supply the matter of natural law. <em>Primary precepts</em> follow immediately and are <span class="lat-inline">per se nota</span>: indelible, the same in all, equally known. <em>Secondary precepts</em> are derived in particular conditions; they can fail in particular cases, both as to rectitude and as to knowledge. Hold the three layers — inclination, primary, secondary — together, and you have the apparatus needed to do natural-law reasoning. Drop any layer and the whole goes flat.`,
            },
            {
              id: `b`,
              text: `A list of moral rules common to all human cultures, knowable by reason.`,
              correct: undefined,
              feedback: `This treats the natural law as a register of moral rules. The structure Aquinas develops is richer — not a list, but a <em>derivation</em> from inclinations to first principles to derived conclusions, with the derivation governed by reason. The list-view loses the way primary precepts are <span class="lat-inline">per se nota</span> while secondary precepts can fail in particular cases.`,
            },
            {
              id: `c`,
              text: `A set of axioms from which all moral conclusions can be deduced with certainty.`,
              correct: undefined,
              feedback: `Aquinas does not claim that all moral conclusions can be deduced from natural-law axioms with certainty — exactly the opposite. He says the further we descend from primary principles to particular cases, the more frequently we encounter defects. Practical reason works on contingent matters; it cannot achieve the deductive certainty of speculative reasoning. The over-rationalist reading turns Aquinas into a system the article was written to deny.`,
            },
            {
              id: `d`,
              text: `Three orders of inclination — first, second, and third — without further internal structure.`,
              correct: undefined,
              feedback: `You named the three orders but stopped before the rest of the structure. Each order of inclination gives rise to <em>primary precepts</em> (the immediate practical judgment) and <em>secondary precepts</em> (the conclusions drawn from primary precepts in particular conditions). Without that further articulation, the three orders are inert. Q. 94 a. 4 spends most of its energy on what happens at the secondary-precept level — that is where the article's qualifications live.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m12-l7`,
      num: `VII`,
      title: `Capstone — A Hard Case`,
      latin: `Distinguo`,
      tag: `Distinguo`,
      fin: {
        tag: `Distinguo`,
        heading: `Module 12 complete.`,
        body: `You can now take a hard moral case and unpack it through the <em>fontes moralitatis</em>, <em>synderesis</em>/<em>conscientia</em>, the practical syllogism, and the fourfold law — without confusing the object with the intention.`,
      },
      questions: [
        {
          id: `m12-l7-q1`,
          type: "distinction_application",
          stem: `A doctor faces this case: a terminally ill patient, in significant pain, repeatedly asks for a lethal dose. The doctor refuses. Which Module 12 distinctions are doing the moral work in the doctor's refusal?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The cut between <span class=\"lat-inline\">finis operis</span> (intentional killing — intrinsically evil) and <span class=\"lat-inline\">finis operantis</span> (mercy — the agent's intention), plus the natural-law precept against killing the innocent, applied through <span class=\"lat-inline\">conscientia</span>.",
                "feedback": "Yes — three distinctions are doing the work, and naming them is what L7 is about. <em>Object vs. intention</em>: <span class=\"lat-inline\">finis operis</span> is the act in its species (intentional killing of an innocent — intrinsically evil); <span class=\"lat-inline\">finis operantis</span> is the agent's intention (the desire to relieve suffering). The cut between them prevents the case from being adjudicated by intention alone. <em>Natural law</em>: the precept against intentional killing of the innocent is a primary precept of the second order of inclination, refined into a moral conclusion. <em>Synderesis / conscientia</em>: <span class=\"lat-inline\">synderesis</span> grasps the precept; <span class=\"lat-inline\">conscientia</span> applies it to the case before the doctor. Three layers, all earning their keep. The rest of L7 will work each one separately."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The <span class=\"lat-inline\">circumstantia</span> of severe suffering is doing the work — when suffering is intense enough, it changes the species of the act from killing to mercy.",
                "feedback": "This is the move L7 Q4 is built to refuse. <span class=\"lat-inline\">Circumstantiae</span> can aggravate the act, mitigate it, or sometimes specify it (a theft of a sacred object becomes a sacrilege). What circumstances <em>cannot</em> do is change an intrinsically evil object into a good one — that would put the consequentialist drift exactly where Aquinas refuses to put it. Suffering is real and morally weighty; it does not redeem the act of intentionally killing the innocent."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Simply: killing is wrong. The rule against intentional killing settles the case.",
                "feedback": "You stated the conclusion without the work. &lsquo;Killing is wrong&rsquo; is true but does not engage the case. The patient is suffering; the doctor's intention is mercy; circumstances are unusually heavy. The Thomistic answer holds the rule <em>and</em> shows <em>why</em> the rule still holds even with all that pulling against it — through the cut between <span class=\"lat-inline\">finis operis</span> and <span class=\"lat-inline\">finis operantis</span>, applied through <span class=\"lat-inline\">conscientia</span>. The slogan is not wrong; it is just unfinished."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The doctor's <span class=\"lat-inline\">finis operantis</span> (his good intention to preserve the integrity of medicine) is what determines the moral character of an act.",
                "feedback": "You located the work in <span class=\"lat-inline\">finis operantis</span> alone — which inverts the Thomistic position. The agent's intention is one of the three sources of morality (per L2's <span class=\"lat-inline\">fontes moralitatis</span>), but it is not the master source. The object has its own claim, and an evil object cannot be rescued by a good intention any more than by good circumstances. <span class=\"lat-inline\">Bonum ex integra causa</span> — the good act requires goodness on every axis."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l7-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>An individual man may be considered in two ways: first, in himself; secondly, in relation to something else. If we consider a man in himself, it is unlawful to kill any man, since in every man though he be sinful, we ought to love the nature which God has made, and which is destroyed by slaying him. Nevertheless, as stated above, the slaying of a sinner becomes lawful in relation to the common good, which is corrupted by sin. On the other hand the life of righteous men preserves and forwards the common good, since they are the chief part of the community. Therefore it is in no way lawful to slay the innocent.</p><div class="cr-cite">ST II-II q. 64 a. 6, <em>respondeo</em></div></div><br>What is the load-bearing claim in the final sentence — &lsquo;Therefore it is in no way lawful to slay the innocent&rsquo;?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It is unlawful on <em>both</em> axes — in himself (we love the nature God has made) and in relation to the common good (the innocent are its chief part).",
                "feedback": "Yes — and notice how Aquinas does <em>not</em> hedge. The article's argument runs on two axes simultaneously. <em>In himself</em>: every man, even a sinner, has a nature God made and we are bound to love; killing destroys that nature. <em>In relation to the common good</em>: the slaying of a sinner can become lawful in defense of the community against grave harm (Aquinas's broader argument across q. 64), but the innocent are precisely the <em>part</em> the community most needs. Both axes refuse the killing of the innocent. The &lsquo;in no way&rsquo; is not rhetorical; it is the convergence of both considerations on the same conclusion. This is the article L7 Q1 invoked when it named the natural-law precept against intentional killing of the innocent."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It is unlawful only when considered in relation to the common good — the in-himself axis is preliminary.",
                "feedback": "You located the work on one axis. Aquinas's <em>in himself</em> consideration is not preliminary — it is the first ground of the argument: &lsquo;we ought to love the nature which God has made.&rsquo; The common-good axis adds a second consideration that converges on the same conclusion. The article's structure is <em>both</em>, not one beneath the other."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The 'in no way' is rhetorical emphasis; Aquinas allows exceptions in extreme circumstances.",
                "feedback": "&lsquo;In no way&rsquo; is not rhetorical emphasis — it is the conclusion of an argument that runs on two distinct axes and finds them both refusing the killing of the innocent. Aquinas allows exceptions for the slaying of <em>sinners</em> in defense of the common good (q. 64 a. 2); he allows none for the innocent, on either axis. Reading the &lsquo;in no way&rsquo; as decorative softens an article that was written to be hard."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The rule applies because the innocent have not committed the sin that would make their slaying lawful in relation to the common good.",
                "feedback": "You located one axis (the in-relation-to-common-good axis) and missed the other. The article's first ground is that <em>in himself</em>, no man — sinful or not — may be killed, because we ought to love the nature God has made. The slaying of a sinner becomes lawful only because of the common-good consideration; the slaying of the innocent is unlawful on <em>both</em> grounds. Your option is half right, but missing the other half of the article."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l7-q3`,
          type: "syllogism_builder",
          stem: `Construct the practical syllogism the doctor's <span class="lat-inline">synderesis</span> and <span class="lat-inline">conscientia</span> run together in the lethal-dose case.`,
          payload: {
            "instruction": "Each statement plays one role. The universal comes from <span class=\"lat-inline\">synderesis</span> (a first principle of natural law applied to the domain of human life). The particular comes from <span class=\"lat-inline\">conscientia</span> judging the case. The conclusion is not a sentence — it is the act.",
            "components": [
              {
                "id": "c1",
                "text": "Innocent human life is not to be intentionally taken.",
                "role": "major"
              },
              {
                "id": "c2",
                "text": "This patient is innocent human life, and administering this dose would intentionally take it.",
                "role": "minor"
              },
              {
                "id": "c3",
                "text": "I do not administer this dose.",
                "role": "conclusion"
              }
            ],
            "feedback": {
              "correct": "Yes. <span class=\"lat-inline\">Synderesis</span> supplies the universal — the precept against intentional killing of the innocent, ready at hand from the natural law. <span class=\"lat-inline\">Conscientia</span> supplies the particular — the application of that precept to <em>this</em> patient, <em>this</em> dose, <em>this</em> case. And the conclusion is not a sentence; it is the act of refusing. <span class=\"lat-inline\">Electio</span> closes the syllogism, not a written line. Practical reason does not theorize about the case — it acts.",
              "incorrect": "Look at where each premise comes from. The <em>universal</em> is supplied by <span class=\"lat-inline\">synderesis</span> — the first principle of practical reason applied to the domain of human life (the precept against intentional killing of the innocent). The <em>particular</em> comes from <span class=\"lat-inline\">conscientia</span> applying that universal to <em>this</em> patient, <em>this</em> dose. The conclusion is not a sentence at all; it is the act of refusing. The whole movement runs <em>toward</em> doing, not <em>about</em> doing."
            },
            "doctrineTag": "synderesis et conscientia"
          },
        },
        {
          id: `m12-l7-q4`,
          type: "dialogue_branch",
          stem: `A friend, reading over your shoulder, presses you with the hardest version of the question. How do you answer?`,
          payload: {
            "commentatorLine": "He says: <em>&ldquo;If every other consideration is pointing toward mercy — the patient asking, the suffering real, the family exhausted — surely the</em> circumstance <em>of suffering can change the nature of the act itself.&rdquo;</em> He is not wrong to feel the weight of mercy. He may be wrong about where it bears. How do you answer?",
            "branches": [
              {
                "id": "b1",
                "text": "Circumstances can aggravate, mitigate, or sometimes specify the act — but they cannot turn an intrinsically evil object into a good one. The mercy is real. It just bears on a different axis.",
                "verdict": "correct",
                "feedback": "Yes — you have kept compassion and the moral structure together, which is the whole difficulty of this case. <span class=\"lat-inline\">Bonum ex integra causa, malum ex quocumque defectu.</span> The good act requires goodness on every axis — object, intention, circumstances. The evil object cannot be rescued by however many of the other axes line up. The mercy is real, and it matters — it bears on how the doctor is <em>present</em> to this patient: pain management, accompaniment, refusing to abandon him to die alone. Mercy doing its proper work, on the axis where it actually moves.",
                "doctrineTag": "bonum ex integra causa"
              },
              {
                "id": "b2",
                "text": "Mercy is the deepest of the considerations. When the suffering is severe enough, it outweighs the rule against intentional killing.",
                "verdict": "wrong",
                "feedback": "The instinct here is not foolish — mercy is among the most beautiful things the moral life is asked to bear, and the friend who reaches for it is reaching toward something real. But notice what the move just did: it gave one of the <em>circumstances</em> (the severity of suffering) the power to overturn the <em>object</em> of the act (intentional killing of an innocent). That is the consequentialist drift dressed in compassionate language — and it is a drift the tradition has watched several generations of well-meaning people walk straight into. The Thomistic answer keeps the mercy and refuses the move. The mercy belongs in <em>how</em> the doctor accompanies this patient — not in whether he ends his life."
              },
              {
                "id": "b3",
                "text": "Suffering is a feeling. Feelings cannot bear on moral evaluation. The act is the act.",
                "verdict": "wrong",
                "feedback": "Now the texture has gone out of it — and the tradition would not recognize this either. Suffering is not a feeling to be waved off; it is one of the <span class=\"lat-inline\">circumstantiae</span>, and it genuinely bears on the moral evaluation. It can aggravate culpability or mitigate it, can specify the act, and shapes prudence about what to <em>do</em> alongside the refusal. What suffering cannot do is rescue an intrinsically evil object. The friar who refuses the lethal dose does not refuse compassion — he refuses to confuse killing with mercy. Hold the suffering inside the case, not outside it."
              }
            ]
          },
        },
        {
          id: `m12-l7-q5`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>&ldquo;In a case where conscience genuinely judges X to be obligatory and X is in fact intrinsically evil, the agent is fully exonerated by following conscience.&rdquo;</em> Pick judgment <em>and</em> best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "FALSE — culpability turns on whether the error was <em>invincible</em>. An invincibly erroneous conscience can excuse <em>subjective</em> culpability, but the act's objective character is unchanged.",
                "feedback": "Yes — and the qualification matters. The Thomistic position has two halves. <em>Half one:</em> conscience genuinely binds — the agent who refuses what conscience judges obligatory acts contrary to right reason (Lesson 4 settled this). <em>Half two:</em> if the conscience is in error, the agent's culpability for the resulting act depends on whether the error was <em>invincible</em> (could not have been overcome despite reasonable effort to form conscience well) or <em>vincible</em> (the error was the agent's fault). An invincibly erroneous conscience excuses <em>subjective</em> culpability; the act remains <em>objectively</em> wrong (an intrinsically evil object cannot become good through any state of the agent's conscience). Hold both halves and the position is precise. Drop either and it collapses into one error or its opposite."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE — sincere conscience exonerates fully. The agent who genuinely judged the act obligatory bears no moral responsibility for it.",
                "feedback": "You collapsed the act's object into the agent's intention. An intrinsically evil act remains intrinsically evil regardless of how sincerely the agent believed it obligatory. What sincere conscience can do is excuse <em>subjective</em> culpability — and only when the conscience's error was <em>invincible</em> (not when the agent simply failed to form conscience rightly). The agent and the act are scored on different axes."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE — conscience never excuses an objectively evil act; the agent is always fully culpable regardless of error.",
                "feedback": "You got the headline right and lost the distinction the lesson is teaching. Conscience does not always fully excuse the agent — but it does not always leave the agent fully culpable either. The cut is <em>vincibility</em>: an invincibly erroneous conscience excuses subjective culpability; a vincibly erroneous one does not. Without that distinction, the answer reduces to rigorism."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "TRUE — Lesson 4 said conscience binds; therefore following conscience always satisfies the agent's moral duty.",
                "feedback": "You drew a faulty inference from a true premise. <em>Yes</em>, conscience binds — but binding the agent to act in accordance with conscience is not the same as exonerating the agent for the act. The duty to <em>follow</em> conscience is matched by the prior duty to <em>form</em> it rightly (the position L4 Q7 named). When conscience errs through the agent's neglect to form it, the duty to follow it does not insulate the agent from culpability."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l7-q6`,
          type: "distinction_application",
          stem: `In the doctor's reasoning — which holds that intentional killing of an innocent is wrong even with mercy as motive — which kind of law is doing the most work?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Eternal law — the doctor is reading off <span class=\"lat-inline\">lex aeterna</span>, God's plan directing all created things to their ends.",
                "feedback": "You skipped the rational creature's reading. The eternal law is God's plan as it stands <em>in God</em>; what the doctor is using is <em>natural</em> law — the rational creature's participation in the eternal plan, as read from within human nature (per L5 Q6's axiom). The eternal law is the source; natural law is the channel through which the doctor's reasoning runs."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Natural law — the precept against intentional killing of the innocent, applied through <span class=\"lat-inline\">conscientia</span>.",
                "feedback": "Yes. The precept against intentional killing of the innocent is a <em>primary</em> precept of the natural law — derived from the second order of natural inclination (the preservation of life, refined into a moral conclusion about taking innocent life). <span class=\"lat-inline\">Synderesis</span> grasps it; <span class=\"lat-inline\">conscientia</span> applies it to this case. Divine positive law <em>reinforces</em> it (the Decalogue's <span class=\"lat-inline\">Non occides</span> inscribes what natural reason already knows — the move L5 Q3 caught), and human positive law <em>determines</em> it (specific homicide statutes specify the natural-law principle). But the load-bearing register is natural law — which is why the doctor's reasoning would still hold even for someone outside the Decalogue's revelatory frame."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Human positive law — the legal prohibition against homicide, binding because the law of the land says so.",
                "feedback": "Human positive law — homicide statutes — does prohibit the killing, and that prohibition is real. But the prohibition is <em>downstream</em> of the natural-law principle: human positive law is a <span class=\"lat-inline\">determinatio</span> of the natural-law principle against killing the innocent. If the underlying natural-law principle were absent, no human statute could install it; if the human statute disappeared tomorrow, the natural-law principle would still bind. Confusing the two would mean treating the killing as wrong only because it is illegal."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Divine positive law — the Decalogue's <span class=\"lat-inline\">Non occides</span>, &lsquo;Thou shalt not kill,&rsquo; is what closes the case.",
                "feedback": "The Decalogue is doing reinforcing work, not foundational work. <span class=\"lat-inline\">Non occides</span> inscribes what natural reason already grasps — the doctor's reasoning would hold for someone with no access to the Decalogue at all, because the precept against intentional killing of the innocent is reachable by practical reason from human nature (the natural-law route). Divine positive law deepens and secures it; it does not originate it."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m12-l7-q7`,
          type: "mcq",
          stem: `After Module 12, you can now do which of the following that you could not do before?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Unpack a hard moral case through <span class="lat-inline">fontes moralitatis</span>, <span class="lat-inline">conscientia</span>, the practical syllogism, and the fourfold law.`,
              correct: undefined,
              feedback: `Yes. <span class="lat-inline">Distinguo</span> — the whole tradition's defense against bad reasoning, in one Latin verb. After Module 12 you can take a hard moral case and run it through the actual apparatus: <span class="lat-inline">fontes moralitatis</span> (object, intention, circumstances) holds the act apart from its outcomes; <span class="lat-inline">synderesis</span>/<span class="lat-inline">conscientia</span> holds the principles apart from their applications; the practical syllogism holds the universal apart from the particular and the conclusion (which is an act); the fourfold law holds the registers apart so the right kind of reason can do the right kind of work. None of this is ornamental. Every hard moral question — yours, your children's, the polity's — runs on rails this module just laid down. Use them carefully.`,
            },
            {
              id: `b`,
              text: `Settle any case by intuition alone — Module 12 has trained the <span class="lat-inline">habitus</span> sufficiently.`,
              correct: undefined,
              feedback: `You skipped the apparatus. Module 12 trained intuition only insofar as it trained <em>distinction-making</em> — and distinctions are not intuitions; they are precise tools for cases where intuition alone would slip. The Thomistic answer to a hard case is not &lsquo;trust your gut&rsquo; but <span class="lat-inline">distinguo</span>: separate object from intention, circumstance from object, principle from application. The apparatus is the gain.`,
            },
            {
              id: `c`,
              text: `Apply a single Thomistic algorithm and derive the correct answer in any case.`,
              correct: undefined,
              feedback: `There is no single Thomistic algorithm. The apparatus is <em>plural</em> — several distinct distinctions, each addressing a different axis. The skill the module teaches is recognizing <em>which</em> distinction does the work in a given case (object/intention here, primary/secondary precept there, four laws elsewhere). The hard case asks &lsquo;which question is being asked,&rsquo; and the apparatus answers it case by case, not by formula.`,
            },
            {
              id: `d`,
              text: `Apply <span class="lat-inline">lex</span> mechanically without weighing object, intention, or circumstance.`,
              correct: undefined,
              feedback: `This loses everything Module 12 was built to add. The doctor's case turned precisely on <em>not</em> applying <span class="lat-inline">lex</span> mechanically — on holding object, intention, and circumstance distinct so each could do its proper work. Mechanical rule-following is the deformation of natural-law reasoning, not its product.`,
            }
            ],
          },
        }
      ],
    }
  ],
};
