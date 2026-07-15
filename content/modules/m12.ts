import type { ModuleMeta } from '../types';

export const m12: ModuleMeta = {
  id: 12,
  title: `Will, Appetite, and the Passions`,
  short: `Will, Appetite, and the Passions`,
  label: `Module 12 · Will, Appetite, and the Passions`,
  latin: `Voluntas, Appetitus, et Passiones`,
  aim: `Appetite follows apprehension: an inclination follows every form, sense appetite follows the sensed good, and the will, the intellectual appetite, follows the good understood. The sense appetite divides into concupiscible and irascible, and its movements are the passions: eleven in kind, with love first, for no passion stirs that does not presuppose love. Nothing is willed unless first known; the will tends only to what wears the good's aspect, necessarily to happiness, freely to every particular good, because reason's comparison leaves each one open. And the passions are not sins: ruled by reason's politic power they enter the goodness of the act, matter for virtue rather than noise against it.`,
  lessons: [
    {
      id: `m12-l1`,
      num: `I`,
      title: `Two Kinds of Wanting`,
      latin: `appetitus`,
      tag: `appetitus`,
      fin: {
        tag: `appetitus`,
        heading: `Three rungs, one climb.`,
        body: `The tradition's word is <span class="lat">appetitus</span>: the tendency of a being toward what perfects it. It climbs three rungs. In every form, even the stone's, an inclination: <span class="lat">appetitus naturalis</span>, wanting without noticing. Where the good is sensed, the <span class="lat">appetitus sensitivus</span>, the sense appetite, wanting with the body in tow. Where the good is understood, <span class="lat">voluntas</span>, the will: the intellectual appetite, the only wanting that can hold a fast at eleven at night. But the middle rung is not one country. It is two, and eleven weathers move through them. Next lesson draws the map.`,
        distinction: {
          latin: `appetitus naturalis  ·  sensitivus  ·  voluntas`,
          english: `natural appetite  ·  sense appetite  ·  will`,
          gloss: `Three rungs of wanting: the stone's without noticing, the fox's with the body in tow, and the will's alone answering the good as understood.`,
          motif: `arrow-mark`,
        },
      },
      questions: [
        {
          id: `m12-l1-q1`,
          type: "mcq",
          stem: `Eleven at night. The cake in the kitchen pulls; the fast you chose this morning holds. Two wantings, one you. What are you watching?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "One desire fighting a stronger desire, with the stronger certain to win.",
                "feedback": "If the stronger always won, the fast would be arithmetic and the kitchen a foregone conclusion. But fasts hold, sometimes, against a pull that measures stronger on every bodily scale. Whatever holds them is not just another pull in the same tug-of-war."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Two appetites of two powers: one follows the sensed good, one follows the good understood.",
                "feedback": "Respondeo: the cake works on your sense appetite through smell and memory; the fast holds by your will, the appetite that follows understanding. Two powers, two goods, presented two ways, and one person feeling the seam. The tradition's map of that seam is this module's whole business."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A feeling opposed by a habit, and a habit is not a wanting at all.",
                "feedback": "The fast was chosen this morning, fresh, before any habit had formed around it. What holds at eleven is a tending toward a good you understood: health, discipline, the promise kept. A tending toward good is a wanting, whatever else it is."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Reason suppressing appetite, which alone does the wanting.",
                "feedback": "Reason is not a fire brigade called against wanting; reason has a wanting of its own. The fast is not the absence of appetite but the appetite of a higher rung: the good understood, desired as understood. The night is a contest of wantings, not a wanting and its warden."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m12-l1-q2`,
          type: "mcq",
          stem: `Before either wanting, a third and quieter one. The stone falls, fire rises, the sunflower tracks the sun, and none of them notices anything. Is anything wanting there?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "No; where nothing is felt, nothing tends.",
                "feedback": "The stone tends downward with total reliability and no feelings whatever. Tendency is older than sensation; feeling is one way of having it, not the license for it. Rule out unfelt tending and physics closes for repairs."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Only metaphorically; talk of tending belongs to the poets.",
                "feedback": "The poets borrowed it from the things. Fire does not rise as a figure of speech; the inclination is in the form, executed without ceremony. The tradition's claim is sober ontology: form carries tendency the way shape carries shadow."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes, and it proves that stones dimly feel.",
                "feedback": "Generous to the stones and ruinous to the map. The whole point of natural appetite is inclination without any apprehension: the stone wants nothing it notices, because it notices nothing. Panpsychism pays for tendency with a currency nothing in the case demands."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Yes: an inclination follows every form; nature's appetite runs on being, not on noticing.",
                "feedback": "Respondeo: some inclination follows every form; fire, by its form, is inclined to rise and to generate its like, and this is called the natural appetite (ST I q.80 a.1). The ladder of wanting starts below all noticing. Sense and will are higher rungs of the same climb."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m12-l1-q3`,
          type: "fill_blank",
          stem: `The ladder of appetite, set. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Every <span class="fb-blank" data-blank="b1">______</span> is followed by an inclination; where the good is <span class="fb-blank" data-blank="b2">______</span>, appetite follows sensation; where the good is <span class="fb-blank" data-blank="b3">______</span>, the appetite is called will.</span>`,
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
                  "sensed",
                  "felt"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "understood"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "form",
              "matter",
              "sensed",
              "eaten",
              "understood",
              "imagined",
              "resisted",
              "named"
            ],
            "feedback": {
              "all_correct": "Locked: form, sensed, understood. Three rungs: natural appetite in every form, sense appetite after the felt good, rational appetite after the good understood. The Latin for the third rung is voluntas, and it has a lesson of its own coming.",
              "partial_correct": "Some blanks resisted. The ladder climbs by apprehension: no apprehension in the stone, sensation in the animal, understanding in you. Appetite follows each the way an heir follows a bloodline."
            }
          },
        },
        {
          id: `m12-l1-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "The will is simply the strongest desire, wearing a more respectable name."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Choices track the strongest pull; honest introspection confirms it.",
                "feedback": "Introspection at eleven at night refutes it: the pull toward the cake registers stronger on every felt scale, and the fast holds anyway. When the weaker force wins on the strong force's own field, suspect a second field."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Will and desire both tend to good, so they are one power in different dress.",
                "feedback": "Both tend to good the way sight and understanding both take in the apple: analogy of function, difference of power. What is apprehended by intellect and what is apprehended by sense differ in kind, and the appetites following them divide accordingly. Shared direction is not shared identity."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The will is a distinct power: it follows the good as understood, not the good as felt.",
                "feedback": "Respondeo: the intellectual appetite is a distinct power from the sensitive appetite, since what is apprehended by the intellect and what is apprehended by sense are generically different (ST I q.80 a.2). The will is not desire's polished cousin. It is a different rung, answering a different presentation."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The will is not an appetite at all, but a judgment.",
                "feedback": "Right verdict, wrong organ chart. Judgment belongs to the intellect; the will follows it, tending toward what judgment presents. Make the will a judgment and nothing is left to do the wanting: a court with verdicts and no sheriff."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m12-l1-q5`,
          type: "mcq",
          stem: `The name arrives: <span class="lat">voluntas</span>, the intellectual appetite, which is called the will (ST I q.82 a.5). One good the will cannot refuse. Which?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Whatever the senses present most vividly at the moment.",
                "feedback": "Vividness campaigns hard and loses regularly; the dieter walks past the bakery window daily. If the vivid compelled, advertising would be law and the fast a myth. The necessity we are hunting binds deeper than brightness."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Happiness: the good as such, held the way the intellect holds first principles.",
                "feedback": "Respondeo: as the intellect of necessity adheres to first principles, the will of necessity adheres to the last end, which is happiness (ST I q.82 a.1). No one wants misery as misery; even the despairing pursue relief. The one vote the will never gets to cast is the vote against the good itself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The majority's preference, imprinted by upbringing.",
                "feedback": "Upbringing loads the menu and biases the palate; it compels nothing, as every convert and every prodigal proves in both directions. The necessity in the will is not sociology. It sits at the level of the good as such, beneath every custom."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing; the will's whole dignity is that it can refuse anything whatever.",
                "feedback": "A liberty that could refuse the good as such would have nothing left to choose with; every choice is made under the good's flag or not at all. The will's dignity is not bottomless refusal. It is dominion among particular goods, and the next question opens exactly that door."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m12-l1-q6`,
          type: "mcq",
          stem: `Then why can the cake be refused at all, if appetite is for the good and the cake is genuinely good?`,
          latin_tag: `appetitus`,
          doctrine_line: `Appetite follows apprehension: natural in every form, sensitive after the sensed good, rational, the will, after the good understood.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because the cake is a particular good: good under one aspect, refusable under another.",
                "feedback": "Respondeo: certain individual goods have no necessary connection with happiness, and to such the will does not adhere of necessity (ST I q.82 a.2). The cake is sweet and it is also fast-breaking; finite goods always show a second aspect. Every finite good leaves the question open, and freedom will grow in exactly that opening."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because refusing it proves it was never really good.",
                "feedback": "The cake's goodness survives your discipline intact; that is what makes the discipline cost something. Refusal does not unmake goods; it ranks them. A theory where refused goods turn out fake abolishes sacrifice by definition, and sacrifice is observably real."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because the will is stronger than the senses in a healthy soul.",
                "feedback": "Strength is the wrong axis again; weak wills refuse cakes daily, white-knuckled, and strong ones sometimes indulge on purpose. The refusability sits in the object: a finite good cannot command what only the good as such commands. The opening is metaphysical before it is muscular."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because sugar is an evil, and the will flees evil by nature.",
                "feedback": "Sugar is a creature, and no creature is evil by nature; evil is a hole in being, not an ingredient. The fast is not flight from a poison but preference of a higher good over a lower. Get the metaphysics right and the diet loses its melodrama."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `m12-l2`,
      num: `II`,
      title: `The Map of the Passions`,
      latin: `passiones animae`,
      tag: `passiones animae`,
      fin: {
        tag: `passiones animae`,
        heading: `Eleven weathers, one climate.`,
        body: `The <span class="lat">passiones animae</span>, the passions of the soul, are movements of the sense appetite with the body carried in them: not mere feelings but real motions toward and away from apprehended good and evil. The concupiscible chamber holds six: love and hatred, desire and aversion, joy and sadness. The irascible holds five: hope and despair, fear and daring, and anger, which alone has no contrary (ST I-II q.23 a.4). The grid is generated, not collected: good or evil, present or absent, simple or arduous, and the eleven fall out like a proof. One of the eleven is under all the others. Next lesson digs.`,
        distinction: {
          latin: `appetitus concupiscibilis  ·  irascibilis`,
          english: `concupiscible  ·  irascible appetite`,
          gloss: `Eleven weathers, one climate: six motions toward the pleasant good, five for the arduous, and anger alone with no contrary.`,
          motif: `two-inclines`,
        },
      },
      questions: [
        {
          id: `m12-l2-q1`,
          type: "mcq",
          stem: `A growl behind you on the trail. Before any thought worth the name, your body has voted: skin, heart, feet. What is a passion, on this evidence?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A private feeling, colored but bodiless, painted over the event.",
                "feedback": "Your heart rate disagrees with the bodiless part. The passion did not decorate the moment from a gallery seat; it moved through the flesh like weather through a valley. Whatever it is, it has mass in the body's ledger."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A malfunction of judgment under pressure.",
                "feedback": "The judgment has not even arrived yet; the growl beat it to the appetite. And nothing malfunctioned: a body arranging itself to survive is a body working. The tradition will discipline the passions, but it refuses to pathologize them at the door."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A movement of the sense appetite, body in tow, away from an apprehended evil.",
                "feedback": "Respondeo: the tradition's word is passiones animae, passions of the soul: real motions of the sensitive appetite toward apprehended good and away from apprehended evil, with the body carried in the motion. Not paint, not malfunction: motion. The growl was apprehended, and the appetite answered before you were consulted."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An instinct: a behavior with no object, fired by wiring.",
                "feedback": "No object? The passion is about the growl, and through it the wolf; strip the aboutness and the racing heart becomes arbitrary weather. Passions take objects the way arrows take targets. Wiring explains the speed, never the aim."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m12-l2-q2`,
          type: "mcq",
          stem: `Why two chambers in the sense appetite rather than one? The deer drinks at the pool; in drought, the same deer crashes through thorns to reach water.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because pleasure and pain are two different sensations.",
                "feedback": "Two sensations would argue two receivers, and the concupiscible alone already handles both: it seeks the pleasant and flies the painful. The second chamber earns its keep another way: not by a new sensation but by a new posture of the object, armored and uphill."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because some goods come easy and some come armored: the suitable simply, and the arduous.",
                "feedback": "Respondeo: one power inclines the soul simply to seek the suitable and fly the harmful, and this is the concupiscible; another resists the attacks that hinder the suitable and inflict harm, and this is the irascible, whose object is the arduous (ST I q.81 a.2). Water at the pool and water through thorns are one good in two postures. Two postures, two powers."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because good and evil each require a dedicated faculty.",
                "feedback": "Then the ledger would split down a different seam, and it does not: each chamber handles good and evil both, under its own aspect. The concupiscible loves and hates; the irascible hopes and fears. The dividing line is not good against evil but simple against steep."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because animals evolved two systems, and we simply inherited the plumbing.",
                "feedback": "The inheritance is real; the deer and you share the architecture, as the tradition cheerfully affirms. But shared plumbing explains where the chambers came from, not why there are exactly two. The why is in the object: goods come easy or armored, and appetite must answer both."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m12-l2-q3`,
          type: "match_pair",
          stem: `The shelves, stocked. Concupiscible: love (<span class="lat">amor</span>), desire, joy; hatred, aversion, sadness. Irascible: hope, despair, daring, fear, anger. Now match five movements to their stations.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "desire"
              },
              {
                "id": "L2",
                "text": "sadness"
              },
              {
                "id": "L3",
                "text": "hope"
              },
              {
                "id": "L4",
                "text": "fear"
              },
              {
                "id": "L5",
                "text": "anger"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "reaching toward an absent pleasant good"
              },
              {
                "id": "R2",
                "text": "resting under a present evil, and feeling its weight"
              },
              {
                "id": "R3",
                "text": "stretching toward a hard good judged reachable"
              },
              {
                "id": "R4",
                "text": "shrinking from a coming evil that is hard to escape"
              },
              {
                "id": "R5",
                "text": "rising against a present evil, to strike it down"
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
              "all_correct": "Five stations, correctly manned. Notice the grammar underneath: every passion is fixed by its object's coordinates, good or evil, present or absent, simple or arduous. Nothing on this map is arbitrary, which is why it has needed no redrawing in seven centuries.",
              "partial_correct": "Some stations misassigned. Ask three questions of each movement: toward good or away from evil? Present or still coming? Plain ground or uphill? The coordinates place every passion without residue."
            }
          },
        },
        {
          id: `m12-l2-q4`,
          type: "distinction_application",
          stem: `The two chambers, fixed. Concupiscible: good or evil taken simply, as pleasant or painful. Irascible: good or evil taken as arduous, under difficulty. Classify: the student the night before the exam, stomach tight, mind circling what may come.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Irascible: fear, shrinking from a coming evil that is hard to escape.",
                "feedback": "Respondeo: the evil is future, looming, and not easily dodged; that difficulty is what promotes the flutter into fear and files it in the irascible. An evil easily sidestepped would never tighten a stomach. The chamber is chosen by the object's posture: coming, and uphill."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Concupiscible: aversion, plain flight from the painful.",
                "feedback": "Aversion turns from the painful simply, the way a hand leaves a hot pan: no difficulty in the calculation. But the exam cannot be simply left; it stands across tomorrow like a toll gate. The moment hardness enters the object, the case changes chambers."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Irascible: despair, since the good grade is already lost.",
                "feedback": "Despair abandons an arduous good as unreachable, and this student has abandoned nothing; the circling itself is evidence the outcome still lives. Despair goes quiet. This is loud. The passion that keeps checking the locks is fear."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Concupiscible: sadness at a present evil.",
                "feedback": "Sadness rests under an evil that has arrived and settled its weight. The exam has not arrived; its whole power tonight is that it is still coming. Passions keep strict calendars: change the tense of the object and you change the passion."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l2-q5`,
          type: "distinction_application",
          stem: `Same chambers. A man watches injustice done to a child, and something in him rises to strike back. Classify the rising.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Concupiscible: hatred of the unjust act.",
                "feedback": "Hatred is in the room, and it lives in the concupiscible as the standing no to what opposes the loved good. But hatred is a posture; this is a surge. What rises to strike is a different movement, filed where evils are met as things to overcome."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Irascible: anger, the surge against a present evil, to overcome it.",
                "feedback": "Respondeo: anger rises against an evil already here, taken as arduous, to strike it down; and it is the map's one widow, the passion which has not contrary passion (ST I-II q.23 a.4). Once evil is present and steep, there is the surge, or there is sinking under it, and the sinking belongs to another chamber. No opposite surge exists."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Irascible: daring, since courage confronts evils.",
                "feedback": "Daring runs at an evil still coming, the soldier before the charge. This evil is not coming; it has arrived, and is being done in plain sight. Against a present evil the irascible has one movement left, and it is not daring."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Concupiscible: sadness, dressed in noise.",
                "feedback": "Sadness sinks; this rises. The two are genuinely neighbors, both answering present evil, which is why crushed anger so often decays into sorrow. But decay is not identity. The movement that still means to strike belongs to the fighting chamber."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m12-l2-q6`,
          type: "mcq",
          stem: `Modern lists of basic emotions are assembled from surveys and facial photographs, and they disagree with each other. The tradition's eleven were assembled how?`,
          latin_tag: `passiones animae`,
          doctrine_line: `The passions are movements of the sense appetite, eleven in kind, mapped by their objects: good or evil, present or absent, simple or arduous.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "From introspection, by monks with unusually calm afternoons.",
                "feedback": "The afternoons were calm and the method was not introspection. A private inventory would face the modern problem: your eleven against my fourteen, and no referee. The tradition's list survives because it was never a diary in the first place."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "From Greek medicine's four humors, decently expanded.",
                "feedback": "The humors explained temperament, why this man runs hot; they never generated the passions' kinds. Aquinas knew the medicine and did not build on it. The list's spine is the object's coordinates, not the body's fluids."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "From Scripture's catalogue of the heart.",
                "feedback": "Scripture is thick with the passions, and the Psalms rehearse all eleven better than any textbook. But the derivation is philosophical: Scripture supplies the witness, not the grid. The tradition honors both books and keeps their offices distinct."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Derived: the object's coordinates generate the list, and it closes.",
                "feedback": "Respondeo: good or evil, present or absent, simple or arduous; run the combinations and there are altogether eleven passions differing specifically, six in the concupiscible and five in the irascible, and under these all the passions of the soul are contained (ST I-II q.23 a.4). A grid, not a scrapbook. That is why it closes and the surveys never do."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `m12-l3`,
      num: `III`,
      title: `Love Comes First`,
      latin: `amor`,
      tag: `amor`,
      fin: {
        tag: `amor`,
        heading: `The weight under everything.`,
        body: `Augustine confessed it once for the whole tradition: my love is my weight; wherever I am carried, it is love that carries me (Conf. XIII.9). <span class="lat">Amor</span> is the appetite's first fit to the good, the yes before any motion; desire is that yes in transit, joy is that yes at rest, and there is no passion of the soul that does not presuppose love of some kind (ST I-II q.27 a.4). This is why the tradition treats disordered fears as mispriced loves, and corrects the passions at the root rather than the branches. And it hands the module its next question: if love answers the apprehended good, then whatever shows the good runs the show. Nothing is willed unless first known. Next lesson.`,
        distinction: {
          latin: `amor`,
          english: `love`,
          gloss: `My love is my weight: the appetite's first yes to the good, and no passion of the soul that does not presuppose it.`,
          motif: `seed-tree`,
        },
      },
      questions: [
        {
          id: `m12-l3-q1`,
          type: "mcq",
          stem: `A father lies awake over his son's fever. Strike the love from the picture: what happens to the fear?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It evaporates; there is nothing left to fear for.",
                "feedback": "Respondeo: fear is love trembling for its good. Unloved, the fever is a stranger's data point, and the night is quiet. Every fear in your life marks the location of a love; the map of one is the map of the other."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It remains, as free-floating anxiety without an address.",
                "feedback": "Clinically real, philosophically parasitic: the floating kind still trembles for loved goods, safety, standing, life itself, only with the addresses smudged. Anxiety is fear that has lost its filing, not fear that has lost its love. Strike every love and even the fog lifts."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It grows, since love was the thing restraining it.",
                "feedback": "Love is not fear's warden; it is fear's employer. The father fears because he loves, in exact proportion, as every parent discovers on the first night of a first fever. Remove the employer and the employee does not riot. He goes home."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It matures into prudence, fear's rational twin.",
                "feedback": "Prudence is not a passion at all but right reason about what is to be done, and it too works for loved goods; unloved, there is nothing to be prudent about. The case is simpler and starker: no love, no trembling. The fear does not transform. It resigns."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l3-q2`,
          type: "mcq",
          stem: `Aquinas fixes the sequence: the appetite's aptitude or proportion to the good is love; movement toward it is desire; rest in it is joy (ST I-II q.25 a.2). What is love, on this account?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "An intense episode of desire, the kind that keeps you up at night.",
                "feedback": "Desire is already downstream: the yes in transit toward what is absent. Love is quieter and earlier, the fit itself; you can love what you securely have, with no reaching left in it. Intensity measures weather. Love is the climate."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The satisfaction of finally possessing the good.",
                "feedback": "That is joy, the yes at rest, third in the sequence. Love precedes possession the way the key precedes the door; the father loved the son before the son was well, before the son was anything but news. Rest is love's harvest, not its definition."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A deliberate choice to treat someone as valuable.",
                "feedback": "Nobler than the truth requires, and later. Choice belongs to the will, and even the will's love presupposes the first fit of appetite to good; nothing is chosen that did not first please. The tradition's amor begins beneath deliberation, as anyone who has been surprised by it can testify."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The first fit of the appetite to a good: the yes before any motion.",
                "feedback": "Respondeo: love is complacency in the good, the appetite's first proportion to it; desire is that proportion in motion, and joy is its rest (ST I-II q.25 a.2). Before you ever moved toward anything, something in you had already said yes to it. That yes is the passion the whole map presupposes."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m12-l3-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "Hatred is as original as love; some hearts simply begin with the no."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Observation confirms hearts that hate first and love later, if ever.",
                "feedback": "Observation reports the order of appearances, not the order of being. Interview any long-standing hatred and it gives up its employer: a good loved and threatened, a wound to something prized. The no arrives first on stage, with the yes holding its coat in the wings."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Good and evil are symmetric, so their passions must be symmetric too.",
                "feedback": "The premise fails before the inference starts: evil is a privation, a hole in being, not a rival standing across from the good. Holes are defined by what they are holes in. Hatred is accordingly defined by the loved good its object opposes; the asymmetry runs all the way down."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Every hatred guards a love: a thing is hated only as it opposes a loved good.",
                "feedback": "Respondeo: there is no other passion of the soul that does not presuppose love of some kind (ST I-II q.27 a.4). Hatred is love's border patrol, fierce exactly where the loved thing is dear. Hearts do not begin with the no; they begin with a yes the no was hired to defend."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Hatred is a judgment rather than a passion, so the comparison never gets started.",
                "feedback": "Right verdict, wrong rescue. Hatred sits on the map in good standing, the concupiscible's abiding no, with a body to prove it: jaw, pulse, the works. The claim fails not because hatred is exiled from the passions but because it is employed by one: the love it guards."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m12-l3-q4`,
          type: "mcq",
          stem: `The map in march order: love and hatred first; desire and aversion second; hope and despair third; fear and daring fourth; anger fifth; joy and sadness last (ST I-II q.25 a.3). Why do joy and sadness, of all passions, close the parade?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because they are the weakest, and the weak march in the rear.",
                "feedback": "Ask anyone flattened by grief how weak the rear guard is. The order of generation ranks by dependence, not by horsepower; what comes last presupposes the most. Joy and sadness close the parade because everything else was en route to them."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because they are the rest at the end of every movement: the terminus where appetite arrives.",
                "feedback": "Respondeo: every passion is a leg of one journey: love sets the proportion, desire and the irascible corps fight the distance, and joy or sadness is the arrival, rest in the good gained or under the evil landed. The last place is the place of completion. The parade ends where the appetite was going all along."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because they alone involve the body, which is slow.",
                "feedback": "Every passion involves the body; that has been the definition since the growl on the trail. Fear's cold hands are as corporeal as grief's weight. The ordering principle is not embodiment or speed but dependence: the terminus presupposes the journey."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because time ranks the passions by age, and these mature latest in a life.",
                "feedback": "Infants manage joy and sadness on the first day, ahead of hope's long apprenticeship. The march order is not a biography; it is a dependency chart. Joy is last because it is what the others are for, not because it arrives late in life."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m12-l3-q5`,
          type: "mcq",
          stem: `A man is governed by fears he cannot argue down: of poverty, of being unneeded. The tradition's counsel starts where?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At the fear itself: rehearse its improbability until it shrinks.",
                "feedback": "Useful hygiene, and the tradition does not despise it; but it prunes branches on a tree whose root is untouched. The fear regrows overnight because the love feeding it never went to bed. Arguments aimed at the fear miss the employer behind it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At the love beneath it: find what good is loved, and whether it is loved in the right size.",
                "feedback": "Respondeo: fear is love trembling, so the counsel goes to the root: what does this man love, and is it loved in proportion? Money loved as servant breeds prudence; loved as fortress, it breeds exactly these night watches. Correct the price of the love and the fears reprice themselves by morning."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At the body: passions are humors, and humors are diet.",
                "feedback": "The body is a real amplifier; sleep and bread change the volume, and the tradition knew it before the wellness industry did. But volume is not content. The fear's address, poverty, uselessness, is set by a love, and no diet reprices a love."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nowhere; passions pass on their own, and counsel flatters itself.",
                "feedback": "Weather passes; climates persist. A fear wired to a standing love is climate, and it has governed men for decades while flattering itself as patience. The tradition is more hopeful and more demanding: climates can be re-formed, at the root, on purpose."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m12-l3-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "Since love is first, a heart that loves is already in order."`,
          latin_tag: `amor`,
          doctrine_line: `Love is the first of the passions: the appetite's first yes, which every other movement presupposes.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Order flows from the root, so a loving heart cannot go far wrong.",
                "feedback": "Order flows from the root, which is exactly the danger: a crooked root orders the whole tree crookedly. The claim confuses having a first principle with having the right one. Every tyrant's heart was organized; that was the problem."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Love's primacy makes it self-correcting, the way first principles are self-evident.",
                "feedback": "First principles of thought are self-evident; first movements of appetite are merely first. Nothing about going first certifies going right, as any wrong turn at the head of a column demonstrates to everyone behind it. Love needs measuring against the good; primacy exempts it from nothing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Primacy is not rightness: the miser's fears and hopes are perfectly organized around a mispriced love.",
                "feedback": "Respondeo: the miser's soul is a tidy kingdom with a false king; every passion at its station, all of them serving a love priced wrong. Love's firstness makes it the point of correction, not a certificate of health. The question is never whether a heart loves. It is what, and in what size."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Love is not first in every case; sometimes fear begins the story.",
                "feedback": "Right verdict, and it costs the doctrine to get there. Fear never begins the story; it is hired by a love already in place, as this whole lesson has argued. The claim fails because ordered loving is a further achievement beyond loving, not because love ever yields the first move."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `m12-l4`,
      num: `IV`,
      title: `Nothing Willed Unless Known`,
      latin: `voluntas`,
      tag: `voluntas`,
      fin: {
        tag: `voluntas`,
        heading: `The menu writes the dinner.`,
        body: `The old tag holds the lesson: <span class="lat">nihil volitum nisi praecognitum</span>, nothing is willed unless first known. The intellect moves the will not by shoving but as an end: the good understood is the will's object, presented and drawing (ST I q.82 a.4). And since the will can tend only to what wears the good's aspect, whoever governs the presentation leans on the choice; hence temptation, advertising, and propaganda all bid for the same square foot of ground, your attention. The tradition's custody of the eyes is metaphysics applied: the gallery of images the interior senses keep is the will's menu-printer. But if the will follows what reason shows, is it free at all? Next lesson answers with the tradition's chest out.`,
        distinction: {
          latin: `nihil volitum nisi praecognitum`,
          english: `nothing willed unless first known`,
          gloss: `The menu writes the dinner: the intellect moves the will as an end, so whoever governs the presentation leans on the choice.`,
          motif: `window-view`,
        },
      },
      questions: [
        {
          id: `m12-l4-q1`,
          type: "mcq",
          stem: `The old tag first: <span class="lat">nihil volitum nisi praecognitum</span>, nothing is willed unless first known. Test it: try, right now, to want a fruit no one has ever told you about. What happens?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing happens; the want has no object to form around.",
                "feedback": "Respondeo: appetite follows apprehension at every rung, and the will dines only on what is presented. The unnamed fruit cannot be wanted because it has never been served, not even as a rumor. The menu is a condition of the dinner."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A vague want forms, proving appetite can outrun knowledge.",
                "feedback": "Inspect the vague want: it is for something new, something sweet, something else, every phrase a known good in loose clothing. Appetite never outran knowledge; it borrowed knowledge's generic wardrobe. The tag survives the fog it predicted."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The fruit is wanted unconsciously, as the moderns would say.",
                "feedback": "An unconscious want of a never-presented object is a wanting with no address whatsoever, which is a tendency of nothing toward nothing. The unconscious is a warehouse of old presentations, not a loophole in the tag. Even buried wants were served once, upstairs."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Real wanting begins in the body, which needs no presentations.",
                "feedback": "Hunger itself follows an apprehension: food as such, presented by nature's own kitchen. The body's wants are the sense appetite's, and sense is a knower in its own right. Nothing in you wants blind; the rungs differ in how the good is shown, never in whether."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l4-q2`,
          type: "mcq",
          stem: `The intellect moves the will, then. Like a hand moving a stone, or some other way?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Like a hand: thought shoves the will along its track.",
                "feedback": "If thought shoved, deliberation would be compulsion and the strongest argument would drag you like a current. But you have watched a conclusive case for the early bedtime lose to a lamp and a good book. The intellect's grip is real and it is not a shove."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "As an end moves: the good understood is presented, and draws.",
                "feedback": "Respondeo: the good understood is the object of the will, and moves it as an end (ST I q.82 a.4). Ends move the way a destination moves a traveler: by being worth arriving at. The intellect proposes; nothing about proposing is pushing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It does not move it at all; the will is self-starting in every respect.",
                "feedback": "Self-starting toward what? A will with no presented object is an engine in a field with no roads. The will exercises itself, truly; but its object comes from the intellect's table, and an appetite is specified by what it is shown. Every respect claims too much."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "By attrition: reason repeats itself until the will consents from fatigue.",
                "feedback": "A portrait of certain committee meetings, not of the soul's anatomy. Repetition can wear down resistance, but that is rhetoric's mechanics, not the intellect's office. The proper motion is cleaner: show the good as good, and the will inclines because that is what wills are."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m12-l4-q3`,
          type: "spot_the_fallacy",
          stem: `A seminar voice: "People choose evil knowingly. The addict knows the drug is destroying him, and reaches for it anyway. So much for the will following the understood good." Something slid. Find it.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The premise is false: during craving, addicts know nothing at all.",
                "feedback": "False and unkind at once; the knowledge persists, which is why the reaching hurts. Erasing the addict's mind to save the doctrine is the kind of rescue the doctrine should refuse. The trouble is not whether he knows. It is which knowing was on duty."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The slide is in destroying: drugs damage, but destruction exaggerates.",
                "feedback": "A quibble at the coroner's expense, and no help to the argument either way; soften the verb and the seminar voice makes the same point. The contraband is not riding in the damage report. It is riding in the little word knows."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Knows equivocates: stored knowledge is not the practical presentation ruling this moment; the reach follows that.",
                "feedback": "Respondeo: caught. The addict's stored judgment says poison; the presentation on duty at 2am says relief, warmth, an end to shaking, and the will tends to what is apprehended as good (ST I-II q.8 a.1), for evil is never loved except under the aspect of good (ST I-II q.27 a.1 ad 1). The case does not refute the doctrine. It is the doctrine, photographed mid-crime."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No slide: the case refutes the doctrine, and honesty should admit it.",
                "feedback": "The doctrine predicts this crime scene in detail: divided knowledge, appetite bribing attention, the apparent good winning the evening's presentation war. A theory that explains the wreck is not refuted by the wreck. What honesty should admit is how well the old account reads a modern chart."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m12-l4-q4`,
          type: "mcq",
          stem: `The thief, classically. He wants the money's warmth, safety, standing. What does his theft prove about the will?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That the will can choose evil as evil, given enough corruption.",
                "feedback": "Interview the corruption: at the bottom of every vicious choice sits a good, badly priced, eagerly wanted. Even spite pursues the sour satisfaction of spiting. Evil as evil has no pull to offer an appetite; corruption changes the pricing, never the currency."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That appetite for money is artificial, trained into us by markets.",
                "feedback": "Markets trained the medium, not the wanting; the goods under the money, security, comfort, regard, are as old as tents. The thief in any century wants the same warmth by different tokens. The case is about the will's currency, and the currency predates coinage."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That the will is finally indifferent, taking good and evil alike.",
                "feedback": "An indifferent will would sometimes steal misery on purpose, at no gain, for the evil of it, and even the connoisseurs of transgression collect their dark pleasures as pleasures. The docket shows no pure cases. Indifference is refuted by every crime's motive line."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That even vice runs on the good's fuel: the will tends only to what wears the good's aspect.",
                "feedback": "Respondeo: every appetite is only of something good, and the end is a good, or an apparent good (ST I-II q.8 a.1). The theft indicts the pricing, not the currency: real goods, wanted out of order, at their owner's expense. Vice is not a second fuel. It is the one fuel, spent badly."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m12-l4-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "If the will can only follow the apparent good, then no one is guilty of anything; they all thought it was good."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Guilt requires choosing evil as evil, which the doctrine has just forbidden.",
                "feedback": "Then guilt has never existed anywhere, and the word survives as a museum piece; a strange result to hand every court and every conscience. The doctrine forbids evil chosen as evil. It says nothing to protect the long career of arranging which goods get to appear."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Appearances excuse, because no one governs how things appear to him.",
                "feedback": "The premise is the false step: appearance has governors. You choose where to look, what to reconsider, which voices to keep in the room; the drunkard chose the first drinks that trained the later thirst. Some appearances are cultivated like orchards. Their fruit is not an alibi."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The aspect of good can be culpably manufactured: attention, evasion, and chosen frames are ours to govern.",
                "feedback": "Respondeo: the will follows the presentation, and the presentation follows a history of voluntary acts: looks taken, questions ducked, counsel avoided. Guilt lodges in that history. The tag never excused anyone; it relocated the crime scene upstream, where the menu gets written."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Guilt attaches to outcomes, and outcomes are public facts beyond appearances.",
                "feedback": "Right verdict, borrowed courtroom. Outcomes are the insurance adjuster's jurisdiction; guilt is older, seated where knowledge and consent meet. A surgeon's tragic outcome may carry no guilt, and a failed poisoner's clean outcome carries plenty. The answer to the excuse is upstream, not outside."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m12-l4-q6`,
          type: "mcq",
          stem: `Why do temptation, advertising, and propaganda all fight for the same square foot of ground: your attention?`,
          latin_tag: `voluntas`,
          doctrine_line: `The will tends only to the good as presented by the intellect; nothing is willed unless first known.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because attention is scarce, and scarce things get auctioned.",
                "feedback": "True economics, borrowed premise. Scarcity explains the price of attention; it does not explain why appetite's traders want it at all. Scarce shoulder blades attract no bidding wars. The value sits in what attention does downstream, in the will's kitchen."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the will follows the good as presented; govern the presentation and you lean on the choice.",
                "feedback": "Respondeo: nothing is willed unless first known, so the road to every will runs through a presentation, and the presenting is exactly what attention admits or refuses. The tempter, the brand, and the regime are one guild with one strategy: print the menu. The tradition's custody of the eyes is the counter-strategy, metaphysics applied at the door."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because repetition manufactures truth for the mind.",
                "feedback": "Repetition manufactures familiarity, which counterfeits truth to the tired; but even the counterfeit works by getting presented as good, familiar-therefore-safe. The guild's deeper asset is not the repeating. It is the standing appointment with your gaze."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because the passions cannot resist images, whatever reason says.",
                "feedback": "The passions resist images daily; ask any lapsed subscription. Cannot overclaims what the guild needs: only that images incline, that presentations tilt the field. The tilt is real and the will still plays. That is precisely why the fight is for the ground and not for the trophy."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `m12-l5`,
      num: `V`,
      title: `Free Because Rational`,
      latin: `liberum arbitrium`,
      tag: `liberum arbitrium`,
      fin: {
        tag: `liberum arbitrium`,
        heading: `The opening reason keeps.`,
        body: `The stone falls without judgment; the sheep judges the wolf by an instinct that never varies; the man judges by comparing, and so can go two ways (ST I q.83 a.1). <span class="lat">Liberum arbitrium</span>, free choice, is not indifference and not unpredictability: it is the will's dominion over particular goods, kept open because reason sees each of them against the good as such, and none of them closes the question. The determinist was met at the table, granted his every electrode, and answered with a distinction: preparations precede, the comparison decides, and even his plea to be believed was an exhortation. Freedom is the workshop where acts become human and habits become possible. One question remains for the module: are the passions this freedom's enemies, or its raw material? Next lesson: neither Vulcan nor volcano.`,
        distinction: {
          latin: `liberum arbitrium`,
          english: `free choice`,
          gloss: `The stone falls and the sheep never varies; the man compares each good against the good as such, and none closes the question.`,
          motif: `diverging-lines`,
        },
      },
      questions: [
        {
          id: `m12-l5-q1`,
          type: "mcq",
          stem: `Three movers (ST I q.83 a.1): the stone falls without judgment; the sheep flees the wolf by a judgment fixed by nature; the man judges by comparing, and can go two ways. Where exactly does freedom enter?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "With unpredictability: free acts are the ones no observer could forecast.",
                "feedback": "Your dearest friend forecasts your choices with embarrassing accuracy and abridges your liberty not at all. And dice are unpredictable while choosing nothing. Forecastability measures the observer's data, not the agent's dominion. The hinge is in the kind of judgment, not the odds."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "With the kind of judgment: one formed by reason's comparison, not fixed by instinct.",
                "feedback": "Respondeo: the sheep, seeing the wolf, judges it a thing to be shunned from natural instinct and not from free judgment; man judges by a comparison in the reason, and so retains the power of being inclined to various things (ST I q.83 a.1). Same wolf, two judges, one open verdict. Freedom enters with the comparing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "With indifference: freedom is caring about nothing enough to be compelled.",
                "feedback": "A freedom made of not caring would be perfected by apathy, and the saints would be its worst practitioners. The tradition's free man cares intensely and chooses anyway. The openness comes from how reason sees goods, not from a discount on loving them."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "With complexity: enough moving parts, and freedom condenses like dew.",
                "feedback": "Complexity multiplies outcomes, not dominion; a hurricane has more moving parts than a monk and chooses nothing. If parts could vote themselves free, the weather would have rights. Freedom needs a judgment bearing on universals, and no count of parts adds up to one."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m12-l5-q2`,
          type: "mcq",
          stem: `Why does reason's universality open the door that instinct keeps shut?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because reason grasps the good as such, so every particular good shows as finite: none closes the question.",
                "feedback": "Respondeo: and forasmuch as man is rational is it necessary that man have a free-will (ST I q.83 a.1). The sheep's instinct meets the wolf as a closed verdict; reason meets every finite good against the horizon of the good as such, where it shows its edges. What shows its edges can be declined. Freedom is the shadow the infinite casts on every particular."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because reason is slower than instinct, and the delay feels like liberty.",
                "feedback": "Deliberation takes time, but the time is spent doing something: comparing. A slow instinct would just be a sluggish sheep, arriving at the same closed verdict late. The felt pause is the workshop's noise, not the freedom itself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because reason doubts everything, and doubt is the root of liberty.",
                "feedback": "Reason at its best ends doubt, and the freest choices are often the most certain: the martyr does not dither. If doubt were the root, conviction would be slavery and the confident would be automata. The opening is in the object's finitude, not in the judge's hesitation."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because universals are vague, and vagueness leaves room to wander.",
                "feedback": "The good as such is the least vague thing the will ever meets; it is the one object it cannot refuse. Precision about the end is exactly what exposes the shortfall in every means. The wandering room comes from the gap between them, measured sharply, not from fog."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l5-q3`,
          type: "dialogue_branch",
          stem: `The Commentator sets the chair for a neuroscientist, friendly and armed: "Readiness potentials rise in the motor cortex before your subjects report deciding. The brain has decided before the man knows it. Your freedom is a story told afterward." Hand the Commentator his reply.`,
          payload: {
            "commentatorLine": "The Commentator folds his hands. 'A serious guest, and welcome at this table. Grant her every electrode; bring me the reply that stands after all her instruments are believed.'",
            "branches": [
              {
                "text": "Preparations precede; the tradition never denied stirrings before choice. Choice is the rational comparison among them, and timing the stirrings does not measure the comparing.",
                "verdict": "correct",
                "feedback": "The steel one. Antecedent motions are old doctrine: passions and dispositions rise first, as this module has said since the growl on the trail. The electrodes time the stirring; the comparison, bearing on goods as goods, has no cortex clock to read, for its object is universal. And note the laboratory's own furniture: subjects recruited, instructed, exhorted to comply. The experiment is soaked in the address to freedom it reports against."
              },
              {
                "text": "Concede gracefully: freedom is a fiction, but a necessary one, kept on the books for morality's sake.",
                "feedback": "A fiction necessary for morality makes morality a theater with no play behind it, and the guest will notice by Tuesday. The tradition does not keep freedom as scenery; it argues for it from the kind of judgment reason performs. Concessions this large purchase peace nowhere. Bring the distinction instead."
              },
              {
                "text": "Question her instruments: readiness potentials are probably artifacts, and the studies rarely replicate.",
                "feedback": "The lazy parry, and a hostage to next year's cleaner data. The tradition does not win by auditing electrodes; it wins by distinguishing what electrodes could ever measure. Grant every finding its full weight. The argument was never about voltage, so no voltage can settle it."
              },
              {
                "text": "Freedom is felt from the inside with total certainty, and no scan reaches what is felt.",
                "feedback": "The Cartesian coin, spent heads-up this time: private certainty against private illusion, and the guest holds testimony too. Feelings are evidence of nothing here; the drunk feels free and the scrupulous feels chained, and both are wrong. Argue from what judging is, an act of comparison under the good as such, and the scans find their true jurisdiction."
              }
            ]
          },
        },
        {
          id: `m12-l5-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "Free choice means the will is undetermined by anything, even by the good."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Any determination at all is a leash, and freedom means no leashes.",
                "feedback": "A will unleashed even from the good would choose from nothing, for nothing, toward nothing: not liberty but static. Every actual choice is made under the good's flag; the flag is not a leash. It is what makes the marching intelligible."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The saints refused even beatitude, which proves the will boundless.",
                "feedback": "The saints refused comforts, honors, and their own lives, every refusal made for beatitude, not from it. No one has ever declined happiness as such; the most desperate acts are its pursuit down wrong roads. The evidence runs exactly opposite the claim."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The will is necessarily ordered to the good as such; freedom is dominion over particulars.",
                "feedback": "Respondeo: necessity at the root, liberty in the branches. The will cannot not will happiness, and precisely because it is anchored there, every finite good arrives resistible, showing its edges against that horizon. Freedom is not escape from the good. It is the good's own spaciousness in a rational creature."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The will is determined by the strongest motive, so the claim fails from the other side.",
                "feedback": "Right verdict, rented reason, and the rent is ruinous: the strongest-motive rule is the determinist's furniture, already refuted by every held fast and kept vow. The claim fails because the will is anchored to the good as such, not because it is dragged by the loudest particular."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m12-l5-q5`,
          type: "mcq",
          stem: `Aquinas's opening argument is almost rude in its brevity: "Man has free-will: otherwise counsels, exhortations, commands, prohibitions, rewards, and punishments would be in vain" (ST I q.83 a.1). What kind of argument is that?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "An appeal to consequences: deny freedom and sad things follow, so do not deny it.",
                "feedback": "Appeals to consequences say believe, or else. This says something sharper: the denier cannot even conduct his denial without the thing denied. The sadness of a world without counsel is not the point. The impossibility of counseling us out of freedom is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "From authority: the practices are ancient, and antiquity settles it.",
                "feedback": "Antiquity settles nothing here and Aquinas does not lean on it; astrology is ancient too. The practices matter not because they are old but because they are unrenounceable: the very people denying freedom go on advising their children. Watch what everyone does, including the deniers."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "From despair: we cannot live otherwise, so we agree to pretend.",
                "feedback": "Pretense is exactly what the argument rules out: a pretended freedom would make counsels theater, and the counselor knows he is not acting when he warns his son about the ice. The practice is not a coping mechanism laid over reality. It is evidence of what the practitioners are."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "From performance: every ought, including the determinist's plea to be believed, presupposes an act that can go two ways.",
                "feedback": "Respondeo: the determinist who exhorts you to accept determinism has bowed to the doctrine he denies; exhortation addresses a power over alternatives or it addresses nothing. Counsels, commands, rewards, and punishments are humanity's standing testimony, renewed every time someone argues against freedom. The sed contra is lived before it is written."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m12-l5-q6`,
          type: "mcq",
          stem: `Last question of the lesson: what is freedom for?`,
          latin_tag: `liberum arbitrium`,
          doctrine_line: `Man has free choice because his judgment comes from reason's comparison, which no particular good can close.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "For choosing between good and evil: its noblest and defining exercise.",
                "feedback": "The power to choose evil is freedom's bruise, not its crown; the blessed cannot sin and are freer than we are. Defining liberty by its failure mode is like defining sight by the ability to go blind. The nobility sits elsewhere, in dominion over means."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "For election among means toward the end the will cannot not seek: the workshop of human acts.",
                "feedback": "Respondeo: liberum arbitrium is the faculty of self-determination about means, under an end held by necessity. In that workshop acts become imputable, ours in the ledger's full sense, and repeated acts settle into habits. Law will command this structure and virtue will perfect it; both are coming, and both presuppose tonight's freedom."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "For originality: acts so new that no nature could have predicted them.",
                "feedback": "Novelty is a byproduct, not the office; most free acts are magnificently unoriginal, the kept promise being the classic. A freedom aimed at surprise would reward caprice over fidelity, and the tradition ranks the faithful above the interesting. The workshop makes acts ours, not strange."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "For consenting to the strongest passion with dignity.",
                "feedback": "That would make freedom a notary for appetites, stamping what was already decided downstairs. The whole lesson has been the opposite: the comparison stands above every particular pull, able to ratify or refuse. The passions are citizens with real voices. They are not the crown."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `m12-l6`,
      num: `VI`,
      title: `Passions Are Not Sins`,
      latin: `passio et ratio`,
      tag: `passio et ratio`,
      fin: {
        tag: `passio et ratio`,
        heading: `Neither Vulcan nor volcano.`,
        body: `Two counterfeits of mastery, both refused. The Stoic ideal empties the man: all passions evil, stillness the crown; the sentimentalist inverts him: the feeling is the act's whole worth. Aquinas stands with the Peripatetics, and further: it belongs to the perfection of moral good that a man be moved to the good not only in his will but in his sensitive appetite too, heart and flesh rejoicing together (ST I-II q.24 a.3). Passion before judgment clouds it; passion after judgment crowns it. And reason rules this republic by a politic and royal power, not a despotic one, for the appetite has something of its own and can resist (ST I q.81 a.3 ad 2): citizens, not slaves, which is why mastery is governance and habituation rather than a switch. The settled, second-nature form of that governance is called virtue, and the course is walking toward it. First, the recapitulation.`,
        distinction: {
          latin: `passio et ratio`,
          english: `passion and reason`,
          gloss: `Neither Vulcan nor volcano: passion before judgment clouds it, passion after judgment crowns it, and reason rules citizens, not slaves.`,
          motif: `borrowed-crown`,
        },
      },
      questions: [
        {
          id: `m12-l6-q1`,
          type: "mcq",
          stem: `A man watches a child wronged and feels nothing: pulse even, face calm, thoughts in order. Is his calm a virtue?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes; the ideal under provocation is exactly that stillness.",
                "feedback": "The Stoic's answer, and the tradition heard it out and voted no. Where a good is loved as it deserves, its violation should move the lover; the appetite's silence here is not serenity but absence. An unmoved witness to a child's wrong is missing something owed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, provided he acts justly afterward; the feeling itself is morally idle.",
                "feedback": "The act is the greater part, and feeling never substitutes for it; so far, agreed. But idle goes too far: the tradition holds that being moved to the good in the sensitive appetite belongs to moral perfection itself. The just act done cold is good. The same act with the whole man in it is better."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No, because feeling everything strongly is the mark of a live soul.",
                "feedback": "The volcano's answer, no better than the Vulcan's. Strength of feeling certifies nothing; rage at traffic is strong and worthless. What indicts the calm here is not its lack of voltage but its lack of due proportion to a real evil. The measure is the object, never the amperage."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No; something owed is missing: anger's absence before this evil is a defect, not a crown.",
                "feedback": "Respondeo: the passion is due where the object deserves it; injustice to a child deserves the surge that rises to set things right. Aquinas sides with neither the Vulcan nor the volcano: passions are neither sins to suppress nor oracles to obey, but movements to be ruled and, ruled, to be enlisted. The calm man is not above the battle. He is absent from it."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m12-l6-q2`,
          type: "mcq",
          stem: `The two schools, on the record: "the Stoics held that all passions are evil, while the Peripatetics maintained that moderate passions are good" (ST I-II q.24 a.2). Where does Aquinas stand?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "With the Stoics: sainthood is passionlessness achieved.",
                "feedback": "The saints weep, burn, and exult on every page of their lives; the Master himself wept at a tomb and blazed in a temple. A doctrine that indicts those tears has indicted the wrong party. Aquinas reads the record and files with the other school."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "With the Peripatetics: passions ruled by reason are good, and can be commanded into the good act.",
                "feedback": "Respondeo: moderate passions, ruled and enlisted, enter the goodness of the act. Aquinas adds a peacemaker's note: the two schools differ in reality little or not at all, since the Stoics called passions only the movements that escape reason (ST I-II q.24 a.2). The quarrel was half vocabulary. The doctrine that survives it is the Peripatetic one."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Between them: passions are always morally neutral, mere weather.",
                "feedback": "Neutral only while un-summoned and un-consented; as voluntary, commanded or indulged or refused a veto, they take on moral color (ST I-II q.24 a.1). Weather that answers to the government is not mere weather. The tradition grades it accordingly."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Above them: passions belong to the body, morality to the soul, and the two never meet.",
                "feedback": "The partition is Cartesian, and the person it divides is fictional. One being digests, fears, and chooses; the passions are the sense appetite's acts in that one being, commandable and refusable. What can be commanded can be moral. The meeting happens daily, at every resolve."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m12-l6-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "A passion can make a good act better."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. It belongs to moral perfection that the whole man move to the good: will and sense appetite together.",
                "feedback": "Respondeo: it belongs to the perfection of moral good that a man be moved unto good not only in respect of his will, but also in respect of his sensitive appetite, as the Psalm has it: my heart and my flesh have rejoiced in the living God (ST I-II q.24 a.3). The cold just act is good. The same act with the flesh rejoicing is the whole man's act, and more."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Feeling is what makes acts moral in the first place.",
                "feedback": "The sentimentalist's inflation. Feeling accompanies, seconds, and crowns; it does not constitute. An act's moral spine is object, end, and reason's rule, and a wave of warmth over a bad act improves nothing but the perpetrator's mood. The passion betters the good act only because the act was good without it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Passion always clouds judgment, so it always subtracts.",
                "feedback": "Always overreaches: the clouding charge sticks to passion that runs ahead of judgment, and the tradition presses it there. Passion that follows the judgment clouds nothing; it arrives after the verdict, as escort. One word, two positions in the column of march, two verdicts."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Passion is noise in the signal; the clean act is the passionless one.",
                "feedback": "The Vulcan again, now in an engineer's coat. The metaphor begs the question by casting the appetite as interference rather than as part of the instrument. The tradition tunes the whole instrument, flesh included, and calls the full chord perfection. Cleanliness of that kind is amputation."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l6-q4`,
          type: "mcq",
          stem: `Two men give alms. One is carried by a wave of pity and hardly notices deciding. One judges the need, chooses, and warmth follows the choice. The tradition ranks them. How, and why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The first higher: his heart moved before his head, and hearts outrank heads.",
                "feedback": "The romantic ranking, and the tradition declines it. The first man's coin is real and his pity honorable; but he was moved before he ruled, and what moved him could as easily have moved him wrong. Passion ahead of judgment borrows the act. Judgment ahead of passion owns it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Equal: the coins weigh the same, and the beggar eats either way.",
                "feedback": "The beggar's ledger balances; the moral ledger measures the agents, not the alms. One act proceeded from a passion that happened to be pointed well; the other from a judgment that would have held in any weather, with the passion arriving as escort. Same coin, different men."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The second higher: passion that follows judgment crowns the act; passion that precedes it moved the man before reason did.",
                "feedback": "Respondeo: it is more praiseworthy to do a work of charity from the judgment of reason than from the mere passion of pity; passion antecedent obscures the judgment, passion consequent overflows from it or is summoned to serve it (ST I-II q.24 a.3, ad 1). The warmth after the choice is the whole man catching up with his will. That is the crown, in the right place."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither ranks; comparing charities is idle piety.",
                "feedback": "The tradition compares them because the comparison teaches: it locates where moral weight sits, in the order of judgment and appetite. Refusing the question leaves both men uninstructed. Rank the acts rightly and the first man knows exactly what to practice."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m12-l6-q5`,
          type: "distinction_application",
          stem: `The cut, fixed. Antecedent passion rises before judgment and colors it. Consequent passion follows the choice, as overflow or as summoned to serve it. Classify: after choosing to forgive her brother, a woman feels warmth toward him arrive like a change of weather.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Consequent: the overflow of a choice into the sense appetite; the whole man catching up with the will.",
                "feedback": "Respondeo: the judgment led and the warmth followed, which is the consequent passion's exact signature. Nothing here colored the verdict; the verdict colored the weather. This is the passion the tradition calls a perfection: heart and flesh arriving where the will already stood."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Antecedent: the warmth plainly caused the forgiveness.",
                "feedback": "The case states the order: chose first, warmth after. Antecedent passion writes the verdict it precedes; this warmth signed nothing, having arrived to find the document sealed. Reading causation backward against the given order is the one move the cut forbids."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Antecedent: all feelings precede choices in fact, whatever the story claims.",
                "feedback": "A dogma wearing a lab coat. Some feelings precede and some follow; the martyr's joy and the forgiven quarrel both arrive after their choices, on schedule, in every century's records. Flattening the order to one direction erases exactly the distinction that carries the moral weight."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither: warmth is a mood, not a passion, and stands outside the cut.",
                "feedback": "The warmth has an object, her brother, and a direction, toward; that is appetite in motion, a passion in good standing. Moods are the climate such motions happen in. Exile the case to meteorology and its whole moral interest, the order of will and appetite, is lost."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m12-l6-q6`,
          type: "mcq",
          stem: `Reason rules the passions, says the tradition, by a politic and royal power, not a despotic one: the sense appetite "has something of its own, by virtue whereof it can resist" (ST I q.81 a.3 ad 2). What follows for self-mastery?`,
          latin_tag: `passio et ratio`,
          doctrine_line: `Passions are not sins: ruled by reason they enter the goodness of the act, and their absence can be a defect.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing rules citizens like fear; be harsh with the appetites early.",
                "feedback": "Harshness is despotism's tool, and the constitution here is not despotic; appetites ruled by terror revolt on schedule, as every crash diet testifies. The politic ruler is firm without being punitive. He governs subjects who have something of their own, and he governs for their good."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Mastery is governance: persuasion, habituation, timing; a ruler of citizens, not a driver of slaves.",
                "feedback": "Respondeo: the body obeys like a slave, instantly; the appetites obey like citizens, with rights of remonstrance, which is why they can resist the command of reason (ST I q.81 a.3 ad 2). So mastery is statecraft: train them, time them, enlist them. The settled, second-nature form of that statecraft is called virtue, and a later module builds it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The resistance proves the passions corrupt; starve them into silence.",
                "feedback": "The Stoic returns in an ascetic's rope belt. Resistance proves citizenship, not corruption: something with a voice of its own is exactly what the doctrine predicted. The tradition's fasts discipline the appetites for enlistment; contempt aims at their abolition, and abolition is the Vulcan's dream, refused."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Since they resist anyway, let them vote their conscience freely.",
                "feedback": "Citizens, yes; the franchise, no. The republic of the soul is royal as well as politic: reason wears the crown, and appetites counsel without commanding. Hand them the vote and the volcano governs, which is mere despotism from below. The constitution requires both houses in their places."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `m12-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The person, complete in outline.`,
        body: `Count what the course now holds of you: a knower who lands on things, a signifier whose words ride concepts to the world, and now a lover and chooser: <span class="lat">appetitus</span> on three rungs, eleven passions mapped from their objects, <span class="lat">amor</span> under all of them, the will necessitated only by happiness, free over every particular good because reason compares, and the passions ruled as citizens under a politic crown. The map is drawn; what remains is the government. The free act now meets law: what makes an act human, and what makes it good. That is the next module's country.`,
        distinction: {
          latin: `amor`,
          english: `love`,
          gloss: `My love is my weight: the appetite's first yes to the good, and no passion of the soul that does not presuppose it.`,
          motif: `seed-tree`,
        },
      },
      questions: [
        {
          id: `m12-l7-q1`,
          type: "match_pair",
          stem: `The ladder and its crown, one last time. Match each power to its charter.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "natural appetite"
              },
              {
                "id": "L2",
                "text": "sense appetite"
              },
              {
                "id": "L3",
                "text": "the will (voluntas)"
              },
              {
                "id": "L4",
                "text": "liberum arbitrium"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "the inclination following any form, no knowledge required"
              },
              {
                "id": "R2",
                "text": "the appetite following the sensed good, body in tow"
              },
              {
                "id": "R3",
                "text": "the intellectual appetite, following the good understood"
              },
              {
                "id": "R4",
                "text": "the will's dominion over means, born of reason's comparison"
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
              "all_correct": "Four charters, correctly filed. The stone tends, the deer desires, the man wills, and among goods that do not compel, he chooses. One ladder of appetite, and freedom standing on the top rung because reason holds the lamp.",
              "partial_correct": "Some charters misfiled. Climb by apprehension: no knowledge in the stone, sensation in the animal, understanding in the man; and freedom is not a fourth rung but the top rung's dominion over particulars."
            }
          },
        },
        {
          id: `m12-l7-q2`,
          type: "mcq",
          stem: `Of the eleven passions, one has no contrary (ST I-II q.23 a.4). Which, and why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Fear, because nothing stands opposite the dark.",
                "feedback": "Daring stands opposite the dark, and runs at it; the map pairs them exactly there, fourth in the march. Fear is well married. The widowed passion is the one that answers an evil already arrived and still fighting."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Joy, because nothing opposes the terminus.",
                "feedback": "Sadness opposes it precisely: rest in the good gained against rest under the evil landed, the parade's paired last rank. The terminus has two doors. The unpaired passion is not at the end of the march but in its hardest middle."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Anger: against a present arduous evil, the only counter-movement is collapse into sadness, which is another chamber's rest.",
                "feedback": "Respondeo: anger which has not contrary passion (ST I-II q.23 a.4). Once the evil is present and steep, appetite either surges to overcome or sinks beneath, and the sinking is sadness, filed with the concupiscible. No opposite surge exists; there is no anti-anger, only the fight or the weight."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Despair, because hope refuses to face it.",
                "feedback": "Hope faces it across the same arduous good, one stretching toward it as reachable, one letting go of it as lost: a textbook contrariety, third in the march. Despair is paired. Seek the passion whose battlefield leaves only one direction standing."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m12-l7-q3`,
          type: "fill_blank",
          stem: `The module's three nails, driven. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;"><span class="fb-blank" data-blank="b1">______</span> is the first of the passions; nothing is willed unless first <span class="fb-blank" data-blank="b2">______</span>; and reason rules the passions with a <span class="fb-blank" data-blank="b3">______</span> power, not a despotic one.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "love",
                  "amor"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "known"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "politic",
                  "royal"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "love",
              "fear",
              "known",
              "felt",
              "politic",
              "despotic",
              "natural",
              "boundless"
            ],
            "feedback": {
              "all_correct": "Locked: love, known, politic. The root, the menu, and the constitution: every passion presupposes love, every willing presupposes a presentation, and the government of appetite is statecraft over citizens. Three nails, one anthropology.",
              "partial_correct": "Some nails bent. Love is the appetite's first yes; the will dines only on what is presented (nihil volitum nisi praecognitum); and the appetites obey as citizens, with something of their own, under a politic and royal crown."
            }
          },
        },
        {
          id: `m12-l7-q4`,
          type: "mcq",
          stem: `The kitchen again, eleven o'clock, the cake and the fast. Name everything now standing in that room.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "One desire beating another, as always and everywhere.",
                "feedback": "The first lesson's first wrong answer, returned for sentimental reasons. Two appetites of two powers stand in that kitchen, not two weights on one scale; the fast holds by a wanting that follows understanding. The module was written against this sentence."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A sense appetite desiring, a will electing under the good understood, passions remonstrating like citizens, and freedom in reason's comparison.",
                "feedback": "Respondeo: the full census. Desire reaches for the absent pleasant good; the will holds the fast under the good as understood; the appetite resists as a citizen with something of its own; and between cake and fast stands the comparison no particular good can close. One kitchen, the whole anthropology."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A will crushing an appetite, by despotic right.",
                "feedback": "The constitution forbids the verb. The appetite is not crushed but governed, and it will be heard from again at breakfast, remonstrating lawfully. Despotism over passions is the Stoic's fantasy and the crash diet's method, and the tradition signs neither."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A standing proof that cake is an occasion of evil.",
                "feedback": "The cake leaves this module with its reputation intact: a genuine good, finite, fragrant, and refusable. Nothing about the fast requires slandering the pastry. The drama was never in the cake; it was in the two wantings and the crown that ranks them."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m12-l7-q5`,
          type: "mcq",
          stem: `What does this module hand the course going forward?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Techniques for managing difficult emotions.",
                "feedback": "Techniques may fall out of it, the way engineering falls out of physics; but the module built the physics: what appetite is, how its movements divide, where freedom enters. Management without the map treats citizens as noise. The tradition drew the map first, on purpose."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Proof that feelings are illusions laid over neural machinery.",
                "feedback": "Nearly the reverse: the passions are real motions of a real appetite, with the body carried in them, mapped and dignified and enlisted. The machinery objection got its chair, its fair hearing, and its answer at the table. Nothing was called an illusion except the determinist's job transfer."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "An appetitive structure ready for law and virtue: acts imputable because free, passions rulable because citizens.",
                "feedback": "Respondeo: law will command this structure, and virtue will perfect it. An act is imputable because it proceeded from reason's free comparison; a passion is trainable because it obeys as a citizen, not a slave. The next modules build on tonight's foundation, which is why it was poured this carefully."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The end of metaphysics, now that psychology has taken over.",
                "feedback": "The psychology here is metaphysics wearing its work clothes: form and inclination, act and object, privation and good. Appetite follows form as surely in the will as in the falling stone. The course did not change subjects. It brought the same subject indoors."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m12-l7-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "The battle for the will is fought first in what we attend to and love."`,
          latin_tag: `recapitulatio`,
          doctrine_line: `Appetite crowned by reason: the will free over particulars, the passions ruled as citizens, love at the root of all.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Appetite follows apprehension and every passion presupposes love: the menu and the loves come first.",
                "feedback": "Respondeo: nothing is willed unless first known, and nothing stirs that does not presuppose love; so the ground war is over presentations and prices, what gets shown and what gets loved at what size. The comparison remains free, which is why it is a battle and not a verdict. But wise combatants fortify upstream."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Attention is destiny, and choice merely publishes its results.",
                "feedback": "The determinist's toll, paid at a different booth. Attention tilts the field; the comparison still plays, or the exhortation to guard your eyes would itself be in vain. The claim is true without the fatalism: first in the battle's order, not instead of the battle."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The will is unconditioned, so attention and love are strategically irrelevant.",
                "feedback": "An unconditioned will was refused in Lesson 5's own terms: the will is anchored to the good as such and dines on presentations. A commander who calls the supply lines irrelevant has planned his own defeat. The tradition posts sentries at the eyes precisely because the will is conditionable, though never compelled."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The battle is fought in the body only; feed it well and the will follows.",
                "feedback": "The body is a real theater and a minor one; bread and sleep change the volume, never the address. What is loved, and what is shown, set where the passions march. Quartermasters matter. They do not choose the war."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    }
  ],
};
