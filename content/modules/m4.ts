import type { ModuleMeta } from '../types';

export const m4: ModuleMeta = {
  id: 4,
  title: `Hylomorphism`,
  short: `Hylomorphism`,
  label: `Module 4 · Hylomorphism`,
  latin: `Hylomorphismus`,
  aim: `Every material substance is composed of prime matter and substantial form. Matter is pure potency and the principle of individuation; form is first act, making the thing the kind of thing it is.`,
  lessons: [
    {
      id: `m4-l1`,
      num: `I`,
      title: `The Stuff and the Shape Return`,
      latin: `forma substantialis  ·  forma accidentalis`,
      tag: `forma substantialis  ·  forma accidentalis`,
      fin: {
        tag: `forma substantialis  ·  forma accidentalis`,
        heading: `The furnace was a test, and the bronze passed it.`,
        body: `Forms come at two depths. <span class="lat">Forma accidentalis</span> modifies what already is: the shape, the color, the edge. <span class="lat">Forma substantialis</span> makes the thing the very kind it is: while it holds, the horse lives; when it goes, no horse remains. The next lesson digs beneath the deepest form, to what receives it.`,
        distinction: {
          latin: `forma substantialis  ·  forma accidentalis`,
          english: `substantial form  ·  accidental form`,
          gloss: `One form makes the thing what it is; every other form only qualifies what already is.`,
          motif: `wax-seal`,
        },
      },
      questions: [
        {
          id: `m4-l1-q1`,
          type: "mcq",
          stem: `A bronze horse goes into the furnace and comes out a sword. Is the bronze still bronze?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "No. A thing that loses its shape loses what it is.",
                "feedback": "Then every dent would be a small death. The bronze survives its shapes the way you survive your haircuts. Some forms run deeper than others, and the shape is not one of the deep ones."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes. The shape is gone; the metal is what it always was.",
                "feedback": "Respondeo: still bronze. The furnace took the horse and never touched the metal. So the horse shape was a form the bronze had, not the form the bronze is. That difference is this whole lesson."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Only loosely. Without its shape the bronze is leftover material, not a thing.",
                "feedback": "The bronze is no leftover; it is the same substance through the whole episode. The horse was its guest, so to speak, and the sword is its new guest. The host never left the house."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "There is no fact here until someone decides what counts as bronze.",
                "feedback": "The furnace does not wait on our definitions. The metal persists whether or not anyone classifies it. Which form the shape was is a fact about the bronze, not a fact about us."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m4-l1-q2`,
          type: "mcq",
          stem: `Two kinds of form, then. One kind makes a thing the very kind of thing it is. The other kind modifies a thing that already is. The sword shape is which kind?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The first kind: the shape is exactly what makes the sword a sword.",
                "feedback": "It does make it count as a sword. But notice what carries the shape: bronze, before, during, and after. A form that arrives and leaves while its bearer persists is the modifying kind. Artifacts are arrangements of a substance."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Both at once, depending on the observer's interest.",
                "feedback": "Observers change nothing here. Whether the underlying thing survived the furnace is settled by the bronze, and it did. The depth of a form is not a matter of perspective."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither: a shape is an outline, not a form.",
                "feedback": "An outline is precisely a form in the broad sense: a determination of something determinable. The only question is how deep this one goes. Not very: the bronze wore it lightly and put on another."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The second kind: it modifies bronze that was already there and stays bronze.",
                "feedback": "Respondeo: a modification. The word sword names what the bronze is doing lately, not what the underlying thing is. The substance here is the bronze; the shape comes and goes above it."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m4-l1-q3`,
          type: "mcq",
          stem: `The tradition names the two depths. The form that makes a thing the very kind it is: <span class="lat">forma substantialis</span>, substantial form. The form that modifies what already is: <span class="lat">forma accidentalis</span>, accidental form. A living horse dies. Which form was lost?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Its substantial form: what made this matter a living horse is gone.",
                "feedback": "Respondeo: the substantial form. A corpse is not a quieter horse. The kind itself departed; what lies there is other stuff under other forms, keeping the old outline for a while."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "An accidental form: death rearranges the body without removing anything deep.",
                "feedback": "Then the horse would still be there, merely modified, and a sufficiently clever vet could modify it back. Death is not a rearrangement of the horse; it is the end of there being a horse."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No form at all: death only scatters particles that remain what they were.",
                "feedback": "The particles persist, but horse was never just particles, or the living and the dead horse would be the same thing in different moods. Something real was lost, and it was not matter."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Its shape: a dead horse no longer holds the figure of a horse.",
                "feedback": "The outline lingers; that is part of what makes death uncanny. The figure stays while the thing departs. So the figure was never the deep form at all."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m4-l1-q4`,
          type: "distinction_application",
          stem: `Four losses. Which one would end the thing itself, rather than merely change it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The chestnut color of a horse's coat.",
                "feedback": "A paler horse is still entirely a horse. Color is a form the thing wears, not the form the thing is. Keep hunting for the loss that leaves nothing behind to be changed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The edge of a sword.",
                "feedback": "A dull sword is a sword in need of a whetstone, not a corpse. The edge modifies the blade; losing it changes the bronze without ending anything."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The life of the horse.",
                "feedback": "Respondeo: the life. Lose the color, the edge, or the figure, and a modified thing remains. Lose the life and no horse remains to be modified. For a living thing, to be is to be alive."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The horse figure of a bronze statue.",
                "feedback": "The furnace already taught this one: the figure left and the bronze stayed. A change of figure is a change in the thing, never the end of it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m4-l1-q5`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>A substantial form is simply the most important accidental form, the way a keystone is the most important stone.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          latin_tag: `forma substantialis  ·  forma accidentalis`,
          doctrine_line: `Accidental forms modify a thing; the substantial form makes it the kind of thing it is.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Forms differ in rank, and the substantial form holds the highest rank.",
                "feedback": "Rank is the wrong axis. However important an accident is, it modifies; it never constitutes. No promotion turns a modification into the thing it modifies."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Remove an important enough accident and the thing perishes, which proves the difference is one of degree.",
                "feedback": "Some accidents are needed for survival, but they keep a thing in being; they do not make it the kind it is. The dependence runs the other way: accidents lean on the substance."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Accidental forms modify a constituted thing; the substantial form constitutes it.",
                "feedback": "Respondeo: a difference in kind, not degree. Every accidental form presupposes something already there to modify. The substantial form is why anything is there at all. A keystone is still just one stone; this is the arch."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. A thing has only one form, so the comparison cannot even start.",
                "feedback": "Too strong, and it proves too much. The bronze keeps its substantial form while shapes come and go, so a thing carries one deep form and many shallow ones at once. The comparison starts; it just fails."
              }
            ],
            "correct_option_id": "c"
          },
        },
      ],
    },
    {
      id: `m4-l2`,
      num: `II`,
      title: `The Bottom of the Stack`,
      latin: `materia prima`,
      tag: `materia prima`,
      fin: {
        tag: `materia prima`,
        heading: `You looked for a thing and found a capacity.`,
        body: `The hunt for what-is-it-made-of ends in <span class="lat">materia prima</span>: pure potency, no size, no color, no kind of its own, never existing bare. It is the silent subject of every deep change, what remained of the paper that was never itself paper. Next: the changes themselves, sorted by depth.`,
        distinction: {
          latin: `materia prima`,
          english: `prime matter`,
          gloss: `The bottom of the stack: pure capacity to be formed, with no face of its own to show.`,
          motif: `stack-bottom`,
        },
      },
      questions: [
        {
          id: `m4-l2-q1`,
          type: "mcq",
          stem: `A sheet of paper burns to ash. Paper gone, ash here. Did anything carry through from one to the other?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing. The paper was annihilated and the ash created fresh.",
                "feedback": "Annihilation followed by creation is not change at all; it is an exit and an entrance. But the ash is this paper's ash. The two are joined by something that was present for both acts."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Something. The change had a subject that underlay both.",
                "feedback": "Respondeo: something underlay it. Burning is a change, and a change needs a subject. If nothing carried through, this was not one thing becoming another but a vanishing followed by a debut."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The ash itself, hiding inside the paper all along, waiting for fire.",
                "feedback": "Then fire would be a revealer, not an agent, and burning would be a kind of unwrapping. What the paper held was not a small secret ash; it was the real capacity to become ash."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Only the heat, passing from the flame to the leftovers.",
                "feedback": "Heat is traffic between things, not the subject of the change. The question is what the becoming happened to, and that must run deeper than warmth."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m4-l2-q2`,
          type: "mcq",
          stem: `What carried through cannot be the paper, or the paper would have survived its own burning. So hunt for it the childish way: paper is made of pulp, pulp of fibers, fibers of molecules, molecules of atoms. Does the hunt ever reach bottom?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: at the final particle, a smallest stuff that is purely itself.",
                "feedback": "Name the particle and ask it the same question: it has size, charge, behavior, a kind. Whatever has a kind is already formed matter, and the hunt is not over."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No: the series runs on forever, formed stuff under formed stuff.",
                "feedback": "An endless series would leave deep change ungrounded: no ultimate subject, no real becoming. The regress does end, but not in a thing. That is the strange part."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes, but the bottom is not a stuff: pure capacity to be formed, never met bare.",
                "feedback": "Respondeo: the bottom is a principle, not a particle. Every stuff you can point to is already formed, already some kind. Subtract every kind, in thought, and what is left is sheer can-be. The tradition calls it <span class=\"lat\">materia prima</span>, prime matter."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No: below the molecules, the question stops meaning anything.",
                "feedback": "It stops meeting new things, which is different. The question keeps its meaning and receives a strange answer: what lies at bottom is not a thing but a capacity."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m4-l2-q3`,
          type: "mcq",
          stem: `<span class="lat">Materia prima</span>, prime matter: the pure capacity to be formed, with no size, no color, no kind of its own. Could you collect some in a jar?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "No. Without some form it is not an existing something at all; it never occurs bare.",
                "feedback": "Respondeo: never bare. Prime matter exists only as the underside of formed things, the way a capacity exists only in what has it. In the jar you would find, at best, very cold stuff: formed matter, like everything else."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, if the jar were cold and still enough to strip every form away.",
                "feedback": "Strip every form and there is nothing left to chill. A jar of pure potency is a jar of nothing in particular, which is to say an empty jar. Form is not a coat the matter can take off."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes in principle, since whatever is real must be able to stand on its own.",
                "feedback": "That principle is the one this lesson retires. Real does not always mean standalone: capacities, principles, and the undersides of things are real without ever being met alone."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No, but only because our instruments are still too coarse to isolate it.",
                "feedback": "No finer instrument will help, because there is no bare sample to isolate. The impossibility is metaphysical, not technical: what has no form of its own has no face to show a detector."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m4-l2-q4`,
          type: "fill_blank",
          stem: `Complete the parallel. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">In the burning, <span class="fb-blank" data-blank="b1">______</span> persisted while the substantial <span class="fb-blank" data-blank="b2">______</span> was exchanged.<br>Prime matter stands to form as <span class="fb-blank" data-blank="b3">______</span> stands to act.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "matter",
                  "materia",
                  "prime matter",
                  "materia prima"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "form",
                  "forma"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "potency",
                  "potentia"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "matter",
              "form",
              "potency",
              "act",
              "essence",
              "esse",
              "substance",
              "accident",
              "ash"
            ],
            "feedback": {
              "all_correct": "The master key turns again. Matter receives form as potency receives act; the burning swapped forms above a subject that is pure receiving. You met this pattern with essence and <span class=\"lat\">esse</span>; here it is in the furnace.",
              "partial_correct": "Part of the parallel landed. Remember the pattern every composition follows: a receiving side and a determining side. In bodies, matter receives and form determines; and that pair echoes potency and act exactly.",
              "fully_wrong": "Reach for <em>matter</em>, <em>form</em>, and <em>potency</em>. What persisted through the burning is the receiving principle; what was exchanged is the determining one; and the whole pair runs parallel to potency and act."
            }
          },
        },
        {
          id: `m4-l2-q5`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>Prime matter is the smallest physical particle: the final answer to 'what is it made of.'</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          latin_tag: `materia prima`,
          doctrine_line: `Prime matter is pure potency: never bare, always under some form.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Physics keeps finding smaller constituents, and prime matter is the last one.",
                "feedback": "Whatever physics finds will have properties, behavior, a kind: formed matter, every time. Prime matter is not waiting at the end of that road; it underlies every step of it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Something must sit at the bottom, and a bottom must be a thing.",
                "feedback": "The first half is right; the second is the mistake this lesson exists to remove. The bottom of the stack is a principle of things, not one more thing in the stack."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. There is no bottom of any kind; it is forms all the way down.",
                "feedback": "Forms all the way down leaves nothing to receive them, and deep change loses its subject. The paper's burning needed an underlying can-be; forms alone cannot supply one."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Prime matter is a principle of things, not a thing; every particle is already formed.",
                "feedback": "Respondeo: a principle, not a particle. Any particle you could meet has a kind, and what has a kind is matter under form. Prime matter is the receiving underside of all of it, real and never alone."
              }
            ],
            "correct_option_id": "d"
          },
        },
      ],
    },
    {
      id: `m4-l3`,
      num: `III`,
      title: `Coming to Be and Passing Away`,
      latin: `generatio  ·  corruptio  ·  alteratio`,
      tag: `generatio  ·  corruptio  ·  alteratio`,
      fin: {
        tag: `generatio  ·  corruptio  ·  alteratio`,
        heading: `Two depths of change, and you can now tell them apart on sight.`,
        body: `<span class="lat">Alteratio</span> modifies a persisting thing. <span class="lat">Generatio</span> and <span class="lat">corruptio</span> exchange the thing itself above bare matter: one event, two descriptions, no gap in between. The next lesson asks a stranger question: when two things share one nature, what makes them two?`,
        distinction: {
          latin: `generatio  ·  corruptio`,
          english: `generation  ·  corruption`,
          gloss: `When the substantial form goes, the thing does not alter; it ceases, and another thing begins.`,
          motif: `seed-tree-change`,
        },
      },
      questions: [
        {
          id: `m4-l3-q1`,
          type: "mcq",
          stem: `Two small disasters at a desk: a paperclip bent out of shape, a sheet of paper burned to ash. Same depth of change?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes. In both, matter took a new arrangement.",
                "feedback": "Described thinly enough, everything is rearrangement. But one rearranged thing is still here to complain about it, and the other is not. The descriptions hide a real difference in depth."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, differing only in how hard the change is to undo.",
                "feedback": "Reversibility is a clue, not the difference itself. Unbend the clip and the same clip is restored. No process restores the same sheet of paper, because there is no longer a same sheet to restore."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No. The clip's change was real; the paper's was an appearance.",
                "feedback": "Both were entirely real. The question is not whether something happened but how deep it went: one change happened to a thing, the other happened to be the end of a thing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No. The clip survived its change; the paper did not survive its own.",
                "feedback": "Respondeo: different depths. Bend the clip and the same thing persists, modified. Burn the paper and nothing of the paper remains to be modified: the subject itself was exchanged. Two kinds of change, and telling them apart is this lesson."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m4-l3-q2`,
          type: "mcq",
          stem: `Names for the depths. A change of features while the thing persists: <span class="lat">alteratio</span>, alteration. A substance coming to be: <span class="lat">generatio</span>, generation. A substance ceasing to be: <span class="lat">corruptio</span>, corruption. Seen from the paper's side, the burning is which?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Alteratio</span>: the paper persists, severely blackened.",
                "feedback": "Sift the ash for the persisting paper and you will be there a long time. Alteration needs a survivor, and this change has none."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Generatio</span>: the paper becomes the ash.",
                "feedback": "The ash comes to be; the paper does not become anything, it ceases. Generation is the ash's side of the event. The paper's side has a darker name."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Corruptio</span>: the paper ceases to be.",
                "feedback": "Respondeo: <span class=\"lat\">corruptio</span>. From the paper's side the story simply ends. From the ash's side, the same event is a beginning. Hold that thought; the next question turns the coin over."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "<span class=\"lat\">Generatio</span> and <span class=\"lat\">alteratio</span> together, in quick sequence.",
                "feedback": "Neither half fits the paper's side: nothing persisted to be altered, and the paper did not come to be. One of the three names was made for exactly this, and it is the somber one."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m4-l3-q3`,
          type: "mcq",
          stem: `So the burning, counted carefully: how many changes?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Two: first a <span class=\"lat\">corruptio</span>, then a <span class=\"lat\">generatio</span> a moment later.",
                "feedback": "A moment later would mean a moment of bare matter between forms, and the last lesson closed that door: prime matter never stands alone. The two descriptions are not two events."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "One: a single exchange of forms; the corruption of one substance is the generation of another.",
                "feedback": "Respondeo: one event, two descriptions. The matter never sits bare between forms; the arrival of the new substantial form just is the departure of the old. The tradition keeps a tidy line for it: the generation of one is the corruption of another."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Three: a <span class=\"lat\">corruptio</span>, a formless gap, then a <span class=\"lat\">generatio</span>.",
                "feedback": "The formless gap would be prime matter existing bare, which you ruled out one lesson ago. Nature does not pause between substances; the handoff is immediate because it is one event."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "None, strictly: <span class=\"lat\">generatio</span> and <span class=\"lat\">corruptio</span> are bookkeeping, not happenings.",
                "feedback": "Tell that to the paper. Something irreversible happened in the world, not in the ledgers. The two terms are two true descriptions of one entirely real event."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m4-l3-q4`,
          type: "distinction_application",
          stem: `Sort the depths. Four changes: iron rusting through, a man learning Greek, coffee cooling in the cup, skin tanning in the sun. One of them is no <span class="lat">alteratio</span>. Which?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The rusting: where it rusts through, no iron remains; another stuff stands there.",
                "feedback": "Respondeo: the rust. Flaky, red, brittle: not tired iron but another substance. The learner, the coffee, and the skin all survive their changes; the iron, where it rusted through, did not."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The learning: knowledge goes too deep to count as a feature.",
                "feedback": "Learning feels deep and is still <span class=\"lat\">alteratio</span>: the man persists, newly skilled. If learning were generation, the student would not survive his own education. He does, and gets to enjoy it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The cooling: heat belongs to the coffee's very being.",
                "feedback": "Cold coffee is disappointing coffee, not ex-coffee. The heat was a feature; the substance sits in the cup either way. An alteration through and through."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The tanning: the sun changes what the skin fundamentally is.",
                "feedback": "The tan arrives and fades while the same skin remains; that is the signature of alteration. You met this exact tan in Foundations, and it has not deepened since."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m4-l3-q5`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>Death is the biggest change a living thing undergoes.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          latin_tag: `generatio  ·  corruptio  ·  alteratio`,
          doctrine_line: `Alteration modifies a persisting subject; generation and corruption exchange the subject itself.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Every feature changes at once, which is as big as change gets.",
                "feedback": "Size is not the issue; the subject is. An alteration of every feature at once would still leave the thing there, thoroughly redecorated. Death does not redecorate."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. It is the last of the thing's alterations, and the largest.",
                "feedback": "It is last, but it is no alteration. Alterations are things that happen to a persisting subject, and this one's subject does not persist through it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. It is not a change the thing undergoes: the thing does not survive to have undergone it.",
                "feedback": "Respondeo: <span class=\"lat\">corruptio</span>, not a large <span class=\"lat\">alteratio</span>. Alterations happen to a persisting subject; here the subject departs. This is why the tradition treats death with metaphysical seriousness and not as a very large inconvenience."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Death changes nothing real, since all the matter remains.",
                "feedback": "The matter remains; the living being does not. Counting only matter misses exactly what was lost: the substance whose matter it was. That loss is as real as anything in this course."
              }
            ],
            "correct_option_id": "c"
          },
        },
      ],
    },
    {
      id: `m4-l4`,
      num: `IV`,
      title: `Why There Are Two of You (Not Really)`,
      latin: `materia signata`,
      tag: `materia signata`,
      fin: {
        tag: `materia signata`,
        heading: `One kind, twice received. The parcel, not the pattern, makes the two.`,
        body: `What multiplies twins and copies is not their what but the matter that bears it: <span class="lat">materia signata quantitate</span>, matter marked out by quantity, this parcel here and not that one there. And the corollary you proved without noticing: whatever has no matter cannot be doubled within its kind. The recapitulation gathers the whole module next.`,
        distinction: {
          latin: `materia signata`,
          english: `designated matter`,
          gloss: `What makes two of a kind two: not the form, which is shared, but the matter this form is stamped on.`,
          motif: `clay-form`,
        },
      },
      questions: [
        {
          id: `m4-l4-q1`,
          type: "mcq",
          stem: `Identical twins, alike to the last freckle. One nature, point for point. What makes them two?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Tiny differences of feature that closer inspection would always find.",
                "feedback": "Then perfect duplicates would collapse into one being, and their twoness would hang on a freckle. Twoness is not a flaw in the copying; it would survive even perfect resemblance."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Their matter: this flesh here, that flesh there.",
                "feedback": "Respondeo: the matter. The what is genuinely common; the parcel is not. This flesh, here, is not that flesh, there. Two of a kind means one kind, twice received."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Their forms, which must differ in kind for the twins to differ at all.",
                "feedback": "Their forms differ as mine from yours: numerically, not in kind. Make each form its own kind and the twins are no longer two of anything; they are two kinds with one face each."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing intrinsic: society counts them as two by convention.",
                "feedback": "Convention counts what is already countable. The census taker finds two; he does not make two. Their mother knew before any convention weighed in."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m4-l4-q2`,
          type: "mcq",
          stem: `Two copies of the same novel: same edition, same misprint on page 12. One story. How many books on the shelf?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "One book, twice present, the way one song plays in two rooms.",
                "feedback": "The song in two rooms is also two: two performances of one piece. The pattern is single; its embodiments multiply wherever matter receives it. The shelf holds two of those."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Two only while shelved apart; pressed together they would make one.",
                "feedback": "Pressing them together makes a stack, not a merger. Their twoness does not depend on the gap between them but on each being its own parcel of matter."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Two books: one what, received in two parcels of matter.",
                "feedback": "Respondeo: two, and you can lend them to two friends. The story is one; the matter is two. What multiplies the copies is not their what but the stuff that bears it, marked out here and here."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The question confuses paper with literature and has no answer.",
                "feedback": "It distinguishes them, which is why it has a clean answer. One work of literature, two material books. Keeping pattern and parcel apart is the whole skill here."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m4-l4-q3`,
          type: "mcq",
          stem: `The tradition's name for the individuating parcel: <span class="lat">materia signata quantitate</span>, matter marked out by quantity: this much, here, now. Why does quantity get the credit, of all the accidents?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Quantity spreads matter into parts outside parts, giving a here distinct from a there.",
                "feedback": "Respondeo: extension is what buys a here and a there. Color qualifies a thing and heat warms it, but only quantity parcels. Marked out by it, matter can receive one nature twice, side by side."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Quantity is the most measurable accident, and measuring is how we count things.",
                "feedback": "Measurement finds the parcels; it does not make them. The twins were two before anyone brought a ruler. The credit goes to what divides matter into a here and a there, not to our arithmetic."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Quantity is the accident a body keeps longest through its changes.",
                "feedback": "Durability is not the office. A body's quantity changes constantly while the body stays one and the same individual. What matters is that quantity gives matter distinguishable parts, not that it lingers."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Quantity holds first rank among the accidents, so the office falls to it.",
                "feedback": "It does sit first among accidents in one classical ordering, but rank is not the reason. The reason is a job description: only extension can mark out this parcel from that one."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m4-l4-q4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>If two beings had no matter at all, they could still be two members of one species, like the twins.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Their thoughts and choices would still tell them apart.",
                "feedback": "Thoughts and choices presuppose two thinkers already distinct; they cannot supply the distinctness. The question is what would make them two in the first place, and without matter nothing does."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Existence itself would divide them, one act of being each.",
                "feedback": "Each would have its own act of being, but esse is received according to the essence, and one immaterial essence has no way to be received twice. The division never gets started."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. With no matter to parcel the nature, each would exhaust its kind alone.",
                "feedback": "Respondeo: no matter, no twins. A form with no matter to receive it twice cannot be doubled; each immaterial being is the whole of its species. Aquinas drew the conclusion without flinching: no two angels share a kind."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Without matter neither could exist, so neither could be counted.",
                "feedback": "Immaterial beings exist; the angels are the standing case. Matter is the principle of individuation within a kind, not the price of admission to existence."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m4-l4-q5`,
          type: "mcq",
          stem: `Print a thousand more copies; let the twins become triplets. Does the nature itself ever get used up, or divided into shares?`,
          latin_tag: `materia signata`,
          doctrine_line: `Within a species, matter marked by quantity is the principle of individuation.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: each new copy takes a share, thinning what remains for the rest.",
                "feedback": "Then latecomers would be less human than firstborns, and the press would dilute the novel with every run. Natures are not estates to be divided among heirs."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, eventually: a kind holds only finitely many slots.",
                "feedback": "No census of a kind exhausts it. The limit on copies is paper and ink, never the story; the limit on humans is matter and history, never humanity."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No, because the nature exists only in our minds, where division cannot reach.",
                "feedback": "The nature exists in every one of its bearers, not merely in our thinking about them. Move it wholly into the mind and the twins are two of nothing real, which is one too few."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No: the nature is whole in each, multiplied without being divided.",
                "feedback": "Respondeo: whole in each. Humanity is not a cake cut smaller with every birth. The kind is fully present wherever matter receives it: one pattern, entire, in every parcel."
              }
            ],
            "correct_option_id": "d"
          },
        },
      ],
    },
    {
      id: `m4-l5`,
      num: `V`,
      title: `Recapitulatio`,
      latin: `hylomorphismus`,
      tag: `hylomorphismus`,
      fin: {
        tag: `hylomorphismus`,
        heading: `The physical world, read top to bottom: act and potency all the way down.`,
        body: `Matter under form, form at two depths, change at two depths, individuals by parceled matter, and at the bottom a pure capacity that never stands alone. The grid from the act-and-potency module has now organized bodies as it organized being. One module remains in the formation block, and it is about the one who bears all this: you.`,
        distinction: {
          latin: `forma substantialis  ·  forma accidentalis`,
          english: `substantial form  ·  accidental form`,
          gloss: `One form makes the thing what it is; every other form only qualifies what already is.`,
          motif: `wax-seal`,
        },
      },
      questions: [
        {
          id: `m4-l5-q1`,
          type: "match_pair",
          stem: `Match each principle to its role. <em>Tap a term, then tap its description. Tap a paired item to release it.</em>`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "<span class=\"lat\">materia prima</span>"
              },
              {
                "id": "L2",
                "text": "<span class=\"lat\">forma substantialis</span>"
              },
              {
                "id": "L3",
                "text": "<span class=\"lat\">forma accidentalis</span>"
              },
              {
                "id": "L4",
                "text": "<span class=\"lat\">materia signata</span>"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "pure potency: the bare capacity underlying every deep change"
              },
              {
                "id": "R2",
                "text": "the act that makes a thing the very kind it is"
              },
              {
                "id": "R3",
                "text": "a modification of a thing already constituted"
              },
              {
                "id": "R4",
                "text": "the marked-out parcel that makes this one this one"
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
              "all_correct": "All four locked. Prime matter receives at the bottom; substantial form makes the kind; accidental forms decorate what is already there; and designated matter makes each thing this one rather than that one. The module in four principles.",
              "partial_correct": "Some pairs landed. The easiest swap to watch: the two forms differ by depth (constituting versus modifying), and the two matters differ by office (receiving deep change versus individuating this one from that one).",
              "per_pair_corrections": [
                {
                  "left_id": "L1",
                  "wrong_right_id": "R4",
                  "feedback": "<span class=\"lat\">Materia prima</span> underlies change; it does not mark out individuals. The individuating office belongs to <span class=\"lat\">materia signata</span>, matter under quantity."
                },
                {
                  "left_id": "L2",
                  "wrong_right_id": "R3",
                  "feedback": "<span class=\"lat\">Forma substantialis</span> does not modify an existing thing; it is why the thing exists as this kind at all. The modifying role belongs to <span class=\"lat\">forma accidentalis</span>."
                },
                {
                  "left_id": "L3",
                  "wrong_right_id": "R2",
                  "feedback": "<span class=\"lat\">Forma accidentalis</span> never makes a thing its kind; it dresses a thing already constituted. The constituting act is <span class=\"lat\">forma substantialis</span>."
                },
                {
                  "left_id": "L4",
                  "wrong_right_id": "R1",
                  "feedback": "<span class=\"lat\">Materia signata</span> is matter already under quantity, parceled into here and there. The bare underlying capacity, beneath every determination, is <span class=\"lat\">materia prima</span>."
                }
              ]
            }
          },
        },
        {
          id: `m4-l5-q2`,
          type: "mcq",
          stem: `Four episodes from this module: the paperclip bent, the bronze horse recast as a sword, the paper burned, the skin tanned. Where did a substantial form change hands?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The paperclip: bent is a different thing than straight.",
                "feedback": "Bent and straight are two outfits on one wire. The clip endured its misfortune, which is exactly what makes it an alteration."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The bronze: horse to sword is as deep as change goes.",
                "feedback": "It looks dramatic, but the bronze sailed through untouched in its kind. Figure swapped, substance kept: an accidental change wearing a costume of depth."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The paper: it ceased, and another substance stood in its place.",
                "feedback": "Respondeo: only the burning. Clip, bronze, and skin all kept their deep form and traded shallow ones. Two things met fire in this module, and only one of them died."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The skin: the sun's work goes all the way down.",
                "feedback": "The tan is the shallowest change on the list, which is why it fades. The skin remains the skin; Socrates remains Socrates, slightly bronzed but not bronze."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m4-l5-q3`,
          type: "mcq",
          stem: `The act-and-potency grid ran on being two modules ago; this module ran it on bodies. In the pair matter and form, which side plays the potency?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Form: it waits in the sculptor's mind before landing in the stone.",
                "feedback": "What waits in the sculptor's mind is a plan, not the form's residence. In the composite itself, form is the determining side: it actualizes. The waiting, receiving role belongs to the other partner."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Matter: it receives and is determined.",
                "feedback": "Respondeo: matter is the potency, form the act. The same grammar you learned for essence and esse runs through bodies: a receiving principle composed with a determining one, two principles, one thing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Each is potency to the other, taking turns.",
                "feedback": "The relation does not alternate. Matter never determines form; form never receives matter. The asymmetry is the point: one side is always the can-be, the other the making-be."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither: the grid covers change, not composition.",
                "feedback": "The grid covered change first and composition ever since: essence receives esse, matter receives form. It is one grammar for the whole of finite being, which is why it keeps returning."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m4-l5-q4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>The statue's figure, Socrates' tan, and a man's knowledge of Greek are all accidental forms.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Each modifies a thing already constituted, and each can be lost while the thing remains.",
                "feedback": "Respondeo: all three are <span class=\"lat\">forma accidentalis</span>. The marble outlasts the figure, the skin the tan, and the man his Greek (sadly). Modifications all. You can now run this test on anything you meet."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Each exists only in the eye of an observer.",
                "feedback": "Right judgment, wrong reason. The tan and the Greek are entirely real determinations of real beings; nothing about them waits on observers. They are accidental because of how they exist, not whether."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Knowledge shapes the soul, so it must be a substantial form.",
                "feedback": "Knowledge perfects the knower without constituting him. The man was fully a man before the Greek arrived, and remains one after it fades. Deep for a feature is still a feature."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. A tan is matter, not form.",
                "feedback": "The tan is not stuff added to the skin; it is the skin determined a new way. Determinations of an existing thing are forms, of the shallow kind: <span class=\"lat\">forma accidentalis</span>."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m4-l5-q5`,
          type: "mcq",
          stem: `Matter and form compose, and the result is not a pile but a one: the <span class="lat">compositum</span>, the whole substance. For a living body, the substantial form has a name you have known your whole life. What is it?`,
          latin_tag: `hylomorphismus`,
          doctrine_line: `Every material substance is a composite of matter and form.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The soul.",
                "feedback": "Respondeo: the soul, <span class=\"lat\">anima</span>: the substantial form of a living body. Not a ghost lodged in a machine; the act that makes this matter one living thing. A later module opens that door wide. First, the formation block closes with the one standing in front of all the doors: the person."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The brain.",
                "feedback": "The brain is an organ: formed matter, a part of the composite. The form is what makes the whole body, brain included, one living thing rather than a federation of parts."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The pattern of the body's particles.",
                "feedback": "A pattern is an arrangement: accidental form at best. The arrangement persists a while in a corpse; the life does not. Whatever the deep form of a living thing is, it runs deeper than arrangement."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The life force flowing through the organs.",
                "feedback": "A force flowing through the organs would be one more ingredient inside the thing. The soul is not an ingredient; it is what makes the ingredients one being in the first place."
              }
            ],
            "correct_option_id": "a"
          },
        },
      ],
    },
  ],
};
