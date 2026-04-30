import type { ModuleMeta } from '../types';

export const m5: ModuleMeta = {
  id: 5,
  title: `Logic`,
  short: `Logic`,
  label: `Module 5 · Logic`,
  lessons: [
    {
      id: `m5-l1`,
      num: `I`,
      title: `Necessity vs. Coincidence`,
      latin: `logica · ars artium`,
      tag: `logica  ·  ars artium`,
      fin: {
        tag: `logica  ·  ars artium`,
        heading: `Logic is the art of arts — it governs the use of every other art.`,
        body: `<em>Logica</em> does not tell you what exists; it tells you how to think about what exists without making avoidable errors. The first question it forces is whether you are dealing with necessity or coincidence — whether things are as they are because they must be, or merely because they happen to be. The rest of Module 5 depends on keeping that question in view.`,
      },
      questions: [
        {
          id: `m5-l1-e1`,
          type: "mcq",
          stem: `Two statements: <em>"All men are mortal."</em> and <em>"Socrates is a man."</em><br><br>Which conclusion follows <em>necessarily</em> from these two premises?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Socrates is mortal.`,
              correct: undefined,
              feedback: `Yes. The conclusion does not merely come <em>after</em> the premises — it comes <em>from</em> them, with necessity. Hold any syllogism up to that test: does the conclusion <em>have</em> to follow given the premises? If yes, the inference is valid. The full grammar of validity is what Lessons 5 and 6 will teach.`,
            },
            {
              id: `b`,
              text: `Socrates is a Greek.`,
              correct: undefined,
              feedback: `Possibly true — Socrates was Greek — but this conclusion does not follow from the two premises given. Truth and validity are different. A conclusion can be true and still not be entailed by its premises. Try the option that follows <em>necessarily</em> from the premises supplied.`,
            },
            {
              id: `c`,
              text: `All Greeks are mortal.`,
              correct: undefined,
              feedback: `Also true, but the inference exceeds the premises. The premises tell us that Socrates is mortal because he is a man — they say nothing about Greeks as a group. A valid inference goes only as far as the premises allow.`,
            }
            ],
          },
        },
        {
          id: `m5-l1-e2`,
          type: "true_false_with_reason",
          stem: `Consider this argument: <em>"It rained yesterday; therefore my dog is hungry."</em><br><br>Is this inference valid? Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE — both the rain and the dog's hunger could be facts about yesterday.",
                "feedback": "Both might be true facts. But the question is not whether each statement is <em>true</em> — it is whether the second <em>follows from</em> the first. The dog's hunger has nothing to do with the rain. Two true sentences in temporal succession are not yet an argument."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE — the conclusion does not follow from the premise; the rain and the dog's hunger are temporally adjacent but not logically connected.",
                "feedback": `Right. <span class="lat">Post hoc, ergo propter hoc</span> — "after this, therefore because of this" — is one of the oldest logical confusions, and it appears with new costumes in every generation. Logic is the discipline of telling consequence from coincidence.`
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE — the dog was probably not even outside.",
                "feedback": "An empirical guess about the dog. The question is logical, not factual. Even if the dog <em>were</em> hungry, \"it rained yesterday\" would not be the reason. The inference fails not because the conclusion is false, but because nothing in the premise <em>entails</em> it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "TRUE — when one event happens after another, the first must have caused the second.",
                "feedback": `Try the same move on other cases. The sun rose this morning before I drank my coffee — did the sunrise <em>cause</em> my coffee? Of course not. Temporal sequence is not causal connection. The tradition has a name for this exact mistake — <span class="lat">post hoc, ergo propter hoc</span>, "after this, therefore because of this" — and it is one of the oldest logical confusions. The fact that one thing happened <em>after</em> another tells us nothing about whether the first <em>caused</em> the second.`
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m5-l1-e3`,
          type: "spot_the_fallacy",
          stem: `An argument:<br><br>· Every politician is a citizen.<br>· Some citizens are saints.<br>· Therefore: some politicians are saints.<br><br>The conclusion does not follow. What is the structural problem?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The premises tell us that politicians are <em>some</em> of the citizens, and that <em>some</em> citizens are saints — but those two \"somes\" may not overlap. Nothing in the premises forces the politician-citizens to be among the saint-citizens.",
                "feedback": "Right — the bridge between <em>politicians</em> and <em>saints</em> is never established. Both premises talk about citizens, but the citizens who are politicians and the citizens who are saints are not necessarily the same citizens. (When we get to Lesson 5 on the syllogism, the tradition has a technical name for this — the <em>undistributed middle term</em> — but the intuition is already yours.)"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The conclusion is empirically false in the world. Politicians are not, in fact, often saints, and the inference fails because the conclusion does not match how things actually are — a factual problem with the conclusion itself.",
                "feedback": "Whether the conclusion is true or false in the world is a separate question. This is asking about the <em>form</em> of the argument — whether the inference is valid. Even if the conclusion happened to be true (suppose, somewhere, every politician really were a saint), it still wouldn't <em>follow</em> from these premises. Truth and validity are different; that is the L1 lesson."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The word \"citizen\" is being used to mean different things in the two premises — civic citizen in the first, ecclesial citizen in the second — and that ambiguity is what dissolves the inference rather than any structural flaw.",
                "feedback": "<em>Citizen</em> means the same thing in both premises — same word, same sense. There is no shift between civic and ecclesial usage; the word is stable. (When a word does shift meaning across an argument, that is its own kind of flaw — the tradition will name it later. But that is not what is happening here.) The flaw here is structural, not semantic."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The argument is valid as written. The first premise puts politicians inside citizens, the second puts saints inside citizens, and the conclusion follows by tracing politicians through the shared citizen-class to saints.",
                "feedback": "Test the trace concretely: imagine the politicians are citizens A through M, and the saints among the citizens are N through Z. Both premises hold; the conclusion fails. \"Sharing a citizen-class\" is not enough — the politician-citizens and the saint-citizens have to actually overlap, and nothing in the premises forces that overlap. The argument is invalid."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l1-e4`,
          type: "mcq",
          stem: `Which of the following arguments has a conclusion that follows <em>necessarily</em> from its premises?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `If it is a triangle, it has three sides. This figure is a triangle. Therefore it has three sides.`,
              correct: undefined,
              feedback: `Yes — this is <span class="lat">modus ponens</span> in classical form. If P entails Q, and P is the case, then Q follows necessarily. One of the patterns of valid inference; we will name them properly in Lesson 5.`,
            },
            {
              id: `b`,
              text: `If it rained, the ground is wet. The ground is wet. Therefore it rained.`,
              correct: undefined,
              feedback: `<em>Affirmation of the consequent.</em> The ground may be wet for many reasons — sprinkler, dew, spilled coffee. The argument confirms the consequent and infers the antecedent, which is invalid. <span class="lat">Modus ponens</span> (the valid form) goes the other direction: from the antecedent to the consequent.`,
            },
            {
              id: `c`,
              text: `Most swans are white. This bird is a swan. Therefore this bird is white.`,
              correct: undefined,
              feedback: `A probabilistic premise — <em>most swans</em> — yields, at best, a probable conclusion. This is dialectic, not demonstration. It might be a useful inference; it is not a <em>necessary</em> one. Lesson 6 will distinguish demonstration from dialectic precisely.`,
            },
            {
              id: `d`,
              text: `All apples are fruits. This pear is not an apple. Therefore this pear is not a fruit.`,
              correct: undefined,
              feedback: `<em>Denial of the antecedent.</em> From <em>"all apples are fruits"</em> we cannot conclude that <em>only</em> apples are fruits — pears, plums, and figs all qualify. The argument is invalid; the conclusion is also false.`,
            }
            ],
          },
        },
        {
          id: `m5-l1-e5`,
          type: "mcq",
          stem: `Last one. Logic is best described as which of the following?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The instrument every other speculative discipline depends on — not a science about any particular subject matter, but the discipline that makes every other science possible.`,
              correct: undefined,
              feedback: `Right. The medieval tradition has a name for this — <span class="lat">Logica est ars artium et scientia scientiarum</span>, the art of arts and the science of sciences. Logic is <em>instrument</em>: you will not be taught a fact in this module that you couldn't have figured out yourself; you will be given the tools by which figuring-things-out becomes trustworthy.`,
            },
            {
              id: `b`,
              text: `A way of organizing what we already know about the world.`,
              correct: undefined,
              feedback: `Closer to <em>taxonomy</em> than to logic. Logic does not catalog the world; it disciplines the <em>moves</em> by which the mind goes from one thing it knows to another.`,
            },
            {
              id: `c`,
              text: `The study of how people actually think.`,
              correct: undefined,
              feedback: `That is <em>psychology</em> — the empirical science of human cognition. Logic is normative, not descriptive: it studies how the mind <em>should</em> move when it reasons rightly, not how it <em>does</em> move on any given Tuesday.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m5-l2`,
      num: `II`,
      title: `The Five Predicables`,
      latin: `genus · species · differentia · proprium · accidens`,
      tag: `genus  ·  species  ·  differentia  ·  proprium  ·  accidens`,
      fin: {
        tag: `genus  ·  species  ·  differentia  ·  proprium  ·  accidens`,
        heading: `Everything predicated of a subject falls into exactly one of five categories.`,
        body: `Genus, species, differentia, proprium, accidens — not a taxonomy invented for school exercises but a map of how universals relate to their subjects. Differentia is the engine: it carves the genus into species and makes definition possible. The five predicables are what logic reaches for when it wants to say what something <em>is.</em>`,
      },
      questions: [
        {
          id: `m5-l2-e1`,
          type: "mcq",
          stem: `Of the following predicates of <em>man</em>, which one is the <span class="lat">genus</span>?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Animal.`,
              correct: undefined,
              feedback: `Yes — <span class="lat">genus</span> is the more universal, undifferentiated part of a definition. <em>Animal</em> is what man shares with other species; what makes him <em>human</em> (rational) is the <span class="lat">differentia</span>, not the <span class="lat">genus</span>. The <em>Isagoge</em> tradition begins here because every other predicable is understood by relation to it.`,
            },
            {
              id: `b`,
              text: `Rational.`,
              correct: undefined,
              feedback: `<em>Rational</em> is the <span class="lat">differentia</span> — what distinguishes man from other animals within the same genus. <span class="lat">Differentia</span> + <span class="lat">genus</span> together define the species; neither alone is the <span class="lat">genus</span>.`,
            },
            {
              id: `c`,
              text: `Risibility — the capacity to laugh.`,
              correct: undefined,
              feedback: `<em>Risibility</em> is the <span class="lat">proprium</span> of man — it flows necessarily from rationality but is not part of the definition. The <span class="lat">genus</span> is what is shared with other species; risibility is shared with no other species.`,
            },
            {
              id: `d`,
              text: `Tall.`,
              correct: undefined,
              feedback: `<em>Tall</em> is a predicable accident — it may or may not belong to a particular man, and tells us nothing essential about what man is. The <span class="lat">genus</span> names what is essential and shared.`,
            }
            ],
          },
        },
        {
          id: `m5-l2-e2`,
          type: "match_pair",
          stem: `Now match each predicable to its description. <em>Tap a predicable, then tap its description. Tap a paired item to release it.</em>`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": `<span class="lat">genus</span>`
              },
              {
                "id": "L2",
                "text": `<span class="lat">species</span>`
              },
              {
                "id": "L3",
                "text": `<span class="lat">differentia</span>`
              },
              {
                "id": "L4",
                "text": `<span class="lat">proprium</span>`
              },
              {
                "id": "L5",
                "text": `<span class="lat">accidens</span>`
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "the more universal, undifferentiated part of a definition"
              },
              {
                "id": "R2",
                "text": `<span class="lat">genus</span> + <span class="lat">differentia</span> together`
              },
              {
                "id": "R3",
                "text": "what distinguishes one species from others within the same genus"
              },
              {
                "id": "R4",
                "text": "flows necessarily from the essence but is not part of the definition"
              },
              {
                "id": "R5",
                "text": "belongs contingently to the subject; may or may not be present"
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
              "all_correct": `All five locked. The predicables are the grammar of definition: what is shared (<span class="lat">genus</span>), what is distinct (<span class="lat">differentia</span>), what they together name (<span class="lat">species</span>), what flows from that name necessarily (<span class="lat">proprium</span>), and what attaches contingently (<span class="lat">accidens</span>). Every Aristotelian definition uses some combination of these five.`,
              "partial_correct": `Some pairs landed; some did not. Read the corrections below carefully — the <span class="lat">proprium</span>/<span class="lat">accidens</span> line and the <span class="lat">genus</span>/<span class="lat">differentia</span> line are the two most-confused pairs in this set.`,
              "per_pair_corrections": [
                {
                  "left_id": "L4",
                  "wrong_right_id": "R5",
                  "feedback": `<span class="lat">Proprium</span> follows necessarily from the essence (every man is risible because he is rational); <span class="lat">accidens</span> attaches contingently (a man may or may not be tall). The cleanest test: can the predicate fail to belong while the species remains? If yes, it is <span class="lat">accidens</span>. If no — if it must belong wherever the species is — it is <span class="lat">proprium</span>.`
                },
                {
                  "left_id": "L5",
                  "wrong_right_id": "R4",
                  "feedback": `Same swap from the other direction. <span class="lat">Accidens</span> belongs contingently — it may or may not be present in a given individual. <span class="lat">Proprium</span> belongs necessarily — it must be present wherever the species is.`
                },
                {
                  "left_id": "L1",
                  "wrong_right_id": "R3",
                  "feedback": `<span class="lat">Genus</span> is what is <em>shared</em> with other species (animal, said of man, dog, horse). <span class="lat">Differentia</span> is what is <em>distinct</em> within the genus (rational, distinguishing man from the rest). The <span class="lat">genus</span> answers 'what kind of being'; the <span class="lat">differentia</span> answers 'what kind specifically'.`
                },
                {
                  "left_id": "L3",
                  "wrong_right_id": "R1",
                  "feedback": `Same swap from the other direction. <span class="lat">Differentia</span> is what distinguishes one species from others within the same genus. <span class="lat">Genus</span> is the more universal, undifferentiated part of the definition.`
                },
                {
                  "left_id": "L2",
                  "wrong_right_id": "R1",
                  "feedback": `<span class="lat">Species</span> is what is <em>defined</em> by genus + differentia. The <span class="lat">genus</span> is one of the inputs to that definition, not the species itself. 'Rational animal' (genus + differentia) names the species 'human'.`
                }
              ]
            }
          },
        },
        {
          id: `m5-l2-e3`,
          type: "mcq",
          stem: `Two predicates of <em>man</em>: <em>risible</em> (capable of laughter) and <em>literate</em> (able to read). Both are real. Which is the <span class="lat">proprium</span>, and why?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `<em>Risible</em> is the <span class="lat">proprium</span>; it flows necessarily from rationality and belongs to every man.`,
              correct: undefined,
              feedback: `Yes. <em>Risible</em> belongs to <em>every</em> man as such — it flows from the rational nature, even if a particular man never happens to laugh. <em>Literate</em> belongs to <em>some</em> men, contingently on circumstances of education. The cleanest test: can a man fail to be risible without ceasing to be a man? No. Can a man fail to be literate? Yes — therefore literacy is <span class="lat">accidens</span>, not <span class="lat">proprium</span>.`,
            },
            {
              id: `b`,
              text: `<em>Literate</em> is the <span class="lat">proprium</span>; reading is what distinguishes humans from animals.`,
              correct: undefined,
              feedback: `Reading does distinguish humans from animals, but contingently — many adult humans cannot read and are no less human for it. <span class="lat">Proprium</span> must belong to <em>every</em> instance of the species. Risibility passes that test; literacy does not.`,
            },
            {
              id: `c`,
              text: `Both are <span class="lat">proprium</span> — both flow from the rational nature.`,
              correct: undefined,
              feedback: `Both flow from rationality, yes — but <span class="lat">proprium</span> is stricter than that. It must belong to every member of the species, always. A pre-literate child is fully human; a pre-laughter newborn still has the <em>capacity</em> for laughter rooted in his nature. Risibility passes the universality test; literacy does not.`,
            },
            {
              id: `d`,
              text: `Neither — both are <span class="lat">accidens</span> because they vary among individuals.`,
              correct: undefined,
              feedback: `Risibility does not vary in the way literacy does. The <em>capacity</em> for laughter belongs to every man as such, even when the act of laughing does not occur in this moment. Literacy varies because the capacity itself can fail to develop. The two are not on the same footing.`,
            }
            ],
          },
        },
        {
          id: `m5-l2-e4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>Rationality is a predicable accident of man.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE — some men behave irrationally, so rationality cannot be essential.",
                "feedback": `You have conflated the <em>capacity</em> with its <em>exercise</em>. A man can fail to use reason in a given moment without losing the capacity for reason. Rationality as <span class="lat">differentia</span> is the capacity, built into what man is — not a momentary score on a test of reasoning.`
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": `FALSE — rationality is the <span class="lat">differentia</span> of man, the very mark that distinguishes him from other animals.`,
                "feedback": `Right. Rationality cannot be a predicable accident because accidents do not constitute the species. The <span class="lat">differentia</span> + <span class="lat">genus</span> together <em>are</em> the species. Strip rationality away and you no longer have <em>man</em>; you have some other kind of animal entirely.`
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE — different men have different rational capacities.",
                "feedback": `Different exercises of rationality differ — a philosopher reasons more sharply than a child, and a child more than an infant. But the <em>capacity</em>, possessed in some degree by every member of the species, is what the <span class="lat">differentia</span> names. <span class="lat">Differentia</span> is metaphysical, not statistical.`
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": `FALSE — rationality is the <span class="lat">proprium</span> of man, since it flows from the essence.`,
                "feedback": `Closer, but still off. <span class="lat">Proprium</span> follows necessarily from the essence but is not <em>part</em> of it (e.g., risibility). Rationality is <em>part</em> of the essence — it is the <span class="lat">differentia</span> itself, one of the two components by which the species is defined.`
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m5-l2-e5`,
          type: "fill_blank",
          stem: `Complete the formula. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces', serif; font-size:22px; padding:14px 0; display:inline-block;"><span class="lat">species</span>  =  <span class="fb-blank" data-blank="b1">______</span>  +  <span class="fb-blank" data-blank="b2">______</span></span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "genus"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "differentia"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "genus",
              "differentia",
              "proprium",
              "accidens",
              "species",
              "substantia"
            ],
            "feedback": {
              "all_correct": `<span class="lat">Species = genus + differentia.</span> Memorize the formula; it is the spine of every Aristotelian definition. 'Rational animal' = (rational, the differentia) + (animal, the genus) = the species <em>man</em>.`,
              "partial_correct": `Half right. Re-read: <span class="lat">genus</span> is the more universal part (animal); <span class="lat">differentia</span> is what distinguishes within the genus (rational). The order does not matter; both must be present.`,
              "fully_wrong": `Reach for <span class="lat">genus</span> and <span class="lat">differentia</span> from the word bank. The other terms (<span class="lat">proprium</span>, <span class="lat">accidens</span>, <span class="lat">substantia</span>) belong to other questions in this lesson and module.`
            }
          },
        },
        {
          id: `m5-l2-e6`,
          type: "mcq",
          stem: `Last one. Which sentence captures the structure of the predicables?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `<span class="lat">Genus</span> + <span class="lat">differentia</span> = <span class="lat">species</span>; <span class="lat">proprium</span> follows necessarily; <span class="lat">accidens</span> contingently.`,
              correct: undefined,
              feedback: `Five predicables. The first three are how essence is <em>known</em> — by stating its more universal share (<span class="lat">genus</span>), its specifying mark (<span class="lat">differentia</span>), and the species these together name. The last two are how essence is <em>accompanied</em> — by what flows from it necessarily (<span class="lat">proprium</span>) and by what attaches to it contingently (<span class="lat">accidens</span>).`,
            },
            {
              id: `b`,
              text: `<span class="lat">Genus</span> + <span class="lat">species</span> = <span class="lat">differentia</span>; <span class="lat">proprium</span> and <span class="lat">accidens</span> are alternatives.`,
              correct: undefined,
              feedback: `Reversed. <span class="lat">Differentia</span> is one of the inputs to the definition, not the output. <span class="lat">Genus</span> + <span class="lat">differentia</span> together name the <span class="lat">species</span>.`,
            },
            {
              id: `c`,
              text: `All five predicables are interchangeable — they are five names for the same predicating relation.`,
              correct: undefined,
              feedback: `They are five distinct kinds of relation. Confusing them is exactly what the predicables exist to prevent. <span class="lat">Genus</span> shares; <span class="lat">differentia</span> distinguishes; <span class="lat">species</span> is what they together name; <span class="lat">proprium</span> follows necessarily; <span class="lat">accidens</span> attaches contingently.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m5-l3`,
      num: `III`,
      title: `The Ten Predicaments`,
      latin: `praedicamenta · substantia · accidens`,
      tag: `praedicamenta  ·  substantia  ·  accidens`,
      fin: {
        tag: `praedicamenta  ·  substantia  ·  accidens`,
        heading: `Before you reason about things, you need to know what kind of thing you are reasoning about.`,
        body: `Substance, quantity, quality, relation, place, time, posture, habit, action, passion — ten irreducibly different ways a thing can be described. They are not just a list. They are the logical backbone of the distinction between substance and accident that Module 0 introduced in metaphysical terms. Here it becomes operational.`,
      },
      questions: [
        {
          id: `m5-l3-e1`,
          type: "match_pair",
          stem: `Five of the ten predicaments. Match each Latin term to its English description. <em>Tap a term, then tap its description. Tap a paired item to release it.</em>`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": `<span class="lat">substantia</span>`
              },
              {
                "id": "L2",
                "text": `<span class="lat">quantitas</span>`
              },
              {
                "id": "L3",
                "text": `<span class="lat">qualitas</span>`
              },
              {
                "id": "L4",
                "text": `<span class="lat">relatio</span>`
              },
              {
                "id": "L5",
                "text": `<span class="lat">ubi</span>`
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "a being that exists in itself, not in another"
              },
              {
                "id": "R2",
                "text": "how much something is — extension, divisibility into parts"
              },
              {
                "id": "R3",
                "text": "what kind something is — color, shape, skill, disposition"
              },
              {
                "id": "R4",
                "text": "the ordering of one thing to another — fatherhood, similarity, equality"
              },
              {
                "id": "R5",
                "text": "presence in a place — being here rather than there"
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
              "all_correct": `All five locked. <span class="lat">Substantia</span> is the primary predicament; the other four are kinds of accident — modes of <em>being-in-another</em>. Five more accidents await in the next exercise: <span class="lat">actio</span>, <span class="lat">passio</span>, <span class="lat">quando</span>, <span class="lat">situs</span>, and <span class="lat">habitus</span>.`,
              "partial_correct": `Some pairs landed; some did not. The most-confused pair in this set is <span class="lat">quantitas</span> / <span class="lat">qualitas</span> — <em>how much</em> versus <em>what kind</em>. Read the corrections below.`,
              "per_pair_corrections": [
                {
                  "left_id": "L2",
                  "wrong_right_id": "R3",
                  "feedback": `<span class="lat">Quantitas</span> is <em>how much</em> (extension, divisibility into parts). <span class="lat">Qualitas</span> is <em>what kind</em> (color, character, skill). They sound alike in English but cut different things — count vs. character.`
                },
                {
                  "left_id": "L3",
                  "wrong_right_id": "R2",
                  "feedback": `Same swap from the other direction. <span class="lat">Qualitas</span> names what kind; <span class="lat">quantitas</span> names how much.`
                },
                {
                  "left_id": "L4",
                  "wrong_right_id": "R5",
                  "feedback": `<span class="lat">Relatio</span> names how things are <em>ordered to each other</em> (fatherhood, equality, similarity). <span class="lat">Ubi</span> names <em>where</em> something is (here, in the Agora). The first is between things; the second locates a single thing.`
                }
              ]
            }
          },
        },
        {
          id: `m5-l3-e2`,
          type: "distinction_application",
          stem: `Now the other five predicaments. For each statement about Socrates, identify which predicament is being predicated.<br><br>· Socrates is teaching.<br>· Socrates is being taught a lesson by his wife.<br>· Socrates is sitting.<br>· Socrates is wearing his cloak.<br>· Socrates lived in the 5th century BC.<br><br>Which mapping is correct, in order?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "action · reception · posture · state · time",
                "feedback": `Yes. <span class="lat">Actio</span> = the influx of a cause on an effect (teaching). <span class="lat">Passio</span> = the receiving of action (being taught). <span class="lat">Situs</span> = the ordering of parts in place (sitting). <span class="lat">Habitus</span> = the relation of the body to what surrounds or covers it (clothing). <span class="lat">Quando</span> = position in time (a century). Five categories you might never have suspected were categories — and yet they sort real distinctions in how reality is predicated.`
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "reception · action · state · posture · time",
                "feedback": `Action and reception are swapped: teaching is the <em>giving</em> side of the action (<span class="lat">actio</span>); being-taught is the <em>receiving</em> side (<span class="lat">passio</span>). And posture (<span class="lat">situs</span>, how parts are arranged in place) is different from state (<span class="lat">habitus</span>, how the body relates to what covers or surrounds it).`
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "action · quality · posture · state · time",
                "feedback": `Teaching as action: yes. But being-taught is not a <em>quality</em> — it is the receiving side of an action, <span class="lat">passio</span>. The category of <span class="lat">passio</span> exists precisely to name being-acted-upon as its own kind of being. Collapsing it into quality misses the cut.`
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "quality · quality · posture · state · time",
                "feedback": `The modern habit — treating both teaching and being-taught as "qualities" Socrates has. But the tradition keeps them apart: <span class="lat">actio</span> and <span class="lat">passio</span> are not qualities of the agent, they are the active and passive sides of an action. The asymmetry is metaphysical, not just grammatical.`
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l3-e3`,
          type: "mcq",
          stem: `Why is <em>substance</em> the primary predicament — not just first in the list, but the one all the others depend on?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Because the other nine categories are modes of <em>being-in-another</em> — they all need a substance to inhere in. They do not exist on their own; they exist as features of substances.`,
              correct: undefined,
              feedback: `Right. The medieval formulation captures it exactly: <span class="lat">Substantia est ens per se; accidens est ens in alio.</span> Substance exists in itself; accident exists in another. The nine accident-categories are not nine independent things alongside substance — they are nine modes of how something can fail to be a substance and still be something.`,
            },
            {
              id: `b`,
              text: `Because Aristotle put it first in the <em>Categories</em>, and the tradition followed.`,
              correct: undefined,
              feedback: `Aristotle did put it first, and the tradition did follow — but the priority is metaphysical, not historical. The order reflects the priority; it does not create it. Substance is first because everything else depends on it; not because Aristotle decided to list it first.`,
            },
            {
              id: `c`,
              text: `Because substance is the most common kind of predicate in everyday speech.`,
              correct: undefined,
              feedback: `Frequency in speech does not determine metaphysical priority. We say "this is red" more often than "this is a substance," but redness presupposes a red <em>thing</em>. The cleanest test of priority is dependency: which category presupposes the others? Substance is the only one that presupposes nothing else of its own kind.`,
            },
            {
              id: `d`,
              text: `Because all the other categories can be reduced to substance with enough analysis.`,
              correct: undefined,
              feedback: `The opposite of the Aristotelian-Thomistic move. Accidents are <em>not reducible</em> to substance — they are real features distinct from substance, but ones that <em>inhere in</em> substance. Reductive accounts erase the categorical distinction the predicaments exist to mark.`,
            }
            ],
          },
        },
        {
          id: `m5-l3-e4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>God can be classified under one of the ten predicaments.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE — God exists in himself, so God falls under the predicament of substance.",
                "feedback": "An understandable move — God is, in some sense, a being that exists in himself. But the predicaments are categories of <em>finite, created</em> being. To say God falls under the predicament of substance is to put God in a genus — and the tradition firmly resists that. God is not \"a kind of substance\"; God is the source of all being, including substance."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE — the predicaments organize creaturely being. God transcends them, since the categorical structure exists for finite beings, not for being itself.",
                "feedback": `Right. The ten predicaments organize <em>finite</em>, created being. God transcends the categories — not by lacking being, but by exceeding the categorical structure that finite being requires. (Forward link: this is one of the seeds of the <span class="lat">analogia entis</span> in Module 15 — being is predicated of God and creatures <em>analogically</em>, not univocally.)`
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE — God falls under multiple predicaments simultaneously, since divine simplicity does not preclude categorical inclusion.",
                "feedback": "Confused — divine simplicity is precisely what <em>prevents</em> God from being categorized at all. Simplicity means God is not composed (no parts, no genus + differentia structure). Putting God under predicaments would impose composition where the tradition denies it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE — God does not fall under the predicaments because God does not really exist in the way the predicaments understand existence.",
                "feedback": "The opposite extreme — and theologically wrong. The tradition does not deny that God exists; it denies that God's existence fits the categorical structure of created being. Existence is predicated of God <em>eminently</em>, not vacuously."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m5-l3-e5`,
          type: "distinction_application",
          stem: `An accident <em>inheres in</em> a substance — it cannot exist on its own. Which of the following is the clearest example of an accident — a feature that <em>cannot</em> exist on its own and must inhere in some substance?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "This oak tree.",
                "feedback": "An oak tree is a substance — it exists in itself. It might have many accidents (height, age, color of leaves), but the oak itself is the substance those accidents inhere in. Look for the option that <em>cannot</em> exist on its own."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Plato.",
                "feedback": "Plato is a substance — an individual, complete in himself. He has many accidents (philosophical insight, height, location). But Plato himself is what those accidents belong to. Look for one of those accidents."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Plato's wisdom.",
                "feedback": "Right. Wisdom is a quality — a <em>qualitas</em> — and qualities cannot exist on their own. Wisdom inheres in someone who is wise; absent any subject, wisdom would be nothing at all. The oak tree, Plato, and the marble each exist <em>in their own right</em> — those are substances. Wisdom needs Plato (or someone) to be wisdom <em>of</em>."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A small block of marble.",
                "feedback": "A block of marble is a substance — it exists in itself, even before the sculptor touches it. The sculptor might give it new accidental forms (the shape of a horse, then the shape of a fish), but the marble persists as the underlying substance. Look for the option that needs a substance to exist <em>in</em>."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m5-l3-e6`,
          type: "mcq",
          stem: `Last one. Which of the following best captures the structure of the predicaments?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Substance is being-in-itself; the other nine categories are modes of being-in-another.`,
              correct: undefined,
              feedback: `Right. The medieval formulation: <span class="lat">Substantia est ens per se; accidens est ens in alio.</span> The categorical structure is dependency-based — every accident requires a substance to inhere in; substance presupposes nothing of its own kind. One way to be in your own right; nine ways to be on the back of something else.`,
            },
            {
              id: `b`,
              text: `Substance and the nine accidents are equally fundamental kinds of being, none prior to the others.`,
              correct: undefined,
              feedback: `The tradition denies this directly. The categorical priority of substance is metaphysical, not arbitrary — accidents <em>cannot exist</em> without substance to inhere in. They are not "equally fundamental kinds of being." They are modes of dependent being.`,
            },
            {
              id: `c`,
              text: `The ten predicaments are arranged by frequency — substance is just the most common kind of predicate in speech.`,
              correct: undefined,
              feedback: `Frequency in everyday predication is irrelevant. We say "this is red" more often than "this is a substance," but redness presupposes a red <em>thing</em>. Predication frequency does not determine categorical priority.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m5-l4`,
      num: `IV`,
      title: `The Four Per Se Modes`,
      latin: `per se · primo · secundo · tertio · quarto`,
      tag: `per se  ·  primo  ·  secundo  ·  tertio  ·  quarto`,
      fin: {
        tag: `per se  ·  primo  ·  secundo  ·  tertio  ·  quarto`,
        heading: `Not everything true of a subject belongs to it in the same way.`,
        body: `A predicate belongs to its subject <em>per se</em> in the first mode when it enters the definition; in the second mode when the subject enters the predicate’s definition. The third and fourth modes are rarer but real. The point is that <em>per se</em> is not a single relationship — it has four distinct modes, and demonstration requires knowing which one you are in.`,
      },
      questions: [
        {
          id: `m5-l4-e1`,
          type: "close_reading",
          stem: `<p style="margin: 0 0 14px;">Aquinas, commenting on Aristotle's <em>Posterior Analytics</em>, distinguishes four ways something can be said <em>per se</em>. Read the passage:</p><div class="cr-audio-controls"><button class="cr-audio-play" data-audio-id="audio-m5-l4-e1" type="button" aria-label="Listen to passage read aloud"><span class="cr-audio-icon">▶</span><span class="cr-audio-label">Listen</span></button></div><div class="cr-passage"><p><span class="cr-mode">First mode</span> <em>(primo)</em>. The first way of saying something <em>per se</em> is when the definition itself, or something expressed in the definition, is predicated of the thing defined. Thus "line" is stated in the definition of triangle, hence "line" is in triangle <em>per se</em>.</p><p><span class="cr-mode">Second mode</span> <em>(secundo)</em>. The second mode is when the preposition <em>per</em> implies a relationship of material cause, when the subject belongs to the definition of the predicate. As when we say "a snub nose is a concave nose," for nose is in the very definition of snub.</p><p><span class="cr-mode">Third mode</span> <em>(tertio</em> — TAIR-tsee-oh<em>)</em>. A third mode is when <em>per se</em> signifies something existing in isolation, not predicated of any subject, but subsisting in itself. Thus Socrates and Plato, as singulars in the genus of substance, are said to be <em>per se</em>.</p><p><span class="cr-mode">Fourth mode</span> <em>(quarto)</em>. The fourth mode is when whatever is attributed to a thing because of itself is said of it <em>per se</em>; the predicate belongs to the subject through the subject's own nature. As when we say, "Slaughtered, it died."</p><p>Any predication that meets none of these four conditions holds <em>per accidens</em>, by contingency rather than by nature.</p><div class="cr-cite">Adapted from Aquinas, <em>In Posteriora Analytica</em>, Lib. I, lect. 10, nn. 3, 4, 6, 7.</div></div><p style="margin: 14px 0 0;">Hold those four names: <em>primo</em>, <em>secundo</em>, <em>tertio</em>, <em>quarto</em>. The next questions will use them. Which statement best captures the four modes Aquinas lays out in this passage?</p>`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Four modes: <em>per se primo</em> (predicate in subject's definition), <em>per se secundo</em> (subject in predicate's definition), <em>per se tertio</em> (something in isolation), and <em>per se quarto</em> (predicate in the subject because of itself).",
                "feedback": "Right. Four modes, four names. The passage gives canonical examples for each: \"line\" in the definition of triangle (<em>primo</em>); \"nose\" in the definition of \"aquiline\" (<em>secundo</em>); Socrates and Plato as singulars in the genus of substance (<em>tertio</em>); \"Slaughtered, it died\" — death following from slaughter because of itself (<em>quarto</em>). And notice Aquinas himself flags that the third mode is different in kind from the others: it is \"not a mode of predicating, but a mode of existing.\" The first, second, and fourth name <em>how a predicate attaches to a subject</em>; the third names <em>how a substance is</em>. Hold the names — <em>primo, secundo, tertio, quarto</em> — they are the grammar the rest of this lesson uses."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<em>Per se primo</em>, <em>secundo</em>, <em>tertio</em>, and <em>quarto</em> describe the same relation from four different angles — predicate and subject essentially connected in the same way, just named differently.",
                "feedback": "You've collapsed the four modes into a single relation in costume. But each names a distinct topology: <em>primo</em> is predicate-in-subject's-definition (animal/man); <em>secundo</em> is the opposite direction, subject-in-predicate's-definition (nose/snub); <em>tertio</em> is ontological (substance vs. accident); <em>quarto</em> is causal (effect from cause). Four different shapes of belonging, not one shape under four names."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The passage describes only the logical modes (<em>per se primo</em> and <em>secundo</em>). <em>Tertio</em> and <em>quarto</em> are about being and causation, which fall outside logic proper.",
                "feedback": "You've drawn a logic/metaphysics line Aquinas does not draw here. He explicitly treats all four together in this lecture. <em>Per se tertio</em> (existential) and <em>quarto</em> (causal) are why <em>per se</em> in the Aristotelian-Thomistic tradition is not <em>just</em> logical — it tracks how predicates connect to subjects in <em>reality</em>, not merely in language."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The four modes are ranked: <em>per se primo</em> is the weakest form, <em>per se quarto</em> the strongest. Demonstration prefers the strongest available.",
                "feedback": "You've imposed a hierarchy the passage doesn't draw. The four modes are coordinate, not ranked — each names a different way the connection can hold; none is \"more necessary\" than another. Demonstration uses whichever mode the content requires, not whichever is \"stronger.\""
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l4-e2`,
          type: "distinction_application",
          stem: `For each predication, identify which <em>per se</em> mode it exemplifies — or whether it is <em>per accidens</em>.<br><br>· <em>Man is rational.</em><br>· <em>Snub is concave.</em><br>· <em>Socrates is musical.</em><br>· <em>The effect of fire is heat.</em><br><br>Which mapping is correct?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<em>per se primo</em> · <em>per se secundo</em> · <em>per accidens</em> · <em>per se quarto</em>",
                "feedback": "Right. <em>Rational</em> is in the definition of <em>man</em> (first mode). <em>Nose</em> is in the definition of <em>snub</em> (second mode — the subject is in the predicate's definition, since \"snub\" just <em>means</em> a concave nose; here \"concave\" maps to that snub-defining property). <em>Musical</em> belongs to Socrates contingently — he might not have been (per accidens). And heat proceeds from fire necessarily, by fire's essence — fourth mode."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<em>per se primo</em> · <em>per se primo</em> · <em>per accidens</em> · <em>per se quarto</em>",
                "feedback": "The <em>snub/concave</em> case is not first mode. First mode is <em>predicate in subject's definition</em>. With <em>snub</em>, the relation runs the other direction — <em>nose</em> (and concavity) is in the definition of <em>snub</em>, since snub just means a concave nose. That is the second mode, the one that catches most students because predicates rarely have their subjects baked into them."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<em>per se primo</em> · <em>per se secundo</em> · <em>per se tertio</em> · <em>per se quarto</em>",
                "feedback": "You've smuggled <em>per se tertio</em> in for <em>Socrates is musical</em>. But the third mode is <em>existential</em> — it names the mode of substance existing in itself rather than in another. <em>Musical</em> is an <em>accident</em> of Socrates; it belongs to him contingently. That is <em>per accidens</em>, not <em>per se tertio</em>."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "<em>per accidens</em> · <em>per se primo</em> · <em>per accidens</em> · <em>per accidens</em>",
                "feedback": "You've treated nearly everything as <em>per accidens</em> — but that is the modern overcorrection. Plenty of predicates connect to their subjects <em>by nature</em>, and the four modes name how. <em>Rational</em> is <em>in the definition of</em> man (first mode). <em>Heat from fire</em> is <em>essentially</em>, not contingently, a feature of fire (fourth mode)."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l4-e3`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>A demonstrative premise can be per accidens.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE — many real arguments use empirical premises that are not strictly necessary, and they still count as demonstration.",
                "feedback": "Slipping from \"real argument\" to \"demonstration\" smudges the distinction this lesson is teaching. <em>Demonstration</em> is a specific kind of argument — one whose premises are necessary, true, and prior. Empirical premises that are merely contingent yield <em>dialectical</em> reasoning, not demonstration. Both are useful; only one produces <em>scientia</em>."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE — demonstration requires premises that hold <em>per se</em>, are necessary, and are prior to the conclusion. A <em>per accidens</em> premise yields, at most, dialectical (probable) reasoning.",
                "feedback": "Right. A demonstrative premise must hold <em>per se</em> — by nature, not by accident. The four modes name the only ways a <em>per se</em> connection can hold, and so the four modes are the only kinds of premise demonstration can use. <em>Per accidens</em> premises produce probable conclusions, not necessary ones."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE — Aquinas explicitly allows <em>per accidens</em> premises in cases where no <em>per se</em> premise is available.",
                "feedback": "You've conflated two things Aquinas keeps apart. He allows <em>dialectical</em> reasoning when strict demonstration is unavailable — but he does not bend the definition of demonstration to fit. Demonstration <em>requires</em> <em>per se</em> premises by definition. Calling a non-demonstrative inference \"demonstration\" loses the term Aquinas spent the <em>Posterior Analytics</em> sharpening."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE — only the first <em>per se</em> mode (predicate in subject's definition) can be a demonstrative premise; the other three modes are about reality, not about argument.",
                "feedback": "Closer to right but too strict. All four <em>per se</em> modes can serve in demonstration. The third (existential) mode shows up when demonstration argues from substance to its proper accidents. The fourth (causal) mode shows up in demonstration <em>quia</em> — arguing from effects to causes. The first and second handle definitional connections. All four are demonstrative material."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m5-l4-e4`,
          type: "mcq",
          stem: `Which of the following is the clearest example of <em>per se tertio modo</em> — the third mode of <em>per se</em> belonging?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `A substance exists in itself rather than in another.`,
              correct: undefined,
              feedback: `Right. The third mode is the ontological one: it names the mode of <em>substance</em> existing in itself (<em>ens per se</em>) rather than in another (<em>ens in alio</em>). This is the same cut you met in Lesson 3's predicaments, lifted up into the grammar of <em>per se</em>.`,
            },
            {
              id: `b`,
              text: `A predicate is part of the definition of its subject.`,
              correct: undefined,
              feedback: `That is the <em>first</em> mode — predicate in subject's definition (animal/man). The third mode is the existential one, naming substance against accident.`,
            },
            {
              id: `c`,
              text: `A subject is part of the definition of its predicate.`,
              correct: undefined,
              feedback: `That is the <em>second</em> mode — subject in predicate's definition (nose/snub). The third mode is something different: it names the mode of substantial existence itself.`,
            },
            {
              id: `d`,
              text: `An effect necessarily proceeds from its cause.`,
              correct: undefined,
              feedback: `That is the <em>fourth</em> mode — effect from cause necessarily (heat/fire). The third mode is ontological: it names the way substance exists <em>in itself</em>, against accidents that exist <em>in another</em>.`,
            }
            ],
          },
        },
        {
          id: `m5-l4-e5`,
          type: "fill_blank",
          stem: `Complete the formula. The fourth <em>per se</em> mode names the mode of effect-from-cause:<br><br><span style="font-family:'Fraunces',serif; font-size:20px; padding:14px 0; display:inline-block;">Effect proceeds from cause  <span class="fb-blank" data-blank="b1">______</span>  <em>per se quarto</em>.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "necessarily",
                  "essentially",
                  "non-accidentally"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "necessarily",
              "frequently",
              "naturally",
              "providentially",
              "essentially",
              "occasionally"
            ],
            "feedback": {
              "all_correct": "Right — <em>necessarily</em> (or <em>essentially</em>) is the operative word. The fourth mode names a causal connection that is <em>not accidental</em>: heat proceeds from fire <em>by fire's very nature</em>, not by happenstance. This is the <em>per se</em> mode demonstration <em>quia</em> uses when arguing from effects back to their causes — including, eventually, the First Cause.",
              "partial_correct": "Reach for <em>necessarily</em> or <em>essentially</em>. <em>Naturally</em> and <em>frequently</em> are too weak — they describe what usually or often happens, not what holds <em>by the very nature</em> of the cause. <em>Providentially</em> mixes in a theological notion not present in this technical use.",
              "fully_wrong": "The word bank has the answer hidden in plain sight. Look for <em>necessarily</em> or <em>essentially</em> — both capture what <em>per se</em> means in this fourth mode. The other words name weaker connections that the fourth mode is precisely <em>not</em>."
            }
          },
        },
        {
          id: `m5-l4-e6`,
          type: "syllogism_builder",
          stem: `Construct a demonstration of <em>"A triangle has interior angles summing to two right angles"</em> using only <em>per se primo</em> premises (premises whose predicate is in the subject's definition). Which of the following constructions is valid?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<em>Major:</em> Every figure with three straight sides has interior angles summing to two right angles. · <em>Minor:</em> A triangle is a figure with three straight sides. · <em>Therefore:</em> A triangle has interior angles summing to two right angles.",
                "feedback": "Right. Both premises are <em>per se primo</em> — each predicate is part of the subject's definition. \"Three straight sides\" is part of what <em>triangle</em> means; \"interior angles summing to two right angles\" follows from that definition by geometric necessity. The conclusion is necessary."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<em>Major:</em> Most triangles I have measured have interior angles summing to about 180°. · <em>Minor:</em> This is a triangle. · <em>Therefore:</em> This triangle has interior angles summing to two right angles.",
                "feedback": "The major premise is empirical and probabilistic — <em>per accidens</em>, not <em>per se</em>. It tells you what is usually the case based on experience, not what holds <em>by the nature</em> of the subject. This is dialectical reasoning, not demonstration."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<em>Major:</em> A triangle is a kind of polygon. · <em>Minor:</em> Polygons have many properties. · <em>Therefore:</em> A triangle has interior angles summing to two right angles.",
                "feedback": "The conclusion does not follow from these premises. \"Polygons have many properties\" is too vague to entail anything specific. Even if both premises are true, no <em>per se</em> connection runs through them to the conclusion. Invalid."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "<em>Major:</em> Every triangle has three angles. · <em>Minor:</em> Three angles sum to two right angles. · <em>Therefore:</em> A triangle has interior angles summing to two right angles.",
                "feedback": "The minor premise is false: three angles in general do <em>not</em> sum to two right angles. The angle sum depends on the figure. Demonstration requires premises that are <em>true</em> as well as <em>per se</em>; this argument fails on the truth requirement."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l4-e7`,
          type: "mcq",
          stem: `Last one. Why do the four <em>per se</em> modes matter for demonstration?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Because demonstration requires premises that hold <em>per se</em>, not merely <em>per accidens</em>. The four modes name the only ways a <em>per se</em> connection can hold.`,
              correct: undefined,
              feedback: `Right. The four modes are the grammar of demonstrative premises. Every demonstrative move belongs to one of them — and recognizing which mode is in play is recognizing why a particular conclusion <em>has to follow</em>. <span class="lat">Per se primo</span>, <span class="lat">secundo</span>, <span class="lat">tertio</span>, <span class="lat">quarto</span>: four shapes of necessary belonging, the four ways an argument can be more than coincidence.`,
            },
            {
              id: `b`,
              text: `Because the four modes determine the strength of a demonstration — first mode is strongest, fourth mode is weakest.`,
              correct: undefined,
              feedback: `You've imposed a strength hierarchy the tradition does not draw. The four modes are coordinate, not ranked. Each names a different way a <em>per se</em> connection can hold; none is "stronger" than another. Demonstration uses whichever mode the content requires.`,
            },
            {
              id: `c`,
              text: `Because Aristotle requires every demonstration to use all four modes simultaneously.`,
              correct: undefined,
              feedback: `You've stacked the four modes as if they were requirements that compound. They are alternatives, not requirements. Each demonstrative premise belongs to <em>one</em> of the four (or, rarely, more than one if the connection is multiply <em>per se</em>). The demonstrator picks among the four; he does not stack them all into a single argument.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m5-l5`,
      num: `V`,
      title: `The Syllogism`,
      latin: `syllogismus · figurae`,
      tag: `syllogismus  ·  figurae`,
      fin: {
        tag: `syllogismus  ·  figurae`,
        heading: `Conclusion follows necessarily — or the argument is something else.`,
        body: `The syllogism is not a box to fill in; it is the form of every valid deductive inference. Three terms, two premises, one conclusion that follows with necessity. The figures are not arbitrary arrangements — each positions the middle term differently, and each generates different valid conclusions. Knowing the figures is knowing how conclusions can and cannot be produced. Lesson 6 asks what it means for that conclusion to count as knowledge.`,
      },
      questions: [
        {
          id: `m5-l5-e1`,
          type: "mcq",
          stem: `Consider the argument:<br><br>· All birds have feathers.<br>· A robin is a bird.<br>· Therefore, a robin has feathers.<br><br>Two premises share a term ("bird") that does not appear in the conclusion. The medieval logicians called that term the <em>middle term</em>, and they classified arguments by where the middle term sits in the two premises. This argument places the middle term as the <em>subject</em> of the major premise and the <em>predicate</em> of the minor. Which figure is this — and what is its name?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `First figure — the most natural form of inference, traditionally called <em>Barbara</em> when both premises and conclusion are universal-affirmative.`,
              correct: undefined,
              feedback: `Right. <em>Barbara</em> — the first figure with three universal-affirmative propositions (mood AAA) — is the canonical valid syllogism. The medievals named the valid moods with mnemonic words whose vowels track the propositions: A (universal affirmative), E (universal negative), I (particular affirmative), O (particular negative). <em>Bar-Ba-Ra</em> = A-A-A. There are 256 possible moods across four figures; only 24 are valid. Barbara is the first.`,
            },
            {
              id: `b`,
              text: `Second figure — the middle term sits as the predicate in both premises.`,
              correct: undefined,
              feedback: `In the second figure the middle would be the predicate in <em>both</em> premises ("All birds have feathers" / "A robin has feathers" — same middle in both predicates). But here the middle ("bird") is the subject of the major premise and the predicate of the minor. That is the first figure.`,
            },
            {
              id: `c`,
              text: `Third figure — the middle term sits as the subject in both premises.`,
              correct: undefined,
              feedback: `In the third figure the middle is the subject of both premises. Here the middle ("bird") shifts position between premises — subject of the major, predicate of the minor. That positional asymmetry is the first figure.`,
            },
            {
              id: `d`,
              text: `Not a syllogism at all — three statements connected by "therefore" do not constitute a formal argument.`,
              correct: undefined,
              feedback: `Three statements connected by "therefore" are exactly what a syllogism is. Two premises and a conclusion, with a shared middle term, is the smallest formal unit of inference. The medievals built an entire technical apparatus around classifying these.`,
            }
            ],
          },
        },
        {
          id: `m5-l5-e2`,
          type: "syllogism_builder",
          stem: `Construct a valid syllogism whose conclusion is: <em>"Some philosophers are mortal."</em><br><br>Which of the following constructions is valid?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<em>Major:</em> All men are mortal. · <em>Minor:</em> Some philosophers are men. · <em>Therefore:</em> Some philosophers are mortal.",
                "feedback": "Right. First figure, mood <em>Darii</em> (A-I-I): universal-affirmative major, particular-affirmative minor, particular-affirmative conclusion. The middle term (\"men\") is distributed in the major (because it is subject of a universal proposition) and undistributed in the minor — but the rule of distribution requires only that the middle be distributed <em>at least once</em> across the premises. Valid."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<em>Major:</em> Some men are mortal. · <em>Minor:</em> Some philosophers are men. · <em>Therefore:</em> Some philosophers are mortal.",
                "feedback": "The middle term (\"men\") is undistributed in <em>both</em> premises (both are particular). The rule is that the middle must be distributed at least once. Without that, the two \"somes\" need not overlap, and the conclusion does not follow — even though, in this case, it happens to be true."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<em>Major:</em> All philosophers are men. · <em>Minor:</em> Some men are mortal. · <em>Therefore:</em> Some philosophers are mortal.",
                "feedback": "The middle term (\"men\") is distributed only in the minor premise — but the major term (\"mortal\") in the conclusion is undistributed there, while in the minor it appears as predicate of a particular proposition (also undistributed). The argument fails the rule that the major term must not be distributed in the conclusion if it is undistributed in the major premise. Or more simply: the inference does not follow."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "<em>Major:</em> All philosophers are wise. · <em>Minor:</em> Some wise beings are mortal. · <em>Therefore:</em> Some philosophers are mortal.",
                "feedback": "The middle term changes between premises — \"philosophers\" is connected to \"wise\" in the major, and \"wise\" is connected to \"mortal\" in the minor — but the chain is not airtight. \"Some wise beings are mortal\" does not entail that any of those wise mortals are philosophers; the philosophers might be among the wise non-mortals (if any). Undistributed middle."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l5-e3`,
          type: "spot_the_fallacy",
          stem: `An argument:<br><br>· All trees are plants.<br>· All roses are plants.<br>· Therefore, all trees are roses.<br><br>The conclusion is obviously absurd; the form is also flawed. What is the formal flaw?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Undistributed middle term. The middle (\"plants\") appears as the predicate of two universal-affirmative propositions, and predicates of universal-affirmatives are not distributed. The premises tell us trees are <em>some</em> of the plants and roses are <em>some</em> of the plants, but not whether the two \"somes\" overlap.",
                "feedback": "Right. This is the classic \"undistributed middle\" diagnosis. Every valid syllogism requires the middle term to be distributed at least once. Here the middle (\"plants\") is the predicate in both premises and undistributed in both — so the two subject-classes (trees, roses) might both be subsets of plants without overlapping each other at all. Same flaw as the politician-saint argument from L1, now in technical clothing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Affirmation of the consequent. The argument confirms a property shared by both groups and infers identity.",
                "feedback": "A different fallacy. <em>Affirming the consequent</em> takes the form \"If P then Q; Q; therefore P.\" This argument has three terms across two premises with the middle term mishandled — that is undistributed middle, not affirming the consequent."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Equivocation on \"plants.\" The word means different things in the two premises — botanical category in the first, gardening object in the second.",
                "feedback": "Equivocation requires the same word to shift meaning across the argument. \"Plants\" here means the same botanical category in both premises. The flaw is structural distribution, not semantic shift."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No flaw — the argument is valid; only the conclusion is empirically false because trees and roses happen to be different.",
                "feedback": "The conclusion being absurd is a clue, not the flaw itself. The flaw is in the <em>form</em>: the middle term is undistributed in both premises, so the inference is invalid. Even if you replaced the terms — \"All A are C, all B are C, therefore all A are B\" — it would still be invalid."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l5-e4`,
          type: "spot_the_fallacy",
          stem: `Another argument:<br><br>· If a man is a Dominican, he is a Catholic.<br>· This man is a Catholic.<br>· Therefore, this man is a Dominican.<br><br>The conclusion does not follow. What is the formal flaw?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Affirmation of the consequent. The argument has the form \"If P then Q; Q; therefore P\" — confirming the consequent and inferring back to the antecedent. Many things can make a man Catholic; being Dominican is only one.",
                "feedback": "Right. <em>Affirmation of the consequent</em>: from \"If P then Q\" and \"Q,\" nothing follows about P. Catholics include Dominicans, Franciscans, Jesuits, diocesan priests, lay faithful — being Catholic doesn't entail being Dominican. The valid form going the other direction is <em>modus ponens</em>: \"If P then Q; P; therefore Q.\" Reverse the direction and the form fails."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Undistributed middle. \"Catholic\" appears as predicate in both premises and is undistributed in both.",
                "feedback": "A different fallacy. Undistributed middle applies to categorical syllogisms (subject-predicate form). This argument is conditional (\"If P then Q\") plus a confirmation, and the flaw is in how the conditional is used — affirming the consequent."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Denial of the antecedent. The argument denies the antecedent (\"Dominican\") and infers the negation of the consequent.",
                "feedback": "Denial of the antecedent has the form \"If P then Q; not P; therefore not Q.\" This argument doesn't deny the antecedent — it <em>affirms the consequent</em> and infers the antecedent. Reverse direction."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No flaw — the argument is sound. Dominicans are Catholics, and the conclusion follows.",
                "feedback": "The first premise is true and the second premise might well be true. But the conclusion does not <em>follow</em> from these premises. From \"If P then Q\" you cannot conclude P from Q alone; many other things could make Q true. Truth and validity are different — that is the L1 lesson, in formal clothing here."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l5-e5`,
          type: "sequence",
          stem: `A categorical syllogism has three propositions arranged in a canonical order. Which sequence is correct?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Major premise → minor premise → conclusion.",
                "feedback": "Right. The major premise (containing the major term — the predicate of the conclusion) comes first; the minor premise (containing the minor term — the subject of the conclusion) comes second; the conclusion follows. The middle term appears in both premises but not in the conclusion. This canonical order is what lets you read off the figure of a syllogism by inspection."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Conclusion → major premise → minor premise.",
                "feedback": "Putting the conclusion first reads naturally in some kinds of explanation (\"Socrates is mortal — because all men are mortal, and he is a man\"), but it is not the canonical form. The standard order moves from premises to conclusion, in the sequence the inference actually runs."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Minor premise → major premise → conclusion.",
                "feedback": "Reversed on the premises. The major premise — containing the major term, which becomes the predicate of the conclusion — comes first by convention. Putting the minor first does not invalidate the argument, but it does break the canonical order that makes the figure inspectable."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Major premise → conclusion → minor premise.",
                "feedback": "Premises always precede conclusion in the canonical order. Putting the conclusion in the middle obscures the inference; readers cannot tell what is asserted as a starting point and what is inferred from it."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l5-e6`,
          type: "mcq",
          stem: `Last one. Which of the following best states the rule that valid categorical syllogisms must obey concerning the middle term?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The middle term must be distributed in at least one of the two premises.`,
              correct: undefined,
              feedback: `Right. A term is "distributed" when the proposition refers to <em>all</em> of what the term covers. Subjects of universal propositions are distributed; predicates of negative propositions are distributed; predicates of affirmative propositions are not. If the middle is undistributed in both premises, the two subjects share only "some" of the middle and the inference fails. This is the single most-violated rule in invalid syllogisms — once you can spot undistributed middle, half of formal-logic teaching is done.`,
            },
            {
              id: `b`,
              text: `The middle term must appear in the conclusion of the syllogism.`,
              correct: undefined,
              feedback: `The opposite: the middle term must <em>not</em> appear in the conclusion. The middle is the term that connects the two premises and drops out of the conclusion. If it appeared in the conclusion, the conclusion would have four terms — and a syllogism has exactly three.`,
            },
            {
              id: `c`,
              text: `The middle term must be a noun (not an adjective or a verb phrase).`,
              correct: undefined,
              feedback: `You've imposed a grammatical restriction the rule does not impose. The middle can be any term — noun, adjective, predicate phrase — as long as it appears in both premises with the same meaning. Logic governs the form of inference, not the parts of speech.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m5-l6`,
      num: `VI`,
      title: `Demonstration: Propter Quid and Quia`,
      latin: `demonstratio · propter quid · quia`,
      tag: `demonstratio  ·  propter quid  ·  quia`,
      fin: {
        tag: `demonstratio  ·  propter quid  ·  quia`,
        heading: `There are two ways to prove something — and only one of them explains it.`,
        body: `<em>Demonstratio propter quid</em> proceeds from cause to effect and produces the highest form of knowledge: you know not only that something is so but why it must be. <em>Demonstratio quia</em> proceeds from effect to cause — it establishes the fact but not the reason. Most of what passes for argument in ordinary life is <em>quia</em> at best. The capstone asks whether first principles can be demonstrated at all.`,
      },
      questions: [
        {
          id: `m5-l6-e1`,
          type: "close_reading",
          stem: `<blockquote style="margin: 14px 0 18px; padding: 14px 18px; border-left: 3px solid var(--gold); background: color-mix(in oklab, var(--canvas) 40%, transparent); font-family: 'Fraunces', serif; font-style: italic; font-size: 15px; line-height: 1.55; color: var(--ink-soft);"><p style="margin: 0 0 10px;">Demonstration is twofold: One, which is through the cause, and is called <em>propter quid</em>, and this is to argue from what is prior absolutely. The other is through the effect, and is called a demonstration <em>quia</em>; this is to argue from what is prior relatively only to us. When an effect is better known to us than its cause, from the effect we proceed to the knowledge of the cause...</p><p style="margin: 0;">...The existence of God, in so far as it is not self-evident to us, can be demonstrated from those of His effects which are known to us.</p><div style="margin-top:10px; font-size: 11px; font-style: normal; color: var(--ink-faint); letter-spacing: 0.5px;">— Aquinas, <em>Summa Theologiae</em> I, q. 2, a. 2, <em>respondeo</em>. English Dominican Province trans. Selections.</div></blockquote>Hold the two names — <em>propter quid</em> ("because of which" — through the cause) and <em>quia</em> ("that" — through the effect). Which best captures Aquinas's point?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Demonstration <em>propter quid</em> argues from cause to effect (showing <em>why</em>); demonstration <em>quia</em> argues from effect to cause (showing <em>that</em>). Both are real demonstrations; they differ in direction, not in rigor.",
                "feedback": "Right. <em>Propter quid</em> (\"because of which\") moves from prior cause to posterior effect — the deepest form, since it shows the reason a thing is what it is. <em>Quia</em> (\"that\") moves from posterior effect to prior cause — establishing <em>that</em> the cause exists without grasping its essence. The Five Ways that follow this very article are demonstrations <em>quia</em>: from motion, contingency, etc., they argue back to a First Cause whose existence they establish."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Demonstration <em>propter quid</em> is the only real demonstration; <em>quia</em> is dialectical reasoning that approximates demonstration without being one.",
                "feedback": "You've assimilated <em>quia</em> to dialectic, but Aquinas is explicit that both are demonstrations. <em>Quia</em> is not dialectical (probable) reasoning; it produces certainty about <em>that</em> the cause exists, even if not about <em>why</em>. The Five Ways depend on this distinction: they are demonstrations, not arguments to probability."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Demonstration <em>quia</em> argues from cause to effect; demonstration <em>propter quid</em> argues from effect to cause. The Latin terms describe the direction of the argument from the cause's point of view.",
                "feedback": "Reversed. <em>Propter quid</em> means \"because of which\" — through the cause, so cause-to-effect. <em>Quia</em> means \"that\" — through the effect, so effect-to-cause. The Latin grammar tracks the <em>logical direction</em> of the inference, not the cause's point of view."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "God's existence cannot be demonstrated at all, only believed by faith. The article you just read defends this position.",
                "feedback": "The opposite of what the article defends. ST I q. 2 a. 2 specifically argues that God's existence <em>can</em> be demonstrated <em>quia</em> — from effects to their cause. The Five Ways in the next article (a. 3) are exactly such demonstrations. Aquinas distinguishes faith and reason but does not subordinate one to the other in this article."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l6-e2`,
          type: "distinction_application",
          stem: `For each inference, identify whether it is <em>propter quid</em> (cause to effect) or <em>quia</em> (effect to cause).<br><br>· The bridge is wet because it has just rained.<br>· It must have rained, because the bridge is wet.<br>· The triangle's angles sum to 180° because of the definition of triangle.<br>· There must be a first cause, because we observe motion.<br><br>Which mapping is correct, in order?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<em>propter quid</em> · <em>quia</em> · <em>propter quid</em> · <em>quia</em>",
                "feedback": "Right. The first goes from cause (rain) to effect (wet bridge): <em>propter quid</em>. The second reverses — from effect (wet) to cause (rain): <em>quia</em>. The third goes from definitional cause (the triangle's nature) to its property (180°): <em>propter quid</em>. The fourth — Aquinas's First Way in miniature — goes from observed effect (motion) to inferred cause (a first mover): <em>quia</em>. Notice the symmetry between cases 1–2 (same content, opposite directions) and cases 3–4 (same logical shape, different domains)."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<em>quia</em> · <em>propter quid</em> · <em>propter quid</em> · <em>quia</em>",
                "feedback": "You've flipped the rain/bridge pair. \"Bridge is wet because of the rain\" goes from cause to effect — that is <em>propter quid</em>. \"It rained because the bridge is wet\" reverses — using the effect as evidence for the cause — that is <em>quia</em>. The other two you have right."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<em>propter quid</em> · <em>quia</em> · <em>quia</em> · <em>propter quid</em>",
                "feedback": "You have the rain/bridge pair right but flipped the geometric and theological cases. \"The triangle has 180° because of its definition\" goes from cause (definition) to property — <em>propter quid</em>. \"There must be a first cause because of motion\" goes from effect (motion) to cause (first mover) — <em>quia</em>. Both cases share the same logical shape as the rain pair."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l6-e3`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>A demonstration "quia" is weaker than a demonstration "propter quid" — at most, it produces probable belief rather than scientific knowledge.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE — <em>quia</em> argues from effects to causes, and effects underdetermine their causes; the inference is therefore probable rather than necessary.",
                "feedback": "You've treated <em>quia</em> as if it were inductive generalization. It is not. A demonstration <em>quia</em> proceeds from a known effect to a cause that necessarily produced it — when the effect can only be produced by such a cause, the inference to the cause is necessary, not probable. The Five Ways argue in this form: motion necessarily implies an unmoved mover; contingency necessarily implies a necessary being."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE — both are genuine demonstrations producing <em>scientia</em>. <em>Propter quid</em> is more perfect because it shows the cause through the cause itself; <em>quia</em> is no less <em>certain</em>, only less complete in showing why.",
                "feedback": "Right. Both produce certainty. The difference is qualitative, not quantitative: <em>propter quid</em> shows the cause as cause (gives the why); <em>quia</em> establishes the cause from its effects (gives the that). When the effect can only be produced by one kind of cause, the <em>quia</em> inference is just as necessary as <em>propter quid</em> — but does not penetrate to the cause's essence. The Five Ways are this kind of argument."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE — <em>quia</em> arguments are useful in apologetics but cannot ground philosophical certainty about their conclusions.",
                "feedback": "You've adopted a popular modern position that Aquinas and the strict-line tradition both deny. <em>Quia</em> arguments do ground philosophical certainty about <em>that</em> the cause exists — they just don't penetrate to <em>why</em>. The First Way is not \"useful in apologetics\"; it is a demonstration in the strict sense, producing <em>scientia</em>."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE — <em>quia</em> is actually <em>stronger</em> than <em>propter quid</em>, because it begins from what is more known to us (effects in our experience).",
                "feedback": "You've confused \"more known to us\" with \"stronger.\" <em>Quia</em> begins from effects more known to us — but that does not make the demonstration <em>stronger</em>. <em>Propter quid</em> is more perfect because it begins from what is prior <em>absolutely</em> (the cause), which is what reality is. The order of knowing differs from the order of being. Aquinas honors both, ranking <em>propter quid</em> as more complete without dismissing <em>quia</em>."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m5-l6-e4`,
          type: "syllogism_builder",
          stem: `Reconstruct the First Way (the argument from motion) as a demonstration <em>quia</em>. Which of the following constructions captures Aquinas's argument?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<em>Major:</em> Whatever is moved is moved by another. · <em>Minor:</em> Some things are in motion. · <em>Therefore:</em> there is a first mover, itself unmoved (since an infinite regress of moved movers cannot ground the motion we observe).",
                "feedback": "Right. The major premise is the principle of causality applied to motion (a <em>per se</em> principle, holding by the very nature of motion). The minor premise is empirical — we observe motion. The bridge to \"first\" is the regress argument: an infinite chain of moved movers leaves the original motion unexplained, since each member receives its motion from another. Therefore there must be an unmoved mover. This is <em>quia</em> — from observed effect (motion) to its necessary cause (first mover)."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<em>Major:</em> God exists and causes all things. · <em>Minor:</em> Some things are in motion. · <em>Therefore:</em> God is the cause of motion.",
                "feedback": "Circular. The First Way aims to <em>establish</em> God's existence; if God's existence is in the major premise, the conclusion is already assumed. The whole point of demonstration <em>quia</em> is to argue from observed effects to a cause whose existence we did not yet know."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<em>Major:</em> Most things in motion are moved by other things. · <em>Minor:</em> Some things are in motion. · <em>Therefore:</em> probably there is a first mover.",
                "feedback": "\"Most\" and \"probably\" make this dialectical, not demonstrative. The First Way uses a <em>per se</em> major premise — \"whatever is moved is moved by another\" — which holds necessarily, by the nature of motion (potency-to-act requires an actualizing cause). Probabilistic premises yield probabilistic conclusions; necessary premises yield necessary ones."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "<em>Major:</em> Whatever is moved is moved by another. · <em>Minor:</em> God moves some things. · <em>Therefore:</em> things that move have God as their first cause.",
                "feedback": "Like option (b), this assumes God in the minor premise. The First Way works <em>without</em> presupposing God in either premise; it argues to God from observable effects (motion) plus the principle of causality. That is what makes it a demonstration <em>quia</em>."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l6-e5`,
          type: "mcq",
          stem: `What is required of demonstrative premises that is not required of dialectical premises?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Demonstrative premises must be necessary, true, and prior to (more knowable than) the conclusion.`,
              correct: undefined,
              feedback: `Right. Aristotle's <em>Posterior Analytics</em> I.2 lays this down: the premises of demonstration must be (1) <em>true</em> — corresponding to reality; (2) <em>necessary</em> — they could not be otherwise (this is where the four <em>per se</em> modes from Lesson 4 do their work); and (3) <em>prior</em> — more knowable than the conclusion, both absolutely (in the order of being) and to us (in the order of knowing). Dialectical premises only need to be probable or accepted by the wise; they yield probable conclusions, not <em>scientia</em>.`,
            },
            {
              id: `b`,
              text: `Demonstrative premises must be empirically verifiable through observation or measurement.`,
              correct: undefined,
              feedback: `A modern intrusion. Empirical verifiability is one source of premises — and many demonstrations use empirical premises (the First Way begins with observed motion). But the requirement is <em>necessity, truth, and priority</em>, not empirical verifiability per se. Geometric demonstrations rely on premises that are not empirical at all (definitions, axioms) and still produce <em>scientia</em>.`,
            },
            {
              id: `c`,
              text: `Demonstrative premises must be accepted by all reasonable people upon first hearing them.`,
              correct: undefined,
              feedback: `Universal acceptance is dialectical, not demonstrative. Many demonstrative premises require careful explanation before they are even understood — and once understood, are accepted because of their <em>per se</em> connection, not because of consensus. <em>Scientia</em> is grounded in reality, not in popularity.`,
            }
            ],
          },
        },
        {
          id: `m5-l6-e6`,
          type: "mcq",
          stem: `Last one. Which axiom best captures the structure of demonstration?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `A demonstration is a syllogism whose premises are necessary, true, and prior — its conclusion produces certain knowledge of a thing through its proper causes.`,
              correct: undefined,
              feedback: `Right. The medieval formulation: <em>demonstratio est syllogismus faciens scire</em> — demonstration is a syllogism producing scientific knowledge. <em>Scientia</em> in the strict sense is knowledge through proper causes; demonstration is what produces it. <em>Propter quid</em> is the more perfect form because it argues from the cause itself; <em>quia</em> argues from effects to their necessary causes. Both are demonstrations; both produce certainty.`,
            },
            {
              id: `b`,
              text: `A demonstration is any logically valid argument; if the form is valid, the argument is demonstrative.`,
              correct: undefined,
              feedback: `Validity is a necessary condition but not sufficient. A valid syllogism with false premises is still valid; it is not a demonstration because it does not produce knowledge. Demonstration requires premises that are <em>true</em>, <em>necessary</em>, and <em>prior</em> — not merely a valid form.`,
            },
            {
              id: `c`,
              text: `A demonstration is any argument that convinces the audience of its conclusion.`,
              correct: undefined,
              feedback: `You've conflated demonstration with rhetoric. Rhetoric persuades; dialectic argues from probable premises; demonstration produces knowledge from necessary premises. The Aristotelian-Thomistic tradition keeps these three apart sharply.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m5-l7`,
      num: `VII`,
      title: `Capstone — First Principles`,
      latin: `principia · primorum · contradictionis`,
      tag: `principia  ·  primorum  ·  contradictionis`,
      fin: {
        tag: `principia  ·  primorum  ·  contradictionis`,
        heading: `Module 5 complete.`,
        body: `Logic is the art of arts because it is the instrument of every other science. The syllogism, the five predicables, the ten predicaments, the <em>per se</em> modes, demonstration <em>propter quid</em> and <em>quia</em> — these are the working parts. The principle of non-contradiction is not one instrument among others; it is the ground on which all of them stand. Module 12 puts the whole apparatus to work.`,
      },
      questions: [
        {
          id: `m5-l7-e1`,
          type: "close_reading",
          stem: `<blockquote style="margin: 14px 0 18px; padding: 14px 18px; border-left: 3px solid var(--gold); background: color-mix(in oklab, var(--canvas) 40%, transparent); font-family: 'Fraunces', serif; font-style: italic; font-size: 15px; line-height: 1.55; color: var(--ink-soft);"><p style="margin: 0 0 10px;">The same thing cannot at the same time and in the same respect both be and not be. This is the firmest of all principles — it cannot be demonstrated, since every demonstration presupposes it; and yet it cannot be denied without absurdity, since the very act of denying it is itself an act of asserting and not denying.</p><p style="margin: 0;">It is therefore <em>per se notum</em> — known immediately, by anyone who understands the terms. The principle of non-contradiction is what makes argument possible at all.</p><div style="margin-top:10px; font-size: 11px; font-style: normal; color: var(--ink-faint); letter-spacing: 0.5px;">— after Aquinas, <em>In Metaphysica</em>, Lib. IV, lect. 5–6 [paraphrase; verbatim Larcher / Rowan trans. queued for ship]</div></blockquote>Why does Aquinas hold that the principle of non-contradiction (PNC) cannot be demonstrated?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because every demonstration presupposes PNC. To demonstrate it would require principles, and any principle of inference at all already uses PNC. So PNC is known immediately (<em>per se notum</em>) — not demonstrated.",
                "feedback": "Right. PNC is the first and firmest principle precisely because nothing is prior to it. Every demonstration uses inference; every inference uses the move \"P, therefore Q\" which presupposes that P cannot be both true and false. To demonstrate PNC, we would need to use it. Aquinas calls such principles <em>per se nota</em> — known by anyone who understands the terms, without further argument. PNC is the highest of these."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because PNC is too obvious — everyone agrees with it, so demonstration is unnecessary.",
                "feedback": "Universal agreement is incidental, not the reason. Aquinas's point is structural: PNC <em>cannot</em> be demonstrated because demonstration presupposes it. Even if every person on earth disputed PNC, the fact would remain that disputing it requires using it. <em>Per se notum</em> is not \"everyone agrees\"; it is \"presupposed by all reasoning.\""
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because PNC is uncertain — it might be false in some logical systems (such as paraconsistent logics), and so cannot be the basis of demonstration.",
                "feedback": "A modern objection that Aquinas would deny. Paraconsistent logics modify the inference rules but in doing so create different formal systems with different semantics — they do not actually permit p and not-p simultaneously in the same respect. Aquinas's PNC is restricted to \"at the same time and in the same respect\"; that condition is what the modern alternatives also need to keep in some form. The principle is firm."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because PNC is a matter of faith, not reason, and so falls outside the scope of philosophical demonstration.",
                "feedback": "PNC is the most natural of all principles — known by everyone who understands the terms, regardless of religious belief. It is not an article of faith but a principle of <em>natural reason</em>, the highest of the <em>prima principia</em>. Aquinas treats it as the firmest principle of metaphysics, available to philosophers without revelation."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l7-e2`,
          type: "match_pair",
          stem: `Six first principles of demonstration. Match each to its formula.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "principle of non-contradiction"
              },
              {
                "id": "L2",
                "text": "principle of identity"
              },
              {
                "id": "L3",
                "text": "principle of excluded middle"
              },
              {
                "id": "L4",
                "text": "principle of sufficient reason"
              },
              {
                "id": "L5",
                "text": "principle of finality"
              },
              {
                "id": "L6",
                "text": "principle of causality"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "The same thing cannot at the same time and in the same respect both be and not be."
              },
              {
                "id": "R2",
                "text": "Whatever is, is what it is."
              },
              {
                "id": "R3",
                "text": "Of any two contradictory propositions, one is true and the other false; there is no middle."
              },
              {
                "id": "R4",
                "text": "Whatever is has a reason for its being — either in itself or in another."
              },
              {
                "id": "R5",
                "text": "Every agent acts for an end."
              },
              {
                "id": "R6",
                "text": "Whatever comes to be has a cause."
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
              "all_correct": "All six locked. These are the bedrock of demonstration — the principles every argument ultimately rests on. Notice how PNC and excluded middle are related but distinct: PNC says a thing cannot both be and not-be; excluded middle says one of \"is\" or \"is-not\" must hold. Sufficient reason and causality are also related: causality is what sufficient reason looks like for contingent beings. Hold these six; they are the floor.",
              "partial_correct": "Some pairs landed; some did not. The two most-confused pairs in this set are PNC / excluded middle (both about being and non-being, but different cuts) and sufficient reason / causality (PSR is broader; PC is its application to contingent beings). Read the corrections below.",
              "per_pair_corrections": [
                {
                  "left_id": "L1",
                  "wrong_right_id": "R3",
                  "feedback": "PNC says a thing <em>cannot both</em> be and not-be (in the same respect, at the same time). Excluded middle says <em>one or the other must hold</em> — there is no third option. PNC closes off both sides being true; excluded middle closes off neither side being true."
                },
                {
                  "left_id": "L3",
                  "wrong_right_id": "R1",
                  "feedback": "Same swap from the other direction. Excluded middle is about whether <em>at least one</em> of two contradictories holds; PNC is about whether <em>both</em> can hold (it says they cannot)."
                },
                {
                  "left_id": "L4",
                  "wrong_right_id": "R6",
                  "feedback": "PSR is broader than PC. PSR says <em>everything has a reason</em> — including necessary beings, whose reason is in themselves (<em>self-explaining</em>). PC says contingent beings have a <em>cause</em> — an external explanation. PSR is the genus; PC is one species of it, applied to contingent things."
                },
                {
                  "left_id": "L6",
                  "wrong_right_id": "R4",
                  "feedback": "Same swap from the other direction. PC is narrower — it applies only to what comes-to-be (contingent beings). PSR applies to all that is."
                }
              ]
            }
          },
        },
        {
          id: `m5-l7-e3`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>The principle of sufficient reason and the principle of causality are the same principle, named twice.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE — both say everything must have a cause; the difference is verbal.",
                "feedback": "You've treated them as synonyms, but the tradition distinguishes them. PSR says everything has a <em>reason</em> — its reason might be in itself (necessary beings) or in another (contingent beings). PC says contingent beings have a <em>cause</em>. PSR is broader — it covers necessary beings, whose reason is internal. PC is the application of PSR to what comes-to-be."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE — PSR is broader. PSR says everything has a reason for its being, in itself or in another. PC says specifically that whatever <em>comes to be</em> has a cause. PC is one species of PSR.",
                "feedback": "Right. The relation: PSR + the existence of contingent beings → PC. A necessary being's \"sufficient reason\" is internal — its essence includes existence. A contingent being's sufficient reason must be external — that external reason is its cause. PC is the form PSR takes when applied to what comes-to-be. The Five Ways exploit this distinction: motion, contingency, etc., are features of <em>contingent</em> being, and so call for an external cause."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE — PC is broader. PSR is just an abstract restatement of what we already know from causal experience.",
                "feedback": "Reversed. PC is narrower because it applies only to contingent beings (those that come-to-be). PSR is broader because it covers <em>all</em> beings, including necessary ones. The relation runs from PSR (genus) to PC (species), not the other way."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "TRUE — PSR is a modern (Leibnizian) reformulation of PC, and the medieval tradition uses only PC.",
                "feedback": "Historically off. The substance of PSR is present throughout the medieval tradition, even if Leibniz gave it the most explicit modern formulation. Aquinas works with the principle that everything has a reason for its being — necessary beings have it internally, contingent beings externally. The distinction PSR / PC is not Leibniz vs. medievals; it is genus / species within the tradition."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m5-l7-e4`,
          type: "spot_the_fallacy",
          stem: `Consider this argument:<br><br>· I deny the principle of non-contradiction.<br>· Therefore I am not contradicting myself by denying it.<br><br>What is the formal flaw?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Performative contradiction. To deny PNC is to assert one proposition and deny its contradictory (\"PNC is false; PNC is not true\") — which is the very move PNC underwrites. The denial uses what it tries to refute.",
                "feedback": "Right. The denier is making a claim (\"PNC is false\") and treating its negation (\"PNC is true\") as ruled out by the assertion — which is exactly what PNC says any assertion does. The denier <em>uses</em> PNC even as they deny it. Aristotle's formulation in <em>Metaphysics</em> IV: anyone who tries to argue against PNC must use it, and so refutes themselves the moment they begin. Not a fallacy in the usual syllogistic sense; a fallacy at the level of the speech act itself."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No flaw — denying PNC is just an opinion, no different from any other philosophical position.",
                "feedback": "You've adopted the relativist stance, but PNC is not \"one opinion among many.\" It is the principle that makes opinions <em>be</em> opinions in the first place — the principle that distinguishes asserting from not-asserting. To deny it is to make an assertion that presupposes it. The denial is not a position; it is a self-undermining utterance."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Undistributed middle term. The middle (\"contradiction\") is undistributed in both premises.",
                "feedback": "A different fallacy entirely. The argument here is not a categorical syllogism. The flaw is at the level of the speech act: the denial of PNC undermines itself <em>in being uttered</em>, since the utterance itself uses PNC. Performative contradiction, not undistributed middle."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Affirmation of the consequent. The argument confirms the consequent of \"If PNC is true then I cannot deny it\" and infers the antecedent.",
                "feedback": "Not the structure here. The argument is not \"If P then Q; Q; therefore P.\" It is a direct denial of PNC plus a claim that the denial is non-self-contradictory — which fails because the denial <em>uses</em> PNC. The flaw is performative, not formal."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l7-e5`,
          type: "distinction_application",
          stem: `For each statement, identify which first principle is most directly at stake.<br><br>· "A thing cannot both be and not be at the same time and in the same respect."<br>· "There is a reason this universe exists rather than nothing."<br>· "Every agent acts for some end."<br>· "Either it is raining or it is not raining (with no third possibility)."<br>· "Every effect has a cause."<br><br>Which mapping is correct, in order?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "PNC · sufficient reason · finality · excluded middle · causality",
                "feedback": "Right. The first names PNC directly. The second invokes PSR — \"there is a reason\" is exactly the PSR claim, applied here to the universe as a whole. The third is the principle of finality — every agent acts for an end. The fourth is excluded middle — exactly two options, no third. The fifth is causality. Notice that PNC and excluded middle are easy to confuse; the cleanest test is whether the claim is about <em>both</em> sides (PNC: both cannot hold) or <em>one or the other</em> (excluded middle: one must hold)."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "excluded middle · sufficient reason · finality · PNC · causality",
                "feedback": "You've flipped PNC and excluded middle. The first statement says \"cannot both\" — that is PNC closing off both being true at once. The fourth says \"either or, no third\" — that is excluded middle, requiring at least one. Different cuts."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "PNC · causality · finality · excluded middle · sufficient reason",
                "feedback": "You've swapped sufficient reason and causality. \"There is a reason this universe exists\" is PSR — a reason might be a cause, but the claim here is about <em>reason</em> generically. \"Every effect has a cause\" is PC specifically. PSR is the broader genus; PC is the species applied to contingent beings."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l7-e6`,
          type: "syllogism_builder",
          stem: `Construct a demonstration <em>quia</em> for the existence of a necessary being, using the principle of sufficient reason as the major premise. Which construction succeeds?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<em>Major:</em> Whatever is contingent has the reason for its being in another (PSR applied to contingent beings). · <em>Minor:</em> There are contingent beings. · <em>Bridge:</em> An infinite regress of contingent beings does not constitute a sufficient reason for any of them. · <em>Therefore:</em> there exists a non-contingent (necessary) being on which contingent beings depend.",
                "feedback": "Right. This is the structure of Aquinas's Third Way (the argument from contingency). The major is PSR specified for contingent beings — they cannot be self-explaining, so their reason must be in another. The minor is empirical — we observe contingent beings (things that come-to-be and pass away). The regress argument shows that an infinite chain of contingent beings is itself contingent and so requires its own external reason. The conclusion is a necessary being. Pure demonstration <em>quia</em>: from observed effects (contingent beings) to inferred cause (a necessary being)."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<em>Major:</em> God exists necessarily. · <em>Minor:</em> The universe is contingent. · <em>Therefore:</em> God is the necessary cause of the contingent universe.",
                "feedback": "Circular. The major premise asserts what the conclusion is supposed to establish. A demonstration <em>quia</em> argues from observed effects to the existence of a cause whose existence we did not previously know. Smuggling \"God exists necessarily\" into the major premise defeats the whole project."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<em>Major:</em> Most things have causes. · <em>Minor:</em> The universe is a thing. · <em>Therefore:</em> the universe probably has a cause.",
                "feedback": "\"Most\" and \"probably\" make this dialectical, not demonstrative. PSR is a <em>per se</em> principle — it holds necessarily, by what it means to <em>be</em> a contingent thing. The demonstration <em>quia</em> uses necessary premises to reach a necessary conclusion; probabilistic premises only yield probable conclusions."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "<em>Major:</em> Whatever is contingent has the reason for its being in another. · <em>Minor:</em> There are necessary beings. · <em>Therefore:</em> contingent beings have a cause.",
                "feedback": "The minor premise smuggles in necessary beings — which is what the argument should <em>establish</em>, not assume. The construction also doesn't use the contingency-regress that would force the existence of a necessary being. Try the option that begins with empirically observed contingency and argues to a necessary being from it."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l7-e7`,
          type: "mcq",
          stem: `Last one. After Module 5, you can do which of the following that you could not do before?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Take a Thomistic argument, identify its syllogistic structure, locate its <em>per se</em> premises, check its validity, and recognize when an objection denies a first principle rather than refutes an argument.`,
              correct: undefined,
              feedback: `Right. The whole module has been training this capacity — first the predicables and predicaments to know what kinds of terms appear in arguments, then the four <em>per se</em> modes to know what kinds of premises hold, then the syllogism to check validity, then demonstration to know when an inference produces <em>scientia</em>, and finally the first principles to know when an objection has stepped outside argument as such. Module 5 complete. The instrument is now in your hand. <em>Distinguo.</em>`,
            },
            {
              id: `b`,
              text: `Recite the Five Ways from memory and explain each step of Aquinas's arguments for God's existence.`,
              correct: undefined,
              feedback: `A worthy goal, but Module 5 is about the <em>tools</em> of reasoning, not specific arguments for God. The Five Ways draw on the tools you now have (especially the principles of motion, causality, contingency), and you can now identify <em>which</em> kind of demonstration each of them is (all <em>quia</em>), but the arguments themselves are not the content of Module 5.`,
            },
            {
              id: `c`,
              text: `Translate Aquinas's commentaries from Latin into English and write Aristotelian commentaries of your own.`,
              correct: undefined,
              feedback: `Module 5 is a logic course, not a Latin or composition course. The skills it gives you are technical-logical: spotting fallacies, identifying figures, recognizing when premises are <em>per se</em>, knowing when an opponent has denied a first principle. Translation and composition are separate disciplines.`,
            }
            ],
          },
        }
      ],
    }
  ],
};
