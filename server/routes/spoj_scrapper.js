const cheerio = require('cheerio');
const request = require('request');

var spojFunc = function(user, callback) {
    console.log("Fetching info of "+user+"...");
    var url = "http://www.spoj.com/users/" + user;

    request(url, function(err, res, body) {
        if(err) {
            console.log(err);
            return callback(err);
        } 
        
        var $ = cheerio.load(body);

        var user_name = $('div#user-profile-left h3').text();
    
        var user_username = $('div#user-profile-left h4').text();
        user_username = user_username.split('@');
        user_username = user_username[1];
        
        var user_world_rank = $('div#user-profile-left p').eq(2).text();
        user_world_rank = user_world_rank.split('#');
        user_world_rank = user_world_rank[1];
        user_world_rank = user_world_rank.split('(');
        
        var points = user_world_rank[1];
        user_world_rank = user_world_rank[0];
        user_world_rank = user_world_rank.trim();
        points = points.split(' ');
        points = points[0];
        
        var institution = $('div#user-profile-left p').eq(3).text();
        institution = institution.split(':');
        institution = institution[1];
        institution = institution.trim();
        
        console.log(user_name);
        console.log(user_username);
        console.log(user_world_rank);
        console.log(points);
        console.log(institution);

        //submissions solved questions
        var solved = [];
        var rows = $('div#user-profile-tables table').eq(0).find('tr');
        for(var i=0; i<rows.length; ++i)
        {
        var current = rows[i];
        var cols = $(current).children("td");
        for(var j=0; j<cols.length;++j)
        {
            var curr_col = cols[j];
            var q_name = $(curr_col).text();
            if(q_name.length == 0)
            continue;
            solved.push(q_name);
        }
        }
        var solved_cnt = solved.length;

        var todo = [];
        var todo_rows = $('div#user-profile-tables table').eq(1).find('tr');
        for(var i=0; i<todo_rows.length; ++i)
        {
        var current = todo_rows[i];
        var cols = $(current).children("td");
        for(var j=0; j<cols.length; ++j)
        {
            var curr_col = cols[j];
            var q_name = $(curr_col).text();
            if(q_name.length == 0)
            continue;
            todo.push(q_name);
        }
        }
        var todo_cnt = todo.length;

        profile_data = {
        user_name: user_name,
        user_username: user_username,
        user_world_rank: user_world_rank,
        points: points,
        institution: institution,
        solved_cnt: solved_cnt,
        solved: solved,
        todo_cnt: todo_cnt,
        todo: todo
        };

        return callback(null, profile_data); 

    });  
}

module.exports = {
    spojFunc
};