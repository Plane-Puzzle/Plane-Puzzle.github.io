var countOfLives = 3;
var n;
var levels = ['#packing', '#black_box', '#the_safest', '#help_me', '#how_much', '#tomatoes', '#find_differences', '#take_away', '#rebus', '#edible_inedible'];
var current_levels;

var headings = ['Соберите чемодан<br>в поездку',
  'Какого цвета черный<br>ящик самолета?',
  'От самого опасного к<br>самому безопасному',
  '<p>На помощь!</p>',
  'Сколько здесь<br>самолетов?',
  '<p>Соберите пять</p>',
  'Исправьте все<br>отличия',
  '<p>Уберите лишнее</p>',
  '<p>Ребус наоборот</p>',
  '<p>Съедобное ..?</p>'
];

var information = ['В этой игре вам могут встретиться<br>довольно необычные задания.Чтобы их решить,<br>придётся использовать не только логику, но и нестандартное мышление.<br><br><p style="font-size:42px;">Удачи!</p>',
  'Знаменитый чёрный ящик на борту самолёта<br>вовсе не чёрный, и даже не ящик – он оранжевый<br>и шарообразный. Чёрным ящиком называют бортовой<br>самописец, фиксирующий основные параметры полёта.<br>Данные чёрных ящиков используются для анализа<br>и расследования авиакатастроф.',
  'Многие знают, что самолёт считается самым<br>безопасным видом транспорта. Самими безопасными местами внутри самого самолета считаются те, которые<br>расположены в хвостовой секции. Если случится катастрофа, то, по статистике, шанс выжить у<br>сидящих сзади равен приблизительно 70%.',
  "Аналогом международного сигнала бедствия SOS<br>в радиотелефонной связи является сигнал Mayday,<br>дословно переводится с английского как «майский день».<br>Само словосочетание происходит от французского<br>m'aidez – сокращённый вариант от venez m'aider<br>(«придите мне на помощь», «помогите мне»). ",
  'В среднем в любой момент времени в небе<br>одновременно находится около 11 тысяч самолетов. За<br>день в воздух поднимается 25 тысяч лайнеров. В июне<br>2018 года был установлен рекорд - 202 157 самолётов<br>за сутки. Одновременно в тот день в небе было<br>зафиксировано 19 тысяч самолетов.',
  'В полёте притупляются ощущения вкусовых<br>и обонятельных рецепторов, что может изменить<br>вкус еды. Например, томатный сок в самолёте многим<br>пассажирам кажется вкуснее, чем на земле. Почему же так<br>происходит? Эксперты выделяют 3 причины: влажность, атмосферное давление и шум внутри самолета.',
  'Многие авиакомпании обязывают первого и второго<br>пилота питаться совершенно разной едой. Такое решение<br>принято в целях повышения безопасности, для того, чтобы<br>исключить возможность одновременного отравления<br>обоих пилотов. Если один из них получит пищевое<br>отравление, второй сможет управлять самолетом.',
  'Пилотам запрещено носить бороду. Если вдруг<br>на борту произойдет нештатная ситуация, и пилоту<br>необходимо будет надеть кислородную маску, то борода<br>не даст ей герметично примкнуть к лицу, что может<br>подвергнуть опасности жизни пилота и,<br>соответственно, всех пассажиров.',
  'Несмотря на страшную репутацию убийцы самолетов,<br>турбулентность редко приводит к катастрофам. За 120 лет авиаполетов в мире не было ни одного случая аварии, причиной которой была турбулентность. По сути, турбулентность для самолета, то же самое, что<br>кочки на дороге для машины.',
  'На планете жил человек, который съел целый<br>самолёт. Француз Мишель Лотито был известен тем,<br>что поедал неорганические предметы, такие как тележки<br>из супермаркета, велосипеды, телевизоры, и т.д. Самым<br>важным его достижением является поедание самолёта<br>«Cessna 150», на которое у мужчины ушло 2 года.'
];

