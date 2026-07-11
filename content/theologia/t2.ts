import type { ModuleMeta } from '../types';

/** T2 · The Existence of God: The Five Ways at Depth. Wired into the live app by scholastica-claude-code-wing-parity-RUN.md (WP-A). Content is the authored t2-content.json, copied faithfully; no prose edits. */
export const t2: ModuleMeta = {
  id: 2,
  title: `The Existence of God: The Five Ways at Depth`,
  short: `De Existentia Dei`,
  label: `Theologia II · The Existence of God: The Five Ways at Depth`,
  latin: `De Existentia Dei`,
  aim: `That God exists is self-evident in itself, for God is His own existence; it is not self-evident to us, who do not see His essence, and so it is a real question with a real answer: demonstrable a posteriori, from effects better known to us. The five ways run on Part I's whole equipment. Motion runs on act and potency and ends at Pure Act; efficient causality and contingency end at the first uncaused cause and the being necessary of itself; degrees of perfection run on participation and end at the cause of all being; the governance of unknowing things ends at the intelligence that directs them. What the ways deliver is not the largest item in the world's inventory but Ipsum Esse Subsistens, whose essence remains unseen. And the Church has defined the climb: God can be known with certainty by the natural light of reason from created things, against the ditch that despairs of reason and the ditch that will believe nothing reason cannot prove.`,
  lessons: [
    {
      id: `t2-l1`,
      num: `I`,
      title: `The Road Reopened`,
      latin: `an Deus sit`,
      tag: `an Deus sit`,
      fin: {
        tag: `an Deus sit`,
        heading: `A real question, reopened on purpose.`,
        body: `The marble was the first thing the course ever showed you, and here it stands again at the door of the theology. <span class="lat">Utrum Deus sit</span>, whether God is: Aquinas posts it as a genuine question, and honors the fool of the Psalm as its genuine objector. Not because the answer is in doubt at the top of the Summa, but because the proposition, self-evident in itself, is not self-evident to us. We do not see the essence in which subject and predicate are one. So the road to God is the workman's road, from effects back to their cause, and the tradition is unembarrassed by the labor. A question you must climb is not a weaker question. It is the only kind whose answer you own at the top.`,
        distinction: {
          latin: `per se notum  ·  quoad nos`,
          english: `self-evident in itself  ·  to us`,
          gloss: `The proposition carries its own light where He lives and darkness where we stand: hence the climb.`,
          motif: `ladder-light`,
        },
      },
      questions: [
        {
          id: `t2-l1-q1`,
          type: "mcq",
          stem: `An untouched block of marble; a statue it may yet become. Above them, posted like a notice, the theology's first disputed question: <span class="lat">utrum Deus sit</span>, whether God is. A course that just spent eighteen modules proving it asks it again. Why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Courtesy: the question is ceremonial, the way a judge asks a name he already knows.",
                "feedback": "Nothing in a disputation is ceremonial; the objections are loaded and the fool gets his say. If the question were theater, Aquinas would not arm the other side with the problem of evil before answering. The question is real because our position in it is real: climbers, not seers."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Doubt: the Summa opens unsure, and works its way to confidence.",
                "feedback": "The Summa opens from sacra doctrina, received on the authority of God who reveals; doubt is not the posture. But received certainty and demonstrated conclusions are different holdings, and theology wants both hands full. The question is asked because it can be genuinely answered, not because the asker trembles."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Honesty: the truth is not self-evident to us, so it must be asked and demonstrated.",
                "feedback": "Respondeo: what is self-evident cannot be honestly disputed, and this can. We do not see God's essence, so the proposition does not light up on its own; it must be reached from what we do see. The question is reopened because, for minds like ours, it was never closed by mere inspection."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Method: every science re-proves its first principles before using them.",
                "feedback": "Part I's logic module forbids this: no science demonstrates its own first principles, and theology receives its principles from revelation, not from proofs. The existence of God enters theology as a preamble, reason's contribution. The reopening is about our darkness, not about a rule of method."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t2-l1-q2`,
          type: "mcq",
          stem: `Someone is coming up the road toward you. You know that much from the dust; you do not yet know it is Peter. Aquinas says our natural knowledge of God is like that. What is the distinction doing?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Denying natural knowledge of God: the dust is all there is, and dust proves nothing.",
                "feedback": "The image affirms the dust and the direction both: someone IS coming, and you truly know it. Aquinas grants real, natural, confused knowledge of God to everyone who desires happiness. What he denies is that this haze counts as knowing that God exists, absolutely and by name."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Splitting confused knowledge from absolute: nature gives the first, demonstration must earn the second.",
                "feedback": "Respondeo, on ST I q.2 a.1 ad 1: to know God in a general and confused way is implanted in us by nature, since God is our beatitude and we all desire it; but to know that someone approaches is not to know that Peter approaches. Many file their happiness under riches or pleasure. The name must be earned."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Proving God from universal desire: everyone wants happiness, so God exists.",
                "feedback": "That argument exists in the neighborhood, but it is not this text's move. Here the desire explains why some knowledge of God is implanted, not why His existence follows. Aquinas is measuring the haze, not converting it into a sixth way. The demonstration still runs from effects."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Excusing the fool: nobody can be blamed for missing what is only dust.",
                "feedback": "The tradition is harder on the fool than that, with the Apostle: the invisible things of God are clearly seen from what is made, clearly enough to leave men without excuse. The distinction locates the fool's error; it does not license it. Confused knowledge can be culpably left confused."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t2-l1-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "Since 'God exists' is self-evident in itself, anyone who denies it is talking nonsense, the way a man denying that wholes are greater than parts talks nonsense."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. What is self-evident in itself cannot be coherently denied by anyone.",
                "feedback": "The sed contra is a Psalm: the fool said in his heart, there is no God. Denials of the self-evident-to-us cannot be mentally admitted; this one can be and has been. The proposition's own light is real, but it shines where we cannot look, in the essence we do not see."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Whoever understands the word God correctly already sees that He exists.",
                "feedback": "That is Anselm's road, and the next question walks it at full strength. Aquinas will answer that understanding a word settles what exists mentally, not what exists actually. Meanings do not discharge demonstrations. If they did, the shortest dictionary would be the strongest library."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Self-evident in itself does not mean self-evident to us, who do not see God's essence.",
                "feedback": "Respondeo: in the proposition God exists, predicate and subject are one, for God is His own existence; so in itself it is supremely self-evident. But a proposition lights up for a knower only when the knower holds the terms, and His essence is exactly what we do not hold. Hence the fool speaks error, not nonsense, and error is answered by demonstration."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Nothing at all is self-evident; every claim without exception needs proof.",
                "feedback": "Overcorrection into the ditch where no proof could ever start. Wholes greater than parts, being not nothing: the first principles are self-evident to everyone, and demonstration lives off them. Deny all self-evidence and you have not raised the standard of rigor; you have abolished its bank."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t2-l1-q4`,
          type: "mcq",
          stem: `A saint argues from the definition: God is that than which nothing greater can be thought; what exists in reality is greater than what exists in thought alone; therefore God exists. Anselm means it, and Aquinas honors it. Where does the Summa say it stops short?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Granting the definition, the conclusion delivers only mental existence, not actual existence.",
                "feedback": "Respondeo, per a.1 ad 2: grant that the word signifies that than which nothing greater can be thought; it follows only that God exists mentally, in the understanding of the hearer. To get Him outside the mind you must already admit something actual than which no greater can be thought, which is the point in dispute. The definition is true; it is not a ladder."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The definition is wrong: God is not that than which nothing greater can be thought.",
                "feedback": "The definition is sound and the tradition keeps it; Aquinas quarrels with the leap, not the phrase. Indeed some hearers hold cruder notions, thinking God a body, but that shows the phrase is not universally possessed, not that it is false. The flaw is in the bridge from meaning to being."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Definitions are human conventions, so no argument from meanings can touch reality.",
                "feedback": "Too broad by half: every demonstration in the course argues through what terms mean, and a.2 will make the meaning of the word God the middle term of the real proofs. The trouble is not that meanings touch reality; it is that this argument asks a meaning to do existence's work alone."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It proves a maximum, and maxima are impossible: there is no greatest anything.",
                "feedback": "Curious timing for that principle, since the fourth way will climb precisely to something truest, best, and most noble, and the course will let it. Maxima are not the problem; the problem is boarding existence at the station of definition. Keep the objection; you will want it answered, not assumed, two lessons from now."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t2-l1-q5`,
          type: "syllogism_builder",
          stem: `The road, laid as an argument. Place each statement in its role: universal premise, particular premise, conclusion.`,
          payload: {
            "instruction": "Three statements, three roles. The universal gives the principle that governs every demonstration from effect to cause. The particular states where we actually stand. The conclusion opens the five ways.",
            "components": [
              {
                "id": "c1",
                "text": "From every effect better known to us, the existence of its proper cause can be demonstrated.",
                "role": "major"
              },
              {
                "id": "c2",
                "text": "The world of sense presents effects better known to us than their cause: things moved, caused, contingent, graded, governed.",
                "role": "minor"
              },
              {
                "id": "c3",
                "text": "Therefore the existence of God, though not self-evident to us, can be demonstrated from His effects.",
                "role": "conclusion"
              }
            ],
            "feedback": {
              "correct": "Built, and load-bearing: this is ST I q.2 a.2 in armor. Because every effect depends on its cause, the effect standing there is the cause's receipt. Five families of effects are about to take the stand: the moved, the caused, the contingent, the graded, the governed. One conclusion, five roads.",
              "incorrect": "Watch what each statement does. The universal is the engine of every a posteriori proof: effect in hand, cause demonstrated. The particular names our actual holdings, the world of sense. The conclusion is the thesis of the whole module: demonstrable, from effects."
            },
            "doctrineTag": "demonstratio · a posteriori"
          },
        },
        {
          id: `t2-l1-q6`,
          type: "fill_blank",
          stem: `Set the lesson in stone. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The proposition God exists is self-evident <span class="fb-blank" data-blank="b1">______</span>; it is not self-evident <span class="fb-blank" data-blank="b2">______</span>; therefore it is demonstrated from <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          latin_tag: `an Deus sit`,
          doctrine_line: `God's existence, self-evident in itself, is not self-evident to us; it is demonstrated a posteriori, from effects.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "in itself"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "to us"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "effects"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "in itself",
              "to us",
              "to angels",
              "effects",
              "definitions",
              "feelings",
              "authority",
              "instincts"
            ],
            "feedback": {
              "all_correct": "Locked: in itself, to us, effects. In God, essence and existence are one, so the proposition is self-evident where He lives and dark where we do. The whole module is the third blank unfolding: five effects, five roads, one terminus.",
              "partial_correct": "Some blanks resisted. The proposition carries its own light in itself, where predicate and subject are one; the light does not reach us, who do not see the essence; so the road runs through what we do see. Effects: the only door reason has."
            }
          },
        }
      ],
    },
    {
      id: `t2-l2`,
      num: `II`,
      title: `Motion and the Unmoved`,
      latin: `motus`,
      tag: `motus`,
      fin: {
        tag: `motus`,
        heading: `The staff moves because the hand moves it.`,
        body: `That is the whole engine, and you have owned its parts since the marble. Motion is potency being brought to act, and nothing brings itself, for nothing is in potency and in act in the same respect at once. Then the one clause on which the way turns: in a series where each mover moves only because it is being moved, postponing the first mover is abolishing the motion. Not a chain running back into the past, but a chain hanging in the present, every link borrowing now. At the top, necessarily, a mover that borrows nothing: no potency to actualize, nothing left to receive. The tradition's name for that is not the strongest thing in the world. It is <span class="lat">actus purus</span>, and the difference is the next three lessons.`,
        distinction: {
          latin: `motus  ·  actus purus`,
          english: `motion  ·  pure act`,
          gloss: `Whatever is moved is moved by another; the chain that borrows now must top out in act that borrows nothing.`,
          motif: `seed-tree-chain`,
        },
      },
      questions: [
        {
          id: `t2-l2-q1`,
          type: "mcq",
          stem: `Green wood, cold in the grate; the fire takes it; within the hour it blazes. In the first way's grammar, what just happened?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Cold vanished and heat appeared: one quality replaced by its rival.",
                "feedback": "Replacement describes the before and after; motion is the between. The wood was not two states filed in sequence but one subject crossing from readiness to possession. Miss the crossing and the first way has nothing to argue from: swaps need no mover, reductions do."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A potency was reduced to act by something already in act: fire, actually hot.",
                "feedback": "Respondeo, in the article's own instance: what is actually hot, as fire, makes wood, which is potentially hot, to be actually hot. Motion is nothing else than the reduction of something from potentiality to actuality, and only the actual can do the reducing. The marble's vocabulary, now bearing the first proof."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Thermal energy transferred until the two bodies approached equilibrium.",
                "feedback": "True, and welcome at the table; physics owns that register and owns it well. But the metaphysical question sits under the thermal one: how anything passes from can-be to is at all. Equations track the passage; act and potency say what a passage is. Different depths, no quarrel."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The wood moved itself: burning is what wood does when left alone.",
                "feedback": "Wood left alone is famously calm. To move itself in the same respect, the wood would need to be actually hot already, in order to make itself actually hot, which is to be and not be in act at once. Part I closed that door with a syllogism you built yourself."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t2-l2-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>But this cannot go on to infinity, because then there would be no first mover, and, consequently, no other mover; seeing that subsequent movers move only inasmuch as they are put in motion by the first mover; as the staff moves only because it is put in motion by the hand. Therefore it is necessary to arrive at a first mover, put in motion by no other; and this everyone understands to be God.</p><div class="cr-cite">ST I, q. 2, a. 3, co. · trans. Fathers of the English Dominican Province · verified against New Advent</div></div>The famous refusal of infinity. On what exactly does it rest?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "On dependence: each mover moves only as moved, so without a first there is no moving at all.",
                "feedback": "Respondeo: read the seeing-that clause; it is the whole argument. In this series the intermediates are instruments, staffs in hands; their moving is received while it happens. Lengthen the series and you multiply borrowers without a lender. The refusal is not that infinity is too many; it is that all of it would be waiting for a motion no one supplies."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "On mathematics: an actually infinite collection is impossible, so the chain must be finite.",
                "feedback": "Aquinas is gentler with infinity than that; elsewhere he entertains infinite multitudes without panic. The way does not count the links and cry halt. One staff moved by nothing already fails; adding staffs adds neediness, not motion. The problem is the kind of series, not its size."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "On time: trace motion backward far enough and you must reach a first push long ago.",
                "feedback": "The staff is moving now, and the hand is moving it now; the series climbs through the present, not the past. Aquinas holds, deliberately, that reason cannot prove the world began. His first mover is not the front of a parade that started once. It is what the whole parade leans on while it marches."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "On authority: everyone understands the first mover to be God, and consensus closes the case.",
                "feedback": "The closing clause is a label, not a lemma: having demonstrated a first mover moved by nothing, Aquinas notes that this is what men mean by the word God. The argument stands on the seeing-that clause; the last line files the conclusion under its public name. Lesson five will weigh that filing carefully."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t2-l2-q3`,
          type: "mcq",
          stem: `Two chains. The stone moves because the staff moves it, the staff because the hand, all at this instant. And: the son begotten by the father, the father by the grandfather, back through the centuries. Which regress does the first way forbid?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Both: any series of movers whatsoever must stop somewhere, or reason fails.",
                "feedback": "Then Aquinas refutes himself, for he explicitly allows the begetting chain to run back without end, so far as philosophy can see. The two series are not one kind. In one the links lean on each other now; in the other each man does his begetting and may die in peace."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Neither: regress is harmless everywhere; the way runs on something else entirely.",
                "feedback": "Half right, and the wrong half matters. The way does run on dependence, but dependence is exactly what makes the simultaneous regress fatal: instruments all the way up is motion from nowhere. Keep the harmless regress harmless and the fatal one fatal; the distinction is the lesson."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The simultaneous one, where each link moves only as moved: instruments cannot regress forever.",
                "feedback": "Respondeo: the tradition names them per se and per accidens. Hand, staff, stone hang together in one present act, each intermediate moving only while moved; there the buck must stop at something that simply moves. Grandfathers influence no begetting today; their series may be as long as God pleases. The way forbids the first kind only, and needs only that."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The ancestral one: an infinite past of fathers is absurd, so the world began.",
                "feedback": "Precisely the argument Aquinas declines to make. He holds that the world began by faith, and holds equally that reason cannot demonstrate it; an eternal chain of fathers embarrasses him not at all. His proof would survive an eternal world. That is its strength, not a concession."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t2-l2-q4`,
          type: "distinction_application",
          stem: `The two series, fixed. Per se: each member moves only insofar as it is moved by the prior, all acting at once; the order is of dependence. Per accidens: each member once received its being or motion, then acts on its own; the order is of history. Classify: the chain of fathers begetting sons, back beyond memory.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Per se: no father, no son, so every son depends on the whole line at once.",
                "feedback": "Every son depends on his father for having-come-to-be, not for his present begetting. Abraham does not assist at his descendants' weddings. The dependence is historical, discharged, filed; nothing in the line is leaning on the first member now. That is exactly what per se series never permit."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Per se, because life itself is being handed forward through the generations.",
                "feedback": "Handed forward once per link, like a baton, and a baton race is history in motion: each runner runs alone once the pass is made. In the hand and staff nothing is handed off at all; the grip is continuous or the stone stops. The poetry of lineage is real; the metaphysics is per accidens."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither: begetting is biology, and the distinction covers only physics cases.",
                "feedback": "The distinction covers dependence wherever dependence occurs; staffs and stones are furniture, not the doctrine. Biology supplies per accidens series handsomely, and could supply per se ones too, as when a heart pumps only while the living body sustains it. Sorting is the skill; exemptions are the dodge."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Per accidens: each begetter acted and retired; nothing hangs on the first now.",
                "feedback": "Respondeo: the line is long, venerable, and metaphysically relaxed; every dependence in it was discharged at the moment of begetting. Which is why Aquinas can shrug at its infinity while refusing infinity to the hand and staff. The first way climbs the taut chain, not the long one, and taut chains have tops."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t2-l2-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "The first way proves that the world had a beginning in time."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. A first mover means a first moment: the moment He first moved things.",
                "feedback": "First names rank in dependence, not date on a calendar. The hand is first relative to the staff while both move together in one present. A world that never lacked motion would still need, at every instant of it, a mover borrowing from nothing. Firstness of that kind has no birthday."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Otherwise an infinite past stands, and the way just refused infinite series.",
                "feedback": "It refused the taut series, the one whose members move only as moved now; the series of past motions is the relaxed kind, discharged link by link. Aquinas refuses one infinity and tolerates the other in the same breath, on purpose. Confusing them hands his critics their favorite strawman."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The way concludes to a present first mover of a present order, whatever the world's age.",
                "feedback": "Respondeo: Aquinas holds that the world began, and holds it by faith; reason, he says, cannot demonstrate it either way. The first way was built to be indifferent to the question: an eternal world would need the unmoved mover eternally. The proof is about what motion leans on, not when it started."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Time is not real in metaphysics, so beginnings are not a possible subject.",
                "feedback": "Time is real enough for Aquinas to define, measure against motion, and hand to the physicists with his blessing. The way is silent on the world's age not because age is unreal but because the argument's nerve runs through present dependence. Right verdict; the reason dissolves what should be distinguished."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t2-l2-q6`,
          type: "mcq",
          stem: `The terminus: a first mover, put in motion by no other. A skeptic pictures it as the universe's biggest engine, or a starter long since retired, or a thing too stiff to move. What has the argument actually delivered?`,
          latin_tag: `motus`,
          doctrine_line: `In a per se series of movers each moves only as moved; such a series terminates in a first mover that is Pure Act.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Pure Act: no potency to actualize, hence unmoved because nothing in Him is receivable.",
                "feedback": "Respondeo: moved means brought from potency to act; unmoved by no other means having no potency awaiting a bringer. That is Thesis I's lone occupant of the first pile: act without admixture. Not the stillness of the stalled, which is potency ignored, but the stillness of the complete, which has nowhere further to be brought. The engines are all downstream."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The strongest mover: enough power to push everything else in the system.",
                "feedback": "Strongest still belongs to the inventory, a champion among competitors, differing in degree. The conclusion differs in kind: every item in the system moves as moved, and the terminus is not in the system as an item at all. Muscle is the wrong category; act is the right one."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The first domino's pusher: one decisive shove at the start, retirement ever since.",
                "feedback": "That is the deist's pensioner, and the taut chain has no place to pension him. The staff needs the hand now, and the whole order of moved movers needs its first mover now. A shove that retired would be a motion that stopped. Whatever sustains present motion has never once let go."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A frozen thing: whatever cannot move must stand rigid, the stillest object there is.",
                "feedback": "Rigid objects are moveable things currently unbooked; their stillness is potency with the lights off. The unmoved mover is not the stillest object but no object at all in that sense: nothing in Him can be brought anywhere because nothing in Him is unrealized. Fullness reads as stillness only from below."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t2-l3`,
      num: `III`,
      title: `Cause, Contingency, Degrees`,
      latin: `ens ab alio`,
      tag: `ens ab alio`,
      fin: {
        tag: `ens ab alio`,
        heading: `The audit of borrowed being.`,
        body: `Three more roads, one bookkeeping. Nothing writes its own receipt: no thing causes itself, for it would have to precede itself. Nothing on loan explains the vault: what can fail to be holds its being the way a borrower holds money, and a world of pure borrowers is a ledger with no assets. And nothing graded grades itself: more and less good, true, noble are distances from a fullness, and distances require the fullness to be real. First uncaused cause; being necessary of itself; the cause of the being and goodness of everything that has some. Three conclusions with one shape: whatever has being on loan points to Being that is had by no one and lends to all. The lamps, as ever, are lit from one sun.`,
        distinction: {
          latin: `ens contingens  ·  ens necessarium`,
          english: `contingent being  ·  necessary being`,
          gloss: `What can fail to be holds its being on loan, and loans end at a lender who borrows nothing.`,
          motif: `lamps-one-sun`,
        },
      },
      questions: [
        {
          id: `t2-l3-q1`,
          type: "mcq",
          stem: `The second way opens with a flat report: in the world of sense we find an order of efficient causes, and no case is known, nor is it possible, in which a thing is the efficient cause of itself. Why is self-causation not just rare but impossible?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Experience: in all recorded observation, no self-causing thing has ever been found.",
                "feedback": "The article says more than unobserved; it says nor is it indeed possible. A survey can be overturned by one exotic specimen; this cannot. The impossibility is structural, sitting in what causing is, prior to any laboratory. Find the structure and the exotic specimen is refused in advance."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Physics: the conservation laws happen to forbid things from producing themselves.",
                "feedback": "Laws of nature govern what exists already; the question is about the existing. A law forbidding self-production would itself need standing before it could forbid anything. The refusal here is cheaper and deeper than physics: it costs one look at the word before."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Reverence: only God may cause, so creatures must not be credited with self-making.",
                "feedback": "Backwards, and the tradition would frown. Creatures cause constantly, really, gloriously; secondary causality is doctrine, not embarrassment, and a later module of this course is built on it. The bar is not on creatures causing. It is on anything, God included, standing prior to itself."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Priority: to cause itself, a thing would have to exist before it exists.",
                "feedback": "Respondeo, with the article: for so it would be prior to itself, which is impossible. A cause stands prior to its effect in the order of being; make the two one thing and it must outrank itself, be before it is. The absurdity is visible without instruments. Everything caused, therefore, is caused by another, and the order of anothers is the road."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t2-l3-q2`,
          type: "mcq",
          stem: `The third way starts from things that are generated and corrupt: things possible to be and not to be. Being, in them, is evidently on loan. What is the way's nerve?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Probability: given infinite time, every possibility occurs, including universal nothingness.",
                "feedback": "Dice-table metaphysics, and not the saint's. The way does not gamble on what infinite time must eventually deal; it audits what borrowed being can explain, which is not itself. Read it as probability and its critics win a hand it never played. Read it as a ledger and the vault question stands."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Insufficiency: what can fail to be does not account for its being; somewhere being is held necessarily.",
                "feedback": "Respondeo: the corruptible holds its existence as a borrower holds a loan, really but not from itself. A world made entirely of borrowers is a circle of debts with no depositor; run the audit through every contingent thing and the books do not balance until something exists that cannot not be. Then one step remains: necessary on loan, like souls and angels, or necessary of itself. The way ends only at the second."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "History: rewind far enough and there was nothing, so a first thing must have appeared.",
                "feedback": "If the way meant that, it would prove the world began, which Aquinas insists reason cannot prove; he does not saw off his own branch in q.46 after climbing it in q.2. The temporal phrasing dramatizes a structural point: the contingent, as such, never adds up to its own existence, at any date whatever."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Psychology: minds cannot picture sheer nothingness, so something necessary must exist.",
                "feedback": "What minds can picture is a fact about minds; the way is doing ontology. Plenty of the unpicturable is real and plenty of the picturable is not, as any geometry or any novel shows. The necessity concluded to is in being, not in imagination's limits. Weaker readings are always available; decline them."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t2-l3-q3`,
          type: "distinction_application",
          stem: `Three registers, fixed. Contingent: can be and not be, as the generated and corruptible. Necessary by another: cannot corrupt, yet holds even that incorruptibility as received. Necessary of itself: is its own necessity, underived. Classify: the human soul, which Part I showed subsistent and incorruptible.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Contingent: souls belong to generated things, and all the generated can corrupt.",
                "feedback": "The body is generated and corrupts; the soul, being subsistent form with no matter to lose, has nothing by which to fall apart. Part I earned that at full argumentative price. Incorruptible is the right column; the open question is only where the incorruptibility comes from."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Necessary of itself: what cannot corrupt depends on nothing for its endurance.",
                "feedback": "Cannot corrupt says nothing about cannot be uncaused. The soul's incorruptibility is real and yet received, held from the cause that holds the soul in being at all. Promote every immortal thing to self-necessity and heaven crowds with little gods; the tradition keeps one occupant in that register."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Necessary by another: incorruptible in itself, yet holding even that necessity as received.",
                "feedback": "Respondeo: the third way itself makes room, saying every necessary thing either has its necessity caused by another, or not. Souls and angels fill the middle register: no potency to corruption within, total dependence on the Giver without. The way then refuses infinite regress among received necessities and lands where it must: necessity that is not on loan. The middle register is real; it is just not the top."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "None of the three: spiritual things escape this classification altogether.",
                "feedback": "The classification is written to hold them; angels are its most famous middle occupants, and Aquinas files them there without apology. Exempting the spiritual from the audit of dependence does it no honor. Creatures are creatures all the way up, and the register that receives its necessity says exactly that."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t2-l3-q4`,
          type: "mcq",
          stem: `The fourth way: among beings, some are more and some less good, true, noble. More and less name distances from a maximum, and the maximum in any genus causes all in that genus. Where does this way's real weight sit?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "In participation: graded perfection is perfection had partially, and the partial points to unparticipated fullness.",
                "feedback": "Respondeo: more and less noble is nobility poured into narrower and wider cups, and poured perfection is exactly what Part I called participation. Degrees of being are had being; had being demands a haver by essence, to all beings the cause of their being, goodness, and every other perfection. The lamps were lit from one sun; the fourth way is that image standing trial, and winning."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In the physics of heat: fire, the maximum of heat, causes all hot things.",
                "feedback": "The fire is an illustration wearing medieval clothes, and Aquinas would cheerfully update the wardrobe. Retire the example and the argument does not limp: goodness, truth, and being are not physical quantities with a hottest object. The nerve is participation in perfection, which no thermometer was ever asked to measure."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In measurement: wherever things can be ranked, a top rank must be occupied.",
                "feedback": "Rankings are cheap and mostly empty at the top; there is no tallest possible man, and the way knows it. The claim is not that every scale has a champion but that perfections had by degrees are had from fullness. Being, goodness, truth: perfections whose limit is not a bigger instance but their own subsistence."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "In comparison psychology: minds that rank things must be presupposing a perfect standard.",
                "feedback": "Close enough to be dangerous. The way argues from graded being, not from graded judgments; the standard it concludes to causes things, not merely our rankings of them. Route it through psychology and it becomes an argument about us. Aquinas is doing the audit on the world."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t2-l3-q5`,
          type: "fill_blank",
          stem: `Three roads, one line each. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The second way climbs an order of <span class="fb-blank" data-blank="b1">______</span>; the third from beings that are <span class="fb-blank" data-blank="b2">______</span>; the fourth from <span class="fb-blank" data-blank="b3">______</span> of perfection.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "causes"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "contingent"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "degrees"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "causes",
              "contingent",
              "degrees",
              "necessary",
              "motions",
              "opinions",
              "numbers",
              "designs"
            ],
            "feedback": {
              "all_correct": "Locked: causes, contingent, degrees. Ordered causes demand a first that no one causes; borrowed being demands a necessity not on loan; graded perfection demands the fullness it is measured against. Three audits, one Auditor.",
              "partial_correct": "Some blanks resisted. The second way walks the order of efficient causes to the first; the third weighs the contingent, the can-fail-to-be, against the necessary; the fourth reads more and less as distances from fullness. Causes, contingent, degrees."
            }
          },
        },
        {
          id: `t2-l3-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "Until further notice, the module has proved five gods: a mover, a cause, a necessity, a maximum, and a governor."`,
          latin_tag: `ens ab alio`,
          doctrine_line: `Ordered causes, borrowed being, and graded perfection each climb to their source: first cause, necessary being, the cause of all being.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Five arguments, five conclusions; unity is an assumption smuggled in afterward.",
                "feedback": "Not smuggled: argued, at length, in the questions that follow. Simplicity, infinity, and unity are demonstrated of the ways' terminus, and what is subsistent being itself cannot be two, for two would need a difference and shared fullness has none to offer. The audit continues past q.2; wait for it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. At least until revelation arrives to tell us the five are one.",
                "feedback": "Revelation does say it, and reason does not need to borrow it here. The unity of God sits among the preambles, demonstrable from what the ways deliver: the unlimited cannot be multiplied, and each road ends at the unlimited. Faith confirms the summit reason can climb; it is not paying reason's debts."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Each way ends at the source of its whole order; the treatise then proves the sources one.",
                "feedback": "Respondeo: a first mover that is Pure Act, a first cause of being, a necessity underived, a fullness unparticipated, a governor of all nature: each is concluded to as unbounded in its register, and the following questions show the unbounded cannot be plural. The five roads are five trailheads on one mountain, and q.11 is the summit ledger. Five ways was never five gods; it was one God, findable from five directions."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Proofs cannot count beings at all, so the question of how many is meaningless.",
                "feedback": "Proofs count beings rather well; this one will conclude to exactly one God, and mean the number. The right defense of the ways is not that arithmetic fails at the summit but that the summit, being unlimited act, refuses a second occupant on demonstrated grounds. Meaning survives; the rival gods do not."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t2-l4`,
      num: `IV`,
      title: `The Arrow and the Archer`,
      latin: `finis`,
      tag: `finis`,
      fin: {
        tag: `finis`,
        heading: `The cause they banned came back armed.`,
        body: `Part I met the four causes and watched the modern age strike one from the register: purposes, said the new physics, are not scientific. Yet the physician still says the heart is for pumping, and is right. The fifth way begins in that stubborn little word. Things without minds act for ends, reliably, toward the best result; and an end is a not-yet, a target that somehow governs the flight before it is reached. Nothing holds a not-yet except knowledge. So tendency without knowledge is tendency directed by knowledge, as the arrow's obedience is the archer's skill in flight. Follow every for in nature to its source and you find not a metaphor but a mind. The world is not only moved and caused and lent and graded. It is aimed.`,
        distinction: {
          latin: `gubernatio`,
          english: `governance`,
          gloss: `Tendency without knowledge is directed tendency: the arrow's obedience is the archer's skill in flight.`,
          motif: `arrow-mark`,
        },
      },
      questions: [
        {
          id: `t2-l4-q1`,
          type: "mcq",
          stem: `The chisel cut the statue for the sake of the form; the textbook margin says science outgrew for the sake of. Then the cardiology chapter opens: the heart's function is to pump blood. What is the fifth way's actual starting datum?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Regularity: unintelligent things act always or nearly always the same way, toward the best result.",
                "feedback": "Respondeo, from the article: natural bodies act for an end, and this is evident from their acting always, or nearly always, in the same way, so as to obtain the best result. Not the spectacular but the reliable: fire heating, hearts pumping, acorns oaking. Constancy toward the good outcome is what fortuitously cannot mean. The way starts from the most boring fact in nature, which is its genius."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Beauty: sunsets and symmetries too fine to be unintended.",
                "feedback": "Beauty gets its own doors elsewhere in the tradition; the fifth way trades in plainer goods. A digestive tract acting for nutrition carries the argument as well as any sunset, and better, since its constancy is easier to audit. Aesthetic wonder invites; the way demonstrates. Keep the registers distinct and both stay honest."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Complexity: systems too intricate to have assembled themselves by chance.",
                "feedback": "That is the watchmaker's brief, filed centuries later and answerable by any process that accumulates order slowly. The fifth way never counts parts or computes odds; one utterly simple thing tending reliably to one end would do. Intricacy impresses; tendency demonstrates. The distinction is two questions ahead, and load-bearing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Scripture: the world is aimed because its Maker said so.",
                "feedback": "Said so indeed, but the way is philosophy, and its datum must be readable without the book. It is: the physician who never opens Genesis still writes function, still says for, still expects tomorrow's hearts to pump. The five ways run on what any honest observer owns. Revelation crowns the climb; it is not conscripted for the first step."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t2-l4-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>The fifth way is taken from the governance of the world. We see that things which lack intelligence, such as natural bodies, act for an end, and this is evident from their acting always, or nearly always, in the same way, so as to obtain the best result. Hence it is plain that not fortuitously, but designedly, do they achieve their end. Now whatever lacks intelligence cannot move towards an end, unless it be directed by some being endowed with knowledge and intelligence; as the arrow is shot to its mark by the archer. Therefore some intelligent being exists by whom all natural things are directed to their end; and this being we call God.</p><div class="cr-cite">ST I, q. 2, a. 3, co. · trans. Fathers of the English Dominican Province · verified against New Advent</div></div>Read the hinge sentence closely. At what exact point does intelligence enter the argument?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At the start: seeing order already presupposes an ordering mind in the observer.",
                "feedback": "The observer's mind reads the order; it is not asked to supply it. Fire heated and acorns oaked before anyone took notes, and the way's datum is their acting, not our noticing. Move intelligence into the observer and the argument becomes psychology. Aquinas keeps it in the arrow's flight, where the problem actually lives."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nowhere: intelligence is asserted in the conclusion without warrant in the premises.",
                "feedback": "The warrant is the unless-clause, and it earns its keep. An end is a not-yet governing a now; nothing holds a not-yet except a knower. Deny the clause and you must explain how the unrealized directs anything at all. The premise is doing philosophy's hardest work quietly; missing it is how the way gets called naive."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At the unless-clause: the end is not yet real, so only knowledge can hold it as directing.",
                "feedback": "Respondeo: whatever lacks intelligence cannot move towards an end, unless directed by some being endowed with knowledge. The mark exists in the archer before it exists in the arrow's arrival; the not-yet must live somewhere, and matter has no room for it. So tendency in the mindless is borrowed aim, and borrowed aim, like borrowed being, terminates in one who owns. The arrow flies because the archer knew."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At the word designedly: the way assumes design in order to prove it.",
                "feedback": "Designedly there is the verdict on fortuitously, and it is earned by the constancy clause before it: what happens always or nearly always toward the best result is precisely what chance does not do. The design question is opened by evidence, then settled by the unless-clause. A circle would be cheaper; Aquinas paid full price."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t2-l4-q3`,
          type: "mcq",
          stem: `An Englishman finds a watch on the heath: so many parts, so exactly fitted, surely an artificer. Paley's argument, and honestly made. Is it the fifth way in modern dress?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: both argue from nature's machinery to a maker, differing only in examples.",
                "feedback": "Then whatever explains machinery without a watchmaker sinks both, and Darwin's admirers have been sinking Paley cheerfully for a century and a half. The fifth way does not stand on assembled parts. It stands on tendency as such, in the simplest thing going; the difference is survival, not wardrobe."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No: Paley argues from improbable arrangement, the fifth way from finality in the simplest tendency.",
                "feedback": "Respondeo: Paley needs complexity, the fitted many; Aquinas needs one match burning toward hot. The watchmaker competes with natural processes as a rival assembler and can lose to a better story of assembly. The archer does not compete with natural processes at all; He is why there are processes, regular ones, aimed ones. Arguments about odds die by better odds. Arguments about tendency die only if nothing tends, and everything tends."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No: because Paley is refuted and the fifth way, being older, is refuted worse.",
                "feedback": "Age does not transmit refutation, and the premise smuggles in the very confusion at issue. The fifth way is untouched by the watch's fate precisely because it never argued from watches. Distinguish the arguments first; then let each meet its own objections. The older one, examined, is the harder target."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Yes, and both fail: explanation by purpose is childish in a scientific age.",
                "feedback": "The scientific age says function forty times a page in its biology and means it. Purpose talk survives because the phenomena keep demanding it; what the age dropped was the discipline of asking what purpose presupposes. That question, not nostalgia, is the fifth way's business. Childish is not an argument; the unless-clause is."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t2-l4-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "Evolution explains how hearts arose, so the fifth way is out of a job."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. What natural selection builds needs no archer to aim it.",
                "feedback": "Look at what selection runs on: variation that occurs by stable causes, inheritance that transmits reliably, environments that cull consistently. Every gear of the mechanism is things acting always or nearly always the same way, which is the fifth way's datum, multiplied. The builder story presupposes the aiming it was hired to replace."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Purposes were the gaps in biology, and the gaps have now closed.",
                "feedback": "The way never lived in a gap; it lives in the lawfulness the science celebrates. Gap arguments retreat as knowledge advances; this one advances with it, since every new mechanism is more regular tendency to audit. A theology that fears the next discovery misread the fifth way. Aquinas built on the discoveries' precondition."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Evolution is unscientific speculation, so it cannot threaten anything.",
                "feedback": "The wall does not need that plank, and the course declines to stand on it. Let the biology be as strong as its evidence makes it; the Commentator meets it the way Aquinas met the Averroists, by distinction rather than by flinching. The right verdict deserves a right reason, and dismissal is not one."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. A history of secondary causes presupposes tendency; governance works through such histories, not against them.",
                "feedback": "Respondeo: evolution, granted in full, is a long story of natures tending and causes causing, which is to say a long story of exactly what the fifth way audits. Providence is not a competitor squeezed out by mechanisms; mechanisms are how governance executes, as later theology will show in detail. Explain the arrow's flight as finely as you like. The account never once mentions why there is aim."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t2-l4-q5`,
          type: "mcq",
          stem: `The objector's last coin: "Nothing is aimed. It is all chance, happy accidents piled high." Two farmers meet at the well by chance, neither having sought the other. What does the meeting nonetheless require?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing at all: chance events are precisely the ones without causes.",
                "feedback": "Uncaused is not what chance ever meant; each farmer walked to the well for reasons, by roads, on legs. Chance names the crossing of their two errands, not a hole in causality. Promote chance to uncaused and you have not explained the meeting; you have declined to."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A hidden plan: someone secretly arranged for both farmers to arrive together.",
                "feedback": "Perhaps their wives conspired, but the argument must not assume it; genuine chance exists in the world and the tradition grants it freely. The point is subtler and stronger: even unarranged crossings are crossings of arranged walks. Chance is real, and parasitic. Its hosts are the tendencies."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A statistician: chance is just the name for patterns we have not measured yet.",
                "feedback": "Measurement changes what we know, not what the meeting was; the farmers crossed paths whether or not anyone kept records. Chance is a real feature of a world of many tendencies, not a confession of ignorance awaiting better instruments. The way needs it real: real crossings prove real errands."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Two errands: chance is the crossing of tendencies, so it presupposes tendency and cannot be the first story.",
                "feedback": "Respondeo: no errands, no meeting; no lines, no intersection. Every accident is an interference pattern in things already aimed, each farmer walking his ordinary purposeful walk. So accident piled on accident never adds up to the aim it borrows at every layer. Offer chance as the ground floor of nature and you have built a staircase of landings with no stairs."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t2-l4-q6`,
          type: "fill_blank",
          stem: `The image, locked. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The arrow tends to a mark it does not <span class="fb-blank" data-blank="b1">______</span>; behind every tendency without knowledge stands an <span class="fb-blank" data-blank="b2">______</span> who knows; and the name of that direction, worldwide, is <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          latin_tag: `finis`,
          doctrine_line: `Regular tendency toward an end in things without knowledge implies direction by an intelligence: the fifth way's archer.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "know"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "archer"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "governance"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "know",
              "archer",
              "governance",
              "reach",
              "deserve",
              "audience",
              "accident",
              "machine"
            ],
            "feedback": {
              "all_correct": "Locked: know, archer, governance. The mark lives in the archer's knowledge before it lives in the arrow's arrival; tendency in the mindless is borrowed aim; and the world's borrowed aim, audited to its source, is what the tradition calls the governance of God.",
              "partial_correct": "Some blanks resisted. The arrow cannot know its mark; that is the whole scandal of tendency. Knowledge must stand behind unknowing aim, as the archer behind the arrow. And direction of all natural things to their end has a doctrinal name: governance."
            }
          },
        }
      ],
    },
    {
      id: `t2-l5`,
      num: `V`,
      title: `What the Ways Deliver`,
      latin: `Ipsum Esse`,
      tag: `Ipsum Esse`,
      fin: {
        tag: `Ipsum Esse`,
        heading: `Not a bigger thing. The reason there are things.`,
        body: `Here is where the debating club goes wrong on both benches. One side demands the proofs produce a cosmic engineer, a largest item, a Zeus with better credentials; the other side, finding no such item, declares the search failed. But the ways never chased an item. Each one audited a whole order, of motion, of causing, of borrowed being, of graded perfection, of aim, and concluded to what the whole order leans on: act without potency, cause uncaused, necessity underived, fullness unparticipated, the knower behind all aim. Aquinas says it plainly at the very start: God is His own existence. The verdict scene of Part I stood before this door; the disputation on <span class="lat">esse</span> was training for this sentence. What the five roads find is not the strongest being. It is <span class="lat">Ipsum Esse Subsistens</span>, and His essence remains what the next module says it must: unseen, approached by denials, named by analogy.`,
        distinction: {
          latin: `Ipsum Esse Subsistens`,
          english: `Subsistent Being Itself`,
          gloss: `The ways end not at the largest item in the inventory but at the source the whole inventory leans on.`,
          motif: `sun-alone`,
        },
      },
      questions: [
        {
          id: `t2-l5-q1`,
          type: "mcq",
          stem: `Five roads, five closing bells: and this everyone understands to be God; to which everyone gives the name of God; this all men speak of as God; and this we call God; and this being we call God. What is Aquinas doing with those endings?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Taking a vote: what everyone calls God must exist, since mankind cannot err together.",
                "feedback": "Consensus proves usage, not existence, and Aquinas never leans on it; the demonstration is finished before the bell rings. Reverse the order and the way would beg its question. Read the endings as evidence and you cheapen a proof into a poll. They are filing, not voting."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Connecting conclusion to name: what was demonstrated is what men mean by the word God.",
                "feedback": "Respondeo: a.2 ad 2 explains the move in advance; lacking the essence, we take as middle term the meaning of the word, and the names of God are drawn from His effects. Each way proves something, an unmoved mover, an uncaused cause; the bell then certifies that this demonstrated something is what the word God has meant all along. The proof does the work; the ending does the introductions."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Confessing defeat: unable to finish the proofs, he hands the last step to piety.",
                "feedback": "The last step is the one step that needed no proving: that unmoved movers answer to the name God is a fact about the name. Nothing devotional plugs any gap, because the gap does not exist; the regress was blocked, the terminus reached, by argument. Piety arrives after the work, like the signature after the letter."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Being careless: five different endings betray five drafts never harmonized.",
                "feedback": "The variety is the harmony: each way earns the name from its own direction, so each bell rings in its own key. A copyeditor would flatten them; a metaphysician counts five distinct titles converging on one bearer, which is precisely the treatise's next order of business. The drafts are finished. The reader is just beginning."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t2-l5-q2`,
          type: "mcq",
          stem: `A debater rests his case: "Fine, a first mover exists. One more being in the universe's inventory, the biggest one, a super-being alongside the rest." What has he missed?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing: the conclusion of the proofs is exactly a very large additional being.",
                "feedback": "A very large additional being would be composed of potency and act like every other inventory item, and the first way just concluded to act without potency. Add Him to the list and He needs the list's explanation, a mover for the moved. The proofs conclude to what the list leans on, or they conclude to nothing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Only a word: call it super-being or Ipsum Esse, the difference is decorative.",
                "feedback": "The difference decides whether the atheist's tidiest argument works. A super-being among beings invites the child's question, who made God, and deserves it. Subsistent being itself makes the question grammatical nonsense: what is being cannot receive being. Words that change which questions are askable are not decoration."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The scale: God is not the biggest item but an infinitely bigger one.",
                "feedback": "Inflation is not conversion; an infinitely bigger item is still an item, still in the order, still composed of what-it-is and that-it-is, still auditable. The ways do not enlarge the inventory's champion. They exit the inventory upward, to the act of being unreceived. More of the same category was never the conclusion."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The category: the terminus is not an item in the order but its source, being itself subsisting.",
                "feedback": "Respondeo: every item in the order has existence the way the cup has water, received and limited; the ways end at what a.1 already whispered, that God is His own existence. Predicate and subject are one; the essence IS the esse. That is why He cannot be counted alongside creatures, outweighed, or made: additions to the inventory borrow being, and the terminus is the lender. Part I's verdict scene was rehearsal for exactly this."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t2-l5-q3`,
          type: "precision_check",
          stem: `A claim to test with full equipment: <em>"The five ways prove that a very powerful being exists somewhere out there, the strongest thing in the universe."</em> Where exactly does it break?`,
          payload: {
            "statement": "The five ways prove that a very powerful being exists somewhere out there, the strongest thing in the universe.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At proves: the ways were only ever probabilities, hints for the willing.",
                "feedback": "The Church and the school both say demonstration and mean it; a.2 stakes the word, and Vatican I will define the capacity next lesson. Soften proves to hints and you have conceded the fideist ditch before it even argues. The break is elsewhere: in what gets proved, not in whether."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At powerful: power is a crude category, and God transcends all categories whatever.",
                "feedback": "Power is affirmed of God truly, indeed supremely; the tradition will teach omnipotence without blushing. Transcends all categories, pressed too far, ends in saying nothing of God at all, which is agnosticism wearing incense. The trouble is not the perfection named. It is the address given: an item, out there, in the ranking."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At in the universe and strongest thing: the terminus is no item but the order's subsistent source.",
                "feedback": "Respondeo: somewhere, thing, strongest: three words, one error, God filed as inventory. What the ways deliver is act without potency, being unreceived, the source on which the whole inventory leans. The strongest thing in the universe would just be creation's heavyweight, one more borrower with the biggest loan."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At exists: God is beyond existence, so even to say He exists says too much.",
                "feedback": "The overshoot that lands in the same ditch it fled. Aquinas says God exists and means it more, not less, than of creatures: He is His own existence, esse subsisting. Beyond existence sounds humble and cashes out as unsayable, and the unsayable pays no debts. Say exists; then purify how, not whether."
              }
            ],
            "correct_option_id": "c",
            "correction": "The ways conclude to Ipsum Esse Subsistens: not a being located in the world's inventory, however strong, but subsistent being itself, on which every item in the inventory depends for existing at all. Strongest ranks Him among creatures; source is the demonstrated relation."
          },
        },
        {
          id: `t2-l5-q4`,
          type: "mcq",
          stem: `The victory audited. Five demonstrations succeed, and their author immediately posts what they did not do. What is the honest inventory of the summit?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That He is, and what He is not, and never, in this life by reason, what He is.",
                "feedback": "Respondeo: a.2 ad 3 concedes it while claiming victory; from effects we demonstrate the cause exists, though from them we cannot perfectly know God as He is in His essence. The ceiling of reason again: the proofs reached it, not through it. Hence the treatise's next move is a series of denials, composition denied, limit denied, change denied. The winnings are real. The poverty is real. Theology needs both hands."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Everything: five proofs of God yield the divine essence to anyone who follows them.",
                "feedback": "Follow all five and you hold conclusions, not a vision; the demonstrations end where sight would begin. If reason seized the essence, faith's mysteries would be homework instead of gifts, and Vatican I will condemn exactly that inflation. The ways open the treatise on God. They do not exhaust it; they could not."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing lasting: conclusions without a view of the essence are words on paper.",
                "feedback": "A that without a full what is still a that, owned with certainty; the deed to land you have not yet walked is not blank paper. Unmoved, uncaused, necessary, unparticipated, governing: each conclusion carries doctrine in it, as the next module will spend six lessons unpacking. Poverty at the summit is not bankruptcy."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A feeling of dependence, which was the real content all along.",
                "feedback": "The ways run on premises and terminate in conclusions; dependence is what they demonstrate, not what they feel. Reduce the summit to sentiment and you rejoin the theory of faith the anti-Modernist oath was written against, sworn away at the course's threshold. The ledger stays exact here too: proofs deliver knowledge. Feelings may celebrate it."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t2-l5-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "Since the ways are demonstrations, a Catholic's assent to God's existence rests on them."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Without the proofs in hand, belief in God would be groundless.",
                "feedback": "Generations of saints never met a syllogism and believed with certainty that shames the lecture hall. Their ground was the authority of God revealing, which outranks every demonstration in warrant. The proofs are a service reason renders, not a license faith waits on. Groundless is exactly what such faith is not."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Vatican I defined that reason can know God, so Catholics must assent by reason.",
                "feedback": "The definition concerns capacity, not the route each soul takes; it says reason can, never that every believer must. Next lesson reads the text itself and the difference will matter. A defined power of nature and a commanded exercise of it are two different decrees, and the Church issued the first."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The ways are museum pieces, and assent today rests on religious experience.",
                "feedback": "Right verdict, wrong century of error. Assent resting on experience rather than on God's authority is the Modernist theory of faith, condemned by name and sworn against in the anti-Modernist oath. The ways are load-bearing wherever minds still climb. The believer's ground is better than experience: the Witness who cannot err."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Most believers hold it by faith on God's authority; the demonstration is capacity, not prerequisite.",
                "feedback": "Respondeo, with a.2 ad 1: there is nothing to prevent a man, who cannot grasp a proof, accepting, as a matter of faith, something which in itself is capable of being scientifically known and demonstrated. The same truth, held two ways: the philosopher knows it, the child believes it, and the child's warrant is the stronger. The ways serve the faithful; they were never the faith's entrance exam."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t2-l5-q6`,
          type: "fill_blank",
          stem: `The summit, in one sentence. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The proofs end not at the biggest <span class="fb-blank" data-blank="b1">______</span> in the world's inventory but at <span class="fb-blank" data-blank="b2">______</span> subsisting; and what stays hidden from reason is the divine <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          latin_tag: `Ipsum Esse`,
          doctrine_line: `The ways conclude not to a being among beings but to subsistent Being itself, whose essence remains unseen.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "item"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "Being Itself"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "essence"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "item",
              "Being Itself",
              "essence",
              "engine",
              "galaxy",
              "feeling",
              "number",
              "name"
            ],
            "feedback": {
              "all_correct": "Locked: item, Being Itself, essence. The inventory's champion would still be a borrower; the ways end at the lender, esse subsisting. And the lender's essence stays unseen, which is why the next module speaks in denials and analogies. The ceiling holds; the roof is real; so is the sky above it.",
              "partial_correct": "Some blanks resisted. An item, however grand, has being on loan; the terminus lends and borrows nothing: Being Itself. What reason still cannot see is the essence, the what that only vision, not demonstration, will ever show."
            }
          },
        }
      ],
    },
    {
      id: `t2-l6`,
      num: `VI`,
      title: `Reason's Reach Defined`,
      latin: `ratio naturalis`,
      tag: `ratio naturalis`,
      fin: {
        tag: `ratio naturalis`,
        heading: `The Church built guardrails on both sides.`,
        body: `A road through high country has two ditches, and the nineteenth century drove into both. On one side, despair of reason: proofs are presumption, certainty comes by faith alone or by tradition alone, the ladder is rotten. On the other, worship of reason: nothing above demonstration may be believed, mysteries must submit or be dismissed. Vatican I answered like a Roman engineer: God can be known with certainty by the natural light of human reason from created things, and anathema to the man who says He cannot; and there is a twofold order of knowledge, and mysteries above reason are proposed for belief, and anathema to the man who dissolves them into philosophy. The keeper of the deposit turns out to guard reason too, and for the same cause: one Author gave both lights. The museum protects the ladder standing outside it.`,
        distinction: {
          latin: `ratio naturalis`,
          english: `the natural light of reason`,
          gloss: `God can be certainly known from created things: defined doctrine, with a ditch condemned on either side.`,
          motif: `five-roads`,
        },
      },
      questions: [
        {
          id: `t2-l6-q1`,
          type: "mcq",
          stem: `Two friends of the faith, both earnest. One: "Proving God is presumption; grace alone should carry the whole weight." The other: "Believe nothing you cannot demonstrate; mysteries are promissory notes." The Council answered both. What did Vatican I define about reason?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That reason, wounded by the Fall, retains no natural power to reach God at all.",
                "feedback": "That is the first friend's ditch given a doctrinal accent, and the canon fits it exactly: anathema to whoever says the one true God cannot be certainly known by the natural light of reason through created things. The Fall wounded nature; it did not repeal it. Grace heals the climber; it does not burn the ladder."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That the five ways specifically are de fide, binding on every Catholic as written.",
                "feedback": "The Council defined the capacity, not the curriculum: that God CAN be certainly known from creatures, not that these five texts are the obligatory route. The school holds the ways as its common patrimony, and the Church later commended the Thomistic road officially, but commendation and definition are different instruments. Precision here saves arguments later."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That God can be known with certainty by the natural light of reason from created things.",
                "feedback": "Respondeo, the definition this module has been walking toward: God, the beginning and end of all things, may be certainly known by the natural light of human reason, by means of created things. Certainly, not probably; natural light, not borrowed grace; from created things, the a posteriori road of the ways. Both friends stand corrected by one sentence, and the second half of the correction, the twofold order, is coming."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That reason and faith are two names for one act of religious knowing.",
                "feedback": "The Council said nearly the opposite: a twofold order of knowledge, distinct in principle and in object. Natural reason and divine faith are two lights, not one lamp renamed. Merging them is how each ditch justifies itself, the fideist drowning reason in faith, the rationalist faith in reason. The definition keeps two of everything."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t2-l6-q2`,
          type: "precision_check",
          stem: `The definition itself, then a claim to test against it.<div class="auctoritas"><div class="formula"><span class="bl">&para;</span>The same Holy Mother Church holds and teaches that God, the beginning and end of all things, may be certainly known by the natural light of human reason, by means of created things; for the invisible things of Him from the creation of the world are clearly seen, being understood by the things that are made.<span class="cite">Concilium Vaticanum I, Dei Filius, cap. 2, 1870 · DS 3004</span></div></div>The claim: <em>"God's existence must be taken purely on faith, since reason cannot reach Him."</em> Where exactly does it break?`,
          payload: {
            "statement": "God's existence must be taken purely on faith, since reason cannot reach Him.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At reason cannot reach Him: it denies the defined capacity, and the denial is anathematized.",
                "feedback": "Respondeo: the claim's premise contradicts the definition word for word, certainly known against cannot reach. And the Council did not leave it at teaching: if anyone shall say that the one true God, our Creator and Lord, cannot be certainly known by the natural light of human reason through created things, let him be anathema. Humility about reason is a virtue. Despair of reason is a condemned error.<span class=\"condemned\">Fideism · condemned, Dei Filius can. II.1, 1870 · DS 3026</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nowhere: the claim is pious, and piety about faith can hardly offend the Church.",
                "feedback": "It offended a Council into a canon. Piety that pays faith by robbing reason insults the Author of both; a God who gave a light that cannot find Him would be strangely praised by the compliment. The Church has never accepted flattery of grace at nature's expense. That transaction is the fideist ditch wearing vestments."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At faith: faith should not enter questions about God at all; reason alone is competent.",
                "feedback": "The opposite ditch, and the same Council curbed it in the same document: mysteries hidden in God are proposed for belief that no reason could reach, and the twofold order stands. Faith enters where reason ends, legitimately and gloriously. The claim's error was never that it honored faith; it is that it disinherited reason to do so."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "At God's existence: the phrase is meaningless until faith first gives it content.",
                "feedback": "The phrase had content for Aristotle, who believed no revelation and demonstrated a mover unmoved; the ways ran on effects and the meaning of a word drawn from them. Make faith the source of all meaning about God and reason cannot even ask its question, which is the fideist result by a semantic road. The Apostle says the pagans knew, and were without excuse: knowledge enough for guilt is knowledge."
              }
            ],
            "correct_option_id": "a",
            "correction": "Reason CAN reach the existence of God, with certainty, from created things: that is defined doctrine. Most believers still hold the truth by faith, and legitimately; what is condemned is not believing without proofs but asserting that proof is impossible."
          },
        },
        {
          id: `t2-l6-q3`,
          type: "mcq",
          stem: `A friend asks, honestly: "How can anyone be sure God exists?" Four answers are offered, each with a history. Which one walks the road the Church actually defined?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Reason is fallen past repair; sheer faith alone gives certainty, and proofs are presumption.",
                "feedback": "Stated with real devotion in the lecture halls of Strasbourg, and the Church required its author to retract: Bautain subscribed theses in 1840 affirming that reason can prove with certainty that God exists. The instinct honors grace; the doctrine unseats it, for grace presupposes the nature it heals. Certainty by despair of reason is the ditch, not the road.<span class=\"condemned\">Fideism · condemned, Dei Filius can. II.1, 1870 · DS 3026</span>"
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Certainty descends only through the primitive revelation handed down; reason merely receives what tradition delivers.",
                "feedback": "Traditionalism, and mind the label: this is not the traditionalist's love of the old Mass but a nineteenth-century theory, Bonnetty's, that reason is impotent until tradition feeds it. The Congregation of the Index required subscription against it in 1855: reasoning can prove with certainty that God exists. Tradition hands down revelation; it was never reason's respirator.<span class=\"condemned\">Traditionalism · condemned, Decr. S. C. Indicis (Bonnetty), 1855 · DS 2811-2814</span>"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Only what reason demonstrates may be held at all; mysteries must submit to proof or be dismissed.",
                "feedback": "Rationalism, the other ditch, and Dei Filius walls it off in its fourth chapter and canons: there are true mysteries, above reason though never against it, and dissolving them into demonstrable philosophy is anathematized. Reason's reach is defined and so are its limits; the same document draws both lines. A light that denies the sun is not enlightened.<span class=\"condemned\">Rationalism · condemned, Dei Filius canones, 1870</span>"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Reason can climb to Him with certainty from creatures; faith then receives what reason could never see.",
                "feedback": "Respondeo: the defined road, both lanes intact. Natural reason certainly knows God from created things, as the ways just demonstrated; divine faith receives the mysteries hidden in God, as the whole theology ahead will unfold. Neither light is asked to do the other's work, because one Author lit both. The friend's question has a Catholic answer, and it is generous in both directions."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t2-l6-q4`,
          type: "mcq",
          stem: `The Council's architecture: a two-fold order of knowledge, distinct in principle and in object; by natural reason in the one, by divine faith in the other; and in the second, mysteries hidden in God which, unless divinely revealed, cannot be known. What work is this doing?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Ranking: reason handles serious knowledge, faith the consoling remainder.",
                "feedback": "The Council ranks the other way when it ranks at all: the mysteries outrank the preambles as the sun outranks the lamp, and the second order exists because its objects exceed the first. Nothing consoling about the Trinity as a proposition; it is simply above the ladder. Distinct orders, not descending prestige."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Zoning: two orders with distinct principles and objects, so neither light annexes the other's territory.",
                "feedback": "Respondeo: the twofold order is the map on which both ditches are marked. The fideist annexes reason's ground to faith, and loses the preambles; the rationalist annexes faith's ground to reason, and loses the mysteries. Distinct in principle, how we know; distinct in object, what we know: with those two distinctions drawn, the peace treaty follows, no real disagreement ever possible. Good fences, one Landlord."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Apologizing: mysteries embarrass a thinking Church, so they are fenced off from inspection.",
                "feedback": "The fence faces the other way: it protects inspection from pretending it sees over. Reason illumined by faith, the same chapter says, attains some understanding of the mysteries, most fruitful, analogical, never exhaustive. An embarrassed Church would not define the mysteries as mysteries under anathema. Embarrassment whispers; this legislates."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Improvising: the two orders were invented at the Council to settle a local dispute.",
                "feedback": "The Council codified what Aquinas taught six centuries earlier: sacra doctrina as a science from God's own knowledge, distinct from the sciences of reason, philosophy as handmaid, not rival. Vatican I's dispute was continental and its answer was perennial. Definitions guard old truth against new error; that is the whole charter of the office."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t2-l6-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "By defining reason's power to know God, Vatican I made mastery of the proofs an obligation of Catholic faith."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. What a Council defines about reason, every believer must personally perform.",
                "feedback": "Councils define what is so, not homework for every soul; the capacity of human reason was defined, the exercise commanded of no one. The grandmother with her beads holds the same truth with better warrant than the professor with his syllogisms. Her act of faith fulfills the doctrine; it does not await the seminar."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Otherwise the definition would change nothing, and definitions must change something.",
                "feedback": "It changed what may be taught and held in the Church: despair of reason ceased to be a tolerable school and became a condemned error. Guardrails change everything for the man about to drive into the ditch, and nothing for the one already on the road. Most definitions work exactly that way: fences, not curricula."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Conciliar definitions bind theologians only, and the faithful may ignore them.",
                "feedback": "Definitions of faith bind every Catholic, the grandmother and the professor alike; the deposit binds whole, one cloth. What they bind to is assent to the doctrine, here the capacity of reason, not to a private repetition of the philosophy department. Right verdict again; the reason offered would unravel far more than this canon."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The Council defined a capacity of nature and condemned its denial; it commanded no syllogisms.",
                "feedback": "Respondeo: the canon strikes the man who says God cannot be certainly known by reason, not the man who never demonstrated anything in his life. The definition protects the ladder's existence; climbing remains a vocation for those so called, and the course's own learners among them. What is binding is the doctrine of the reach. What is free is the road each mind takes to the same God."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t2-l6-q6`,
          type: "mcq",
          stem: `The keeper owns nothing in the museum and adds nothing to it. Yet here he is, legislating about reason, nature's own light, which no apostle deposited. Why does the guardian of revelation defend a power of philosophy?`,
          latin_tag: `ratio naturalis`,
          doctrine_line: `That God can be known with certainty by the natural light of reason from created things is defined doctrine; the ditches on either side are condemned.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because grace presupposes nature: despair of reason undermines faith's footing, so guarding the deposit means guarding the ladder.",
                "feedback": "Respondeo: faith presupposes the preambles as grace presupposes nature; let reason be declared blind and the act of faith is stranded, a house over a demolished ground floor. Scripture itself, in the deposit, asserts the pagans knew God from things made. So the keeper defends reason on the museum's own charter: the school's decreed summary holds that we know God not by intuition, not a priori, but certainly a posteriori, from the things that are made. One Author, two lights, one guardian."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because philosophy is part of revelation: Aristotle's proofs entered the deposit at some council.",
                "feedback": "No council ever canonized the Physics, and the deposit closed with the Apostles; that letter is sealed. Philosophy remains nature's work, honored, employed, corrected at need, never deposited. The Church defends reason as reason, not by adopting it into revelation. Get the relation wrong here and both lights dim together."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Territorial habit: institutions accumulate jurisdiction, and Rome is very old.",
                "feedback": "Old institutions accumulate many things, but this canon has a theological nerve, not a bureaucratic one: deny reason's reach and revelation loses its addressee, a mind capable of knowing the God who speaks. The Church legislated where the deposit itself was at stake. Cynicism explains everything and predicts nothing; the doctrine explains this canon."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Diplomacy: the Council balanced one condemnation of faith's critics with one of reason's, for symmetry.",
                "feedback": "The symmetry is real and it is doctrinal, not diplomatic: both ditches wreck the same road, the ordered cooperation of two lights from one Author. A Council trading condemnations for balance would deserve the historian's smirk. This one drew both lines from one principle, which is why the lines have held."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t2-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The preambles are owned.`,
        body: `Count the winnings. The question was real, because the truth is not self-evident to us; the road was real, from effects better known than their cause. Motion climbed the taut chain to Pure Act. Causes climbed to the uncaused; borrowed being to the necessity not on loan; more and less to the fullness that lends every degree; the arrow's blind obedience to the archer who knows. Five bells rang over one Name. And the summit stayed honest: that He is, what He is not, never in this life what He is. The Church set the whole climb in a definition, certainty by natural light from created things, with a ditch condemned on either side. Part I forged the tools; this module spent them and they held. Next: the one God audited, perfection by perfection, mostly in denials. What has no cup at all. The divine attributes.`,
        distinction: {
          latin: `Ipsum Esse Subsistens`,
          english: `Subsistent Being Itself`,
          gloss: `The ways end not at the largest item in the inventory but at the source the whole inventory leans on.`,
          motif: `sun-alone`,
        },
      },
      questions: [
        {
          id: `t2-l7-q1`,
          type: "match_pair",
          stem: `The module in five images. Match each departure to its terminus.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the staff moving in the hand"
              },
              {
                "id": "L2",
                "text": "nothing prior to itself"
              },
              {
                "id": "L3",
                "text": "being held on loan"
              },
              {
                "id": "L4",
                "text": "more and less noble"
              },
              {
                "id": "L5",
                "text": "the arrow at the mark"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "a first mover, itself unmoved: Pure Act"
              },
              {
                "id": "R2",
                "text": "a first efficient cause, uncaused"
              },
              {
                "id": "R3",
                "text": "being necessary of itself, underived"
              },
              {
                "id": "R4",
                "text": "the fullness causing every degree of being and goodness"
              },
              {
                "id": "R5",
                "text": "the intelligence directing all things to their end"
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
              "all_correct": "Five departures, five arrivals, correctly paired: motion to Pure Act, causing to the uncaused, the contingent to the necessary, degrees to fullness, aim to the archer. One mountain, five trailheads, and you now know every path by heart.",
              "partial_correct": "Some pairs misfiled. Walk the roads again: the taut chain of movers tops out in Pure Act; self-causation's absurdity yields the uncaused cause; loans demand a lender who borrows nothing; more and less demand the most; blind aim demands a knowing archer."
            }
          },
        },
        {
          id: `t2-l7-q2`,
          type: "mcq",
          stem: `An auditor checks the equipment log. The first way ran on act and potency; the fifth on final causality. The fourth way, with its more and less, its cups of nobility filled to different lines: which Part I tool was that?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The four causes: degrees of perfection are degrees of efficient causality.",
                "feedback": "Efficient causality powers the second way; the fourth trades in something quieter: possession by degrees. A thing can be caused efficiently without being more or less anything. The tool that reads gradation as dependence has its own name, and the lamps lit from one sun were its emblem."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Participation: perfection had partially, by many, points to perfection had fully, by one.",
                "feedback": "Respondeo: to have goodness by degrees is to have it the way the cup has water, received, limited, shared out; and the received points to the unreceived as surely as loans point to a lender. The fourth way is participation standing trial. It is also why the way ends at the cause of being itself, not merely at a champion of the rankings."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The transcendentals: good and true convert with being, so degrees are impossible.",
                "feedback": "The transcendentals do convert with being, and that doctrine walks close by; but it makes degrees intelligible, not impossible: more being, more good. The fourth way needs the degrees real and needs them readable as participation. Deny the more and less and the way has no premise; the tradition affirms both."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The syllogism: the fourth way is really just the second, rearranged for effect.",
                "feedback": "All five ways are syllogisms; that is form, not fuel. The second climbs the order of efficient causes; the fourth reads the inner poverty of graded possession. Different premises, different registers of dependence, one terminus. Aquinas wrote five because the world leans on God in five readable ways, not because one proof needed costumes."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t2-l7-q3`,
          type: "fill_blank",
          stem: `The module's spine, in one breath. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Not self-evident <span class="fb-blank" data-blank="b1">______</span>, God's existence is demonstrated from <span class="fb-blank" data-blank="b2">______</span>; and the Church defines the climb possible with <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "to us"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "effects"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "certainty"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "to us",
              "effects",
              "certainty",
              "in itself",
              "probability",
              "feelings",
              "premises",
              "consensus"
            ],
            "feedback": {
              "all_correct": "Locked: to us, effects, certainty. The whole module in eighteen words. The darkness is in us, not in the proposition; the road runs through what God has made; and the Church staked a canon on the climb's arrival.",
              "partial_correct": "Some blanks resisted. Self-evident in itself, dark to us: that gap is why demonstration exists. The road is a posteriori, from effects. And Dei Filius says certainly known, not probably guessed: certainty is the defined word."
            }
          },
        },
        {
          id: `t2-l7-q4`,
          type: "mcq",
          stem: `A last visitor, friendly, modern: "Proofs of God belong to the nineteenth century, or the thirteenth. Faith today is a leap, or it is nothing. Keep your ways as heirlooms." The module answers with its whole inventory. Which answer is it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Agreed, but heirlooms deserve museums, so the ways are kept for their beauty.",
                "feedback": "The course keeps nothing for beauty alone; even its drolleries work for a living. The ways are kept because their premises are still true this morning: things still move, borrow, grade, and aim. An argument ages only if a premise dies, and the visitor has not killed one. He has changed the subject."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Half agreed: the proofs failed, but the leap lands safely anyway.",
                "feedback": "Concede the proofs and the leap inherits their whole burden with none of their equipment; faith becomes a wager praised for its blindness. That is not the Church's faith, which is certain assent on the authority of God, with reason's preambles intact beneath it. The module surrenders neither the ladder nor the gift above it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Leap and proof are the same act under two names, so everyone is right.",
                "feedback": "Irenic and impossible: demonstration compels by evidence, faith assents on authority, and the twofold order keeps them distinct under anathema. Merge them and both die of the confusion, which is roughly the century's obituary. The module's peace is better: two lights, distinct, ordered, one Author. Everyone is not right; the definition is."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The premises have no birthday: motion, dependence, degrees, and aim renew every morning; the conclusion keeps office hours.",
                "feedback": "Respondeo: the ways run on the world's most renewable resources; every sunrise restocks their premises. And the leap-or-nothing theory is not new boldness but the old condemned despair of reason, wearing existentialist tweed. The Church defined the climb possible in 1870 because it was possible in 1270 and remains so at breakfast. Heirlooms rust. Demonstrations, with their premises alive, do not."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t2-l7-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "The Church defined that God can be known by natural reason, yet the five ways themselves are not defined dogma."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The capacity is de fide; the five formulations are the school's patrimony, commended, not defined.",
                "feedback": "Respondeo, and the precision is worth owning: Dei Filius defines that God can be certainly known from creatures; it canonizes no syllogism. The ways stand as the tradition's central execution of the defined capacity, decreed safe directive norms in the Thomistic theses, commended again whenever the Church commends her Common Doctor. Binding truth, free instruments: the wall stands exactly where Rome built it, and no further."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. And a relief, since the five ways are probably unsound anyway.",
                "feedback": "The right distinction with a slander smuggled in its luggage. The course just spent five lessons on the ways at full strength, objections met, misreadings sorted; unsound is not the residue. They are undedefined because definition guards the deposit, not because Rome doubts her doctor. Keep the precision, return the slander."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Defining the capacity just is defining the ways, since they are the only demonstration there is.",
                "feedback": "The school itself would refuse the compliment: the tradition holds more roads than five, and Aquinas wrote others elsewhere. A capacity can be defined while its exercises stay free, as a Council may define that man can sing without canonizing a hymnal. The ways are the treasury's best coin, not its mint."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Nothing about natural reason was ever defined; the Church speaks only of revelation.",
                "feedback": "One lesson ago the canon was on the table: anathema to whoever says God cannot be certainly known by the natural light of reason from created things. The Church legislated about reason precisely because the deposit presupposes reason's reach. Deny the definition and you have not found modesty; you have mislaid a chapter of Denzinger."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t2-l7-q6`,
          type: "mcq",
          stem: `The module closes and a door opens. Reason holds that God is: Pure Act, uncaused, necessary, fullness, governing intelligence. The next module begins the audit of the divine names. Given the ceiling, what kind of audit must it mostly be?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `Five effects, five roads, one terminus: subsistent Being, demonstrable with certainty, essence unseen; the preambles are owned.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A description: with existence proved, the essence now sits for its portrait.",
                "feedback": "The essence sits for no portrait this side of the beatific vision; the ceiling did not move when the proofs succeeded. What reason holds is that He is and what follows from the roads that led there. The portrait's studio is heaven. The audit downstairs works differently, and the difference is the next lesson's first word."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A speculation: past the proofs, theology relaxes into educated guessing.",
                "feedback": "Nothing relaxes; the rigor tightens. Each divine attribute is demonstrated from the ways' terminus, simplicity because Pure Act has no parts to compose, immutability because nothing in Him awaits actualizing. Deduction from demonstrated ground is the opposite of guessing. The treatise on God is many things; casual is not one."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A negation: knowing what He is not, denial by denial, limit by limit.",
                "feedback": "Respondeo: since the essence stays unseen, the treatise proceeds by removing from God whatever belongs to the borrowed and the bounded: composition denied, limit denied, change denied, time denied. Each denial is a truth owned with certainty; the darkness is mapped by what it cannot contain. The cup image from Part I returns inverted, water without any cup. That strange audit is the next module entire."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A silence: past the five ways, nothing further can be said at all.",
                "feedback": "Then the Summa would be one question long, and it is famously not. Between portrait and silence runs the tradition's road: denials that are true, analogies that limp and still walk, names said of God imperfectly and really. Mysticism's silence comes later and higher. First the mind does its work, and there is work."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    }
  ],
};
