const AboutPage = () => {
    return (
        <>
            <h3>
                I am a visionary and driven person, which are qualities that are essential for web development. I have
                an abundance of energy and
                passion, and I'm more than eager to follow my interests wherever they may lead me. I'm a passionate,
                outgoing, multi-talented soul
                with a built-in capacity to inspire and amuse. I'm never content to simply generate ideas. Instead, I
                feel compelled to take action on
                them nearly immediately.
            </h3>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {title: 'About'},
    };
}

export default AboutPage;
