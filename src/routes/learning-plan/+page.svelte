<script>
    import Nav from '../../components/Nav.svelte'
    import MajorLearningOutcomes from './MajorLearningOutcomes.svelte';
    import MinorLearningOutcomes from './MinorLearningOutcomes.svelte';
    import CourseDescriptions from './CourseDescriptions.svelte';
</script>

<div>
    <Nav />

    <main>
        <MajorLearningOutcomes />
        <MinorLearningOutcomes />
        <CourseDescriptions />
    </main>
    

</div>

<style>
    main {
        padding: 0 2.5rem;
    }
</style>