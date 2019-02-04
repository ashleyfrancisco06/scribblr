const { Users, Works, Comments } = require('../../models');

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
        title: 'Hope is the Thing With Feathers',
        type:'Poetry',
        content:'Hope is the thing with feathers - That perches in the soul - And sings the tune without the words - And never stops at all'
    })

    const Work_Two = await Work.create({
        title: 'The Hobbit',
        type:'Short Story',
        content:'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort'
    })

    const Work_Three = await Work.create({
        title: 'Pride and Prejudice ',
        type:'Short Story',
        content:'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.'
    })

    const Work_Four = await Work.create({
        title: 'Blowin in the Wind',
        type:'Misc',
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

    await Work_One.setComment(Comment_One);
    await Work_Two.setComment(Comment_Two);
    await Work_Three.setComment(Comment_Three);
    await Work_Four.setComment(Comment_Four);

    await User_One.setComment(Comment_One);
    await User_Two.setComment(Comment_Two);
    await User_Three.setComment(Comment_Three);
    await User_Four.setComment(Comment_Four);



  process.exit()
  
};

main();