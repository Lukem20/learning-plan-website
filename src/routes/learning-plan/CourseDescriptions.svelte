<script>
    import { onMount } from "svelte";
    import gsap from "gsap/dist/gsap";

    const tl = gsap.timeline({ defaults: { duration: 1 } });
    gsap.registerPlugin('ScrollTrigger');

    onMount(() => {
        /*
        tl.from('.course-title', {
            scrollTrigger: '.course-title',
            x: 400,
            rotation: 360,
            duration: 2,
           
        })
         */
    })
</script>


<h2>Course Descriptions</h2>
<div class="course-list">
    <div class="course">
        <h3 class="course-title">CST 230 Media Tools II</h3>
        <div class="course-desc">
            <p>
                Integrates audio, video, and animation authoring software to design, manage, 
                and create a multimedia project. Includes planning, sketching, and storyboarding 
                a video project. Introduces tools and techniques to create audio and visual 
                digital effects. Covers essential design principles and video composition.
            </p>
            <ul>
                <li>Explain core ideas about motion design theory and history.</li>
                <li>Keep a sketchbook for media study, ideation, and media planning.</li>
                <li>Use of 2D digital imaging software for vector and bitmaps design and editing.</li>
                <li>Capture and manipulation of video content used in motion graphics.</li>
                <li>Create and effectively use basic 2-dimensional animation.</li>
                <li>Capture, edit and effectively use digital media, including images, audio, text, and video, employing a variety of sources and formats.</li>
                <li>Command of essential theory and techniques aimed at pre-production of motion graphics products, including Creative Brief, Mood Board, Storyboard and Style Frame.</li>
                <li>Extended command and combination of Photoshop, Illustrator, Premiere, and After Effects for motion graphics.</li>
                <li>Understand and apply copyright principles.</li>
                <li>Design screen-based digital layouts applying the principles of proximity, alignment, repetition, and contrast, (PARC) using layout and text design strategies, and principles of motion design.</li>
                <li>Plan, design, manage and produce artistic interactive multimedia projects that integrate text, audio, animation, video and images.</li>
                <li>Apply an iterative design process to the creation of both static and multimedia projects.</li>
                <li>Communicate effectively in person and in writing in team projects.</li>
            </ul>
        </div>
    </div>

    
    <div class="course">
        <h3 class="course-title">CST 302 History of Communication Design</h3>
        <div class="course-desc">
            <p>
                Surveys the development of communication design in modern history, viewed in the context of 
                contemporary political, scientific, and cultural influences. Communication design includes 
                disciplines such as graphic design, web design, advertising, instructional design, digital 
                media, animation, digital illustration, interactive design and motion graphics.
            </p>
            <ul>
                <li>Recognize the need for communication through different cultures, and appreciate the power of visual communication.</li>
                <li>Acknowledge the effect of the past on the later developments in visual communication.</li>
                <li>Identify the impact of social, cultural, technological and economic developments on visual communication.</li>
                <li>Establish concrete research practices, and acquire the foundational vocabulary to discuss, write about and the skills to present and interact with others.</li>
                <li>Demonstrate the understanding and valuing copyright principles.</li>
                <li>Demonstrate the ability to collaborate and thrive within teams.</li>
            </ul>
        </div>
    </div>

    <div class="course">
        <h3 class="course-title">CST 304 Typograpgy</h3>
        <div class="course-desc">
            <p>
                Typography is the art of designing letterforms, alphabets and creating compositions 
                with letters and words. This course explains typographic practices to develop an 
                eye for type and how to use it effectively.
            </p>
            <ul>
                <li>Knowledge of the evolution and cultural significance of historic typefaces.</li>
                <li>Letterform Design.</li>
                <li>Professional typesetting skills.</li>
                <li>Demonstrate the typographic principles of publication layout; grid theory, alignments, negative space, combining fonts and applying styles.</li>
            </ul>
        </div>
    </div>

    <div class="course">
        <h3 class="course-title">CST 322 Environment Modeling</h3>
        <div class="course-desc">
            <p>
                The course equips students with the fundamental skills needed for the development of games. 
                After first developing with basic 3D modeling skills, students learn how to model, 
                texture and light complex objects and scenes using industry standard tools.
            </p>
            <ul>
                <li>Basic competence using Autodesk Maya to create vertex models.</li>
                <li>An improved conceptual understanding of player attention and experience.</li>
                <li>Lighting, Rendering and texturing abilities for 3D worlds.</li>
            </ul>
        </div>
    </div>

    <div class="course">
        <h3 class="course-title">CST 345 Visual Thinking</h3>
        <div class="course-desc">
            <p>
                Students use the design process to strengthen their visual intelligence and vocabulary
                 for communicating ideas. Course emphasizes ideation, systems thinking, and 
                 translating complex ideas using various tools and strategies.
            </p>
            <ul>
                <li>Develop critical thinking, culture awareness, and problem-solving skills following the User-Centered Design (UCD) approaches.</li>
                <li>Experiment using a variety of critical, analytical, and perceptual techniques to solve complex communication design problems</li>
                <li>Apply and utilize software tools and features, design principles, and strategies to manage visual elements through a variety of creative design applications.</li>
                <li>Establish a clear criterion and guidelines to evaluate the ideas and design work of self and others.</li>
                <li>Distinguish the value and principles of copyrights.</li>
                <li>Establish teamwork skills to collaborate and thrive within teamwork projects.</li>
                <li>Develop clear workflow documentation of the design process and presentations to articulate concepts and ideas visually and verbally.</li>
            </ul>
        </div>
    </div>

    <div class="course">
        <h3 class="course-title">CST 346 Human-Computer Interaction</h3>
        <div class="course-desc">
            <p>
                Explores the fundamental concepts and design processes of the interdisciplinary field 
                of human-computer interaction (HCI) that integrates theories and methodologies across 
                multiple domains, such as cognitive psychology, human factors, and systems design. 
                Through readings and hands-on exercises, students gain an understanding of the components 
                involved in designing for universal audiences, social and emotional user experiences,
                 usable products, emerging technologies and the impact on society.
            </p>
            <ul>
                <li>Recognize and recall the emergence of the human-centered design approach, and usability.</li>
                <li>Understand the history of HCI and how it is important to the Communication Design CD discipline</li>
                <li>Review and comprehend how the field of HCI has expanded into the design disciplines of today such as User Interface UI, User Experience UX, Interaction Design IaD, Human Factors HF,user-centered design approach, and usability.</li>
                <li>Review, research, and present the thought leaders in the user experience and user interface design fields.</li>
                <li>Summarize behavioral science research to understand how people experience objects, products, services, and environments of everyday life.</li>
                <li>Evaluate the usability of digital user interfaces based on best principles and industry practices.</li>
                <li>Execute user research to frame meaningful user experience problems.</li>
                <li>Employ low-fidelity prototyping tools and usability testing.</li>
                <li>Create the UX design of a digital product or service design.</li>
                <li>Develop collaborative skills in design-based problem solving.</li>
                <li>Produce works through an iterative process.</li>
                <li>Imagine your end goal before you start.</li>
            </ul>
        </div>
    </div>
    

    <div class="course">
        <h3 class="course-title">CST 351 Web Design</h3>
        <div class="course-desc">
            <p>
                Covers web design aesthetics, layout, structure and universal design. 
                Applies the design process and systems design principles using web 
                templates and web content management systems.
            </p>
            <ul>
                <li>Create a successful solution to the design problem by applying the design process: research and plan, conceptualize, design, iterate, produce, evaluate, test and revise and document</li>
                <li>Develop and demonstrate the ability to problem solve and think critically about communication challenges utilizing the Design Thinking frameworks.</li>
                <li>Create holistic designs that incorporate effective systems design, including information architecture, color systems, font systems, and image treatment.</li>
                <li>Demonstrate fundamental concepts of pages layout and graphic organization for screen media.</li>
                <li>Develop a good understanding of information architecture concepts and use storyboards, flowcharts and layout to plan, organize and manage website contents.</li>
                <li>Demonstrate a good understanding of universal design and accessibility concepts and techniques to design and produce web communication that serves all users and is ADA compliant.</li>
                <li>Acquire and develop technical competency by effectively using visual elements, HTML/CSS, to create websites using a professional Web Content Management System (WCMS).</li>
                <li>Develop and produce professional-quality, client-ready presentations including research results and design proposals.</li>
            </ul>
        </div>
    </div>

    <div class="course">
        <h3 class="course-title">CST 404 Publication Design</h3>
        <div class="course-desc">
            <p>
                This project-based course uses the steps of the design process to create publications 
                for print and screen delivery. Principles of page layout design, information architecture, 
                and digital production skills are emphasized. A laptop and knowledge of InDesign 
                and Illustrator are required.
            </p>
            <ul>
                <li>Interview client, analyze the culture of the audience, investigate existing or similar projects, define the client’s and audience needs, project schedule and deliverables.</li>
                <li>Visualize ideas to communicate the purpose of the design.</li>
                <li>Use illustration or photography to visualize the client’s communication goal.</li>
                <li>Investigate and explore a variety of visual solutions from original hand-drawn concept to final digital product. Apply fundamental concepts of page composition production for both print and screen media. This includes use of grids, color, type, vector and raster images</li>
                <li>Apply Typographic Design Principles and professional quality typesetting skills to the layout for print and screen output.</li>
                <li>Prepare files and artwork for print and/or screen output using industry-standard digital pre-press and web skills.</li>
                <li>Oral Communication and Critical Thinking.</li>
            </ul>
        </div>
    </div>

    <div class="course">
        <h3 class="course-title">CST 406 Graphic Identity</h3>
        <div class="course-desc">
            <p>
                Students experience the design process for creating a Graphic Identity system for a 
                real-world client. Includes Graphic Standards Guides and client communication.
            </p>
            <ul>
                <li>Develop design briefs and identify the clients’ needs.</li>
                <li>Research, conduct competitive analysis, and identify useful design trends.</li>
                <li>Ideate and develop design concepts.</li>
                <li>Professional communication.</li>
                <li>Develop technical skills (design and production).</li>
            </ul>
        </div>
    </div>

    <div class="course">
        <h3 class="course-title">CST 446 User Research & Experience Design</h3>
        <div class="course-desc">
            <p>
                Covers in-depth user research methodologies used at various stages of product design 
                and development, from conception to product launch. Through hands-on projects, students 
                apply user experience design processes, methods and industry best practices that include 
                design research, interaction design, information architecture, scenario development, 
                user flows, prototyping, user testing and high fidelity visual design specifications.
            </p>
            <ul>
                <li>Define the steps required for creating a digital user experience from conception, prototyping, branding, and usability refinement using the human-centered design framework.</li>
                <li>Identify a range of user research methods that apply to various stages of product development.</li>
                <li>Define and execute appropriate user research techniques to frame effective design problems and evaluate the usability of existing user interfaces and experience.</li>
                <li>Apply high-level conceptualization and design thinking to complex interactive projects.</li>
                <li>Understand and apply behavioral science theories of learning loops & mastery in habit-forming application to build user engagement in developing a final digital product/service.</li>
                <li>Create a unique digital product or service from conception to specification, ready delivery for handoff to a software development team.</li>
                <li>Develop collaborative skills in design-based problem solving.</li>
                <li>Professionally articulate design solutions to potential stakeholders.</li>
            </ul>
        </div>
    </div>
    
    <div class="course">
        <h3 class="course-title">CST 498 Communication Design Capstone</h3>
        <div class="course-desc">
            <p>
                Provides students a culminating experience via integrating knowledge and skills 
                obtained from all courses into a communication design project. Students follow 
                appropriate design procedures to produce a prototype of a substantial and 
                professional level project, conduct user evaluation, and write a final report. 
                Simultaneously, students learn and practice project management, collaboration 
                and presentation skills that are essential in their future profession.
            </p>
            <ul>
                <li>Develop an effective and complete capstone project proposal.</li>
                <li>Complete an effective capstone project plan.</li>
                <li>Make effective oral presentations.</li>
                <li>Prepare and submit documents required for graduation.</li>
                <li>Engage in effective oral and written communication.</li>
                <li>Plan and design an electronic ILP portfolio.</li>
                <li>Complete complex tasks in a timely manner.</li>
            </ul>
        </div>
    </div>

    <div class="course">
        <h3 class="course-title">CST 238 Data Structures</h3>
        <div class="course-desc">
            <p>
                Provides students skills to write clear, efficient, and high-quality code. This is an 
                intermediate-level programming course with an emphasis on data structures. Coverage includes
                object-oriented programming, lists, stacks, queues, recursion, trees, sorting, 
                searching, and basic concepts of algorithm analysis.
            </p>
            <ul>
                <li>Define and use pointers and dynamically allocated memory.</li>
                <li>Demonstrate the usage of I/O streams and strings.</li>
                <li>Define and use programmer-defined classes.</li>
                <li>Implement fundamental data structures such as list, stack, queue, and tree.</li>
                <li>Solve a programming problem using the recursion technique.</li>
                <li>Measure the efficiency of an algorithm and discuss energy and climate impact.</li>
                <li>Implement well-developed sorting and searching algorithms.</li>
                <li>Develop programs to solve simple, real world problems.</li>
            </ul>
        </div>
    </div>

    <div class="course">
        <h3 class="course-title">CST 336 Internet Programming</h3>
        <div class="course-desc">
            <p>
                Provides students with dynamic web application development skills, focusing on the integration 
                of server-side programming, database connectivity, and client-side scripting. 
                Coverage includes the Internet architecture, responsive design, RESTful web services, and Web APIs.
            </p>
            <ul>
                <li>Read and write HTML and CSS using common tags.</li>
                <li>Create interactive forms and dynamic web pages.</li>
                <li>Write Node.js apps using variables, arrays, functions and control structures.</li>
                <li>Create and manipulate database schema.</li>
                <li>Use web-based database administration tools.</li>
                <li>Write MySQL queries to select, insert, update, and delete records in Node apps.</li>
                <li>Use HTTP Requests and Web APIs to update the content of a web page dynamically.</li>
                <li>Create database-driven web apps using Node.js, MySQL and JavaScript.</li>
            </ul>
        </div>
    </div>

    <div class="course">
        <h3 class="course-title">CST 363 Database Systems</h3>
        <div class="course-desc">
            <p>
                Database systems are a well-developed and widely-used software technology, found in everything from smartphones to web servers.  
                The course provides balanced coverage of database use and database design, with a focus on relational databases.   
                Students will learn to design relational schemas, write SQL queries, access a DB programmatically, 
                and perform database administration.  Students will gain a working knowledge of the algorithms and 
                data structures used in query evaluation and transaction processing.  
                Students will also study principles of distributed databases and their application in NoSQL databases.
            </p>
            <ul>
                <li>Define what a database is and describe the different types of database users.</li>
                <li>Create relational DB schemas from English problem statements</li>
                <li>Understand the concept of normalization and be able to perform third form normalization on relational schemas</li>
                <li>Translate English queries about relational data into SQL queries</li>
                <li>Sketch how query evaluation works for some select and join queries</li>
                <li>Perform database administration operations to create, populate, update, and delete tables.</li>
            </ul>
        </div>
    </div>

</div>

<style>
    h2 {
        text-align: center;
        font-size: 1.5em;
        margin: 0;
    }
    h3 {
        font-size: 1.25rem;
        color: whitesmoke;
        margin-bottom: 0;
        margin-top: 3rem;

    }
    ul {
        padding-left: 20px;
        font-size: 1em;
    }


    /* Tablet screen sizes and larger */
    @media screen and (min-width: 50em) {
        h2 {
            font-size: 2em;
            margin: 0;
        }
        .course-list {
            margin: 0 auto;
        }
        .course {
            display: flex;
            align-content:space-between;
        }
        .course-desc {
            width: 80%;
            padding: 0 1rem;
            color: rgb(245, 255, 245);
        }
        .course-title {
            width: 15%;
            padding: 0 1rem;
            color: whitesmoke;
        }
    }
</style>