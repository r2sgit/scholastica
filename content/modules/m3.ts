import type { ModuleMeta } from '../types';

export const m3: ModuleMeta = {
  id: 3,
  title: `Being and Essence`,
  short: `Being and Essence`,
  label: `Module 3 · Being and Essence`,
  latin: `De Ente et Essentia`,
  aim: `Esse (the act of being) and essentia (essence) are really distinct in creatures. Esse is act; essentia is the potency that receives and limits it. In God they are identical.`,
  lessons: [
    {
      id: `m3-l1`,
      num: `I`,
      title: `The Two Questions Return`,
      latin: `essentia  ·  esse`,
      tag: `essentia  ·  esse`,
      fin: {
        tag: `essentia  ·  esse`,
        heading: `You have been asking two questions since the apple. Now they become two principles.`,
        body: `That a thing is and what a thing is came apart in your hands in Foundations. This module makes the separation precise: <em>essentia</em> and <em>esse</em> are really distinct principles in everything that is not God. The unicorn was the clue. You can know an essence perfectly and still not know whether it is.`,
        distinction: {
          latin: `essentia  ·  actus essendi`,
          english: `essence  ·  the act of being`,
          gloss: `The first distinction returns at depth: what receives, and the act it receives, meet inside everything that is.`,
          motif: `sun-silhouette`,
        },
      },
      questions: [
        {
          id: `m3-l1-q1`,
          type: "mcq",
          stem: `An apple sits on a table. Two facts about it: it is an apple, and it is. Are those the same fact?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes. To be an apple just is to exist as one.",
                "feedback": "Then no apple could ever stop existing without ceasing to have been an apple at all. The orchard's whole history says otherwise. Two facts, not one."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No. What it is and that it is are two different facts about it.",
                "feedback": "Respondeo: two facts. You met this distinction at the very start of the course. This module turns it from an observation into a piece of metaphysics."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The first is a fact; the second is just a manner of speaking.",
                "feedback": "That a thing exists is the least manner-of-speaking fact there is. Remove it and there is nothing left to speak about."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "They are the same fact described at two levels of detail.",
                "feedback": "More detail about what an apple is never adds up to the fact that this one exists. You can complete the description and still have to check the table."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m3-l1-q2`,
          type: "mcq",
          stem: `You know exactly what a unicorn is: one horn, four hooves, the whole portrait. Has knowing all that told you whether any unicorn exists?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes. A complete definition includes whether the thing is real.",
                "feedback": "Then dictionaries would settle zoology. The definition is complete as a definition and silent about existence. That silence is the discovery."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, indirectly: the more detailed the essence, the more likely it exists.",
                "feedback": "Detail adds clarity, not reality. The unicorn's portrait can grow forever without a single one appearing in the garden."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No. The what-it-is is fully known, and the whether-it-is remains open.",
                "feedback": "Respondeo: fully known, still open. Aquinas makes this exact move with a phoenix instead of a unicorn, and you will read him make it later in this module."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The question is unfair, since imaginary things have no essence to know.",
                "feedback": "Yet you do know what a unicorn is; that is why you can spot a wrong drawing of one. The knowability of the essence is precisely what makes its silence about existence so interesting."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m3-l1-q3`,
          type: "mcq",
          stem: `The two principles have names. Which pairing is correct?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">essentia</span> is the act by which a thing is; <span class=\"lat\">esse</span> is what it is.",
                "feedback": "Inverted. <span class=\"lat\">Esse</span> is the act of being, the answer to whether; <span class=\"lat\">essentia</span> is the what. Swap them back and the grid from Module 2 clicks into place."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">essentia</span> is the thing itself; <span class=\"lat\">esse</span> is our concept of it.",
                "feedback": "Both principles are in the thing, not in us. Your concept of the apple did not put the apple on the table."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">essentia</span> and <span class=\"lat\">esse</span> are two words for the same principle.",
                "feedback": "If they were, knowing what a unicorn is would settle whether one exists. You just saw that it does not. Two words, two principles."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">essentia</span> is what a thing is; <span class=\"lat\">esse</span> is the act by which it is.",
                "feedback": "Respondeo: exactly. <span class=\"lat\">Essentia</span> answers the first question, <span class=\"lat\">esse</span> answers the second, and in creatures they are really distinct. The rest of the module unpacks that sentence."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m3-l1-q4`,
          type: "distinction_application",
          stem: `The dodo. Its essence is thoroughly known: anatomists can describe it bone by bone. Since 1681, no dodo has existed. What does the case show?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That essences go on existing somewhere after their things are gone.",
                "feedback": "That is Plato's answer, not Aquinas's. The dodo's essence survives in our knowledge and in God's, not in some museum of forms. What the case shows is simpler and sharper."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That what-something-is does not include that-it-is.",
                "feedback": "Respondeo: the essence is fully intelligible while the <span class=\"lat\">esse</span> is gone. If existence were part of the what, extinction would make dodos indescribable. It made them describable and absent."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That extinction destroyed the essence along with the birds.",
                "feedback": "Then the anatomists would have nothing to describe and the word dodo would mean nothing. The what survives in knowledge; the that does not survive at all."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That the dodo now exists in a weaker, merely historical way.",
                "feedback": "Existence does not come in discount versions. The dodo is known, remembered, and simply not. The clean edge of that 'not' is the lesson."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m3-l1-q5`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>In a creature, <span class="lat">esse</span> is one part of the essence, the way wings are part of a bird.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          latin_tag: `essentia  ·  esse`,
          doctrine_line: `What a thing is never tells you that it is. Two questions, two principles.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Whatever a thing has must be part of what it is.",
                "feedback": "Then the unicorn's full portrait would have settled its existence, and the dodo's loss of <span class=\"lat\">esse</span> would have torn a hole in its anatomy. Having is not the same as being-part-of-the-what."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Esse is the deepest part of the essence, beneath all the others.",
                "feedback": "Deepest changes nothing: a part of the what would show up in the definition, and <span class=\"lat\">esse</span> never does. It stands to the essence as act to potency, not as part to whole."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Esse is the act the essence receives, not a part of the what.",
                "feedback": "Respondeo: received act, not component. The essence is the capacity; <span class=\"lat\">esse</span> actualizes it. You have used this grid since the marble. It was built for this."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Esse and essence are unrelated, each standing on its own.",
                "feedback": "Too far. They are really distinct but never apart in the existing thing: no essence floats free of being, no <span class=\"lat\">esse</span> arrives without a what. Distinct principles, one thing."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `m3-l2`,
      num: `II`,
      title: `Composition`,
      latin: `compositio`,
      tag: `compositio`,
      fin: {
        tag: `compositio`,
        heading: `Every creature is composed. That is not a flaw. It is what makes it a creature.`,
        body: `Composition of act and potency is the structure of finitude. What composition shows is dependence, and dependence points to a source.`,
        distinction: {
          latin: `compositio realis`,
          english: `real composition`,
          gloss: `Essence and existence are not two words for one thing but two principles really composed in every creature.`,
          motif: `diverging-lines`,
        },
      },
      questions: [
        {
          id: `m3-l2-q1`,
          type: "mcq",
          stem: `Could there be a creature with no unrealized capacities at all, nothing it could still become, lose, or undergo?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes. A perfect creature would have outgrown all its capacities.",
                "feedback": "A creature with no potency left would be pure act, and pure act is not a rank a creature reaches. It is what Module 2's argument reserved for the unmoved mover alone."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, in principle, though none happens to exist.",
                "feedback": "The block is not bad luck but structure: to be a creature is to receive being, and a receiver is a potency. No potency, no creature."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No. To be a creature is to be composed of act and potency.",
                "feedback": "Respondeo: composition is not a flaw in creatures; it is what being a creature means. This lesson finds the deepest layer of that composition."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No, but only because every creature has a body that can change.",
                "feedback": "Close, but the net is wider than bodies. An angel has no body and is still composed, as this lesson will show. The deepest composition is not matter and form."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m3-l2-q2`,
          type: "mcq",
          stem: `A finite being has unrealized capacities: it could change, develop, be affected. This shows it is...`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Composed of act and potency, since unrealized capacity is real potency in an existing being.",
                "feedback": "Respondeo: unrealized capacity is potency. A being with potency is a being composed of act and potency. Every finite being has unrealized capacities; Pure Act has none."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Pure act, since to actually exist is already to be in act in every respect.",
                "feedback": "Existing as a being is being in act, but in act in some respect, not every respect. The unrealized capacities ARE the potency-side of the composition. Pure Act is reserved for what has zero unrealized capacities."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Without essence, since a real essence would foreclose any unrealized capacity.",
                "feedback": "Essence is precisely the real potency that receives and limits <span class=\"lat\">esse</span>. Having an essence is what makes a being finite and composed, not the absence of one. Unrealized capacities are downstream of having an essence at all."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Composed of substance and accident, with unrealized capacities being merely accidental modifications.",
                "feedback": "Substance/accident is one composition, but it presupposes the deeper composition of <span class=\"lat\">esse</span> and <span class=\"lat\">essentia</span>. Unrealized capacities are not just accidents; they are real potencies in the substance itself."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m3-l2-q3`,
          type: "mcq",
          stem: `Three kinds of composition: matter/form, substance/accident, <span class="lat">esse</span>/<span class="lat">essentia</span>. Which is most fundamental?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Materia</span> and <span class=\"lat\">forma</span>, because matter receiving form is the most concrete and observable composition we encounter.",
                "feedback": "Hylomorphic composition is real and important but applies only to material beings. The deepest composition must apply to all creatures, including angels and pure spirits."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Esse</span> and <span class=\"lat\">essentia</span>, because the act of being received into essence holds in every creature without exception, including purely spiritual ones.",
                "feedback": "Respondeo: matter/form applies only to material beings. Substance/accident involves properties. But the <span class=\"lat\">esse</span>/<span class=\"lat\">essentia</span> composition applies to every finite being, angels and stones alike. The deepest composition."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Substantia</span> and <span class=\"lat\">accidens</span>, because we know any being only through the accidents that inhere in its substance.",
                "feedback": "A real composition, but not the deepest. Even a bare substance, stripped of all accidents, is still composed of <span class=\"lat\">esse</span> and <span class=\"lat\">essentia</span>, still finite, still receiving its being."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Body and soul (<span class=\"lat\">corpus</span> and <span class=\"lat\">anima</span>), because this composition organizes the human knower who grasps all the others.",
                "feedback": "Body and soul is a real composition in human beings, but it applies only to ensouled bodies, not to all creatures. The deepest composition must run through angels (no body) and minerals (no soul) alike. That is <span class=\"lat\">esse</span>/<span class=\"lat\">essentia</span>."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m3-l2-q4`,
          type: "match_pair",
          stem: `Match each term to its role. <em>Tap a term, then tap its description. Tap a paired item to release it.</em>`,
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
                "text": "<span class=\"lat\">compositio</span>"
              },
              {
                "id": "L4",
                "text": "<span class=\"lat\">actus primus</span>"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "the positive, determining, perfecting principle"
              },
              {
                "id": "R2",
                "text": "the real capacity to receive and be limited by act"
              },
              {
                "id": "R3",
                "text": "the union of two really distinct principles in one being"
              },
              {
                "id": "R4",
                "text": "the first act: the substantial form that makes a thing be what it is, prior to all its operations"
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
              "all_correct": "All four locked. Act is the positive determining principle; potency is the real receptive capacity; composition is their union in one being; and substantial form is the first act, the act by which a thing simply is what it is before doing anything.",
              "partial_correct": "Some pairs landed; others did not. Re-read the corrections below carefully; the easiest swap to make is between <span class=\"lat\">actus</span>/<span class=\"lat\">potentia</span> and the role each plays in the act/potency relation.",
              "per_pair_corrections": [
                {
                  "left_id": "L1",
                  "wrong_right_id": "R2",
                  "feedback": "<span class=\"lat\">Actus</span> is not the receiving capacity. It is the positive, determining principle. The receiving capacity is <span class=\"lat\">potentia</span>."
                },
                {
                  "left_id": "L2",
                  "wrong_right_id": "R1",
                  "feedback": "<span class=\"lat\">Potentia</span> is not the determining perfection. It is the real capacity to receive that perfection. The determining principle is <span class=\"lat\">actus</span>."
                },
                {
                  "left_id": "L3",
                  "wrong_right_id": "R4",
                  "feedback": "<span class=\"lat\">Compositio</span> is the union of two principles in one being, not the case where there is no composition. The being with no composition is <span class=\"lat\">Actus Purus</span>."
                },
                {
                  "left_id": "L4",
                  "wrong_right_id": "R3",
                  "feedback": "<span class=\"lat\">Actus Purus</span> is not a composition; it is the negation of composition. The being whose <span class=\"lat\">esse</span> is not received into any essence."
                }
              ]
            }
          },
        },
        {
          id: `m3-l2-q5`,
          type: "syllogism_builder",
          stem: `Construct the composition argument. Place each statement in its correct role: universal premise, particular premise, conclusion.`,
          latin_tag: `compositio`,
          doctrine_line: `Composition of esse and essentia is the metaphysical structure of creaturely dependence.`,
          lesson_complete: true,
          payload: {
            "instruction": "Three statements; three roles. The universal states the general metaphysical principle about composed beings. The particular applies it to every finite being. The conclusion names what follows about any finite being's relation to its actuality.",
            "components": [
              {
                "id": "c1",
                "text": "Whatever is composed of potency and act has its act from something other than itself, since a potency cannot actualize itself.",
                "role": "major"
              },
              {
                "id": "c2",
                "text": "Every finite being is composed of potency and act.",
                "role": "minor"
              },
              {
                "id": "c3",
                "text": "Therefore no finite being is the source of its own actuality: each has its act from something external to it.",
                "role": "conclusion"
              }
            ],
            "feedback": {
              "correct": "Yes. The universal principle holds for everything composed of potency and act. The particular places finite beings squarely under that principle. The conclusion follows: no finite being stands in its own actuality. This is the metaphysical ground for the dependence of composite beings.",
              "incorrect": "The argument has three joints. The universal gives the principle about composed beings and self-actualization. The particular identifies finite beings as composed. The conclusion names what follows: no finite being can be the ground of its own actuality."
            },
            "doctrineTag": "compositio · dependentia"
          },
        }
      ],
    },
    {
      id: `m3-l3`,
      num: `III`,
      title: `The Limit Principle`,
      latin: `actus  ·  limitatio`,
      tag: `actus  ·  limitatio`,
      fin: {
        tag: `actus  ·  limitatio`,
        heading: `Act is not limited except by the potency that receives it.`,
        body: `Left to itself, act is unlimited. <em>Esse</em> considered in itself is not this-much or that-much, it simply is. What limits it is the essence that receives it, as a vessel limits the water it holds. That is not a metaphor. It is the argument.`,
        distinction: {
          latin: `actus  ·  limitatio`,
          english: `act  ·  limitation`,
          gloss: `Act is not limited by itself; wherever a perfection is bounded, a receiving capacity has bounded it.`,
          motif: `cup-water`,
        },
      },
      questions: [
        {
          id: `m3-l3-q1`,
          type: "mcq",
          stem: `The axiom <em>actus non limitatur nisi per potentiam</em> (act is not limited except by potency) applies to <span class="lat">esse</span> as the deepest act in a creature. What follows from it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Esse</span> in itself is unlimited; it is limited only by the <span class=\"lat\">essentia</span> that receives it.",
                "feedback": "Respondeo: <span class=\"lat\">esse</span> as act is not this-kind or that-much in itself. It is limited when received into an <span class=\"lat\">essentia</span> that is really distinct from it and acts as potency to it. The <span class=\"lat\">essentia</span> is a real receptive principle, and that reception is what limits."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Esse</span> is always limited because being and limitation are convertible terms in any real metaphysics.",
                "feedback": "Being and limitation are not convertible. The argument is that <span class=\"lat\">esse</span> is unlimited in itself; limitation comes from the receiving potency. In God, <span class=\"lat\">esse</span> is not received, so it is not limited."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Esse</span> limits itself by its own nature, since to exist is already to be a determinate kind of thing.",
                "feedback": "If <span class=\"lat\">esse</span> limited itself, the limit would come from the act itself. But act is the positive principle. The limiting principle must be a distinct potency, namely <span class=\"lat\">essentia</span> as a real positive potency that receives <span class=\"lat\">esse</span>."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Esse</span> is unlimited only in God; in creatures, <span class=\"lat\">esse</span> is intrinsically limited and needs no separate receiving principle.",
                "feedback": "If creaturely <span class=\"lat\">esse</span> were intrinsically limited, no axiom about how limitation arises would do any work. The whole point of <em>actus non limitatur nisi per potentiam</em> is that limitation comes from a real distinct receiving potency, the <span class=\"lat\">essentia</span>."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m3-l3-q2`,
          type: "precision_check",
          stem: `A claim that would pass at most dinner tables: <em>"Essence limits esse the way a cup limits water."</em> Close. What is technically wrong with it?`,
          payload: {
            "statement": "Essence limits esse the way a cup limits water.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing is wrong; it is the standard Thomistic image.",
                "feedback": "It is a common image, and Thomists do reach for it. But press it and it leaks: a cup is a separate thing standing outside the water. Essence is not outside its esse. The image needs a correction it cannot give itself."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The cup is external to the water; essence is an intrinsic principle, not a container.",
                "feedback": "Respondeo: that is the slip. A cup and its water are two things; essence and esse are two principles of one thing. Essence receives and limits from within, as a real positive capacity, not as a vessel standing apart. Keep the image for beginners; keep the correction for yourself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Water exists before it enters the cup; the image is fine apart from that.",
                "feedback": "You found a real leak, but the smaller one. Esse is indeed not a pre-existing stuff waiting to be poured. The deeper slip is what the cup is: an external container, where essence is an intrinsic receiving principle."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The image fails because esse cannot be limited by anything at all.",
                "feedback": "Overcorrected. Act is not limited except by potency, and in creatures it really is limited: this is the axiom, not its denial. The question is how essence limits, not whether."
              }
            ],
            "correct_option_id": "b",
            "correction": "Essence limits esse not as a container from outside but as an intrinsic receiving potency: a real, positive principle composing one being with the act it receives."
          },
        },
        {
          id: `m3-l3-q3`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>The essence of a creature limits its <span class="lat">esse</span> the way a mold limits poured bronze, making essence a real positive principle, not a shadow of <span class="lat">esse</span>.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The mold and bronze are both physical, and so are <span class=\"lat\">essentia</span> and <span class=\"lat\">esse</span>: both must be real for them to compose.",
                "feedback": "True that essence and <span class=\"lat\">esse</span> must both be real, but the mold/bronze analogy is not about both being physical (they are not). The point is that limitation requires a real limiting principle, and that principle is the <span class=\"lat\">essentia</span>."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. A real limit requires a real limiting principle; <span class=\"lat\">essentia</span> is a positive ontological reality, a real receiving potency for <span class=\"lat\">esse</span>.",
                "feedback": "Respondeo: a real limit requires a real limiting principle. The <span class=\"lat\">essentia</span> is a positive ontological reality, a real potency. This is Cajetan's strict line: <span class=\"lat\">essentia</span> as <span class=\"lat\">res</span>, a genuine positive principle, not a mere limiting mode of <span class=\"lat\">esse</span>."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The mold is positive but <span class=\"lat\">essentia</span> is negative; in the analogy, limitation works by the absence of further <span class=\"lat\">esse</span>, not by a real principle.",
                "feedback": "This is the Gilsonian drift the strict line resists. If <span class=\"lat\">essentia</span> is mere absence, there is no real receiver in the composition, and the real distinction collapses. The strict line insists that <span class=\"lat\">essentia</span> is a positive real principle."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The mold itself does not limit anything; <span class=\"lat\">esse</span> is limited by where there is no more <span class=\"lat\">esse</span>, by privation rather than by <span class=\"lat\">essentia</span>.",
                "feedback": "Privation explains nothing on its own; you need a real receiver for the privation to belong to. The mold image works precisely because the mold is something, not nothing. The same holds for <span class=\"lat\">essentia</span>."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m3-l3-q4`,
          type: "mcq",
          stem: `A purely spiritual creature has no matter and no matter/form composition. Yet it is finite: it has a determinate nature and limited perfections. What composition accounts for its finitude?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "None. A pure spirit is simple; its finitude is only a label, not a real structure.",
                "correct": false,
                "feedback": "Finitude is not a label; it is a real limitation on the being. Real limitations require real principles. If there is no composition at all, there is no principle within the being to account for why its perfections are this-much and no more. Pure simplicity without composition belongs only to what has no limitation."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Substance and accident only. Without matter, the only composition available is between what the being is and the accidents that modify it.",
                "correct": false,
                "feedback": "Substance/accident composition explains how a being can have properties beyond its essence; it does not explain why the essence itself is limited in the first place. A purely spiritual creature's essence is already limited before any accidents are considered. A deeper composition is required."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Esse and essentia. The spirit's act of being is received into a real essence that limits it.",
                "correct": true,
                "feedback": "Respondeo: esse/essentia composition holds in every creature, with or without matter. A purely spiritual creature has no matter, but it does have a determinate nature, a real essentia, that receives and limits its esse. This is why the limit principle applies even to the highest spiritual creatures."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Matter and form in a spiritual mode: a spiritual matter receives the spirit's form.",
                "correct": false,
                "feedback": "Spiritual or 'intelligible' matter is a disputed scholastic category, and Aquinas explicitly rejects it for angels. The composition that accounts for the finitude of a purely spiritual creature is not matter/form but esse/essentia: the act of being received into a real nature that limits it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m3-l3-q5`,
          type: "spot_the_fallacy",
          stem: `The axiom <em>actus non limitatur nisi per potentiam</em> (act is not limited except by potency) has three readings below. Which one misapplies it by treating <span class="lat">essentia</span> as mere negation rather than a real positive principle?`,
          latin_tag: `actus  ·  limitatio`,
          doctrine_line: `The axiom of limitation is the key to the real distinction between esse and essentia in every creature.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Statement:",
                "text": "In any creature, <span class=\"lat\">esse</span> is unlimited in itself; it is limited only by the real <span class=\"lat\">essentia</span> that receives it, as potency limits act.",
                "correct": false,
                "feedback": "Sound. This is the axiom applied correctly: <span class=\"lat\">essentia</span> is a real positive principle, a receiving potency, not a shadow. The limitation on a creature's <span class=\"lat\">esse</span> is the effect of a real receiving principle. The error is elsewhere."
              },
              {
                "id": "b",
                "label": "Statement:",
                "text": "A creature's <span class=\"lat\">esse</span> is not intrinsically limited; it is limited because a real <span class=\"lat\">essentia</span> receives it and thereby contains it within a determinate degree of perfection.",
                "correct": false,
                "feedback": "Sound. The limit is not baked into <span class=\"lat\">esse</span> itself; it comes from the receiving principle. A real receiving principle, <span class=\"lat\">essentia</span>, is required to account for the real limitation. The error is elsewhere."
              },
              {
                "id": "c",
                "label": "Statement:",
                "text": "<span class=\"lat\">Essentia</span> must be a real positive principle, not mere negation, because a negation cannot receive anything; only a real potency can receive a real act.",
                "correct": false,
                "feedback": "Sound. This gives the philosophical reason for why <span class=\"lat\">essentia</span> must be a genuine positive principle: reception requires a real receiver. A negation has no positive being and therefore no receiving capacity. The error is elsewhere."
              },
              {
                "id": "d",
                "label": "Statement:",
                "text": "<span class=\"lat\">Esse</span> is limited simply by not extending beyond a certain point; <span class=\"lat\">essentia</span> names the boundary where <span class=\"lat\">esse</span> stops, not a real positive receiving principle.",
                "correct": true,
                "feedback": "Respondeo: you spotted it. This collapses <span class=\"lat\">essentia</span> into mere absence of <span class=\"lat\">esse</span>. But the axiom requires a real receiving potency to account for the limit: <span class=\"lat\">esse</span> is limited only BY a potency, not by its own failure to continue. If <span class=\"lat\">essentia</span> is just the boundary where <span class=\"lat\">esse</span> stops, there is no real potency doing the limiting, and the composition quietly dissolves."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `m3-l4`,
      num: `IV`,
      title: `Participation`,
      latin: `participatio`,
      tag: `participatio`,
      fin: {
        tag: `participatio`,
        heading: `Everything you have ever met was borrowing.`,
        body: `The moon shines with light that is not its own, the iron burns with borrowed fire, and every creature is with an act of being it received. <em>Participatio</em> is the tradition's name for that universal borrowing. Follow the loans back far enough and you reach the one case that is not a loan.`,
        distinction: {
          latin: `participatio`,
          english: `participation`,
          gloss: `To have being partially is to have it from another: the lamps are lit, and something is the sun.`,
          motif: `lamps-one-sun`,
        },
      },
      questions: [
        {
          id: `m3-l4-q1`,
          type: "mcq",
          stem: `The moon is bright tonight. Is the brightness its own?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes. Whatever a thing displays, it owns.",
                "feedback": "Wait for the eclipse. What a thing displays on loan, the lender can interrupt. Owned light has no off switch held by someone else."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No. It shines with light received from the sun.",
                "feedback": "Respondeo: received light. The moon really shines, and the shining is really not its own. Hold both halves; the whole lesson lives between them."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The question confuses physics with philosophy.",
                "feedback": "The physics is the philosophy here, which is why the image has served for two thousand years. Borrowed brightness is the most visible case of a structure this lesson generalizes."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Partly: the moon contributes some brightness of its own.",
                "feedback": "Generous to the moon, but no. Its contribution is a surface that receives well. Receiving well is not a small thing; it is just not owning."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m3-l4-q2`,
          type: "mcq",
          stem: `The iron glows in the forge. It is genuinely hot. Hot by its own essence, or hot by sharing in the fire's heat?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "By its own essence: once hot, the heat belongs to the iron.",
                "feedback": "Pull it from the forge and watch the ownership expire. What belongs by essence does not fade when the source steps away."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "By sharing in the fire's heat: the iron has what the fire is.",
                "feedback": "Respondeo: the iron has heat; fire is hot of itself. The tradition's word for having-what-another-is is <span class=\"lat\">participatio</span>. Now ask the question about being itself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither: heat is just molecular motion, so the question dissolves.",
                "feedback": "The physics describes the heat; it does not answer whose it is. Restate it in molecules and the iron still got its motion from the fire. The structure survives the vocabulary."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Both equally: source and receiver own the heat in the same way.",
                "feedback": "In the same way is exactly what the case denies. The fire heats without being heated; the iron is heated. One gives from what it is; one has what it got."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m3-l4-q3`,
          type: "distinction_application",
          stem: `Now the master case. Apply the iron-and-fire structure to being itself: creatures exist, God exists. Where does the structure place each?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Creatures are the fire; God is the iron, receiving being from the world.",
                "feedback": "Reversed. The world cannot lend what it only borrowed. Run the loans backward and the lender at the end owes nothing to anyone."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Both creatures and God participate in some larger being beyond them.",
                "feedback": "Then the larger being would be God, and the question would simply restart. The structure terminates in something that is of itself, or it never terminates at all."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Creatures are the iron: they have esse by participation. God is esse of himself.",
                "feedback": "Respondeo: creatures have being as the iron has heat; God is being as fire is hot, and more than that image can carry. <span class=\"lat\">Participatio</span> is the structure of the whole created order."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The analogy fails: existence cannot be received, only had outright.",
                "feedback": "Your own existence is the counterexample: it began, it is sustained, it can end. Everything about it has the shape of something received."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m3-l4-q4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>To say creatures participate in being means each creature owns a small piece of God.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Participation means taking part, and a part of being is a part of God.",
                "feedback": "That arithmetic ends in pantheism, where the tradition refuses to go. God has no parts to hand out. Participation is receiving a likeness, not collecting a fragment."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Creatures are pieces of God, though the pieces stay distinct from him.",
                "feedback": "Distinct pieces of a being with no parts is not a position; it is a contradiction with good manners. The dependence is real, the piecing is not."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Each creature receives its own created act of being, not a fragment of the divine.",
                "feedback": "Respondeo: the creature's <span class=\"lat\">esse</span> is its own, created, finite, received. God lends nothing of his substance; he causes being that is genuinely the creature's. Participation names dependence, not division."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Creatures do not depend on God for being once they exist.",
                "feedback": "Right judgment, wrong reason, and the wrong reason costs everything. The moon does not bank its brightness. Creatures are sustained in being at every moment, or they are not at all."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m3-l4-q5`,
          type: "mcq",
          stem: `Two terms close this lesson. Which pairing is correct?`,
          latin_tag: `participatio`,
          doctrine_line: `Creatures have being. One being is it.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">esse commune</span> is God's being; <span class=\"lat\">esse subsistens</span> is the being of creatures.",
                "feedback": "Reversed. God is not the common being of things, as if creation were made of God-stuff. He is being standing of itself; creatures share in <span class=\"lat\">esse commune</span>."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Both terms name the same thing seen from two angles.",
                "feedback": "They name the two sides of the deepest divide there is: being as received and common, being as subsisting and unique. Collapse the terms and the divide goes with them."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">esse commune</span> is a genus that contains both God and creatures.",
                "feedback": "The tradition is firm here: God is not inside any genus, not even being-in-general. He is the cause of <span class=\"lat\">esse commune</span>, not its biggest member."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">esse commune</span> is the being creatures share; <span class=\"lat\">esse subsistens</span> is being that stands of itself: God.",
                "feedback": "Respondeo: <span class=\"lat\">esse commune</span> is the act of being as found across all creatures; <span class=\"lat\">esse subsistens</span> is being subsisting of itself, which is God alone. The next lesson stays with that second term."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `m3-l5`,
      num: `V`,
      title: `When What and That Coincide`,
      latin: `esse subsistens`,
      tag: `esse subsistens`,
      fin: {
        tag: `esse subsistens`,
        heading: `You have read the sentence the whole course turns on.`,
        body: `Aquinas's phoenix is your unicorn: an essence fully known, existence still an open question. From that one observation the real distinction follows, and with it the single exception: a being whose what simply is its that. Module 2 called it Pure Act. This module calls it <em>esse subsistens</em>. They are the same answer arrived at from two roads.`,
        distinction: {
          latin: `esse subsistens`,
          english: `subsistent being`,
          gloss: `Where what and that coincide, being is not received but simply is: the unreceived act, of itself unique.`,
          motif: `sun-alone`,
        },
      },
      questions: [
        {
          id: `m3-l5-q1`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Whatever is not in the concept of the essence or quiddity comes from outside the essence and enters into composition with the essence. Now, every essence or quiddity can be understood without anything being understood about its act of existing: I can understand what a man is, or what a phoenix is, and yet not know whether either has existence in reality. It is clear, therefore, that the act of existing is other than the essence or quiddity, unless perhaps there is a thing whose quiddity is its very act of existing.</p><div class="cr-cite">De Ente et Essentia, cap. 3 (Leonine numbering; cap. 4 in some translations) · trans. verified against the Corpus Thomisticum Latin</div></div><br>What is the hinge of the argument?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Phoenixes do not exist, so essence and existence must differ.",
                "feedback": "The phoenix's absence is the illustration, not the engine. The argument would run just as well with the man, who does exist. What matters is what understanding an essence fails to tell you."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Essences are understood fully without their existence being known; so esse is other than essence.",
                "feedback": "Respondeo: the hinge exactly. If existing were inside the what, knowing the what would settle the whether. It never does. Therefore <span class=\"lat\">esse</span> comes to the essence from beyond it, with one possible exception the last clause leaves open."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Whatever is outside an essence cannot ever belong to the thing.",
                "feedback": "Backwards: the passage says what is outside the essence enters into composition with it. Esse belongs to the thing intimately. It just does not belong to the what."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Some things, like the man, carry existence inside their essence.",
                "feedback": "Reread the passage: the man and the phoenix stand on the same side. Understanding either essence leaves existence unknown. The exception the text reserves is not the man."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m3-l5-q2`,
          type: "mcq",
          stem: `The passage ends with a door: <em>unless there is a thing whose quiddity is its very act of existing</em>. What would such a being have to be like?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Uncomposed and unique: no essence receiving esse, no potency limiting act.",
                "feedback": "Respondeo: nothing receives, so nothing limits, so nothing is composed. And there cannot be two such, for there would be nothing to tell them apart. The chain from Module 2 ended at this same door."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The largest and oldest of beings, with the most essence and the most esse.",
                "feedback": "Superlatives miss the point. This being does not have more of the two principles; it is not two principles at all. Different in kind, not in quantity."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A being whose essence is unusually well matched to its act of existing.",
                "feedback": "A perfect match is still a pair. The clause says quiddity IS the act of existing: identity, not harmony. The difference between those words is the whole lesson."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An abstraction: existence in general, considered apart from things.",
                "feedback": "Existence-in-general subsists nowhere; it is common, not standing of itself. The clause points at <span class=\"lat\">esse subsistens</span>, which is the opposite of an abstraction: the most real of all."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m3-l5-q3`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>In God, essence and esse fit together perfectly.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. God's essence and esse correspond without any gap.",
                "feedback": "A correspondence without gaps is still two things corresponding. The strict claim is stronger and stranger: in God there are not two to fit. His essence is his esse."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. In God the composition is perfect rather than partial.",
                "feedback": "Perfect composition is still composition, and composition means a receiver, and a receiver means potency. The argument removed all of that. What remains is not well-fitted parts but no parts."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. There is no fitting because there are not two: God's essence is his esse.",
                "feedback": "Respondeo: identity, not harmony. Fit together perfectly smuggles in the very twoness the doctrine denies. Catching that smuggle is precision; you just did the course's signature move."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. God has esse but no essence of any kind.",
                "feedback": "Overcorrected into a different error. God is not essence-less; his essence simply is his act of being. Say it that way and both truths survive."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m3-l5-q4`,
          type: "mcq",
          stem: `Last one. Which sentence uses the lesson's vocabulary correctly?`,
          latin_tag: `esse subsistens`,
          doctrine_line: `One case with no composition. The argument required it; the tradition names it.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Every creature is its own <span class=\"lat\">esse subsistens</span>, since each one really exists.",
                "feedback": "Really existing is not subsisting as being itself. Creatures have received esse; none of them IS its esse. One being subsists as being, and you are not it. Neither am I, for what it is worth."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The phoenix proves essences cannot be known until the thing exists.",
                "feedback": "The passage argued the exact opposite: the phoenix's essence is known while its existence is not. That is what pries the two principles apart."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In creatures <span class=\"lat\">quidditas</span> receives <span class=\"lat\">esse</span>; in God they are identical.",
                "feedback": "Respondeo: the whole lesson in one sentence, and every term in its right place. <span class=\"lat\">Quidditas</span> is the essence as definable; in everything but God it receives an act of being it is not."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "God participates in <span class=\"lat\">esse commune</span> more fully than any creature does.",
                "feedback": "God does not participate at all; participation is the creature's relation. He is the subsisting source of what creatures share. The direction of the loan never reverses."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `m3-l6`,
      num: `VI`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The most important sentence in the course is now yours.`,
        body: `In everything that is not God, what it is and that it is are really distinct; in God they are identical. You can now say it, defend it, and recognize its counterfeits. Module 4 takes the same grid into wood and bronze and bodies, where matter meets form. The unicorn, the iron, and the phoenix stay with you. They have more work to do.`,
        distinction: {
          latin: `participatio`,
          english: `participation`,
          gloss: `To have being partially is to have it from another: the lamps are lit, and something is the sun.`,
          motif: `lamps-one-sun`,
        },
      },
      questions: [
        {
          id: `m3-l6-q1`,
          type: "match_pair",
          stem: `Four images carried this module. Pair each with the principle it taught. <em>Tap an image, then tap its principle. Tap a paired item to release it.</em>`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the unicorn, perfectly defined"
              },
              {
                "id": "L2",
                "text": "the mold and the poured bronze"
              },
              {
                "id": "L3",
                "text": "the iron glowing in the forge"
              },
              {
                "id": "L4",
                "text": "the phoenix in Aquinas's text"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "knowing an essence never settles existence"
              },
              {
                "id": "R2",
                "text": "essence receives and limits the act of being"
              },
              {
                "id": "R3",
                "text": "creatures have being by participation"
              },
              {
                "id": "R4",
                "text": "esse is other than essence, with one possible exception"
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
              "all_correct": "All four locked. The unicorn opened the gap, the mold showed how essence limits, the iron showed the borrowing, and the phoenix carried the argument itself. A module is owned when its images carry its principles.",
              "partial_correct": "Some pairs landed. Walk the images again: what did defining the unicorn fail to tell you? What did the mold do to the bronze? Whose heat was in the iron? And what did Aquinas's phoenix leave open?"
            },
            "doctrineTag": "recapitulatio"
          },
        },
        {
          id: `m3-l6-q2`,
          type: "mcq",
          stem: `The deepest act/potency composition in creatures is...`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Materia</span> and <span class=\"lat\">forma</span>, the composition that explains every physical change, from accidents to substantial transformations.",
                "feedback": "<span class=\"lat\">Materia</span>/<span class=\"lat\">forma</span> is real and important but applies only to material beings. The deepest composition must apply to every finite being, including purely spiritual ones."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Substantia</span> and <span class=\"lat\">accidens</span>, the composition between what a thing fundamentally is and the qualities that modify it.",
                "feedback": "Not the deepest. A bare substance, stripped of all accidents, is still composed of <span class=\"lat\">esse</span> and <span class=\"lat\">essentia</span>, still finite, still receiving its being."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Esse</span> and <span class=\"lat\">essentia</span>, the act of being received into an <span class=\"lat\">essentia</span> that limits it; this composition holds in every creature without exception.",
                "feedback": "Respondeo: this composition applies to every creature without exception, angels and stones alike. It is the metaphysics of participation: all finite <span class=\"lat\">esse</span> is received, participated, limited by a real <span class=\"lat\">essentia</span>."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Genus</span> and <span class=\"lat\">species</span>, since logical structure underlies all metaphysical structure and applies to every being whatsoever.",
                "feedback": "<span class=\"lat\">Genus</span>/<span class=\"lat\">species</span> is a logical composition, a way the mind structures its concepts. The deepest composition is metaphysical, in the things themselves: <span class=\"lat\">esse</span> received into <span class=\"lat\">essentia</span>."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m3-l6-q3`,
          type: "fill_blank",
          stem: `Complete the master-key parallel that runs through the system. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Matter is to <span class="fb-blank" data-blank="b1">______</span> as <span class="fb-blank" data-blank="b2">______</span> is to <em>esse</em>.<br>In every finite being, two principles compose: one as <span class="fb-blank" data-blank="b3">______</span>, the other as potency.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "form",
                  "forma"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "essence",
                  "essentia"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "act",
                  "actus"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "form",
              "essence",
              "act",
              "potency",
              "matter",
              "esse",
              "accident",
              "substance",
              "compositio"
            ],
            "feedback": {
              "all_correct": "Master key. Matter is to form as essence is to <span class=\"lat\">esse</span>: in each pair the first principle is potency to the second, which is act. Substance and accident play the same game in another register. Hold this and the rest of Thomism becomes legible.",
              "partial_correct": "Some of the parallel is right. Each composition pairs a receiving potency with a determining act. Matter receives form; <span class=\"lat\">essentia</span> receives <span class=\"lat\">esse</span>; in every finite being, one side is potency, the other is act.",
              "fully_wrong": "Reach for <em>form</em>, <em>essence</em>, and <em>act</em>. The pattern is: every finite composition has a potency side and an act side. Identify which terms in the bank name the act side of each pair."
            }
          },
        },
        {
          id: `m3-l6-q4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>The real distinction means essence and esse are two things joined together.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Really distinct means really two, and two reals are two things.",
                "feedback": "Two principles, not two things. A thing has essence and esse; it is not built by gluing a what-block to an is-block. Misplace this and the whole doctrine turns into carpentry."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The creature is the joint where the thing called essence meets the thing called esse.",
                "feedback": "Neither principle is a thing on its own: no essence floats unactualized, no esse arrives without a what. The creature is not a joint; it is the one being its two principles compose."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. They are two real principles of one thing, not two things.",
                "feedback": "Respondeo: really distinct, never apart, jointly composing one being. Hold principles-not-things and you are safe from the two worst caricatures of the doctrine at once."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The distinction is only in our way of thinking about the creature.",
                "feedback": "That is the rationalist exit, and the unicorn blocks it: the gap between what and whether is in things, not just in thought. The dodo did not go extinct in our concepts."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m3-l6-q5`,
          type: "mcq",
          stem: `One sentence to carry the whole module out the door. Which is correct?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `The real distinction owned. Module 4 takes the grid into the physical world.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Existence is the deepest layer of every essence, discovered by careful definition.",
                "feedback": "No definition ever coughed up an existence; the unicorn's portrait stayed a portrait. Esse is not the basement of the what. It is the act the what receives."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In every creature, essence receives and limits esse; in God, essence and esse are identical.",
                "feedback": "Respondeo: the module in one breath. Composition in everything made, identity in the maker, and participation as the bridge between them. Modules 2 and 3 are now one argument with two vocabularies."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Essence is an illusion of language; only acts of existing are real.",
                "feedback": "Then nothing would be anything in particular: existing, but of no kind. The dodo and the unicorn would be indistinguishable. Essence is not the enemy of esse; it is its receiver."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Essence and esse are identical in creatures, and really distinct only in God.",
                "feedback": "Exactly inverted, and worth a careful look because it sounds so close. Identity belongs to God alone; the distinction belongs to everything else. Swap them back and you have the doctrine."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    }
  ],
};
