Rails.application.config.middleware.use OmniAuth::Builder do
  puts "x#{ENV['GITHUB_KEY']}x"
  puts "x#{ENV['GITHUB_SECRET']}x"

  provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET'], scope: "user,user:email"
end