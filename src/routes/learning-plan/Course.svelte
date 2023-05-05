<script>
    export let title;
    export let description;
    export let list = [];
</script>

<div class="course">
    <h4>{title}</h4>
    <div class="course-desc">
        <p>{description}</p>
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

<style>
    .course {
        display: flex;
        align-content:space-between;
    }

    h4 {
        width: 15%;
        padding: 0 1rem;
        color: whitesmoke;
    }

    .course-desc {
        width: 80%;
        padding: 0 1rem;
        color: honeydew;
    }
</style>