import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      name: "",
      title: "Make-Ahead Breakfast ",
      image:
        "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      details:
        "We’ve all heard more than once that starting the day with a healthy breakfast is great for the brain and the belly. But with all that prework hustle and bustle, not everyone has time to whip up a hot stack of pancakes or bake a fancy frittata. Make your morning routine a breeze by preparing a few nutritious staples ahead of time, like hearty oatmeal cups, simple egg dishes and grab-and-go bars. Your alarm clock will thank you!",
      detailPageImage:
        "https://blog.myfitnesspal.com/wp-content/uploads/2020/02/The-Problem-with-Cheat-Days-2-752x472.jpg",
      elements: [
        {
          id: 1,
          firstName: " MAKE-AHEAD INSTANT OATMEAL JARS",
          lasttName: "FITLESSIAN’S ORIGINAL RECIPES",
          image:
            "https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-1.jpg",
          details:
            "Calories: 229; Total Fat: 6g; Saturated Fat: 1g; Monounsaturated Fat: 2g; Cholesterol: 0mg; Sodium: 152mg; Carbohydrate: 38g; Dietary Fiber: 5g; Sugar: 7g; Protein: 6g",
        },
        {
          id: 2,
          firstName: "CAULIFLOWER-CRUSTED SPINACH FETA PIE",
          lasttName: "FITLESSIAN’S RECIPES",
          image:
            "https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-2.jpg",
          details:
            "Calories: 136; Total Fat: 6g; Saturated Fat: 3g; Monounsaturated Fat: 1g; Cholesterol: 68mg; Sodium: 330mg; Carbohydrate: 11g; Dietary Fiber: 5g; Sugar: 4g; Protein: 13g",
        },
        {
          id: 3,
          firstName: "1-MINUTE BERRY PEANUT BUTTER SMOOTHIE FOR TWO",
          lasttName: "FITLESSIAN’S RECIPES",
          image:
            "https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-3.jpg",
          details:
            "Calories: 156; Total Fat: 8g; Saturated Fat: 1g; Monounsaturated Fat: 0g; Cholesterol: 1mg; Sodium: 57mg; Carbohydrate: 19g; Dietary Fiber: 7g; Sugar: 9g; Protein: 5g",
        },
        {
          id: 4,
          firstName: " PEANUT BUTTER BREAKFAST COOKIES",
          lasttName: "FITLESSIAN’S RECIPES",
          image:
            "https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-4.jpg",
          details:
            "Calories: 299; Total Fat: 15g; Saturated Fat: 3g; Monounsaturated Fat: 0g; Cholesterol: 53mg; Sodium: 131mg; Carbohydrate: 34g; Dietary Fiber: 6g; Sugar: 13g; Protein: 11g",
        },
        {
          id: 5,
          firstName: " LEMONY STRAWBERRY OAT SOAK WITH KIWI MINT",
          lasttName: "FITLESSIAN’S RECIPES",
          image:
            "https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-4.jpg",
          details:
            "Calories: 186; Total Fat: 2g; Saturated Fat: 0g; Monounsaturated Fat: 1g; Cholesterol: 3mg; Sodium: 75mg; Carbohydrate: 35g; Dietary Fiber: 5g; Sugar: 18g; Protein: 8g",
        },
      ],
    },
    {
      id: 2,
      name: "",
      title: "The Problem With Cheat Days",
      image:
        "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE2fHxmcnVpdHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      details:
        "Instead of cheat meals or a cheat day, try these three strategies, which can help foster a positive relationship with food:",
      detailPageImage:
        "https://blog.myfitnesspal.com/wp-content/uploads/2020/02/The-Problem-with-Cheat-Days-2-752x472.jpg",
      elements: [
        {
          id: 1,
          firstName: " EAT YOUR FAVORITE TREAT WHEN IT MAKES SENSE ",
          lasttName: "",
          // image: '',
          details:
            "Make it a point to enjoy a food you’d typically have only on a “cheat day” on any random day. Since many people plan cheat days on a weekend, this could be having a cupcake or a burger and fries on a Tuesday, for example. By easing into the mindset these foods are available to you at all times, and that it’s more than OK to eat them when you choose, the power they have over you can greatly decrease. This often results in less overeating, less guilt and a naturally balanced diet.",
        },
        {
          id: 2,
          firstName: "HONOR YOUR CRAVINGS",
          lasttName: "",
          // image: '',
          details:
            "Instead of feeling like you’re “giving in” to food cravings and ruining an arbitrary diet (remember, this can cause guilt, shame and bingeing), honor them. Our bodies have a unique and specialized way of telling us what we need, we just have to be better listeners. For example, if you’re out at a restaurant and are really craving a burger, but order a salad instead, chances are it’s not going to be the most satisfying. Cue persistent thoughts about food, low-level hunger and crankiness until you eat something else. Honoring the burger craving and taking the time to eat mindfully and really savor it, can lead to much greater satisfaction after the meal and free up a good amount of brain space to think about more important things than food.",
        },
        {
          id: 3,
          firstName: "THINK NOURISHMENT",
          lasttName: "",
          // image: '',
          details:
            "Nourishment is one of my favorite words to use with clients because it encompasses how we take care of ourselves both physically and emotionally. When it comes to food, this means that sometimes, the most nourishing choice we can make is to add another serving of vegetables to our plate. Other times, we just really need a cookie. Both are OK and nourishing to the body, soul or both when we need them. What is going to be nourishing to you one day may be different the next, so being mindful and open to what you need to best take care of yourself is an invaluable tool.",
        },
      ],
    },
    {
      id: 3,
      name: "",
      title: "Essential Guide To Getting Moving",
      image:
        "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHJ1bnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
      details:
        "Everyone, even avid runners, are encouraged to move more throughout the day. So whether you’re new to exercising or looking to get more active, incorporating these tips will help. Get ready to walk your first mile, head into the next level of yoga class, train for your first 5K or run a marathon. Whatever your movement goal is, these nine tips — plus plenty of workout guides — will help you get going and, hopefully, enjoy the process.",
      detailPageImage:
        "https://blog.myfitnesspal.com/wp-content/uploads/2020/02/The-Problem-with-Cheat-Days-2-752x472.jpg",
      elements: [
        {
          id: 1,
          firstName: "FIND SOMETHING YOU LOVE",
          lasttName: "",
          // image: '',
          details:
            "“No pain, no gain” may be true for elite athletes, but for most of us, nothing could be further from the truth. Finding joy and pleasure in being active is its own reward, but the biggest benefit of doing something you love for exercise is you stand a much better chance of actually sticking to it. If you already love an activity, great. If the idea of exercise bums you out from the start, try a wide variety of things to find something you enjoy. Try indoor classes, boutique studios, outdoor trails, individual activities and team sports — mix it up until you find something that stands out for you. Here are four ways to learn to love exercise.",
        },
        {
          id: 2,
          firstName: "WALKING WORKS",
          lasttName: "",
          // image: '',
          details:
            "If you’re new to working out, walking is a great place to start. And yes, walking is sufficient exercise to lose weight and get in shape.",
        },
        {
          id: 3,
          firstName: " GET A WORKOUT BUDDY (OR BUDDIES)",
          lasttName: "",
          // image: '',
          details: `If someone is waiting for you to exercise, you’re a lot more likely to show up. Having a workout buddy holds you accountable to someone else, which is a great motivator. Plus, working out with a friend increases the enjoyment. Some people take it a step further and find a tribe of likeminded individuals to push each other, offer encouragement, suffer and succeed together. Research confirms the benefits of this kind of camaraderie in the gym:`,
          lists: [
            {
              id: 1,
              list: "1. Working out in a group boosts the stress reduction we get from exercise.",
            },
            {
              id: 2,
              list: "2. Even working out in the presence of another person reduces the perceived effort of the exercise.",
            },
            {
              id: 3,
              list: "3. If you think your workout partner is doing better than you, you’ll work harder, so you might consider exercising with someone who’s stronger/faster/fitter.",
            },
            {
              id: 4,
              list: "4. Exercising with a member of the opposite sex has been shown to reduce perceived exertion.",
            },
          ],
        },
        {
          id: 4,
          firstName: "WALKING WORKS",
          lasttName: "",
          // image: '',
          details:
            "Fresh air, sunshine, lovely vistas … exercising outdoors makes exercise more enjoyable for a lot of people. As we know, the more enjoyable our workout is, the more likely we are to do it. There are also psychological benefits, according to a 2011 meta-analysis. Outdoor workouts resulted in greater revitalization, increased energy and more positive engagement with the activities, along with less depression, anger, confusion and tension. Plus, sunlight can increase testosterone levels via vitamin D production. So if you usually hit the stationary bike, try mountain biking. Trade in the treadmill once in a while for a trail run. Move from an indoor class to an outdoor bootcamp. Here are 15 reasons Fitlessian users prefer outdoor workouts and three outdoor workouts you’ll prefer to the gym.",
        },
        {
          id: 5,
          firstName: " INCORPORATE PLAY",
          lasttName: "",
          // image: '',
          details:
            "Sure, this is another way to enjoy your activity more, but it’s also a way to stay motivated. Indulging in “fun” activities like trampoline jumping or tossing a Frisbee around can be a great break from the more “serious” activities like running or strength training. Most play also involves other people and turns your activity time into social time. A pickup game of basketball, a tennis match or kicking a soccer ball around with a friend keeps you active in the most fun of ways. By framing your workouts as a “fun activity,” they become their own reward.",
        },
      ],
    },
  ];
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
      className="pb-16"
    >
      <div className="flex items-center justify-center">
        <div>
          <h1 className="text-4xl text-green-400 font-semibold text-center">
            Recipes & Inspiration
          </h1>
          <p className="text-center mt-3">
            Get nutritionist-approved recipes and motivational <br /> workout
            tips from Fitlessian experts.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-8">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            blog={blog}
            className="card card-compact  shadow-xl pb-10"
          >
            <figure>
              <img src={blog.image} alt="img" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">{blog.title}</h2>
              {/* <p>{blog.title}</p> */}
              <Link to={`/blog/${blog.id}`} state={{ from: { blog } }}>
                <div>
                  <button className="btn-explore-about  border-2 px-8 py-3 border-green-600 rounded-md ">
                    Read Your Blog
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
