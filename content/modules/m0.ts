import type { ModuleMeta } from '../types';

export const m0: ModuleMeta = {
  id: 0,
  title: `Foundations`,
  short: `Foundations`,
  label: `Module 0 · Foundations`,
  lessons: [
    {
      id: `m0-l1`,
      num: `I`,
      title: `The Two Questions`,
      latin: `essentia / esse`,
      tag: `essentia  ·  esse`,
      fin: {
        tag: `essentia  ·  esse`,
        heading: `Every thing you will ever examine has two questions in front of it.`,
        body: `<em>Esse</em> is not <em>essentia.</em> That a tree exists is not the same fact as what a tree is. Modernity collapsed these; Aquinas held them apart with a patience that bordered on stubbornness. He was right to. Nearly every argument in the course eventually reaches back to this distinction — which is as good a reason as any to begin here.`,
      },
      questions: [
        {
          id: `m0-l1-q1`,
          type: "mcq",
          stem: `Look at an apple sitting on a table. When you ask <em>"What is this?"</em>, you are asking…`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Whether the apple exists in the room.`,
              correct: false,
              feedback: `Not quite — that's a different question, and we'll meet it next. <em>"What is this?"</em> is asking about the <em>kind</em> of thing in front of you.`,
            },
            {
              id: `b`,
              text: `What kind of thing this is.`,
              correct: true,
              feedback: `Right. Asking <em>what</em> something is — apple, dog, table, person — is asking about its kind. About what it would be missing if it stopped being one.`,
            },
            {
              id: `c`,
              text: `How heavy the apple is.`,
              correct: false,
              feedback: `That's a question about a <em>property</em> of this particular apple. The "what is it?" question is more fundamental — it asks what <em>kind</em> of thing this is at all.`,
            }
            ],
          },
        },
        {
          id: `m0-l1-q2`,
          type: "mcq",
          stem: `And when you ask <em>"Is there an apple on the table?"</em>, you are asking…`,
          payload: {
            options: [
            {
              id: `a`,
              text: `What kind of thing it is.`,
              correct: false,
              feedback: `That was the previous question. This one is different — try the option that's simpler and more basic.`,
            },
            {
              id: `b`,
              text: `Whether it exists at all.`,
              correct: true,
              feedback: `Two completely different questions. The first asks <em>what</em> the apple is. This one asks <em>that</em> the apple is. The two feel similar in English — but they are not. Holding that gap open is the first move of the whole tradition.`,
            },
            {
              id: `c`,
              text: `What it would taste like.`,
              correct: false,
              feedback: `Closer to the "what is it?" family — a question about the apple's nature. "Is there one?" asks something simpler: does the thing actually <em>exist</em>?`,
            }
            ],
          },
        },
        {
          id: `m0-l1-q3`,
          type: "mcq",
          stem: `Four questions below. Which one is asking <em>WHAT</em> something is — not whether it exists?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Is the dog in the yard?`,
              correct: false,
              feedback: `A "that-it-is" question — does the dog exist in this place right now? You're after the other kind.`,
            },
            {
              id: `b`,
              text: `What, exactly, is a unicorn?`,
              correct: true,
              feedback: `Yes. And notice: we can ask <em>what</em> a unicorn is even though no unicorn <em>exists</em> anywhere. The two questions are completely independent of each other. That small fact will turn out to matter enormously.`,
            },
            {
              id: `c`,
              text: `Did Julius Caesar ever live?`,
              correct: false,
              feedback: `A "that-it-is" question — did Caesar ever exist in the world? You're after the other kind: what <em>kind</em> of thing something is.`,
            },
            {
              id: `d`,
              text: `Are there ghosts?`,
              correct: false,
              feedback: `Another "that-it-is" question — do ghosts actually exist? You're after the other kind.`,
            }
            ],
          },
        },
        {
          id: `m0-l1-q4`,
          type: "mcq",
          stem: `Two questions. Two ancient names. Which pairing is right?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `"What it is" = <span class="lat">esse</span>  ·  "That it is" = <span class="lat">essentia</span>`,
              correct: false,
              feedback: `Switched. Try the other pairing — these two words are easy to mix up in their first hour together.`,
            },
            {
              id: `b`,
              text: `"What it is" = <span class="lat">essentia</span>  ·  "That it is" = <span class="lat">esse</span>`,
              correct: true,
              feedback: `Two of the oldest words in metaphysics. <span class="lat">Essentia</span>: what something is — its essence, its kind. <span class="lat">Esse</span>: that it is — the very act of being. Hold onto them. Half the tradition rides on the difference between them.`,
            },
            {
              id: `c`,
              text: `"What it is" = <span class="lat">causa</span>  ·  "That it is" = <span class="lat">materia</span>`,
              correct: false,
              feedback: `Different vocabulary entirely — those words come later. The two ancient names for the "what" and the "that" are <span class="lat">essentia</span> and <span class="lat">esse</span>.`,
            }
            ],
          },
        },
        {
          id: `m0-l1-q5`,
          type: "mcq",
          stem: `We can describe perfectly well WHAT a unicorn is — a horned horse — even though no unicorn EXISTS anywhere. So a unicorn has…`,
          payload: {
            options: [
            {
              id: `a`,
              text: `<span class="lat">Essentia</span> but not <span class="lat">esse</span>.`,
              correct: true,
              feedback: `Exactly. We can know what a unicorn <em>is</em> without there being any actual unicorn. For Thomas, this is one of the great clues hiding in plain sight: in created things, what-it-is and that-it-is can come apart. They <em>don't have to</em> come together.`,
            },
            {
              id: `b`,
              text: `<span class="lat">Esse</span> but not <span class="lat">essentia</span>.`,
              correct: false,
              feedback: `Reversed. The unicorn does not <em>exist</em> (so no <span class="lat">esse</span>), but we can still say what it would <em>be</em> if it did (so it has <span class="lat">essentia</span>).`,
            },
            {
              id: `c`,
              text: `Both <span class="lat">essentia</span> and <span class="lat">esse</span>.`,
              correct: false,
              feedback: `Almost — but the unicorn doesn't actually exist anywhere. It has <span class="lat">essentia</span> (we know what it would be) but no <span class="lat">esse</span> (no actual being).`,
            },
            {
              id: `d`,
              text: `Neither.`,
              correct: false,
              feedback: `Not quite. We <em>can</em> talk about what a unicorn is — that's its <span class="lat">essentia</span>. What it lacks is <span class="lat">esse</span> — actual existence.`,
            }
            ],
          },
        },
        {
          id: `m0-l1-q6`,
          type: "mcq",
          stem: `Last one. Which sentence uses <span class="lat">essentia</span> and <span class="lat">esse</span> correctly?`,
          latin_tag: `essentia  ·  esse`,
          doctrine_line: `Lesson 1 of 7 complete · Six more before the seven doors open.`,
          lesson_complete: true,
          payload: {
            options: [
            {
              id: `a`,
              text: `Every real apple has both <span class="lat">essentia</span> (it IS an apple) and <span class="lat">esse</span> (it exists).`,
              correct: true,
              feedback: `Yes. Every existing thing has both — <em>what</em> it is, and <em>that</em> it is. Two questions, two answers, two distinct realities. The whole tradition opens from here.`,
            },
            {
              id: `b`,
              text: `<span class="lat">Essentia</span> means existence; <span class="lat">esse</span> means kind.`,
              correct: false,
              feedback: `Reversed. <span class="lat">Essentia</span> is the WHAT (the kind). <span class="lat">Esse</span> is the THAT (the existing). Easy to flip — re-read the names once or twice until they stick.`,
            },
            {
              id: `c`,
              text: `<span class="lat">Esse</span> is the kind of thing it is; <span class="lat">essentia</span> is whether it exists.`,
              correct: false,
              feedback: `Also reversed. <span class="lat">Essentia</span> = the kind. <span class="lat">Esse</span> = the act of being.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m0-l2`,
      num: `II`,
      title: `Act and Potency`,
      latin: `potentia / actus`,
      tag: `potentia  ·  actus`,
      fin: {
        tag: `potentia  ·  actus`,
        heading: `Change requires that a thing be not yet what it is becoming.`,
        body: `Potency is real capacity; act is real perfection. The marble is potentially a statue — not metaphorically, really. Aristotle built this engine for the physics of change; Aquinas ran it all the way to a conclusion Aristotle did not reach: that there must be something that is Pure Act, with no potency at all. That conclusion is not Module 0. But this lesson is why it is available.`,
      },
      questions: [
        {
          id: `m0-l2-q1`,
          type: "mcq",
          stem: `A match sits dry and whole in a box. It has never been struck. It can produce fire — but right now it is not on fire. What are we pointing at when we say it "can produce fire"?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `A real capacity built into the match — what it is ready to do, not yet done.`,
              correct: true,
              feedback: `Right. The match has a genuine readiness for fire — not just our wish, but something built into the match's nature. That readiness and the actual burning are two different things. Holding them apart is the move.`,
            },
            {
              id: `b`,
              text: `What the match is actually doing right now.`,
              correct: false,
              feedback: `That would describe the match <em>on fire</em> — which it isn't. You're after what we're pointing at when we say it <em>can</em> produce fire, before anything happens.`,
            },
            {
              id: `c`,
              text: `A description of what the match does after we strike it.`,
              correct: false,
              feedback: `That's the outcome <em>after</em> — what happens once the capacity is exercised. We're asking about what the match has <em>before</em> we do anything to it.`,
            }
            ],
          },
        },
        {
          id: `m0-l2-q2`,
          type: "mcq",
          stem: `An acorn lies on the ground. It can grow into an oak. Right now it is an acorn. Which option describes what the acorn actually <em>is</em> right now — not what it might become?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `It has the power to grow into an oak.`,
              correct: false,
              feedback: `That's a real capacity of the acorn — important, and we'll name it soon. But you're after the description of what it actually <em>is</em> right now, not what it can do.`,
            },
            {
              id: `b`,
              text: `It is an acorn — small, hard, here on the ground.`,
              correct: true,
              feedback: `Yes. The other options all describe real capacities — things the acorn can genuinely do or become. But "it is an acorn, right now" names what it actually is at this moment. Two different things, and both real.`,
            },
            {
              id: `c`,
              text: `It will one day produce hundreds of acorns itself.`,
              correct: false,
              feedback: `A real future capacity — something the acorn can genuinely do. But you're after what it actually <em>is</em> right now, not what it might become.`,
            },
            {
              id: `d`,
              text: `It could become firewood instead.`,
              correct: false,
              feedback: `Also a real capacity — the acorn could become firewood. But you're after what it actually <em>is</em> right now.`,
            }
            ],
          },
        },
        {
          id: `m0-l2-q3`,
          type: "mcq",
          stem: `The "can-be" — a thing's capacity, its readiness for something — has a Latin name. Which pairing is correct?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The "can-be" = <span class="lat">potentia</span>`,
              correct: true,
              feedback: `<span class="lat">Potentia</span> — potency, capacity, readiness-for-something. Not mere abstract possibility, but a real feature of the thing: what it can genuinely do or become given its nature. The match has <span class="lat">potentia</span> for fire. The acorn has <span class="lat">potentia</span> for becoming an oak.`,
            },
            {
              id: `b`,
              text: `The "can-be" = <span class="lat">actus</span>`,
              correct: false,
              feedback: `<span class="lat">Actus</span> is the other half — what something actually is right now. The "can-be" is <span class="lat">potentia</span>.`,
            },
            {
              id: `c`,
              text: `The "can-be" = <span class="lat">essentia</span>`,
              correct: false,
              feedback: `<span class="lat">Essentia</span> was Lesson 1 — what a thing <em>is</em> in kind. The word for what it <em>can be</em> is <span class="lat">potentia</span>. Different question.`,
            }
            ],
          },
        },
        {
          id: `m0-l2-q4`,
          type: "mcq",
          stem: `And the "is-right-now" — what something actually and fully is at this moment — is called?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `<span class="lat">potentia</span>`,
              correct: false,
              feedback: `<span class="lat">Potentia</span> is the capacity, the "can-be." You're after the word for what something fully, actually <em>is</em> right now. That's the other half.`,
            },
            {
              id: `b`,
              text: `<span class="lat">actus</span>`,
              correct: true,
              feedback: `<span class="lat">Actus</span> — act, actuality. What is fully there, fully realized, right now. The burning match is in <span class="lat">actus</span> as fire. Notice: <span class="lat">actus</span> doesn't merely mean "action" — it means the thing having fully arrived at what it is. The opposite of potency.`,
            },
            {
              id: `c`,
              text: `<span class="lat">esse</span>`,
              correct: false,
              feedback: `<span class="lat">Esse</span> is the act of existing itself — from Lesson 1. <span class="lat">Actus</span> is broader: the full realization of what something is right now, not just that it exists at all.`,
            }
            ],
          },
        },
        {
          id: `m0-l2-q5`,
          type: "mcq",
          stem: `A block of marble can be carved into a statue. Right now it is a block. Which sentence is correct?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The marble has <span class="lat">potentia</span> for being a statue; it is in <span class="lat">actus</span> as a block.`,
              correct: true,
              feedback: `Exactly. The marble is fully, actually there as a block — that is its <span class="lat">actus</span> right now. And it genuinely can become a statue — that is its <span class="lat">potentia</span>. Both are real. Neither is imaginary.`,
            },
            {
              id: `b`,
              text: `The marble has <span class="lat">actus</span> for being a statue; it is in <span class="lat">potentia</span> as a block.`,
              correct: false,
              feedback: `Switched. <span class="lat">Potentia</span> is the capacity, the "can-be." <span class="lat">Actus</span> is the "is-right-now." The block is in <span class="lat">actus</span> as a block — not in <span class="lat">potentia</span> as one.`,
            },
            {
              id: `c`,
              text: `The marble has <span class="lat">potentia</span> for being a statue and is already in <span class="lat">actus</span> as a statue.`,
              correct: false,
              feedback: `Not yet — the marble is in <span class="lat">actus</span> as a block. The statue is what it has <span class="lat">potentia</span> for. Once carved, the statue will be the <span class="lat">actus</span>; any further capacity for change will be new <span class="lat">potentia</span>.`,
            },
            {
              id: `d`,
              text: `The marble has neither <span class="lat">potentia</span> nor <span class="lat">actus</span> until the sculptor works on it.`,
              correct: false,
              feedback: `The marble has real <span class="lat">potentia</span> right now — built into what marble is. And it is in <span class="lat">actus</span> as a block right now. Both are real before the sculptor touches it. The sculptor doesn't create the capacity; he exercises it.`,
            }
            ],
          },
        },
        {
          id: `m0-l2-q6`,
          type: "mcq",
          stem: `Last one. Which sentence uses <span class="lat">potentia</span> and <span class="lat">actus</span> correctly?`,
          latin_tag: `potentia  ·  actus`,
          doctrine_line: `Lesson 2 of 7 complete · Five more before the seven doors open.`,
          lesson_complete: true,
          payload: {
            options: [
            {
              id: `a`,
              text: `Cold water is in <span class="lat">actus</span> as cold right now; it has <span class="lat">potentia</span> to be heated.`,
              correct: true,
              feedback: `Yes. Cold water is actually cold — that is its <span class="lat">actus</span>. And it genuinely can be heated — that is its <span class="lat">potentia</span>. Every change in the world runs through this pair: a real capacity meeting a real present state. Thomas uses <span class="lat">potentia</span> and <span class="lat">actus</span> to explain motion, causality, and finally the divine nature itself.`,
            },
            {
              id: `b`,
              text: `Cold water is in <span class="lat">potentia</span> as cold right now; it has <span class="lat">actus</span> to be heated.`,
              correct: false,
              feedback: `Switched. What something <em>is</em> right now is <span class="lat">actus</span>. What it can become is <span class="lat">potentia</span>. The cold is what the water actually is; being heated is what it has the capacity for.`,
            },
            {
              id: `c`,
              text: `<span class="lat">Potentia</span> and <span class="lat">actus</span> are just other words for <span class="lat">essentia</span> and <span class="lat">esse</span>.`,
              correct: false,
              feedback: `Different pair entirely. <span class="lat">Essentia</span> and <span class="lat">esse</span> are from Lesson 1 — what something is, and that it is. <span class="lat">Potentia</span> and <span class="lat">actus</span> are a new cut: what something can be, and what it is right now. The tradition holds all four together.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m0-l3`,
      num: `III`,
      title: `Real Things`,
      latin: `res / distinctio realis`,
      tag: `res  ·  distinctio realis`,
      fin: {
        tag: `res  ·  distinctio realis`,
        heading: `Not everything the mind can distinguish is distinguished in the thing.`,
        body: `A real distinction holds independently of whether any mind ever notices it. A notional distinction is the mind’s own construction — useful, sometimes necessary, never to be confused with the real article. The <em>esse</em>/<em>essentia</em> distinction in creatures is real; in God, it is not. Much of later Thomistic argument hangs on getting this diagnostic right before anything else.`,
      },
      questions: [
        {
          id: `m0-l3-q1`,
          type: "mcq",
          stem: `The tree outside your window stands there whether or not you are looking at it. Your idea of the tree only exists while you are thinking it. Which one has being independently of any mind?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Your idea of the tree.`,
              correct: false,
              feedback: `The idea lives precisely in your thinking of it. Stop thinking, and the idea stops. The tree keeps standing.`,
            },
            {
              id: `b`,
              text: `The tree outside.`,
              correct: true,
              feedback: `Yes. The tree stands whether anyone notices it or not. Your idea of it borrows its existence from your act of thinking — stop thinking, and the idea stops. The tree doesn't. Two very different kinds of "thing."`,
            },
            {
              id: `c`,
              text: `Both are exactly the same kind of thing.`,
              correct: false,
              feedback: `They're not. One has its being on its own. The other has its being only while being thought. That gap will turn out to matter enormously.`,
            }
            ],
          },
        },
        {
          id: `m0-l3-q2`,
          type: "mcq",
          stem: `You notice that the coffee cup and the pen on your desk are both small, both here, both yours. The "similarity" you just noticed — where does it exist?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `In your mind, holding the two objects together and comparing them.`,
              correct: true,
              feedback: `Exactly. The cup and the pen are genuinely there on the desk. But "their similarity" only comes into being when a mind holds them together and notices it. Remove the observer, and the similarity vanishes — even though both objects remain exactly as they were.`,
            },
            {
              id: `b`,
              text: `In the objects themselves, independent of any comparison.`,
              correct: false,
              feedback: `The objects are real, yes. But "their similarity" requires a mind to hold them together. The cup and the pen don't compare themselves.`,
            },
            {
              id: `c`,
              text: `It doesn't exist at all.`,
              correct: false,
              feedback: `It does exist — but only in your thinking. That's the point: some things have a real but mind-dependent existence. Not nothing, but not independent either.`,
            }
            ],
          },
        },
        {
          id: `m0-l3-q3`,
          type: "mcq",
          stem: `The Latin word for a real thing — something with being of its own, independent of any mind thinking it — is?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `<span class="lat">res</span>`,
              correct: true,
              feedback: `<span class="lat">Res</span> — thing, reality. A <span class="lat">res</span> has its being on its own, not borrowed from any mind. The tree is a <span class="lat">res</span>. The stone is a <span class="lat">res</span>. The "similarity" you noticed between the cup and the pen is not — it lives only in the comparison.`,
            },
            {
              id: `b`,
              text: `<span class="lat">actus</span>`,
              correct: false,
              feedback: `<span class="lat">Actus</span> is from Lesson 2 — what something fully is right now. The word for a real thing, something with being of its own, is <span class="lat">res</span>.`,
            },
            {
              id: `c`,
              text: `<span class="lat">esse</span>`,
              correct: false,
              feedback: `<span class="lat">Esse</span> is the act of existing — close, but it names the act, not the thing that has it. <span class="lat">Res</span> names the reality: the thing that stands on its own.`,
            }
            ],
          },
        },
        {
          id: `m0-l3-q4`,
          type: "mcq",
          stem: `When two things are genuinely different in reality itself — not just divided by how the mind is looking at them — the tradition calls this a?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Distinctio rationis — a distinction of reason, in the mind only.`,
              correct: false,
              feedback: `That's the other kind — a distinction that only exists in the mind's way of approaching one thing. You're after the kind that holds in reality itself, before any mind arrives.`,
            },
            {
              id: `b`,
              text: `<span class="lat">Distinctio realis</span> — a real distinction, in the thing itself.`,
              correct: true,
              feedback: `<span class="lat">Distinctio realis</span> — a real distinction. It holds in the thing itself, not only in how we think about it. Heat and light from a flame are really distinct: two genuinely different realities, not just two ways the mind divides one thing. This will matter enormously when we ask whether <span class="lat">essentia</span> and <span class="lat">esse</span> are really distinct in creatures.`,
            },
            {
              id: `c`,
              text: `It doesn't matter — a distinction is a distinction.`,
              correct: false,
              feedback: `It matters enormously. A real distinction means two genuinely different realities. A logical distinction means one reality the mind is approaching from two angles. Confusing them is one of the most consequential mistakes in the tradition — and outside it.`,
            }
            ],
          },
        },
        {
          id: `m0-l3-q5`,
          type: "mcq",
          stem: `A flame produces both heat and light. Are heat and light really distinct — or is this only a distinction the mind is making?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Really distinct — heat and light are genuinely different realities, even in the same flame.`,
              correct: true,
              feedback: `Yes. You can have heat without light — a heated iron rod glows red before it emits visible light. You can have light without heat — a cold LED. If they were really one thing, you could not separate them even in principle. They can be separated, so the distinction holds in reality itself.`,
            },
            {
              id: `b`,
              text: `A distinction of reason only — really one thing, divided by the mind.`,
              correct: false,
              feedback: `Test it: can you have heat without light? Yes — a heated iron rod. Light without heat? Yes — a cold LED. If they were really one thing, you could not have one without the other even in principle. You can. So the distinction is real, not just mental.`,
            },
            {
              id: `c`,
              text: `It depends on whether anyone is observing the flame.`,
              correct: false,
              feedback: `The distinction between heat and light doesn't require an observer. It holds in the things themselves — which is precisely what makes it a <span class="lat">distinctio realis</span>.`,
            }
            ],
          },
        },
        {
          id: `m0-l3-q6`,
          type: "mcq",
          stem: `Last one. A philosopher defines a human being as a "rational animal." He then says the same person is a "human being." Is the distinction between "rational animal" and "human being" real — or only in the mind?`,
          latin_tag: `res  ·  distinctio realis`,
          doctrine_line: `Lesson 3 of 7 complete · Four more before the seven doors open.`,
          lesson_complete: true,
          payload: {
            options: [
            {
              id: `a`,
              text: `Real distinction — "rational animal" and "human being" are two different things in the person.`,
              correct: false,
              feedback: `Try to separate them in reality: is there a "human being" here without a "rational animal"? No — they are the same thing, named twice. A <span class="lat">distinctio realis</span> requires two genuinely different realities that could, at least in principle, be separated. These cannot be. The distinction lives entirely in how the mind is approaching one reality.`,
            },
            {
              id: `b`,
              text: `Distinction of reason — one reality, approached from two conceptual angles.`,
              correct: true,
              feedback: `Respondeo: a <span class="lat">distinctio rationis</span> — and the cleanest possible example of one. "Rational animal" (genus + differentia) and "human being" (species name) pick out precisely the same essence from two different angles of the mind's approach. No new reality appears. No real separation is possible. The distinction is entirely in the concepts, not in the thing. Holding this line — knowing when a distinction is real and when it is only mental — opens the door to every precise argument in the tradition.`,
            },
            {
              id: `c`,
              text: `We cannot know without more information about this particular person.`,
              correct: false,
              feedback: `The question is not about this particular person's characteristics — it is about the concepts "rational animal" and "human being" and whether they pick out different realities or the same one approached twice. That we can determine by analysis alone, with no further information needed.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m0-l4`,
      num: `IV`,
      title: `The Four Causes`,
      latin: `causa materialis, formalis, efficiens, finalis`,
      tag: `causa materialis  ·  formalis  ·  efficiens  ·  finalis`,
      fin: {
        tag: `causa materialis  ·  formalis  ·  efficiens  ·  finalis`,
        heading: `One question — <em>Why?</em> — and four answers that cannot be reduced to one.`,
        body: `Modern science narrowed causation to the efficient cause: the push. Aquinas retained all four because reality insisted on it — the stuff something is made of, the form that makes it this thing, the agent that brought it about, and the end toward which it acts. Lose the final cause and you lose the ability to say what anything is <em>for.</em> Most of the modern confusion about nature, ethics, and technology is precisely that loss.`,
      },
      questions: [
        {
          id: `m0-l4-q1`,
          type: "mcq",
          stem: `Someone asks: <em>"Why is this table here?"</em> Here are four real answers — each a kind of <em>why</em>:<br><br>·  What is it made of?<br>·  What shape or design makes it a table?<br>·  Who built it?<br>·  What is it for?<br><br>Which sentence best describes these four answers, taken together?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `They all answer the same question, just in different words.`,
              correct: false,
              feedback: `But they don't. "Made of" is not a synonym for "designed as"; "who built it" is not a synonym for "what it is for." They are four different questions hiding inside a single <em>why</em>. That difference is the lesson.`,
            },
            {
              id: `b`,
              text: `They each point at a real but different feature of the table.`,
              correct: true,
              feedback: `Right. Aristotle's insight is that <em>why</em> is not one question. It is at least four — the material, the form, the maker, the purpose. Each is a real answer; none reduces to the others. The next questions will give them their proper names.`,
            },
            {
              id: `c`,
              text: `Only one is a real "why"; the other three are different questions in disguise.`,
              correct: false,
              feedback: `That is the modern habit — reducing <em>why</em> to a single kind, usually efficient cause ("who or what made it"). The Aristotelian move is the opposite: <em>all four</em> are real kinds of <em>why</em>, and confusing them produces confusing answers.`,
            },
            {
              id: `d`,
              text: `Three are "whys" the table itself can answer; the fourth requires a person.`,
              correct: false,
              feedback: `An interesting cut, but the wrong one. "Who built it" is no more about a person than "what is it for" is — both name a feature of the table-being-a-table (its maker, its purpose). All four answers describe the table in different ways. There is no clean three-and-one split here.`,
            }
            ],
          },
        },
        {
          id: `m0-l4-q2`,
          type: "mcq",
          stem: `"Why is this a table?" — "Because it is made of oak." That answer is giving the…`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The stuff it is made from — the material cause.`,
              correct: true,
              feedback: `Right. The material cause answers "what is it made of?" — the underlying stuff that receives the form. Oak, bronze, flesh, marble. Remove the material and the thing does not exist; but the material alone does not explain the shape or the purpose.`,
            },
            {
              id: `b`,
              text: `The shape or design that makes it a table — the formal cause.`,
              correct: false,
              feedback: `The formal cause would answer "what makes it <em>this kind</em> of thing?" — the design, the structure, the defining shape. "It is made of oak" is answering a different question: what is the underlying stuff?`,
            },
            {
              id: `c`,
              text: `The carpenter who built it — the efficient cause.`,
              correct: false,
              feedback: `The efficient cause would name the maker — the agent who acted on the material. "It is made of oak" is naming the material itself, not the maker.`,
            },
            {
              id: `d`,
              text: `The purpose it was built for — the final cause.`,
              correct: false,
              feedback: `The final cause would answer "what is it <em>for</em>?" — the end or purpose. "It is made of oak" names the stuff, not the purpose.`,
            }
            ],
          },
        },
        {
          id: `m0-l4-q3`,
          type: "mcq",
          stem: `"Why is this a table and not a pile of wood?" — "Because it has the structure, the legs, the flat surface — the design that makes it a table." That is the…`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Material cause — the stuff it is made from.`,
              correct: false,
              feedback: `The material cause is the oak itself. "The structure that makes it a table" is not the stuff — it is the organizing principle, the form, that turns the stuff into <em>this kind</em> of thing.`,
            },
            {
              id: `b`,
              text: `Formal cause — the structure or form that makes it what it is.`,
              correct: true,
              feedback: `Yes. The formal cause answers "what makes this <em>this kind</em> of thing rather than another?" The form is the organizing principle — the shape, structure, or essence — that specifies the material and turns a pile of oak into a table. <span class="lat">Forma dat esse</span>: form gives being. That phrase will appear again.`,
            },
            {
              id: `c`,
              text: `Efficient cause — the carpenter who built it.`,
              correct: false,
              feedback: `The efficient cause is the agent who acted — the carpenter. "The design that makes it a table" is not the agent; it is the principle the agent imposed on the material.`,
            },
            {
              id: `d`,
              text: `Final cause — the purpose it serves.`,
              correct: false,
              feedback: `The final cause is the end or purpose — what the table is <em>for</em>. The formal cause is what makes it <em>be</em> a table, not what it is used for.`,
            }
            ],
          },
        },
        {
          id: `m0-l4-q4`,
          type: "mcq",
          stem: `"Why does this table exist?" — "Because a carpenter shaped the oak into it." The carpenter is the…`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Material cause.`,
              correct: false,
              feedback: `The material cause is the oak. The carpenter is not what the table is made <em>of</em> — the carpenter is what acted on the material to bring the table into being.`,
            },
            {
              id: `b`,
              text: `Formal cause.`,
              correct: false,
              feedback: `The formal cause is the design — the structure that makes it a table. The carpenter imposed that form but is not the form itself.`,
            },
            {
              id: `c`,
              text: `Efficient cause — the agent that brought it into being.`,
              correct: true,
              feedback: `The efficient cause is the agent — the thing that acts and produces the effect. The carpenter works on oak and produces a table. In later lessons, the efficient cause becomes the key to asking about God: is there a first uncaused cause? That question runs through this one.`,
            },
            {
              id: `d`,
              text: `Final cause.`,
              correct: false,
              feedback: `The final cause is the purpose — what the table is built <em>for</em>. The carpenter is the one who acts to produce the table, not the purpose of the table.`,
            }
            ],
          },
        },
        {
          id: `m0-l4-q5`,
          type: "mcq",
          stem: `"Why did the carpenter build the table?" — "To have a surface to work on." The purpose, the end — that is the…`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Material cause.`,
              correct: false,
              feedback: `The material cause is the oak. "To have a surface to work on" is not the stuff — it is the end, the purpose that directed the whole action.`,
            },
            {
              id: `b`,
              text: `Formal cause.`,
              correct: false,
              feedback: `The formal cause is the structure that makes it a table. The end — what it is <em>for</em> — is a different kind of answer entirely.`,
            },
            {
              id: `c`,
              text: `Efficient cause.`,
              correct: false,
              feedback: `The efficient cause is the carpenter — the agent who acted. "To have a surface to work on" is not the agent; it is the purpose the agent was aiming at.`,
            },
            {
              id: `d`,
              text: `Final cause — the end or purpose the thing is ordered toward.`,
              correct: true,
              feedback: `The final cause is the end — the <span class="lat">finis</span>, the purpose or goal that the agent acts <em>for</em>. Thomas holds that every agent acts for an end; purposeless action is not action but accident. The final cause is arguably the most important of the four — it is the cause of the causes, since the end is what sets the other three in motion.`,
            }
            ],
          },
        },
        {
          id: `m0-l4-q6`,
          type: "mcq",
          stem: `Now the Latin. Match the four causes to their names. Which pairing is correct?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Stuff = <span class="lat">causa finalis</span> · Form = <span class="lat">causa efficiens</span> · Maker = <span class="lat">causa materialis</span> · Purpose = <span class="lat">causa formalis</span>`,
              correct: false,
              feedback: `Completely shuffled. Take them one at a time: <span class="lat">causa materialis</span> is the material (the stuff). <span class="lat">causa formalis</span> is the form (what makes it this kind of thing). <span class="lat">causa efficiens</span> is the efficient cause (the maker). <span class="lat">causa finalis</span> is the final cause (the purpose).`,
            },
            {
              id: `b`,
              text: `Stuff = <span class="lat">causa materialis</span> · Form = <span class="lat">causa formalis</span> · Maker = <span class="lat">causa efficiens</span> · Purpose = <span class="lat">causa finalis</span>`,
              correct: true,
              feedback: `Four Latin names, four kinds of "why." <span class="lat">Causa materialis</span>: the underlying stuff. <span class="lat">Causa formalis</span>: the organizing principle. <span class="lat">Causa efficiens</span>: the agent that produces. <span class="lat">Causa finalis</span>: the end it is ordered toward. Every causal explanation in the tradition sorts into one of these four.`,
            },
            {
              id: `c`,
              text: `Stuff = <span class="lat">causa formalis</span> · Form = <span class="lat">causa materialis</span> · Maker = <span class="lat">causa finalis</span> · Purpose = <span class="lat">causa efficiens</span>`,
              correct: false,
              feedback: `Material and formal are swapped, and efficient and final are swapped. The material cause is the <em>stuff</em>; the formal cause is the <em>organizing principle</em> imposed on it.`,
            },
            {
              id: `d`,
              text: `Stuff = <span class="lat">causa materialis</span> · Form = <span class="lat">causa formalis</span> · Maker = <span class="lat">causa finalis</span> · Purpose = <span class="lat">causa efficiens</span>`,
              correct: false,
              feedback: `Two right, two swapped. <span class="lat">Causa materialis</span> and <span class="lat">causa formalis</span> you have. But the maker is <span class="lat">causa efficiens</span> — the agent that produces — and the purpose is <span class="lat">causa finalis</span> — the end it is ordered toward. Don't let the verbal echo between <em>efficiens</em> and <em>finalis</em> obscure which is which.`,
            }
            ],
          },
        },
        {
          id: `m0-l4-q7`,
          type: "mcq",
          stem: `Last one. A bird builds a nest: twigs and leaves are woven into a bowl shape, by the bird, to shelter eggs. Assign each element to its cause.`,
          latin_tag: `causa materialis  ·  formalis  ·  efficiens  ·  finalis`,
          doctrine_line: `Lesson 4 of 7 complete · Three more before the seven doors open.`,
          lesson_complete: true,
          payload: {
            options: [
            {
              id: `a`,
              text: `Twigs and leaves = formal · Bowl shape = material · Bird = final · Shelter eggs = efficient.`,
              correct: false,
              feedback: `Everything is shuffled. The twigs and leaves are the <em>stuff</em> — that is the material cause. The bowl shape is the organizing principle — the formal cause. The bird is the agent — the efficient cause. Sheltering eggs is the purpose — the final cause.`,
            },
            {
              id: `b`,
              text: `Twigs and leaves = material · Bowl shape = formal · Bird = efficient · Shelter eggs = final.`,
              correct: true,
              feedback: `All four in one image: <span class="lat">causa materialis</span> (the twigs), <span class="lat">causa formalis</span> (the bowl structure), <span class="lat">causa efficiens</span> (the bird that acts), <span class="lat">causa finalis</span> (the end it is ordered to). Notice that the final cause — sheltering eggs — is what set the whole thing in motion. The end is first in intention, last in execution.`,
            },
            {
              id: `c`,
              text: `Twigs and leaves = efficient · Bowl shape = final · Bird = material · Shelter eggs = formal.`,
              correct: false,
              feedback: `The bird is not the material — the bird is the <em>agent</em>, the efficient cause. The twigs and leaves are the material. The bowl shape is the form. Sheltering eggs is the end.`,
            },
            {
              id: `d`,
              text: `Twigs and leaves = formal · Bowl shape = material · Bird = efficient · Shelter eggs = final.`,
              correct: false,
              feedback: `Right on the bird and the eggs — the bird is the <span class="lat">causa efficiens</span> (the agent), and sheltering eggs is the <span class="lat">causa finalis</span> (the end). But the inert principles are swapped: twigs and leaves are the <em>stuff</em> (<span class="lat">causa materialis</span>), and the bowl shape is the <em>organizing principle</em> (<span class="lat">causa formalis</span>), not the other way around. Stuff doesn't organize itself into a bowl; that's what form does.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m0-l5`,
      num: `V`,
      title: `Matter and Form`,
      latin: `materia / forma`,
      tag: `materia  ·  forma`,
      fin: {
        tag: `materia  ·  forma`,
        heading: `A body is never bare matter — it is always already <em>this kind</em> of thing.`,
        body: `Matter is pure potency: the sheer capacity to receive form, without any of its own. Form is the act that makes a body what it is. Neither subsists without the other in natural things; you can separate them in the mind, but doing so in reality dissolves the substance. This is hylomorphism — Aristotle’s insight, refined by Aquinas into a precise instrument for every argument about bodies, souls, and sacraments.`,
      },
      questions: [
        {
          id: `m0-l5-q1`,
          type: "mcq",
          stem: `A sculptor starts with a block of marble. He carves it into a figure of a man. Later another sculptor chips it into a fish. Through every stage — rough block, man, fish — what remains constant?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The shape of the sculpture.`,
              correct: false,
              feedback: `That changed entirely — man became fish. You're after what persisted through every change, indifferent to the shape imposed on it.`,
            },
            {
              id: `b`,
              text: `The marble itself.`,
              correct: true,
              feedback: `The marble is there before any shape, through every shape, after every shape. The shape comes and goes; the marble persists. That persistence is the first clue that two different principles are at work — the stuff, and the organizing of it.`,
            },
            {
              id: `c`,
              text: `The sculptor's intention.`,
              correct: false,
              feedback: `The sculptor's intention is a real cause — but not what remains in the marble when the sculptor leaves. You're after what's in the sculpture itself: the marble, not the plan.`,
            }
            ],
          },
        },
        {
          id: `m0-l5-q2`,
          type: "mcq",
          stem: `Here are two things: (1) the lumber that makes up a chair, and (2) the arrangement — the back, the seat, the legs, the joinery — that makes the lumber fit for sitting. Are these two things the same thing said twice, or genuinely different?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The same thing said twice — wood is wood, chair is just a word for some wood.`,
              correct: false,
              feedback: `Then why is a pile of lumber not a chair? The pile has the same wood. Something is genuinely missing — not more wood, but a principle of organization that makes the wood be what it is.`,
            },
            {
              id: `b`,
              text: `Genuinely different — the stuff and the organizing structure are distinct principles.`,
              correct: true,
              feedback: `Yes. The stuff can exist without the structure (a timber yard full of lumber), and the structure can be destroyed while the same stuff persists (a fire produces ash from the same wood). Two distinct principles, both real.`,
            },
            {
              id: `c`,
              text: `One is important (the structure), the other is irrelevant — you can ignore the material.`,
              correct: false,
              feedback: `You cannot have the structure floating free of any material. The form without matter would not be a chair — it would be a mathematical idea of a chair. In physical things, you need both.`,
            }
            ],
          },
        },
        {
          id: `m0-l5-q3`,
          type: "mcq",
          stem: `The underlying stuff — the marble, the lumber, the clay — that can receive any number of different shapes: this has a Latin name. Which?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `<span class="lat">materia</span>`,
              correct: true,
              feedback: `<span class="lat">Materia</span> — matter, the underlying stuff. Not matter in the modern physicist's sense of "tiny particles," but the metaphysical principle: the substratum that persists through change and receives form. The clay has <span class="lat">materia</span>; the bowl-shape is what comes over it.`,
            },
            {
              id: `b`,
              text: `<span class="lat">forma</span>`,
              correct: false,
              feedback: `<span class="lat">Forma</span> is the other half — the organizing structure that makes a thing be this kind of thing. The underlying stuff that receives the form is <span class="lat">materia</span>.`,
            },
            {
              id: `c`,
              text: `<span class="lat">potentia</span>`,
              correct: false,
              feedback: `Close in spirit — <span class="lat">potentia</span> (Lesson 2) names a thing's capacity for change. <span class="lat">Materia</span> is related but more specific: it's the underlying stuff itself. The marble's capacity to receive shapes is its <span class="lat">potentia</span>; the marble is the <span class="lat">materia</span>.`,
            }
            ],
          },
        },
        {
          id: `m0-l5-q4`,
          type: "mcq",
          stem: `And the organizing principle — the structure that makes this lump of matter be a horse, a ship, a man — the intelligible shape that determines what kind of thing it is:`,
          payload: {
            options: [
            {
              id: `a`,
              text: `That is <span class="lat">materia</span>.`,
              correct: false,
              feedback: `<span class="lat">Materia</span> is the stuff. The principle that organizes the stuff into this kind of thing is its other half.`,
            },
            {
              id: `b`,
              text: `That is <span class="lat">forma</span>.`,
              correct: true,
              feedback: `<span class="lat">Forma</span> — form. Not merely a visual shape, but the organizing principle that makes matter be this kind of thing. The horse-form makes this matter be a horse. Without it you have matter, but no horse. Thomas borrowed the word from Aristotle and never gave it back.`,
            },
            {
              id: `c`,
              text: `That is <span class="lat">causa</span>.`,
              correct: false,
              feedback: `<span class="lat">Causa</span> (Lesson 4) named the four kinds of "why." The organizing principle inside a thing — what makes this matter be this kind of thing — is <span class="lat">forma</span>.`,
            }
            ],
          },
        },
        {
          id: `m0-l5-q5`,
          type: "mcq",
          stem: `A chunk of iron is smelted and forged into a sword. Apply the distinction. What has changed, and what has stayed the same?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The <span class="lat">materia</span> (iron) changed; the <span class="lat">forma</span> (structure) stayed the same.`,
              correct: false,
              feedback: `Reversed. The iron persists through the forge — the smelting does not create new iron. What changed is what the iron is organized into: from raw-iron-form to sword-form.`,
            },
            {
              id: `b`,
              text: `The <span class="lat">materia</span> (iron) persisted; a new <span class="lat">forma</span> (sword-structure) was imposed on it.`,
              correct: true,
              feedback: `Exactly. The iron is there before and after the forge. The form — what the iron is organized into — is new. This is the classic account of substantial change: same matter, new form.`,
            },
            {
              id: `c`,
              text: `Both <span class="lat">materia</span> and <span class="lat">forma</span> changed entirely — a wholly new thing appeared.`,
              correct: false,
              feedback: `If entirely new matter appeared from nothing, that would be creation ex nihilo — reserved for God. The forge works with the iron that is already there. The <span class="lat">materia</span> persists; only the <span class="lat">forma</span> is new.`,
            }
            ],
          },
        },
        {
          id: `m0-l5-q6`,
          type: "mcq",
          stem: `Thomas holds that every bodily creature is a composite of <span class="lat">materia</span> and <span class="lat">forma</span>. This oak tree is this particular matter (these fibers, this sap) organized by oak-form. If the <span class="lat">forma</span> were entirely removed — if the oak-form ceased — what would remain?`,
          latin_tag: `materia  ·  forma`,
          doctrine_line: `Lesson 5 of 7 complete · Two more before the seven doors open.`,
          lesson_complete: true,
          payload: {
            options: [
            {
              id: `a`,
              text: `A simpler kind of tree.`,
              correct: false,
              feedback: `Any tree at all requires some form of tree. Without <span class="lat">forma</span>, you don't get a simpler organism — you lose the organism entirely.`,
            },
            {
              id: `b`,
              text: `Undifferentiated matter — no longer an oak or anything determinate.`,
              correct: true,
              feedback: `Respondeo: it is the <span class="lat">materia</span> alone — matter without form, pure potentiality, no longer organized into any kind of thing. This is what Thomas calls <em>materia prima</em>: not nothing, but nothing determinate. Form is what makes matter be something.  Opens the door to the Act of Creation and the intelligibility of natural kinds.`,
            },
            {
              id: `c`,
              text: `The pure <span class="lat">esse</span> of the oak, free of material limits.`,
              correct: false,
              feedback: `<span class="lat">Esse</span> (Lesson 1) is the act of existence — a different cut entirely. Removing <span class="lat">forma</span> from a material thing does not leave <span class="lat">esse</span> behind; it leaves undifferentiated <span class="lat">materia</span>.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m0-l6`,
      num: `VI`,
      title: `Substance and Accident`,
      latin: `substantia / accidens`,
      tag: `substantia  ·  accidens`,
      fin: {
        tag: `substantia  ·  accidens`,
        heading: `A substance is what a thing <em>is;</em> an accident is what it happens to <em>have.</em>`,
        body: `Substance subsists in itself; accidents inhere in substance as their subject. Socrates is pale, tall, seated — none of that is Socrates, but all of it belongs to him. The distinction sounds harmless until you need it for the harder cases: soul and body, person and nature, the Eucharist. Keep it sharp.`,
      },
      questions: [
        {
          id: `m0-l6-q1`,
          type: "mcq",
          stem: `Socrates is a man. He is also pale, seated, in Athens, and moderately pleased with himself this morning. Tomorrow he may be tanned, standing, in Corinth, and considerably less pleased. Through all these changes, Socrates remains Socrates. What kind of changes are the second set?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Changes that make Socrates a different kind of being.`,
              correct: false,
              feedback: `A change that makes you a different kind of being is a different and rarer thing — death, for instance, or (in the tradition's boldest claim) a spiritual transformation. Getting a tan is not that.`,
            },
            {
              id: `b`,
              text: `Changes in how Socrates happens to be, without changing what he fundamentally is.`,
              correct: true,
              feedback: `Yes. He's still a man, still Socrates. These changes are real — his pallor is really there — but they belong to him without constituting what he is. They are real features that happen to a substance, not what the substance is.`,
            },
            {
              id: `c`,
              text: `Changes in Socrates's <span class="lat">materia</span> — his body — not his <span class="lat">forma</span>.`,
              correct: false,
              feedback: `Good use of Lesson 5. But the <span class="lat">materia</span>/<span class="lat">forma</span> cut and the distinction we are learning today are different knives. Today's question is not about what Socrates is made of, but about the difference between what he fundamentally <em>is</em> and how he <em>happens</em> to be.`,
            }
            ],
          },
        },
        {
          id: `m0-l6-q2`,
          type: "mcq",
          stem: `Four descriptions of a person. One of them is different in kind — it names what the person fundamentally IS, not how they happen to be. Which?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Being six feet tall.`,
              correct: false,
              feedback: `Height is a real property — and a very constant one — but you could change your height (in principle) without ceasing to be what you are. It belongs to the person; it does not constitute the person.`,
            },
            {
              id: `b`,
              text: `Being currently seated.`,
              correct: false,
              feedback: `This one changes every time you stand up. Clearly a property that belongs to you in this moment without being what you are.`,
            },
            {
              id: `c`,
              text: `Being pale-skinned.`,
              correct: false,
              feedback: `A real feature of this person — but not what they fundamentally are. You're after the description that names what they <em>are</em> in their own right.`,
            },
            {
              id: `d`,
              text: `Being a human being.`,
              correct: true,
              feedback: `Yes. Being a human being is not how this person happens to be at the moment — it is what they are. Lose it and you lose Socrates entirely. The other three are real properties belonging to a substance; this is what the substance is.`,
            }
            ],
          },
        },
        {
          id: `m0-l6-q3`,
          type: "mcq",
          stem: `The fundamental kind of thing a being is — what it is in its own right, not how it happens to be — has a Latin name:`,
          payload: {
            options: [
            {
              id: `a`,
              text: `<span class="lat">accidens</span>`,
              correct: false,
              feedback: `<span class="lat">Accidens</span> (accident) is the other half — the real properties that belong to a thing without constituting what it is. The fundamental kind of being a thing is has a different name.`,
            },
            {
              id: `b`,
              text: `<span class="lat">substantia</span>`,
              correct: true,
              feedback: `<span class="lat">Substantia</span> — substance, from <em>sub-stare</em>, "to stand under." The substance is what stands under all its changing properties, what the thing is in its own right. Every dog is a substance; being brown or tired or hungry are accidents belonging to that substance.`,
            },
            {
              id: `c`,
              text: `<span class="lat">potentia</span>`,
              correct: false,
              feedback: `<span class="lat">Potentia</span> (Lesson 2) is a capacity — what a thing can do or become. The name for what a thing fundamentally <em>is</em>, as distinct from how it happens to be, is <span class="lat">substantia</span>.`,
            }
            ],
          },
        },
        {
          id: `m0-l6-q4`,
          type: "mcq",
          stem: `And the real properties that genuinely belong to a substance — height, color, location, posture, temperature — without constituting what it is:`,
          payload: {
            options: [
            {
              id: `a`,
              text: `These are <span class="lat">substantia</span>.`,
              correct: false,
              feedback: `<span class="lat">Substantia</span> is what a thing is in its own right. These properties are real, but they belong to a substance rather than being what the substance is. They have their own name.`,
            },
            {
              id: `b`,
              text: `These are <span class="lat">accidentia</span>.`,
              correct: true,
              feedback: `<span class="lat">Accidentia</span> — accidents. Not "accidental" in the modern English sense of random or unimportant — accidents can be very stable and deeply characteristic. The word means: a property that belongs to a substance without constituting what that substance is. All nine Aristotelian categories beyond substance (quantity, quality, relation, place, time, posture, condition, action, passivity) are accidents.`,
            },
            {
              id: `c`,
              text: `These are <span class="lat">forma</span>.`,
              correct: false,
              feedback: `<span class="lat">Forma</span> (Lesson 5) is the organizing principle that makes matter be a kind of thing. <span class="lat">Accidentia</span> are real properties belonging to an already-constituted substance — a different level of analysis.`,
            }
            ],
          },
        },
        {
          id: `m0-l6-q5`,
          type: "mcq",
          stem: `A green apple left in the sun turns red. The color has changed. Has the apple ceased to be an apple?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Yes — color is part of what makes it an apple.`,
              correct: false,
              feedback: `Color is a real property of this apple. But apples come green, red, and yellow — the color does not constitute the apple-substance. The change of color is a change in an accident, not in the substance.`,
            },
            {
              id: `b`,
              text: `No — color is an <span class="lat">accidens</span>; the <span class="lat">substantia</span> (apple) persists through the change.`,
              correct: true,
              feedback: `Respondeo: it is a change in <span class="lat">accidens</span>, not <span class="lat">substantia</span>. The substance persists through many accidental changes. This is also why you can identify the same dog over time despite constant changes in weight, color, and temperament — the substance is not dissolved by its accidents.`,
            },
            {
              id: `c`,
              text: `It depends — some color changes destroy a substance, others do not.`,
              correct: false,
              feedback: `Color as such is a quality — an accident. An apple turning red is an accidental change. If the apple decomposed entirely, something more substantial would be at stake — but color change alone does not reach the substance.`,
            }
            ],
          },
        },
        {
          id: `m0-l6-q6`,
          type: "mcq",
          stem: `In the Church's teaching on the Eucharist, the appearances of bread and wine — their size, shape, taste, color — remain after the consecration. But what the elements fundamentally ARE has changed. Using Lesson 6 vocabulary: those remaining appearances are…`,
          latin_tag: `substantia  ·  accidens`,
          doctrine_line: `Lesson 6 of 7 complete · One more — the capstone.`,
          lesson_complete: true,
          payload: {
            options: [
            {
              id: `a`,
              text: `The <span class="lat">substantia</span> of the bread, which has survived.`,
              correct: false,
              feedback: `That is precisely what the Church denies. The whole point of the doctrine is that the <span class="lat">substantia</span> has changed — what remains is something else.`,
            },
            {
              id: `b`,
              text: `The <span class="lat">accidentia</span> of the bread — the real properties that belonged to the bread-substance, now without their original subject.`,
              correct: true,
              feedback: `Respondeo: the appearances are the <span class="lat">accidentia</span> of bread — size, color, taste, texture — real properties that remain. The <span class="lat">substantia</span> has changed: what was bread is now something else entirely. The doctrine uses this distinction with great precision. One more lesson and the seven doors open.`,
            },
            {
              id: `c`,
              text: `The <span class="lat">forma</span> of bread, which the consecration cannot reach.`,
              correct: false,
              feedback: `A form-without-matter would already be something unusual. The tradition's account of the Eucharist goes deeper than <span class="lat">forma</span> alone — it is the <span class="lat">substantia</span> entire that has changed, leaving the <span class="lat">accidentia</span> in place.`,
            }
            ],
          },
        }
      ],
    },
    {
      id: `m0-l7`,
      num: `Cap.`,
      title: `Recapitulatio`,
      latin: `septem distinctiones`,
      tag: `septem distinctiones`,
      fin: {
        tag: `septem distinctiones`,
        heading: `Module 0 complete.`,
        body: `Seven distinctions: esse/essentia, actus/potentia, the real/notional divide, the four causes, materia/forma, substantia/accidens. Aquinas did not invent them; he found them in Aristotle, sharpened them, and turned them into instruments of an argument that spans metaphysics, ethics, sacramental theology, and the nature of God. You now hold the kit. Module 5 builds the logical machinery that runs on top of it.`,
      },
      questions: [
        {
          id: `m0-l7-q1`,
          type: "mcq",
          stem: `Six lessons, six distinctions. Let's find them again. Which Latin pair belongs to Lesson 1 — the question about what a thing IS versus THAT it is?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `<span class="lat">materia</span> / <span class="lat">forma</span>`,
              correct: false,
              feedback: `Those are Lesson 5 — the stuff and the organizing structure of a material thing. You're after the pair that divided the "what" from the "that."`,
            },
            {
              id: `b`,
              text: `<span class="lat">essentia</span> / <span class="lat">esse</span>`,
              correct: true,
              feedback: `Yes. <span class="lat">Essentia</span>: what a thing is — its kind, its nature. <span class="lat">Esse</span>: that it is — the very act of being. The first distinction, and the one that runs deepest through the tradition. Everything else, in a sense, is commentary.`,
            },
            {
              id: `c`,
              text: `<span class="lat">substantia</span> / <span class="lat">accidens</span>`,
              correct: false,
              feedback: `Those are Lesson 6 — the thing itself versus how it happens to be. You're after the pair that divided the "what" (the essence) from the "that" (the act of being).`,
            }
            ],
          },
        },
        {
          id: `m0-l7-q2`,
          type: "mcq",
          stem: `An acorn lying on the ground has never grown into a tree. It is not a tree. Yet it genuinely can become one. This "can-become" is named:`,
          payload: {
            options: [
            {
              id: `a`,
              text: `<span class="lat">actus</span>`,
              correct: false,
              feedback: `<span class="lat">Actus</span> is what the acorn actually is right now — its present state. The "can-become" is its other half.`,
            },
            {
              id: `b`,
              text: `<span class="lat">potentia</span>`,
              correct: true,
              feedback: `<span class="lat">Potentia</span> — potency, capacity, genuine readiness. Not wishful thinking about the acorn, but a real feature of its nature: it is constituted to become an oak. Lesson 2 in brief.`,
            },
            {
              id: `c`,
              text: `<span class="lat">materia</span>`,
              correct: false,
              feedback: `<span class="lat">Materia</span> (Lesson 5) is the underlying stuff — in this case, the physical acorn itself. The capacity to become an oak is its <span class="lat">potentia</span>.`,
            }
            ],
          },
        },
        {
          id: `m0-l7-q3`,
          type: "mcq",
          stem: `Two chemists examine a gold ring. One says: "This is yellow." The other says: "This is gold." Using Lesson 6, how do these two statements relate?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Being yellow is an <span class="lat">accidens</span>; being gold is the <span class="lat">substantia</span>.`,
              correct: true,
              feedback: `Precisely. Gold is the substance — what the ring fundamentally is. Yellow is a real property of this gold, but gold can be found in other colors (white gold, rose gold), and yellow can be found in things that are not gold. The color belongs to the substance; it does not constitute it.`,
            },
            {
              id: `b`,
              text: `Being yellow is the <span class="lat">substantia</span>; being gold is an <span class="lat">accidens</span>.`,
              correct: false,
              feedback: `Reversed. The substance is what the thing fundamentally is — gold. Yellowness is a real property of this gold, but it does not constitute what the metal is. A white gold ring is still gold.`,
            },
            {
              id: `c`,
              text: `Both are <span class="lat">substantia</span> — they're both saying the same fundamental thing.`,
              correct: false,
              feedback: `If they were the same, you could substitute one for the other without loss. But "this is yellow" and "this is gold" answer different questions: one names a quality, the other names what the thing is.`,
            }
            ],
          },
        },
        {
          id: `m0-l7-q4`,
          type: "mcq",
          stem: `A philosopher asks: "Why does the eye see?" There are four real answers hiding in that "why." Which one is the <span class="lat">causa finalis</span> — the answer that names the end or purpose?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Because its tissues are transparent to light.`,
              correct: false,
              feedback: `The material cause — what the eye is made of, which is the right kind of stuff for seeing. A real "why," but not the one about purpose.`,
            },
            {
              id: `b`,
              text: `Because its structure is organized for receiving visual information.`,
              correct: false,
              feedback: `The formal cause — the organization that makes this matter be an eye at all. Also a real "why," but the question asks for the cause that names the end.`,
            },
            {
              id: `c`,
              text: `Because the developing organism produced it.`,
              correct: false,
              feedback: `The efficient cause — the agent that brought the eye into being. Real, but you're after the "why" that looks forward to the eye's function rather than backward to its origin.`,
            },
            {
              id: `d`,
              text: `Because sight is what eyes are for.`,
              correct: true,
              feedback: `The <span class="lat">causa finalis</span> — the final cause, the end or purpose. "The eye sees in order to see" sounds trivial until you notice that modern accounts of biology have quietly restored it: organs have functions, DNA has targets, organisms aim at outcomes. Aristotle has been right all along; the vocabulary just went underground.`,
            }
            ],
          },
        },
        {
          id: `m0-l7-q5`,
          type: "mcq",
          stem: `We learned in Lesson 3 that some distinctions are real (<span class="lat">distinctio realis</span>) and some are only in the mind. Using what we know: is the distinction between a thing's <span class="lat">essentia</span> and its <span class="lat">esse</span> — between what it is and that it is — real or only mental?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `Only mental — the distinction is just a way of talking about the same thing from two angles.`,
              correct: false,
              feedback: `This is a genuine position in the tradition — Scotus and others have argued for it. But in the strict Thomistic line: if the distinction were only mental, every creature would exist necessarily just by having a nature. A unicorn would exist. The real distinction between <span class="lat">essentia</span> and <span class="lat">esse</span> is what makes creatures genuinely contingent.`,
            },
            {
              id: `b`,
              text: `Real — the strict Thomistic position is that <span class="lat">essentia</span> and <span class="lat">esse</span> are really distinct in every creature.`,
              correct: true,
              feedback: `Respondeo: this is the <span class="lat">distinctio realis</span> at the heart of Thomas's metaphysics. Essence is a real positive principle; esse is a real positive act; and they are really distinct — related as potency to act. In God alone are they identical. This is the nerve of the whole system.`,
            },
            {
              id: `c`,
              text: `Neither — Thomas did not hold a clear position on this.`,
              correct: false,
              feedback: `This is one of the places where Thomas is clearest. The real distinction between essence and esse in creatures — and the identity of essence and esse in God — is central to the <em>De Ente et Essentia</em> and the <em>Summa Contra Gentiles</em>.`,
            }
            ],
          },
        },
        {
          id: `m0-l7-q6`,
          type: "mcq",
          stem: `A statue of a horse is melted down and recast as a sword. Using Lesson 5: what changed, what persisted — and what Lesson 2 term names the bronze's capacity to receive either form?`,
          payload: {
            options: [
            {
              id: `a`,
              text: `The <span class="lat">forma</span> changed (horse → sword); the <span class="lat">materia</span> (bronze) persisted; and the bronze's capacity for either form is its <span class="lat">potentia</span>.`,
              correct: true,
              feedback: `Precisely. Three lessons working together: <span class="lat">materia</span> / <span class="lat">forma</span> from Lesson 5, and <span class="lat">potentia</span> from Lesson 2. The bronze is in <span class="lat">potentia</span> to many forms. A particular form actualizes that potency. The forge changes the form; the bronze persists as the underlying matter.`,
            },
            {
              id: `b`,
              text: `The <span class="lat">materia</span> changed; the <span class="lat">forma</span> persisted; the capacity is its <span class="lat">actus</span>.`,
              correct: false,
              feedback: `Both halves are reversed. The bronze (<span class="lat">materia</span>) persists; the shape (<span class="lat">forma</span>) changes. And the capacity to receive either form is <span class="lat">potentia</span>, not <span class="lat">actus</span> — <span class="lat">actus</span> names what the bronze actually is at any given moment.`,
            },
            {
              id: `c`,
              text: `Both <span class="lat">materia</span> and <span class="lat">forma</span> changed; this was a case of creation.`,
              correct: false,
              feedback: `Creation from nothing is a theological category — it requires no pre-existing material at all. The forge works with bronze that already exists. The <span class="lat">materia</span> persists; only the <span class="lat">forma</span> is new.`,
            }
            ],
          },
        },
        {
          id: `m0-l7-q7`,
          type: "mcq",
          stem: `The six distinctions you have learned — <span class="lat">essentia</span>/<span class="lat">esse</span>, <span class="lat">potentia</span>/<span class="lat">actus</span>, <span class="lat">res</span>/<span class="lat">distinctio realis</span>, the four <span class="lat">causae</span>, <span class="lat">materia</span>/<span class="lat">forma</span>, <span class="lat">substantia</span>/<span class="lat">accidens</span> — are all different ways of doing what?`,
          latin_tag: `septem distinctiones`,
          doctrine_line: `Module 0 complete · The seven doors are open.`,
          lesson_complete: true,
          payload: {
            options: [
            {
              id: `a`,
              text: `Dividing things into categories we invented to organize our language.`,
              correct: false,
              feedback: `The Thomistic claim is stronger than that. These distinctions track something real — they are found in the things, not merely imposed on them. The tradition's wager is that the world is intelligible precisely because it has this kind of structure.`,
            },
            {
              id: `b`,
              text: `Seeing the real composition of beings — the principles that make them be what they are.`,
              correct: true,
              feedback: `Respondeo: all six are ways of reading the real structure of things. Not categories we project onto a structureless world, but principles discovered in the world by careful attention. This is the Thomistic realism: the world is intelligible because it really is composed this way. Module 0 complete. Seven doors open. Doors 1 through 17 await.`,
            },
            {
              id: `c`,
              text: `Naming what we cannot know about being — gesturing at a mystery beyond concepts.`,
              correct: false,
              feedback: `The opposite of the Thomistic position. Thomas is an optimist about intellect: the mind can genuinely grasp the real structure of things. The distinctions are not gestures toward darkness; they are the light on the path.`,
            }
            ],
          },
        }
      ],
    }
  ],
};
