const User = require('../../models/User');
const Post = require('../../models/Post');
const bcrypt = require('bcryptjs')

module.exports =
{
    users: () => {
        return User.find()
            .then(users => {
                return users.map(user => {
                    return { ...user._doc };
                });
            })
    },
    posts: () => {
        return Post.find()
            .then(posts => {
                return posts.map(user => {
                    return { ...posts._doc }
                });
            })
    },
    createUser: (args) => {
        return bcrypt.hash(args.userInput.password, 12)
            .then(hashedPassword => {
                const user = new User({
                    name: args.userInput.name,
                    email: args.userInput.email,
                    password: hashedPassword
                });
                return user
                    .save()
                    .then(result => {
                        console.log(result);
                        return { ...result._doc };
                    }).catch(err => {
                        console.log(err)
                        return err
                    });
            }).catch(err => {
                throw err;
            });
    },
    createPost: (args) => {
        const post = new Post({
            event: args.postInput.event
        });
        return post
            .save()
            .then(result => {
                return { ...result._doc };
            }).catch(err => {
                return err
            });
    }
}
