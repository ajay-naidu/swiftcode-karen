package data;

public class message {
    public String text;
    public FeedResponse feedResponse;
    public Sender sender;
    public enum Sender{
        BOT, USER
    }
}
