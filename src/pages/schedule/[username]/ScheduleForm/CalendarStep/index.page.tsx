import { Calendar } from "@/src/components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "./styles";

export function CalendarStep() {
    const isDateSelected = true

    return (
        <Container isTimePickerOpen={isDateSelected}>
            <Calendar />

            {isDateSelected && (
                <TimePicker>
                    <TimePickerHeader>
                        terça-feira <span>20 de setembro</span>
                    </TimePickerHeader>

                    <TimePickerList>
                        <TimePickerItem>8:00h</TimePickerItem>
                        <TimePickerItem>8:00h</TimePickerItem>
                        <TimePickerItem>8:00h</TimePickerItem>
                        <TimePickerItem>8:00h</TimePickerItem>
                        <TimePickerItem>8:00h</TimePickerItem>
                        <TimePickerItem>8:00h</TimePickerItem>
                        <TimePickerItem>8:00h</TimePickerItem>
                        <TimePickerItem>8:00h</TimePickerItem>
                    </TimePickerList>
                </TimePicker>
            )}
        </Container>
    )
}
