import { Resolver, Query, Arg } from "type-graphql";
import { Schedule } from "./schedules";

@Resolver(Schedule)
export class ScheduleResolver {
  @Query(() => [Schedule])
  async schedules() {
    const country = "gb";
    const response = await fetch(
      `https://api.tvmaze.com//schedule?country=${country}`
    );
    const schedules = await response.json();
    return schedules;
  }
}
