const { User, Work, Comment } = require('../models/models');

const main = async () => {

    //DESTROY

    await User.destroy({
        where: {}
    })

    await Work.destroy({
        where: {}
    })

    await Comment.destroy({
        where: {}
    })

    //USERS

    const User_One = await User.create({
        user_name: 'e_dickinson',
        email: 'e_dickinson@gmail.com'
    
    });

    const User_Two = await User.create({
        user_name: 'jrr_tolkien',
        email: 'jrr_tolkien@gmail.com'
        
    });

    const User_Three = await User.create({
        user_name: 'j_austin',
        email: 'j_austin@gmail.com'
        
    });

    const User_Four = await User.create({
        user_name: 'b_dylan',
        email: 'b_dylan@gmail.com'
        
    });

    //WORKS

    const Work_One = await Work.create({
        title: 'The Road Not Taken',
        type:'poetry',
        content:'Two roads diverged in a yellow wood, And sorry I could not travel both And be one traveler, long I stood And looked down one as far as I could To where it bent in the undergrowth; Then took the other, as just as fair, And having perhaps the better claim, Because it was grassy and wanted wear; Though as for that the passing there Had worn them really about the same, And both that morning equally lay In leaves no step had trodden black. Oh, I kept the first for another day! Yet knowing how way leads on to way, I doubted if I should ever come back. I shall be telling this with a sigh Somewhere ages and ages hence: Two roads diverged in a wood, and I— I took the one less traveled by, And that has made all the difference.'
    })

    const Work_Two = await Work.create({
        title: 'The Hobbit',
        type:'poetry',
        content:'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort'
    })

    const Work_Three = await Work.create({
        title: 'Pride and Prejudice ',
        type:'poetry',
        content:'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.'
    })

    const Work_Four = await Work.create({
        title: 'Blowin in the Wind',
        type:'poetry',
        content:'The answer, my friend, is blowin in the wind - The answer is blowin in the wind'
    })
    const Work_Five = await Work.create({
        title: 'Hope is the Thing With Feathers',
        type:'poetry',
        content:'Hope is the thing with feathers - That perches in the soul - And sings the tune without the words - And never stops at all'
    })

    const Work_Six = await Work.create({
        title: 'Essay on Birth Control',
        type:'poetry',
        content:'When I was sixteen years old I asked my dad if he was okay with me going on birth control. Naturally he thought the worst, but that had nothing to do with why I wanted it. The reason that most female teens think about birth control is because of premenstrual syndrome -- a condition which causes migraines, cramps, and mood swings. Many people, like my father, disapprove of teens using birth control for moral and/ or religious reasons. Parents do not want their children to have birth control because they often feel that it is inappropriate and against their beliefs. Teens should be able to have easy access to birth control to assist with premenstrual syndrome, prevent unwanted pregnancies, and gain knowledge about safe sex. Secondly, the cost of birth control is becoming cheaper, so the financial issue is becoming less of a problem and free birth control is helping to drastically lower unwanted teen pregnancies and abortions. In New York State, birth control has become free for everyone, regardless of personal health insurance. On another note, comprehensive sex education regarding birth control, as well as how to use it effectively, can help teens more because if they become sexually active without knowing the risks, or how to effectively use birth control, this creates a greater risk of sexually transmitted diseases and unwanted pregnancies. Why do teens want birth control? Most teens want to be protected from pregnancy and sexually transmitted diseases if they… '
    })

    const Work_Seven = await Work.create({
        title: 'Essay on Technology of Oily Fields ',
        type:'essay',
        content:'Introduction In this research paper I will be exploring the new digital oilfield. This is defined by Sidney Hill of plantengineering.com as “an oilfield that harnesses information technology in ways that allow an oil company to capture and analyze data about all of its operations, ideally in real time, thus maximizing production while minimizing costs.”[1] I will cover why this technology has been brought in, what benefits it brings with it, how they are using it, and the possible threats that are holding it back. According to the International Energy Agency, the United States is looking to become the world’s top producer of oil by 2017, a net exporter of the fuel by 2030 and possibly self-sufficient by 2035.[2] This shows how big the oil industry has become and how much more it could grow. Over the past several years the United States has seen in explosion of exploration and new drilling operations being started in remote and geographically challenging areas where communication options are limited. Due to this, many oil companies are looking into the advantages of using wireless technologies to improve their profitability, both in these new projects and in their existing operations. With the understanding that 75% of oil companies having wireless networks in place, Vodafone Global Enterprises, a worldwide telecommunications company, teamed up with equipment maker Huawei to conduct a survey with over 100 oil and gas leaders to gauge…'
    })

    const Work_Eight = await Work.create({
        title: 'Blowin in the Wind',
        type:'essay',
        content:'The answer, my friend, is blowin in the wind - The answer is blowin in the wind'
    })
    const Work_Nine = await Work.create({
        title: 'Sonnet IV',
        type:'essay',
        content:'Unthrifty loveliness, why dost thou spend Upon thyself thy beauty\'s legacy Nature\'s bequest gives nothing but doth lend, And being frank she lends to those are free. Then, beauteous niggard, why dost thou abuse The bounteous largess given thee to give? Profitless usurer, why dost thou use So great a sum of sums, yet canst not live? For having traffic with thyself alone, Thou of thyself thy sweet self dost deceive. Then how, when nature calls thee to be gone, What acceptable audit canst thou leave? Thy unused beauty must be tomb\'d with thee, Which, used, lives th\' executor to be.'
    })

    const Work_Ten = await Work.create({
        title: 'The Hobbit',
        type:'essay',
        content:'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort'
    })

    const Work_Eleven = await Work.create({
        title: 'Pride and Prejudice ',
        type:'essay',
        content:'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.'
    })

    const Work_Twelve = await Work.create({
        title: 'Blowin in the Wind',
        type:'essay',
        content:'The answer, my friend, is blowin in the wind - The answer is blowin in the wind'
    })
    const Work_Thirteen = await Work.create({
        title: 'Hope is the Thing With Feathers',
        type:'short_story',
        content:'Hope is the thing with feathers - That perches in the soul - And sings the tune without the words - And never stops at all'
    })

    const Work_Fourteen = await Work.create({
        title: 'The Hobbit',
        type:'short_story',
        content:'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort'
    })

    const Work_Fifteen = await Work.create({
        title: 'Pride and Prejudice ',
        type:'short_story',
        content:'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.'
    })

    const Work_Sixteen = await Work.create({
        title: 'Blowin in the Wind',
        type:'short_story',
        content:'The answer, my friend, is blowin in the wind - The answer is blowin in the wind'
    })
    const Work_Seventeen = await Work.create({
        title: 'Sonnet IV',
        type:'short_story',
        content:'Unthrifty loveliness, why dost thou spend Upon thyself thy beauty\'s legacy Nature\'s bequest gives nothing but doth lend, And being frank she lends to those are free. Then, beauteous niggard, why dost thou abuse The bounteous largess given thee to give? Profitless usurer, why dost thou use So great a sum of sums, yet canst not live? For having traffic with thyself alone, Thou of thyself thy sweet self dost deceive. Then how, when nature calls thee to be gone, What acceptable audit canst thou leave? Thy unused beauty must be tomb\'d with thee, Which, used, lives th\' executor to be.'
    })

    const Work_Eighteen = await Work.create({
        title: 'The Hobbit',
        type:'short_story',
        content:'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort'
    })

    const Work_Nineteen = await Work.create({
        title: 'Pride and Prejudice ',
        type:'misc',
        content:'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.'
    })

    const Work_Twenty = await Work.create({
        title: 'Blowin in the Wind',
        type:'misc',
        content:'The answer, my friend, is blowin in the wind - The answer is blowin in the wind'
    })
    const Work_TwentyOne = await Work.create({
        title: 'Hope is the Thing With Feathers',
        type:'misc',
        content:'Hope is the thing with feathers - That perches in the soul - And sings the tune without the words - And never stops at all'
    })

    const Work_TwentyTwo = await Work.create({
        title: 'The Hobbit',
        type:'misc',
        content:'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort'
    })

    const Work_TwentyThree = await Work.create({
        title: 'Pride and Prejudice ',
        type:'misc',
        content:'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.'
    })

    const Work_TwentyFour = await Work.create({
        title: 'Blowin in the Wind',
        type:'misc',
        content:'The answer, my friend, is blowin in the wind - The answer is blowin in the wind'
    })

    //COMMENTS

    const Comment_One =  await Comment.create({
        content: 'Awesome!'
    })

    const Comment_Two =  await Comment.create({
        content: 'Wow!'
    })

    const Comment_Three =  await Comment.create({
        content: 'Amazing!'
    })

    const Comment_Four =  await Comment.create({
        content: 'Wonderful!'
    })

    //Connections 

    await Work_One.setUser(User_One);
    await Work_Two.setUser(User_Two);
    await Work_Three.setUser(User_Three);
    await Work_Four.setUser(User_Four);
    await Work_Five.setUser(User_One);
    await Work_Six.setUser(User_Two);
    await Work_Seven.setUser(User_Three);
    await Work_Eight.setUser(User_Four);
    await Work_Nine.setUser(User_One);
    await Work_Ten.setUser(User_Two);
    await Work_Eleven.setUser(User_Three);
    await Work_Twelve.setUser(User_Four);
    await Work_Thirteen.setUser(User_One);
    await Work_Fourteen.setUser(User_Two);
    await Work_Fifteen.setUser(User_Three);
    await Work_Sixteen.setUser(User_Four);
    await Work_Seventeen.setUser(User_One);
    await Work_Eighteen.setUser(User_Two);
    await Work_Nineteen.setUser(User_Three);
    await Work_Twenty.setUser(User_Four);
    await Work_TwentyOne.setUser(User_One);
    await Work_TwentyTwo.setUser(User_Two);
    await Work_TwentyThree.setUser(User_Three);
    await Work_TwentyFour.setUser(User_Four);

    await Comment_One.setWork(Work_One);
    await Comment_Two.setWork(Work_Two);
    await Comment_Three.setWork(Work_Three);
    await Comment_Four.setWork(Work_Four);

    await Comment_One.setUser(User_One);
    await Comment_Two.setUser(User_Two);
    await Comment_Three.setUser(User_Three);
    await Comment_Four.setUser(User_Four);

  process.exit()
  
};

main();
