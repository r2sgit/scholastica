import type { ModuleMeta } from '../types';

/** T6 · The Angels & Divine Governance. Wired into the live app (theology-wing completion pass: T6/T7/T15). Content is the authored t6-content.json, copied faithfully; no prose edits. */
export const t6: ModuleMeta = {
  id: 6,
  title: `The Angels & Divine Governance`,
  short: `De Angelis et Gubernatione Rerum`,
  label: `Theologia VI · The Angels & Divine Governance`,
  latin: `De Angelis et Gubernatione Rerum`,
  aim: `The angels are the invisible half of the one creation: subsisting forms with no matter at all, each exhausting its own species, incorruptible by nature yet composed still of essence and existence, knowing by species received with their nature rather than gathered from things, choosing once and immovably where we choose and revise. Created good in the first instant, some fell immediately after it, by pride: the desire to hold final beatitude by their own power rather than receive it; their obstinacy is the fixity of the angelic will, not a limit on divine mercy. The rest see the face of God and serve: three hierarchies, nine choirs, ranked by how they receive the one light. Through them, and through every secondary cause down to the least, God executes in time the plan His providence holds immediately in eternity, not from need but from largesse, sharing with creatures the dignity of causing; He conserves the lower through the higher, works interiorly in every agent, and when He acts beyond the order He freely gave, He violates nothing, for He does not act against Himself. And to each human wayfarer, from birth to the threshold of the kingdom, one angel of the last choir is assigned as guardian: the unseen colleague on the road.`,
  lessons: [
    {
      id: `t6-l1`,
      num: `I`,
      title: `Form Without the Bronze`,
      latin: `forma subsistens`,
      tag: `forma subsistens`,
      fin: {
        tag: `forma subsistens`,
        heading: `The furnace's question, answered upstairs.`,
        body: `The bronze survived every shape because shapes need bronze: that was the lesson, and it left a door ajar. Could a form ever stand with no metal at all? The visible world says never. The Creed's second column says: meet the neighbors. An angel is form subsisting, the whole nature standing on its own being, deathless because there is nothing in him for death to separate, single in his species because there is nothing in him to count by. And still a creature: his essence receives its existence the way every cup shapes its water, so the line between him and God stays exactly where the definition drew it. The invisible half of creation outnumbers the visible beyond reckoning. Next: what it is like to be one, knowing everything you will ever naturally know, without ever having seen a dog.`,
      },
      questions: [
        {
          id: `t6-l1-q1`,
          type: "mcq",
          stem: `The furnace again: horse in, sword out, and the bronze sailing through it all untouched. Every form that lesson met was riding something. Now the Creed's second column opens, all things invisible, and the first resident is introduced. What is an angel?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A creature of the finest matter: air or fire, a body too subtle for eyes.",
                "feedback": "A venerable guess with patristic names attached: several early writers dressed the angels in subtle bodies, and compared to God, says Damascene, even they seem coarse. But fine matter is still matter, and what has matter is one more resident of the visible column, just hard to see. The definition will want something stranger: no metal at all."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A human soul that has finished its course and been promoted to glory.",
                "feedback": "The condolence-card doctrine, and it honors the wrong wall of the cathedral. A soul is the form OF a body: made to inform flesh, incomplete without it, awaiting its resurrection. An angel never had a body to miss. The two are different in kind, not in rank attained; no amount of holiness turns the one into the other."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A subsisting form: a complete nature standing with no matter at all.",
                "feedback": "Respondeo: what the furnace said could not happen with bronze, happening. Every shape in that lesson needed its metal; here is form that needs none, the whole nature standing on its own, understanding and willing without one particle to ride. The old question had an answer waiting in the invisible column all along."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A personification: the tradition's poetry for God's own action in the world.",
                "feedback": "The demythologizing move, and it has a date: Pius XII listed the questioning of whether angels are personal creatures among the errors of 1950 (Humani Generis, DS 3891). The Creed's inventory is not a figure of speech; the definition counts two creations, and the invisible one is populated by someones, not by metaphors."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t6-l1-q2`,
          type: "mcq",
          stem: `Grant the possibility. Why would there actually BE such creatures? Aquinas argues the universe would be defective without them. What carries that argument?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The perfection of the whole: God creates by intellect and will, so creation is incomplete without intellectual creatures.",
                "feedback": "Respondeo: the perfect assimilation of an effect to its cause is that the effect imitate the cause in that whereby the cause produces it, and God produces by intellect and will (ST I q.50 a.1). A creation with no created minds would be a portrait missing the sitter's face. And since intelligence cannot be the act of a body, the perfection of the universe requires incorporeal creatures: the top of T5's ladder was not optional."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The heavens: something has to move the spheres, and bodies cannot move themselves.",
                "feedback": "Aristotle's actual route, and Aquinas reports it with respect before declining it: counting movers from the motions makes the angels exist FOR the cosmos, servants of the scenery. The immaterial does not exist on account of the corporeal, for the end is nobler than the means (q.50 a.3). The argument from the spheres died with the spheres; the argument from perfection did not."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Scripture alone: reason has nothing to say about invisible creatures either way.",
                "feedback": "Half right about the source, wrong about the silence. That angels exist is indeed held most firmly from revelation, and the definition names them. But Aquinas argues their fittingness from the shape of creation itself, and the ancients who denied all incorporeal being, the Sadducees among them, were making a philosophical mistake about intellect, not just a scriptural one."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Our need: someone must carry prayers up and answers down, so messengers were required.",
                "feedback": "This makes the angels exist for the postal service, and the service for us. Their ministry to men is real and comes later in this module; but God needs no couriers, and the angels' first work is not delivery but vision. The argument runs on what the universe should contain to mirror its Maker, not on what we find convenient."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t6-l1-q3`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Nothing is corrupted except by its form being separated from the matter. Hence, since an angel is a subsisting form, as is clear from what was said above, it is impossible for its substance to be corruptible. For what belongs to anything considered in itself can never be separated from it; but what belongs to a thing, considered in relation to something else, can be separated, when that something else is taken away, in view of which it belonged to it. Roundness can never be taken from the circle, because it belongs to it of itself; but a bronze circle can lose roundness, if the bronze be deprived of its circular shape. Now to be belongs to a form considered in itself . . . Consequently a subject composed of matter and form ceases to be actually when the form is separated from the matter. But if the form subsists in its own being, as happens in the angels, it cannot lose its being.</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae I q.50 a.5 &middot; Dominican Fathers translation</div></div>Thomas reaches for bronze, of all things. Why can an angel not die?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because God has promised to preserve them forever, though in themselves they could perish.",
                "feedback": "You have described the heavenly bodies as Plato saw them: dissoluble by nature, held together by favor. Thomas quotes exactly that opinion in this article and answers it. The angels do depend on God for being, as everything does; but the passage locates their deathlessness in what they ARE, not in a stay of execution."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because death is separation of form from matter, and there is no matter to leave.",
                "feedback": "Respondeo: the bronze circle can lose its roundness; roundness itself never can. Every death the world has ever seen is a form and a matter parting company. An angel is the roundness without the bronze: form subsisting in its own being, with nothing underneath to walk away from. Incorruptible not by favor but by architecture."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because spirits are made of an indestructible substance no created force can break.",
                "feedback": "This turns the angel back into a very durable object: adamant instead of bronze, but still a stuff. The argument runs the opposite way. It is precisely because the angel is NOT made of any stuff that corruption gets no purchase; durability is a property of materials, and immateriality outbids it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because their intellect is always in act, and constant thinking keeps them in existence.",
                "feedback": "Close to a real clue, backwards as a cause. Thomas does add the intellectual token: an intelligible object is above time, so the substance whose operation that is must be incorruptible. But the operation reveals the mode of being; it does not manufacture it. The angel does not think himself alive. He lives as what he is: form that cannot be unfastened."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t6-l1-q4`,
          type: "true_false_with_reason",
          stem: `Judge the sentence: "With no matter in him, an angel is pure act: a small god."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: no matter means no potency, and what has no potency is pure act.",
                "feedback": "The equation smuggles in a false identity: matter is one kind of potency, not potency itself. The cup lesson taught the deeper composition long ago. An angel's essence receives its existence and limits it, as every cup shapes its water; that reception is potency enough to keep the creature a creature."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: Scripture calls them sons of God, and what is born of God is divine.",
                "feedback": "The idiom of Scripture is generous with the word sons, and the tradition reads it as the generosity of adoption, never as a genealogy of little deities. Whatever the phrase honors, it does not erase the line the definition draws: one Creator, everything else created. The angels stand on our side of that line."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: though free of matter, an angel is still composed: his essence is not his existence.",
                "feedback": "Respondeo: even in the angels there remains the relation of the form to its own existence, as of potentiality to act (q.50 a.2 ad 3). What he is does not explain that he is; being is received, and received being is composed being. One creature alone in nobody's cup would be no creature at all. God alone is pure act; the angel is the greatest of the cups."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: an angel keeps potency because he can still be annihilated at any moment.",
                "feedback": "Right verdict, and the reason points at the wrong joint. That God could withdraw conservation is true of every creature and describes God's freedom, not a composition inside the angel. The potency that disqualifies him from pure act is structural: an essence really distinct from its act of being. The Boethian pair, whereby he is and what is, names it exactly."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t6-l1-q5`,
          type: "mcq",
          stem: `Two sparrows are two because two parcels of matter each hold the sparrow nature. An angel holds no matter. Then what makes Gabriel not Michael? The house answers with a hard saying. Which is it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Each angel is his own species: no two share a nature, as no two whitenesses float free.",
                "feedback": "Respondeo: things of one species that differ in number agree in form and are distinguished materially; take away matter and you take away the possibility of two of a kind (q.50 a.4). Each angel exhausts his nature the way a separated whiteness would exhaust white. The 24 Theses carry the same line: numerical distinction within a species is impossible among pure spirits. A fair warning: the Franciscan school, Scotus at its head, holds individuation by something other than matter and allows many angels per species. Rome has never closed the question; the house holds Thomas's answer at full strength, and names the other position a worthy opponent, not a heresy."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Their offices: Gabriel differs from Michael as ambassador differs from general.",
                "feedback": "Offices would make the difference administrative: swap the assignments and the two would be interchangeable. But an office is given to a nature, not constitutive of it. The question is what distinguishes the natures underneath, and a bodiless nature has nothing underneath it to be swapped. The distinction must go all the way down."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Degrees of one angelic nature: more and less intellect, as one flame burns brighter.",
                "feedback": "Thomas meets this exactly and turns it: more and less do change the species when they are caused by forms of diverse degrees, as fire is not brighter air (q.50 a.4 ad 2). Angelic differences are not settings on one dial; each degree of intellectuality is its own form, hence its own kind. The brighter flame is a different fire."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A spiritual matter: finer than bronze, coarse enough to count individuals.",
                "feedback": "Avicebron's position in the Fount of Life, argued seriously and answered seriously: one matter of spiritual and corporeal things is impossible, since matter is divided only under quantity, and quantified spirit is a contradiction in terms (q.50 a.2). The individuating parcel does not come in a spiritual grade. Where there is no bronze there is no counting by bronze."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t6-l1-q6`,
          type: "mcq",
          stem: `Then how many are there? One per species sounds like a short guest list. Aquinas laughs in the other direction. What does he hold about the number of the angels?`,
          latin_tag: `forma subsistens`,
          doctrine_line: `An angel is a subsisting form: a complete immaterial nature, incorruptible of itself, each one its own species, and yet composed still of essence and existence: creature, not god.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Exactly nine, one per choir: the tradition's names exhaust the roster.",
                "feedback": "The nine name orders, not individuals: ranks in an army, not soldiers. Within each order there are first, middle, and last, and every member his own species besides. Daniel's arithmetic alone breaks the roster of nine: thousands of thousands ministered to Him. The choirs organize a multitude; they do not cap it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A number matched to the heavenly movements, as the Philosopher counted his movers.",
                "feedback": "Aristotle's census, taken when the spheres were the noblest effects in view, and Rabbi Moses tried to harmonize Scripture to it. Aquinas declines the method: it would make the immaterial exist for the material, means nobler than end. Count the angels by the cosmos and you have hired the nobility as stagehands."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Exceeding great: beyond all material multitude, because perfection is created in excess.",
                "feedback": "Respondeo: the more perfect some things are, in so much greater an excess are they created by God; in bodies the excess is magnitude, in the incorporeal it is multitude (q.50 a.3). The invisible column is not a niche; it is the bulk of the inventory. Dionysius says the blessed armies surpass the weak and limited reckoning of our material numbers, and every member is a kind unto himself: a cosmos of species above the cosmos."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Unknowable even in principle: number is quantity, and spirits have none.",
                "feedback": "A real scruple, met in the article's first objection: discrete quantity does follow the division of bodies. But there is another multitude, the transcendental kind, counted by distinction of forms rather than by cut-up matter. The angels are numerable the way species are numerable. That we cannot do the count does not make the count meaningless; it makes it His."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t6-l2`,
      num: `II`,
      title: `How an Angel Knows`,
      latin: `species infusae`,
      tag: `species infusae`,
      fin: {
        tag: `species infusae`,
        heading: `The library he never had to build.`,
        body: `We paid for 'dog' with a thousand dogs, and the tuition was years. The angel's library arrived with the angel: species infusae, the likenesses of things poured in with his nature, complete on the first morning of his aevum and never thereafter dog-eared, mislaid, or forgotten. He has never reasoned, the way the summit has never climbed; he sees in the principle everything we quarry out of it. But mark the two locked rooms, for the whole drama ahead turns on them: no created intellect reads the heart, and none sees the free future, his own included. And above his stocked shelves stands a knowledge no shelf can hold: the vision of God's own essence, which no angel has by nature. A mind that complete, offered a gift that far above it, must do what no calculation can do for it. It must choose. Next: the choice.`,
      },
      questions: [
        {
          id: `t6-l2-q1`,
          type: "mcq",
          stem: `A thousand dogs, one thought: that was the human road to 'dog', and it ran through eyes, phantasms, and years. An angel has no eyes, no phantasms, and no years. Yet he knows dogs better than the kennel master. Where did his knowledge come from?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "From observation, but faster: an angelic intellect abstracts from things in an instant.",
                "feedback": "Angelic empiricism: our road, walked at speed. But abstraction is not slow seeing; it is the lifting of form from matter through sense and phantasm, and the angel has neither the window nor the darkroom. However powerful the angelic mind, says Thomas, it could not reduce material forms to intelligibility without first imagining them, and the angel has no imagination (q.55 a.2 ad 2). No shortcut exists on a road he was never on."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "By gazing at God's essence, in which he naturally reads every creature.",
                "feedback": "This hands the angel by nature what even the angels receive only by grace: the vision of the divine essence. A creature's natural knowledge works through created likenesses; seeing all things IN God is the beatific vision, a gift above every nature, ours or theirs. Keep the two floors distinct: the module climbs to the upper one later, and the difference is the whole story of the fall."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "By recollection: his mind carries ideas from an existence before this one.",
                "feedback": "Reminiscence, the Platonic route: knowledge as memory of a prior life. It fails twice here. The angel had no prior life; he began, from nothing, at the definition's own beginning of time. And what he knows was never forgotten in the first place. Nothing needs recollecting where nothing was lost; the species were given, not mislaid."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "With his nature: the likenesses of things known, received from God in the same gift that made him.",
                "feedback": "Respondeo: the species whereby the angels understand are not drawn from things, but are connatural to them (q.55 a.2). The equipment came with the creature: he received from God the likenesses of things together with his intellectual nature, the way the philosophy course's lamps received light and glass in one giving. Born stocked, if 'born' were the word; the tradition calls the stock species infusae, infused species."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t6-l2-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>The lower intellectual substances, that is to say, human souls, have a power of understanding which is not naturally complete, but is successively completed in them by their drawing intelligible species from things. But in the higher spiritual substances, that is, the angels, the power of understanding is naturally complete by intelligible species, in so far as they have such species connatural to them, so as to understand all things which they can know naturally . . . The higher substances, that is, the angels, are utterly free from bodies, and subsist immaterially and in their own intelligible nature; consequently they attain their intelligible perfection through an intelligible outpouring, whereby they received from God the species of things known, together with their intellectual nature.</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae I q.55 a.2 &middot; Dominican Fathers translation</div></div>Souls gather; angels are given. What decides which way a mind gets its furniture?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Its rank in the hierarchy: higher creatures earn more direct methods of knowing.",
                "feedback": "Earn is the wrong verb and rank the wrong ruler. The passage is not distributing privileges by seniority; it is reading a necessity off two ways of existing. Nothing here was earned, everything was given; the question is why the gifts differ in kind and not just in size."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Its mode of being: forms wed to bodies learn through them; subsisting forms are stocked from above.",
                "feedback": "Respondeo: as a thing is, so it knows. The soul is the form of a body, so it behooves it to seek its intelligible perfection from bodies and through bodies, or the union would be pointless; the angel subsists immaterially, so his perfection pours in from the immaterial side. Last lesson's doctrine of what an angel IS just became the doctrine of how an angel KNOWS. Metaphysics first, epistemology after: the course's oldest habit, vindicated upstairs."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "God's free choice: He might have made gathering angels and stocked souls instead.",
                "feedback": "Divine freedom is real and the last module defended it, but it is freedom to create natures, not to mismatch them. A gathering angel would be an angel with senses, which is to say a body; a stocked soul would have no need of the flesh it informs. The passage argues from what each creature is to how it must know: fittingness, not lottery."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The objects known: bodily things must be learned bodily, spiritual things spiritually.",
                "feedback": "Tempting symmetry, and false: the angel knows BODILY things, dogs included, without one bodily step, and our minds climb to spiritual things from sensible footholds. What sets the method is the knower's constitution, not the object's address. The likeness of the stone can live in an immaterial mind; it is the mind's own mode that decides how it moved in."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t6-l2-q3`,
          type: "distinction_application",
          stem: `Aquinas says the angels have no occasion for comparison or discursive reasoning: they see conclusions IN principles at one glance, where we walk from one to the other. The distinction: discursive knowing moves stepwise from known to unknown; intuitive knowing possesses the whole at once. Four minds at work. Which one is knowing the way an angel knows?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The detective, assembling the culprit from cigar ash, train times, and a torn glove.",
                "feedback": "The glory of the discursive mind at full stretch: from traces to truth, one inference at a time. It is magnificent and it is motion. An angel confronted with the same room would not assemble anything; he would simply see, in the natures present, everything ash and glove could ever imply. No angel has ever deduced."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The geometer, driving a proof from axioms to the theorem, line by line.",
                "feedback": "Proof is the discursive art par excellence: the conclusion is EARNED, which means it was not possessed at the start. The angel is barred from proofs the way a man standing on the summit is barred from the climb. What the theorem labors toward, he holds in the axiom the way the eye holds the whole landscape."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Anyone seeing that a whole is greater than its part: no steps, no middle term, just sight.",
                "feedback": "Respondeo: the first principles, which we apprehend immovably and at once, are our one taste of the angelic mode: intellectus rather than ratio, sight rather than search. What is for us a threshold experience, the angel has as his entire life of mind: everything he naturally knows, held the way you hold 'the whole is greater than the part'. Man reasons; the angel understands."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The student before the exam, recalling last month's lecture from her notes.",
                "feedback": "Memory in the human style: knowledge banked through phantasms, retrieved through them again. The angel banks nothing, having lost nothing, and retrieves nothing, having filed nothing away. His species stand permanently in act before him. The lecture, for him, is always now being given."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t6-l2-q4`,
          type: "true_false_with_reason",
          stem: `Judge the sentence: "Even an angel must forget: no finite mind can hold everything at once forever."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: an unrehearsed skill rusts, and unrehearsed knowledge fades; finitude spares no one.",
                "feedback": "You have generalized a law of organs into a law of minds. Fading is what happens to knowledge stored in a bodily instrument: the phantasm dims, the pathway weakens. The angel's species are not stored in anything that tires; they are connatural, standing in his intellect the way roundness stands in the circle. Rust needs metal, and forgetting needs flesh."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: Scripture shows angels asking questions, and asking proves prior forgetting.",
                "feedback": "Angels do receive what they did not have: the mysteries of grace, unveiled to them by God in their turn. But receiving the new is not recovering the lost. What Scripture's questions show is that grace outruns nature, ours and theirs; not one species given at their creation has ever slipped from an angelic mind."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: forgetting is the decay of knowledge held through a bodily organ, and there is no organ.",
                "feedback": "Respondeo: what was never gathered cannot be mislaid. Our knowing frays because it lives partly in matter: the phantasm fades, the brain ages, the notebook burns. The angel's whole stock is immaterial, given with his nature, always in act. He does not remember his knowledge; he IS present to it, permanently. The thousand dogs were our tuition; he never paid it, and never loses the lesson."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: God continually re-teaches the angels whatever begins to slip from them.",
                "feedback": "A perpetual remedial seminar in the heavens: the picture is devout and the mechanism backwards. It concedes the slippage and patches it with miracle. Nothing slips. The gift did not need maintenance because it was not the kind of thing that decays; conservation holds the angel and his species in one act, not in a series of repairs."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t6-l2-q5`,
          type: "mcq",
          stem: `A storefront psychic promises what your late-night search bar half hopes for: the future told, your mind read. Set aside the fraud and ask about the metaphysics. Even an ANGEL, by nature, cannot deliver that. What stands outside all angelic knowledge?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Material events: pure spirits know forms, but bodies in motion escape them.",
                "feedback": "Backwards: the material world is exactly what the infused species cover, down to the sparrow's fall and the ash on the sleeve. An angel reads natures, causes, and dispositions with a completeness no laboratory approaches. The blind spot is not below him in the order of being. It is inward and ahead."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The secrets of hearts and the free future: what a will has not yet determined, no creature reads.",
                "feedback": "Respondeo: the free act, before it is placed, is not there to be known, and the heart's interior is open to Him alone who made it (q.57 aa.3-4, with Jeremias: the heart is perverse, who shall know it? I am the Lord who search hearts). An angel conjectures from signs, brilliantly, the way a fifty-year confessor reads a face; he does not see in. Every divination racket sells a power that no created nature possesses. The mysteries of grace, likewise, he awaits from revelation (a.5). The fence stands for demons too, and it matters there."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing: an intellect stocked from creation holds all that was, is, and will be.",
                "feedback": "This inflates the gift until it bursts the creature. All-knowing is the artificer's knowledge, the cause's view of everything it causes; T3 taught where that lives. The angel's stock covers what his nature can reach: natures, not the acts of freedom that have not yet been placed, nor the counsels of grace above him. A full library is not omniscience."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Universals: seeing each thing whole and singly, angels have no need of general ideas.",
                "feedback": "A real subtlety wearing the wrong conclusion. The angel does know singulars, and does not abstract; but his species are MORE universal than ours, not less: fewer, higher likenesses through which he knows many things distinctly, the higher the angel the fewer the species. Universality is not a crutch he lacks; it is a strength he has in a nobler mode."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t6-l2-q6`,
          type: "mcq",
          stem: `Last piece of the interior: the angel's clock. The tradition weighs duration with three measures: aeternitas, the whole of life possessed all at once, which the attributes module fenced for God; tempus, the count of changing being, gaining and losing; and a third it coined for creatures like this one, aevum. An angel does not age, yet he acts, attends, is sent: one thing after another. Which measure is his, and why?`,
          latin_tag: `species infusae`,
          doctrine_line: `Angels know by infused species, received with their nature: intuitively, not step by step; without forgetting; not reaching hearts, free futures, or the mysteries of grace; their measure is aevum, between time and eternity.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The mean: his being fixed beyond change, with a before and after annexed to his acts.",
                "feedback": "Respondeo: aevum, the aeviternal now (q.10 a.5): between time, which measures what changes in its very being, and eternity, which excludes succession entirely. The angel's substance stands fixed, past all decay; his thoughts, choices, and missions succeed one another. A standing rock in a running river: the rock is not the river, and neither is it the sky."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Eternity, the same as God's: deathless spirit and timeless Godhead share one measure.",
                "feedback": "This seats the cup in the fountain. Eternity is the measure of a being whose existence and operation admit no succession whatever: the tota simul that the attributes module fenced for God alone. The angel's BEING does not change, but his acts follow one another; a life with installments anywhere in it has not got eternity."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Time, simply: a longer life is still a life of one moment after another.",
                "feedback": "Time in the strict sense is the measure of motion: it clocks beings whose very existence is in flux, gaining and losing, aging. Nothing in an angel ages. To put him simply in time is to give him back the corruptibility the bronze circle argument took away. His acts have sequence; his being has none, and the measure must say both."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No measure: measures belong to physics, and spirits have outrun the physicists.",
                "feedback": "Measure is not a physicist's imposition; it is the shadow of a thing's mode of being, and every creature has a mode. Refuse all measure and you have refused to say how the angel exists, which is to refuse the question. The tradition's answer is more interesting than the shrug: a third kind of duration, fitted to a third kind of thing."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t6-l3`,
      num: `III`,
      title: `The Fall Before the World`,
      latin: `casus diaboli`,
      tag: `casus diaboli`,
      fin: {
        tag: `casus diaboli`,
        heading: `The instant that never unclenched.`,
        body: `No flesh, no fear, no rival: only the purest sin was available at that altitude, and it was taken. Created good, says the definition, and bad through themselves: splendor first, then a grasp at beatitude self-made, placed with total clarity and therefore placed once. The angelic will does not revisit; what we call the devil's malice is one choice, still fully willed, wearing its aevum like a sentence. Note what the definition tucked into its last clause: man sinned at the SUGGESTION of the devil. Prompted, seduced, half-talked-into-it: our fall is the shabbier story and the more hopeful one, because a flexible will that was talked down can be talked home, and the Word that does that talking is four modules ahead. The angels who stood, meanwhile, stood into permanence: the same fixity that seals the fallen seals the faithful in glory. Next lesson: what the standing ones do all day.`,
      },
      questions: [
        {
          id: `t6-l3-q1`,
          type: "mcq",
          stem: `Now the hard chapter. Some of them fell. But walk the inventory first: no flesh to bribe, no wallet to fatten, no rival to envy for her looks, no death to fear. Every sin you have ever met needed equipment a pure spirit does not own. What was left to sin WITH?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Desire for the daughters of men: the old reading of Genesis, spirits craving flesh.",
                "feedback": "The Watchers tradition: an ancient and honestly held reading of 'the sons of God saw the daughters of men', and the tradition weighed it and set it down. Craving flesh requires flesh, or at least an appetite seated in it; a subsisting form has neither. Whatever fell in heaven did not fall through a body it never had."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "An honest mistake: with so much to know, even a great intellect can miscalculate.",
                "feedback": "Not this intellect. Last lesson closed the exits: no discursion to take a wrong step, no phantasm to blur, no passion to rush the judgment, and every natural species standing in permanent act. An angel cannot be deceived about what he naturally sees. That is what makes the fall terrifying: it was performed with perfect clarity."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A flaw in the making: some were assembled closer to the dark from the start.",
                "feedback": "The two-principles account, and the Church has a sentence prepared for it: created by God good by nature. You will read it defined in a moment. If God builds no faults into natures, then no angel was assembled falling; whatever went wrong was contributed afterwards, by the creature, from its own freedom. The manufacture is not the suspect."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Pride: the will to hold his beatitude by his own power, a gift grasped instead of received.",
                "feedback": "Respondeo: strip away everything a spirit cannot want and what remains is the one sin that needs no body: pride, with envy trailing it (q.63 a.2). He desired, as his last end, a beatitude he could reach by his own nature, turning from the beatitude that is received by grace (q.63 a.3). Not a lower good preferred, but the highest good approached from the wrong side: mine, not given. The only sin available to an angel is the purest one."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t6-l3-q2`,
          type: "precision_check",
          stem: `The Isaias verse behind every painting of the fall: 'I will ascend into heaven, I will be like the Most High.' A homilist compresses it. Judge the compression with a jeweler's eye.`,
          payload: {
            "statement": "Lucifer's sin was that he wanted to be God's equal.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At 'Lucifer': Scripture applies the name to the king of Babylon, not to any angel.",
                "feedback": "Over-scrupled. The oracle addresses the prince of Babylon in the letter, and the tradition, Fathers and Doctors together, reads the fall of the angel under that figure; Aquinas cites the verse exactly so. The name is safe. The sentence's real trouble is in what it says the bearer of the name wanted."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At 'wanted': no act of will occurred; the fall is a picture of a natural incapacity.",
                "feedback": "This dissolves the drama into metaphysics and loses the doctrine. The definition says they BECAME bad through themselves: an act, placed by a will, with everything at stake. Explain the fall without a choice and you have explained it away; the whole terror of the chapter is that the choice was real and clear-eyed."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At 'God's equal': an intellect that clear cannot desire the impossible; he sought God's prerogative, not God's seat.",
                "feedback": "Respondeo: no angel can covet equality with God, for he sees with perfect clarity that a creature upgraded out of its nature simply ceases to be itself: the ass does not desire to be the horse (q.63 a.3). What he could desire, and did, was to hold as his own what God holds as His own: beatitude from himself, by his native power, unreceived. Anselm compressed it best: he sought that to which he would have come had he stood fast. The crime was not the destination. It was the refusal of the road."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing to correct: the sentence states the tradition's plain reading.",
                "feedback": "Almost, and the miss is load-bearing. Read strictly, 'wanted to be God's equal' attributes to a luminous intellect a desire it cannot form, the desire for its own non-existence; the finite equaling the infinite is not a big wish but a broken one. The tradition's reading is subtler and darker: he wanted likeness to God in exactly the one respect where likeness is not on offer."
              }
            ],
            "correct_option_id": "c",
            "correction": "Say rather: he desired his final beatitude by his own power, which is proper to God alone (ST I q.63 a.3): likeness grasped, not received. Equality he could not even want; the gift he could refuse, and did."
          },
        },
        {
          id: `t6-l3-q3`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>We firmly believe and openly confess that there is only one true God . . . the one principle of the universe, Creator of all things invisible and visible, spiritual and corporeal, who from the beginning of time and by His omnipotent power made from nothing creatures both spiritual and corporeal . . . The devil and the other demons were indeed created by God good by nature but they became bad through themselves; man, however, sinned at the suggestion of the devil.</p><div class="cr-cite">Fourth Lateran Council, Firmiter (1215), DS 800 &middot; Schroeder translation</div></div>The Creation module read this definition for its first clause. Read it now for its last. What work does 'they became bad through themselves' do?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It closes both exits at once: no evil principle behind the demons, no divine hand in their fault.",
                "feedback": "Respondeo: one sentence, two doors bolted. Against the dualists, from the Priscillianists of old Braga to the Albigensians the council faced in 1215: the devil is a creature, made good, by the one Creator of both columns. And against any whisper that the Maker made the malice: per se, through themselves, the whole causality of the first evil seated in created freedom. Nature from God, fault from the creature. The definition then adds the quietest, most consequential clause in the paragraph: man sinned at the SUGGESTION of the devil. The angels fell unprompted; we were talked into it. Hold that asymmetry; the mercy hangs from it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It teaches that evil entered when matter entered: spirit bent under the weight of the world.",
                "feedback": "The definition says nearly the opposite: the first sinners had no matter at all, and the material creation shares the same 'good by nature' as the spiritual. Evil's entry point was the purest tier of the inventory. Whatever theory blames the flesh must explain the fall of creatures who never had any."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It reports history: a war in heaven happened, and the council preserves the record.",
                "feedback": "The fall is no myth, but a council defining is not a chronicler reminiscing. Firmiter is drawing borders with anathemas on the far side: borders against a live twelfth-century church of two principles. Read definitions as walls built against someone, and always ask who; here the who is the Cathar perfecti, and behind them every dualism ever preached."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It softens the demons' guilt: becoming bad suggests a lapse, not a decisive crime.",
                "feedback": "Backwards: 'through themselves' is the least softening phrase in the conciliar vocabulary. It removes every mitigating supplier: no tempter before the first tempter, no defective nature, no deceiving circumstance. The becoming was an act with nothing behind it but the actor. That is not a lapse; it is authorship."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t6-l3-q4`,
          type: "fill_blank",
          stem: `The definition's own joinery, from memory. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The devil and the other demons were indeed created by God <span class="fb-blank" data-blank="b1">______</span> by nature but they became bad through <span class="fb-blank" data-blank="b2">______</span>; man, however, sinned at the <span class="fb-blank" data-blank="b3">______</span> of the devil.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "good"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "themselves"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "suggestion"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "good",
              "themselves",
              "suggestion",
              "innocent",
              "weakness",
              "envy",
              "command",
              "deception"
            ],
            "feedback": {
              "all_correct": "Locked: good, themselves, suggestion (Lateran IV, Firmiter, DS 800). Three words carrying three doctrines. GOOD: no nature is evil, the devil's included, and the dualists are outside the wall. THEMSELVES: the fault has one author and it is not God; the first evil was contributed, not built in. SUGGESTION: our fall came prompted, seduced from outside, where theirs came from nowhere but their own clarity. The tradition reads the difference with Damascene: the fall is to the angels what death is to men. A prompted fall in a flexible nature leaves a door for mercy; the next question walks through why theirs has none.",
              "partial_correct": "Check the joints. What were they created, by nature? Through what did they become bad? And at whose prompting did MAN sin, in the clause that separates our fall from theirs? Each decoy in the bank is a doctrine the definition was built to refuse."
            }
          },
        },
        {
          id: `t6-l3-q5`,
          type: "true_false_with_reason",
          stem: `Judge the sentence: "The devil was evil from the first instant God made him."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: Our Lord says he was a murderer from the beginning, and the beginning is the beginning.",
                "feedback": "Augustine already picked this lock: he is not to be thought of as sinning from the beginning wherein he was created, but from the beginning of sin (q.63 a.5 ad 1). The verse dates his persistence, not his manufacture: he never went back from it. Scripture's other oracle settles the direction: thou wast in the pleasures of the paradise of God. There was a moment of splendor, and it was real."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: otherwise Lucifer was once holy, which grants the enemy an unbearable dignity.",
                "feedback": "Piety misfiring into Manicheeism's front yard. The dignity is not grantable or withholdable; it is defined: created good by nature. That the most luminous of creatures fell is not an embarrassment the doctrine must hide but the very measure of what freedom before God means. Deny the splendor and you cheapen the fall to a factory defect."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: he fell only after long ages of service, as a courtier slowly sours.",
                "feedback": "Right verdict, wrong clock. The souring courtier is a discursive creature: time to brood, evidence to reread, resentment compounding. An angelic will needs no ages; its adhesion is one act, whole. Thomas holds, with the greater number, that the fall came immediately after the first instant: no long career, no slow curdling (q.63 a.6). The window between splendor and ruin may have been exactly one instant wide."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: a first-instant operation flows from the author of the nature, and God authors no sin.",
                "feedback": "Respondeo: what a thing does in the very instant it is made, it does from the cause that made it, as the new flame rises in the instant it is lit; a first-instant sin would bill the fault to the Creator (q.63 a.5). Impossible. In that first instant all were good; created in grace, says Thomas, all of them merited. Then some placed the impediment themselves, at once. The Church defined the shape of it; the schools may keep the timetable."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t6-l3-q6`,
          type: "mcq",
          stem: `The unbearable question, asked plainly. Peter fell and wept and was restored; the angels fell and are fallen still, forever. Why is there no second chance for a spirit?`,
          latin_tag: `casus diaboli`,
          doctrine_line: `The demons were created good and fell through themselves, immediately after the first instant, by pride: beatitude grasped rather than received; their will, adhering as angels adhere, is fixed forever, ours while we walk is not.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because their sin was so enormous that even infinite mercy cannot stretch to it.",
                "feedback": "Thomas rules this out in so many words: we must seek the cause of this obstinacy, not in the gravity of the sin, but in the condition of their nature or state (q.64 a.2). No sin out-sizes mercy; the arithmetic of enormity is the wrong ledger entirely. What differs is not the offense's weight but the will that placed it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the angelic will adheres as the angelic mind sees: once, wholly, immovably.",
                "feedback": "Respondeo: man's free-will is flexible to the opposite both before and after choice; the angel's, before the choice, but not after (q.64 a.2). A mind that sees all at once chooses all at once, and the choice does not come up for revision because nothing was left out of it. Damascene's line is the lesson's tombstone: death is to men what the fall is to the angels. Mercy delivers those who repent; a fixed will cannot, not will not, come unclenched. Origen taught every creature revisable forever, demons included; his Peri Archon speculation was weighed and condemned in the sixth century, for it quietly abolishes heaven's own permanence along with hell's."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because God, in strict justice, declines to offer the pardon they would accept.",
                "feedback": "This stages a mercy withheld from someone reaching for it, and no one is reaching. The desire remains, says Thomas, even when the belief in success is gone: the first sin stays IN the will, wanted still (q.64 a.2 ad 3). There is no petition on the table being refused. The tragedy is stranger: a will that will never file one."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because pride forbids them to ask, though they could repent if once humbled.",
                "feedback": "This turns metaphysics into a therapy problem: a stubborn patient one breakthrough away. But the fixity is not a mood barring the door to a different mood; it is the angelic mode of willing itself. 'If once humbled' posits exactly what the nature excludes: a second look at a choice that was made with nothing left over to reconsider."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `t6-l4`,
      num: `IV`,
      title: `Guardians and Messengers`,
      latin: `angelus custos`,
      tag: `angelus custos`,
      fin: {
        tag: `angelus custos`,
        heading: `The colleague you have never met.`,
        body: `The court assembled: Seraphim burning nearest the fire, Cherubim keeping the secrets, Thrones bearing up the judgments; Dominations appointing, Virtues empowering, Powers ordering and restraining; Principalities over the nations, Archangels with the great news, and the last choir given the errand the tradition ranks least and Scripture guards most fiercely: one wayfarer at a time. Yours was assigned the day you were born, not the day you were good. He has never forgotten you, being unable to forget; never resented the assignment, resting as he does in the divine justice; never once left, even locally, without leaving the guardianship intact. Jerome called it the dignity of souls, that heaven walks them home individually. Weigh it precisely, sententia certa, and then live as if it were true, which it is. Next: the errands themselves, and the government of everything.`,
      },
      questions: [
        {
          id: `t6-l4-q1`,
          type: "mcq",
          stem: `A young man hires a guide for the road to Rages. The guide knows the route, arranges the marriage, drives off a killer, cures a blindness, and at the door declines the fee: I am Raphael, one of the seven who stand before the Lord. The book of Tobias, and one strange detail of grammar: 'angel' never names what he IS. What does the word name?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The nature itself: 'angel' is the species-word for spirits, as 'human' is for us.",
                "feedback": "The natural assumption, and Augustine spends a famous sentence dismantling it: angel is the name of the office, not of the nature; the nature is spirit, the office is messenger. Ask WHAT he is and you get the last three lessons. Ask what 'angel' means and you get a job description: one sent."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "An office: 'one sent'. The word tells you their work in the economy, not their essence.",
                "feedback": "Respondeo: angelos, messenger: the name is a commission. They are all ministering spirits, sent to minister for them who shall receive the inheritance of salvation (Hebrews 1:14). The nature is spirit; angel is what a spirit is called when providence hands him an errand, which is why the walking companion on the road to Rages could keep the name and hide the fire. The invisible half of creation is introduced to us by its duties."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A courtesy Scripture extends loosely: prophets, priests, even winds get called angels.",
                "feedback": "The reductive reading, and it was tried in earnest: Rabbi Moses read many scriptural angels as men with messages or as natural powers poeticized. Aquinas grants the word its range and refuses the dissolve: it is quite foreign to Scripture's custom to make all the angels into weather and clergymen (q.50 a.3). Behind the flexible word stands a fixed population."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A rank of courtiers: beings whose whole work is standing in the throne room, dutiless.",
                "feedback": "Half of heaven's grammar, missing the other half. They do stand before the Face, and Raphael says so in the same breath as he invoices nothing for three errands. Vision does not preclude mission; the standing and the sending are one service. A court where attendance excluded errands would be an ornament, and nothing in the inventory is ornamental."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t6-l4-q2`,
          type: "place_in_tree",
          stem: `The tradition, through Dionysius and Gregory, hands down nine choirs in three hierarchies, and the ranking principle is not power but reception: how each order receives the one divine light. The first hierarchy attends on God Himself, and its names are taken from nearness to Him. The middle hierarchy disposes the universal government, and its names are names of common rule. The lowest hierarchy carries the work out among creatures, and its names are names of the errand. Every complete work has that shape: the end beheld, the plan disposed, the thing done. Nine choirs wait below, each carrying its old epithet: build the court.`,
          payload: {
            "instruction": "Tap a choir, then the hierarchy where it stands.",
            "nodes": [
              {
                "id": "n1",
                "label": "the nine choirs: one light, received by rank",
                "parent_id": null
              },
              {
                "id": "n2",
                "label": "prima hierarchia: attending on God Himself, named from nearness",
                "parent_id": "n1"
              },
              {
                "id": "n3",
                "label": "media hierarchia: disposing the universal government, named from rule",
                "parent_id": "n1"
              },
              {
                "id": "n4",
                "label": "ima hierarchia: executing the work among creatures, named from the errand",
                "parent_id": "n1"
              }
            ],
            "items": [
              {
                "id": "i1",
                "text": "Seraphim: named from the fire of love",
                "correct_node_id": "n2"
              },
              {
                "id": "i2",
                "text": "Cherubim: named from fullness of knowledge, keepers of the secrets",
                "correct_node_id": "n2"
              },
              {
                "id": "i3",
                "text": "Thrones: the seat on which God rests and renders judgment",
                "correct_node_id": "n2"
              },
              {
                "id": "i4",
                "text": "Dominations: they appoint what is to be done",
                "correct_node_id": "n3"
              },
              {
                "id": "i5",
                "text": "Virtues: strength for the carrying out; through them, miracles",
                "correct_node_id": "n3"
              },
              {
                "id": "i6",
                "text": "Powers: they order how commands are executed, and hold back the demons",
                "correct_node_id": "n3"
              },
              {
                "id": "i7",
                "text": "Principalities: princes of the execution, set over peoples and kingdoms",
                "correct_node_id": "n4"
              },
              {
                "id": "i8",
                "text": "Archangels: bearers of the great announcements",
                "correct_node_id": "n4"
              },
              {
                "id": "i9",
                "text": "Angels: the last choir, one wayfarer at a time",
                "correct_node_id": "n4"
              }
            ],
            "feedback": {
              "all_correct": "The court stands: three hierarchies, nine choirs, one light stepping down in order (ST I q.108 a.6). Nearest the fire: Seraphim aflame, Cherubim knowing, Thrones bearing the judgments. In the council chamber: Dominations appointing, Virtues empowering, Powers ordering the how. On the roads: Principalities over nations, Archangels with the great news, Angels beside single souls. One honest footnote the tradition keeps attached: Dionysius and Gregory swap the Virtues and the Principalities, each quoting St. Paul, who lists the middle orders one way to the Ephesians and another to the Colossians. Aquinas shrugs magnificently: little or no difference exists in reality. The architecture is the tradition's received teaching, not a solemn definition; hold it with reverence at exactly that rank.",
              "partial_correct": "Run each name through its epithet, and the epithet through the three-part test: is this a name of nearness, a name of rule, or a name of the errand? The end beheld, the plan disposed, the thing done: every choir confesses its hierarchy in its own title.",
              "per_item_corrections": [
                {
                  "item_id": "i3",
                  "feedback": "Thrones sounds like ruling, and the name is actually the deepest nearness: the seat itself, on which God rests and from which His judgments proceed. Gregory says God accomplishes His judgments THROUGH them. First hierarchy: they touch the King, not the paperwork."
                },
                {
                  "item_id": "i5",
                  "feedback": "Not the moral habits: these Virtues are the middle hierarchy's strength-givers, the choir through whom the power for mighty works flows downward, which is why the tradition ties miracles to them. Government, not character."
                },
                {
                  "item_id": "i6",
                  "feedback": "Powers sounds supreme and sits in the middle: theirs is the HOW, ordering the way commands descend, and theirs is the police work, coercing the spirits that resist. Rule, not errand; disposition, not delivery."
                },
                {
                  "item_id": "i7",
                  "feedback": "Princes, yes, and princes OF THE EXECUTION: the highest choir of the lowest hierarchy, presiding over peoples and kingdoms where the plan touches ground. Daniel's 'prince of the kingdom of the Persians' is this choir on duty. The grandest name in the errand column is still in the errand column."
                }
              ]
            }
          },
        },
        {
          id: `t6-l4-q3`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Each man has an angel guardian appointed to him. This rests upon the fact that the guardianship of angels belongs to the execution of Divine providence concerning men. But God's providence acts differently as regards men and as regards other corruptible creatures, for they are related differently to incorruptibility. For men are not only incorruptible in the common species, but also in the proper forms of each individual, which are the rational souls . . . Now it is manifest that the providence of God is chiefly exercised towards what remains for ever . . . Hence it is also reasonable to suppose that different angels are appointed to the guardianship of different men.</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae I q.113 a.2 &middot; Dominican Fathers translation</div></div>One angel per person: not poetry, an argument. What carries it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Compassion: a road that dangerous should not be walked alone, so heaven staffs it kindly.",
                "feedback": "True as devotion, absent from the passage as argument. Thomas is not moved here by loneliness but by metaphysics: the question is what in a man could warrant an escort assigned to HIM rather than to his species. Kindness explains that God guards; it does not explain the one-to-one grain. The grain comes from what each of us is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Workload: no single angel could track the race entire, so providence divides the caseload.",
                "feedback": "The article's own first objection runs the other way and Thomas concedes its premise: an angel is stronger than a man, and one could guard many. The assignment is not staffing arithmetic; a legion is not needed per soul, nor a soul per legion. What demands the individual guardian is the individual's standing in the plan, not the guardian's capacity."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Merit: the baptized enter the Church's care, and each member is assigned her escort.",
                "feedback": "This makes the guardian a benefit of membership, and Thomas grounds it a floor lower, in nature's own dignity: the rational soul as such. What is conferred on man as Christian begins at baptism; what is conferred on man as man begins at birth, and the guardianship is counted there. The sacraments will crown the escorted; they do not hire the escort."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Eternity's grain: providence attends chiefly to what lasts forever, and each rational soul does.",
                "feedback": "Respondeo: the sparrow is guarded as a kind; you are guarded as a WHO, because the sparrow's kind outlasts the sparrow and your soul outlasts empires. Providence, chiefly exercised towards what remains for ever, meets an immortal individual with an individual ministry: the execution of the plan at the plan's own grain. Jerome's line in the article says it with a bow: great is the dignity of souls, that each one from birth has an angel deputed to guard it."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t6-l4-q4`,
          type: "mcq",
          stem: `Now weigh the doctrine itself, with the scales the course has taught you to use. 'Each of the faithful has a guardian angel.' What precisely is the doctrinal rank of that sentence?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Defined dogma: Lateran IV's Firmiter includes the guardians in its definition.",
                "feedback": "Check the text you close-read one lesson ago: Firmiter defines the angelic creation, good by nature, from the beginning of time. Not one word about guardianship. Precision about WHERE a doctrine is taught is half of theology; claiming a definition that does not exist hands ammunition to whoever wants to doubt what the Church actually holds."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A pious opinion: edifying, optional, deniable at no cost.",
                "feedback": "Too cheap. Scripture leans on it from both testaments: their angels always see the face of my Father; He hath given His angels charge over thee. The liturgy keeps a feast for it. The theologians hold it with moral unanimity. To deny it would not be heresy; it would be rash, the theological word for contradicting the Church's certain teaching without warrant."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Sententia certa: the Church's certain and constant teaching, though never solemnly defined.",
                "feedback": "Respondeo: the manuals grade it exactly there: every one of the faithful has his own special guardian angel, sententia certa. Certain from the ordinary teaching, the liturgy's feast, the consensus of the Doctors on Matthew 18:10; defined by no council, no ex cathedra act. The mature believer holds it firmly AND weighs it precisely; the course's whole reception register is in that pair of verbs. Guard the ranks and you can defend the wall."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Philosophically demonstrated: q.113's argument proves guardians as q.2 proved God.",
                "feedback": "A category slip the article itself avoids. Thomas argues fittingness: GIVEN what providence is and what man is, individual guardianship is profoundly reasonable. That is an argument of convenientia, showing the revealed thing beautiful and coherent, not a demonstration compelling it. Reason walks this doctrine home; revelation owns the house."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t6-l4-q5`,
          type: "mcq",
          stem: `The rollcall question: who actually gets a guardian? Answer like the article does, not like the greeting card does.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Every human wayfarer from birth: pagan, sinner, the foreknown lost, Antichrist himself.",
                "feedback": "Respondeo: what is given to man as man begins when the man does, so Thomas counts the guardianship from birth, for every wayfarer on the unsafe road: infidels included, the foreknown included, even Antichrist, whose angel will see to it that he does not do as much harm as he would wish (q.113 aa.4-5). One exception, from excess: Christ, guided immediately by the Word, was ministered to by angels, never guarded by a superior. And a terminus: at death the escort ends, in the kingdom an angel to reign WITH him. The honest footnote: Origen records an older opinion assigning the guardian at baptism, and the graded formula of the manuals speaks of the faithful; Thomas takes birth, with reason, and the schools keep the nuance."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The baptized: guardianship begins where the life of grace begins.",
                "feedback": "The opinion has a pedigree, Origen reports it, and the narrower graded formula speaks of the faithful; it is no straw man. But Thomas files the benefit under nature, not sacrament: what God confers on man as a rational being arrives with the rational being. Baptism brings the Eucharist and the inheritance; the escort was already on duty in the delivery room."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The predestined: providence spends its ministers only where they will succeed.",
                "feedback": "Providence audited by outcomes: the doctrine of a very careful accountant, and the article flatly refuses it. The angelic ministrations are not withdrawn from those they will not save; they ward off evils regardless, efficacious short of the inheritance. Heaven does not practice triage. That some help helps less is a mystery filed with grace, not a limit on the guard."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Those who ask: the guardian attends where devotion invites him.",
                "feedback": "This makes the oldest bodyguard in creation a subscription service. The child who has never prayed and the man who quit are precisely the cases the doctrine covers best: guarded before asking, guarded after quitting, never wholly forsaken even in sin (q.113 a.6). Devotion opens your eyes to the escort; it does not hire him."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t6-l4-q6`,
          type: "dialogue_branch",
          stem: `The school gate, 3:15, backpacks everywhere. Another parent, kind and visibly tired, three months after her mother's funeral: "We told Sofia her grandma is her guardian angel now. She waves at the sky on the way in every morning. It helps her." Choose.`,
          latin_tag: `angelus custos`,
          doctrine_line: `Nine choirs in three hierarchies receive and hand down the one light; the last choir walks with us: to every human wayfarer, from birth, one guardian angel, the Church's certain teaching, precisely weighted.`,
          lesson_complete: true,
          payload: {
            "commentatorLine": "The Commentator has stood at many gates. He has watched the lecture chill a grieving woman, the shrug bless a falsehood, and sentiment sell the communion of saints for a scrapbook. The words that help are the ones that are true and arrive as a gift, not a correction.",
            "branches": [
              {
                "text": "\"Honestly, who knows how heaven staffs these things? If it comforts her, that's what matters.\"",
                "feedback": "The blessing of a falsehood, dressed as humility. The Church does know some of how heaven staffs these things; you learned it this week. Comfort built on a confusion is rented, not owned, and the day Sofia learns the difference between a grandmother and an angel, she will wonder what else was kindly meant and untrue. She can be comforted with the truth; it is better at it."
              },
              {
                "text": "\"If she's with God, she's closer to Sofia than an angel could be: she knows her, prays for her, waits for her. And Sofia has a guardian too, assigned the day she was born. Two friends up there, not one.\"",
                "verdict": "correct",
                "feedback": "Respondeo: everything true, nothing taken. Grandma is not demoted to a metaphor nor promoted to a different species; she is given the greater title, a soul with God who knows and prays and waits, the communion of saints doing what it does. The guardian is not displaced but introduced: on duty since the delivery room, unpaid, unretiring. Sofia's morning wave survives intact, and now it has two addressees. Doctrine at the gate sounds like this: an inventory of gifts, delivered gently, none of them invented."
              },
              {
                "text": "\"Actually, humans can't become angels: different natures entirely. Aquinas covers this in the Prima Pars, question fifty.\"",
                "feedback": "Every word true, and the gate is not a lectern. She is not defending a thesis; she is holding a grief together with a picture. Hand a citation to a woman who handed you her mother and you have won the exchange and lost the person. The same truths, carried in the second branch's voice, arrive as consolation instead of correction. The difference is the whole art."
              },
              {
                "text": "\"Angels or not, as long as Sofia remembers her, her grandma lives on in her heart.\"",
                "feedback": "The secular consolation, and it is smaller than what you have to give. Memory is a photograph; the communion of saints is a phone line. Trade the living intercession of a soul with God for 'lives on in her heart' and you have handed a Christian child the same comfort the catalog sells, gently discounting her actual inheritance. She is owed the larger estate."
              }
            ]
          },
        }
      ],
    },
    {
      id: `t6-l5`,
      num: `V`,
      title: `The Government of the World`,
      latin: `gubernatio`,
      tag: `gubernatio`,
      fin: {
        tag: `gubernatio`,
        heading: `The chisel, at last, at scale.`,
        body: `The plan was T3's lesson: eternal, immediate, skipping nothing, not even the sparrow. The execution is this one: a kingdom of real causes, angels enlightening angels, spirits steadying bodies, sun and salt and every faithful mechanism, all of it truly causing the way the chisel truly cuts, because the King's idea of glory is not a throne room where nothing else acts but a cascade where everything does. He is not at the top of the stairs; He is inside every stair, moving each agent as what it is, the necessary necessarily, the free freely, the malicious on a leash they cannot see. When He writes outside the ordinary margins, the book does not tear, being His. And the one thing no creature in the whole government can do, angel or demon, is sign your name from within: the will stays sovereign under God alone, which is why the fall was a crime and the standing was a glory. The court is assembled, the government is running. One recapitulation, and the wing turns toward the question every angel already sees answered: what all this government is FOR.`,
      },
      questions: [
        {
          id: `t6-l5-q1`,
          type: "mcq",
          stem: `The sculptor's hand, the chisel's edge: one act, two causes, and the cutting truly belongs to both. Now widen the workshop until it is everything. Providence drew the plan in eternity; the last module left the execution standing at the door. So: does God run the world alone, or through hands?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Alone: infinite power needs no help, and shared control is diluted control.",
                "feedback": "The premise is true and the inference borrows an accountant's axiom heaven never signed. Need is not the question; nothing in God requires the chisel, the angel, or you. But government measured by the governed's PERFECTION prefers sharing to solitude, and control that creates other controllers is not diluted. It is magnified. The lonely-monarch picture mistakes largesse for leakage."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Through hands entirely: He wound the great mechanism and retired to watch it run.",
                "feedback": "Deism, and the Creation module already broke this watch: a world that would lapse into nothing without the sustaining hand is a strange thing to retire from. The withdrawal is impossible on both floors. In the plan, nothing escapes His immediate design; in being, nothing stands one instant unheld. Whatever the ministers do, they do inside a grip that never opened."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Both, by floors: the plan is immediate down to the least detail; the execution runs through ministers.",
                "feedback": "Respondeo: in government there are two things, the design and the execution; as to the design, God governs all things immediately; in the execution, some things by means of others (q.103 a.6). The best physician plans every detail himself, says Thomas; the greatest king executes through ministers. T3 taught the plan and stopped, on purpose, at a door marked next module. This is the next module. The chisel doctrine, scaled to everything: the whole cascade of causes really causing, inside one design that skipped nothing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "By committee: He governs the whole, and delegated spirits handle the details He omits.",
                "feedback": "Plato's actual org chart, three tiers of providence with the details subcontracted, and Aquinas rejects it by name: God has the design of the government of all things, EVEN OF THE VERY LEAST (q.103 a.6). Nothing is beneath the plan; the sparrow was never delegated out of the design. What the ministers receive is a share in carrying out, never a district the King declined to think about."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t6-l5-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Since things which are governed should be brought to perfection by government, this government will be so much the better in the degree the things governed are brought to perfection. Now it is a greater perfection for a thing to be good in itself and also the cause of goodness in others, than only to be good in itself. Therefore God so governs things that He makes some of them to be causes of others in government; as a master, who not only imparts knowledge to his pupils, but gives also the faculty of teaching others . . . [To the objection that ministers imply imperfection:] That an earthly king should have ministers to execute his laws is a sign not only of his being imperfect, but also of his dignity; because by the ordering of ministers the kingly power is brought into greater evidence.</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae I q.103 a.6 &middot; Dominican Fathers translation</div></div>The earthly king delegates because he cannot be everywhere. God can. Then why the ministers?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Fittingness to us: creatures obey creatures more easily than they could bear God unmediated.",
                "feedback": "A real thread in the tradition, the Sinai principle: the people begged for a mediator, and got one. But it explains the comfort of mediation, not the existence of ministry, and it would leave the irrational creation, which fears no theophany, unexplained. The passage's own reason is bolder: not our weakness accommodated but our nature promoted."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Largesse: He shares the dignity of causing, and government is better the more perfection it gives away.",
                "feedback": "Respondeo: the master who only informed his pupils would be outdone by the master who makes them teachers; a God who only acted would be, unthinkably, outdone by the God who makes real actors (q.103 a.6). If God governed alone, things would be deprived of the perfection of causality: the chisel really cuts, the fire really burns, the angel really ministers, and every one of those verbs is a donated dignity. The ministers do not cover a gap in the King. They ARE His evidence, the royal power made visible in the ordering it gives away."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Economy: one act that triggers a cascade is more elegant than countless direct interventions.",
                "feedback": "The engineer's aesthetic, and God is not conserving effort, having none to conserve. Elegance-as-thrift praises a governor for what he saves; the article praises this Governor for what he SPENDS: causality itself, handed down the whole cascade. The design is not minimal. It is maximal in exactly the dimension thrift would trim: the number of things given something real to do."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Testing: intermediaries are set over creatures to prove and be proved before glory.",
                "feedback": "Probation is real in the story of freedom, the last lessons said so, but it is a chapter, not the constitution. The unfree creation executes government too, salt preserving meat, sun steadying seasons, and none of it is being examined. The reason must cover the whole cascade, tested and untested alike, and the passage gives it: perfection communicated, goodness made causal."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t6-l5-q3`,
          type: "mcq",
          stem: `The Creation module left a door here by name: the song stays on the singer's breath, nothing conserves itself. But does the breath pass through instruments? Is anything held in being THROUGH something else?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: effects are conserved through middle causes, while depending first and principally on God.",
                "feedback": "Respondeo: God keeps certain things in being by means of certain causes; in a series, the effect depends first and principally on the first cause, and in a secondary way on all the middle causes (q.104 a.2). The atmosphere holds its light through the sun, the effect through its cause, the lower through the higher: mediate conservation, the door T5 named now opened. And no dilution anywhere in the chain: He established the order in creating it and remains the principal conserver through it. The middles are conduits of a current that is entirely His and truly theirs to carry."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No: conservation is creation continuing, and creation admits no instruments at all.",
                "feedback": "The premise is the last module's own doctrine and the inference oversteps it. In the strict act of giving being from nothing, no creature can even minister, true. But conservation as it reaches a PARTICULAR effect rides the order of causes God built: remove the sun and the daylight goes, remove the cause and the effect follows it down. The immediate grip and the mediated order are both real, on different floors."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes, and therefore in emergencies only: middle causes hold things up when God turns elsewhere.",
                "feedback": "There is no elsewhere. The middles never substitute for the First; they participate in Him, and the moment you read the cascade as a relay of divine attention you have reinvented the retired watchmaker with extra steps. Nothing is ever held by the middle causes INSTEAD of by God; everything held through them is held by Him, more intimately than by them."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Only living things: preservation requires an interior principle, which the lifeless lack.",
                "feedback": "Salt has no interior life and preserves meat all the same; Thomas's own pantry example. Conservation through causes is not vitalism; it is the plain structure of dependent series, living or dead. The fern, the boulder, and the daylight are all held the same way: through their causes, under their Cause."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t6-l5-q4`,
          type: "mcq",
          stem: `Augustine, quoted at the head of the article: the grosser bodies are ruled by the subtler, all bodies by the rational spirit of life, the sinful spirit by the good spirit, and this spirit by God Himself. A cascade of government, top to floor. The worry writes itself: does a cascade that long leave God far away at the top of the stairs?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes, and reverently so: transcendence means distance, and the stairs protect His majesty.",
                "feedback": "Majesty protected by remoteness is a courtier's theology, not the Summa's. Transcendence is not the far end of a distance; it is what makes distance inapplicable. The God so unlike creatures that no rung resembles Him is, for exactly that reason, nearer to each rung than it is to itself. The stairs are real. He is not standing at the top of them; He is holding every stair."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, in practice: the lower rungs deal with ministers and meet the King only at the end.",
                "feedback": "This turns the cascade into a bureaucracy where the petitioner never reaches the office. But the ministers are not between you and God the way a secretary is between you and the director, screening access. They are between you and Him the way sunlight is between you and the sun: the medium IS the contact. Every ministration delivers Him, who works inside it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No, because the cascade is short: a few spirits, then God; the stairs are mostly ceremonial.",
                "feedback": "The cascade is anything but short: hierarchies enlightening hierarchies, angels over bodies, causes under causes down to the salt in the pantry. Shrinking the order to save the intimacy concedes the objection's premise, that mediation distances. It does not. The order can be as long as God likes; He is at every link, or there is no link."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No: He works interiorly in every agent at every rung; the cascade is His nearness organized.",
                "feedback": "Respondeo: those who act are moved by God Himself, who works in them interiorly (q.103 a.5 ad 2); the government descends rung by rung precisely because the Governor is wholly present at each one. Even the wreckers are inside it: the demons assault, and the good spirits hold them back lest they hurt as much as they would, malice itself harnessed to the order it hates (q.113 a.4 ad 3; q.64). Daniel saw the princes of nations contend and consult: the traffic of a government, not the absence of one. The stairs do not separate the King from the kingdom. They are how His nearness is dressed."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t6-l5-q5`,
          type: "mcq",
          stem: `Cana, Lazarus, the healed blind. The modern objection arrives on schedule: a miracle is a violation of the laws of nature, and a lawgiver who violates his own laws is embarrassing. Aquinas, seven centuries early, disagrees with the word 'violation'. Why is a miracle not one?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because miracles are rare enough that the laws remain statistically intact.",
                "feedback": "Statistics is the wrong court entirely: one true exception embarrasses a necessity as thoroughly as a thousand. If the miracle were a violation, its rarity would be no defense; if it is not, no defense is needed. The answer lives in whose order nature's order is, not in how often it is exceeded."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because nature's order depends on His will: acting beyond it, He acts against nothing He owes.",
                "feedback": "Respondeo: God can act outside the order of secondary causes, because that order is subject to Him, proceeding from Him not by necessity but by the choice of His will; what He cannot do is act against the order depending on Himself, for He does not act against Himself (q.105 a.6). The tide already shows the grammar: water climbing against its downward bent, at the pull of the agent its inclination depends on, and nothing violated. A miracle is the same signature written larger: the Author writing outside the ordinary margins, in a book whose every margin He set. Law implies a legislator; only a nature that OWNED its order could be violated, and nature never owned it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because miracles are natural events not yet explained: tomorrow's physics, today's wonder.",
                "feedback": "The promissory-note naturalism that has been due tomorrow for some centuries. It misreads the claim's structure: a miracle is not proposed as a gap in the mechanism but as an act ABOVE the whole mechanism's tier, the effects of secondary causes produced without them. Explain any mechanism you like; the question was never the mechanism. It was who holds the tier."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because nature yields willingly to her Maker, matter recognizing its Master's voice.",
                "feedback": "Lovely, and it personifies the problem away: obedience-poetry makes nature a servant who might in principle have resisted, which quietly grants nature a rival's standing. Nothing yields because nothing withstands; the order simply IS His instrument, at every tier. Keep the doctrine drier than the hymn: not persuasion of a rival, but an Author beyond His margins. One footnote with teeth: no angel works a true miracle by his own power; the Virtues minister wonders, God alone authors them (q.110 a.4)."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t6-l5-q6`,
          type: "precision_check",
          stem: `Monday morning, the oldest excuse in the world, filed since Eden. Judge it with a jeweler's eye.`,
          latin_tag: `gubernatio`,
          doctrine_line: `God governs all things immediately in the design and through ministers in the execution, sharing the dignity of causality; He conserves through middle causes, works interiorly in every agent, exceeds His order without violating it, and no creature can force the will.`,
          lesson_complete: true,
          payload: {
            "statement": "The devil made me do it.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At 'the devil': demons are beneath the government's notice, so none was involved.",
                "feedback": "Over-corrected into naturalism. Demons are inside the government, not beneath its notice: assaulting, tempted-permitting, held on the Powers' leash. That a temptation had a tempter is frequently true. The sentence's fraud is not the existence of the salesman; it is the claim about what the salesman could do."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At 'me': the self under temptation is diminished, so ownership hardly applies.",
                "feedback": "The therapeutic dissolve, gentler than the devil's version and headed the same place: nobody home to answer for it. Temptation storms the suburbs, passions and imagination, and can rattle them hard; the citadel where consent lives does not change hands under weather. Diminished circumstances mitigate; they do not evacuate the 'me'."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At 'made': no creature moves the will from within; he persuades and rouses, and consent stayed yours.",
                "feedback": "Respondeo: to change the will belongs to God alone; an angel, fallen or faithful, moves it only by persuasion and by rousing the passions, and the will ever remains free to consent to, or to resist, the passion (q.111 a.2). The devil is a salesman with no keys to the house: he can knock, display the goods, shout through the letterbox. He cannot sign for you. Even God, who CAN move the will from within, moves it as its author, making the free act free; the tempter gets no such interior. 'Made' is the one verb in the sentence that is metaphysically impossible."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing to correct: Scripture itself shows the devil driving men to sin.",
                "feedback": "Scripture shows him prompting, accusing, sifting like wheat, entering where consent had already opened doors. It never once shows the will's interior picked from outside, and the Church reads the temptation stories with exactly that lock intact. Judas was persuaded, not possessed of his choice. Keep the lock in the doctrine; every excuse and every despair depends on pretending it is broken."
              }
            ],
            "correct_option_id": "c",
            "correction": "Say rather: the devil tempted me, and I consented. Persuasion and roused passion are real artillery, and they land outside the walls: no creature moves the will from within (ST I q.111 a.2). The sentence that owns the consent is also the only sentence that can repent of it."
          },
        }
      ],
    },
    {
      id: `t6-l6`,
      num: `VI`,
      title: `Recapitulatio`,
      latin: `de angelis`,
      tag: `de angelis`,
      fin: {
        tag: `de angelis`,
        heading: `The invisible half of the inventory, owned.`,
        body: `The Creed's second column is no longer a rumor: form without the bronze, minds stocked at creation, a fall with no tempter and a standing with no end, the court of nine handing one light down rank by rank, the last choir walking children to school, and the whole apparatus not a rival government but the King's own largesse, causes really causing inside a design that skipped nothing. Thomas, who wrote all of this with a jeweler's patience, also wrote the stanza the whole Church sings without knowing its author: Panis Angelicus, the bread of angels become the bread of men. The Oratorium will hand you the hymn itself in time; take from it now just the module's own smile, that the creatures of the third heaven are named in the tradition's happiest line about a meal on earth. The angels see the Face; you hold the road and the escort. What the seeing IS, and why it alone can be the last end of any rational creature, is the next module's whole business. The going forth is complete. The return begins.`,
      },
      questions: [
        {
          id: `t6-l6-q1`,
          type: "match_pair",
          stem: `Six images carried the module. Give each its doctrine.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the roundness with no bronze"
              },
              {
                "id": "L2",
                "text": "the library that arrived with its reader"
              },
              {
                "id": "L3",
                "text": "the instant that never unclenched"
              },
              {
                "id": "L4",
                "text": "the court of nine, one light stepping down"
              },
              {
                "id": "L5",
                "text": "the guide on the road to Rages"
              },
              {
                "id": "L6",
                "text": "the chisel at cosmic scale"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "forma subsistens: the whole nature standing without matter, deathless"
              },
              {
                "id": "R2",
                "text": "species infusae: knowledge given with the nature, never gathered, never lost"
              },
              {
                "id": "R3",
                "text": "obstinatio: the angelic will adheres once, wholly, immovably"
              },
              {
                "id": "R4",
                "text": "hierarchia: three hierarchies, nine choirs, ranked by reception of the light"
              },
              {
                "id": "R5",
                "text": "angelus custos: one guardian per wayfarer, from birth, sententia certa"
              },
              {
                "id": "R6",
                "text": "gubernatio: the plan immediate, the execution through ministers who really cause"
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
              "all_correct": "Six images, one column of the Creed: the bronzeless form that cannot die, the stocked and unforgetting mind, the choice that never came up for review, the court receiving one light by rank, the escort hired at birth and never paid, and the government that gives its causality away. The invisible creation, owned entire.",
              "partial_correct": "Walk the module in order: what an angel is, how he knows, how some fell, how the court stands and walks with us, how the King governs through all of it. Each image was built to carry exactly one doctrine."
            }
          },
        },
        {
          id: `t6-l6-q2`,
          type: "mcq",
          stem: `The spine, in one sentence. Which holds the whole module?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Created spirits, some fallen forever, stand above bodies; through them and every cause God executes His immediate plan.",
                "feedback": "Respondeo: the whole column in one breath: subsisting forms above the ladder's visible rungs, the fall that fixed itself, the choirs receiving and handing down, the guardians at the floor of the court, and the government running through every hand while the design skips none. The philosophy carried all of it: form, act, causality, will. The tools were for this."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The universe is administered by spirits, God presiding over their decisions from above.",
                "feedback": "A senate of spirits with a ceremonial president: the module said nearly the opposite. The design admits no contributors, being immediate down to the least; only the execution is shared. Angels administer nothing God has not already wholly disposed; the presiding is total, and the ministry is its overflow, not its substitute."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Angels are the saints' celestial form, and their government is the Church praying in glory.",
                "feedback": "The condolence card again, promoted to a cosmology. Two creations, two natures: no soul graduates into an angel, and no angel retires into a soul. The communion of saints is gloriously real and it is a different doctrine; the gate conversation from last lesson depends on not blending them. Sofia has two friends upstairs precisely because the natures are two."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The angels are creation's poetry: the tradition's way of picturing providence in wings.",
                "feedback": "The demythologizing spine, and the module spent six lessons dismantling it: a defined creation (DS 800), a graded certainty about guardians, a metaphysics of subsisting form precise enough to entail their incorruptibility, and a 1950 encyclical listing the personhood-doubt among errors (DS 3891). Poetry does not get anathemas attached. Someone is there."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t6-l6-q3`,
          type: "mcq",
          stem: `The reception register's last audit. Four claims from the module; the Church has solemnly DEFINED exactly one of them. Which?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Each angel is his own species, matter being the only principle of counting within a kind.",
                "feedback": "The house line, held with the 24 Theses at full strength, and precisely NOT a definition: the Franciscan school teaches otherwise in peace. Knowing the difference between the school's certainty and the Church's definition is not a technicality; it is the honesty that makes the wall trustworthy. Thomism argued at strength, never sold at a rank it does not hold."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The nine choirs stand in three hierarchies, Seraphim first and Angels ninth.",
                "feedback": "Received architecture, venerable and liturgical, resting on Dionysius, Gregory, and Paul's lists, with the tradition itself keeping two arrangements of the middle orders on file. A structure the Church teaches and prays is not thereby a structure the Church has defined. Hold it with reverence at its own rank: firm tradition, open details."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Every human being receives a guardian angel at birth.",
                "feedback": "Certain teaching, wrongly promoted one rank: sententia certa for the faithful, the common doctrine following Thomas for every soul from birth, a feast in the calendar, and not one conciliar definition anywhere in the file. You weighed this precisely two lessons ago; the recap is checking whether the scales survived the fondness. Held firmly, weighed exactly: both verbs, always."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Both creations from nothing at the beginning of time; the devil created good, becoming evil through himself.",
                "feedback": "Respondeo: Firmiter, Lateran IV, 1215, DS 800, renewed by Vatican I: the one clause in the lesson wearing an anathema. The existence and creaturehood of the spirits, both creations from nothing, the devil's created goodness and self-made ruin: defined. Around that wall, the certain teaching, the school doctrines, and the received architecture each stand at their own rank, which the course will never let you confuse."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t6-l6-q4`,
          type: "true_false_with_reason",
          stem: `Judge the sentence: "Your guardian angel sees the face of God at this moment, while he keeps watch over you."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: angels share God's omnipresence, so heaven and your hallway are one to him.",
                "feedback": "Right verdict, borrowed attribute. Omnipresence belongs to the One whose causing reaches all being; an angel is somewhere by his operation, not everywhere by his essence. The sentence survives without the loan: his watch does not require ubiquity, only a knowledge no distance embarrasses and a mission no vision interrupts."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: the vision is never interrupted; the mission never requires leaving it.",
                "feedback": "Respondeo: Our Lord's own argument for the dignity of the little ones: their angels in heaven ALWAYS see the face of my Father (Matthew 18:10). Thomas keeps both clauses without strain: even when the angel is with you, he does not forsake the vision, for he knows what happens to you in the Word he beholds, and no local errand costs him the Face (q.113 a.6 ad 3). The court's floor and the nursery floor are one duty. TRUE, on the authority of the sentence's original Speaker."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: ministering spirits serve their tour on the roads first, and see the Face after.",
                "feedback": "The rotation theory: vision as retirement package. It reads the economy like a career and loses the verse's present tense: their angels ALWAYS see. Mission does not defer vision; it flows from it, the way the second hierarchy's rule flows from the first's nearness. Nobody in that court is working toward the view. They work from it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: only the first hierarchy beholds the essence; the last choir serves on reports.",
                "feedback": "This converts a hierarchy of reception into a velvet rope, and the rope is not in the doctrine. Every blessed spirit of every choir sees the essence of God; the hierarchies grade HOW the light is received and handed on, not WHETHER the Face is seen. The least angel in the ninth choir is a comprehensor, seeing what Moses begged for. Rank orders the ministry, never the admission."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t6-l6-q5`,
          type: "mcq",
          stem: `Every module ends by naming what cannot be surrendered. Two clauses from this one are non-negotiable. Which pair?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That the angels number in the millions, and that Michael commands the host.",
                "feedback": "Both honorable furniture, neither load-bearing. The multitude is argued fitting, not counted; Michael's captaincy is Scripture's image and the tradition's devotion, not a definition. Surrender either tomorrow and the Creed's inventory stands untouched. The wall's stones are elsewhere: in what the definitions actually say."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That guardianship begins at birth rather than baptism, and that each angel is a species.",
                "feedback": "The two claims the module most carefully REFUSED to promote: Thomas's birth-count held 'with reason' against a recorded opinion, and the species doctrine held as the school's at full strength against the Franciscans. Precision about ranks was half this module's work. The unsurrenderable pair sits a rank higher, where the anathemas are."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That the invisible creation is real and personal, and that its government runs through causes that really cause.",
                "feedback": "Respondeo: the pair the whole wing leans on. Real and personal: defined creation, DS 800, with the 1950 fence against dissolving persons into poetry, DS 3891. Really causing: the dignity of causality, against the deist's absent King and the occasionalist's stage-set world alike; deny the chisel and you deny the Sculptor's largesse. Give up the first and the Creed loses a column; give up the second and providence becomes either retirement or puppetry. Everything else in the module can be weighed; these two are the scale."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That the choirs are exactly nine, and that no angel ever acts outside his rank.",
                "feedback": "The architecture is received and beloved, and the tradition itself keeps flexible joints in it: two placements of the middle orders on file, inferior choirs sharing the offices of superiors, Michael the archangel called prince. A structure with licensed variants is not the unsurrenderable core. What cannot move is that the court exists and the King governs through it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t6-l6-q6`,
          type: "mcq",
          stem: `The module leaves one enormous fact standing in plain sight. The faithful angels HAVE what all this government exists to deliver: they see the face of God. Which means the course has been describing, for six lessons, creatures who already possess something it has never yet defined. What must the next module do?`,
          latin_tag: `de angelis`,
          doctrine_line: `The invisible creation confessed whole: subsisting forms, given knowledge, one irrevocable choice, nine choirs, a guardian per wayfarer, and a government that shares its causality; defined where defined, weighed where weighed, and all of it ordered to the vision the next module opens.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Ask what beatitude IS: the last end itself, which the angels see and we still walk toward.",
                "feedback": "Respondeo: the course's own logic forces the question. The guardians walk beside wayfarers; a wayfarer is defined by where the way goes; and the module kept saying the destination's name without opening it: the vision, the Face, the beatitude the devil grasped at and the faithful received. What IS the last end of the rational creature? The coffee cup taught you that acts have ends; now the question is asked of your whole existence. The return begins."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Complete the inventory: the animals, plants, and elements each deserve their module.",
                "feedback": "The visible kingdom got its census in Creation, rung by rung, and the philosophy of nature holds the deeds. The course is not a catalog aiming at completeness; it is a road aiming at an end. Both creations are now on the map. What the map lacks is not another region. It is the destination's own name, opened."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Turn to the demons at length: their ranks, tactics, and the arts of countering them.",
                "feedback": "The tradition keeps that knowledge deliberately lean, and the module already gave you the load-bearing parts: real, defeated, on a leash, unable to force consent. A course that lingered there would be doing the enemy's marketing. The Commentator's counsel is the Church's: know the doctrine, use the water, and study the King rather than the traitor."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Descend to man directly: after spirits, the embodied soul is the next item down the ladder.",
                "feedback": "The ladder was walked in Creation and the embodied knower had his whole act in Part I: fern, fox, philosopher. What remains is not another creature but the creature's POINT: the end that makes wayfarers of us and comprehensors of them. The course turns from the inventory to the destination, which is how a going-forth becomes a return."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    }
  ],
};
