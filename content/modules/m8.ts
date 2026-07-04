import type { ModuleMeta } from '../types';

export const m8: ModuleMeta = {
  id: 8,
  title: `The Four Causes`,
  short: `The Four Causes`,
  label: `Module 8 · The Four Causes`,
  latin: `De Quattuor Causis`,
  aim: `To explain a thing completely is to give four irreducible answers: what it is made of (material), what makes it the kind it is (formal), what brought it about (efficient), and what it is for (final). The four compose one explanation. Chance is a cause only per accidens, and presupposes the per se order it interrupts.`,
  lessons: [
    {
      id: `m8-l1`,
      num: `I`,
      title: `Four Whys Return`,
      latin: `causa`,
      tag: `causa`,
      fin: {
        tag: `causa`,
        heading: `The statue again, and the four questions it has been waiting to answer.`,
        body: `Bronze, figure, sculptor, commission: of-what, what-makes-it-this, who-brought-it-about, what-for. The tradition names them <span class="lat">causa materialis</span>, <span class="lat">formalis</span>, <span class="lat">efficiens</span>, <span class="lat">finalis</span>. They are not four rival theories of the statue. They are four irreducible answers that compose one act of understanding, and Aquinas derives their number with a necessity that will carry the rest of the module.`,
      },
      questions: [
        {
          id: `m8-l1-q1`,
          type: "mcq",
          stem: `A bronze statue stands in the square. Why is it? Four honest answers: the bronze; the figure of the founder; the sculptor; to honor the city's founder. The tradition ranks these as what?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "One real cause, the sculptor, plus three ways of describing his work.",
                "feedback": "Ask the sculptor: he did not supply the bronze's weight, and the commission moved him before he moved anything. His hands are one of the four answers, not the source of the other three."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Four causes: four irreducible kinds of answer to why.",
                "feedback": "Respondeo: material, formal, efficient, final. Each answers a question the others cannot touch, and only together do they finish explaining one statue. That irreducibility is the module's spine."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A historical list, superseded by better explanations since.",
                "feedback": "Try to retire any one of them and it reappears in your replacement: every account of the statue still says what it is made of, what it is, who made it, and what it is for. Lists that cannot be escaped are not superseded."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Four stages: first bronze, then shape, then sculptor, then purpose.",
                "feedback": "The commission came first in time and the figure last, so the stages are out of order before you start. The four are aspects of one explanation, not beats in a story."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m8-l1-q2`,
          type: "mcq",
          stem: `Someone offers a complete account of the statue: full chemistry of the bronze, complete biography of the sculptor. What is missing, and does it matter?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing important: matter plus maker exhausts the statue.",
                "feedback": "Then the same bronze and the same man could not have produced a door knocker instead, yet they could have. What the thing IS and what it is FOR slipped through the account untouched."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The price is missing, and prices matter in city squares.",
                "feedback": "The price rides on the commission, which is the final cause wearing its municipal clothes. Name the end and the account gains what mattered about the price; name the price alone and you still lack two causes."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Form and end are missing, and without them the explanation cannot close.",
                "feedback": "Respondeo: chemistry and biography give of-what and by-whom. Until you say what the thing is and what it is for, you have described ingredients and labor without explaining a statue. Two causes short is incomplete, not economical."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Only the form is missing; ends are decorative.",
                "feedback": "Ask why the sculptor lifted a chisel at all and the decorative end turns out to be the first mover of the whole affair. Nothing happens for the sake of nothing; the fourth answer holds its seat."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m8-l1-q3`,
          type: "mcq",
          stem: `Aquinas derives the count. A thing's existence considered absolutely is by its form. But this thing came to be from potency, and you know from Act and Potency what mere potency cannot do. Why must there be an agent?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because whatever is in potency is reduced to act only by something in act.",
                "feedback": "Respondeo: Module 2's principle, now conscripted to count causes. The bronze could not pour itself; nothing gives what it does not have. Matter and form demand a third cause, and the derivation is half done."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because experience shows makers wherever we look.",
                "feedback": "Experience suggests; the derivation demands. Aquinas is not polling cases but proving that a becoming without an agent would be potency lifting itself, which you already know to refuse."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because matter is evil and needs rescue by an agent.",
                "feedback": "Matter took that slander from the Manicheans, never from this tradition: it is good potency, honorably employed. The agent is required by act and potency, not by a rescue mission."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because forms are too abstract to do anything.",
                "feedback": "The form of the living thing will turn out to do a great deal; abstract is not the complaint. The point is narrower: what is coming to be cannot be what brings it to be. Someone in act must act."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m8-l1-q4`,
          type: "mcq",
          stem: `The derivation's last step. The agent acts, Aquinas says, toward something determinate, for every agent does that which is suitable to it. What does that determinacy prove?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That agents are unfree, locked to single outcomes.",
                "feedback": "Determinate means directed, not enslaved; the sculptor freely aims at this figure rather than none. Freedom chooses among ends. It does not act without one, which is the point being proved."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That the four causes are really one cause in disguise.",
                "feedback": "The derivation multiplies causes; it does not merge them. The end explains the agent's direction without doing the agent's pushing or the matter's receiving. Four remain four."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That some fifth cause may yet be discovered.",
                "feedback": "The derivation closes the count: existence absolutely (form), becoming (matter and agent), the agent's direction (end). Each seat is filled by necessity, and no question about the thing remains unaddressed. Therefore, Aquinas concludes, there must be four."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That there must be a final cause: that toward which the action tends.",
                "feedback": "Respondeo: an agent acting toward nothing determinate would do nothing determinate, and everything does something determinate. The end completes the count: therefore, there must be four causes, and no fifth question left to ask."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m8-l1-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "The four causes are four competing explanations, and a good thinker picks the strongest."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Explanations compete; that is what explanations are for.",
                "feedback": "Rival explanations answer the same question differently. These four answer four different questions. The bronze does not contradict the sculptor; nothing here is competing for anything."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Modern practice proves it: science picked the material cause and won.",
                "feedback": "What modern method did with the ends is Lesson 4's story, and it is more interesting than a victory. Even now, no chemistry of bronze has ever explained why a statue stands in the square."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The four compose one explanation; dropping any leaves a remainder unexplained.",
                "feedback": "Respondeo: four questions, four answers, one act of understanding. Pick only the strongest and three honest questions go begging. Composition, not competition, is the doctrine."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. There is nothing to pick, since the causes are indistinguishable.",
                "feedback": "Perfectly distinguishable: the bronze is not the sculptor and the figure is not the commission. Distinct and cooperative is the whole charm of the doctrine."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m8-l1-q6`,
          type: "mcq",
          stem: `Two of the four causes are inside the statue; two stand outside it. Sort them.`,
          latin_tag: `causa`,
          doctrine_line: `Four questions, four causes, one complete explanation. Nothing less counts as understanding a thing.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Matter and form within; agent and end without.",
                "feedback": "Respondeo: the bronze and the figure are the statue's own constitution: intrinsic causes. The sculptor and the commission stand outside what they explain: extrinsic causes. The next two lessons take one pair each."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Matter and agent within; form and end without.",
                "feedback": "The sculptor went home years ago; nothing of him is a constituent of the bronze he left behind. And the figure is not outside the statue anywhere: it is exactly what the statue is."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "All four within: causes must touch what they cause.",
                "feedback": "The commission never touched anything and moved the entire affair. Causes must be responsible for what they cause; residence inside the effect is required only of the two that constitute it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "All four without: explanation always stands outside the explained.",
                "feedback": "Then the statue would be constituted by nothing, which is a hard way to stand in a square. The bronze and the figure are the thing itself, doing explanatory work from within."
              }
            ],
            "correct_option_id": "a"
          },
        },
      ],
    },
    {
      id: `m8-l2`,
      num: `II`,
      title: `The Inner Pair`,
      latin: `materia  ·  forma`,
      tag: `materia  ·  forma`,
      fin: {
        tag: `materia  ·  forma`,
        heading: `What the cake is made of, and what makes it a cake and not batter.`,
        body: `The intrinsic pair: <span class="lat">causa materialis</span>, that out of which, and <span class="lat">causa formalis</span>, the form by which the thing is what it is. You met them in Hylomorphism as principles of being; here they return as principles of explanation. Same flour and eggs, batter or cake: the difference is never in the ingredients. And the form that most repays attention is not a silhouette but the one that makes living things alive.`,
      },
      questions: [
        {
          id: `m8-l2-q1`,
          type: "mcq",
          stem: `A cake on the counter. Someone asks why it is as it is, and you answer: flour, eggs, butter, sugar. Which cause have you given?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The formal cause: the recipe is the form.",
                "feedback": "You listed ingredients, not the recipe. The recipe is closer to form: it says what arrangement makes cake out of these. The bare list answers only the out-of-which question."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The material cause: that out of which the thing is.",
                "feedback": "Respondeo: the of-what answer, honest and incomplete. The same list sits in the bowl as batter, so the list alone never explains cake. What it is made of: one cause down, three to go."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The efficient cause: ingredients make the cake.",
                "feedback": "Ingredients never made anything; ask the bowl of batter that waited all day. The baker and the oven do the making. Flour is what gets made INTO, which is another cause entirely."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No cause at all: lists explain nothing.",
                "feedback": "Too severe. The of-what question is real: marble statues and bronze ones age differently, and cakes without eggs collapse. Matter explains truly; it just cannot explain alone."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m8-l2-q2`,
          type: "mcq",
          stem: `Same ingredients at noon and at four: batter, then cake. Nothing was added but heat and time. What does the difference between batter and cake consist in?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing real: cake is batter under a new name.",
                "feedback": "Serve batter at the birthday and report back. The difference resists renaming because it is in the thing: a new stable constitution, not a new label."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "New matter: heat is an ingredient like flour.",
                "feedback": "Heat is not IN the cake the way flour is; it came and went, leaving a difference behind. What it left is precisely what needs naming, and ingredient is not its name."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Our expectations: we treat it differently after four o'clock.",
                "feedback": "The treatment follows the transformation; fondant on batter fools no one. Expectations track the form or get embarrassed by it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The form: the same matter now stands under a new constitution.",
                "feedback": "Respondeo: the formal cause, that by which this stuff is cake and not batter. Hylomorphism taught you the vocabulary; here it earns its explanatory keep. Of-what stayed constant while what-it-is changed."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m8-l2-q3`,
          type: "fill_blank",
          stem: `Fix the inner pair in place. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The <span class="fb-blank" data-blank="b1">______</span> cause is that out of which a thing is; the <span class="fb-blank" data-blank="b2">______</span> cause is that by which it is what it is. Because both constitute the thing from within, the tradition calls them the <span class="fb-blank" data-blank="b3">______</span> causes.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "material",
                  "materialis"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "formal",
                  "formalis"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "intrinsic",
                  "intrinsecae"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "material",
              "formal",
              "intrinsic",
              "extrinsic",
              "efficient",
              "final",
              "instrumental",
              "accidental"
            ],
            "feedback": {
              "all_correct": "Locked. Matter and form, the constituting pair, explaining from inside the thing they compose. The other two causes explain from without, and the next lessons belong to them.",
              "partial_correct": "Some blanks resisted. Anchor on the prepositions: out of which is matter, by which it is what it is is form, and what constitutes from within is intrinsic. The grammar carries the metaphysics."
            }
          },
        },
        {
          id: `m8-l2-q4`,
          type: "mcq",
          stem: `The bronze is the statue's material cause. But bronze is no bare stuff: it is itself a composite, copper and tin under a metallic form, a whole being in its own right. Is that a contradiction?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: a true material cause would have to be formless.",
                "feedback": "Only prime matter is pure potency, and nothing you can point to is prime matter bare. Every workable material is already formed. If material cause required formlessness, nothing would ever have been made of anything."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, and it shows the four-cause scheme breaking down.",
                "feedback": "The scheme is doing the opposite of breaking: it is scaling. Every level of composition repeats the same analysis, which is what a good instrument does when reality is layered."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No: material cause is a relative title, held toward this composite.",
                "feedback": "Respondeo: bronze is matter TO the statue while being a formed composite in itself, as flour is matter to the cake and a triumph of wheat in its own right. Cause-of names a relation, not a rank in being."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No, because bronze is an exception the tradition tolerates.",
                "feedback": "Not an exception: the rule itself. Every material cause you will ever meet is a formed something serving as the out-of-which for something else. Tolerance is not needed where the case is universal."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m8-l2-q5`,
          type: "mcq",
          stem: `A living sparrow. Its formal cause is not its silhouette. What is the form of a living thing?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Its DNA: the molecular blueprint that specifies it.",
                "feedback": "The best wrong answer of the module. DNA is a molecule: magnificent matter, used instrumentally in the sparrow's self-building. A blueprint is consulted; a form is lived. What reads and executes the blueprint?"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Its soul: the substantial form by which this matter is alive as a sparrow.",
                "feedback": "Respondeo: anima, the form of the living, making these molecules one flying, feeding, singing being rather than a well-arranged corpse. The word soul here is technical, not sentimental. Module 9 gives it a full hearing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Its parents: sparrows come from sparrows.",
                "feedback": "True, and efficiently so: the parents are the agents of its becoming. But they are outside it, raising their brood; the form is inside, running the show from within. Extrinsic origin, intrinsic constitution."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Its shape: the sparrow outline a child could draw.",
                "feedback": "The child's outline fits the taxidermied sparrow perfectly, and that bird is not what needs explaining. Shape is the form's shallowest export. What makes the LIVING difference lies deeper than any drawing."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m8-l2-q6`,
          type: "true_false_with_reason",
          stem: `A confident voice: "Science explains things by their smallest parts. Therefore the material cause is the only real one; the rest is bookkeeping." True or false?`,
          latin_tag: `materia  ·  forma`,
          doctrine_line: `The material cause is that out of which; the formal cause is that by which a thing is what it is. Together they are the thing.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Reduction to parts is what explanation means now.",
                "feedback": "Then batter and cake, made of identical parts, would be identically explained, and your birthday guests know better. The parts-story is true and cannot even distinguish the two things it is offered for."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The other three causes were retired with alchemy.",
                "feedback": "Read any biology paper: is FOR pumping, functions AS a signal, develops INTO the wing. The other causes were not retired; they were smuggled back in working clothes. Lesson 4 files the full report."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Parts answer of-what; they leave what-it-is, whence, and what-for standing.",
                "feedback": "Respondeo: reduction perfects one of the four answers and touches no other. The micro-story of bronze is glorious and explains no statue. Honor the material cause; refuse its coup."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Small parts explain nothing whatever.",
                "feedback": "Overcorrection: the of-what question is real, and chemistry answers it with precision the ancients would have envied. The error was never in the answer but in the ONLY."
              }
            ],
            "correct_option_id": "c"
          },
        },
      ],
    },
    {
      id: `m8-l3`,
      num: `III`,
      title: `The Maker and the Tool`,
      latin: `causa efficiens  ·  instrumentalis`,
      tag: `causa efficiens  ·  instrumentalis`,
      fin: {
        tag: `causa efficiens  ·  instrumentalis`,
        heading: `The sculptor and the chisel; the prompt-giver and the AI.`,
        body: `The efficient cause divides into principal and instrumental: <span class="lat">causa principalis</span>, acting by its own power, and <span class="lat">causa instrumentalis</span>, acting by the power of another while contributing its own mode. The chisel really cuts, and the cutting is the sculptor's act. This course is itself the case: drafted by an artificial instrument, moved and judged by the humans it serves. The tradition had the analysis ready seven centuries early.`,
      },
      questions: [
        {
          id: `m8-l3-q1`,
          type: "mcq",
          stem: `The sculptor carves with a chisel. An honest bystander asks: which of them is cutting the marble?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Both truly, but unequally: the chisel cuts by the sculptor's power.",
                "feedback": "Respondeo: deny the chisel and you wonder why he bought one; deny the sculptor and you wait forever for the chisel to start. One act, two causes, ordered: principal and instrument. The order is the doctrine."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The sculptor alone: the chisel is where cutting happens, not a cause.",
                "feedback": "Ask him to manage the cut with his fingernails and the chisel's causal contribution stops being deniable. The edge does something real. The task is to say what, without crowning it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The chisel alone: only what touches the marble cuts it.",
                "feedback": "By that rule the sculptor never sculpted anything, and museums are full of the works of unaccompanied hardware. Contact is not causality's whole story; the power moving through the contact is."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither: the marble shapes itself along its own grain.",
                "feedback": "The grain resists and suggests: a fact about the material cause. Left alone with its grain, the block ages into a rounder block. Something else made it a founder on horseback."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m8-l3-q2`,
          type: "mcq",
          stem: `Two chisels, one flat and one toothed, in the same master's hand: two different textures in the stone. The instrument acts by the principal's power. What does the instrument contribute?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Its own mode: the effect bears the tool's manner and the master's act.",
                "feedback": "Respondeo: the texture is the chisel's signature inside the sculptor's act. Instruments are not indifferent pipes; power passes through them and takes their shape. Remember this when the instrument is stranger than a chisel."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The whole effect: power just activates what the tool would do anyway.",
                "feedback": "What the tool would do anyway is rest quietly in the roll. Its manner of acting is its own; its acting at all belongs to the mover. Keep the two gifts distinct and the doctrine stays standing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing: contribution would make it a principal.",
                "feedback": "Then the two chisels would leave one texture, and the toolmaker's trade would be a hoax. The instrument's own nature really modifies the effect; that is why masters are particular about their tools."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Resistance only: tools slow their masters down.",
                "feedback": "A tool that merely resisted would be a defect, not an instrument. The toothed chisel positively enables a texture no hand could manage bare. Instruments extend; the good ones extend far."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m8-l3-q3`,
          type: "distinction_application",
          stem: `The case is this course. A human directed it; an artificial intelligence drafted these very questions; editors judged and corrected them. Four causal readings of the lesson before you. Which one parses it rightly?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The AI is the principal cause: it produced the words, and words are the work.",
                "feedback": "The chisel touched the marble last, and the statue is still the sculptor's. Production-of-surface never settles principality; origination of the act does. What moved the drafting to happen at all?"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The AI is an instrumental cause, moved by its prompt-givers, leaving its own mode in the result.",
                "feedback": "Respondeo: it acts by the power and toward the end of those who direct and judge it, and like the toothed chisel it leaves its manner in the grain of the prose. The tradition parsed this machine before the machine existed."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "There is no efficient cause: the course emerged from the process as weather does.",
                "feedback": "The weather serves no commission and misses no deadlines. A process aimed, corrected, and judged throughout is an agent's act with instruments inside it, however fashionably emergence talks."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The humans are instruments of the AI, which needed hands to reach the world.",
                "feedback": "Instruments are moved toward another's end. Here every end in play, formation of learners in an old tradition, is a human end the machine does not have. The direction of use runs one way, whatever the marketing implies."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m8-l3-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "If the tool genuinely shapes the result, the tool must share the maker's intention."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Shaping is intending; unintentional shaping is mere accident.",
                "feedback": "The toothed chisel shapes texture with total reliability and has never intended anything in its life. Contribution of mode and possession of purpose come apart cleanly, and the doctrine holds them apart on purpose."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Otherwise makers could disown their works by blaming tools.",
                "feedback": "The doctrine blocks the disowning by itself: the instrument's act IS the principal's act, mode and all. He chose the toothed chisel; its texture is his signature at one remove."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The instrument contributes its mode; intention resides in the principal alone.",
                "feedback": "Respondeo: the chisel gives the how, the sculptor the that and the what-for. Mode without intention is exactly what an instrument is. The distinction scales from the workbench to machines that draft prose, and it settles who answers for the work."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Nothing shapes anything; results follow matter's whims.",
                "feedback": "Matter has tendencies, not whims, and they explain why marble is not pudding, never why this marble became a founder. The shaping is real and the account of it needs both causes on duty."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m8-l3-q5`,
          type: "mcq",
          stem: `From Act and Potency you remember the hand, the staff, and the stone: a series ordered per se. Prompt moves AI moves text; hand moves chisel moves marble. What is the mark of such a series?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It runs backward in time, effects preceding causes.",
                "feedback": "Nothing runs backward: the marks of a per se series are simultaneity and dependence, the whole chain acting at once, every link borrowing now. The staff moves while the hand moves, not after."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Each member acts only as moved by the prior; stop the first and all stop.",
                "feedback": "Respondeo: instrumental chains are per se ordered series of agents. The chisel cuts only while the hand drives it; the drafting engine drafts only while directed. Every such chain hangs from a first mover that acts by its own power."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It can regress without end, each tool moved by an earlier tool.",
                "feedback": "Tools all the way down means borrowed power with no lender, and Module 2 closed that account. Somewhere stands an agent whose act is his own; instruments are the argument's staff and stone."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Its members are interchangeable, any link serving as first.",
                "feedback": "Promote the chisel to first mover and wait. Order is of the series' essence: the power descends and does not ascend, which is why the first is called principal and the rest are called instruments."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m8-l3-q6`,
          type: "mcq",
          stem: `Logic gave you the qualifier discipline: true in a respect, false without qualification. Apply it: "The machine wrote this course."`,
          latin_tag: `causa efficiens  ·  instrumentalis`,
          doctrine_line: `The instrument acts by the principal's power and leaves its own mark. The chisel really cuts, and the cut is the sculptor's.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "True simply: the machine produced the sentences.",
                "feedback": "Simply would leave no one responsible for the doctrine in the sentences, and someone is: the ones who aimed, corrected, and shipped them. The surface is the machine's mode; the act has an owner."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "False simply: machines produce nothing.",
                "feedback": "Overshoot: real instrumental causality is production in a true respect, or the chisel never cut either. Deny the machine's contribution and you cannot explain the prose's grain. Deny well, with the qualifier."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "True as of an instrument; false as of a principal.",
                "feedback": "Respondeo: secundum quid it wrote, as the chisel carved; simpliciter the work belongs to those whose power and purpose moved it. One distinction, and a modern confusion folds its tent."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Meaningless: wrote cannot take a machine as subject.",
                "feedback": "Language survives the sentence fine; the meaning is what needs sorting. The tradition sorts rather than bans: predicates stretch across instruments honestly once the respect is named."
              }
            ],
            "correct_option_id": "c"
          },
        },
      ],
    },
    {
      id: `m8-l4`,
      num: `IV`,
      title: `The Banned Cause`,
      latin: `causa finalis`,
      tag: `causa finalis`,
      fin: {
        tag: `causa finalis`,
        heading: `The cause they banned keeps signing its own extradition papers.`,
        body: `<span class="lat">Causa finalis</span>: that for the sake of which. Early modern method ruled it out of natural science, and the ban was never a disproof, only a bracket. The bracket leaks: for pumping, in order to attract, selected for. The tradition also hands you a finer blade: <span class="lat">finis operis</span>, the work's own end, against <span class="lat">finis operantis</span>, the end of the one working. The hammer was made to drive nails; today it propped a window open. Both ends are real, and telling them apart will matter enormously in ethics.`,
      },
      questions: [
        {
          id: `m8-l4-q1`,
          type: "mcq",
          stem: `Every physiology textbook says it: the heart is for pumping blood. Is that for a real explanation or a habit of speech awaiting cleanup?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A habit: mature science will restate it without the for.",
                "feedback": "The restatements keep arriving and keep smuggling: functions to circulate, evolved because circulation aids survival. Every because-it-helps is a for in working clothes. The cleanup crew keeps billing and never finishes."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A metaphor borrowed from human tools, harmless if unexamined.",
                "feedback": "Backwards, says the tradition: hearts had their directedness before hammers copied it. Art imitates nature's ordination to ends, not the reverse. The metaphor charge borrows what it tries to lend."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A real explanation: the pumping is that for the sake of which the heart is.",
                "feedback": "Respondeo: the final cause, doing in biology what it has always done. Remove it and the heart becomes a lump that happens to squeeze; no anatomy course can be taught about that lump. The fourth answer explains, or nothing does."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A theological intrusion that has no place in a lab report.",
                "feedback": "The claim is about the organ, not its Maker; Aristotle held it with no Genesis in reach. Whether ends ultimately require a mind is a further question, for a later module. That hearts serve circulation is lab-grade fact."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m8-l4-q2`,
          type: "mcq",
          stem: `The tradition's fine blade. A hammer, made to drive nails, spends today propping a window open. Name the two ends in play.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Finis operis: driving nails. Finis operantis: holding the window.",
                "feedback": "Respondeo: the work's own end, built into what the hammer is, and the end of the one using it this afternoon. The hammer never stopped being for nails while serving the window. Two ends, both real, cleanly stacked."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Finis operis: holding the window. Finis operantis: driving nails.",
                "feedback": "Swapped. The opus, the work itself, is a nail-driver by constitution; the window duty came from the operans, the user with a stuffy room. Pin operis to what the thing IS and the pair stops sliding."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "There is one end: whatever the current user wants.",
                "feedback": "Then no one could ever misuse anything, and a violin bow poking a fire would be violin-bowing at its finest. The work's own end survives the user's projects; that survival is what misuse measures."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "There is one end: the maker's original intention, forever.",
                "feedback": "The maker's intention explains why the hammer has the end it has; but the end now sits in the work itself, and users add ends of their own daily. One source, then two bearers."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m8-l4-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "Modern science disproved final causes."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Physics found only pushes and pulls, so ends were refuted.",
                "feedback": "Finding only what your method admits is not refuting the rest; a metal detector never disproved driftwood. The ban was a methodological decision, brilliant and voluntary, and decisions are not proofs."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Darwin replaced ends with selection, closing the question.",
                "feedback": "Read the formula: selected FOR camouflage, advantage, fitness. Selection-talk is saturated with the very for it was hired to replace. What Darwin explained is how ends get served across generations, not how to do without them."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Method bracketed ends, then borrowed them back nightly.",
                "feedback": "Respondeo: the founders of the method excluded final causes from natural inquiry by policy, and working science reimports them in every function, in order to, and for. A bracket that must be violated to do biology was never a disproof."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Science proved final causes and modern scientists hide it.",
                "feedback": "No conspiracy is needed and none occurred: the borrowing happens in the open, in every journal. The tradition's claim is quieter: the practice of science presupposes ends while the official story omits them."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m8-l4-q4`,
          type: "spot_the_fallacy",
          stem: `A confident paragraph: "Evolution designs nothing and intends nothing. The eye simply arose because seeing helps survival, and what helps survival gets kept. Purpose-talk is therefore childish." Something has been smuggled. Find it.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The word arose: eyes develop, they do not arise.",
                "feedback": "A quibble of vocabulary, not a smuggle. Arose serves honestly enough for a long natural history. The contraband is riding in a different clause, dressed as innocence."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The phrase helps survival: help is for-the-sake-of talk, the very thing being banished.",
                "feedback": "Respondeo: caught at the border. Helps, aids, advantage, gets kept: each names a good toward which, which is final causality under an assumed name. The paragraph refutes purpose by purposing. The eye is for seeing even in the sentence that denies it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The claim that evolution intends nothing: secretly, it must intend.",
                "feedback": "Grant the paragraph its premise: no intending mind inside the process. That is not the smuggle; the tradition itself distinguishes ends from intentions of the agent. The contraband is smaller and closer than a cosmic mind."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The word childish: name-calling is the whole error.",
                "feedback": "Rhetoric, and cheap, but paragraphs survive their manners. Strike the insult and the argument still smuggles finality in its central clause. Find the clause that cannot say itself without a for."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m8-l4-q5`,
          type: "mcq",
          stem: `Last module you learned that the good has the aspect of an end. Suppose the ban on final causes had actually succeeded, everywhere, forever. Which transcendental loses its footing in nature?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Verum: without ends, nothing is intelligible.",
                "feedback": "Intelligibility would limp but not fall: forms and quantities would still offer themselves to mind. The casualty is more specific: the transcendental whose very definition mentions appetite's term."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Unum: without ends, nothing holds together.",
                "feedback": "Undividedness rides on form, and forms would remain. The wound lands where desire's object lives: strike that-for-the-sake-of-which from nature and ask what natural goodness could still mean."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Res: without ends, essences evaporate.",
                "feedback": "Essences would persist, though truncated: whats without what-fors, natures with their inclinations struck off. The name that goes dark outright is the one convertible with the end itself."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Bonum: the good just is being as end; no ends in nature, no natural good.",
                "feedback": "Respondeo: bonum and finis are one reality under two names, and a successful ban would have deleted both. Water could no longer be good FOR anything; medicine and ecology would be measuring nothing. The ban failed because the good is real."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m8-l4-q6`,
          type: "mcq",
          stem: `The tradition crowns it causa causarum, the cause of causes. The commission moved the sculptor before his chisel moved anything, yet the honor came last in execution. In what order does the final cause work?`,
          latin_tag: `causa finalis`,
          doctrine_line: `Modern method bracketed the final cause and has borrowed it back ever since. The heart is for pumping, and biology cannot stop saying so.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "First in intention, last in execution.",
                "feedback": "Respondeo: the end moves the agent to act at all, so it reigns first in the order of intention; it arrives finished only when the work does, last in execution. The other causes labor; the end is why any of them clocked in."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Last in intention, first in execution.",
                "feedback": "Inverted at both ends: nothing about the statue existed before the honor was intended, and the honor stood complete only at the unveiling. Run the crown the other way."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Outside both orders, as a spectator of the work.",
                "feedback": "Some spectator: it hired the agent, chose the matter, and specified the form. The end is the least idle item in the whole affair; its way of working is just prior to the pushing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "In both orders at once, first and last simultaneously.",
                "feedback": "Almost, but the orders must stay distinct or the formula dissolves into paradox. In intention: first. In execution: last. Two orders, one end, no simultaneity required."
              }
            ],
            "correct_option_id": "a"
          },
        },
      ],
    },
    {
      id: `m8-l5`,
      num: `V`,
      title: `One Event, Four Answers`,
      latin: `casus  ·  per accidens`,
      tag: `casus  ·  per accidens`,
      fin: {
        tag: `casus  ·  per accidens`,
        heading: `The man dug for planting and struck treasure.`,
        body: `One crash, four true answers; one lucky spade, and the tradition's calm verdict: fortune is a per accidens cause of things which are for the sake of something. Chance is real and derivative: it happens where lines of genuine purpose cross unplanned. A world with no per se order toward ends could not even manage an accident. Luck is purpose's shadow, and shadows prove the light.`,
      },
      questions: [
        {
          id: `m8-l5-q1`,
          type: "mcq",
          stem: `A car crash at dawn: the road was iced, the driver was texting, the car was built light for speed, and he was racing to make a meeting. Four true statements. Which one names the efficient cause of the crash?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The ice on the road: conditions make crashes.",
                "feedback": "The ice is the matter's contribution: a disposed surface, ready to betray. Conditions receive and enable; they do not act. A hundred cars crossed that ice while their drivers watched the road."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The driver texting: an agent misdirecting his act.",
                "feedback": "Respondeo: the crash's whence is the man driving, and driving badly. Agents act; his act, deprived of the attention it owed, brought the collision about. The other three statements answer other questions, truly."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The car's light build: design determines outcomes.",
                "feedback": "The build is formal: what the car is explains how it crashes, spinning where a heavier form would slide. Form shapes the event's character; it did not steer into it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The meeting: no meeting, no crash.",
                "feedback": "The end explains why he was on the road at that hour and hurrying: final causality in full view. But ends move agents to act; the acting that went wrong was at the wheel."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m8-l5-q2`,
          type: "distinction_application",
          stem: `Same crash, four analysts. Which analyst is giving the FORMAL cause its due?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "\"Black ice: the road surface never gave the tires a chance.\"",
                "feedback": "The material contribution again: the disposed stuff of the event. True, needed, and not the what-it-was of this crash but the out-of-which it happened."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "\"A high-speed spin-out: that is what a light rear-drive car does when traction goes.\"",
                "feedback": "Respondeo: the analyst named the crash's form: the kind of event it was, flowing from the kind of thing the car is. Not who, not from-what, not what-for: the intelligible character of the event itself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "\"Distraction: a man was operating two machines and mastered neither.\"",
                "feedback": "A fine diagnosis of the efficient cause in its defect: the agent acting short of his act's demands. The character of the resulting event is a different analyst's brief."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "\"Hurry: the meeting made the morning reckless.\"",
                "feedback": "The final cause, honestly named: the end that set the whole morning in motion. What kind of event resulted, spin rather than slide, belongs to the form."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m8-l5-q3`,
          type: "mcq",
          stem: `The old story: a man digs his field to plant vines and strikes buried treasure. Aquinas rules: fortune is a per accidens cause of things which are for the sake of something. What makes the find per accidens?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Its rarity: frequent finds would be per se.",
                "feedback": "Rarity is the symptom, not the essence. Daily treasure would suggest a salted field, but one find is already per accidens for a better reason: nothing in the digging-for-vines aimed at coins. Frequency follows; it does not define."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Its value: windfalls are accidents by definition.",
                "feedback": "Had he struck a worthless old boot, the structure would be identical: an outcome outside the aim of the act that produced it. Fortune's definition never mentions the price of what turns up."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The outcome fell outside the end his act was per se aimed at.",
                "feedback": "Respondeo: the digging was for vines, per se; the treasure rode in on someone else's old purpose, the burying, and the two lines crossed unplanned. Fortune is the crossing of per se orders: a real cause, per accidens."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing: causes are never per accidens; luck is pure illusion.",
                "feedback": "The tradition is more precise than the debunker: the find truly had causes, digger and burier both, and truly was not aimed at by either. Per accidens names that exact status without illusion on either side."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m8-l5-q4`,
          type: "mcq",
          stem: `Push the analysis one step: could there be chance in a world with no purposes at all, no acts for the sake of anything?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: such a world would be nothing but chance.",
                "feedback": "Say what any event would be a deviation FROM. All-chance is like all-counterfeit: the concept lives off what it is contrasted with, and spends nothing once the contrast is gone."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No: chance is a crossing of per se orders, and there would be none to cross.",
                "feedback": "Respondeo: the treasure-find needed two real aims, planting and hiding, meeting unplanned. Delete all aims and events merely follow one another, neither according to purpose nor beside it. Chance is parasitic on the very order it seems to mock."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes, though it would be rarer without purposes to interrupt.",
                "feedback": "Rarer misses the dependence: not less chance but no candidate for the title. Beside-the-aim requires an aim the way beside-the-road requires a road, at any frequency whatever."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No, because everything is secretly planned and chance never occurs.",
                "feedback": "Overshoot in the pious direction: the tradition affirms real chance at the level of crossing causes, whatever providence sees from above. The claim here is structural: no per se order, no per accidens exception."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m8-l5-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "Since evolution runs on random mutation, nature has no final causes."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Randomness at the bottom cancels purpose at every level.",
                "feedback": "The digger's spade-strike was random too, respecting coins; the vineyard was still for wine. Chance events inside a process leave the process's ends standing. Bottom-level randomness cancels nothing above it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Biology only keeps teleological grammar for convenience.",
                "feedback": "A convenience no one can decline is called a necessity. The grammar persists because organs really serve functions: strike the FOR from for pumping and the science, not the style, is what stops working."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Chance presupposes per se order, so random mutation cannot abolish ends.",
                "feedback": "Respondeo: mutations are per accidens events within organisms whose parts and acts are saturated with for-the-sake-of; selection itself is measured against what serves the living being. The randomness rides on the purposes, distinguo, and the ban fails again."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Mutations are not random; each is aimed by nature at improvement.",
                "feedback": "The tradition needs no such claim and the evidence is against it: mutations are genuinely per accidens respecting the organism's good. Real chance below, real ends above: both, distinctly, is the Thomist answer."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m8-l5-q6`,
          type: "mcq",
          stem: `When is the explanation of a thing complete?`,
          latin_tag: `casus  ·  per accidens`,
          doctrine_line: `The causes compose, and chance is a cause only per accidens: real, but a parasite on purpose.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "When its smallest parts are enumerated exhaustively.",
                "feedback": "Exhaustive parts perfect one answer of four. The commentary tradition counts causes, not particles: all those things which are called causes fall into four classes, and completeness means all four heard from."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "When prediction of its behavior succeeds reliably.",
                "feedback": "Prediction can ride a good correlation while every why goes unanswered; astronomers predicted eclipses for centuries on models they knew were false. Command of consequences is not completeness of causes."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "When no one in the room has further questions.",
                "feedback": "Rooms tire before reality does. The four questions stand whether or not anyone asks them; completeness is measured against the causes, not the audience."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "When all four causes have answered: of what, what, whence, what for.",
                "feedback": "Respondeo: the classes of causes are four, and an explanation closes when each has spoken. Matter without form is a list; both without agency is a miracle; all three without an end is a shrug. Four answers, one understanding: the module's whole doctrine."
              }
            ],
            "correct_option_id": "d"
          },
        },
      ],
    },
    {
      id: `m8-l6`,
      num: `VI`,
      title: `Recapitulatio`,
      latin: `quattuor causae`,
      tag: `quattuor causae`,
      fin: {
        tag: `quattuor causae`,
        heading: `The statue, the cake, the chisel, the heart, the lucky spade.`,
        body: `Four causes, held together: matter and form constituting from within, agent and end explaining from without, instruments carrying their master's power with their own signature, chance riding per accidens on the purposes it interrupts. Two doors stand open. Behind one, the soul: the substantial form of the living, where the formal cause becomes the most interesting thing in the world. Behind the other, already visited: the good, which you now know by its working name, the end.`,
      },
      questions: [
        {
          id: `m8-l6-q1`,
          type: "match_pair",
          stem: `The four, one last time. Match each cause to its question.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "<span class=\"lat\">causa materialis</span>"
              },
              {
                "id": "L2",
                "text": "<span class=\"lat\">causa formalis</span>"
              },
              {
                "id": "L3",
                "text": "<span class=\"lat\">causa efficiens</span>"
              },
              {
                "id": "L4",
                "text": "<span class=\"lat\">causa finalis</span>"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "out of what is it?"
              },
              {
                "id": "R2",
                "text": "what makes it the kind it is?"
              },
              {
                "id": "R3",
                "text": "from whence did it come about?"
              },
              {
                "id": "R4",
                "text": "for the sake of what is it?"
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
              "all_correct": "All four locked: the complete kit for explaining anything whatever. Aristotle built it, Aquinas commented it into precision, and nothing in seven centuries has managed to retire a single seat.",
              "partial_correct": "Some pairs slipped. Run the statue through them: bronze, figure, sculptor, commission. The example is ancient because it never fails."
            }
          },
        },
        {
          id: `m8-l6-q2`,
          type: "mcq",
          stem: `The module through its images. Which image taught the instrumental cause?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The chisel, cutting by the sculptor's power with its own signature.",
                "feedback": "Respondeo: the toothed edge leaving its mode inside the master's act, and a certain drafting engine parsed by the same doctrine. Principal and instrument: one act, two causes, ordered."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The cake that the batter became at four o'clock.",
                "feedback": "That taught the inner pair: same matter, new form. The instrument lesson had an edge on it, and a master holding the edge."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The heart that biology cannot stop calling for pumping.",
                "feedback": "That was the banned cause surviving its own ban: finality in a lab coat. The instrument was hardware of a different shop."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The spade that struck treasure while digging for vines.",
                "feedback": "That taught chance: two purposes crossing unplanned, per accidens. The instrumental lesson was about power descending a chain, not luck crossing it."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m8-l6-q3`,
          type: "mcq",
          stem: `Sort with confidence: which pair explains the statue from within, and which from without?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Within: agent and matter. Without: form and end.",
                "feedback": "The sculptor is long gone from the bronze: nothing of him constitutes it. And the figure is nowhere but in it. One swap each way restores the doctrine."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Within: form and end. Without: matter and agent.",
                "feedback": "Matter is the least external thing imaginable: the statue is bronze through and through. And the commission never moved in. Form joins matter inside; agent joins end outside."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Within: all but the end, which alone stands outside.",
                "feedback": "The sculptor stands outside too: efficient causality is exercised on the marble, not resident in it. Two in, two out, symmetrical and tidy."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Within: matter and form. Without: agent and end.",
                "feedback": "Respondeo: the intrinsic pair are the statue, bronze under figure; the extrinsic pair explain it from outside, maker and purpose. Intrinsic and extrinsic: the module's first sorting, now owned."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m8-l6-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "The four causes are four stages: first the matter, then the form arrives, then the agent acts, then the end appears."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Explanation follows time, and time runs in stages.",
                "feedback": "Check the statue's clock: the end came first (the commission), the agent second, and matter and form crossed the finish line together at the last chisel stroke. The stages theory cannot even keep its own order."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE, except the end, which comes first as intended.",
                "feedback": "One repair admits the whole problem: these are not stages needing a schedule but aspects needing distinction. First in intention, last in execution already broke the timeline model beyond patching."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The four are simultaneous aspects of one explanation, not beats in a story.",
                "feedback": "Respondeo: while the statue stands, all four causes are answering at once: bronze now, figure now, sculptor's completed act now, honor now. Composition, not chronology. The doctrine in one sentence."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Only two causes exist, so four stages is doubly wrong.",
                "feedback": "The count stands at four by derivation, not enthusiasm: existence absolutely, becoming, and the agent's direction each demanded their cause. The stages error does not shrink the roster."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m8-l6-q5`,
          type: "mcq",
          stem: `Two doors close this module. One leads back to the transcendentals, one forward to the soul. The soul, when you meet it, will be which cause of the living body?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Its formal cause: the substantial form by which this matter lives.",
                "feedback": "Respondeo: anima forma corporis: the soul as the form of the living, making these elements one living being, as the sparrow's lesson previewed. The formal cause is about to become the most interesting thing in the course."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Its material cause: the finest stuff in the body.",
                "feedback": "Souls are not stuff, fine or coarse; that road leads to spirits made of vapor and centuries of confusion. The soul stands to the body as act to potency, which names a different cause."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Its efficient cause: the soul pushes the body around.",
                "feedback": "A ghost operating machinery: the picture the tradition most wants you never to form. Module 9's first task is to replace the resident pilot with something far more intimate."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Its final cause: the body exists for the soul.",
                "feedback": "There is truth nearby: the body is organized toward the soul's operations. But the soul's own causal office in the composite is to constitute it from within: the form. Module 9 sorts the whole household."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m8-l6-q6`,
          type: "mcq",
          stem: `Last question. A skeptic offers the grand summary: "The universe is random; purpose is a human projection." Having finished this module, what is the precise trouble with the claim?`,
          latin_tag: `quattuor causae`,
          doctrine_line: `Of what, what, whence, what for: complete explanation owned. The soul waits one door away, and it will be a formal cause.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It is impious, and piety should veto it.",
                "feedback": "The tradition wins arguments before invoking reverence: the objection here is structural, not devotional. Find the load-bearing concept in random and press it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Randomness is parasitic: chance presupposes the per se order it deviates from.",
                "feedback": "Respondeo: per accidens rides per se; a universe of pure chance would have no aims to be beside, so the very concept self-destructs at total scale. And projection is itself purposive talk: the claim smuggles what it bans, twice."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Science has now measured purpose directly, refuting randomness.",
                "feedback": "No instrument reads teleology off a dial, and the tradition never waited for one. The case is philosophical: what chance IS already requires order. Better than a measurement: a demonstration."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Projection is impossible: minds cannot project anything.",
                "feedback": "Minds project constantly; ask any committee. The trouble is not that projection never happens but that this projection-charge saws off its own branch: projecting is acting for an end."
              }
            ],
            "correct_option_id": "b"
          },
        },
      ],
    },
  ],
};
