<script>
    import LearningOutcome from "./LearningOutcome.svelte";

    let myLearningOutcomes = [
        {
            title: "Professional Communication",
            desc: "Demonstrate the ability to understand, analyze, and evaluate information, ideas, and insights from multiple perspectives through written, oral, visual, and electronic means of communication, and explain its significance at an advanced collegiate level. More specifically, graduates should be able to:",
            outcomes: [
                "Receive information, ideas, and arguments through active listening and effective reading skills;",
                "Communicate effectively with a range of audiences through college level writing;",
                "Communicate effectively with a range of audiences through well-organized, precise, and effective oral presentations."
            ]
        },
        {
            title: "User-Centered Design",
            desc: "Demonstrate the systematic application of design principles, tools, user-centered design methodology and processes to develop complex systems that facilitate meaningful interactions. More specifically, graduates should be able to:",
            outcomes: [
                "Apply knowledge of design history, communication theories, and aesthetic principles to solve design problems;",
                "Analyze a problem and identify, define, and implement appropriate solutions;",
                "Design, implement, and evaluate effectiveness and efficiency of a design project to meet desired needs."
            ]
        },
        {
            title: "Computing & Programming",
            desc: "Apply computer programming concepts, tools, and skills to solve communication design problems. More specifically, graduates should be able to:",
            outcomes: [
                "Identify right tools and programming solutions to address design problems;",
                "Design, develop, implement, and evaluate a technology infused design project to meet desired needs;",
                "Evaluate effectiveness and efficiency of a application code."
            ]
        },
        {
            title: "Professional Ethos",
            desc: "Demonstrate professionalism through team work, punctuality, integrity, reliability, and commitment to ethical action through rigorous evaluation from multiple perspectives. More specifically, graduates should be able to:",
            outcomes: [
                "Function effectively on teams with diverse individuals from diverse backgrounds to accomplish a common goal;",
                "Analyze the local and global impact of computing and design on individuals, organizations, community, society, and the world;",
                "Understand and apply professional, ethical, legal, security, and social responsibilities in the service of community, society, and world."
            ]
        },
        {
            title: "Application & Synthesis",
            desc: "Apply core communication design knowledge, theories, methods, and practices to address new and complex real-world challenges and opportunities. More specifically, graduates should be able to:",
            outcomes: [
                "Apply design and development principles, tools, and methods in communication design in the construction of design of varying complexity in a way that demonstrates comprehension of the tradeoffs involved in design choices.",
            ]
        },
    ]
</script>

<h2>Communication Design Major Learning Outcomes</h2>
<div class="major-container">
    {#each myLearningOutcomes as myOutcome}
        <LearningOutcome 
            subheader={myOutcome.title}
            text={myOutcome.desc}
            listItems={myOutcome.outcomes}
        />
    {/each}

</div>


<style>
    h2 {
        text-align: center;
        font-size: 1.5em;
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 50em) {
        h2 {
            font-size: 2em;
        }
        .major-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding-bottom: 2.5rem;
        }
    }
</style>