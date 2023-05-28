<script>
let classes = [
    { 
        title: "Media Tools",
        desc: "Integrates audio, video, and animation authoring software to design, manage, and create a multimedia project. Includes planning, sketching, and storyboarding a video project. Introduces tools and techniques to create audio and visual digital effects. Covers essential design principles and video composition.",
        outcomes: [
            "Explain core ideas about motion design theory and history.",
            "Use of 2D digital imaging software for vector and bitmaps design and editing.",
            "Capture and manipulation of video content used in motion graphics.",
            "Create and effectively use basic 2-dimensional animation.",
            "Capture, edit and effectively use digital media, including images, audio, text, and video, employing a variety of sources and formats.",
            "Command of essential theory and techniques aimed at pre-production of motion graphics products, including Creative Brief, Mood Board, Storyboard and Style Frame.",
            "Extended command and combination of Photoshop, Illustrator, Premiere, and After Effects for motion graphics.",
            "Understand and apply copyright principles.",
            "Design screen-based digital layouts applying the principles of proximity, alignment, repetition, and contrast, (PARC) using layout and text design strategies, and principles of motion design.",
            "Plan, design, manage and produce artistic interactive multimedia projects that integrate text, audio, animation, video and images.",
            "Apply an iterative design process to the creation of both static and multimedia projects.",
            "Communicate effectively in person and in writing in team projects.",
        ]
    },
    { 
        title: "History of Communication Design",
        desc: "Surveys the development of communication design in modern history, viewed in the context of contemporary political, scientific, and cultural influences. Communication design includes disciplines such as graphic design, web design, advertising, instructional design, digital media, animation, digital illustration, interactive design and motion graphics.",
        outcomes: [
            "Recognize the need for communication through different cultures, and appreciate the power of visual communication.",
            "Acknowledge the effect of the past on the later developments in visual communication.",
            "Identify the impact of social, cultural, technological and economic developments on visual communication.",
            "Establish concrete research practices, and acquire the foundational vocabulary to discuss, write about and the skills to present and interact with others.",
            "Demonstrate the understanding and valuing copyright principles.",
            "Demonstrate the ability to collaborate and thrive within teams."
        ]
    },
    { 
        title: "Typograpgy",
        desc: "Typography is the art of designing letterforms, alphabets and creating compositions with letters and words. This course explains typographic practices to develop an eye for type and how to use it effectively.",
        outcomes: [
            "Knowledge of the evolution and cultural significance of historic typefaces.",
            "Letterform Design.",
            "Professional typesetting skills.",
            "Demonstrate the typographic principles of publication layout; grid theory, alignments, negative space, combining fonts and applying styles.",
        ]
    },
    { 
        title: "Environment Modeling",
        desc: "The course equips students with the fundamental skills needed for the development of games. After first developing with basic 3D modeling skills, students learn how to model, texture and light complex objects and scenes using industry standard tools.",
        outcomes: [
            "Basic competence using Autodesk Maya to create vertex models.",
            "An improved conceptual understanding of player attention and experience.",
            "Lighting, rendering and texturing abilities for 3D worlds.",
        ]
    },
    { 
        title: "Visual Thinking",
        desc: "Students use the design process to strengthen their visual intelligence and vocabulary for communicating ideas. Course emphasizes ideation, systems thinking, and translating complex ideas using various tools and strategies.",
        outcomes: [
            "Develop critical thinking, culture awareness, and problem-solving skills following the User-Centered Design (UCD) approaches.",
            "Experiment using a variety of critical, analytical, and perceptual techniques to solve complex communication design problems",
            "Apply and utilize software tools and features, design principles, and strategies to manage visual elements through a variety of creative design applications.",
            "Establish a clear criterion and guidelines to evaluate the ideas and design work of self and others.",
            "Distinguish the value and principles of copyrights.",
            "Establish teamwork skills to collaborate and thrive within teamwork projects.",
            "Develop clear workflow documentation of the design process and presentations to articulate concepts and ideas visually and verbally.",
        ]
    },
    { 
        title: "Human-Computer Interaction",
        desc: "Explores the fundamental concepts and design processes of the interdisciplinary field of human-computer interaction (HCI) that integrates theories and methodologies across multiple domains, such as cognitive psychology, human factors, and systems design. Through readings and hands-on exercises, students gain an understanding of the components involved in designing for universal audiences, social and emotional user experiences, usable products, emerging technologies and the impact on society.",
        outcomes: [
            "Recognize and recall the emergence of the human-centered design approach, and usability.</li>",
            "Understand the history of HCI and how it is important to the Communication Design CD discipline.",
            "Review and comprehend how the field of HCI has expanded into the design disciplines of today such as User Interface UI, User Experience UX, Interaction Design IaD, Human Factors HF,user-centered design approach, and usability.",
            "Review, research, and present the thought leaders in the user experience and user interface design fields.",
            "Summarize behavioral science research to understand how people experience objects, products, services, and environments of everyday life.",
            "Evaluate the usability of digital user interfaces based on best principles and industry practices.",
            "Execute user research to frame meaningful user experience problems.",
            "Employ low-fidelity prototyping tools and usability testing.",
            "Create the UX design of a digital product or service design.",
            "Develop collaborative skills in design-based problem solving.",
            "Produce works through an iterative process.",
            "Imagine your end goal before you start.",
        ]
    },
    { 
        title: "Publication Design",
        desc: "This project-based course uses the steps of the design process to create publications for print and screen delivery. Principles of page layout design, information architecture, and digital production skills are emphasized. A laptop and knowledge of InDesign and Illustrator are required.",
        outcomes: [
            "Create a successful solution to the design problem by applying the design process: research and plan, conceptualize, design, iterate, produce, evaluate, test and revise and document.",
            "Develop and demonstrate the ability to problem solve and think critically about communication challenges utilizing the Design Thinking frameworks.",
            "Create holistic designs that incorporate effective systems design, including information architecture, color systems, font systems, and image treatment.",
            "Demonstrate fundamental concepts of pages layout and graphic organization for screen media.",
            "Develop a good understanding of information architecture concepts and use storyboards, flowcharts and layout to plan, organize and manage website contents.",
            "Demonstrate a good understanding of universal design and accessibility concepts and techniques to design and produce web communication that serves all users and is ADA compliant.",
            "Acquire and develop technical competency by effectively using visual elements, HTML/CSS, to create websites using a professional Web Content Management System (WCMS).",
            "Develop and produce professional-quality, client-ready presentations including research results and design proposals.",
        ]
    },
    { 
        title: "Graphic Identity",
        desc: "Students experience the design process for creating a Graphic Identity system for a real-world client. Includes Graphic Standards Guides and client communication.",
        outcomes: [
            "Develop design briefs and identify the clients’ needs.",
            "Research, conduct competitive analysis, and identify useful design trends.",
            "Ideate and develop design concepts.",
            "Professional communication.",
            "Develop technical skills (design and production).",
        ]
    },
    { 
        title: "User Research & Experience Design",
        desc: "Covers in-depth user research methodologies used at various stages of product design and development, from conception to product launch. Through hands-on projects, students apply user experience design processes, methods and industry best practices that include design research, interaction design, information architecture, scenario development, user flows, prototyping, user testing and high fidelity visual design specifications.",
        outcomes: [
            "Define the steps required for creating a digital user experience from conception, prototyping, branding, and usability refinement using the human-centered design framework.",
            "Identify a range of user research methods that apply to various stages of product development.",
            "Define and execute appropriate user research techniques to frame effective design problems and evaluate the usability of existing user interfaces and experience.",
            "Apply high-level conceptualization and design thinking to complex interactive projects.",
            "Understand and apply behavioral science theories of learning loops & mastery in habit-forming application to build user engagement in developing a final digital product/service.",
            "Create a unique digital product or service from conception to specification, ready delivery for handoff to a software development team.",
            "Develop collaborative skills in design-based problem solving.",
            "Professionally articulate design solutions to potential stakeholders.",
        ]
    },
    { 
        title: "Communication Design Capstone",
        desc: "Provides students a culminating experience via integrating knowledge and skills obtained from all courses into a communication design project. Students follow appropriate design procedures to produce a prototype of a substantial and professional level project, conduct user evaluation, and write a final report. Simultaneously, students learn and practice project management, collaboration and presentation skills that are essential in their future profession.",
        outcomes: [
            "Develop an effective and complete capstone project proposal.",
            "Complete an effective capstone project plan.",
            "Make effective oral presentations.",
            "Prepare and submit documents required for graduation.",
            "Engage in effective oral and written communication.",
            "Plan and design an electronic ILP portfolio.",
            "Complete complex tasks in a timely manner.",
        ]
    },
    { 
        title: "Data Structures",
        desc: "Provides students skills to write clear, efficient, and high-quality code. This is an intermediate-level programming course with an emphasis on data structures. Coverage includesobject-oriented programming, lists, stacks, queues, recursion, trees, sorting, searching, and basic concepts of algorithm analysis.",
        outcomes: [
            "Define and use pointers and dynamically allocated memory.",
            "Demonstrate the usage of I/O streams and strings.",
            "Define and use programmer-defined classes.",
            "Implement fundamental data structures such as list, stack, queue, and tree.",
            "Solve a programming problem using the recursion technique.",
            "Measure the efficiency of an algorithm and discuss energy and climate impact.",
            "Implement well-developed sorting and searching algorithms.",
            "Develop programs to solve simple, real world problems.",
        ]
    },
    { 
        title: "Graphics Programming",
        desc: "This course provides an introduction to computer graphics with a strong emphasis on the underpinning maths. It covers the hardware and software principles used to create computer generated images: rasterization and ray tracing, 3D graphics programming in the WebGL including texturing, lighting, and shadows. The value of the mathematical foundations cannot be overstated. They are deeply connected to all rendering algorithms and their applications. The core element, geometric linear algebra, is ubiquitously applied as most topics rely on spatial construction and reasoning. This course strives to strike a balance between the theory and practice of computer graphics at its core without relying upon external frameworks. Instructor-authored basic scaffolding code and step by step guides will be provided to streamline the process.",
        outcomes: [
            "Use geometric linear algebra to define and render scene representations.",
            "Build a ray-tracer and discuss its applications.",
            "Use the rasterization pipeline to create real-time scenes.",
            "Compare and contrast the rasterization pipeline w.r.t. ray tracing.",
            "Describe the interplay between CPU and GPU in rendering pipelines.",
            "Apply local illumination and compare it to global models.",
            "Apply texturing, transparency, and shadows.",
            "Describe approaches to create desired graphical experiences.",
        ]
    },
    { 
        title: "Internet Programming",
        desc: "Provides students with dynamic web application development skills, focusing on the integration of server-side programming, database connectivity, and client-side scripting. Coverage includes the Internet architecture, responsive design, RESTful web services, and Web APIs.",
        outcomes: [
            "Read and write HTML and CSS using common tags.",
            "Create interactive forms and dynamic web pages.",
            "Write Node.js apps using variables, arrays, functions and control structures.",
            "Create and manipulate database schema.",
            "Use web-based database administration tools.",
            "Write MySQL queries to select, insert, update, and delete records in Node apps.",
            "Use HTTP Requests and Web APIs to update the content of a web page dynamically.",
            "Create database-driven web apps using Node.js, MySQL and JavaScript.",
        ]
    },
]

</script>

<h2>Course Descriptions</h2>
<div class="course-list">
    {#each classes as course}
        <div class="course">
            <h3 class="course-title">{course.title}</h3>
            <div class="course-desc">
                <p>{course.desc}</p>
                <ul>
                    {#each course.outcomes as outcome}
                        <li>{outcome}</li>
                    {/each}
                </ul>
            </div>
        </div>
    {/each}
</div>

<style>
    h2 {
        text-align: center;
        font-size: 1.5em;
        margin-top: 3rem;
        margin-bottom: 1rem;
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
        }
        .course-list {
            margin: 0 auto;
        }
        .course {
            display: flex;
            align-content:space-between;
            padding-bottom: 2rem;
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