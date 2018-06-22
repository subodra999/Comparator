const scrapper = require('./spoj_scrapper');

var compareProfile = function(user1, user2, callback) {
    scrapper.spojFunc(user1, function(err, data1) {
        if(err) {
            console.log(err);
            return err;
        } 
        scrapper.spojFunc(user2, function(err, data2) {
            if(err) {
                console.log(err);
                return err;
            } 
            // ready to go

            var user1_name = data1.user_name;
            var user2_name = data2.user_name;

            var user1_username = data1.user_username;
            var user2_username = data2.user_username;

            var user1_institution = data1.institution;
            var user2_institution = data2.institution;

            var user1_points = data1.points;
            var user2_points = data2.points;

            var user1_world_rank = data1.user_world_rank;
            var user2_world_rank = data2.user_world_rank;
            
            var user1_todo_cnt = data1.todo_cnt;
            var user2_todo_cnt = data2.todo_cnt;

            var user1_todo = data1.todo;
            var user2_todo = data2.todo;
            
            var set1 = data1.solved;
            var set2 = data2.solved;

            var user1_unique_solved = [];
            var user2_unique_solved = [];
            var common_solved = [];

            set1.sort();
            set2.sort();

            var i=0,j=0, s1_cnt=set1.length, s2_cnt=set2.length;
            while(i<s1_cnt && j<s2_cnt)
            {
                if(set1[i] == set2[j])
                {
                    common_solved.push(set1[i]);
                    i++;
                    j++;
                }
                else if(set1[i] < set2[j])
                {
                    user1_unique_solved.push(set1[i]);
                    i++;
                }
                else
                {
                    user2_unique_solved.push(set2[j]);
                    j++;
                }
            }
            while(i<s1_cnt)
            {
                user1_unique_solved.push(set1[i]);
                i++;
            }
            while(j<s2_cnt)
            {
                user2_unique_solved.push(set2[j]);
                j++;
            }
            var user1_uncnt = user1_unique_solved.length;
            var user2_uncnt = user2_unique_solved.length;
            var common_cnt = common_solved.length;

            var data = {
                user1_name,
                user2_name,
                user1_username,
                user2_username,
                user1_institution,
                user2_institution,
                user1_points,
                user2_points,
                user1_todo,
                user2_todo,
                user1_todo_cnt,
                user2_todo_cnt,
                user1_world_rank,
                user2_world_rank,
                user1_uncnt,
                user1_unique_solved,
                user2_uncnt, 
                user2_unique_solved,
                common_cnt, 
                common_solved,
                user1_cnt: s1_cnt,
                user2_cnt: s2_cnt
            };

            return callback(null, data);            

        });
    });
}

module.exports = {
    compareProfile
};