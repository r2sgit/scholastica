import type { ModuleMeta } from '../types';

export const m1: ModuleMeta = {
  id: 1,
  title: `Act and Potency`,
  short: `Act and Potency`,
  label: `Module 1 · Act and Potency`,
  latin: `Actus et Potentia`,
  aim: `Every finite being is composed of act (the positive, determining, perfecting principle) and potency (the real capacity to receive or be limited by act). God alone is Pure Act, with no composition. The act/potency distinction is the master key: every other distinction in the system is a species of it.`,
  lessons: [
    {
      id: `m1-l1`,
      num: `I`,
      title: `The Two Poles`,
      latin: `actus  ·  potentia`,
      tag: `actus  ·  potentia`,
      fin: {
        tag: `actus  ·  potentia`,
        heading: `Every finite thing is stretched between two poles. Neither is nothing.`,
        body: `<em>Actus</em> and <em>potentia</em> are not a metaphor. They are the two real principles of which every creature is composed. Aristotle discovered the grammar; Aquinas sharpened it until it could carry the weight of creation itself.`,
      },
      questions: [
        {
          id: `m1-l1-q1`,
          type: "mcq",
          stem: `A sculptor stands before an untouched block of marble. What does the marble already possess, in relation to the statue it might become?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing at all, until the sculptor begins to carve.",
                "feedback": "The marble has genuine readiness before the sculptor touches it. That readiness is built into what marble is. The name for it is <span class=\"lat\">potentia</span>: a real ontological principle, not an emptiness waiting to be filled."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A real capacity to receive the form of a statue.",
                "feedback": "Respondeo: a real capacity, not a mere absence. The marble genuinely can become a statue, and that <em>can</em> is <span class=\"lat\">potentia</span>: a real principle ordered toward act."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The actual form of the statue, simply hidden inside the stone.",
                "feedback": "That is the Michelangelo myth, not the Thomistic account. The form is not hiding inside; it does not exist yet. What the marble has is a real capacity to receive the form. That capacity is <span class=\"lat\">potentia</span>."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A capacity that exists only in the sculptor's mind, projected onto the stone.",
                "feedback": "The capacity is in the marble, not in the mind. A different block of granite or a cloud of smoke could not become this statue, no matter what the sculptor imagines. Real <span class=\"lat\">potentia</span> is in the thing itself."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m1-l1-q2`,
          type: "mcq",
          stem: `The sculptor finishes. The marble is fully shaped, the form realized. What principle does the realized form represent?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Actus</span>: the perfection fully realized in the matter.",
                "feedback": "Respondeo: <span class=\"lat\">actus</span> is always the positive, determining, perfecting principle. The form as realized is act. The marble that received it was potency. This is the master pair."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Potentia</span>: the marble's capacity to be shaped further.",
                "feedback": "<span class=\"lat\">Potentia</span> remains in the statue (it could be re-carved or destroyed), but it is not what the question points at. The realized form, the positive determination now actually present, is <span class=\"lat\">actus</span>."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Materia</span>: the underlying matter that has taken on a new shape.",
                "feedback": "<span class=\"lat\">Materia</span> is the receptive material substrate, the marble as capable of receiving form. The completed form is not the matter. It is what the matter received, namely <span class=\"lat\">actus</span>."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Compositio</span>: the union of matter and form in the finished statue.",
                "feedback": "<span class=\"lat\">Compositio</span> names the union of two principles, not one of them by itself. The realized form is one of the principles in the composition: it is the <span class=\"lat\">actus</span> that the matter received."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m1-l1-q3`,
          type: "mcq",
          stem: `Maria can read Greek. Right now she is asleep. Did her ability to read Greek vanish when she fell asleep?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes. An ability exists only while it is being exercised; sleep erases it until morning.",
                "feedback": "Then every pianist would lose the piano nightly and relearn it at breakfast. Something real persists through the sleep. Hold on to that something."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It does not vanish, but it weakens: capacities fade the moment they stop being used.",
                "feedback": "Capacities can fade over years of neglect, but that is a different fact. Tonight, asleep, her Greek is exactly as real as it was at dinner. Unused is not diminished."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No. The ability remains fully real while she sleeps; it is simply not being used.",
                "feedback": "Respondeo: fully real, completely unused. A capacity can be present without being exercised. You have just felt the distinction this whole module runs on."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The question is confused: sleeping people have no abilities, only memories of past performances.",
                "feedback": "A memory of reading Greek would not let her read a new sentence tomorrow. Her ability does. What she carries through the night is more than a record; it is a readiness."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m1-l1-q4`,
          type: "distinction_application",
          stem: `Maria again, awake this time but holding a closed book. She has the unexercised capacity to read Greek. How does her case sit on the act/potency grid?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Pure act, since the person actually exists and capacities not yet exercised do not show up in being.",
                "feedback": "Existing in act and being in act in every respect are different. The person exists, yes, but every unexercised capacity is a real potency. Pure Act means no unrealized capacity at all; that is reserved for God."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Pure potency in the relevant respect, since the Greek-reading has never been actualized.",
                "feedback": "Pure potency, taken strictly, is non-being. The person is in act as existing, in act as rational, in act in many respects. Only one respect, the unexercised reading, is in potency. The case is not pure potency because the person already exists and has actualized many capacities."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Act in some respects, potency in another: actually existing and rational, in potency to the unexercised Greek.",
                "feedback": "Respondeo: act in some respects, potency in another. Act and potency are always indexed to a respect: this thing, in this respect. The person is in act qua existing, in act qua rational animal; in potency qua the unexercised capacity to read Greek. Both poles are real; neither cancels the other."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither act nor potency: an unexercised capacity is a psychological disposition, not an ontological principle.",
                "feedback": "This collapses real potency into mere psychology. But the capacity is grounded in what the person is; a stone has no capacity to read Greek, however dispositionally we describe it. <span class=\"lat\">Potentia</span> is a real ontological principle, not just a way of speaking about minds."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m1-l1-q5`,
          type: "match_pair",
          stem: `Pair each principle with the role it plays in the metaphysics of finite being. <em>Tap a principle, then tap its role. Tap a paired item to release it.</em>`,
          latin_tag: `actus  ·  potentia`,
          doctrine_line: `The two poles of finite being. Everything else in the system is a species of this composition.`,
          lesson_complete: true,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "<span class=\"lat\">actus</span>"
              },
              {
                "id": "L2",
                "text": "<span class=\"lat\">potentia</span>"
              },
              {
                "id": "L3",
                "text": "<span class=\"lat\">actus purus</span>"
              },
              {
                "id": "L4",
                "text": "<span class=\"lat\">compositio</span>"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "the determining perfection a thing actually has"
              },
              {
                "id": "R2",
                "text": "the real capacity to receive a determining perfection"
              },
              {
                "id": "R3",
                "text": "being with no potency, no composition, no unrealized capacity"
              },
              {
                "id": "R4",
                "text": "the union of two really distinct principles in one being"
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
              "all_correct": "All four locked. Act is the positive principle; potency is its real receiver; their union is composition; the unique case of act with no potency is Pure Act. The four key terms of M1 in their four roles.",
              "partial_correct": "Some pairs landed; others did not. The four divide cleanly: act and potency are the two principles, composition is their union, Pure Act is the case where there is no composition at all.",
              "per_pair_corrections": [
                {
                  "left_id": "L1",
                  "wrong_right_id": "R2",
                  "feedback": "<span class=\"lat\">Actus</span> is the determining perfection, not the receiving capacity. The receiving capacity is <span class=\"lat\">potentia</span>."
                },
                {
                  "left_id": "L2",
                  "wrong_right_id": "R1",
                  "feedback": "<span class=\"lat\">Potentia</span> is not the determining perfection; it is the real capacity to receive that perfection."
                },
                {
                  "left_id": "L3",
                  "wrong_right_id": "R4",
                  "feedback": "<span class=\"lat\">Actus Purus</span> is the negation of composition, not a composition. <span class=\"lat\">Compositio</span> names the union; Pure Act is the unique case without it."
                },
                {
                  "left_id": "L4",
                  "wrong_right_id": "R3",
                  "feedback": "<span class=\"lat\">Compositio</span> is the union of two distinct principles in one being; the case of being with no composition at all is <span class=\"lat\">Actus Purus</span>."
                }
              ]
            }
          },
        }
      ],
    },
    {
      id: `m1-l2`,
      num: `II`,
      title: `Act is Prior`,
      latin: `actus  ·  prior`,
      tag: `actus  ·  prior`,
      fin: {
        tag: `actus  ·  prior`,
        heading: `Potency exists for the sake of act. Not the other way.`,
        body: `In time, we often see the potential before the actual: the seed before the tree. But in being, act is always prior. The seed exists <em>for</em> the tree; the capacity exists <em>for</em> what it can receive. A world of pure potency would not exist at all.`,
      },
      questions: [
        {
          id: `m1-l2-q1`,
          type: "mcq",
          stem: `An acorn lies on the ground. Ask it the rudest possible question: what are you <em>for</em>?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "For nothing. An acorn simply is what it is; aims belong to minds, and acorns have none.",
                "feedback": "Yet everything about the acorn is structured: the shell, the stored food, the seed. Structure aimed at nothing is a strange kind of structure. Look again at where it all points."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "For the oak. Everything in its structure is organized toward becoming one.",
                "feedback": "Respondeo: for the oak. The acorn's whole architecture points beyond itself. A capacity is not just an openness; it is an arrow. Keep that arrow in view for the rest of this lesson."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "For remaining an acorn: things aim first of all at staying exactly what they already are.",
                "feedback": "Things do preserve themselves, but the acorn preserves itself precisely so it can stop being an acorn. Its self-keeping serves its becoming. The aim runs forward."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "For whatever finds a use for it: food for a squirrel, decoration for a desk. Its point comes from outside.",
                "feedback": "Outsiders can borrow it for their purposes, but the squirrel did not put the oak inside the acorn. The aim was there before any user arrived. It is built in."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m1-l2-q2`,
          type: "mcq",
          stem: `Back to the acorn and its oak. The acorn comes first in time; no one disputes the calendar. But in being, in the order of what exists for the sake of what, which is prior, and why? (The tradition calls this priority in being <em>ontological</em> priority.)`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The oak. The acorn's whole nature is ordered toward it; potency exists for the sake of act.",
                "feedback": "Respondeo: potency exists for the sake of act. The acorn's whole being is ordered toward the oak. Act is ontologically prior even when potency comes first in time."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The acorn, since whatever exists earlier in time has a kind of priority over what depends on it for its origin.",
                "feedback": "You read priority in being as priority in time. Aquinas separates the two. The acorn precedes the oak temporally; the oak is prior in being, because the acorn's whole nature is to be a capacity for the oak."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither. Time settles nothing here, and both are equally real members of one natural sequence.",
                "feedback": "Half right: temporal succession does not establish priority of being. But priority of being is real and runs in a definite direction. Act is what potency exists for; therefore the oak is prior to the acorn in being, even when not in time."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Both equally, since act and potency are correlative principles and neither has priority of being apart from the other.",
                "feedback": "Correlative does not mean equal in priority. The principles are correlative because each is intelligible only in relation to the other, but the relation is asymmetric: potency is for the sake of act, not the other way."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m1-l2-q3`,
          type: "mcq",
          stem: `Your coffee has gone lukewarm. Next to the cold room it counts as hot; next to the kettle it counts as cold. Someone declares: "Nothing can be both hot and cold. That coffee is impossible." What is missing from their sentence?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing is missing. Hot and cold genuinely exclude each other, so the coffee really is a contradiction.",
                "feedback": "Then every lukewarm drink on earth would be a logical scandal. The coffee is innocent; the sentence is sloppy. Something needs to be added to it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A measurement is missing: until a thermometer is produced, hot and cold are too vague to contradict.",
                "feedback": "Numbers would sharpen the vagueness, but the rescue does not come from precision instruments. Even with exact degrees, the coffee is still warmer than one thing and cooler than another. The fix is elsewhere."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The speaker is missing: hot for you may be cold for me; the sentence needs to say for whom.",
                "feedback": "Tempting, but this trades a small problem for a large one: it makes hot and cold matters of opinion. The coffee's two temperatures are real comparisons, not two feelings. The missing piece is in the sentence, not in the speaker."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Two qualifiers are missing: in the same respect, and at the same time.",
                "feedback": "Respondeo: in the same respect, at the same time. You have just acquired a precision instrument the tradition uses constantly. When this module says a thing cannot be in potency and in act, listen for the qualifier: in the same respect. It will be doing the heavy lifting."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m1-l2-q4`,
          type: "mcq",
          stem: `Pure potency means potency with no act whatsoever: no form, no determination, bare capacity for nothing in particular. Why can such a world not exist?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because God created the world with form, and pure potency without any form cannot persist.",
                "feedback": "True theologically, but the argument does not require theology. On metaphysical grounds alone: potency is real only as ordered toward act. Stripped of that, it is nothing. The argument is structural, not historical."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because potency is real only as ordered toward a determinate act; a capacity ordered toward nothing at all is indistinguishable from non-being.",
                "feedback": "Respondeo: potency is real only as ordered toward a determinate act. Pure potency, capacity for nothing, is no capacity at all. Act must be real for potency to be real."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because potency requires a mind to recognize it as an unrealized possibility.",
                "feedback": "Potency is a real ontological principle, not a mental recognition. The problem with pure potency is not epistemological but metaphysical: it has nothing to be ordered toward."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because pure potency would have no determinate kind, and only determinate kinds are real beings.",
                "feedback": "Closer in form to the right answer, but the determination claim shifts the argument toward essence. The deeper point is that potency without any act it is for is potency of nothing, which is non-being. The kind-claim is a downstream consequence, not the basic move."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m1-l2-q5`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>Act is prior to potency in being because act is always the efficient cause of potency.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Act produces potency and so comes first in being; the priority is straightforwardly causal.",
                "feedback": "You picked up the truth that act is prior, but the reason is wrong. Aquinas does not claim that act efficiently produces potency. The priority is one of perfection and end: potency is for the sake of act."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Act efficiently causes the existence of potency, since potency must be brought into being by something already actual.",
                "feedback": "True that no potency exists without an actual subject. But that is a different claim from the one in the proposition. Priority of act over potency is a priority of perfection and end, not of efficient causation in this direction."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Act is prior because potency is ordered toward act as its perfection and end, not because act efficiently produces potency.",
                "feedback": "Respondeo: priority in being is a priority of perfection and end. The potency is for the sake of the act it can receive. Efficient causation is a different question. The acorn is not efficiently caused by the oak it will become."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Act and potency are simultaneous principles in any being; neither is prior in any sense.",
                "feedback": "Simultaneity in time does not exclude priority in nature. Two principles can coexist in one being while one is metaphysically prior to the other. The question is about that order, not about temporal succession."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m1-l2-q6`,
          type: "syllogism_builder",
          stem: `Construct the self-movement argument. Place each statement in its correct role: universal premise, particular premise, conclusion.`,
          latin_tag: `actus  ·  prior`,
          doctrine_line: `Act is always prior in being. This is why the argument from motion terminates in Pure Act.`,
          lesson_complete: true,
          payload: {
            "instruction": "Three statements; three roles. The universal states the principle that governs every passage from potency to act. The particular closes the apparent loophole. The conclusion names what follows.",
            "components": [
              {
                "id": "c1",
                "text": "Whatever passes from potency to act in a given respect requires something already in act in that respect to bring it there.",
                "role": "major"
              },
              {
                "id": "c2",
                "text": "No being can be simultaneously in potency and in act in the same respect at the same time.",
                "role": "minor"
              },
              {
                "id": "c3",
                "text": "Therefore no being can move itself from potency to act in the same respect: every actualization requires an external principle already in act.",
                "role": "conclusion"
              }
            ],
            "feedback": {
              "correct": "Yes. The universal states the general principle covering every passage from potency to act. The particular blocks the only apparent escape: that a thing could actualize itself. The conclusion names what follows: every movement from potency to act requires something external already in act. This is the metaphysical engine behind every argument from change.",
              "incorrect": "Look at what each statement does. The universal gives the principle that covers every case of potency passing to act. The particular closes the loophole that a thing might actualize itself in the same respect. The conclusion names what follows from both."
            },
            "doctrineTag": "actus · potentia"
          },
        }
      ],
    },
    {
      id: `m1-l3`,
      num: `III`,
      title: `Act/Potency in Change`,
      latin: `mutatio`,
      tag: `mutatio`,
      fin: {
        tag: `mutatio`,
        heading: `What moves is not what moves itself.`,
        body: `Every change is a passage from potency to act in some subject. The subject persists as what it is; what changes is what it can be. Accidental change leaves the substance standing; substantial change reaches the form itself, leaving only matter. Grasping this distinction is not a fine point. It is the whole metaphysics of motion, and everything that follows about causation depends on it.`,
      },
      questions: [
        {
          id: `m1-l3-q1`,
          type: "mcq",
          stem: `Two small disasters at your desk. You bend a paperclip out of shape, and you burn a sheet of paper to ash. Both "changed." Did the same depth of thing happen to each?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "No. The paperclip survives its change; the paper does not.",
                "feedback": "Respondeo: two depths. The paperclip is still a paperclip, just embarrassed. The paper is simply gone; ash is not paper in a new outfit. This lesson gives both depths their names."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes. Both are rearrangements of the same underlying material, differing only in how fast and how violently the pieces move.",
                "feedback": "That account makes the two cases equal by deleting what is interesting about both. If everything is rearrangement, nothing is ever truly destroyed, and the paper should still be somewhere. It is not. Depth matters."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes. Both things end up different from how they started, which is all that the word change means.",
                "feedback": "By that standard a haircut and a cremation are the same event in different sizes. The word change covers both cases, but covering is not explaining. Ask what survived each one."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No. The paperclip did not genuinely change at all, since bending touches nothing about what it is.",
                "feedback": "It genuinely changed: it really was straight and really is bent. The point is not that shallow change is fake, but that it is shallow. The thing beneath the shape held on. With the paper, nothing held on."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m1-l3-q2`,
          type: "mcq",
          stem: `A bronze ingot is melted, poured into a mold, and cast as a horse. The same bronze; a new shape. What kind of change is this, and why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Substantial change. The ingot ceased to exist and a new substance, the bronze horse, came to be from different matter.",
                "correct": false,
                "feedback": "The matter is the same bronze throughout; no new substance came from different matter. The substance, bronze, persists. Only its shape, an accident, changed. Substantial change requires the matter to receive a genuinely new substantial form, not merely a new shape."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Accidental change. Bronze is bronze before and after; what changed is the shape, an accidental form inhering in the same persistent substance.",
                "correct": true,
                "feedback": "Respondeo: accidental change. Bronze is bronze before and after. What changed is the shape, an accidental form inhering in the same substance. The substance was in potency to this shape, and passed to act when it received it. The underlying what-it-is did not change."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Both at once: the new shape is accidental, but melting and re-solidifying changed the matter substantially.",
                "correct": false,
                "feedback": "Liquid and solid bronze are still bronze; state of matter is an accidental modification, not a change of substance. The what-it-is of the bronze was never replaced. Both phases of the process are accidental change."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither. Shape is a human projection; the bronze merely moved from one arrangement to another.",
                "correct": false,
                "feedback": "Shape is an accidental form, a real but non-essential determination of the substance. Denying the reality of accidental forms collapses the act/potency distinction in the accidental order. The bronze was genuinely in potency to this shape, and is now in act with respect to it."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m1-l3-q3`,
          type: "distinction_application",
          stem: `A caterpillar enters a cocoon and emerges as a butterfly. The same matter persists, but the organism that emerges has fundamentally different organs, operations, and form of life. Accidental or substantial change?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Accidental change. The matter is continuous; what looks like a new organism is the same substance reorganized at the accidental level.",
                "correct": false,
                "feedback": "If the same substance persists, it cannot have a genuinely different form of life, different organs, and different capacities. A substance is what it is by its substantial form. Where a new substantial form arises, a new substance arises, regardless of material continuity."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Substantial change. The caterpillar ceases; the same matter receives a new substantial form.",
                "correct": true,
                "feedback": "Respondeo: substantial change. The caterpillar's form of life, its capacities and operations, is replaced by a genuinely different one. Material continuity does not guarantee substantial continuity. What persists through the change is matter, not the caterpillar-substance itself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither. Act and potency fit inanimate matter; living change is governed by DNA instead.",
                "correct": false,
                "feedback": "Living things are not exempt from the act/potency framework; they illustrate it at its most vivid. The caterpillar is in potency to a certain range of forms; metamorphosis is the actualization of that potency at the deepest level. DNA describes the mechanism; act/potency describes the metaphysical structure."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Both at once: accidental change at the surface, substantial change in the organs beneath.",
                "correct": false,
                "feedback": "A change is either substantial or accidental, not both in the same respect at the same time. The change reaches the substantial form itself, making it substantial. The simultaneous accidental changes in properties are downstream of the substantial change, not a second kind of change layered on top of it."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m1-l3-q4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>In substantial change, what persists through the change is primary matter, not the substance itself.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The substance perishes with its form; what persists is primary matter, pure potency beneath both forms.",
                "correct": true,
                "feedback": "Respondeo: true, and precisely stated. The substance is what it is by its substantial form. When the form is replaced, the substance ceases; the matter, which is pure potency for substantial form, persists as the substrate of the change. This is why matter is the principle of continuity in generation and corruption."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Matter persists, but the substance survives too, its form diminished rather than replaced.",
                "correct": false,
                "feedback": "A diminished substantial form is still that form, making this an accidental change at most. Substantial change means the replacement of one substantial form by another, not the reduction of the existing one. If any degree of the original form persists, the substance persists."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The substance persists as the subject; what is replaced is only a deep accident.",
                "correct": false,
                "feedback": "If the substance persists, the change is accidental. A 'deep accident' whose replacement leaves the substance standing is still an accident. Substantial change means the replacement of the substantial form itself, which is why the substance ceases."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Primary matter is a mere abstraction; what persists is a minimal underlying substance.",
                "correct": false,
                "feedback": "Primary matter is not an abstraction but a real principle, the pure potency that is the substrate of substantial change. It cannot exist separately without a substantial form, but it is genuinely real as the receiving principle. Without a real receiving principle, substantial change would require creation ex nihilo at every turn."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m1-l3-q5`,
          type: "spot_the_fallacy",
          stem: `Three descriptions of a change. Which one gets the act/potency structure of change backwards?`,
          latin_tag: `mutatio`,
          doctrine_line: `Omne quod movetur ab alio movetur.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Statement:",
                "text": "The cold iron is in potency to heat; the fire brings it to act.",
                "correct": false,
                "feedback": "Sound. The iron lacks heat and has the real capacity to receive it. The fire, already in act with respect to heat, communicates that act. Potency precedes act in time; the act is the terminus, not the starting point."
              },
              {
                "id": "b",
                "label": "Statement:",
                "text": "The marble is in potency to the statue; the sculptor actualizes it by imposing the form.",
                "correct": false,
                "feedback": "Sound. The marble has the real capacity to receive the form of the statue; the form, once impressed, is the act that terminates the potency. The statue is the end of the change, not its beginning."
              },
              {
                "id": "c",
                "label": "Statement:",
                "text": "The seed contains the tree already in act; growth merely externalizes what was fully present from the start.",
                "correct": true,
                "feedback": "Respondeo: you spotted it. The seed does not contain the tree in act; it contains the tree in potency. If the tree were fully in act from the start, there would be no change, only revelation. Growth is a genuine passage from potency to act, requiring external actualization at each stage. Collapsing the distinction turns change into theater."
              },
              {
                "id": "d",
                "label": "Statement:",
                "text": "In accidental change the substance is in potency to an accident; in substantial change the matter to a new form.",
                "correct": false,
                "feedback": "Sound. This correctly maps the potency/act structure across both kinds of change. In each case the receiving subject is in potency; the form received is the act. The only difference is whether the receiving subject is substance (accidental change) or matter (substantial change)."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `m1-l4`,
      num: `IV`,
      title: `The First Way`,
      latin: `primum movens`,
      tag: `primum movens`,
      fin: {
        tag: `actus purus`,
        heading: `Pure Act. No composition. No limit. No dependence.`,
        body: `Every finite being is composed of act and potency; it has its act from something else. Follow that chain to its necessary terminus and you reach a being that is simply act, with no potency, no unrealized capacity, no receiver. That is what the argument requires.`,
      },
      questions: [
        {
          id: `m1-l4-q1`,
          type: "mcq",
          stem: `Whatever is moved is moved by another. A hand moves a stick, which moves a stone. If the hand stops, the stone stops instantly, regardless of how many links are in the chain. What does this show about a series of moved movers?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It shows the series must have begun at some point in the past.",
                "feedback": "The argument is not about time. Aquinas grants that a temporal series could in principle extend infinitely. The point is about hierarchical dependence right now: each mover in the series moves only insofar as it is being moved at this moment. The regress is simultaneous, not sequential."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It shows the series needs a first member that moves without being moved; with no first, nothing moves at all.",
                "feedback": "Respondeo: each member of the series moves only insofar as it is currently being actualized by the next. The hand, stick, and stone move together, not in sequence. Remove the unmoved first and the whole series loses its motion simultaneously. The series requires a first mover that is not itself moved."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It shows that infinite series cannot exist, since every real collection of things must be finite in number.",
                "feedback": "Aquinas does not claim that infinite series are impossible in general. He grants the possibility of an infinite temporal series of causes. The impossibility he argues is specific: a hierarchical series of simultaneously-dependent movers cannot be infinite, because the dependence runs all the way through at once."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It shows motion is self-explanatory once begun; a first cause matters only for origins.",
                "feedback": "The hand-stick-stone example shows exactly the opposite: the first mover is required not just to start the motion but to sustain it at every moment. If the hand stops now, the stone stops now. The first mover is a continuous sustaining cause, not merely an initiating one."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m1-l4-q2`,
          type: "syllogism_builder",
          stem: `You have walked the chain: the stone, the stick, the hand. Now construct the First Way itself. Place each statement in its correct role: universal premise, particular premise, conclusion.`,
          payload: {
            "instruction": "Three statements; three roles. The universal states the principle every motion obeys. The particular rules out the endless chain. The conclusion names what must exist.",
            "components": [
              {
                "id": "c1",
                "text": "Whatever is moved from potency to act is moved by something already in act.",
                "role": "major"
              },
              {
                "id": "c2",
                "text": "A series of moved movers cannot regress without a first, for without a first mover nothing in the series would move at all; yet things evidently move.",
                "role": "minor"
              },
              {
                "id": "c3",
                "text": "Therefore a first mover exists, itself unmoved: a being in act with no potency for motion.",
                "role": "conclusion"
              }
            ],
            "feedback": {
              "correct": "Respondeo: the First Way entire. The universal is Lesson 1's principle wearing its motion clothes. The particular observes that an endless chain of borrowed motion explains nothing, while motion is plainly given. The conclusion follows of necessity: a first mover, itself unmoved. You did not memorize this argument; you built it.",
              "incorrect": "Look at what each statement does. One states the law governing every passage from potency to act. One closes the loophole of the endless chain by appeal to what is evident. One names what follows. The argument only breathes in that order."
            },
            "doctrineTag": "primum movens"
          },
        },
        {
          id: `m1-l4-q3`,
          type: "mcq",
          stem: `The First Way concludes that there must be a first mover, itself unmoved. Which description of this first mover follows necessarily from the argument?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A being that existed before all other beings and set them in motion at the beginning of time.",
                "feedback": "The argument does not establish temporal priority. The first mover is not first-in-time but first-in-the-order-of-dependence. It is the sustaining cause of motion right now, not merely the historical initiator."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A being in act with no potency for motion: incapable of being moved at all.",
                "feedback": "Respondeo: to be unmoved is not merely to happen to be at rest. It is to have no potency for motion, no capacity to receive actuation from another. The unmoved mover is not moved because there is no potency in it to be actualized. This is what Pure Act means."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A being with greater power than all other movers combined, able to move without itself being moved by anything stronger.",
                "feedback": "Greater power is still a finite perfection, and a very powerful being could still have unrealized capacity. The first mover required by the argument is not merely the strongest mover but the one with no potency for motion whatsoever."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A being that moves by choice rather than by being moved.",
                "feedback": "Choice as the ground of unmoved motion shifts the argument to will and intellect before establishing that this being exists at all. The First Way establishes the existence of an unmoved first cause from the structure of motion itself, before any attributes like intellect or will are assigned."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m1-l4-q4`,
          type: "mcq",
          stem: `Pure Act means a being with no potency whatsoever. What follows from this for composition?`,
          latin_tag: `primum movens`,
          doctrine_line: `The argument from motion terminates in Pure Act: a being with no composition, no unrealized capacity, no dependence.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Pure Act is composed of act and a special kind of unlimited potency that matches its infinite perfection.",
                "feedback": "There is no unlimited potency. Potency is always the limiting, receiving principle. An infinite potency would be a contradiction: a capacity without limit is no capacity at all. Pure Act has no potency, and therefore no composition of any kind."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Pure Act is simple: no composition of act and potency, no matter and form, no essence distinct from its act of being.",
                "feedback": "Respondeo: where there is no potency, there is no composition. No matter, because matter is potency for form. No essence distinct from esse, because essence is potency for esse. No limit, because limits require a receiving potency. Pure Act is simply, uncomplicatedly, act. This is divine simplicity."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Pure Act is composed of many acts at once, with no potency between them.",
                "feedback": "A composition of many acts would require something to hold them together, which reintroduces potency. Pure Act is not a collection of acts but the one unlimited act. Multiplicity requires composition; composition requires potency; Pure Act excludes potency."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Pure Act has no composition now, but could acquire some by choosing to create.",
                "feedback": "Real relations in God to creatures are rational relations, not real ones on God's side. Creation does not add anything to Pure Act. A being that could acquire composition would have the potency for composition, which contradicts Pure Act."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `m1-l5`,
      num: `V`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `You did not learn a vocabulary. You acquired a grid.`,
        body: `Act and potency are not two words to remember but two poles every finite thing is stretched between, and you can now find them in a marble block, a burning log, and an argument for God. Module 2 asks the question this grid was built for: what happens when act and potency are applied, not to motion, but to being itself. That a thing is, and what a thing is, are about to meet the two poles. Bring the grid.`,
      },
      questions: [
        {
          id: `m1-l5-q1`,
          type: "match_pair",
          stem: `Four images carried this module. Pair each with the principle it taught. <em>Tap an image, then tap its principle. Tap a paired item to release it.</em>`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the untouched marble"
              },
              {
                "id": "L2",
                "text": "the acorn and the oak"
              },
              {
                "id": "L3",
                "text": "the bronze cast as a horse"
              },
              {
                "id": "L4",
                "text": "the caterpillar and the butterfly"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "potency is a real capacity in the thing itself, not a projection of the mind"
              },
              {
                "id": "R2",
                "text": "act is prior to potency in being, even where potency comes first in time"
              },
              {
                "id": "R3",
                "text": "accidental change: the same substance receives a new determination"
              },
              {
                "id": "R4",
                "text": "substantial change: the substantial form is replaced while primary matter persists"
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
              "all_correct": "All four locked. The marble gave you real potency; the acorn gave you the priority of act; the bronze and the caterpillar gave you the two depths of change. A module is owned when its images carry its principles.",
              "partial_correct": "Some pairs landed; others did not. Walk back through the images: what did the marble already possess? Which is prior, acorn or oak, and in what sense? What persisted in the bronze, and what persisted in the caterpillar?"
            },
            "doctrineTag": "recapitulatio"
          },
        },
        {
          id: `m1-l5-q2`,
          type: "distinction_application",
          stem: `A fresh case, no rehearsal. A dry oak log burns in the fireplace until only ash remains. Apply the module's grid: what kind of change is this, and what persists through it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "An accidental change: the log takes on a new color and texture while remaining what it was.",
                "feedback": "Check what remains. Ash is not dark wood; nothing answering to the form of wood survives the fire. When the substance itself is gone, the change ran deeper than any accident."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A substantial change: the form of wood is lost, new forms are received, and primary matter persists beneath the exchange.",
                "feedback": "Respondeo: substantial change. The wood ceases to be wood; what persists is not the substance but primary matter, the pure capacity that receives first one substantial form and then another. This is the caterpillar's lesson at full depth."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "An annihilation followed by a fresh creation: the wood passes into nothing and the ash begins from nothing.",
                "feedback": "You made the change too deep. Annihilation and creation would break the continuity, yet the continuity is real: this ash came from this log, by a process nature performs every night. Something persisted, and its name is primary matter."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No change in the strict sense: the same particles are merely rearranged, and the particles stay exactly what they are.",
                "feedback": "That is the materialist reduction, and it quietly deletes the grid. If only rearrangement happens, nothing ever passes from potency to act and nothing is ever generated or corrupted. The price of that account is that there was never really wood, or ash, or you. Aquinas declines to pay it."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m1-l5-q3`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>Act is prior to potency in every sense, including time.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. What is in potency must be preceded in time by the act it is ordered toward.",
                "feedback": "The acorn refutes this. The acorn precedes its own oak in time, and there is nothing incoherent in that. The terminus of an ordering must be prior in nature and perfection, not in the calendar."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. In any one thing the actuality arrives before the capacity, as the oak before its acorn.",
                "feedback": "You reached for the right example and bent it. The oak that drops the acorn is indeed prior to that acorn, but the proposition claims priority in every sense for every case, and the acorn now lying on the ground precedes in time the oak it can become."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. In time the acorn often wins; the priority of act is priority in being and perfection.",
                "feedback": "Respondeo: false, and for that reason. Temporally the acorn wins the race; ontologically the oak was always the point. Priority of act is priority of perfection and end. Get the senses of priority straight and Lesson 2 is permanently yours."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Act and potency are strictly simultaneous in every respect, so neither principle can be prior to the other in any sense.",
                "feedback": "You corrected one overstatement with another. Act and potency do coexist in every finite being, but coexistence is not equality. Potency is ordered toward act as toward its end, and what a thing is for stands prior in being to what merely awaits it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m1-l5-q4`,
          type: "mcq",
          stem: `One sentence to carry the whole module out the door. Which is correct?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Every finite being is composed of act and potency; what passes from potency to act is moved by another; the chain of movers ends in Pure Act.",
                "feedback": "Respondeo: the module in one breath. Two poles, one engine, one terminus. Lessons 1 through 4 are each a clause of this sentence, and the sentence is the spine of everything the course builds from here."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Only the actual is real; potency is a polite name for nothing yet; change just swaps actualities.",
                "feedback": "That is the Megarian move, and Aristotle spent a chapter of the <em>Metaphysics</em> burying it. If potency is nothing, the unstruck match and the wet log are equally incapable of fire, and nothing can ever change at all. Real potency is the price of a world that moves."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "All is flux; act and potency are mind-made perspectives on one process, answering to nothing in things.",
                "feedback": "Heraclitus at the door. But flux itself is unintelligible without the grid: a passage must be a passage of something, from a real capacity to a real determination. Deny the poles and you do not get pure process; you get nothing to describe."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Every chain of movers must have started long ago; the First Way proves the universe began, and Pure Act started it.",
                "feedback": "The most common misreading of the First Way, and worth losing a point to meet now. The argument concerns dependence here and now, not origins long ago: the stone moves only while the hand does. Aquinas thought reason alone could not prove the world began. The first mover is first in the order of act, not first on a timeline."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m1-l5-q5`,
          type: "mcq",
          stem: `Last one. Which sentence uses the module's vocabulary correctly?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `Four lessons, one grid. Module 2 applies it to being itself.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The sleeping musician is in <span class=\"lat\">actus</span> with respect to her skill, since the skill fully exists in her even while unexercised.",
                "feedback": "Close, and the case is genuinely subtle. The sleeping musician holds her skill as a stable possession, but with respect to the exercise of it she is in potency until she plays. Aquinas would say she is in first act regarding the habit and in potency regarding the use. The sentence flattens that distinction."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Materia prima</span> is the simplest complete substance, the basic stuff that all larger substances are assembled from.",
                "feedback": "That description fits an atom, not <span class=\"lat\">materia prima</span>. Primary matter is not a substance at all and never exists bare; it is pure potency, the capacity that persists beneath substantial change, always already under some form."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The frozen pond is in <span class=\"lat\">potentia</span> toward being water, since ice and water are two different substances.",
                "feedback": "The grid is right and the chemistry is wrong. Ice and water are one substance in two accidental states; melting is an accidental change, not a substantial one. The pond is in potency toward being liquid, not toward being a different thing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Actus purus</span> admits of no <span class=\"lat\">potentia</span> whatsoever, and so cannot change, acquire, or lose anything at all.",
                "feedback": "Respondeo: exactly right, and stated with the right severity. No potency means no possible acquisition and no possible loss; Pure Act is not the most changeable being but the least, which is to say not changeable at all. You are using the words the way the tradition uses them."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    }
  ],
};