var help = ['Попробуйте подвигать<br>эти предметы',
  'Чёрный ящик должен<br>быть хорошо заметен',
  'Автомобиль признан самым<br>опасным видом транспорта',
  'Здесь вам пригодится<br>азбука Морзе',
  'Их здесь больше, чем<br>кажется на первый взгляд',
  'Присмотритесь к тексту<br>задания повнимательнее',
  'Не ищите подвох,<br>здесь всё просто',
  'Здесь не всё <br>так гладко',
  'Когда самолёт<br>сильно трясёт',
  'Всё не так просто,<br>подумайте об этой игре'
];

var countOfTomatoes = 0;
var countOfThings = 0;
var countOfTransport = 0;

$(document).ready(function () {

  current_levels = [0,1,2,3,4,5,6,7,8,9];
  n = 0;


  $('#packing').show();
  $('#information').html(information[current_levels[n]]);
  $('.heading').html(headings[current_levels[n]]);
  $('#clue').html(help[current_levels[n]]);
  $('#level_number').html('Уровень ' + (n + 1) + '/10');
  $('.countOfLives img').attr("src", "img/heart.png");

  $('a.help_link').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(350, function () {
      $('#help')
        .css('display', 'block')
        .animate({
          opacity: 1
        }, 200);
    });
  });

  $('#help__close').click(function () {
    $('#help').animate({
        opacity: 0
      }, 200,
      function () {
        $(this).css('display', 'none');
        $('#overlay').fadeOut(350);
      });
  });

  $('a.exit').click(function (event) {
    event.preventDefault();
    $('#pause').fadeIn(350);
  });

  $('#how_much img').draggable({

    start: function () {
      $(this).addClass('drag');
    }
  });

  $('#edible_inedible div').click(function () {
    if ($(this).hasClass('chosen'))
      $(this).removeClass('chosen');
    else
      $(this).addClass('chosen');
  });

  $('.things').draggable({
    revert: 'invalid'
  });
  $('#suitcase').droppable({
    tolerance: 'fit',
    drop: function (event, ui) {
      if (ui.draggable.hasClass('wrong')) {

        $(ui.draggable).draggable({
          revert: true
        });
        game_over();
      } else {
        ui.helper.hide('FadeOut');
        countOfThings++;
        if (countOfThings == 4) right_answer();
      }

    },

  });

  $('.different').each(function () {

    var imgFile = $(this).attr('src');
    var imgExt = /(\.\w{3,4}$)/;

    $(this).click(
      function () {

        if (imgFile.indexOf('_h') > -1) {
          imgFile = imgFile.replace('_h', '');
          $(this).attr('src', imgFile);

        } else {
          imgFile = imgFile.replace(imgExt, '_h$1');
          $(this).attr('src', imgFile);
        }

      });

  });

  var i = 0;
  $('.different').click(function () {
    var index = $(this).index();
    if ($('#first>.different:eq(' + index + ')').attr('src') == $('#second>.different:eq(' + index + ')').attr('src')) {
      $('#first>.different:eq(' + index + ')').off('click');
      $('#second>.different:eq(' + index + ')').off('click');
      i++;
    }

    if (i == 5)
      setTimeout(right_answer, 500);
  });

  var position_left;
  var position_top;

  $('.drag_me').draggable({
    revert: 'invalid',
    start: function (e, ui) {
      position_left = ui.originalPosition.left;
      position_top = ui.originalPosition.top;
    }
  });


  $('.drop_to_me').droppable({
    tolerance: 'intersect',
    drop: function (event, ui) {
      if ($(this).has('img').length != 0) {
        $('img', this).css('left', position_left);
        $('img', this).css('top', position_top);
        $('img', this).appendTo('#rebus');

      }

      $(this).append(ui.draggable);


      var $this = $(this);
      ui.draggable.position({
        my: "center",
        at: "center",
        of: $this,
      });
      var right_answers = 0;
      if ($('.drop_to_me').has('img').length == 3) {

        if ($('.drop_to_me:eq(0) img').attr('src') == $('#helm').attr('src')) {
          right_answers++;
        }
        if ($('.drop_to_me:eq(1) img').attr('src') == $('#ribbon').attr('src')) {
          right_answers++;
        }
        if ($('.drop_to_me:eq(2) img').attr('src') == $('#bone').attr('src')) {
          right_answers++;
        }
        if (right_answers == 3)
          {
            $('#rebus_kn').fadeOut(200, function () {
              $('#rebus_bu').fadeOut(200, function () {});
              $('.drop_to_me').fadeOut(200, function () {});
              $('.hiding').fadeOut(200, function () {});
            });
            $('#rebus_answer').fadeIn(600, function () {});
            setTimeout(right_answer, 1200);
          }
        else {
          $('.drop_to_me img').each(function () {
            if (!$(this).attr('id')) {
              $(this).remove();
            } else {
              var left = ['61px', '820px', '1420px'];
              var rand = Math.floor(Math.random() * (3));

              $(this).css('top', Math.floor(Math.random() * (700 - 660 + 1)) + 670 + 'px');
              $(this).css('left', left[rand]);
              $(this).appendTo('#rebus');
            }
          });

          game_over();
        }

      }

    },


  });


  $('.safest').click(function () {
    countOfTransport++;
    $(this).css('pointer-events', 'none');
    var name = $(this).attr('src');
    var to = name.length - 8;
    name = name.substr(4, to);
    $("#" + name).html(countOfTransport);

  });

  $('#beard').draggable({
    stop: function (e, ui) {
      if (ui.position.left < 705 || ui.position.left > 907)
        setTimeout(right_answer, 300);
    }
  });


});


