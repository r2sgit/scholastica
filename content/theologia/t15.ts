import type { ModuleMeta } from '../types';

/** T15 · The Last Things: The Reditus. Wired into the live app (theology-wing completion pass: T6/T7/T15). Content is the authored t15-content.json, copied faithfully; no prose edits. */
export const t15: ModuleMeta = {
  id: 15,
  title: `The Last Things: The Reditus`,
  short: `De Novissimis`,
  label: `Theologia XV · The Last Things: The Reditus`,
  latin: `De Novissimis`,
  aim: `The whole two-part course was one journey out and back: everything comes forth from Ipsum Esse Subsistens, and everything is called home, and the name of the homecoming is the four last things, the novissima. Death is the separation of the subsistent soul from the body it was made for: real survival, real incompleteness, for the soul is a part and my soul is not I. Judgment is double: particular and immediate at death, general and public in the body at the end of history, with the Son of man on the bench. Purgatory is the antechamber of the saved, not a second chance: souls departed in the love of God are cleansed of what cannot enter, and the suffrages of the living, above all the Mass, avail them. Hell is eternal loss as the will's own fixity: the pain of loss is its essence, the door is locked by the inside, and the sentence is as everlasting as the life it refused. The resurrection is hylomorphism's last word: all rise with the bodies they now bear, the just clothed in the four dotes, and one of our race is already home whole. And the vision is what the apple pointed at from the first week: the divine essence seen intuitively and face to face, no creature mediating as the object seen, the created light of glory lifting the seer, immediately after purification, without interruption, forever. Faith and hope retire at the threshold; charity walks in. The course ends where the sacraments begin.`,
  lessons: [
    {
      id: `t15-l1`,
      num: `I`,
      title: `Death and the Separated Soul`,
      latin: `anima separata`,
      tag: `anima separata`,
      fin: {
        tag: `anima separata`,
        heading: `Half of you is not the whole of you.`,
        body: `The room is quiet, the scale finds nothing missing, and the philosophy holds: what left is a form that cannot rot and cannot rest, awake in a borrowed mode, a widow among the angels. She has not ended and she is not finished; both clauses are doctrine. And she has not drifted into a waiting fog, either. The definition with the timestamp says NOW: whatever she is owed, she is owed immediately. Which means something happened in that quiet room besides a parting. Every deliberate act she ever owned, every yes, every no, every omission that had her name on it, arrived with her at a bench. The next lesson opens the courtroom.`,
      },
      questions: [
        {
          id: `t15-l1-q1`,
          type: "mcq",
          stem: `A room gone quiet. The body on the bed weighs what it weighed an hour ago; the scale can find nothing missing, and everything is. The philosophy course stood at a bedside like this once and named the absence. What has left?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing has left: a process stopped, as a candle flame stops when the wax is spent.",
                "feedback": "The candle comparison proves too much and was answered two courses ago. A flame is an activity of the wax; thinking is not an activity of any organ, which is why the sick tongue and the tinted vase stood guard over the inference: the intellect that knows all bodies cannot be the act of one. What stopped is the body's share. What did the knowing does not stop with it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The substantial form of the body, the soul, which subsists and therefore survives the parting.",
                "feedback": "Respondeo: the first principle of life has left the matter it informed, and because its highest operation never worked through an organ, it does not die with the organs. The course earned this at the bedside called What the Corpse Is Missing: no ghost, no machine, and no annihilation either. A form made for a body now exists without one, which is survival, and survival with an asterisk the whole module will spend explaining."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The person entire, a spiritual being now released from the vehicle it was driving.",
                "feedback": "The sailor has left the ship: Plato's picture, and the tradition has refused it at every port. The soul is not a complete person using a body; it is the form OF the body, and the man was the composite of both. Release-language flatters death into a promotion. The Church buries her dead with more honesty than that, and Lesson 5 will show what the honesty is waiting for."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The life-energy, returning to the whole from which every living thing borrows.",
                "feedback": "Borrowed being was real doctrine; a common pool of it is not. Esse is given to each thing as its own act, not ladled from a tank that reabsorbs the used portions. A soul is not energy, and its survival is not recycling: this soul, hers, subsists, individual and intact. The pantheist comfort dissolves the very person it means to console."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t15-l1-q2`,
          type: "mcq",
          stem: `So the soul survives. Name the state precisely: a form whose whole nature is to inform a body now has no body to inform. What is that?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A graduation: the soul becomes what an angel is, spirit at last unencumbered.",
                "feedback": "Promotion to a different species is not survival; it is replacement. An angel is a subsistent form whose nature never included matter; a human soul is a subsistent form whose nature always did. Death does not edit natures. She has not become an angel, and the seraphim are not alumni of anything; the confusion demotes both."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A sleep: the soul persists but unconscious, waiting for the last day to wake it.",
                "feedback": "Soul-sleep has worn many nightcaps, and the Church has always taken them off. The separated soul knows and wills; the Church prays TO her saints and FOR her dead, which would be talking to the unconscious twice over. And a pope has defined the waking with a timestamp, as Lesson 6 will read: the purified see God now, before the bodies rise. Nobody in the story is asleep."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A mercy of ending: the soul, being the body's form, ceases when the body does.",
                "feedback": "Stated seriously, and condemned seriously: the Fifth Lateran Council defined against the mortal-soul thesis in 1513 (DS 1440), and the philosophy had already done the work in Module 9. A form that operates without an organ cannot perish with the organs. The premise is right, the inference backwards: BECAUSE it is the body's form, its persistence is strange; because it subsists, its persistence is certain."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Survival into privation: real persistence, really incomplete, a form awaiting its matter.",
                "feedback": "Respondeo: survival into privation, not promotion. The soul persists because it subsists; the state is strange because subsisting was never the whole of its job. It is not a prisoner freed nor a tenant evicted but a form widowed, and the widowhood is doctrine: something in the story is owed a body. Hold that incompleteness; it is the hinge of Lesson 5, and the reason this course does not end at the grave."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t15-l1-q3`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: once the body dies, the man himself continues entire, for the man was really his soul all along. Pick the judgment and the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: the intellect is the man, and the intellect is seated in the soul alone.",
                "feedback": "The noblest part is not the whole, or the roof is the house. The man is the composite: this flesh, these hands, the one being whose soul and body shared a single act of existence. Aquinas says it with a bluntness commentators still flinch at: my soul is not I. The intellect survives; the man, strictly, awaits reassembly."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: what mattered of him persists; the body was the instrument, and instruments are not their owners.",
                "feedback": "The instrument-picture is the sailor's ship refitted, and it sinks the same way. The body is not the soul's tool but its partner in one substance: form and matter, one man. An instrument can be discarded without loss to the workman; a body cannot, which is why its loss is called death and not decluttering."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: the soul is a part of the man, not the whole; the person is the composite, now really broken.",
                "feedback": "Respondeo: the soul is a part, and a part is not the whole, however noble. Commenting on the resurrection chapter itself, Aquinas presses it to the coin: anima mea non est ego, my soul is not I; if only the soul were saved, I would not be (In 1 Cor 15, lect. 2). Grief at a graveside is therefore not weak faith; it is accurate metaphysics. Something that was one has really come apart, and heaven's answer to the coming-apart is not consolation but resurrection."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: nothing of him continues; the man ends, and only God's memory of him is safe.",
                "feedback": "Right judgment, ruinous reason. If the man survives only as a memory in God, then nobody is purified, nobody sees, nobody rises; the whole treatise ahead becomes poetry about a filing system. The soul really subsists, really knows, really receives its sentence. The composite is broken; the form is not. FALSE needs the part-whole reason, not the annihilation one."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t15-l1-q4`,
          type: "mcq",
          stem: `Why is there death at all? Creation's taxonomy is already in hand: malum culpae, the evil a will does; malum poenae, the evil suffered as penalty. File death correctly.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Under penalty: an inheritance of the fall, no part of the design it broke.",
                "feedback": "Respondeo: death is the wage of sin, filed exactly where Creation filed the sufferings of a fallen world: malum poenae, the evil of penalty. Man's nature, left to its elements, was always mortal as the animals are; but man was not left to his elements. Original justice held the composite in a gift above its parts, and the gift was forfeited in Adam: by sin death entered, as Trent confesses with Romans. So the deathbed is not the Designer's showroom. It is a battlefield after a defeat that has already been avenged, which is why the Church can stand at it in hope without once calling the enemy a friend."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Simple nature: composites decompose, and man is a composite; no further file is needed.",
                "feedback": "True of the matter, false of the man. Considered as a composite of elements he was always dissoluble; considered as constituted by God he stood in a preternatural gift that would have carried the body whole to glory without the tollbooth. Death is natural the way a limp is natural to a broken leg: intelligible from the parts, but not the condition the whole was made for. The half-truth flatters the undertaker into a philosopher."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "An appearance only: from eternity's side nothing real is lost, so nothing real occurs.",
                "feedback": "Tell it to the widow, and notice that the Lord did not: at Lazarus's tomb the eternal Word wept. Death is not a trick of perspective; it is the real dissolution of a real substance, which is why He treated it as an enemy and broke it from inside. A doctrine that cannot weep is not higher than grief; it is lower than the Gospel."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A fresh sentence each time: God weighs each life and decrees each death as a particular verdict.",
                "feedback": "One sentence was passed, in Eden, on the race; each death is the old inheritance arriving, not a new indictment drawn up per corpse. The difference matters pastorally and doctrinally: the child's death is not a private judgment on the child or the parents. Providence appoints the hour, but the mortality it works with is Adam's legacy, already answered in the second Adam."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t15-l1-q5`,
          type: "mcq",
          stem: `A soul without eyes, ears, or a brain to serve it: how does the separated soul know anything at all?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It does not: knowledge began in the senses, and the senses are in the ground.",
                "feedback": "The empiricist rule was true of the road: nothing in the intellect that was not first in the senses, WHILE the intellect works as a body's form. But the soul that subsists can receive in the manner of the subsistent, and God is not stumped by the funeral. The mode changes; the mind does not close. The inference from no-organs to no-knowledge is the materialism Module 9 already buried, now trying to climb in the coffin."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "By memory only: it replays the life it had, a library with no new acquisitions.",
                "feedback": "A warehouse is not a knower. The separated soul is not condemned to reruns; it knows itself directly, knows other souls, receives what God gives it to know. The picture of the dead as archived is sentiment wearing a lab coat. She is not a recording of herself; she is herself, awake in an unfamiliar mode."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In the angels' manner, by infused species: knowledge given to fit a form that stands alone.",
                "feedback": "Respondeo: the soul separated knows through species infused from above, the borrowed mode of its new neighbors, though it wears the borrowed coat imperfectly: what an angel knows by nature's endowment, the soul knows more dimly, being a form made for a body even when it lacks one (ST I q.89 a.1, by position). You met the mode at the threshold of the angels' module: the standing rock whose thoughts still succeed one another. She has stepped into that tense without acquiring that nature. It fits her like a guest room: real hospitality, not home."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It knows all things now, nature's whole span, the veil of the body finally out of the way.",
                "feedback": "Over-promotion again, the Platonic reflex that keeps mistaking the body for the problem. The body was never the veil; it was the workshop. Severed from it, the soul knows in a mode higher in kind and poorer in performance, like a violinist handed an organ mid-concert. Omniscience is not standard issue in the guest room; even the angels know as creatures, each by its measure."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t15-l1-q6`,
          type: "mcq",
          stem: `The Church at a funeral does two things at once: she weeps, with candles lit and psalms of loss, and she hopes, with white vestments in her wardrobe and Easter in her prayers. Is that a contradiction or a precision?`,
          latin_tag: `anima separata`,
          doctrine_line: `Death is the separation of the subsistent soul from the body it was made for: real survival, real incompleteness. The man is not his soul alone; the corpse is not rubbish; the story is not over.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A pastoral contradiction, kept because mourners need both moods more than they need consistency.",
                "feedback": "The Church is not managing moods; she is stating anthropology. If the liturgy were therapy it would pick a lane. It weeps AND hopes because both are true of the same event, and truth is the only consolation that keeps. Give the ritual credit for meaning what it does."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A precision: real loss, so grief is honest; real survival and a promised rising, so hope is too.",
                "feedback": "Respondeo: the double grammar of the funeral is the doctrine of this lesson sung. Real loss: the man, the whole man, is not here, and the tears are metaphysically exact. Real continuance: the form subsists, judged and held; and real promise: the body in the casket is not rubbish but a relic in waiting, incensed like the altar because it will stand again. Only the full anthropology can afford both candles and Alleluias. Every heresy in this lesson economizes on one of them."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A ceremony for the living: the dead are past all of it, so the rites console the pews.",
                "feedback": "The memorialist reading, and it empties half the missal. The Church prays FOR the dead, not merely about them: an act useless if they are past helping and impertinent if they are past need. The next two lessons put teeth in that FOR. A funeral that only serves the pews is a wake; the Requiem is a work."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A vestige: older ages feared death, and the rites fossilize the fear the faith has outgrown.",
                "feedback": "The faith has not outgrown death; it has defeated it, which is a different relationship to the enemy. You do not fossilize a fear by lighting candles around it; you face it. The rites are not a museum of dread but a liturgy of accurate emotions: grief, reverence, hope, each with its object. Progress that cannot mourn has not transcended the Middle Ages; it has just lost the address of the grave."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `t15-l2`,
      num: `II`,
      title: `Judgment`,
      latin: `iudicium`,
      tag: `iudicium`,
      fin: {
        tag: `iudicium`,
        heading: `The bench is friendly, to friends.`,
        body: `The courtroom, it turns out, is not the last room. Many leave it acquitted and unready: friends of the Judge with dust still on them, forgiven men whose windows are swept but whose glass is not. For these the sentence is neither the throne room nor the pit but a mercy the definitions call cleansing, and the family can still do something about it, which no other doctrine in this module lets them say. The antechamber is next, and it is the most consoling room in the treatise, provided nobody mistakes it for a second chance.`,
      },
      questions: [
        {
          id: `t15-l2-q1`,
          type: "mcq",
          stem: `Scripture gives the schedule in one clause: it is appointed unto men once to die, and after this the judgment (Hebrews 9:27). How soon is after?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At the end of history, when all the evidence of every life is finally in.",
                "feedback": "That describes the second judgment, not the first, and a soul cannot wait in a queue for centuries with no standing. The definition Lesson 6 will read says the purified see God mox, immediately, and the lost descend mox as well: an immediacy on both sides that presupposes a sentence already passed. The evidence-gathering intuition is sound, and it is exactly why there are two judgments rather than one late one."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "After as many lives as the soul needs: the wheel turns until the lesson is learned.",
                "feedback": "Reincarnation founders on the adverb: ONCE to die, semel, and after THIS the judgment. One life, one death, one accounting; the soul is the form of one body, not a commuter between fleets of them. The wheel is also bad news wearing a serene face: a mercy that never lets you arrive is a sentence that never ends. The Gospel's schedule is severer and kinder at once."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Immediately: the particular judgment, at death, sentence passed and executed at once.",
                "feedback": "Respondeo: iudicium particulare, the particular judgment: the soul stands before its Judge the hour it leaves the body, and the sentence does not sit in an outbox. Heaven, purification, or loss begins mox, straightaway, as the definition with the timestamp requires. No wandering, no fog, no second circuit. The dramatic unity of a life is respected: the curtain and the verdict are the same scene."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Never, in the courtroom sense: the soul simply gravitates to the state its choices formed.",
                "feedback": "Half the anatomy, dressed as the whole. The will's formed state IS the evidence, and in that sense every soul carries its verdict in its own shape; the tradition loses nothing of that. But the shape is read, and the Reader is not a metaphor: judgment is a personal act of the living God, not a moral physics that spares Him the interview. Gravity does not forgive, and it was never wounded for anyone; the Judge was."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t15-l2-q2`,
          type: "distinction_application",
          stem: `Two judgments, then: the particular, at death, on the soul's state, private and immediate; the general, at history's end, on the whole man before the whole race, in the body. Now the case. A novelist dies; a century later his book is still pulling readers toward God or away from Him. Which judgment takes the full account of that book, and why must it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The particular: the book was his act, and his acts were all judged at his death.",
                "feedback": "His act was judged, including what he knowingly set rolling: the particular judgment misses nothing about HIM as he stood that hour. But a life's wake keeps spreading after the hull has docked. The harvest of his sowing is not all in at his death, and justice public and complete must wait for the field. That remainder is precisely the second judgment's brief."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The general: a life's whole harvest is in only when history is; the man judged complete, publicly, in the body.",
                "feedback": "Respondeo: the general judgment, iudicium universale, exists because lives outlive themselves. The novelist's century of readers, the mother's great-grandchildren, the scandal's third generation: only when time closes is any man's full story tellable, and then it is told before everyone, with the body that did the writing raised to hear it. Nothing of the particular verdict is reversed; something of it is completed and published. Providence, long accused in the dark, is vindicated in the light: that is why the last day is called the day of wrath and also the day the just lift up their heads."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither: the readers' acts are the readers' own, and their choices break the chain to him.",
                "feedback": "Their acts are theirs; his sowing is his; both books balance. The ethics course taught the category: what a man sets in motion knowingly is his in its cause, voluntary in causa, even when other wills carry it. The arsonist does not escape because the wind cooperated. Break the chain entirely and no teacher, no scandal-giver, no evangelist ever answers for a single echo, which even common sense declines to believe."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The general, but only as ceremony: a public reading of verdicts already final, for the pageantry of justice.",
                "feedback": "Nothing is reversed, so the cynic calls it theater; but publication is not pageantry when the accused was history itself. The general judgment adds real objects: the full effects now complete, the body now raised to share the sentence it earned or served, and the public vindication of the ways of God before every rational creature. A verdict read to the whole court, with the whole evidence, in the presence of the whole defendant: call that ceremony and you have described what ceremony is for."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t15-l2-q3`,
          type: "mcq",
          stem: `Who sits on the bench? Scripture's answer has a strange emphasis: the Father hath given him power to do judgment, BECAUSE he is the Son of man (John 5:27). Why judgment through the humanity?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because only the divine nature can judge, the humanity that day is set aside like a robe.",
                "feedback": "Natures are not robes, as an entire module on one Person in two natures took pains to prove. The clause says the opposite of the setting-aside: judiciary power is given BECAUSE he is the Son of man. The humanity is not suspended at the bench; it is the reason the bench is his. Judgment belongs to the God-man as man, by merit and by fittingness: the same respect rule, one last time."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the saints will conduct the judging in his name, and they are human.",
                "feedback": "The apostles' thrones are real but derivative: the saints share the judgment as assessors, associates in the sentence by participation, not substitutes on the bench (ST III q.59 a.6, by position). You shall judge the twelve tribes is a promotion of the Body, not an abdication of the Head. The BECAUSE in John's clause attaches to the Son of man himself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Fitting that men be judged by a man: the one judged by us, for us, reads the sentence.",
                "feedback": "Respondeo: judiciary power belongs to Christ as man, by merit of the Passion and by fittingness of the office: the race is judged by its own Head, in the nature that stood in Pilate's court and took the race's sentence (ST III q.59 a.2, by position). No defendant will face a stranger. The eyes on the bench have wept at a tomb and the hands hold their own evidence. Mercy and justice are not rival departments up there; they are one Person's two hands, and both were pierced."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nobody sits: judgment is the built-in unfolding of consequences, personified for the catechism's convenience.",
                "feedback": "The mechanism-picture again, promoted from Lesson 2's first question to a cosmology. A universe that merely processes outcomes has no bench, no BECAUSE, and no wounds; it also has no acquittals, since machinery cannot show mercy any more than it can lose its temper. The Creed says he will come to judge, a verb with a subject. The catechism is not personifying a process; the process-talk is depersonalizing a Person."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t15-l2-q4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: the dead wait until the general judgment to learn where they stand. Pick the judgment and the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: the books are opened on the last day, and a sentence needs its books.",
                "feedback": "The books of the Apocalypse are opened for the public reading, not for the Judge's information; omniscience does not do discovery. Taking the imagery as a filing requirement makes God wait on his own paperwork. The particular judgment needs no dossier delivered: the soul arrives legible, and the Reader wrote the alphabet."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: hope requires suspense, and a sentence known would end the soul's hoping.",
                "feedback": "Backwards in a revealing way: hope is the wayfarer's virtue, and it retires at arrival precisely because the suspense ends, as Lesson 6's definition says in so many words. The dead in glory do not hope; they have. The dead in purification do not wonder; they know, and their certainty of arrival is called by the tradition their sweetest pain. Suspense is our climate, not heaven's."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: judgment-talk is symbol, and symbols have no schedule to wait for.",
                "feedback": "Right verdict, counterfeit coin. The judgment is not a picture-word for moral seriousness, whatever the Modernist program said in the propositions condemned in 1907: it is an event with a subject, an object, and a timestamp. Dissolve the courtroom into symbol and the FALSE follows trivially, along with the faith. The dead do not wait, not because there is nothing to wait for, but because the sentence has already landed."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: the particular sentence is immediate and executed; the last day adds publicity and the body, not information.",
                "feedback": "Respondeo: nobody in eternity is refreshing an inbox. The soul knows its state the hour it stands: heaven, purification, or loss, begun mox. What the general judgment adds is real but not epistemic relief for the dead: the whole story complete, the whole race assembled, the body raised into the verdict. Note the one asymmetry worth engraving: the DEAD know where they stand; the LIVING do not enjoy that certainty about themselves, as the grace module insisted. Presumption borrows the dead's knowledge without paying death for it."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t15-l2-q5`,
          type: "mcq",
          stem: `What exactly is in the file? The ethics course sorted a man's doings into the deliberate and the merely biological. Judgment reads which, and how far?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Outcomes: what a life in fact caused, however it aimed; results are the only public record.",
                "feedback": "The consequentialist's ledger, and no court in heaven or Naples keeps it. A man is judged by what he willed, knowingly and freely: the drowsy elbow and the deliberate shove part company forever at this bench. Outcomes enter as the acts' completions and effects, never as substitutes for the aiming. Judgment reads owners, not weather."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Everything human that had an owner: every deliberate act, word, and omission, weighed as willed.",
                "feedback": "Respondeo: the audit of the actus humanus, final edition. The knocked cup with an owner behind it, the word chosen, the silence chosen when a word was owed: Florence's own formula for the examined life is sins of commission AND omission, and the ethics course taught you which motions of a man have his name on them. Temperament, reflex, the acts of the man that never passed through reason: these enter as circumstances, not charges. The court is exact: nothing owned escapes, nothing unowned is billed."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The heart's beliefs: acts are symptoms, and the court reads the creed beneath them.",
                "feedback": "Faith without works appears in Scripture with an adjective attached, and the adjective is dead. The court reads acts because acts are where belief becomes biography: the creed professed is itself an act, and the creed betrayed by a life is evidence against the profession. A judgment of beliefs-only would acquit every eloquent coward in history. The Judge's own parable bills the omitted cup of water."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The final state only: the last hour's orientation absorbs the biography that led to it.",
                "feedback": "The final state settles the DESTINATION; the biography still prices the mansion and the debt. Dying in grace decides that a man arrives; what he did with his talents decides what he arrives as, and dying impenitent likewise carries every unrepented weight into the loss. The deathbed thief was promised paradise, not a career retrospective; but degrees of glory and of pain are doctrine, and degrees are read from lives, not last minutes."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t15-l2-q6`,
          type: "mcq",
          stem: `Last question before the courtroom empties: with what face should a Christian in grace think about this bench?`,
          latin_tag: `iudicium`,
          doctrine_line: `Two judgments, one Judge: the particular at death, immediate and executed; the general at history's end, public, complete, and in the body. Every deliberate act and omission is in the file, and the one reading it out was wounded for the accused.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Confidence without presumption: the Judge is the Redeemer, and terror belongs to impenitence, not to friendship.",
                "feedback": "Respondeo: the bench is occupied by the defense counsel who already served the sentence. For the soul in grace, judgment is the formality of a friendship: dreadful in majesty, yes, but the majesty bled for the defendant, and charity casts out the servile fear while keeping the filial. Presumption forgets the friendship can be forfeited; despair forgets Who is on the bench; hope walks between them with its eyes open. The Dies Irae gets the balance perfect, and ends asking the Judge for rest."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Steady terror: dread is the safest posture, and the saints who feared most sinned least.",
                "feedback": "Scrupulosity canonizes anxiety and calls the disease a discipline. The saints feared sin, not the Judge's character; servile fear is the porch of wisdom, not its living room. A Christian commanded to call the Judge Father is not permitted to treat him as an auditor with a grudge. Fear that never matures into filial love is not safety; it is a misreading of the bench."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Settled calm: mercy wins in the end, so the verdict is a formality for everyone.",
                "feedback": "Mercy offered to all is not sentence pre-signed for all: the difference is the entire drama of freedom, and a later lesson reads the anathema that guards it. Universal-acquittal calm is presumption with a seraphic face, and it falsifies the very mercy it flatters: a pardon nobody can refuse is not a gift but a conscription. The Judge desires all to be saved; the desire is antecedent, and wills consent."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Practiced indifference: the verdict is unknowable from here, so the healthy mind changes the subject.",
                "feedback": "The shrug is not neutrality; it is a wager placed while pretending not to play. That my final state is not KNOWN to me does not make it not MINE to shape: the whole moral life is the shaping, and grace is offered for exactly that work. Indifference to the one question whose answer is eternal is not health but anesthesia. In all thy works remember thy last end, says the old book, and thou shalt never sin."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t15-l3`,
      num: `III`,
      title: `Purgatory`,
      latin: `purgatorium`,
      tag: `purgatorium`,
      fin: {
        tag: `purgatorium`,
        heading: `The antechamber is not a courtroom.`,
        body: `So the glass gets swept, the Masses get said, and the temper's grain comes out of the wood at last, painfully, the way splinters do. Everyone in that room is safe; everyone in that room is longing; and the two facts together make it the strangest room in creation: pain with no fear in it, fire with home on the other side. But the treatise owes you the other room now, the one this lesson kept refusing to be. There is a state with no antechamber, no suffrages, no morning. The door, the corrected metaphor, and the exact anatomy of the loss: next.`,
      },
      questions: [
        {
          id: `t15-l3-q1`,
          type: "mcq",
          stem: `A woman dies in the friendship of God, penitent, at peace, and still herself: a temper half-tamed, a decades-old wound she nursed a little too fondly, a penance begun and not finished. Nothing mortal; nothing fit for the Face either. What does the doctrine say happens?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Heaven at once: friendship with God is the only entrance requirement, and she has it.",
                "feedback": "Friendship decides the destination; it does not abolish the dressing room. Nothing defiled enters, says the Apocalypse, and the definition Lesson 6 reads is careful twice over: the purified see God, and those needing purification see him AFTER it. Waving her through unwashed is not generosity; it is inattention to what the Face is. The mercy is that the washing exists."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A softer sentence in hell's outer districts, for the borderline cases between loss and glory.",
                "feedback": "Purgatory is not hell's suburb; it is heaven's porch, and the difference is not real estate but essence. Hell's core is loss, fixed and forever; purgatory's core is love, secured and arriving. Every soul there is saved, certain of the Face, incapable now of losing it. To file her among the lost-but-gently is to miss the one fact that changes everything: she is HOME, in the sense that matters; she is not yet PRESENTABLE, in the sense that remains."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A merciful pause in which she may still decide against God, the last exit before the Face.",
                "feedback": "Nothing is decided in purgatory; someone is finished there. The will's option closed at death, as the next lesson will fix in doctrine: she chose in via, and the choice held. Purgatory perfects lovers; it does not audition them, and it has never lost a resident to the other exit, there being none. Calling it a second chance insults both the mercy and her: she needs no second chance, having used the first."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Temporal purification: cleansed after death, love secured, until nothing unfit for the vision remains.",
                "feedback": "Respondeo: purgatorium, the antechamber of the saved. Her friendship with God is beyond forfeiting now; what remains is the residue friendship itself wants gone: the temper's grain, the fond wound, the penance's unpaid balance. The pains are real and they are temporal, which is the tradition's exact word for pains that END: every soul there has one direction left. The council that defined it, next question, put the family to work in the same paragraph."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t15-l3-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>It has likewise defined, that, if those truly penitent have departed in the love of God, before they have made satisfaction by the worthy fruits of penance for sins of commission and omission, the souls of these are cleansed after death by purgatorial punishments; and so that they may be released from punishments of this kind, the suffrages of the living faithful are of advantage to them, namely, the sacrifices of Masses, prayers, and almsgiving, and other works of piety, which are customarily performed by the faithful for other faithful according to the institutions of the Church.</p><div class="cr-cite">Council of Florence, Decree for the Greeks, Laetentur coeli (1439) &middot; DS 1304</div></div>Read the definition's anatomy. What does it make purgatory?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A mercy for the already-saved, with a door left open for the living to help.",
                "feedback": "Respondeo: read the entrance requirements the council wrote: truly penitent, departed in the LOVE of God. Nobody enters purgatory except a friend of God; the punishments cleanse, they do not decide. And the second clause is the tenderest piece of dogma in the book: the living are not spectators. Masses first, the council says, then prayers, alms, the customary works: the family remains on the roster, the Body's circulation running straight through the grave. A definition that assigns the mourners homework has understood mourning better than any therapy since."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A judicial appeal: the soul, aided by the living, argues its case toward a better verdict.",
                "feedback": "No verdict is in play; the verdict came at the particular judgment and it was ACQUITTED, DELAYED. Suffrages do not lobby the Judge into changing his mind; they pay down, within the communion of saints, a debt already acknowledged by a friend of the court. The soul argues nothing and fears nothing; it is being finished, not retried. Purgatory has no docket, only a threshold."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A concession to human weakness in the definition itself: pious custom ratified, not doctrine defined.",
                "feedback": "The council's own verb refuses you: definivit, it has DEFINED, the same verb that carried the Filioque paragraph above it. Florence 1439, then Trent 1563 against the deniers, and the custom it ratifies is older than the objections by a millennium and a half: it is a holy and wholesome thought to pray for the dead, wrote the Maccabean author, before there was a Rome to blame. The doctrine is defined; only the imagery is left to theologians."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A stage of growth: the soul continues its moral progress after death until mature enough for God.",
                "feedback": "Growth-language smuggles the moral life past the checkpoint death closed. The soul in purgatory does not become better in the meriting sense; the time for merit ended with the road, as the grace module fixed. It becomes CLEAN: satisfaction completed, temporal debt discharged, the tarnish burned off a coin whose value was already struck. Progress belongs to wayfarers. Purification belongs to arrivers, and the difference is why there is no anxiety in that antechamber, only longing."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t15-l3-q3`,
          type: "mcq",
          stem: `A boy breaks a window and is forgiven by his father, fully, on the spot. He still spends Saturday sweeping the glass. The tradition thinks this ordinary scene carries the whole logic of purgatory. What is the doctrine underneath?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Forgiveness is conditional until the sweeping proves the sorrow was sincere.",
                "feedback": "The father forgave on the spot, and God does: absolution is not an escrow arrangement pending performance. The sweeping is not the proof of sorrow but its fruit and completion; sincerity was judged at the word, not audited at the broom. Make pardon conditional on the chores and you have rebuilt the anxious religion the Gospel interrupted."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Guilt and its temporal debt part company: the offense is pardoned, the disorder still asks repair.",
                "feedback": "Respondeo: the distinction doing the work is guilt versus temporal punishment: culpa forgiven, poena remaining. Sin is an offense AND a wreckage; pardon cancels the offense against the Father, and the wreckage still wants setting right, which is what satisfaction means, the word the Redemption module gave you. Penance does it on the road; purgatory finishes what the road left undone, which is why Florence's clause begins BEFORE THEY HAVE MADE SATISFACTION. The boy is not un-forgiven on Saturday. He is forgiven, sweeping: that conjunction is the whole doctrine."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Justice and mercy split the case: mercy waives what it can, justice bills the remainder.",
                "feedback": "Two departments again, and heaven has none. It is not that mercy pardons the guilt while a grumpier attribute invoices the debt: one love does both, because love wants BOTH the friendship restored and the beloved whole. The sweeping is not justice's surcharge on mercy's gift; it is what mercy looks like when it takes the wreckage seriously. A father who forgave and then hid the broom would love the boy less, not more."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The sweeping is pedagogy for this life only; nothing of the pattern survives death.",
                "feedback": "Then Florence defined a pedagogy and the Church has prayed for the dead against her own doctrine for two thousand years. The pattern survives death precisely because death does not convert unfinished business into finished business: what the boy did not sweep by nightfall waits for him in the morning. The mercy is that morning exists, and that his brothers can pick up brooms too, as the council's suffrage clause just said."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t15-l3-q4`,
          type: "dialogue_branch",
          stem: `The burial is over. By the cars, your aunt, dry-eyed and firm, takes your arm: 'She is at peace now, that is certain. Wherever she is, she is done with all this.' She means it kindly. She is also watching your face.`,
          payload: {
            "commentatorLine": "The Commentator has stood in many gravel lots. He has heard certainty sell consolation it could not deliver, and silence bless errors it was too polite to name. The sentence that helps is the one that is true and arrives with its sleeves rolled up.",
            "branches": [
              {
                "text": "\"Certain, yes. She was the best of us; she is in heaven this minute, watching.\"",
                "feedback": "Kindly meant, and it quietly closes the one door you could still hold open for her. Canonization is the Church's certainty, earned by process and miracle; a nephew's is love talking, which is honorable and not evidence. And if she is in fact still being made ready, your confident eulogy has just retired the Masses, prayers, and alms that Florence says would reach her. Presumption is not a compliment to the dead. It is a withdrawal of services."
              },
              {
                "text": "\"She died with God as her friend, so she is safe forever. And if she is still being made ready to see Him, we can help her: I have asked Father to say a Mass.\"",
                "verdict": "correct",
                "feedback": "Respondeo: everything true, nothing withheld. Safety affirmed where the faith affirms it, certainty declined where the Church declines it, and the gap between them filled not with anxiety but with WORK: the Mass first, the council's own ordering. Your aunt has been handed the one consolation that outlasts the casseroles: something to DO. The dead do not need our verdicts; they can use our suffrages. That sentence buries better than granite."
              },
              {
                "text": "\"Nobody can say anything about the dead. Silence is the only honest prayer.\"",
                "feedback": "The Church has said things: 1439, at a council, with definivit in the sentence; 1563, again, against the deniers. Agnostic reverence sounds humble and functions as despair with good manners: it cancels the suffrages as surely as presumption did, but with a sigh instead of a smile. There are certainties on the books precisely so that grief has somewhere to stand. Your aunt asked for bread; hand her doctrine, which is what bread is made of here."
              },
              {
                "text": "\"Purgatory was a medieval invention; she is simply with the Lord, and that is the end of it.\"",
                "feedback": "The invention charge runs backwards: prayer for the dead is in the Maccabean scroll, on the catacomb walls, and in every ancient liturgy East and West; the sixteenth-century novelty was the STOPPING. Trent answered the deniers in 1563: there is a purgatory, and the souls detained there are helped by the suffrages of the faithful, principally by the sacrifice of the altar (Sess. 25, DS 1820). Simply-with-the-Lord may well be true of her; the point is that you do not know it, and while you do not, the Church gives you better employment than asserting it."
              }
            ]
          },
        },
        {
          id: `t15-l3-q5`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: purgatory offers those who died refusing God a final chance to change their answer. Pick the judgment and the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: a mercy that stops at death would be smaller than God's heart.",
                "feedback": "Mercy's size was never the question; the will's tense is. God's mercy stands at the door and knocks for a lifetime; what it does not do is knock the door down, death having sealed the answer the man spent his life writing. A post-mortem revision would mean no answer is ever final, which unravels freedom itself: the next lesson reads the anathema that guards this. Purgatory is not mercy's overtime. It is mercy's finishing school, for those who said yes."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: Florence says the punishments end, and an ending implies the outcome was open.",
                "feedback": "The punishments end IN HEAVEN, for souls whose outcome was never open in that direction: read the entrance clause again, departed in the love of God. Temporal means the pains conclude; it does not mean the destination was pending. Every ending in purgatory is the same ending. The only suspense in that room belongs to the living, who do not know who is in it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: entry requires dying in grace; the refusers' option closed with the road.",
                "feedback": "Respondeo: purgatory perfects lovers; it converts nobody, there being nobody there to convert. The gate's inscription is Florence's own: truly penitent, departed in the love of God. The man who died refusing carried his answer past the last revision date, as the next lesson will fix with doctrine and a corrected metaphor. This is why purgatory consoles instead of tantalizing: it holds no almosts, no appeals, no might-have-beens. Only friends, being finished."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: the pains there are self-chosen therapy, and therapy cannot alter a destination.",
                "feedback": "Right verdict; the reason has swapped the tradition for a wellness brochure. The pains of purgatory are not a regimen the soul designs for its own growth; they are punishments, poenae, the definition's own blunt noun: penal, real, imposed by justice and embraced by love. Soften them into self-care and the suffrages stop making sense: nobody offers the Holy Sacrifice to speed along someone's journaling. The souls suffer, the pains satisfy, the Masses help: keep the nouns."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t15-l3-q6`,
          type: "mcq",
          stem: `The economy of help, then, in working order. Who can be helped by the living, who cannot, and what helps most?`,
          latin_tag: `purgatorium`,
          doctrine_line: `Purgatory is the mercy of the threshold: souls departed in the love of God, cleansed by temporal pains of what cannot enter, helped by the suffrages of the living, above all the Mass. Nothing is decided there; someone is finished there.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "All the dead alike can be helped; love does not check states before it sends.",
                "feedback": "Love sends; doctrine addresses the envelope. The blessed need nothing your Mass can add, though they receive its honor; the lost are past the reach of suffrage, the will being fixed, which is why the Church has never once prayed a soul out of hell and never claimed to. The holy souls alone are in the window: helpable, certain, grateful. Undirected sending is sentiment; the council gave you a postal system."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The holy souls only, and by the Mass above all: the same Sacrifice the altar always carried for them.",
                "feedback": "Respondeo: the window is purgatory, and the chief instrument was on the altar all along: the Eucharist module showed you the Mass offered for the living AND THE DEAD, the dead in Christ not yet fully purified, carried on the paten with the rest of the Body. Florence ranks the suffrages in that order: sacrifices of Masses, prayers, almsgiving, other works of piety; Trent adds PRINCIPALLY the acceptable sacrifice of the altar. And the traffic is not one-way, on the common teaching: the souls, certain of glory, can pray for their benefactors. The Church Militant, Suffering, and Triumphant are one Body with one circulation, and November is its feast of good bookkeeping."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Strictly their own past merits serve them now; the living can honor, not assist.",
                "feedback": "That would repeal the communion of saints one grave at a time. The Body's members share goods: that was the corporation's whole grammar, and death does not dissolve the incorporation. Florence's clause is not a metaphor: the suffrages ARE OF ADVANTAGE to them, prosunt, a verb with traction. The merits are Christ's, circulating; your Mass card is not a greeting but a transfusion."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The helps console the mourners; their effect on the dead is a reverent manner of speaking.",
                "feedback": "The memorialist reading, one lesson too late: Florence's definivit was not a manner of speaking, and the Requiem is not a support group with incense. If the suffrages only warmed the pews, the Church has been addressing empty air with her most solemn instrument for twenty centuries, which is a strange hobby for the pillar of truth. The dead are helped. That is the defined, load-bearing, homework-assigning fact."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `t15-l4`,
      num: `IV`,
      title: `Hell`,
      latin: `poena damni`,
      tag: `poena damni`,
      fin: {
        tag: `poena damni`,
        heading: `The lock was never on His side.`,
        body: `That is the whole dark room, lit exactly: no jailer, no quota, no expiry, no exits, and no soul in it that did not shape its own lock in full daylight. The doctrine is terrible and it is clean: nothing arbitrary, nothing gleeful, nothing that contradicts one syllable of the mercy that hung on a cross to empty the place of every willing rescue. But the treatise turns now, and for everyone at once. Whatever room a soul is in, one appointment remains on every calendar in creation: the bodies. The philosophy left a debt unpaid at the graveside two lessons ago, and heaven intends to pay it in flesh.`,
      },
      questions: [
        {
          id: `t15-l4-q1`,
          type: "mcq",
          stem: `The defined floor first, before any metaphors: who is in hell? The definition with the timestamp answers in one clause.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Those who die in actual mortal sin: the will's state at death, nothing else and nothing less.",
                "feedback": "Respondeo: the souls of those who die in actual mortal sin go down into hell immediately after death: Benedictus Deus, the same document that timestamped heaven (DS 1002). Note what the clause requires: mortal sin, the knowing and willing rupture the ethics course anatomized, standing unrepented at the last. Not weakness, not ignorance, not the wounds a man fought; a friendship refused and held refused. God condemns no one arbitrarily; the clause has no room for accident and no room for malice on the Judge's side. The file is the man's own final act."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Those decreed to loss before their acts, that the divine sovereignty be glorified in both directions.",
                "feedback": "Reprobation before foreseen demerits, stated at the strength Geneva stated it: a decree symmetrical with election, glory in the damning. The Church anathematized the symmetry: if anyone says it is not in man's power to make his ways evil, but that God works the evil works as he works the good, let him be anathema (Trent, Sess. 6, can. 6; and can. 17 against grace-for-the-elect-only). God predestines no one to hell; the asymmetry is the doctrine: election is his initiative, loss is ours. The house line on efficacy lives inside that fence, as the De Auxiliis module showed at full strength."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Those whose venial debts accumulated past a threshold no one is told in advance.",
                "feedback": "Venial sin does not amortize into mortal, any more than a thousand paper cuts become a beheading. The difference is kind, not quantity: mortal sin turns the will from the last end; venial stumbles on the road while keeping the destination. A threshold-model hell would damn by bookkeeping, and the Judge it implies is an auditor with a trap. The tradition's severity is elsewhere, and cleaner: one grave matter, full knowledge, full consent."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "All who die outside visible membership in the Church, the boundary settling the matter of itself.",
                "feedback": "The needle the Church module threaded, and the thread still holds at the last things: no salvation outside the Church, AND the soul joined to her by desire, votum, even unknowing, is not outside in the sentence's sense. Visible membership is the ordinary road, not a turnstile that damns the invincibly ignorant by geography. What damns is mortal sin unrepented: the definition's clause, not a map. Keep the dogma whole and the fence exactly where Rome built it."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t15-l4-q2`,
          type: "precision_check",
          stem: `A phrase every modern reader has met, offered as the mature view of the matter. Read it as the tradition would: does it need repair, and where?`,
          payload: {
            "statement": "The doors of hell are locked from the inside.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing to correct: the phrase is exact as it stands.",
                "feedback": "Almost, and the almost matters at this altitude. FROM the inside places the lock's operator indoors, which is the right side of the door; but it leaves the impression of a latch that could in principle still be worked, some eternal afternoon, if the resident changed his mind. The tradition's point is harder: the resident IS the lock now. Prepositions carry doctrine here, as the correction shows."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Repair at one word: locked BY the inside; the will itself has become the lock.",
                "feedback": "Respondeo: the fixity is not a fixture; it is the man. The separated soul chooses as the angels choose, entirely and once: the clenched instant you watched in the angels' module now in human tense, and Thomas argues the will of the separated soul is immutable in its last end (SCG IV, ch. 95, by position). No jailer holds the door and no door is held: the refusal has become the shape of the refuser. That is why the sentence is eternal without God adding a single day to it: eternity is the tense of a completed choice, not the length of a grudge."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Repair at the lock: there is no lock; mercy leaves the door ajar forever, and hell empties in the end.",
                "feedback": "The restoration of all things, apokatastasis, taught with a great teacher's fervor and condemned with the Church's flattest instrument: if anyone says the punishment of demons and impious men is temporary and will at length have an end, let him be anathema (Canons against Origen, 543, DS 411, from the standard record). A door ajar forever means no choice ever lands, which unmakes freedom while flattering it. The lock is real. The mercy was the lifetime spent on the other side of it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Repair at the noun: only demons have a hell; human refusers are extinguished, mercifully.",
                "feedback": "Conditional immortality, the nineteenth century's tidy exit, and the metaphysics was already closed against it: the subsistent soul cannot perish, as Lateran V defined against the mortalists (1513, DS 1440), and the anathema of 543 struck TEMPORARY punishment in every form, extinction included. Annihilation would also be a strange mercy: it grants the refuser the one thing no creature can coherently will, release from being itself. God does not un-create his images. He honors them, at last, terribly."
              }
            ],
            "correct_option_id": "b",
            "correction": "Locked BY the inside: the will itself is the lock. No repentance is refused in hell; none is offered, because none is asked; the asking died with the road. The door needs no bolt whose resident has become one."
          },
        },
        {
          id: `t15-l4-q3`,
          type: "mcq",
          stem: `Two pains, one taxonomy, defined in the stem before the question as the course's custom is. Poena damni, the pain of loss: the privation of the vision of God. Poena sensus, the pain of sense: real affliction from without, the tradition's fire. Which is the ESSENTIAL pain of hell, and why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The fire: loss is abstract, and only felt affliction can anchor an eternal sentence.",
                "feedback": "The popular imagination's ranking, and it inverts the treatise. Loss is abstract only to those who have not yet lost anything infinite. The beatitude module spent five lessons proving the vision is the single point of the human design; its privation is therefore not a missing amenity but the contradiction of the person at his root. The fire is affirmed, and the fire is the lesser word. Dante's deepest circle is ice for a reason a marketer would never guess."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Neither as stated: both are images for the discomfort of a conscience reviewing itself.",
                "feedback": "The symbol-move again, third appearance this module, condemned in the same 1907 sweep. A conscience reviewing itself is purgatory's climate at worst; hell's anatomy is severer than self-reproach and more objective than mood. The loss is a real privation of a real end; the sense-pain a real affliction, however analogically the fire must be read. Reduce both to psychology and the anathemas of two millennia were aimed at a feeling, which insults even the feeling."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The loss: made for the vision, the damned soul is deprived of it, and that privation is hell's core.",
                "feedback": "Respondeo: poena damni is the essence; the treatise on beatitude wrote this lesson in advance. Man's one end is the vision of Esse; to lose it is to fail as a made thing forever, with the failure fully known. The pain of sense is real and secondary, ministered through creatures to a will that preferred creatures. Note the two-punishments clause the tradition reads in Innocent III: the punishment of original sin is the LOSS of the vision of God; of actual sin, the TORMENTS of everlasting hell (DS 780, standard record): the Church herself ranks the pains by that grammar, loss first, as the last question of this lesson will need."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The loss, but painlessly: those who never wanted God cannot suffer his absence.",
                "feedback": "The comfortable modern reading: hell as a preference respected, the atheist's quiet room. It forgets the one fact the desire lessons nailed down: the want of God is not an opinion a man holds but a nature he has. The damned will hates what it cannot cease needing; the torsion between chosen refusal and built-in ordination is the worm that does not die. Nobody in hell is at peace with being there, and nobody would leave: both halves are the horror, and the second guards the first from sentimentality."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t15-l4-q4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: given enough eternity, the damned could still repent; the sentence just outlasts God's willingness to hear it. Pick the judgment and the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: freedom means perpetual revisability, or the choosing was never free.",
                "feedback": "A freedom that can never land is a freedom that never chooses: perpetual revisability makes every yes provisional and every love a lease. The angels' module showed the higher pattern: a will in the mode of the separated spirit chooses once, entirely, with everything in view that it cares to see. Death does not confiscate human freedom; it completes it. The revisability was the road's mercy, not freedom's definition."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: God desires all men to be saved, and a desire of God cannot stay unfulfilled.",
                "feedback": "The verse is Scripture and the inference is the trap; the divine-attributes module handed you the tool it takes: voluntas antecedens, God's antecedent will, desires every man saved considered absolutely; his consequent will orders what his justice permits, consents included. An antecedent desire fulfilled by force would trample the freedom it desired the salvation OF. The verse stands, the anathema of 543 stands, and the distinction carries both without a scratch."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: no one in hell ever really chose; sufficient ignorance excuses the whole population.",
                "feedback": "Right verdict, and a reason that would empty the room by emptying the species of agency. The mortal-sin anatomy requires knowledge and consent, and the Judge reads both without error: whoever lacked them is not in the clause. But to universalize the excuse is to say no human being ever knowingly refused God, which contradicts the Lord's own plain warnings and flattens every martyrdom of conscience into confusion. Some doors are shut in full daylight. The doctrine is terrible because the freedom is real."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: the will after death is fixed; eternity is the mode of a completed choice, not a clock running out.",
                "feedback": "Respondeo: the separated soul wills in the angelic tense: the standing rock, but chosen. Repentance is a wayfarer's act, and there are no wayfarers past the last milestone; Thomas grounds the immutability in the mode of the separated will itself (SCG IV, ch. 95, by position), not in any impatience of God, whose willingness to hear never had office hours. Mark the symmetry the Lord himself drew in one sentence: these shall go into everlasting punishment, but the just into life everlasting (Mt 25:46): one adjective, twice. Shorten the first everlasting and the second goes with it."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t15-l4-q5`,
          type: "mcq",
          stem: `Give the great objector his day at the lectern, as the disputation form requires. Origen of Alexandria, in his boldest students' hands: punishment must be medicinal, evil is finite, and the victory of God is not total while one rebel holds out; therefore all, at the last, are restored. Where does the Church's answer land?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "On God's honor: an eternal hell displays justice, and the display requires inmates.",
                "feedback": "No: God does not need hell for his glory, and the Church has never taught a display-case damnation; that road runs toward the double decree this lesson already fenced off. The damned are not exhibits in justice's museum; they are wills honored in the only direction they would go. Answer Origen with the will's tense, not with a divine need for cautionary examples: God has none."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "On the choice's reality: restoration for all would make every refusal provisional, and the Lord's own sentence symmetrical with life.",
                "feedback": "Respondeo: the anathema of 543 (DS 411, standard record) protects two things Origen's mercy would dissolve. First, freedom's weight: if every no becomes a yes eventually, no creature ever really answers God; history is a rehearsal with guaranteed applause, and love is compulsory, which is to say not love. Second, the Lord's grammar: everlasting punishment and life everlasting stand in one verse on one adjective; the medicine-theory must shorten the first while keeping the second, and the sentence does not bend that way. Honor Origen for the size of his hope; the deposit is not sized by our hopes. The tradition's own hope has an object with an address: the next lesson's mercy, not this room's abolition."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "On silence: the Church leaves the question open, as she left the efficacy debates open.",
                "feedback": "The De Auxiliis reflex, applied one door too far: this is not a question Rome left open. Fifteen anathemas against the Origenist theses carry the 543 synod, received by the universal Church; the restoration of the demons and the impious is condemned by name. Fair-fight discipline means the open stays open AND the closed stays closed. Universalism is not a permitted school with a minority report; it is the condemned position the distractors of this module keep wearing in new coats."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "On population statistics: the Church answers Origen by defining how many, and that none are lost is refuted by the counts.",
                "feedback": "The Church defines no census, in either direction: she canonizes by name and damns nobody by name, which is her exact jurisdiction and her exact restraint. What is defined is the state's reality and eternity, and that those who die in actual mortal sin enter it (DS 1002). The numbers belong to the Judge. Origen is answered by the nature of the will and the words of the sentence, not by a headcount the deposit never took."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t15-l4-q6`,
          type: "mcq",
          stem: `The hardest clause in the Florence paragraph, read exactly: the souls of those who depart in actual mortal sin OR IN ORIGINAL SIN ONLY descend immediately into hell, but to undergo PUNISHMENTS OF DIFFERENT KINDS (DS 1306). The child who dies unbaptized has no actual sin at all. What does the tradition do with that case?`,
          latin_tag: `poena damni`,
          doctrine_line: `Hell is real, eternal, and essentially the loss of the vision: the will's own refusal, fixed by death into the changeless tense. The pains differ by the sin; the door has become its resident; and the God who defined all this is the same who died to make the room avoidable.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It reads both clauses together: loss without the torments, the schools' limbo, held at its own rank.",
                "feedback": "Respondeo: the definitions force exactly two things: no entry to the vision without baptismal grace (DS 1306's descend), and different punishments for different files: Innocent III supplies the grammar, the punishment of original sin is the LOSS of the vision, of actual sin the TORMENTS of gehenna (DS 780, standard record). The schools named the resulting state limbus puerorum, the children's border, and Thomas goes further on its interior: no interior affliction over a good that was never proportioned to nature's own powers (De Malo q.5 a.3, by position): a natural happiness, short of the Face. Hold the rank honestly: the two DS clauses bind; the name and the natural-happiness anatomy are the common teaching of centuries, not a defined article. Teach what binds as binding, what is common as common, and commend the children, as the Church always has, to a mercy whose instruments she has not been told."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It defines limbo by name, a fourth last thing alongside the classical four.",
                "feedback": "Over-claim in the pious direction, and precision is the module's whole discipline. No council defines limbus puerorum by name; the word is the schools' label for what DS 1306 and DS 780 jointly require. Promote the common teaching to dogma and you hand its critics a straw target while blurring the very ranks the wall depends on. The tradition is stronger stated exactly than stated loudly."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It asserts their certain salvation: love cannot believe the clause means what it says.",
                "feedback": "The sentimental over-claim, and it pays for its comfort with the council's own words: original sin only, descend, different punishments; the clause does not have a hidden exit. Certainty of their glory is not on the books, and asserting it teaches the faithful that hard clauses dissolve under enough feeling, which is a solvent that does not know when to stop. What love may do is hope in God's unpledged mercy while confessing his pledged economy: baptize the babies, and trust the Judge with the rest. The Church's practice, urgent baptism, is her doctrine in motion."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It retires the clause as medieval pessimism corrected by a better age.",
                "feedback": "Definitions do not have expiry dates; that was the first module's museum keeper and the wall's whole principle. Laetentur coeli is an ecumenical council defining; its clauses are not moods of the fifteenth century awaiting our editorial improvements. A theology that grades the councils by the present's comfort has inverted the museum: the keeper now curates the deposit out of the cases. Read it exactly, rank it exactly, and let the exactness be the reverence."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `t15-l5`,
      num: `V`,
      title: `The Resurrection of the Body`,
      latin: `resurrectio carnis`,
      tag: `resurrectio carnis`,
      fin: {
        tag: `resurrectio carnis`,
        heading: `The philosophy demanded it; only God could do it.`,
        body: `So the graveside debt is scheduled for payment in full: the widowed form remarried to its own flesh, the scattered dust reassembled without embarrassment, the composite standing up whole, and the Mother already standing, the precedent the definition points at. The dotes are fitted; the sea has surrendered its ledger. Which leaves the only question the course has left: what are risen eyes FOR? Everything since the first apple has been marching toward one seeing. The veils, the definition with the timestamp, the light that lifts the seer: the vision itself, next, and then nothing after it but the walk home through everything you learned.`,
      },
      questions: [
        {
          id: `t15-l5-q1`,
          type: "mcq",
          stem: `Lesson 1 left a widow: a subsistent form without its matter, surviving, incomplete. The philosophy that proved the survival has one more thing to say about the incompleteness. What does it imply?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing further: incompleteness is simply the soul's final condition, and eternity accommodates it.",
                "feedback": "Nature does not retire into her own violations. A state contrary to a thing's nature cannot be its everlasting portion, and separation is exactly that for a form whose definition includes its body. The philosophy cannot FORCE heaven's hand; it can and does declare the separated state unfinished, a sentence missing its noun. Eternity accommodating a permanent widowhood would be nature permanently cheated, and the Designer does not leave his grammar broken."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That the soul will eventually generate a new body for itself, as form naturally seeks matter.",
                "feedback": "Form seeks matter; form does not manufacture it. No natural power reunites this soul to this body: generation makes new men from seed, never the same man from ashes, which is why Thomas rules the resurrection miraculous in its principle even while natural in its terminus. The desire is nature's; the deed cannot be. You have located the ache correctly and assigned it the wrong physician."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The reunion: owed to nature's integrity, possible only to God; the resurrection the anthropology always implied.",
                "feedback": "Respondeo: the soul cannot have the final perfection of the human species while separated, and no soul remains forever separated: Aquinas builds the universal resurrection on that one hylomorphic sentence. The philosophy demanded a reunion it had no power to perform; revelation announces the performance. This is the course's deepest pattern, one last time: grace does not correct the anthropology, it keeps the anthropology's promises. The two-part structure of everything you have studied is in that clause."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That the incompleteness is perceptual only: a subsistent form lacks nothing real, whatever grief supposes.",
                "feedback": "Tell it to the definition of the soul: forma corporis is not a career the soul once had but what it IS, and a form of a body without a body lacks something as real as definitions get. The blessed soul before the resurrection is happy in the essential act, seeing God, and still awaits, says the tradition, the crown of the body: the overflow of glory into flesh. Even in heaven there is an advent. Grief supposed nothing; grief counted."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t15-l5-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Others said that the entire nature of man is seated in the soul, so that the soul makes use of the body as an instrument, or as a sailor uses his ship: wherefore according to this opinion, it follows that if happiness is attained by the soul alone, man would not be balked in his natural desire for happiness, and so there is no need to hold the resurrection. But the Philosopher sufficiently destroys this foundation, where he shows that the soul is united to the body as form to matter. Hence it is clear that if man cannot be happy in this life, we must of necessity hold the resurrection.</p><p>Abraham's soul, properly speaking, is not Abraham himself, but a part of him (and the same as regards the others). Hence life in Abraham's soul does not suffice to make Abraham a living being, or to make the God of Abraham the God of a living man.</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae Suppl. q.75 a.1, with ad 2 &middot; Dominican Fathers translation</div></div>The master's argument for the resurrection, and his exegesis of the Lord's own proof-text. What carries both?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The authority of the Philosopher: Aristotle's prestige settles what Plato's sailor started.",
                "feedback": "Aristotle is cited as the demolisher, not the foundation: the argument runs on what he SHOWED, form united to matter, not on his name. Authority in philosophy is the weakest warrant, as the Summa's own method module told you with a smile, and Thomas uses the Philosopher here the way a mason uses a proof, not a patron. Read one clause deeper: the premise is the union itself."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The form-matter union: the soul being form, not sailor, its lone survival leaves the MAN unfinished.",
                "feedback": "Respondeo: kill the sailor and the resurrection follows. If the soul USED a body, soul-alone happiness would satisfy the whole man, and Porphyry's flee-all-bodies would be spiritual advice instead of a mistake. But the soul is form; the man is the composite; so Abraham's soul, in glory, is still not Abraham, and the God of Abraham has pledged himself to a LIVING MAN, which means flesh restored. Commenting on the same mystery elsewhere, Thomas mints the coin this course has spent twice already: anima mea non est ego (In 1 Cor 15, lect. 2, by position). The resurrection is not an ornament on the Gospel. It is the anthropology, kept."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The desire for happiness: whatever nature desires must be granted, so the body returns on demand.",
                "feedback": "The desire premise is in the passage but it cannot walk alone, as the beatitude module's gratuity lessons fenced with care: natural desire proves fit, never debt, and proves nothing about the POWER to attain. Thomas's argument needs both legs: the desire for complete happiness, and the form-matter union that defines what COMPLETE means for a man. Desire names the ache; hylomorphism names the anatomy; God alone supplies the deed."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The narrative fittingness: resurrection makes the better story, and providence prefers better stories.",
                "feedback": "Providence does prefer better stories, but fittingness is the garland on this argument, not its spine; Thomas argues from what man IS, so that the conclusion binds and does not merely charm. Keep the order straight because the next module of your life will need it: convenientia decorates a necessity here, the necessity runs through the definition of the soul, and the deed still waits on omnipotence. A story-preference could be declined; this anthropology cannot be, except by leaving man unfinished forever."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t15-l5-q3`,
          type: "mcq",
          stem: `Which body rises? A woman lost hers to fire and the sea two centuries ago. The creed says carnis resurrectionem, the resurrection of THE flesh. Whose, and in what sense hers?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Numerically her own: the same body she bore, restored by God to the same woman, however scattered its matter went.",
                "feedback": "Respondeo: all shall rise with their own bodies which they now bear, says Lateran IV against every substitute (DS 801, standard record); Job says it from the ash heap: in my flesh I shall see my God, whom I myself shall see, and not another. Identity does not ride an atomic census: matter cycled through her living body daily without anyone declaring her a stranger at breakfast; what makes the body HERS is its union with her soul, and omnipotence is not embarrassed by dispersal. The sea will give back its dead in the only sense that matters: the same woman, in the same flesh, herself."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A new spiritual body issued for the occasion: continuity of person, replacement of vehicle.",
                "feedback": "Issue a replacement and you have resurrected nobody: a new body makes a new composite, a twin handed her biography. The vehicle-word is the sailor's ship in dry dock, still leaking. Paul's spiritual body, next question's business, names the same flesh transfigured, not a different chassis: the seed and the wheat are one plant, or his whole image collapses. The creed's word is carnis: this flesh, kept."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Her body as God remembers it: identity preserved in the divine memory and re-expressed.",
                "feedback": "Memory re-expressed is the annihilation option from Lesson 1 wearing resurrection vestments: a perfect copy from a perfect memory is still a copy, and the woman herself, the one who died, stays dead beneath the celebration of her replica. The doctrine is severer and better: SHE rises, because her soul, never having ceased, is reunited to what it informs, and the composite that was broken is the composite that stands. God's memory is flawless; his fidelity is to HER, not to his notes."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The question is materialist and the creed outgrew it: rising means her story enters God's eternity.",
                "feedback": "The symbol-move's last stand, and the creed's word choice was its refusal in advance: not the resurrection of the person, or the memory, or the story, but of the FLESH, carnis, the least spiritualizable noun in the language, chosen by men who watched gnostics flinch at it. Stories do not eat broiled fish, as the risen Lord pointedly did. If the resurrection is a metaphor, Christianity is a eulogy with unusual confidence. It is not; the tomb's emptiness is the genre of the whole claim."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t15-l5-q4`,
          type: "match_pair",
          stem: `Paul gives the glorified body four antitheses in one breath: it is sown in corruption, it shall rise in incorruption; it is sown in dishonour, it shall rise in glory; it is sown in weakness, it shall rise in power; it is sown a natural body, it shall rise a spiritual body (1 Cor 15:42-44). The schools read four endowments there, the dotes of the glorified body (Suppl. qq.82-85, by position). Match each dos to the clause it unpacks.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "impassibilitas: beyond suffering, decay, and death"
              },
              {
                "id": "L2",
                "text": "claritas: the body radiant with the soul's glory"
              },
              {
                "id": "L3",
                "text": "agilitas: the body moving at the spirit's speed"
              },
              {
                "id": "L4",
                "text": "subtilitas: the body wholly subject to the spirit"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "sown in corruption, raised in incorruption"
              },
              {
                "id": "R2",
                "text": "sown in dishonour, raised in glory"
              },
              {
                "id": "R3",
                "text": "sown in weakness, raised in power"
              },
              {
                "id": "R4",
                "text": "sown a natural body, raised a spiritual body"
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
              "all_correct": "Four clauses, four endowments, correctly hung. Notice what the last pair refuses to mean: a spiritual body is not a body made of spirit, a contradiction Paul would have flinched at; it is flesh so perfectly subject to the glorified soul that matter finally obeys form the way song obeys singer. The risen Lord walked through doors and ate fish at one table: subtlety and solidity in one demonstration. The dotes are not upgrades to a different kind of thing. They are this flesh, at last doing everything flesh was for.",
              "partial_correct": "Some clauses came loose. Rebuild from the antitheses: corruption's opposite is the endowment that ends decay; dishonour's opposite is the radiance; weakness's opposite is the effortless power of movement; and the natural-spiritual pair names not a change of material but a change of OBEDIENCE: flesh wholly subject to spirit. Sow each word next to its harvest."
            }
          },
        },
        {
          id: `t15-l5-q5`,
          type: "mcq",
          stem: `Do the damned rise too? The instinct says surely not: why return bodies to the lost? The doctrine says otherwise, and the reason is worth owning exactly.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "They do not: the resurrection is a reward, and rewards do not reach the pit.",
                "feedback": "The instinct mistakes nature's restoration for glory's crown. If rising were reward, the wicked would stay conveniently buried; but all that are in the graves shall hear his voice, and come forth, unto the resurrection of life OR of judgment (Jn 5:28-29). The universality has a metaphysical spine, next option, and a juridical one: the whole man acted; the whole man answers."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Only the martyrs and the just: the first resurrection of the Apocalypse, read literally, restricts the flesh to the saints.",
                "feedback": "The millenarian reading, and the Church has consistently read the first resurrection as the life of grace, not a members-only return of bodies. Christ rose as the firstfruits OF THE RACE: conformity to him in nature's restoration belongs to every child of Adam, as Aquinas argues from the species itself; conformity in GLORY belongs to the just alone (Suppl. q.75 a.2, with ad 3). Keep the two conformities distinct and the whole question opens like a well-made lock."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "They rise as spirits only: bodies would be wasted on loss.",
                "feedback": "A spirit-only rising is not a rising at all; that is simply the separated state continued with a ceremony. The clause of Lateran IV is universal: all with their own bodies which they NOW bear, sheep and goats in one grammar. Nothing in the doctrine is wasted, because nature is not a prize: the body belongs to the man as man, and the man, whole, receives what the man, whole, chose."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "They rise: nature restored to the whole species, glory crowning only the just; the whole man answers.",
                "feedback": "Respondeo: the reason of the resurrection is the soul's incompleteness apart from its body, and that reason runs wherever the species runs: no soul remains forever separated, none, which is why Thomas concludes it is necessary FOR ALL to rise (Suppl. q.75 a.2, fetched whole). Justice seconds the metaphysics: deeds were done in the body, and the body is raised into the sentence, unto life or unto judgment. Nature's restoration is universal; glory's endowments, the four you just matched, clothe the just alone. The last day is not selective about flesh. It is selective about light."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t15-l5-q6`,
          type: "mcq",
          stem: `One member of the race is not waiting for any of this. The Church defined it in 1950: the Immaculate Mother of God, having completed the course of her earthly life, was assumed body and soul into heavenly glory. What does the Assumption do to this lesson?`,
          latin_tag: `resurrectio carnis`,
          doctrine_line: `The soul was never the whole of you: all rise, with the bodies they now bear, the just clothed in the four dotes, the lost raised into their own sentence. And one of our race is already home whole, which turns the doctrine from forecast into precedent.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It exempts her from death's meaning, a privilege sealed off from the rest of the race.",
                "feedback": "Sealed-off is exactly what the definition is not: her privileges are the Redemption's showcase, not its exceptions, as the Marian module set the grammar: what preserving grace did in her, saving grace does in the Body, in order. An exemption teaches nothing; a firstfruits teaches everything. And note the definition's care, learned there too: HAVING COMPLETED THE COURSE OF HER EARTHLY LIFE: whether she passed through death like her Son remains where the definition left it, open. Guard the dogma without decorating it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It proves she did not die, death being unthinkable for the sinless.",
                "feedback": "The definition was written by men who could have said that and deliberately did not: Munificentissimus Deus chose a clause that leaves her death an open question (DS 3903), and the older tradition of her dormition kneels on the other side of it. Death embraced without debt is not evidence of stain: her Son's tomb settles that. Assert more than Rome asserted and you have traded the definition for a devotion; the module on her taught the difference with a scalpel."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It turns the doctrine from forecast into precedent: one of our race, a mere creature, is already home whole.",
                "feedback": "Respondeo: she arrives whole, and the whole lesson stops being a promissory note. The resurrection of the flesh has HAPPENED, past tense, in a daughter of Adam who is not God: body and soul, the composite complete, the four dotes presumably doing in her what you just matched on paper. The Assumption is the Church pointing at one finished case and saying: like that, for all the just, at the trumpet. Firstfruits after the Firstfruits. The doctrine of this lesson now has an address in heaven, and the address is a mother's."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It concerns her queenship, not our resurrection; the connection is devotional embroidery.",
                "feedback": "The definition itself makes the connection you are calling embroidery: the Assumption is presented in the Body's own grammar, the Head's victory articulated first in the noblest member and pledged through her to the rest. Doctrine is a single fabric, as fifteen modules of paid promissory notes have been demonstrating: pull her thread out of this lesson and the weave loosens everywhere. She is not beside the point. She is the point, achieved early."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t15-l6`,
      num: `VI`,
      title: `The Vision`,
      latin: `visio beatifica`,
      tag: `visio beatifica`,
      fin: {
        tag: `lumen gloriae`,
        heading: `Nothing between, ever again.`,
        body: `That is the destination, defined: the uncupped water and the cupless seeing, the light landing in the eye and the Face giving itself, the escort turned neighbor, the veils folded like vestments after the last Mass of the world. Every module of two courses has been either a rung toward this or a gift descending from it; there is nothing above it to teach. Which leaves the oldest duty of the last lesson of the last module of the last part: the walk home through everything. One recapitulatio remains, of the module, of the Part, of the whole cathedral from the first apple to the standing Face. Bring all of it. You will need every image you own, one last time.`,
      },
      questions: [
        {
          id: `t15-l6-q1`,
          type: "mcq",
          stem: `Trent ended its Eucharist chapter homesick: that same bread of angels which we now eat under the sacred veils, eaten there without any veil. The soul crosses the threshold. What exactly drops?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The sacrament continues, perfected: the veils grow thin forever without quite lifting.",
                "feedback": "The homesick letter promised more than improved fabric. The sacraments are for wayfarers, and the economy of signs retires at arrival, as the sacraments module read in so many words: in glory, nothing is reached through veils. A heaven of thinner veils is a longer road, not a homecoming. The pledge was the veil's REMOVAL, and pledges bind."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The mode, not the Guest: it was Him all along; sign gives way to sight, and the pledge is redeemed.",
                "feedback": "Respondeo: nothing new arrives at the threshold except the seeing. The One the species veiled on ten thousand altars is the One the essence-vision presents without any medium: same Lord, same Esse, the mode of presence changed from sacramental to facial. This is why the course could say the game ends where the sacraments begin: the Mass was the vision practiced under veils, and heaven is the Mass's own promise kept. The tabernacle was never a different address from the throne. It was the throne, incognito."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The humanity of Christ: the vision being of the divine essence, the risen flesh is left at the door.",
                "feedback": "The Lamb is the lamp of that city, and the Lamb has wounds: the risen humanity is not discarded at the threshold but enthroned past it. The vision's proper object is the divine essence; the glorified flesh of the Redeemer remains the beloved companion of the seeing, forever, which is half the joy of the country. Leave his Body at the door and you have rebuilt the gnostic heaven this whole Part refused. The veils drop; the Incarnation does not."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The distance only: the soul finally pictures God perfectly, the resolution turned all the way up.",
                "feedback": "A perfect picture is still a picture, and the definition two questions ahead was drafted against exactly that comfort: no creature mediates BY WAY OF OBJECT SEEN, and every picture is a creature. Resolution-talk keeps the projector running in the throne room. What ends at the threshold is not blur but mediation itself: the next questions do the anatomy."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t15-l6-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Such a vision and enjoyment of the divine essence do away with the acts of faith and hope in these souls, inasmuch as faith and hope are properly theological virtues. And after such intuitive and face-to-face vision and enjoyment has or will have begun for these souls, the same vision and enjoyment has continued and will continue without any interruption and without end until the last Judgment and from then on forever.</p><div class="cr-cite">Benedict XII, Benedictus Deus (1336), DS 1001 &middot; On the Beatific Vision of God</div></div>You read this constitution once before, for its WHEN. Read the paragraph the earlier module left for this one. What does it define about the seeing itself?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That the blessed rest from all acts: vision names a holy passivity beyond operation.",
                "feedback": "The beatitude module settled the opposite with the master's own arithmetic: beatitude IS an operation, the one everlasting act of seeing, with delight as its crown. What the definition retires is two specific acts, not activity: heaven is not a rest FROM operation but rest IN one, the act so total it needs no successor. Quies is full employment at last. The pope's clause names the operation continuing without interruption, which is the least passive sentence in the book."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That the vision may pause and resume across the ages, as befits a creature's rhythm.",
                "feedback": "The clause was built to kill exactly this: without any interruption and without end, the legal Latin of a pope closing a loophole. No blinking, no rotation, no sabbaticals from the Face. A vision that paused would reintroduce absence into a state defined as absence abolished, and hope would creep back through the gap to wait out the intermission. The definition's granite is the consolation: the seeing, once begun, is as steady as the Seen."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That faith and hope retire, being virtues of absence, while the vision runs uninterrupted, forever.",
                "feedback": "Respondeo: the two wayfarer virtues are honorably discharged at the border. Faith assents to what is not seen; hope reaches for what is not held; vision and possession consume both the way sunrise consumes a lamp, nothing lost, everything outshone. Paul said it first: now there remain faith, hope, and charity, these three, but when that which is perfect is come, the greatest alone walks in (1 Cor 13). And the second clause sets the tempo of eternity: no interruption, no end, before the bodies and after them. Of the three sisters who carried you the whole road, charity is the only one who is going home, because charity was already the language of home."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That the vision waits, in strict rigor, upon the general judgment for its completion.",
                "feedback": "You have resurrected the opinion this constitution was written to bury: the delayed vision, preached from an Avignon pulpit by a pope thinking aloud, retracted on his deathbed, and defined against by his successor within two years, as the beatitude module told with the ranks kept straight. The text in front of you says the vision has begun, continues THROUGH the last judgment, and from then on forever: the judgment adds the body's glory, not the soul's admission. The timestamp was the whole point of the document, and it reads NOW."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t15-l6-q3`,
          type: "precision_check",
          stem: `A parish-hall sentence, warm and almost right. Where does it need the surgeon?`,
          payload: {
            "statement": "In heaven God will give our minds a perfect image of Himself, so that we can finally see Him.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "At 'give': nothing is given; the purified mind sees by its own cleared powers.",
                "feedback": "Cut in the wrong place, and the wound is Pelagian: no created intellect, human or angelic, sees the essence by its natural kit, as the beatitude module fixed with the Church's own fence around the desire and the gift. The giving is the whole event. What must be repaired is not the generosity but the merchandise: read on."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At 'image': there is NO image; the light strengthens the seer, and the essence itself is present.",
                "feedback": "Respondeo: the definition's own surgical clause: without the mediation of any creature BY WAY OF OBJECT OF VISION, the divine essence immediately manifesting itself. Every image, every species, every concept is a creature, a cup; and the essence is the uncupped water no cup can carry, as the attributes module taught you to say. So God does the one thing left to do: he gives the lumen gloriae, the light of glory, created strength poured into the SEER, and joins the essence to the intellect directly. What God does, he does to the eye, not to the view. The parish sentence puts the gift on the wrong side of the seeing; move it, and the sentence becomes the dogma."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At 'finally': the mystics see the essence already; heaven merely extends their hours.",
                "feedback": "The tradition guards the border even for its heroes: rapture, in the rare cases the schools allow it the strong reading, is a snatch across the line, momentary and unkeepable, the exception that maps the border rather than erasing it. The wayfarer as wayfarer walks by faith and not by sight, full stop. FINALLY is the most accurate word in the sentence: leave it be, and let the surgeon work one noun to the left."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing to correct: it reads devoutly, and devotion is the register that matters at a parish hall.",
                "feedback": "It reads devoutly and teaches the species-machinery into the throne room: one warm noun, and heaven becomes the world's best slideshow, God still known the creaturely way, through a likeness, only nicer. The whole definition hangs on refusing that noun. Devotion deserves precision precisely because it will be believed: the grandmother repeating this sentence is owed the real doctrine, which is more consoling, not less. Nobody looks at a photograph forever. The Face is another matter."
              }
            ],
            "correct_option_id": "b",
            "correction": "Strike 'a perfect image of Himself'; write 'the light of glory, so that His very essence is present to us with no image between.' The gift lands in the seer; the Seen gives Himself."
          },
        },
        {
          id: `t15-l6-q4`,
          type: "mcq",
          stem: `Water without any cup: the audit's name for God, esse received in nothing, bounded by nothing. Now stand the finding beside the definition's clause: no creature between, no species, no likeness. Why must seeing THIS God work that way?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because likenesses offend the divine majesty, which tolerates no portraiture on principle.",
                "feedback": "God sits for portraits constantly; he furnished the gallery: every creature is his likeness by participation, every effect his portrait in the mode the analogy module licensed, and the Incarnation is the image of the invisible God in flesh. The refusal of species in the vision is not iconoclasm on principle. It is a matter of capacity, not offense: no portrait CAN do this work, which is the correct option's whole argument."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the blessed intellect becomes divine, and God needs no medium to know himself.",
                "feedback": "One noun too far, and the cup shatters into pantheism: the blessed intellect is elevated, never transubstantiated; the seer remains a creature seeing by a created light, or the joy would have no subject left to have it. Deification language in the tradition is participation grammar, the lamp lit, never the lamp become the sun. The mystery is better than absorption: someone is still there, seeing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because seeing without species is simpler for glorified minds, efficiency suiting perfection.",
                "feedback": "Efficiency is a virtue of processes, and the vision is not a process streamlined but a union effected. Species are not skipped as a shortcut; they are surpassed because they CANNOT carry the cargo, as the correct option prices exactly. Perfection-as-efficiency is the engineer's heaven. The real one is stranger: not a faster way of knowing about, but the end of ABOUT altogether."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because every species is a cup, and the essence exceeds every cup: God joins the intellect directly.",
                "feedback": "Respondeo: a concept carries what its form can hold, and every created form is a cup with a shape: THIS much intelligibility, so shaped, no more. The essence that IS unbounded esse cannot be decanted into any of them; no created similitude can show it as it is (ST I q.12 a.2, by position). So the definition's clause is not mystical extravagance but strict metaphysics: if the essence is to be seen at all, it must be present to the mind AS ITSELF, the knower elevated by the lumen gloriae to a union no species brokers. The attributes module ended saying the ceiling holds, in via. It holds. The country was never on this side of it."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t15-l6-q5`,
          type: "mcq",
          stem: `Two clauses from the same deposit, side by side. Florence: the blessed see clearly God, one and triune, JUST AS HE IS, yet one more perfectly than another according to the diversity of merits. And the tradition everywhere: no creature comprehends Him. Whole, unequal, uncomprehended: make the three cohere.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Each sees the whole essence; none exhausts it; and charity's degree sets the keenness of each seeing.",
                "feedback": "Respondeo: totus, non totaliter: the whole God is seen, for the essence has no parts to ration, and no created light sees him WHOLLY as he can be seen, for the seen is infinite and the seer is not (ST I q.12 a.7, by position). Between those two fixed walls, Florence hangs the diversity: the lumen gloriae is given in measures, and the measure is the charity brought to the border, which is why the saints raced. Every vessel is full; the vessels differ; nobody thirsts and nobody envies, because envy needs a lack and there is none. The country's arithmetic: all whole, none total, each full."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The inequality is provisional: vision deepens forever, converging on comprehension as its limit.",
                "feedback": "An infinite ascent with comprehension as the horizon still promises what the doctrine denies: God alone comprehends God, and no accumulation of created seeing sums to an uncreated act. Whether the vision admits growth at all, the tradition weighs carefully and the definition does not assert; what is certain is the ceiling of the whole climb: AS HE IS, seen; as he sees himself, never. The joy has no floor, said a wiser eulogy; it also has no exit into godhood, and is the happier for both."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The equality of heaven forbids degrees: the merit-clause ranks the road, not the country.",
                "feedback": "Florence's clause is about the seeing itself: one more perfectly than another, in the vision, per the diversity of merits; Trent later anathematized the flattening directly. Heaven's equality is of fullness, not of measure: every star glorified, star differing from star, as Paul already sang over the resurrection. Egalitarian heaven sounds generous and abolishes the seriousness of every earthly act of love: if the widow's mite buys what it bought, the mite mattered. The doctrine keeps the mattering."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The three cannot cohere; the clauses are edifying paradox, resting the mind by defeating it.",
                "feedback": "Surrender one distinction too early, soldier. The clauses mesh without grinding once whole-versus-totally and object-versus-mode are in hand, and you have owned both wrenches since the analogy module. Real mystery outruns comprehension; it never requires contradiction, and the difference between those two is the entire method of this course: see why it is not absurd. The paradox dissolves in your own toolkit, which is presumably why the curriculum put the toolkit first."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t15-l6-q6`,
          type: "mcq",
          stem: `At the threshold, three retirements are filed at once: the guardian's escort ends, the sacraments end, and the anxious question of perseverance ends. One logic underneath all three. Name it.`,
          latin_tag: `visio beatifica`,
          doctrine_line: `The blessed see the divine essence itself, intuitively and face to face, no creature between as the object seen; the created light of glory lifts the seer; faith and hope retire, charity arrives home; seen whole, never comprehended, differently by merit, without interruption, forever.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Heaven abolishes creatures' roles: pure divinity admits no created service or company.",
                "feedback": "Then the angels would be unemployed and the Mother would be furniture, and the city is described as neither: the company of the holy angels is in the definition's own sentence, and the communion of saints is the country's social fabric, not its scaffolding. What ends is not creatureliness but mediation toward an absent end. Company remains; couriers retire. The distinction is the correct option's whole cargo."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The three were burdens graciously endured, and glory is their overdue removal.",
                "feedback": "Burdens is slander against three of the road's best gifts: the escort was a colleague, the sacraments were the veiled Presence itself, and even the unbankable question kept love awake. They are not removed as regrettable; they are completed as successful, the way a bridge is not demolished by being crossed. Gratitude, not relief, is the register of the retirement party. Every one of them worked."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "All three were creatures of the road: they served absence, and arrival ends offices, not friendships.",
                "feedback": "Respondeo: one logic, three retirements. The guardian's OFFICE was guidance toward a kingdom not yet reached; in the kingdom the guiding ends and the fellow-citizenship begins: the colleague met at last, angel and soul equals in the light they now share (q.113 a.4's own clause, by position). The sacraments were signs carrying grace toward a glory not yet seen; where all truth is openly and perfectly revealed, nothing is reached through veils. And perseverance was the one gift that could not be banked in via: at the border it converts, whole, into possession that cannot be lost, the will fixed in good as the fallen will is fixed in evil, and infinitely more happily. Roads end at homes. Everything built FOR the road bows at the door, and everything the road was FOR walks in."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A common exhaustion: created instruments wear out at infinity's threshold and are pensioned off.",
                "feedback": "Nothing wears out; everything arrives. The instruments are not pensioned for metal fatigue: the guardian is fresher than the morning and the sacraments were inexhaustible yesterday. Their offices end for the same reason the doctor leaves a healed house: terminus reached, the one retirement no instrument resents. Exhaustion is a modern's projection onto an economy that runs on gift. The road's servants end their shifts in triumph, every one."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `t15-l7`,
      num: `VII`,
      title: `Recapitulatio Totius Operis`,
      latin: `reditus`,
      tag: `reditus`,
      fin: {
        tag: `reditus`,
        heading: `The end of the game is the beginning of the week.`,
        body: `The whole walk, one last time: an apple on a table; the cup and the water; the ladder and its verdict; the Voice; the seed; the veils; the Face. The swallow that once outflew the owl is over the horizon now, into a sunrise shaped exactly like the sun the metaphysics drew. In the Oratorium, the last piece falls into place: Adoro Te Devote stands complete at its final stanza, the one where Thomas, who wrote the treatise and then called it straw, asks for the only thing the treatise could not give: that seeing Thy face unveiled, he may be blessed in the vision of Thy glory. The course has nothing to add to that sentence; it was only ever a long way of learning to mean it. So here is the last assignment, and the only one that was never optional. It is Sunday somewhere already. The parish holds the veils; the confessional holds the mercy; the rail holds the Bread of angels, under signs, patient as ever. The course retires here, like every good sign at the threshold of what it signified. Go home by the road the whole creation takes. Ite: the word the Mass ends with, because nothing in this religion ends. It returns.`,
      },
      questions: [
        {
          id: `t15-l7-q1`,
          type: "mcq",
          stem: `The Summa's own map, confessed at last: God; the going-forth of creatures from God; and Christ, who as man is our road back to God. Exitus et reditus, the going-out and the return. You have just finished walking a course built on the same blueprint. Where was the seam?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "There was no seam: one course, one method, philosophy and theology indistinct throughout.",
                "feedback": "The seam is load-bearing and the course kept pointing at it: eighteen modules climbed by unaided reason, and the nineteenth opened with a ceiling and a Voice. Blur the seam and you lose both halves' honor: philosophy's, that it reached the summit it reached without borrowing; theology's, that it gave what no climbing earns. The two-part structure IS the doctrine of nature and grace, worn as a syllabus."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "At the Church's door: reason walked alone until authority took over the argument.",
                "feedback": "Authority never took over the argument; it enlarged the premises. The reception register did not retire the syllogism, as fifteen theology modules of disputation, distinction, and fair fights just demonstrated: faith supplied premises reason could not reach, and reason kept working, now as theology's instrument. The seam is between what the premises COST, not between arguing and obeying. The museum keeper guards a deposit; he reasons about it all day long."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "At the ceiling: Part One climbed to subsistent Being and stopped; Part Two began when He spoke.",
                "feedback": "Respondeo: the exitus you walked upward, reading the going-forth in reverse: from an apple's act of being, rung by rung, to the verdict that subsistent Esse exists, and the honest addendum that reason cannot see him. Then the seam: the proven One spoke, and everything after was reditus, the return: sacra doctrina from his own knowledge, grace for the road, sacraments for the carrying, and this module for the arrival. The course was one journey out and back because reality is: everything comes forth, everything returns, and the Summa's map was the territory's all along."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Between modules of ideas and modules of practice: theory first, application after.",
                "feedback": "The course never had a practice wing; it had a destination, which is different. The sacraments were not applications of theory but causes of grace; the ethics was not tips but the anatomy of acts that stand in a courtroom this very module furnished. Theory-versus-practice is the modern seam, and the course declined it: contemplata aliis tradere is one motion. The real seam ran between what reason reaches and what God gives, and you crossed it the day the swallow outflew the owl."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t15-l7-q2`,
          type: "sequence",
          stem: `The whole journey, then, from the first table to the last sight. Seven stations, shuffled. Put them in the order the course walked them, first to last.`,
          payload: {
            "instruction": "Tap the stations in order, from the apple to the Face.",
            "items": [
              {
                "id": "s1",
                "text": "An apple on a table: the thing beneath its look, substance under the accidents"
              },
              {
                "id": "s2",
                "text": "The cup and the water: everything here HAS being; nothing here IS it"
              },
              {
                "id": "s3",
                "text": "The ladder's verdict: subsistent Esse exists, proven and unseen"
              },
              {
                "id": "s4",
                "text": "The One the proofs reached begins to speak: faith receives what no climb delivers"
              },
              {
                "id": "s5",
                "text": "The life of glory planted in the soul: grace, the seed of the seeing"
              },
              {
                "id": "s6",
                "text": "The same Esse veiled on an altar: the bread of angels under signs"
              },
              {
                "id": "s7",
                "text": "The veils drop: the divine essence, face to face, no creature between"
              }
            ],
            "correct_order": [
              "s1",
              "s2",
              "s3",
              "s4",
              "s5",
              "s6",
              "s7"
            ],
            "feedback": {
              "all_correct": "The reditus, restored in full: out from Esse through the world's substances, up the ladder of act and participation to the verdict, and then the turn no philosophy foresaw: the Proven One speaking, planting, feeding, unveiling. Notice where the pivot sits: three stations of climbing, four of gift, and the summit of the first half is merely the doorstep of the second. An apple on a table and the vision of Esse are the same lesson at two altitudes: what a thing IS beneath its appearances. You began the course looking through accidents at a substance. You end it promised a seeing with nothing between at all. That is not a new subject. That is the first subject, finished.",
              "partial_correct": "The stations fell out of order, and this column marches by dependence: you cannot weigh being against beings before you have met a being; the verdict needs the ladder; the speaking presupposes Someone proven worth hearing; the seed is planted by the Speaker; the altar carries the planted life to the planted; and the unveiling ends what the veils began. Rebuild from the apple, and let each station ask what it stands on."
            }
          },
        },
        {
          id: `t15-l7-q3`,
          type: "match_pair",
          stem: `The gallery, one last walk. Six images that carried the cathedral: match each to the doctrine it bore.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the sculptor's marble"
              },
              {
                "id": "L2",
                "text": "the taxpayer who is not his nature"
              },
              {
                "id": "L3",
                "text": "the museum keeper who owns nothing"
              },
              {
                "id": "L4",
                "text": "the pianist's practiced hands"
              },
              {
                "id": "L5",
                "text": "two friars at one lectern"
              },
              {
                "id": "L6",
                "text": "the clenched instant"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "act and potency: change is real, and every becoming needs an actor"
              },
              {
                "id": "R2",
                "text": "person and nature distinct: the grammar of Trinity and Incarnation"
              },
              {
                "id": "R3",
                "text": "the magisterium guards a deposit it did not write and cannot amend"
              },
              {
                "id": "R4",
                "text": "habitus: second nature built by acts, crowned by virtues infused from above"
              },
              {
                "id": "R5",
                "text": "the disputation: fair hearing, firm verdict, and Rome's open questions kept open"
              },
              {
                "id": "R6",
                "text": "a will in the angelic mode chooses once, entirely, forever"
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
              "all_correct": "Six for six, and look at what the wall proves in passing: the marble taught motion so the Ways could climb; the taxpayer's grammar held Nicaea and Chalcedon on its shoulders; the keeper's empty hands guarded every definition this module read; the pianist's ceiling made room for the infused; the two friars kept De Auxiliis honest; and the clenched instant, God have mercy, furnished the metaphysics of the only room in creation without a morning. Not one image retired when its module ended. The course was a single argument wearing eighteen costumes, and you have just named the cast.",
              "partial_correct": "Some paintings are on the wrong hooks. Sort by what each image DOES: one explains how anything changes; one splits the who from the what; one guards without owning; one builds a second nature and hits its ceiling; one stages a fight fairly; one chooses once, forever. The gallery rewards patience; it always has."
            }
          },
        },
        {
          id: `t15-l7-q4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE, the axiom under the whole two-part architecture: grace destroys nature and replaces it with something better. Pick the judgment and the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE: the supernatural must humble the natural into silence, or it is not above it.",
                "feedback": "Height that silences is not height but noise; the fideist reflex mistakes drowning-out for transcendence. Revelation did not hush the philosophy; it HIRED it, as the whole second Part just demonstrated in citation after citation. A grace that could only replace nature would be a rival power, not its Author returning. The axiom runs the other way, and the course is its footprint."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE: nothing merely natural survives contact with glory, as the veils and escorts just showed.",
                "feedback": "Watch what actually retired at the threshold: offices, not natures. The guardian remains an angel; the soul remains a soul; the body comes BACK, improved. What glory ends is mediation toward an absent end, not the natures that did the mediating. From the retirement of couriers you cannot conclude the abolition of creatures; the city is full of them, glorified. The premise is the lesson before last, misread."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE: grace does not destroy nature but perfects it; the course itself is the demonstration.",
                "feedback": "Respondeo: gratia non tollit naturam sed perficit, grace does not take away nature but perfects it, and you have not merely learned the axiom, you have LIVED in it for two courses: theology hired the philosophy and never once fired it; the resurrection re-employs the body forever; the vision fulfills the desire nature carried and could not cash; even the light of glory works by ELEVATING a created intellect, not bypassing it. Every heresy this module fought economized against the axiom: the sailor discarding his ship, the mortalist discarding the soul, the symbolist discarding the flesh, the universalist discarding the will. The Catholic thing, first page to last, is that God finishes what God began. Nature was never the rival. Nature was the promise."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE: nature ascends to glory by its own momentum, given time enough and discipline.",
                "feedback": "Right verdict, and the oldest wrong reason in the file: the self-sufficient climb was condemned at Carthage before the schools existed. Nature is perfected BY GRACE, not by its own compounding: the desire is native, the fulfillment is gift, the seed is planted from above, and the whole second half of the journey was descent meeting ascent, not ascent alone. Deny the destruction AND the self-sufficiency; the axiom holds the narrow road between them. It always did."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t15-l7-q5`,
          type: "mcq",
          stem: `The attributes module ended with a hard honesty: the ceiling holds; what God IS, no wayfarer's demonstration delivers. This module defined the seeing of that very essence. So: what became of the ceiling?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The ceiling of demonstration, not of the country: the vision delivers what proofs could not; the proofs stand.",
                "feedback": "Respondeo: the ceiling was indexed to a method, not to reality: what God is exceeds every demonstration mounted from effects, and the audit said so without embarrassment. The vision does not refute that honesty; it rewards it: the essence is given from the far side, by the light of glory, to eyes that could never have climbed there. And the Five Ways are not demolished by the arrival; they stand under the throne like stairs under a landing, still true, still sound, still the road by which a mind first learned the Name had a bearer. In patria the ceiling is not broken. It is discovered to have been the floor."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It is revealed to have been faith all along: the proofs were belief wearing argument's clothes.",
                "feedback": "The fideist rewrite, and it robs both parties at once: it takes from reason the summit reason actually reached, defined as reachable by the Vatican Council itself, and it takes from faith the dignity of exceeding a REAL achievement rather than a costume. The proofs were proofs; the course walked every step in daylight. Faith began where they ended, which is only an honor to both if the ending was real."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The negations are repealed: what denial fenced, vision now contradicts.",
                "feedback": "The negations were never the opposite of the vision; they were its perimeter fence, guarding a fullness no concept could hold from concepts that would have shrunk it. Simple, infinite, immutable: every denial stripped a creaturely limit precisely so that what the blessed now see would not have been pre-shrunk by the road's grammar. Vision fulfills the via negativa the way arrival fulfills a map's blank spaces: nothing on the map was WRONG. The blank was the honesty."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It holds forever: even in glory the essence stays behind glass, known by ever-better effects.",
                "feedback": "The agnostic overshoot, and a pope defined against the glass: the divine essence immediately manifesting itself, no creature mediating, plainly, clearly, openly. Eternal effects-only knowledge would make heaven the road extended, hope never discharged, the homesick letter never answered. The ceiling was the wayfarer's; eternalize it and you have built the one heresy this module was written to make impossible: a heaven with no Face in it."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t15-l7-q6`,
          type: "mcq",
          stem: `Part One ended by sending you to the Summa. This Part ends differently, and the difference is doctrine. By everything this course itself has taught, where does its own last page point?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Back to Module 1, at a higher altitude: the course rereads itself forever.",
                "feedback": "The spiral has its charm and its truth: everything does read deeper the second time. But a course that terminates in itself has made itself the last end, and you have just spent seven lessons on what happens to created things mistaken for last ends. The reread is welcome; the ARROW is elsewhere. Even this gallery's walls point out the door."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "To the academy: theology's next course, the degree the natural crown of the catechumen's game.",
                "feedback": "For some, gladly: the tradition needs its scholars and this course would be proud to have been anyone's first stair. But the degree is a vocation, not the doctrine's own arrow: what the course TAUGHT is that grace rides sacraments, not seminars, and its obsolescence was designed toward a font, not a faculty. Study remains a road. The question asked where the LAST PAGE points, and the last page smells of chrism."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Inward: the interior life, the Church's plumbing being optional for the sincere.",
                "feedback": "The churchless-spirituality option, and two entire modules stand against it in formation: the Body is visible, the channels are seven, and the grace the interior life runs on is CARRIED, through the act performed, by signs a private soul cannot administer to itself. Interiority without the altar is a lamp without a current, the metaphor the grace module built for exactly this moment. The inward road is real and it runs THROUGH the parish, not around it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "To the parish: the font, the confessional, the altar rail; the game ends where the sacraments begin.",
                "feedback": "Respondeo: follow the course's own chain of custody: the vision rides on glory, glory on perseverance, perseverance on grace, grace on the sacraments, and the sacraments are in a building near you with a schedule on the door. Everything else the course gave was equipment for THAT: eighteen modules so the Mass would be legible, fifteen more so it would be loved. A course on the last things that sent you anywhere but to confession and Communion would have flunked its own final. Part One sent you to a book, and the book is glorious. This Part sends you to your knees, where the Book's Author is veiled and waiting. Go. The Commentator will be along presently; he has a Mass to get to himself."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t15-l7-q7`,
          type: "mcq",
          stem: `The last question of the course belongs to its master. On the sixth of December, 1273, after Mass, Thomas Aquinas stopped writing, mid-Summa, and told Reginald: I can do no more; such things have been revealed to me that all I have written seems to me as straw. He never wrote again. What did he mean, and what does it do to the forty-some lessons behind you?`,
          latin_tag: `reditus`,
          doctrine_line: `Exitus et reditus: everything comes forth from subsistent Esse, and everything is called home; reason climbs to the threshold, grace carries across it, the sacraments are the carrying, and the vision is the arrival. The course ends where the sacraments begin, and both end where nothing ends.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A retraction: the mystic finally saw through the scholastic, and the system dissolved in the seeing.",
                "feedback": "The romantic reading, beloved of everyone who never read the system. A retraction names errors; Thomas named none, and the Church he served has spent seven centuries defining WITH his sentences, canonizing the man and commending the method. What he saw did not contradict a line of the straw; it outweighed it, which is a different relation entirely: the next option holds it. Mystics against metaphysics is a modern fight. He was both, all along, and neither side of him apologized to the other."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A proportion: he had glimpsed something of what the words were maps of; the maps stayed true and became small.",
                "feedback": "Respondeo: straw is not a verdict of falsehood; it is a verdict of scale. Every article stood; every distinction held; the man simply saw, for a moment, the country his life had been cartography of, and no honest mapmaker mistakes the map for the coastline again after standing on the cliff. This course inherits the verdict gladly, and so do you: forty-some lessons of straw, by the master's own measure. But consider, one last time, what straw is for. Straw is what mangers are lined with. The Word has lain on straw before and did not despise it; He seems, if anything, to prefer it. Lay yours where He can use it, and the proportion becomes a Presence. That is the whole trick of the Christian intellect, and the last doctrine of this course: everything true is small next to Him, and nothing true is wasted on Him."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "An illness speaking: the episode is biography, not theology, and means nothing for the work.",
                "feedback": "The reductionist mercy, kindly meant and deaf. Something did happen to his health that winter; the tradition never denied the frame. But the SENTENCE is not a symptom: it is the most precise thing a precise man ever said, delivered calmly to the brother he trusted, and it rhymes too well with his own doctrine of the vision to be noise. A theology of beatitude that could not survive its author glimpsing beatitude would be a poor theology. His survives it; indeed it predicted it: the maps all say the country exceeds them."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A warning: theology endangers the soul near the end, and the wise stop early.",
                "feedback": "He did not stop because the work endangered him; he stopped because the work was, for him, complete: it seems to me as straw is a comparison, and comparisons need both terms, the second of which he had just been given. Nobody warned YOU off theology in that sentence; the man spent his last strength dictating commentary on the Song of Songs for the monks who asked, unable to stop feeding the household even then. The lesson is not flee the library. It is that the library, loved rightly, opens onto the chapel, which is where he was going, and where, presently, this course lets you go too."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    }
  ],
};
