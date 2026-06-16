export type QuestionCategory = {
  name: string;
  questions: string[];
};

export const QUESTION_CATEGORIES: QuestionCategory[] = [
  {
    name: "Communication & Understanding",
    questions: [
      "What’s one thing you wish you understood better about me?",
      "How can we improve our communication when we have disagreements?",
      "What are your top three emotional needs, and how can I support them?",
      "What do I do to help you feel appreciated?",
      "What’s one thing you feel we don’t talk about enough?",
      "How do you feel about the amount of quality time we spend together?",
    ],
  },
  {
    name: "Dreams & Aspirations",
    questions: [
      "What are your biggest personal goals right now?",
      "How do you envision our future together in five years?",
      "What’s a dream or passion you’ve always wanted to pursue?",
      "What are some experiences you want us to have together?",
      "How can we support each other’s individual goals?",
      "What are your top five bucket list items?",
    ],
  },
  {
    name: "Relationship & Intimacy",
    questions: [
      "What makes you feel most connected to me?",
      "How can we keep the romance alive in our relationship?",
      "What are your love languages, and how can we incorporate them into our daily lives?",
      "How do you feel about our current level of physical intimacy?",
      "What’s something new you’d like to try together?",
      "How can we make sure we both feel heard and understood?",
    ],
  },
  {
    name: "Conflict Resolution",
    questions: [
      "How do you prefer to handle conflicts when they arise?",
      "What’s the best way for us to cool down when we’re arguing?",
      "How do you feel about seeking outside help, like couples therapy, if needed?",
      "What’s one thing I can do to help resolve conflicts more effectively?",
      "How do you want us to address misunderstandings or miscommunications?",
      "How can we ensure that both of our needs are met when resolving conflicts?",
    ],
  },
  {
    name: "Family & Friends",
    questions: [
      "How important is it for you to spend time with family and friends?",
      "What are your thoughts on how we balance time between our families and ourselves?",
      "How do you feel about the involvement of our families in our relationship?",
      "What role do friends play in our relationship?",
      "How can we ensure that we support each other’s relationships with family and friends?",
      "How do you feel about blending our family traditions together?",
    ],
  },
  {
    name: "Values & Beliefs",
    questions: [
      "What values are most important to you in our relationship?",
      "How do our beliefs influence our relationships and decisions?",
      "What traditions or practices do you want to maintain or start together?",
      "How do we handle disagreements about core values or beliefs?",
      "What’s one belief or value you want to ensure we pass on to future generations?",
      "How important is personal growth and self-improvement to you?",
    ],
  },
  {
    name: "Personal Growth",
    questions: [
      "How do you think we’ve grown as individuals since we’ve been together?",
      "What’s one personal challenge you’re facing right now, and how can I help?",
      "How can we encourage each other’s personal growth and self-improvement?",
      "What’s a skill or hobby you’d like to develop, and how can we support each other in that?",
      "How can we create an environment that fosters personal and relationship growth?",
      "How do you handle setbacks or failures in your pursuit of growth?",
    ],
  },
  {
    name: "Finances & Lifestyle",
    questions: [
      "How do you feel about our current financial situation?",
      "What are your short-term and long-term financial goals?",
      "How do you envision handling finances together in the future?",
      "What’s your ideal work-life balance, and how can we achieve that?",
      "How do you feel about our current lifestyle and living situation?",
      "How do you feel about financial transparency in our relationship?",
    ],
  },
  {
    name: "Daily Life & Routine",
    questions: [
      "What’s one daily routine you’d like us to have together?",
      "How do you feel about the way we manage household responsibilities?",
      "What’s one thing we could do to make our daily lives more enjoyable?",
      "How can we better balance our time between work, home, and leisure?",
      "What’s a small change we could make to improve our daily interactions?",
      "What’s one thing we can do to improve our daily life and routine together?",
    ],
  },
  {
    name: "Fun & Adventure",
    questions: [
      "What’s one adventure or trip you’ve always wanted to take together?",
      "How do you feel about trying new activities or hobbies as a couple?",
      "What’s the most fun we’ve ever had together, and how can we recreate that?",
      "How can we inject more spontaneity into our relationship?",
      "What’s a new tradition or ritual you’d like us to start?",
      "What’s one adventure or fun activity you hope we can experience together in the future?",
    ],
  },
  {
    name: "Emotional Support",
    questions: [
      "How do you prefer to be comforted when you’re feeling down?",
      "What’s the best way for me to show empathy and support when you’re struggling?",
      "How can we improve our emotional support for each other?",
      "What’s one thing I do that makes you feel safe and supported?",
      "How can we ensure that we’re both heard and validated in our relationship?",
      "What can I do to help you feel safe expressing your emotions?",
    ],
  },
  {
    name: "Trust & Security",
    questions: [
      "How can we build and maintain trust in our relationship?",
      "What are your biggest fears or concerns about our relationship?",
      "How do you feel about our level of transparency with each other?",
      "What steps can we take to feel more secure in our relationship?",
      "How can we address any past issues or insecurities that might affect our trust?",
      "What’s one way I could make you feel more secure in our relationship?",
    ],
  },
  {
    name: "Conflict Resolution (Prevention)",
    questions: [
      "What are some ways we can prevent misunderstandings from escalating into conflicts?",
      "How can we make sure that minor issues don’t become major problems?",
      "What strategies can we use to stay calm during disagreements?",
      "How can we address issues before they become sources of conflict?",
      "What’s one thing we can do to create a more positive and supportive environment?",
      "How can we better separate the problem from the person during conflicts?",
    ],
  },
  {
    name: "Shared Goals & Priorities",
    questions: [
      "What are our top three priorities as a couple?",
      "How can we align our individual goals with our shared goals?",
      "What’s one area where we can work together to achieve a common objective?",
      "How do we decide on major life decisions together?",
      "What’s a project or goal we can tackle as a team?",
      "What’s one dream you have for us that we haven’t discussed before?",
    ],
  },
  {
    name: "Recollection & Reflection",
    questions: [
      "What’s your favorite memory of us?",
      "How do you feel our relationship has evolved over time?",
      "What’s one thing you’ve learned about yourself since we’ve been together?",
      "What’s something we’ve accomplished together that you’re proud of?",
      "How can we celebrate our milestones and achievements as a couple?",
      "When did you first realize you were in love with me?",
    ],
  },
  {
    name: "Future Planning",
    questions: [
      "How do you envision our retirement or later years together?",
      "What are your thoughts on having children or expanding our family?",
      "How can we prepare for and handle potential changes in our lives?",
      "What’s one thing we should start doing now to plan for our future?",
      "How do you feel about making long-term plans and commitments?",
      "What adventures or experiences do you want us to share in the future?",
    ],
  },
  {
    name: "Expectations",
    questions: [
      "What do you expect from me in terms of emotional support?",
      "How do you feel about the way we divide household responsibilities?",
      "What are your expectations for how we handle finances together?",
      "How do you feel about the balance of decision-making in our relationship?",
      "What do you expect from me in terms of communication?",
      "What are your expectations for how we continue to grow and evolve as a couple?",
    ],
  },
  {
    name: "Relationship Growth",
    questions: [
      "What’s one thing you’d like to improve about our relationship?",
      "How can we support each other’s emotional well-being?",
      "What are some ways to strengthen our connection and bond?",
      "How can we make time for each other in our busy lives?",
      "What’s one thing we can do to make our relationship more fulfilling?",
      "What are some ways we can keep the romance alive in our relationship?",
    ],
  },
  {
    name: "Enjoyment & Relaxation",
    questions: [
      "How do you like to unwind and relax, and how can we do that together?",
      "What’s one activity that always makes you happy, and can we incorporate it more into our lives?",
      "How can we create more opportunities for laughter and fun?",
      "What’s your idea of a perfect date night or weekend getaway?",
      "How can we make our home a more relaxing and enjoyable place?",
      "What’s one new relaxing activity you’d like to explore together?",
    ],
  },
  {
    name: "Self-Care & Well-being",
    questions: [
      "How can we both prioritize self-care and personal well-being in our relationship?",
      "What’s one way we can support each other’s mental health?",
      "How do you feel about our current work-life balance?",
      "What’s one thing we can do to reduce stress and improve our overall quality of life?",
      "How can we ensure we’re both taking care of ourselves while also taking care of each other?",
      "What’s one change you’d like to make in your self-care routine to enhance your well-being?",
    ],
  },
];