function start() {

  window.location.reload(true);
}

function game_over() {

  countOfLives--;
  for (i = 3; i > countOfLives; i--) {
    var id = '#live' + i;
    $(id).attr("src", "img/heart_no.png");
  }

  if (countOfLives == 0)
    $('#loser').fadeIn(350);
}

function continue_game() {
  countOfLives = 3;
  $('.countOfLives img').attr("src", "img/heart.png");
  $('#loser').fadeOut(350);
}

function right_answer() {
  var current_level = current_levels[n];
  $('#level_end').css("z-index", "100");
  $('#overlay').fadeIn(350, function () {
    $('#level_end').fadeIn(350);
    $(levels[current_level]).fadeOut(200);
    $(levels[current_level]).css('display', 'none');
  });

}

function next_level() {
  $('#overlay').fadeOut(350);
  $('#level_end').css("z-index", "-100");
  $('#level_end').hide();
  $('a').css("pointer-events", "");
  n++;
  if (n == 10) {
    $('#win').fadeIn(400);
  } else {
    var next_level = current_levels[n];
    $(levels[next_level]).show();
    $('#information').html(information[next_level]);
    $('.heading').html(headings[next_level]);
    $('#clue').html(help[next_level]);
    $('#level_number').html('Уровень ' + (n + 1) + '/10');
  }
}

function check_airplanes(div) {

  if ($('.drag').length >= 6) {
    right_answer();
  } else {
    game_over();
  }
}

function button(div) {
  if (div.className == 'right') {
    right_answer();
  } else {
    game_over();
  }
}

function count_tomatoes(img) {
  countOfTomatoes++;
  img.style.display = 'none';
  $('#countOfTomatoes').html(countOfTomatoes);
  if (countOfTomatoes == 5) setTimeout(right_answer, 500);

}

function check_help(value) {
  if (value.toUpperCase() == 'SOS' || value.toUpperCase() == 'СОС')
    right_answer();
  else game_over();
}

function reset() {
  $('#edible_inedible div').removeClass('chosen');
}

function check_edible() {
  if (($('.edible.chosen').length == 5) && ($('.chosen').length == 5)) {
    right_answer();
  } else {
    reset();
    game_over();
  }
}


function safest_check() {

  var right = "3421";
  var answer = $('#the_safest div').text();
  if (answer == right)
    right_answer();
  else {
    reset_safest();
    game_over();
  }

}

function reset_safest() {
  $('.safest').css('pointer-events', 'auto');
  $('#the_safest div').empty();
  countOfTransport = 0;
}