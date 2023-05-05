<script>
    import LearningOutcome from "./LearningOutcome.svelte";
</script>

<h2>Communication Design Major Learning Outcomes</h2>
<div class="major-container">
    <LearningOutcome 
        subheader='Professional Communication'
        text='Demonstrate the ability to understand, analyze, 
        and evaluate information, ideas, and insights from 
        multiple perspectives through written, oral, visual, 
        and electronic means of communication, and explain its 
        significance at an advanced collegiate level. More 
        specifically, graduates should be able to:'
        listItem1="Receive information, ideas, and arguments through active listening and effective reading skills;"
        listItem2="Communicate effectively with a range of audiences through college level writing;"
        listItem3="Communicate effectively with a range of audiences through well-organized, precise, and effective oral presentations."
    />

    <LearningOutcome 
        subheader='User-Centered Design'
        text='Demonstrate the systematic application of design principles, 
        tools, user-centered design methodology and processes to develop 
        complex systems that facilitate meaningful interactions. 
        More specifically, graduates should be able to:'
        listItem1="Apply knowledge of design history, communication theories, and aesthetic principles to solve design problems;"
        listItem2="Analyze a problem and identify, define, and implement appropriate solutions;"
        listItem3="Design, implement, and evaluate effectiveness and efficiency of a design project to meet desired needs."
    />

    <LearningOutcome 
        subheader='Computing & Programming'
        text='Apply computer programming concepts, tools, and skills to solve communication design problems. More specifically, graduates should be able to:'
        listItem1="Identify right tools and programming solutions to address design problems"
        listItem2="Design, develop, implement, and evaluate a technology infused design project to meet desired needs."
        listItem3="Evaluate effectiveness and efficiency of a application code."
    />

    <LearningOutcome 
        subheader='Professional Ethos'
        text='Demonstrate professionalism through team work, punctuality, integrity, reliability, 
        and commitment to ethical action through rigorous evaluation from multiple perspectives. 
        More specifically, graduates should be able to:'
        listItem1="Function effectively on teams with diverse individuals from diverse backgrounds to accomplish a common goal;"
        listItem2="Analyze the local and global impact of computing and design on individuals, organizations, community, society, and the world;"
        listItem3="Understand and apply professional, ethical, legal, security, and social responsibilities in the service of community, society, and world."
    />

    <LearningOutcome 
        subheader='Application & Synthesis'
        text='Apply core communication design knowledge, theories, methods, and practices to address 
        new and complex real-world challenges and opportunities. More specifically, 
        graduates should be able to:'
        listItem1="Apply design and development principles, tools, and methods in communication design in the construction of design of varying complexity in a way that demonstrates comprehension of the tradeoffs involved in design choices."
        listItem2=""
        listItem3=""
    />
</div>


<style>
    h2 {
        text-align: center;
        font-size: 1.5em;
        margin: 0;
    }

    @media screen and (min-width: 50em) {
        h2 {
            font-size: 2em;
            text-align: left;
        }
        .major-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding-bottom: 2.5rem;
        }
    }
</style>